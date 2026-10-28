import * as T from './vendor/three.module.js';

export const mobileTextures=matchMedia('(max-width:680px), (pointer:coarse)').matches;
const pngAssets=new Set(['fashion-accessories-atlas-v1','fashion-garments-atlas-v1','student-mirror-reflection-v1','tea-pearl-seal-uv-v1']);
const entries=new Map(),queue=[];
let active=0,paused=mobileTextures&&Boolean(window.sceneBoot?.deferTextures);
const later=callback=>Promise.resolve().then(callback);

// Export support does not tell us whether a browser can decode WebP.
// Try the actual image, then its JPEG/PNG counterpart if decoding fails.
export function texturePath(url){return mobileTextures?url.replace('/textures/fast/','/textures/mobile/'):url;}

function fallbackURL(url){
  const next=new URL(url,document.baseURI);
  if(next.pathname.includes('/textures/mobile/'))return next.href.replace('/textures/mobile/','/textures/fast/');
  if(!next.pathname.includes('/textures/fast/')||!next.pathname.endsWith('.webp'))return null;
  const name=next.pathname.split('/').pop().replace(/\.webp$/,'');
  next.pathname=next.pathname.replace('/textures/fast/','/textures/').replace(/\.webp$/,pngAssets.has(name)?'.png':'.jpg');
  return next.href;
}

function publish(){window.dispatchEvent(new CustomEvent('scene-textures',{detail:textureStatus()}));}
export function textureStatus(){
  const list=[...entries.values()];
  return {total:list.length,ready:list.filter(e=>e.status==='ready').length,pending:list.filter(e=>e.status==='pending'||e.status==='queued').length,
    failed:list.filter(e=>e.status==='failed').map(e=>e.url),fallbacks:list.filter(e=>e.usedFallback).length,
    decodedBytes:list.reduce((sum,e)=>sum+(e.status==='ready'?e.canvas.width*e.canvas.height*4:0),0)};
}

function imageAttempt(url){
  return new Promise((resolve,reject)=>{
    const image=new Image();image.crossOrigin='anonymous';image.decoding='async';
    const timer=setTimeout(()=>finish(new Error('Image timed out')),20000);
    function finish(error){clearTimeout(timer);image.onload=image.onerror=null;if(error){image.src='';reject(error);}else resolve(image);}
    image.onload=()=>finish();image.onerror=()=>finish(new Error('Image could not be decoded'));
    image.src=url;
  });
}

async function decode(entry){
  const fallback=fallbackURL(entry.url);
  const alternatives=[entry.url,fallback,fallback&&fallbackURL(fallback)].filter((v,i,a)=>v&&a.indexOf(v)===i);
  let lastError;
  for(let i=0;i<alternatives.length;i++){
    let image;
    try{
      image=await imageAttempt(alternatives[i]);
      const limit=mobileTextures?(entry.url.includes('/pbr/')?512:/atlas|fascia|bookcase/.test(entry.url)?1536:1024):2048;
      const scale=Math.min(1,limit/Math.max(image.naturalWidth,image.naturalHeight));
      entry.canvas.width=Math.max(1,Math.round(image.naturalWidth*scale));
      entry.canvas.height=Math.max(1,Math.round(image.naturalHeight*scale));
      entry.canvas.getContext('2d').drawImage(image,0,0,entry.canvas.width,entry.canvas.height);
      entry.canvas.complete=true;entry.canvas.naturalWidth=entry.canvas.width;entry.canvas.naturalHeight=entry.canvas.height;
      entry.usedFallback=i>0;entry.status='ready';
      for(const texture of entry.textures)texture.needsUpdate=true;
      entry.canvas.dispatchEvent(new Event('load'));
      return;
    }catch(error){lastError=error;}
    finally{if(image)image.src='';}
  }
  entry.status='failed';entry.error=String(lastError);
  entry.canvas.dispatchEvent(new Event('error'));
}

function pump(){
  if(paused)return;
  while(active<(mobileTextures?3:6)&&queue.length){
    const entry=queue.shift();entry.status='pending';active++;
    decode(entry).finally(()=>{active--;publish();pump();});
  }
}

function entryFor(url){
  const key=new URL(texturePath(url),document.baseURI).href;
  if(entries.has(key))return entries.get(key);
  const canvas=document.createElement('canvas');canvas.width=canvas.height=1;
  canvas.complete=false;canvas.naturalWidth=canvas.naturalHeight=0;
  const entry={url:key,canvas,source:new T.Source(canvas),textures:new Set(),status:'queued',usedFallback:false};
  entries.set(key,entry);queue.push(entry);later(()=>{publish();pump();});
  return entry;
}

// Canvas artwork and Three.js maps share one decoded, bounded image.
export function loadTextureImage(url){return entryFor(url).canvas;}

class SharedTextureLoader extends T.TextureLoader {
  load(url,onLoad,onProgress,onError){
    const full=this.path?this.path+url:url;
    if(!/textures\/|blender_assets\//.test(full))return super.load(url,onLoad,onProgress,onError);
    const entry=entryFor(full),texture=new T.Texture();
    texture.source=entry.source;entry.textures.add(texture);
    if(mobileTextures){texture.generateMipmaps=false;texture.minFilter=T.LinearFilter;}
    const loaded=()=>{texture.needsUpdate=true;if(onLoad)onLoad(texture);};
    if(entry.status==='ready')later(loaded);
    else entry.canvas.addEventListener('load',loaded,{once:true});
    if(onError)entry.canvas.addEventListener('error',onError,{once:true});
    return texture;
  }
}
export function createTextureLoader(manager){return new SharedTextureLoader(manager);}

export function startTextureLoading(){paused=false;pump();}

export function retryTextures(){
  for(const entry of entries.values())if(entry.status==='failed'){
    entry.status='queued';queue.push(entry);
  }
  publish();pump();
}
