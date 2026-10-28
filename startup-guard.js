(() => {
  const loading=document.querySelector('#loading');
  if(!loading)return;
  loading.style.position='fixed';loading.style.zIndex='100';
  if(matchMedia('(max-width:680px)').matches)document.querySelector('#controlPanel')?.classList.add('is-collapsed');
  document.body.classList.add('scene-is-loading');
  loading.setAttribute('role','status');loading.setAttribute('aria-live','polite');
  const decoration=document.createElement('div');decoration.className='loading-street';decoration.setAttribute('aria-hidden','true');decoration.innerHTML='<i></i><i></i><i></i><b></b>';loading.prepend(decoration);
  const meter=document.createElement('progress');meter.max=1;meter.value=0;loading.append(meter);
  const label=loading.querySelector('span');
  let lastProgress=Date.now(),reported=false,ticker;
  let rendered=false,settle,latestTextures;
  const state={stage:'downloading',message:'正在下载三维程序…',started:Date.now(),ready:false,error:null};
  const phase=message=>{if(state.ready)return;state.stage='building';state.message=message;lastProgress=Date.now();if(label&&!reported)label.textContent=message;};
  const fail=detail=>{
    if(state.ready||reported)return;
    reported=true;state.error=String(detail);clearInterval(ticker);
    loading.classList.add('load-failed');
    const spinner=loading.querySelector('.loader');if(spinner)spinner.style.display='none';
    if(label)label.textContent='街区启动未完成';
    const description=document.createElement('small');
    description.textContent='停在：'+state.message+' '+String(detail).slice(0,160);
    loading.append(description);
    const retry=document.createElement('button');retry.type='button';retry.textContent='重新打开街区';
    retry.onclick=()=>{const url=new URL(location.href);url.searchParams.set('restart',String(Date.now()));location.replace(url.href);};
    loading.append(retry);
  };
  const finish=()=>{state.ready=true;state.stage='ready';state.elapsed=Date.now()-state.started;clearInterval(ticker);document.body.classList.remove('scene-is-loading');loading.classList.add('load-complete');setTimeout(()=>loading.remove(),500);};
  const check=detail=>{
    latestTextures=detail;
    if(state.ready)return;
    clearTimeout(settle);lastProgress=Date.now();
    meter.max=Math.max(1,detail.total);meter.value=detail.ready;
    if(rendered){state.stage='textures';state.message='正在铺好街区贴图 '+detail.ready+' / '+detail.total;if(label&&!reported)label.textContent=state.message;}
    if(rendered&&!detail.pending){
      if(detail.failed.length){
        if(label)label.textContent=detail.failed.length+' 张贴图未下载完成';
        if(!loading.querySelector('.texture-retry')){const retry=document.createElement('button');retry.className='texture-retry';retry.textContent='重试贴图';retry.onclick=()=>document.querySelector('#retryTextures')?.click();loading.append(retry);}
      }else settle=setTimeout(()=>requestAnimationFrame(()=>requestAnimationFrame(finish)),650);
    }
  };
  window.addEventListener('scene-textures',event=>check(event.detail));
  const ready=()=>{rendered=true;lastProgress=Date.now();state.stage='textures';if(label)label.textContent='正在铺好街区贴图…';if(latestTextures)check(latestTextures);};
  window.sceneBoot={phase,fail,ready,state,deferTextures:true};
  if(label)label.textContent=state.message;
  window.addEventListener('error',event=>{
    if(event.target?.tagName==='SCRIPT')fail('三维程序未下载成功，请点击下方重试。');
    else if(event.target===window&&event.message)fail(event.message);
  },true);
  window.addEventListener('unhandledrejection',event=>fail(event.reason?.message||event.reason||'初始化失败'));
  ticker=setInterval(()=>{if(Date.now()-lastProgress>25000)fail('等待超过 25 秒，请点击下方重试。');},500);
})();
