(()=>{typeof CanvasRenderingContext2D<"u"&&!CanvasRenderingContext2D.prototype.roundRect&&(CanvasRenderingContext2D.prototype.roundRect=function(s,e,t,n,i=0){t<0&&(s+=t,t=-t),n<0&&(e+=n,n=-n),i=Math.min(Math.max(0,Number(Array.isArray(i)?i[0]:i)||0),t/2,n/2),this.moveTo(s+i,e),this.lineTo(s+t-i,e),this.quadraticCurveTo(s+t,e,s+t,e+i),this.lineTo(s+t,e+n-i),this.quadraticCurveTo(s+t,e+n,s+t-i,e+n),this.lineTo(s+i,e+n),this.quadraticCurveTo(s,e+n,s,e+n-i),this.lineTo(s,e+i),this.quadraticCurveTo(s,e,s+i,e),this.closePath()});var Ss=document.querySelector(".panel"),oo=document.querySelector("#mobilePanelToggle"),fa=matchMedia("(max-width: 680px)");function pc(s){Ss.classList.toggle("is-collapsed",!s),s&&(Ss.scrollTop=0),oo.setAttribute("aria-expanded",String(s)),oo.querySelector(".mobile-toggle-label").textContent=s?"\u6536\u8D77":"\u5C55\u5F00",oo.querySelector(".mobile-panel-chevron").textContent=s?"\u2304":"\u2303"}function dc(){let s=document.querySelector('[data-mobile-tab][aria-selected="true"]');document.querySelectorAll("[data-mobile-tab]").forEach(e=>{e.tabIndex=e===s?0:-1}),fa.matches?pc(!1):(Ss.classList.remove("is-collapsed"),oo.setAttribute("aria-expanded","true"))}oo.addEventListener("click",()=>{pc(Ss.classList.contains("is-collapsed"))});fa.addEventListener?fa.addEventListener("change",dc):fa.addListener(dc);dc();document.querySelectorAll(".mobile-quicknav button").forEach(s=>{s.addEventListener("click",()=>{Ss.classList.contains("is-collapsed")&&pc(!0);let e=s.dataset.mobileTab;e&&(document.querySelectorAll("[data-mobile-tab]").forEach(t=>{let n=t===s;t.classList.toggle("active",n),t.setAttribute("aria-selected",String(n)),t.tabIndex=n?0:-1}),document.querySelectorAll("[data-mobile-view]").forEach(t=>{t.classList.toggle("is-active",t.dataset.mobileView===e)}),Ss.dataset.activeMobileTab=e,Ss.scrollTop=0)})});document.querySelector(".mobile-quicknav")?.addEventListener("keydown",s=>{if(!["ArrowLeft","ArrowRight"].includes(s.key))return;let e=[...document.querySelectorAll("[data-mobile-tab]")],t=e.indexOf(document.activeElement);t<0||(s.preventDefault(),e[(t+(s.key==="ArrowRight"?1:e.length-1))%e.length].focus())});var Gs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Vs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Wm=0,df=1,Xm=2;var op=1,Gu=2,Ci=3,gi=0,xn=1,yt=2;var mi=0,br=1,Tr=2,pf=3,mf=4,qm=5,Rs=100,Ym=101,Zm=102,gf=103,xf=104,Km=200,jm=201,Jm=202,$m=203,$c=204,Qc=205,Qm=206,e0=207,t0=208,n0=209,i0=210,s0=211,r0=212,o0=213,a0=214,l0=0,c0=1,u0=2,Ya=3,h0=4,f0=5,d0=6,p0=7,ap=0,m0=1,g0=2,Qi=0,Vu=1,Hu=2,Wu=3,Go=4,x0=5,Xu=6,_f="attached",_0="detached",lp=300,wr=301,Ar=302,eu=303,tu=304,Cl=306,_n=1e3,Un=1001,wo=1002,nn=1003,Za=1004;var _o=1005;var jt=1006,qu=1007;var ns=1008;var es=1009,y0=1010,v0=1011,Yu=1012,cp=1013,Ji=1014,Pi=1015,ti=1016,up=1017,hp=1018,Ls=1020,b0=1021,kn=1023,S0=1024,M0=1025,Is=1026,Er=1027,T0=1028,fp=1029,w0=1030,dp=1031,pp=1033,mc=33776,gc=33777,xc=33778,_c=33779,yf=35840,vf=35841,bf=35842,Sf=35843,mp=36196,Mf=37492,Tf=37496,wf=37808,Af=37809,Ef=37810,Rf=37811,Cf=37812,Pf=37813,Lf=37814,If=37815,Df=37816,Uf=37817,Nf=37818,Of=37819,Ff=37820,Bf=37821,yc=36492,kf=36494,zf=36495,A0=36283,Gf=36284,Vf=36285,Hf=36286;var Rr=2300,Us=2301,vc=2302,Wf=2400,Xf=2401,qf=2402,E0=2500;var gp=0,Pl=1,Vo=2,xp=3e3,Ds=3001,R0=3200,C0=3201,_p=0,P0=1,zn="",Xe="srgb",sn="srgb-linear",Zu="display-p3",Ll="display-p3-linear",Ka="linear",Ot="srgb",ja="rec709",Ja="p3";var Js=7680;var Yf=519,L0=512,I0=513,D0=514,yp=515,U0=516,N0=517,O0=518,F0=519,nu=35044;var Zf="300 es",iu=1035,Li=2e3,$a=2001,xi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kf=1234567,yo=Math.PI/180,Cr=180/Math.PI;function Gn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mn[s&255]+mn[s>>8&255]+mn[s>>16&255]+mn[s>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[t&63|128]+mn[t>>8&255]+"-"+mn[t>>16&255]+mn[t>>24&255]+mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]).toLowerCase()}function $t(s,e,t){return Math.max(e,Math.min(t,s))}function Ku(s,e){return(s%e+e)%e}function B0(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function k0(s,e,t){return s!==e?(t-s)/(e-s):0}function vo(s,e,t){return(1-t)*s+t*e}function z0(s,e,t,n){return vo(s,e,1-Math.exp(-t*n))}function G0(s,e=1){return e-Math.abs(Ku(s,e*2)-e)}function V0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function H0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function W0(s,e){return s+Math.floor(Math.random()*(e-s+1))}function X0(s,e){return s+Math.random()*(e-s)}function q0(s){return s*(.5-Math.random())}function Y0(s){s!==void 0&&(Kf=s);let e=Kf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Z0(s){return s*yo}function K0(s){return s*Cr}function su(s){return(s&s-1)===0&&s!==0}function j0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Qa(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function J0(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),f=r((e-n)/2),d=o((e-n)/2),p=r((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*f,l*d,a*c);break;case"YZY":s.set(l*d,a*u,l*f,a*c);break;case"ZXZ":s.set(l*f,l*d,a*u,a*c);break;case"XZX":s.set(a*u,l*_,l*p,a*c);break;case"YXY":s.set(l*p,a*u,l*_,a*c);break;case"ZYZ":s.set(l*_,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function pi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function It(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var us={DEG2RAD:yo,RAD2DEG:Cr,generateUUID:Gn,clamp:$t,euclideanModulo:Ku,mapLinear:B0,inverseLerp:k0,lerp:vo,damp:z0,pingpong:G0,smoothstep:V0,smootherstep:H0,randInt:W0,randFloat:X0,randFloatSpread:q0,seededRandom:Y0,degToRad:Z0,radToDeg:K0,isPowerOfTwo:su,ceilPowerOfTwo:j0,floorPowerOfTwo:Qa,setQuaternionFromProperEuler:J0,normalize:It,denormalize:pi},he=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},bt=class s{constructor(e,t,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],p=n[5],_=n[8],x=i[0],g=i[3],m=i[6],M=i[1],v=i[4],w=i[7],z=i[2],U=i[5],D=i[8];return r[0]=o*x+a*M+l*z,r[3]=o*g+a*v+l*U,r[6]=o*m+a*w+l*D,r[1]=c*x+u*M+f*z,r[4]=c*g+u*v+f*U,r[7]=c*m+u*w+f*D,r[2]=d*x+p*M+_*z,r[5]=d*g+p*v+_*U,r[8]=d*m+p*w+_*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*r,p=c*r-o*l,_=t*f+n*d+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/_;return e[0]=f*x,e[1]=(i*c-u*n)*x,e[2]=(a*n-i*o)*x,e[3]=d*x,e[4]=(u*t-i*l)*x,e[5]=(i*r-a*t)*x,e[6]=p*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(bc.makeScale(e,t)),this}rotate(e){return this.premultiply(bc.makeRotation(-e)),this}translate(e,t){return this.premultiply(bc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},bc=new bt;function vp(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ao(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function $0(){let s=Ao("canvas");return s.style.display="block",s}var jf={};function bo(s){s in jf||(jf[s]=!0,console.warn(s))}var Jf=new bt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$f=new bt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),da={[sn]:{transfer:Ka,primaries:ja,toReference:s=>s,fromReference:s=>s},[Xe]:{transfer:Ot,primaries:ja,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ll]:{transfer:Ka,primaries:Ja,toReference:s=>s.applyMatrix3($f),fromReference:s=>s.applyMatrix3(Jf)},[Zu]:{transfer:Ot,primaries:Ja,toReference:s=>s.convertSRGBToLinear().applyMatrix3($f),fromReference:s=>s.applyMatrix3(Jf).convertLinearToSRGB()}},Q0=new Set([sn,Ll]),At={enabled:!0,_workingColorSpace:sn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Q0.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let n=da[e].toReference,i=da[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return da[s].primaries},getTransfer:function(s){return s===zn?Ka:da[s].transfer}};function Sr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Sc(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var $s,el=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{$s===void 0&&($s=Ao("canvas")),$s.width=e.width,$s.height=e.height;let n=$s.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=$s}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ao("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Sr(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Sr(t[n]/255)*255):t[n]=Sr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},eg=0,Pr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eg++}),this.uuid=Gn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Mc(i[o].image)):r.push(Mc(i[o]))}else r=Mc(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Mc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?el.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var tg=0,rn=class s extends xi{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Un,i=Un,r=jt,o=ns,a=kn,l=es,c=s.DEFAULT_ANISOTROPY,u=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tg++}),this.uuid=Gn(),this.name="",this.source=new Pr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(bo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Ds?Xe:zn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _n:e.x=e.x-Math.floor(e.x);break;case Un:e.x=e.x<0?0:1;break;case wo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _n:e.y=e.y-Math.floor(e.y);break;case Un:e.y=e.y<0?0:1;break;case wo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return bo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Xe?Ds:xp}set encoding(e){bo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ds?Xe:zn}};rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=lp;rn.DEFAULT_ANISOTROPY=1;var Ft=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],_=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-x)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+x)<.1&&Math.abs(_+g)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,w=(p+1)/2,z=(m+1)/2,U=(u+d)/4,D=(f+x)/4,Q=(_+g)/4;return v>w&&v>z?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=U/n,r=D/n):w>z?w<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(w),n=U/i,r=Q/i):z<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(z),n=D/r,i=Q/r),this.set(n,i,r,t),this}let M=Math.sqrt((g-_)*(g-_)+(f-x)*(f-x)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(g-_)/M,this.y=(f-x)/M,this.z=(d-u)/M,this.w=Math.acos((c+p+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ru=class extends xi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t);let i={width:e,height:t,depth:1};n.encoding!==void 0&&(bo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ds?Xe:zn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new rn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Pr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},hn=class extends ru{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},tl=class extends rn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=nn,this.minFilter=nn,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ou=class extends rn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=nn,this.minFilter=nn,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var En=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3],d=r[o+0],p=r[o+1],_=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=x;return}if(f!==x||l!==d||c!==p||u!==_){let g=1-a,m=l*d+c*p+u*_+f*x,M=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){let z=Math.sqrt(v),U=Math.atan2(z,m*M);g=Math.sin(g*U)/z,a=Math.sin(a*U)/z}let w=a*M;if(l=l*g+d*w,c=c*g+p*w,u=u*g+_*w,f=f*g+x*w,g===1-a){let z=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=z,c*=z,u*=z,f*=z}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=r[o],d=r[o+1],p=r[o+2],_=r[o+3];return e[t]=a*_+u*f+l*p-c*d,e[t+1]=l*_+u*d+c*f-a*p,e[t+2]=c*_+u*p+a*d-l*f,e[t+3]=u*_-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),f=a(r/2),d=l(n/2),p=l(i/2),_=l(r/2);switch(o){case"XYZ":this._x=d*u*f+c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f-d*p*_;break;case"YXZ":this._x=d*u*f+c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f+d*p*_;break;case"ZXY":this._x=d*u*f-c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f-d*p*_;break;case"ZYX":this._x=d*u*f-c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f+d*p*_;break;case"YZX":this._x=d*u*f+c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f-d*p*_;break;case"XZY":this._x=d*u*f-c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=n+a+f;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-i)*p}else if(n>a&&n>f){let p=2*Math.sqrt(1+n-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+c)/p}else if(a>f){let p=2*Math.sqrt(1+a-n-f);this._w=(r-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+f-n-a);this._w=(o-i)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($t(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-r*i),f=2*(r*n-o*t);return this.x=t+l*c+o*f-a*u,this.y=n+l*u+a*c-r*f,this.z=i+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Tc.copy(this).projectOnVector(e),this.sub(Tc)}reflect(e){return this.sub(Tc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Tc=new L,Qf=new En,Vn=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Jn):Jn.fromBufferAttribute(r,o),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pa.copy(n.boundingBox)),pa.applyMatrix4(e.matrixWorld),this.union(pa)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ao),ma.subVectors(this.max,ao),Qs.subVectors(e.a,ao),er.subVectors(e.b,ao),tr.subVectors(e.c,ao),qi.subVectors(er,Qs),Yi.subVectors(tr,er),Ms.subVectors(Qs,tr);let t=[0,-qi.z,qi.y,0,-Yi.z,Yi.y,0,-Ms.z,Ms.y,qi.z,0,-qi.x,Yi.z,0,-Yi.x,Ms.z,0,-Ms.x,-qi.y,qi.x,0,-Yi.y,Yi.x,0,-Ms.y,Ms.x,0];return!wc(t,Qs,er,tr,ma)||(t=[1,0,0,0,1,0,0,0,1],!wc(t,Qs,er,tr,ma))?!1:(ga.crossVectors(qi,Yi),t=[ga.x,ga.y,ga.z],wc(t,Qs,er,tr,ma))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Mi=[new L,new L,new L,new L,new L,new L,new L,new L],Jn=new L,pa=new Vn,Qs=new L,er=new L,tr=new L,qi=new L,Yi=new L,Ms=new L,ao=new L,ma=new L,ga=new L,Ts=new L;function wc(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ts.fromArray(s,r);let a=i.x*Math.abs(Ts.x)+i.y*Math.abs(Ts.y)+i.z*Math.abs(Ts.z),l=e.dot(Ts),c=t.dot(Ts),u=n.dot(Ts);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var ng=new Vn,lo=new L,Ac=new L,Nn=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):ng.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lo.subVectors(e,this.center);let t=lo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(lo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ac.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lo.copy(e.center).add(Ac)),this.expandByPoint(lo.copy(e.center).sub(Ac))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ti=new L,Ec=new L,xa=new L,Zi=new L,Rc=new L,_a=new L,Cc=new L,Ii=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,t),Ti.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ec.copy(e).add(t).multiplyScalar(.5),xa.copy(t).sub(e).normalize(),Zi.copy(this.origin).sub(Ec);let r=e.distanceTo(t)*.5,o=-this.direction.dot(xa),a=Zi.dot(this.direction),l=-Zi.dot(xa),c=Zi.lengthSq(),u=Math.abs(1-o*o),f,d,p,_;if(u>0)if(f=o*l-a,d=o*a-l,_=r*u,f>=0)if(d>=-_)if(d<=_){let x=1/u;f*=x,d*=x,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Ec).addScaledVector(xa,d),p}intersectSphere(e,t){Ti.subVectors(e.center,this.origin);let n=Ti.dot(this.direction),i=Ti.dot(Ti)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,t,n,i,r){Rc.subVectors(t,e),_a.subVectors(n,e),Cc.crossVectors(Rc,_a);let o=this.direction.dot(Cc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zi.subVectors(this.origin,e);let l=a*this.direction.dot(_a.crossVectors(Zi,_a));if(l<0)return null;let c=a*this.direction.dot(Rc.cross(Zi));if(c<0||l+c>o)return null;let u=-a*Zi.dot(Cc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},pt=class s{constructor(e,t,n,i,r,o,a,l,c,u,f,d,p,_,x,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,u,f,d,p,_,x,g)}set(e,t,n,i,r,o,a,l,c,u,f,d,p,_,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=d,m[3]=p,m[7]=_,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/nr.setFromMatrixColumn(e,0).length(),r=1/nr.setFromMatrixColumn(e,1).length(),o=1/nr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let d=o*u,p=o*f,_=a*u,x=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+_*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=_+p*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,p=l*f,_=c*u,x=c*f;t[0]=d+x*a,t[4]=_*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-_,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,p=l*f,_=c*u,x=c*f;t[0]=d-x*a,t[4]=-o*f,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,p=o*f,_=a*u,x=a*f;t[0]=l*u,t[4]=_*c-p,t[8]=d*c+x,t[1]=l*f,t[5]=x*c+d,t[9]=p*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,p=o*c,_=a*l,x=a*c;t[0]=l*u,t[4]=x-d*f,t[8]=_*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+_,t[10]=d-x*f}else if(e.order==="XZY"){let d=o*l,p=o*c,_=a*l,x=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+x,t[5]=o*u,t[9]=p*f-_,t[2]=_*f-p,t[6]=a*u,t[10]=x*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ig,e,sg)}lookAt(e,t,n){let i=this.elements;return In.subVectors(e,t),In.lengthSq()===0&&(In.z=1),In.normalize(),Ki.crossVectors(n,In),Ki.lengthSq()===0&&(Math.abs(n.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),Ki.crossVectors(n,In)),Ki.normalize(),ya.crossVectors(In,Ki),i[0]=Ki.x,i[4]=ya.x,i[8]=In.x,i[1]=Ki.y,i[5]=ya.y,i[9]=In.y,i[2]=Ki.z,i[6]=ya.z,i[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],p=n[13],_=n[2],x=n[6],g=n[10],m=n[14],M=n[3],v=n[7],w=n[11],z=n[15],U=i[0],D=i[4],Q=i[8],E=i[12],P=i[1],ne=i[5],J=i[9],Le=i[13],B=i[2],se=i[6],pe=i[10],$=i[14],K=i[3],te=i[7],me=i[11],be=i[15];return r[0]=o*U+a*P+l*B+c*K,r[4]=o*D+a*ne+l*se+c*te,r[8]=o*Q+a*J+l*pe+c*me,r[12]=o*E+a*Le+l*$+c*be,r[1]=u*U+f*P+d*B+p*K,r[5]=u*D+f*ne+d*se+p*te,r[9]=u*Q+f*J+d*pe+p*me,r[13]=u*E+f*Le+d*$+p*be,r[2]=_*U+x*P+g*B+m*K,r[6]=_*D+x*ne+g*se+m*te,r[10]=_*Q+x*J+g*pe+m*me,r[14]=_*E+x*Le+g*$+m*be,r[3]=M*U+v*P+w*B+z*K,r[7]=M*D+v*ne+w*se+z*te,r[11]=M*Q+v*J+w*pe+z*me,r[15]=M*E+v*Le+w*$+z*be,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],_=e[3],x=e[7],g=e[11],m=e[15];return _*(+r*l*f-i*c*f-r*a*d+n*c*d+i*a*p-n*l*p)+x*(+t*l*p-t*c*d+r*o*d-i*o*p+i*c*u-r*l*u)+g*(+t*c*f-t*a*p-r*o*f+n*o*p+r*a*u-n*c*u)+m*(-i*a*u-t*l*f+t*a*d+i*o*f-n*o*d+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],_=e[12],x=e[13],g=e[14],m=e[15],M=f*g*c-x*d*c+x*l*p-a*g*p-f*l*m+a*d*m,v=_*d*c-u*g*c-_*l*p+o*g*p+u*l*m-o*d*m,w=u*x*c-_*f*c+_*a*p-o*x*p-u*a*m+o*f*m,z=_*f*l-u*x*l-_*a*d+o*x*d+u*a*g-o*f*g,U=t*M+n*v+i*w+r*z;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/U;return e[0]=M*D,e[1]=(x*d*r-f*g*r-x*i*p+n*g*p+f*i*m-n*d*m)*D,e[2]=(a*g*r-x*l*r+x*i*c-n*g*c-a*i*m+n*l*m)*D,e[3]=(f*l*r-a*d*r-f*i*c+n*d*c+a*i*p-n*l*p)*D,e[4]=v*D,e[5]=(u*g*r-_*d*r+_*i*p-t*g*p-u*i*m+t*d*m)*D,e[6]=(_*l*r-o*g*r-_*i*c+t*g*c+o*i*m-t*l*m)*D,e[7]=(o*d*r-u*l*r+u*i*c-t*d*c-o*i*p+t*l*p)*D,e[8]=w*D,e[9]=(_*f*r-u*x*r-_*n*p+t*x*p+u*n*m-t*f*m)*D,e[10]=(o*x*r-_*a*r+_*n*c-t*x*c-o*n*m+t*a*m)*D,e[11]=(u*a*r-o*f*r-u*n*c+t*f*c+o*n*p-t*a*p)*D,e[12]=z*D,e[13]=(u*x*i-_*f*i+_*n*d-t*x*d-u*n*g+t*f*g)*D,e[14]=(_*a*i-o*x*i-_*n*l+t*x*l+o*n*g-t*a*g)*D,e[15]=(o*f*i-u*a*i+u*n*l-t*f*l-o*n*d+t*a*d)*D,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,f=a+a,d=r*c,p=r*u,_=r*f,x=o*u,g=o*f,m=a*f,M=l*c,v=l*u,w=l*f,z=n.x,U=n.y,D=n.z;return i[0]=(1-(x+m))*z,i[1]=(p+w)*z,i[2]=(_-v)*z,i[3]=0,i[4]=(p-w)*U,i[5]=(1-(d+m))*U,i[6]=(g+M)*U,i[7]=0,i[8]=(_+v)*D,i[9]=(g-M)*D,i[10]=(1-(d+x))*D,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=nr.set(i[0],i[1],i[2]).length(),o=nr.set(i[4],i[5],i[6]).length(),a=nr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],$n.copy(this);let c=1/r,u=1/o,f=1/a;return $n.elements[0]*=c,$n.elements[1]*=c,$n.elements[2]*=c,$n.elements[4]*=u,$n.elements[5]*=u,$n.elements[6]*=u,$n.elements[8]*=f,$n.elements[9]*=f,$n.elements[10]*=f,t.setFromRotationMatrix($n),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Li){let l=this.elements,c=2*r/(t-e),u=2*r/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i),p,_;if(a===Li)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===$a)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Li){let l=this.elements,c=1/(t-e),u=1/(n-i),f=1/(o-r),d=(t+e)*c,p=(n+i)*u,_,x;if(a===Li)_=(o+r)*f,x=-2*f;else if(a===$a)_=r*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},nr=new L,$n=new pt,ig=new L(0,0,0),sg=new L(1,1,1),Ki=new L,ya=new L,In=new L,ed=new pt,td=new En,nl=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],f=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin($t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin($t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-$t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ed.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ed,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return td.setFromEuler(this),this.setFromQuaternion(td,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};nl.DEFAULT_ORDER="XYZ";var Eo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},rg=0,nd=new L,ir=new En,wi=new pt,va=new L,co=new L,og=new L,ag=new En,id=new L(1,0,0),sd=new L(0,1,0),rd=new L(0,0,1),lg={type:"added"},cg={type:"removed"},Ht=class s extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rg++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new L,t=new nl,n=new En,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new pt},normalMatrix:{value:new bt}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Eo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ir.setFromAxisAngle(e,t),this.quaternion.multiply(ir),this}rotateOnWorldAxis(e,t){return ir.setFromAxisAngle(e,t),this.quaternion.premultiply(ir),this}rotateX(e){return this.rotateOnAxis(id,e)}rotateY(e){return this.rotateOnAxis(sd,e)}rotateZ(e){return this.rotateOnAxis(rd,e)}translateOnAxis(e,t){return nd.copy(e).applyQuaternion(this.quaternion),this.position.add(nd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(id,e)}translateY(e){return this.translateOnAxis(sd,e)}translateZ(e){return this.translateOnAxis(rd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?va.copy(e):va.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(co,va,this.up):wi.lookAt(va,co,this.up),this.quaternion.setFromRotationMatrix(wi),i&&(wi.extractRotation(i.matrixWorld),ir.setFromRotationMatrix(wi),this.quaternion.premultiply(ir.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(lg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cg)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(wi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,e,og),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,ag,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++){let a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Ht.DEFAULT_UP=new L(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Qn=new L,Ai=new L,Pc=new L,Ei=new L,sr=new L,rr=new L,od=new L,Lc=new L,Ic=new L,Dc=new L,ba=!1,Ps=class s{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Qn.subVectors(e,t),i.cross(Qn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Qn.subVectors(i,t),Ai.subVectors(n,t),Pc.subVectors(e,t);let o=Qn.dot(Qn),a=Qn.dot(Ai),l=Qn.dot(Pc),c=Ai.dot(Ai),u=Ai.dot(Pc),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let d=1/f,p=(c*l-a*u)*d,_=(o*u-a*l)*d;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getUV(e,t,n,i,r,o,a,l){return ba===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ba=!0),this.getInterpolation(e,t,n,i,r,o,a,l)}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ei.x),l.addScaledVector(o,Ei.y),l.addScaledVector(a,Ei.z),l)}static isFrontFacing(e,t,n,i){return Qn.subVectors(n,t),Ai.subVectors(e,t),Qn.cross(Ai).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),Qn.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return ba===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ba=!0),s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;sr.subVectors(i,n),rr.subVectors(r,n),Lc.subVectors(e,n);let l=sr.dot(Lc),c=rr.dot(Lc);if(l<=0&&c<=0)return t.copy(n);Ic.subVectors(e,i);let u=sr.dot(Ic),f=rr.dot(Ic);if(u>=0&&f<=u)return t.copy(i);let d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(sr,o);Dc.subVectors(e,r);let p=sr.dot(Dc),_=rr.dot(Dc);if(_>=0&&p<=_)return t.copy(r);let x=p*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(rr,a);let g=u*_-p*f;if(g<=0&&f-u>=0&&p-_>=0)return od.subVectors(r,i),a=(f-u)/(f-u+(p-_)),t.copy(i).addScaledVector(od,a);let m=1/(g+x+d);return o=x*m,a=d*m,t.copy(n).addScaledVector(sr,o).addScaledVector(rr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},bp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},Sa={h:0,s:0,l:0};function Uc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var qe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=At.workingColorSpace){return this.r=e,this.g=t,this.b=n,At.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=At.workingColorSpace){if(e=Ku(e,1),t=$t(t,0,1),n=$t(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Uc(o,r,e+1/3),this.g=Uc(o,r,e),this.b=Uc(o,r,e-1/3)}return At.toWorkingColorSpace(this,i),this}setStyle(e,t=Xe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xe){let n=bp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Sr(e.r),this.g=Sr(e.g),this.b=Sr(e.b),this}copyLinearToSRGB(e){return this.r=Sc(e.r),this.g=Sc(e.g),this.b=Sc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xe){return At.fromWorkingColorSpace(gn.copy(this),e),Math.round($t(gn.r*255,0,255))*65536+Math.round($t(gn.g*255,0,255))*256+Math.round($t(gn.b*255,0,255))}getHexString(e=Xe){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.fromWorkingColorSpace(gn.copy(this),t);let n=gn.r,i=gn.g,r=gn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=At.workingColorSpace){return At.fromWorkingColorSpace(gn.copy(this),t),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=Xe){At.fromWorkingColorSpace(gn.copy(this),e);let t=gn.r,n=gn.g,i=gn.b;return e!==Xe?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+t,ji.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ji),e.getHSL(Sa);let n=vo(ji.h,Sa.h,t),i=vo(ji.s,Sa.s,t),r=vo(ji.l,Sa.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gn=new qe;qe.NAMES=bp;var ug=0,Rn=class extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ug++}),this.uuid=Gn(),this.name="",this.type="Material",this.blending=br,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$c,this.blendDst=Qc,this.blendEquation=Rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Ya,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Js,this.stencilZFail=Js,this.stencilZPass=Js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==br&&(n.blending=this.blending),this.side!==gi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==$c&&(n.blendSrc=this.blendSrc),this.blendDst!==Qc&&(n.blendDst=this.blendDst),this.blendEquation!==Rs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ya&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Js&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Js&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Js&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Zt=class extends Rn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ap,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Jt=new L,Ma=new he,Vt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=nu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ma.fromBufferAttribute(this,t),Ma.applyMatrix3(e),this.setXY(t,Ma.x,Ma.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=pi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=It(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pi(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pi(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pi(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),i=It(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),i=It(i,this.array),r=It(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nu&&(e.usage=this.usage),e}};var il=class extends Vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var sl=class extends Vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var xt=class extends Vt{constructor(e,t,n){super(new Float32Array(e),t,n)}};var hg=0,Bn=new pt,Nc=new Ht,or=new L,Dn=new Vn,uo=new Vn,cn=new L,Dt=class s extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hg++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vp(e)?sl:il)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new bt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,t,n){return Bn.makeTranslation(e,t,n),this.applyMatrix4(Bn),this}scale(e,t,n){return Bn.makeScale(e,t,n),this.applyMatrix4(Bn),this}lookAt(e){return Nc.lookAt(e),Nc.updateMatrix(),this.applyMatrix4(Nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(or).negate(),this.translate(or.x,or.y,or.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new xt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Dn.setFromBufferAttribute(r),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(Dn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];uo.setFromBufferAttribute(a),this.morphTargetsRelative?(cn.addVectors(Dn.min,uo.min),Dn.expandByPoint(cn),cn.addVectors(Dn.max,uo.max),Dn.expandByPoint(cn)):(Dn.expandByPoint(uo.min),Dn.expandByPoint(uo.max))}Dn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)cn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(cn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)cn.fromBufferAttribute(a,c),l&&(or.fromBufferAttribute(e,c),cn.add(or)),i=Math.max(i,n.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vt(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],u=[];for(let P=0;P<a;P++)c[P]=new L,u[P]=new L;let f=new L,d=new L,p=new L,_=new he,x=new he,g=new he,m=new L,M=new L;function v(P,ne,J){f.fromArray(i,P*3),d.fromArray(i,ne*3),p.fromArray(i,J*3),_.fromArray(o,P*2),x.fromArray(o,ne*2),g.fromArray(o,J*2),d.sub(f),p.sub(f),x.sub(_),g.sub(_);let Le=1/(x.x*g.y-g.x*x.y);isFinite(Le)&&(m.copy(d).multiplyScalar(g.y).addScaledVector(p,-x.y).multiplyScalar(Le),M.copy(p).multiplyScalar(x.x).addScaledVector(d,-g.x).multiplyScalar(Le),c[P].add(m),c[ne].add(m),c[J].add(m),u[P].add(M),u[ne].add(M),u[J].add(M))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let P=0,ne=w.length;P<ne;++P){let J=w[P],Le=J.start,B=J.count;for(let se=Le,pe=Le+B;se<pe;se+=3)v(n[se+0],n[se+1],n[se+2])}let z=new L,U=new L,D=new L,Q=new L;function E(P){D.fromArray(r,P*3),Q.copy(D);let ne=c[P];z.copy(ne),z.sub(D.multiplyScalar(D.dot(ne))).normalize(),U.crossVectors(Q,ne);let Le=U.dot(u[P])<0?-1:1;l[P*4]=z.x,l[P*4+1]=z.y,l[P*4+2]=z.z,l[P*4+3]=Le}for(let P=0,ne=w.length;P<ne;++P){let J=w[P],Le=J.start,B=J.count;for(let se=Le,pe=Le+B;se<pe;se+=3)E(n[se+0]),E(n[se+1]),E(n[se+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Vt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let i=new L,r=new L,o=new L,a=new L,l=new L,c=new L,u=new L,f=new L;if(e)for(let d=0,p=e.count;d<p;d+=3){let _=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),u.subVectors(o,r),f.subVectors(i,r),u.cross(f),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),f.subVectors(i,r),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u),p=0,_=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let m=0;m<u;m++)d[_++]=c[p++]}return new Vt(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){let d=c[u],p=e(d,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){let p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],f=r[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ad=new pt,ws=new Ii,Ta=new Nn,ld=new L,ar=new L,lr=new L,cr=new L,Oc=new L,wa=new L,Aa=new he,Ea=new he,Ra=new he,cd=new L,ud=new L,hd=new L,Ca=new L,Pa=new L,ot=class extends Ht{constructor(e=new Dt,t=new Zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){wa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],f=r[l];u!==0&&(Oc.fromBufferAttribute(f,e),o?wa.addScaledVector(Oc,u):wa.addScaledVector(Oc.sub(t),u))}t.add(wa)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ta.copy(n.boundingSphere),Ta.applyMatrix4(r),ws.copy(e.ray).recast(e.near),!(Ta.containsPoint(ws.origin)===!1&&(ws.intersectSphere(Ta,ld)===null||ws.origin.distanceToSquared(ld)>(e.far-e.near)**2))&&(ad.copy(r).invert(),ws.copy(e.ray).applyMatrix4(ad),!(n.boundingBox!==null&&ws.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ws)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){let g=d[_],m=o[g.materialIndex],M=Math.max(g.start,p.start),v=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let w=M,z=v;w<z;w+=3){let U=a.getX(w),D=a.getX(w+1),Q=a.getX(w+2);i=La(this,m,e,n,c,u,f,U,D,Q),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let _=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let g=_,m=x;g<m;g+=3){let M=a.getX(g),v=a.getX(g+1),w=a.getX(g+2);i=La(this,o,e,n,c,u,f,M,v,w),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){let g=d[_],m=o[g.materialIndex],M=Math.max(g.start,p.start),v=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let w=M,z=v;w<z;w+=3){let U=w,D=w+1,Q=w+2;i=La(this,m,e,n,c,u,f,U,D,Q),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let g=_,m=x;g<m;g+=3){let M=g,v=g+1,w=g+2;i=La(this,o,e,n,c,u,f,M,v,w),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function fg(s,e,t,n,i,r,o,a){let l;if(e.side===xn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===gi,a),l===null)return null;Pa.copy(a),Pa.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Pa);return c<t.near||c>t.far?null:{distance:c,point:Pa.clone(),object:s}}function La(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,ar),s.getVertexPosition(l,lr),s.getVertexPosition(c,cr);let u=fg(s,e,t,n,ar,lr,cr,Ca);if(u){i&&(Aa.fromBufferAttribute(i,a),Ea.fromBufferAttribute(i,l),Ra.fromBufferAttribute(i,c),u.uv=Ps.getInterpolation(Ca,ar,lr,cr,Aa,Ea,Ra,new he)),r&&(Aa.fromBufferAttribute(r,a),Ea.fromBufferAttribute(r,l),Ra.fromBufferAttribute(r,c),u.uv1=Ps.getInterpolation(Ca,ar,lr,cr,Aa,Ea,Ra,new he),u.uv2=u.uv1),o&&(cd.fromBufferAttribute(o,a),ud.fromBufferAttribute(o,l),hd.fromBufferAttribute(o,c),u.normal=Ps.getInterpolation(Ca,ar,lr,cr,cd,ud,hd,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new L,materialIndex:0};Ps.getNormal(ar,lr,cr,f.normal),u.face=f}return u}var bn=class s extends Dt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],f=[],d=0,p=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(u,3)),this.setAttribute("uv",new xt(f,2));function _(x,g,m,M,v,w,z,U,D,Q,E){let P=w/D,ne=z/Q,J=w/2,Le=z/2,B=U/2,se=D+1,pe=Q+1,$=0,K=0,te=new L;for(let me=0;me<pe;me++){let be=me*ne-Le;for(let de=0;de<se;de++){let ie=de*P-J;te[x]=ie*M,te[g]=be*v,te[m]=B,c.push(te.x,te.y,te.z),te[x]=0,te[g]=0,te[m]=U>0?1:-1,u.push(te.x,te.y,te.z),f.push(de/D),f.push(1-me/Q),$+=1}}for(let me=0;me<Q;me++)for(let be=0;be<D;be++){let de=d+be+se*me,ie=d+be+se*(me+1),F=d+(be+1)+se*(me+1),Se=d+(be+1)+se*me;l.push(de,ie,Se),l.push(ie,F,Se),K+=6}a.addGroup(p,K,E),p+=K,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Lr(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function vn(s){let e={};for(let t=0;t<s.length;t++){let n=Lr(s[t]);for(let i in n)e[i]=n[i]}return e}function dg(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Sp(s){return s.getRenderTarget()===null?s.outputColorSpace:At.workingColorSpace}var hs={clone:Lr,merge:vn},pg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,en=class extends Rn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pg,this.fragmentShader=mg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Lr(e.uniforms),this.uniformsGroups=dg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},rl=class extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=Li}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Qt=class extends rl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Cr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(yo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cr*2*Math.atan(Math.tan(yo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(yo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ur=-90,hr=1,au=class extends Ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Qt(ur,hr,e,t);i.layers=this.layers,this.add(i);let r=new Qt(ur,hr,e,t);r.layers=this.layers,this.add(r);let o=new Qt(ur,hr,e,t);o.layers=this.layers,this.add(o);let a=new Qt(ur,hr,e,t);a.layers=this.layers,this.add(a);let l=new Qt(ur,hr,e,t);l.layers=this.layers,this.add(l);let c=new Qt(ur,hr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Li)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$a)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(f,d,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},ol=class extends rn{constructor(e,t,n,i,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:wr,super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},lu=class extends hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(bo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ds?Xe:zn),this.texture=new ol(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new bn(5,5,5),r=new en({name:"CubemapFromEquirect",uniforms:Lr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xn,blending:mi});r.uniforms.tEquirect.value=t;let o=new ot(i,r),a=t.minFilter;return t.minFilter===ns&&(t.minFilter=jt),new au(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},Fc=new L,gg=new L,xg=new bt,ei=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Fc.subVectors(n,t).cross(gg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Fc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||xg.getNormalMatrix(e),i=this.coplanarPoint(Fc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},As=new Nn,Ia=new L,Ro=class{constructor(e=new ei,t=new ei,n=new ei,i=new ei,r=new ei,o=new ei){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Li){let n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],f=i[6],d=i[7],p=i[8],_=i[9],x=i[10],g=i[11],m=i[12],M=i[13],v=i[14],w=i[15];if(n[0].setComponents(l-r,d-c,g-p,w-m).normalize(),n[1].setComponents(l+r,d+c,g+p,w+m).normalize(),n[2].setComponents(l+o,d+u,g+_,w+M).normalize(),n[3].setComponents(l-o,d-u,g-_,w-M).normalize(),n[4].setComponents(l-a,d-f,g-x,w-v).normalize(),t===Li)n[5].setComponents(l+a,d+f,g+x,w+v).normalize();else if(t===$a)n[5].setComponents(a,f,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),As.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),As.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(As)}intersectsSprite(e){return As.center.set(0,0,0),As.radius=.7071067811865476,As.applyMatrix4(e.matrixWorld),this.intersectsSphere(As)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Ia.x=i.normal.x>0?e.max.x:e.min.x,Ia.y=i.normal.y>0?e.max.y:e.min.y,Ia.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ia)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Mp(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function _g(s,e){let t=e.isWebGL2,n=new WeakMap;function i(c,u){let f=c.array,d=c.usage,p=f.byteLength,_=s.createBuffer();s.bindBuffer(u,_),s.bufferData(u,f,d),c.onUploadCallback();let x;if(f instanceof Float32Array)x=s.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=s.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=s.SHORT;else if(f instanceof Uint32Array)x=s.UNSIGNED_INT;else if(f instanceof Int32Array)x=s.INT;else if(f instanceof Int8Array)x=s.BYTE;else if(f instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,u,f){let d=u.array,p=u._updateRange,_=u.updateRanges;if(s.bindBuffer(f,c),p.count===-1&&_.length===0&&s.bufferSubData(f,0,d),_.length!==0){for(let x=0,g=_.length;x<g;x++){let m=_[x];t?s.bufferSubData(f,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):s.bufferSubData(f,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}u.clearUpdateRanges()}p.count!==-1&&(t?s.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):s.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);u&&(s.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){let d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let f=n.get(c);if(f===void 0)n.set(c,i(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,c,u),f.version=c.version}}return{get:o,remove:a,update:l}}var Wt=class s extends Dt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,f=e/a,d=t/l,p=[],_=[],x=[],g=[];for(let m=0;m<u;m++){let M=m*d-o;for(let v=0;v<c;v++){let w=v*f-r;_.push(w,-M,0),x.push(0,0,1),g.push(v/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){let v=M+c*m,w=M+c*(m+1),z=M+1+c*(m+1),U=M+1+c*m;p.push(v,w,U),p.push(w,z,U)}this.setIndex(p),this.setAttribute("position",new xt(_,3)),this.setAttribute("normal",new xt(x,3)),this.setAttribute("uv",new xt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},yg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,bg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Tg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ag=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Eg=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Rg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Cg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ig=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Dg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ug=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Ng=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Og=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Gg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Vg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Hg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Wg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Xg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kg="gl_FragColor = linearToOutputTexel( gl_FragColor );",jg=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Jg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$g=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ex=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,nx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ix=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ox=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ax=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ux=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,fx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,dx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,px=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_x=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,wx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ax=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ex=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Cx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Px=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ix=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ux=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Nx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ox=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Fx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Bx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Vx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Zx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$x=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,e_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,t_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,n_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,i_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,s_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,r_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,o_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,a_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,l_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,c_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,u_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,h_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,f_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,d_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,p_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,m_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,g_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,x_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,__=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,y_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,w_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,A_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,E_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,R_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,C_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,L_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,I_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,D_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,N_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,F_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,k_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,z_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,H_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,X_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Y_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Z_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,j_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,J_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_t={alphahash_fragment:yg,alphahash_pars_fragment:vg,alphamap_fragment:bg,alphamap_pars_fragment:Sg,alphatest_fragment:Mg,alphatest_pars_fragment:Tg,aomap_fragment:wg,aomap_pars_fragment:Ag,batching_pars_vertex:Eg,batching_vertex:Rg,begin_vertex:Cg,beginnormal_vertex:Pg,bsdfs:Lg,iridescence_fragment:Ig,bumpmap_pars_fragment:Dg,clipping_planes_fragment:Ug,clipping_planes_pars_fragment:Ng,clipping_planes_pars_vertex:Og,clipping_planes_vertex:Fg,color_fragment:Bg,color_pars_fragment:kg,color_pars_vertex:zg,color_vertex:Gg,common:Vg,cube_uv_reflection_fragment:Hg,defaultnormal_vertex:Wg,displacementmap_pars_vertex:Xg,displacementmap_vertex:qg,emissivemap_fragment:Yg,emissivemap_pars_fragment:Zg,colorspace_fragment:Kg,colorspace_pars_fragment:jg,envmap_fragment:Jg,envmap_common_pars_fragment:$g,envmap_pars_fragment:Qg,envmap_pars_vertex:ex,envmap_physical_pars_fragment:fx,envmap_vertex:tx,fog_vertex:nx,fog_pars_vertex:ix,fog_fragment:sx,fog_pars_fragment:rx,gradientmap_pars_fragment:ox,lightmap_fragment:ax,lightmap_pars_fragment:lx,lights_lambert_fragment:cx,lights_lambert_pars_fragment:ux,lights_pars_begin:hx,lights_toon_fragment:dx,lights_toon_pars_fragment:px,lights_phong_fragment:mx,lights_phong_pars_fragment:gx,lights_physical_fragment:xx,lights_physical_pars_fragment:_x,lights_fragment_begin:yx,lights_fragment_maps:vx,lights_fragment_end:bx,logdepthbuf_fragment:Sx,logdepthbuf_pars_fragment:Mx,logdepthbuf_pars_vertex:Tx,logdepthbuf_vertex:wx,map_fragment:Ax,map_pars_fragment:Ex,map_particle_fragment:Rx,map_particle_pars_fragment:Cx,metalnessmap_fragment:Px,metalnessmap_pars_fragment:Lx,morphcolor_vertex:Ix,morphnormal_vertex:Dx,morphtarget_pars_vertex:Ux,morphtarget_vertex:Nx,normal_fragment_begin:Ox,normal_fragment_maps:Fx,normal_pars_fragment:Bx,normal_pars_vertex:kx,normal_vertex:zx,normalmap_pars_fragment:Gx,clearcoat_normal_fragment_begin:Vx,clearcoat_normal_fragment_maps:Hx,clearcoat_pars_fragment:Wx,iridescence_pars_fragment:Xx,opaque_fragment:qx,packing:Yx,premultiplied_alpha_fragment:Zx,project_vertex:Kx,dithering_fragment:jx,dithering_pars_fragment:Jx,roughnessmap_fragment:$x,roughnessmap_pars_fragment:Qx,shadowmap_pars_fragment:e_,shadowmap_pars_vertex:t_,shadowmap_vertex:n_,shadowmask_pars_fragment:i_,skinbase_vertex:s_,skinning_pars_vertex:r_,skinning_vertex:o_,skinnormal_vertex:a_,specularmap_fragment:l_,specularmap_pars_fragment:c_,tonemapping_fragment:u_,tonemapping_pars_fragment:h_,transmission_fragment:f_,transmission_pars_fragment:d_,uv_pars_fragment:p_,uv_pars_vertex:m_,uv_vertex:g_,worldpos_vertex:x_,background_vert:__,background_frag:y_,backgroundCube_vert:v_,backgroundCube_frag:b_,cube_vert:S_,cube_frag:M_,depth_vert:T_,depth_frag:w_,distanceRGBA_vert:A_,distanceRGBA_frag:E_,equirect_vert:R_,equirect_frag:C_,linedashed_vert:P_,linedashed_frag:L_,meshbasic_vert:I_,meshbasic_frag:D_,meshlambert_vert:U_,meshlambert_frag:N_,meshmatcap_vert:O_,meshmatcap_frag:F_,meshnormal_vert:B_,meshnormal_frag:k_,meshphong_vert:z_,meshphong_frag:G_,meshphysical_vert:V_,meshphysical_frag:H_,meshtoon_vert:W_,meshtoon_frag:X_,points_vert:q_,points_frag:Y_,shadow_vert:Z_,shadow_frag:K_,sprite_vert:j_,sprite_frag:J_},Be={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new bt},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new bt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new bt},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0},uvTransform:{value:new bt}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new bt},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0}}},di={basic:{uniforms:vn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:vn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new qe(0)}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:vn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:vn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:vn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new qe(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:vn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:vn([Be.points,Be.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:vn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:vn([Be.common,Be.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:vn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:vn([Be.sprite,Be.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distanceRGBA:{uniforms:vn([Be.common,Be.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distanceRGBA_vert,fragmentShader:_t.distanceRGBA_frag},shadow:{uniforms:vn([Be.lights,Be.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};di.physical={uniforms:vn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new bt},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new bt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new bt},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new bt},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new bt},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new bt},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new bt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};var Da={r:0,b:0,g:0};function $_(s,e,t,n,i,r,o){let a=new qe(0),l=r===!0?0:1,c,u,f=null,d=0,p=null;function _(g,m){let M=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v===null?x(a,l):v&&v.isColor&&(x(v,1),M=!0);let w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||M)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Cl)?(u===void 0&&(u=new ot(new bn(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:Lr(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(z,U,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=At.getTransfer(v.colorSpace)!==Ot,(f!==v||d!==v.version||p!==s.toneMapping)&&(u.material.needsUpdate=!0,f=v,d=v.version,p=s.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ot(new Wt(2,2),new en({name:"BackgroundMaterial",uniforms:Lr(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=At.getTransfer(v.colorSpace)!==Ot,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||d!==v.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,f=v,d=v.version,p=s.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function x(g,m){g.getRGB(Da,Sp(s)),n.buffers.color.setClear(Da.r,Da.g,Da.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(g,m=1){a.set(g),l=m,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,x(a,l)},render:_}}function Q_(s,e,t,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=g(null),c=l,u=!1;function f(B,se,pe,$,K){let te=!1;if(o){let me=x($,pe,se);c!==me&&(c=me,p(c.object)),te=m(B,$,pe,K),te&&M(B,$,pe,K)}else{let me=se.wireframe===!0;(c.geometry!==$.id||c.program!==pe.id||c.wireframe!==me)&&(c.geometry=$.id,c.program=pe.id,c.wireframe=me,te=!0)}K!==null&&t.update(K,s.ELEMENT_ARRAY_BUFFER),(te||u)&&(u=!1,Q(B,se,pe,$),K!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function p(B){return n.isWebGL2?s.bindVertexArray(B):r.bindVertexArrayOES(B)}function _(B){return n.isWebGL2?s.deleteVertexArray(B):r.deleteVertexArrayOES(B)}function x(B,se,pe){let $=pe.wireframe===!0,K=a[B.id];K===void 0&&(K={},a[B.id]=K);let te=K[se.id];te===void 0&&(te={},K[se.id]=te);let me=te[$];return me===void 0&&(me=g(d()),te[$]=me),me}function g(B){let se=[],pe=[],$=[];for(let K=0;K<i;K++)se[K]=0,pe[K]=0,$[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:se,enabledAttributes:pe,attributeDivisors:$,object:B,attributes:{},index:null}}function m(B,se,pe,$){let K=c.attributes,te=se.attributes,me=0,be=pe.getAttributes();for(let de in be)if(be[de].location>=0){let F=K[de],Se=te[de];if(Se===void 0&&(de==="instanceMatrix"&&B.instanceMatrix&&(Se=B.instanceMatrix),de==="instanceColor"&&B.instanceColor&&(Se=B.instanceColor)),F===void 0||F.attribute!==Se||Se&&F.data!==Se.data)return!0;me++}return c.attributesNum!==me||c.index!==$}function M(B,se,pe,$){let K={},te=se.attributes,me=0,be=pe.getAttributes();for(let de in be)if(be[de].location>=0){let F=te[de];F===void 0&&(de==="instanceMatrix"&&B.instanceMatrix&&(F=B.instanceMatrix),de==="instanceColor"&&B.instanceColor&&(F=B.instanceColor));let Se={};Se.attribute=F,F&&F.data&&(Se.data=F.data),K[de]=Se,me++}c.attributes=K,c.attributesNum=me,c.index=$}function v(){let B=c.newAttributes;for(let se=0,pe=B.length;se<pe;se++)B[se]=0}function w(B){z(B,0)}function z(B,se){let pe=c.newAttributes,$=c.enabledAttributes,K=c.attributeDivisors;pe[B]=1,$[B]===0&&(s.enableVertexAttribArray(B),$[B]=1),K[B]!==se&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,se),K[B]=se)}function U(){let B=c.newAttributes,se=c.enabledAttributes;for(let pe=0,$=se.length;pe<$;pe++)se[pe]!==B[pe]&&(s.disableVertexAttribArray(pe),se[pe]=0)}function D(B,se,pe,$,K,te,me){me===!0?s.vertexAttribIPointer(B,se,pe,K,te):s.vertexAttribPointer(B,se,pe,$,K,te)}function Q(B,se,pe,$){if(n.isWebGL2===!1&&(B.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let K=$.attributes,te=pe.getAttributes(),me=se.defaultAttributeValues;for(let be in te){let de=te[be];if(de.location>=0){let ie=K[be];if(ie===void 0&&(be==="instanceMatrix"&&B.instanceMatrix&&(ie=B.instanceMatrix),be==="instanceColor"&&B.instanceColor&&(ie=B.instanceColor)),ie!==void 0){let F=ie.normalized,Se=ie.itemSize,ke=t.get(ie);if(ke===void 0)continue;let xe=ke.buffer,nt=ke.type,et=ke.bytesPerElement,ze=n.isWebGL2===!0&&(nt===s.INT||nt===s.UNSIGNED_INT||ie.gpuType===cp);if(ie.isInterleavedBufferAttribute){let it=ie.data,W=it.stride,Te=ie.offset;if(it.isInstancedInterleavedBuffer){for(let Me=0;Me<de.locationSize;Me++)z(de.location+Me,it.meshPerAttribute);B.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Me=0;Me<de.locationSize;Me++)w(de.location+Me);s.bindBuffer(s.ARRAY_BUFFER,xe);for(let Me=0;Me<de.locationSize;Me++)D(de.location+Me,Se/de.locationSize,nt,F,W*et,(Te+Se/de.locationSize*Me)*et,ze)}else{if(ie.isInstancedBufferAttribute){for(let it=0;it<de.locationSize;it++)z(de.location+it,ie.meshPerAttribute);B.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let it=0;it<de.locationSize;it++)w(de.location+it);s.bindBuffer(s.ARRAY_BUFFER,xe);for(let it=0;it<de.locationSize;it++)D(de.location+it,Se/de.locationSize,nt,F,Se*et,Se/de.locationSize*it*et,ze)}}else if(me!==void 0){let F=me[be];if(F!==void 0)switch(F.length){case 2:s.vertexAttrib2fv(de.location,F);break;case 3:s.vertexAttrib3fv(de.location,F);break;case 4:s.vertexAttrib4fv(de.location,F);break;default:s.vertexAttrib1fv(de.location,F)}}}}U()}function E(){J();for(let B in a){let se=a[B];for(let pe in se){let $=se[pe];for(let K in $)_($[K].object),delete $[K];delete se[pe]}delete a[B]}}function P(B){if(a[B.id]===void 0)return;let se=a[B.id];for(let pe in se){let $=se[pe];for(let K in $)_($[K].object),delete $[K];delete se[pe]}delete a[B.id]}function ne(B){for(let se in a){let pe=a[se];if(pe[B.id]===void 0)continue;let $=pe[B.id];for(let K in $)_($[K].object),delete $[K];delete pe[B.id]}}function J(){Le(),u=!0,c!==l&&(c=l,p(c.object))}function Le(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:J,resetDefaultState:Le,dispose:E,releaseStatesOfGeometry:P,releaseStatesOfProgram:ne,initAttributes:v,enableAttribute:w,disableUnusedAttributes:U}}function ey(s,e,t,n){let i=n.isWebGL2,r;function o(u){r=u}function a(u,f){s.drawArrays(r,u,f),t.update(f,r,1)}function l(u,f,d){if(d===0)return;let p,_;if(i)p=s,_="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](r,u,f,d),t.update(f,r,d)}function c(u,f,d){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<d;_++)this.render(u[_],f[_]);else{p.multiDrawArraysWEBGL(r,u,0,f,0,d);let _=0;for(let x=0;x<d;x++)_+=f[x];t.update(_,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function ty(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(D){if(D==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),g=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),m=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,w=o||e.has("OES_texture_float"),z=v&&w,U=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:g,maxVaryings:m,maxFragmentUniforms:M,vertexTextures:v,floatFragmentTextures:w,floatVertexTextures:z,maxSamples:U}}function ny(s){let e=this,t=null,n=0,i=!1,r=!1,o=new ei,a=new bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let p=f.length!==0||d||n!==0||i;return i=d,n=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,p){let _=f.clippingPlanes,x=f.clipIntersection,g=f.clipShadows,m=s.get(f);if(!i||_===null||_.length===0||r&&!g)r?u(null):c();else{let M=r?0:n,v=M*4,w=m.clippingState||null;l.value=w,w=u(_,d,v,p);for(let z=0;z!==v;++z)w[z]=t[z];m.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,p,_){let x=f!==null?f.length:0,g=null;if(x!==0){if(g=l.value,_!==!0||g===null){let m=p+x*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let v=0,w=p;v!==x;++v,w+=4)o.copy(f[v]).applyMatrix4(M,a),o.normal.toArray(g,w),g[w+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function iy(s){let e=new WeakMap;function t(o,a){return a===eu?o.mapping=wr:a===tu&&(o.mapping=Ar),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===eu||a===tu)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new lu(l.height/2);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var is=class extends rl{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},_r=4,fd=[.125,.215,.35,.446,.526,.582],Cs=20,Bc=new is,dd=new qe,kc=null,zc=0,Gc=0,Es=(1+Math.sqrt(5))/2,fr=1/Es,pd=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Es,fr),new L(0,Es,-fr),new L(fr,0,Es),new L(-fr,0,Es),new L(Es,fr,0),new L(-Es,fr,0)],Ir=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){kc=this._renderer.getRenderTarget(),zc=this._renderer.getActiveCubeFace(),Gc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(kc,zc,Gc),e.scissorTest=!1,Ua(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wr||e.mapping===Ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kc=this._renderer.getRenderTarget(),zc=this._renderer.getActiveCubeFace(),Gc=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:ti,format:kn,colorSpace:sn,depthBuffer:!1},i=md(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=md(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sy(r)),this._blurMaterial=ry(r,e,t)}return i}_compileMaterial(e){let t=new ot(this._lodPlanes[0],e);this._renderer.compile(t,Bc)}_sceneToCubeUV(e,t,n,i){let a=new Qt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(dd),u.toneMapping=Qi,u.autoClear=!1;let p=new Zt({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1}),_=new ot(new bn,p),x=!1,g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,x=!0):(p.color.copy(dd),x=!0);for(let m=0;m<6;m++){let M=m%3;M===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):M===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let v=this._cubeSize;Ua(i,M*v,m>2?v:0,v,v),u.setRenderTarget(i),x&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===wr||e.mapping===Ar;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=xd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gd());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new ot(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Ua(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Bc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=pd[(i-1)%pd.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,f=new ot(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Cs-1),x=r/_,g=isFinite(r)?1+Math.floor(u*x):Cs;g>Cs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Cs}`);let m=[],M=0;for(let D=0;D<Cs;++D){let Q=D/x,E=Math.exp(-Q*Q/2);m.push(E),D===0?M+=E:D<g&&(M+=2*E)}for(let D=0;D<m.length;D++)m[D]=m[D]/M;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:v}=this;d.dTheta.value=_,d.mipInt.value=v-n;let w=this._sizeLods[i],z=3*w*(i>v-_r?i-v+_r:0),U=4*(this._cubeSize-w);Ua(t,z,U,3*w,2*w),l.setRenderTarget(t),l.render(f,Bc)}};function sy(s){let e=[],t=[],n=[],i=s,r=s-_r+1+fd.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);t.push(a);let l=1/a;o>s-_r?l=fd[o-s+_r-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,x=3,g=2,m=1,M=new Float32Array(x*_*p),v=new Float32Array(g*_*p),w=new Float32Array(m*_*p);for(let U=0;U<p;U++){let D=U%3*2/3-1,Q=U>2?0:-1,E=[D,Q,0,D+2/3,Q,0,D+2/3,Q+1,0,D,Q,0,D+2/3,Q+1,0,D,Q+1,0];M.set(E,x*_*U),v.set(d,g*_*U);let P=[U,U,U,U,U,U];w.set(P,m*_*U)}let z=new Dt;z.setAttribute("position",new Vt(M,x)),z.setAttribute("uv",new Vt(v,g)),z.setAttribute("faceIndex",new Vt(w,m)),e.push(z),i>_r&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function md(s,e,t){let n=new hn(s,e,t);return n.texture.mapping=Cl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ua(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function ry(s,e,t){let n=new Float32Array(Cs),i=new L(0,1,0);return new en({name:"SphericalGaussianBlur",defines:{n:Cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ju(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function gd(){return new en({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ju(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function xd(){return new en({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ju(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function ju(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function oy(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===eu||l===tu,u=l===wr||l===Ar;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Ir(s)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{let f=a.image;if(c&&f&&f.height>0||u&&f&&i(f)){t===null&&(t=new Ir(s));let d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function ay(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function ly(s,e,t,n){let i={},r=new WeakMap;function o(f){let d=f.target;d.index!==null&&e.remove(d.index);for(let _ in d.attributes)e.remove(d.attributes[_]);for(let _ in d.morphAttributes){let x=d.morphAttributes[_];for(let g=0,m=x.length;g<m;g++)e.remove(x[g])}d.removeEventListener("dispose",o),delete i[d.id];let p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(f){let d=f.attributes;for(let _ in d)e.update(d[_],s.ARRAY_BUFFER);let p=f.morphAttributes;for(let _ in p){let x=p[_];for(let g=0,m=x.length;g<m;g++)e.update(x[g],s.ARRAY_BUFFER)}}function c(f){let d=[],p=f.index,_=f.attributes.position,x=0;if(p!==null){let M=p.array;x=p.version;for(let v=0,w=M.length;v<w;v+=3){let z=M[v+0],U=M[v+1],D=M[v+2];d.push(z,U,U,D,D,z)}}else if(_!==void 0){let M=_.array;x=_.version;for(let v=0,w=M.length/3-1;v<w;v+=3){let z=v+0,U=v+1,D=v+2;d.push(z,U,U,D,D,z)}}else return;let g=new(vp(d)?sl:il)(d,1);g.version=x;let m=r.get(f);m&&e.remove(m),r.set(f,g)}function u(f){let d=r.get(f);if(d){let p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function cy(s,e,t,n){let i=n.isWebGL2,r;function o(p){r=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function u(p,_){s.drawElements(r,_,a,p*l),t.update(_,r,1)}function f(p,_,x){if(x===0)return;let g,m;if(i)g=s,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](r,_,a,p*l,x),t.update(_,r,x)}function d(p,_,x){if(x===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<x;m++)this.render(p[m]/l,_[m]);else{g.multiDrawElementsWEBGL(r,_,0,a,p,0,x);let m=0;for(let M=0;M<x;M++)m+=_[M];t.update(m,r,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=d}function uy(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function hy(s,e){return s[0]-e[0]}function fy(s,e){return Math.abs(e[1])-Math.abs(s[1])}function dy(s,e,t){let n={},i=new Float32Array(8),r=new WeakMap,o=new Ft,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){let d=c.morphTargetInfluences;if(e.isWebGL2===!0){let p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=p!==void 0?p.length:0,x=r.get(u);if(x===void 0||x.count!==_){let B=function(){J.dispose(),r.delete(u),u.removeEventListener("dispose",B)};x!==void 0&&x.texture.dispose();let M=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,z=u.morphAttributes.position||[],U=u.morphAttributes.normal||[],D=u.morphAttributes.color||[],Q=0;M===!0&&(Q=1),v===!0&&(Q=2),w===!0&&(Q=3);let E=u.attributes.position.count*Q,P=1;E>e.maxTextureSize&&(P=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let ne=new Float32Array(E*P*4*_),J=new tl(ne,E,P,_);J.type=Pi,J.needsUpdate=!0;let Le=Q*4;for(let se=0;se<_;se++){let pe=z[se],$=U[se],K=D[se],te=E*P*4*se;for(let me=0;me<pe.count;me++){let be=me*Le;M===!0&&(o.fromBufferAttribute(pe,me),ne[te+be+0]=o.x,ne[te+be+1]=o.y,ne[te+be+2]=o.z,ne[te+be+3]=0),v===!0&&(o.fromBufferAttribute($,me),ne[te+be+4]=o.x,ne[te+be+5]=o.y,ne[te+be+6]=o.z,ne[te+be+7]=0),w===!0&&(o.fromBufferAttribute(K,me),ne[te+be+8]=o.x,ne[te+be+9]=o.y,ne[te+be+10]=o.z,ne[te+be+11]=K.itemSize===4?o.w:1)}}x={count:_,texture:J,size:new he(E,P)},r.set(u,x),u.addEventListener("dispose",B)}let g=0;for(let M=0;M<d.length;M++)g+=d[M];let m=u.morphTargetsRelative?1:1-g;f.getUniforms().setValue(s,"morphTargetBaseInfluence",m),f.getUniforms().setValue(s,"morphTargetInfluences",d),f.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}else{let p=d===void 0?0:d.length,_=n[u.id];if(_===void 0||_.length!==p){_=[];for(let v=0;v<p;v++)_[v]=[v,0];n[u.id]=_}for(let v=0;v<p;v++){let w=_[v];w[0]=v,w[1]=d[v]}_.sort(fy);for(let v=0;v<8;v++)v<p&&_[v][1]?(a[v][0]=_[v][0],a[v][1]=_[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(hy);let x=u.morphAttributes.position,g=u.morphAttributes.normal,m=0;for(let v=0;v<8;v++){let w=a[v],z=w[0],U=w[1];z!==Number.MAX_SAFE_INTEGER&&U?(x&&u.getAttribute("morphTarget"+v)!==x[z]&&u.setAttribute("morphTarget"+v,x[z]),g&&u.getAttribute("morphNormal"+v)!==g[z]&&u.setAttribute("morphNormal"+v,g[z]),i[v]=U,m+=U):(x&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),g&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}let M=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(s,"morphTargetBaseInfluence",M),f.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function py(s,e,t,n){let i=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,f=e.get(l,u);if(i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return f}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var al=class extends rn{constructor(e,t,n,i,r,o,a,l,c,u){if(u=u!==void 0?u:Is,u!==Is&&u!==Er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Is&&(n=Ji),n===void 0&&u===Er&&(n=Ls),super(null,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:nn,this.minFilter=l!==void 0?l:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Tp=new rn,wp=new al(1,1);wp.compareFunction=yp;var Ap=new tl,Ep=new ou,Rp=new ol,_d=[],yd=[],vd=new Float32Array(16),bd=new Float32Array(9),Sd=new Float32Array(4);function Wr(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=_d[i];if(r===void 0&&(r=new Float32Array(i),_d[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function on(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function an(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Il(s,e){let t=yd[e];t===void 0&&(t=new Int32Array(e),yd[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function my(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function gy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;s.uniform2fv(this.addr,e),an(t,e)}}function xy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;s.uniform3fv(this.addr,e),an(t,e)}}function _y(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;s.uniform4fv(this.addr,e),an(t,e)}}function yy(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;Sd.set(n),s.uniformMatrix2fv(this.addr,!1,Sd),an(t,n)}}function vy(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;bd.set(n),s.uniformMatrix3fv(this.addr,!1,bd),an(t,n)}}function by(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;vd.set(n),s.uniformMatrix4fv(this.addr,!1,vd),an(t,n)}}function Sy(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function My(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;s.uniform2iv(this.addr,e),an(t,e)}}function Ty(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;s.uniform3iv(this.addr,e),an(t,e)}}function wy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;s.uniform4iv(this.addr,e),an(t,e)}}function Ay(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Ey(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;s.uniform2uiv(this.addr,e),an(t,e)}}function Ry(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;s.uniform3uiv(this.addr,e),an(t,e)}}function Cy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;s.uniform4uiv(this.addr,e),an(t,e)}}function Py(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?wp:Tp;t.setTexture2D(e||r,i)}function Ly(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ep,i)}function Iy(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Rp,i)}function Dy(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ap,i)}function Uy(s){switch(s){case 5126:return my;case 35664:return gy;case 35665:return xy;case 35666:return _y;case 35674:return yy;case 35675:return vy;case 35676:return by;case 5124:case 35670:return Sy;case 35667:case 35671:return My;case 35668:case 35672:return Ty;case 35669:case 35673:return wy;case 5125:return Ay;case 36294:return Ey;case 36295:return Ry;case 36296:return Cy;case 35678:case 36198:case 36298:case 36306:case 35682:return Py;case 35679:case 36299:case 36307:return Ly;case 35680:case 36300:case 36308:case 36293:return Iy;case 36289:case 36303:case 36311:case 36292:return Dy}}function Ny(s,e){s.uniform1fv(this.addr,e)}function Oy(s,e){let t=Wr(e,this.size,2);s.uniform2fv(this.addr,t)}function Fy(s,e){let t=Wr(e,this.size,3);s.uniform3fv(this.addr,t)}function By(s,e){let t=Wr(e,this.size,4);s.uniform4fv(this.addr,t)}function ky(s,e){let t=Wr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function zy(s,e){let t=Wr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Gy(s,e){let t=Wr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Vy(s,e){s.uniform1iv(this.addr,e)}function Hy(s,e){s.uniform2iv(this.addr,e)}function Wy(s,e){s.uniform3iv(this.addr,e)}function Xy(s,e){s.uniform4iv(this.addr,e)}function qy(s,e){s.uniform1uiv(this.addr,e)}function Yy(s,e){s.uniform2uiv(this.addr,e)}function Zy(s,e){s.uniform3uiv(this.addr,e)}function Ky(s,e){s.uniform4uiv(this.addr,e)}function jy(s,e,t){let n=this.cache,i=e.length,r=Il(t,i);on(n,r)||(s.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Tp,r[o])}function Jy(s,e,t){let n=this.cache,i=e.length,r=Il(t,i);on(n,r)||(s.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Ep,r[o])}function $y(s,e,t){let n=this.cache,i=e.length,r=Il(t,i);on(n,r)||(s.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Rp,r[o])}function Qy(s,e,t){let n=this.cache,i=e.length,r=Il(t,i);on(n,r)||(s.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Ap,r[o])}function ev(s){switch(s){case 5126:return Ny;case 35664:return Oy;case 35665:return Fy;case 35666:return By;case 35674:return ky;case 35675:return zy;case 35676:return Gy;case 5124:case 35670:return Vy;case 35667:case 35671:return Hy;case 35668:case 35672:return Wy;case 35669:case 35673:return Xy;case 5125:return qy;case 36294:return Yy;case 36295:return Zy;case 36296:return Ky;case 35678:case 36198:case 36298:case 36306:case 35682:return jy;case 35679:case 36299:case 36307:return Jy;case 35680:case 36300:case 36308:case 36293:return $y;case 36289:case 36303:case 36311:case 36292:return Qy}}var cu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Uy(t.type)}},uu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ev(t.type)}},hu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},Vc=/(\w+)(\])?(\[|\.)?/g;function Md(s,e){s.seq.push(e),s.map[e.id]=e}function tv(s,e,t){let n=s.name,i=n.length;for(Vc.lastIndex=0;;){let r=Vc.exec(n),o=Vc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Md(t,c===void 0?new cu(a,s,e):new uu(a,s,e));break}else{let f=t.map[a];f===void 0&&(f=new hu(a),Md(t,f)),t=f}}}var Mr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);tv(r,o,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Td(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var nv=37297,iv=0;function sv(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function rv(s){let e=At.getPrimaries(At.workingColorSpace),t=At.getPrimaries(s),n;switch(e===t?n="":e===Ja&&t===ja?n="LinearDisplayP3ToLinearSRGB":e===ja&&t===Ja&&(n="LinearSRGBToLinearDisplayP3"),s){case sn:case Ll:return[n,"LinearTransferOETF"];case Xe:case Zu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function wd(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+sv(s.getShaderSource(e),o)}else return i}function ov(s,e){let t=rv(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function av(s,e){let t;switch(e){case Vu:t="Linear";break;case Hu:t="Reinhard";break;case Wu:t="OptimizedCineon";break;case Go:t="ACESFilmic";break;case Xu:t="AgX";break;case x0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function lv(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(yr).join(`
`)}function cv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(yr).join(`
`)}function uv(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function hv(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function yr(s){return s!==""}function Ad(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ed(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var fv=/^[ \t]*#include +<([\w\d./]+)>/gm;function fu(s){return s.replace(fv,pv)}var dv=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function pv(s,e){let t=_t[e];if(t===void 0){let n=dv.get(e);if(n!==void 0)t=_t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return fu(t)}var mv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rd(s){return s.replace(mv,gv)}function gv(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Cd(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xv(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===op?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Gu?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ci&&(e="SHADOWMAP_TYPE_VSM"),e}function _v(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case wr:case Ar:e="ENVMAP_TYPE_CUBE";break;case Cl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function yv(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ar:e="ENVMAP_MODE_REFRACTION";break}return e}function vv(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ap:e="ENVMAP_BLENDING_MULTIPLY";break;case m0:e="ENVMAP_BLENDING_MIX";break;case g0:e="ENVMAP_BLENDING_ADD";break}return e}function bv(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Sv(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=xv(t),c=_v(t),u=yv(t),f=vv(t),d=bv(t),p=t.isWebGL2?"":lv(t),_=cv(t),x=uv(r),g=i.createProgram(),m,M,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(yr).join(`
`),m.length>0&&(m+=`
`),M=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(yr).join(`
`),M.length>0&&(M+=`
`)):(m=[Cd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yr).join(`
`),M=[p,Cd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qi?"#define TONE_MAPPING":"",t.toneMapping!==Qi?_t.tonemapping_pars_fragment:"",t.toneMapping!==Qi?av("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,ov("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(yr).join(`
`)),o=fu(o),o=Ad(o,t),o=Ed(o,t),a=fu(a),a=Ad(a,t),a=Ed(a,t),o=Rd(o),a=Rd(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Zf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let w=v+m+o,z=v+M+a,U=Td(i,i.VERTEX_SHADER,w),D=Td(i,i.FRAGMENT_SHADER,z);i.attachShader(g,U),i.attachShader(g,D),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function Q(J){if(s.debug.checkShaderErrors){let Le=i.getProgramInfoLog(g).trim(),B=i.getShaderInfoLog(U).trim(),se=i.getShaderInfoLog(D).trim(),pe=!0,$=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(pe=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,U,D);else{let K=wd(i,U,"vertex"),te=wd(i,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Program Info Log: `+Le+`
`+K+`
`+te)}else Le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Le):(B===""||se==="")&&($=!1);$&&(J.diagnostics={runnable:pe,programLog:Le,vertexShader:{log:B,prefix:m},fragmentShader:{log:se,prefix:M}})}i.deleteShader(U),i.deleteShader(D),E=new Mr(i,g),P=hv(i,g)}let E;this.getUniforms=function(){return E===void 0&&Q(this),E};let P;this.getAttributes=function(){return P===void 0&&Q(this),P};let ne=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ne===!1&&(ne=i.getProgramParameter(g,nv)),ne},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=iv++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=U,this.fragmentShader=D,this}var Mv=0,du=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new pu(e),t.set(e,n)),n}},pu=class{constructor(e){this.id=Mv++,this.code=e,this.usedTimes=0}};function Tv(s,e,t,n,i,r,o){let a=new Eo,l=new du,c=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,d=i.vertexTextures,p=i.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return E===0?"uv":`uv${E}`}function g(E,P,ne,J,Le){let B=J.fog,se=Le.geometry,pe=E.isMeshStandardMaterial?J.environment:null,$=(E.isMeshStandardMaterial?t:e).get(E.envMap||pe),K=$&&$.mapping===Cl?$.image.height:null,te=_[E.type];E.precision!==null&&(p=i.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));let me=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,be=me!==void 0?me.length:0,de=0;se.morphAttributes.position!==void 0&&(de=1),se.morphAttributes.normal!==void 0&&(de=2),se.morphAttributes.color!==void 0&&(de=3);let ie,F,Se,ke;if(te){let ce=di[te];ie=ce.vertexShader,F=ce.fragmentShader}else ie=E.vertexShader,F=E.fragmentShader,l.update(E),Se=l.getVertexShaderID(E),ke=l.getFragmentShaderID(E);let xe=s.getRenderTarget(),nt=Le.isInstancedMesh===!0,et=Le.isBatchedMesh===!0,ze=!!E.map,it=!!E.matcap,W=!!$,Te=!!E.aoMap,Me=!!E.lightMap,Ie=!!E.bumpMap,ve=!!E.normalMap,je=!!E.displacementMap,Fe=!!E.emissiveMap,C=!!E.metalnessMap,A=!!E.roughnessMap,re=E.anisotropy>0,we=E.clearcoat>0,Ae=E.iridescence>0,ye=E.sheen>0,Ye=E.transmission>0,Ne=re&&!!E.anisotropyMap,Ge=we&&!!E.clearcoatMap,$e=we&&!!E.clearcoatNormalMap,Qe=we&&!!E.clearcoatRoughnessMap,Re=Ae&&!!E.iridescenceMap,at=Ae&&!!E.iridescenceThicknessMap,V=ye&&!!E.sheenColorMap,Ee=ye&&!!E.sheenRoughnessMap,Oe=!!E.specularMap,Ce=!!E.specularColorMap,Je=!!E.specularIntensityMap,lt=Ye&&!!E.transmissionMap,ft=Ye&&!!E.thicknessMap,G=!!E.gradientMap,Z=!!E.alphaMap,R=E.alphaTest>0,H=!!E.alphaHash,N=!!E.extensions,X=!!se.attributes.uv1,ee=!!se.attributes.uv2,j=!!se.attributes.uv3,oe=Qi;return E.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(oe=s.toneMapping),{isWebGL2:u,shaderID:te,shaderType:E.type,shaderName:E.name,vertexShader:ie,fragmentShader:F,defines:E.defines,customVertexShaderID:Se,customFragmentShaderID:ke,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:et,instancing:nt,instancingColor:nt&&Le.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:xe===null?s.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:sn,map:ze,matcap:it,envMap:W,envMapMode:W&&$.mapping,envMapCubeUVHeight:K,aoMap:Te,lightMap:Me,bumpMap:Ie,normalMap:ve,displacementMap:d&&je,emissiveMap:Fe,normalMapObjectSpace:ve&&E.normalMapType===P0,normalMapTangentSpace:ve&&E.normalMapType===_p,metalnessMap:C,roughnessMap:A,anisotropy:re,anisotropyMap:Ne,clearcoat:we,clearcoatMap:Ge,clearcoatNormalMap:$e,clearcoatRoughnessMap:Qe,iridescence:Ae,iridescenceMap:Re,iridescenceThicknessMap:at,sheen:ye,sheenColorMap:V,sheenRoughnessMap:Ee,specularMap:Oe,specularColorMap:Ce,specularIntensityMap:Je,transmission:Ye,transmissionMap:lt,thicknessMap:ft,gradientMap:G,opaque:E.transparent===!1&&E.blending===br,alphaMap:Z,alphaTest:R,alphaHash:H,combine:E.combine,mapUv:ze&&x(E.map.channel),aoMapUv:Te&&x(E.aoMap.channel),lightMapUv:Me&&x(E.lightMap.channel),bumpMapUv:Ie&&x(E.bumpMap.channel),normalMapUv:ve&&x(E.normalMap.channel),displacementMapUv:je&&x(E.displacementMap.channel),emissiveMapUv:Fe&&x(E.emissiveMap.channel),metalnessMapUv:C&&x(E.metalnessMap.channel),roughnessMapUv:A&&x(E.roughnessMap.channel),anisotropyMapUv:Ne&&x(E.anisotropyMap.channel),clearcoatMapUv:Ge&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:$e&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qe&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:at&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:V&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&x(E.sheenRoughnessMap.channel),specularMapUv:Oe&&x(E.specularMap.channel),specularColorMapUv:Ce&&x(E.specularColorMap.channel),specularIntensityMapUv:Je&&x(E.specularIntensityMap.channel),transmissionMapUv:lt&&x(E.transmissionMap.channel),thicknessMapUv:ft&&x(E.thicknessMap.channel),alphaMapUv:Z&&x(E.alphaMap.channel),vertexTangents:!!se.attributes.tangent&&(ve||re),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,vertexUv1s:X,vertexUv2s:ee,vertexUv3s:j,pointsUvs:Le.isPoints===!0&&!!se.attributes.uv&&(ze||Z),fog:!!B,useFog:E.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:Le.isSkinnedMesh===!0,morphTargets:se.morphAttributes.position!==void 0,morphNormals:se.morphAttributes.normal!==void 0,morphColors:se.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:de,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&ne.length>0,shadowMapType:s.shadowMap.type,toneMapping:oe,useLegacyLights:s._useLegacyLights,decodeVideoTexture:ze&&E.map.isVideoTexture===!0&&At.getTransfer(E.map.colorSpace)===Ot,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===yt,flipSided:E.side===xn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:N&&E.extensions.derivatives===!0,extensionFragDepth:N&&E.extensions.fragDepth===!0,extensionDrawBuffers:N&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:N&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:N&&E.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function m(E){let P=[];if(E.shaderID?P.push(E.shaderID):(P.push(E.customVertexShaderID),P.push(E.customFragmentShaderID)),E.defines!==void 0)for(let ne in E.defines)P.push(ne),P.push(E.defines[ne]);return E.isRawShaderMaterial===!1&&(M(P,E),v(P,E),P.push(s.outputColorSpace)),P.push(E.customProgramCacheKey),P.join()}function M(E,P){E.push(P.precision),E.push(P.outputColorSpace),E.push(P.envMapMode),E.push(P.envMapCubeUVHeight),E.push(P.mapUv),E.push(P.alphaMapUv),E.push(P.lightMapUv),E.push(P.aoMapUv),E.push(P.bumpMapUv),E.push(P.normalMapUv),E.push(P.displacementMapUv),E.push(P.emissiveMapUv),E.push(P.metalnessMapUv),E.push(P.roughnessMapUv),E.push(P.anisotropyMapUv),E.push(P.clearcoatMapUv),E.push(P.clearcoatNormalMapUv),E.push(P.clearcoatRoughnessMapUv),E.push(P.iridescenceMapUv),E.push(P.iridescenceThicknessMapUv),E.push(P.sheenColorMapUv),E.push(P.sheenRoughnessMapUv),E.push(P.specularMapUv),E.push(P.specularColorMapUv),E.push(P.specularIntensityMapUv),E.push(P.transmissionMapUv),E.push(P.thicknessMapUv),E.push(P.combine),E.push(P.fogExp2),E.push(P.sizeAttenuation),E.push(P.morphTargetsCount),E.push(P.morphAttributeCount),E.push(P.numDirLights),E.push(P.numPointLights),E.push(P.numSpotLights),E.push(P.numSpotLightMaps),E.push(P.numHemiLights),E.push(P.numRectAreaLights),E.push(P.numDirLightShadows),E.push(P.numPointLightShadows),E.push(P.numSpotLightShadows),E.push(P.numSpotLightShadowsWithMaps),E.push(P.numLightProbes),E.push(P.shadowMapType),E.push(P.toneMapping),E.push(P.numClippingPlanes),E.push(P.numClipIntersection),E.push(P.depthPacking)}function v(E,P){a.disableAll(),P.isWebGL2&&a.enable(0),P.supportsVertexTextures&&a.enable(1),P.instancing&&a.enable(2),P.instancingColor&&a.enable(3),P.matcap&&a.enable(4),P.envMap&&a.enable(5),P.normalMapObjectSpace&&a.enable(6),P.normalMapTangentSpace&&a.enable(7),P.clearcoat&&a.enable(8),P.iridescence&&a.enable(9),P.alphaTest&&a.enable(10),P.vertexColors&&a.enable(11),P.vertexAlphas&&a.enable(12),P.vertexUv1s&&a.enable(13),P.vertexUv2s&&a.enable(14),P.vertexUv3s&&a.enable(15),P.vertexTangents&&a.enable(16),P.anisotropy&&a.enable(17),P.alphaHash&&a.enable(18),P.batching&&a.enable(19),E.push(a.mask),a.disableAll(),P.fog&&a.enable(0),P.useFog&&a.enable(1),P.flatShading&&a.enable(2),P.logarithmicDepthBuffer&&a.enable(3),P.skinning&&a.enable(4),P.morphTargets&&a.enable(5),P.morphNormals&&a.enable(6),P.morphColors&&a.enable(7),P.premultipliedAlpha&&a.enable(8),P.shadowMapEnabled&&a.enable(9),P.useLegacyLights&&a.enable(10),P.doubleSided&&a.enable(11),P.flipSided&&a.enable(12),P.useDepthPacking&&a.enable(13),P.dithering&&a.enable(14),P.transmission&&a.enable(15),P.sheen&&a.enable(16),P.opaque&&a.enable(17),P.pointsUvs&&a.enable(18),P.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function w(E){let P=_[E.type],ne;if(P){let J=di[P];ne=hs.clone(J.uniforms)}else ne=E.uniforms;return ne}function z(E,P){let ne;for(let J=0,Le=c.length;J<Le;J++){let B=c[J];if(B.cacheKey===P){ne=B,++ne.usedTimes;break}}return ne===void 0&&(ne=new Sv(s,P,E,r),c.push(ne)),ne}function U(E){if(--E.usedTimes===0){let P=c.indexOf(E);c[P]=c[c.length-1],c.pop(),E.destroy()}}function D(E){l.remove(E)}function Q(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:w,acquireProgram:z,releaseProgram:U,releaseShaderCache:D,programs:c,dispose:Q}}function wv(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Av(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Pd(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ld(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(f,d,p,_,x,g){let m=s[e];return m===void 0?(m={id:f.id,object:f,geometry:d,material:p,groupOrder:_,renderOrder:f.renderOrder,z:x,group:g},s[e]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=p,m.groupOrder=_,m.renderOrder=f.renderOrder,m.z=x,m.group=g),e++,m}function a(f,d,p,_,x,g){let m=o(f,d,p,_,x,g);p.transmission>0?n.push(m):p.transparent===!0?i.push(m):t.push(m)}function l(f,d,p,_,x,g){let m=o(f,d,p,_,x,g);p.transmission>0?n.unshift(m):p.transparent===!0?i.unshift(m):t.unshift(m)}function c(f,d){t.length>1&&t.sort(f||Av),n.length>1&&n.sort(d||Pd),i.length>1&&i.sort(d||Pd)}function u(){for(let f=e,d=s.length;f<d;f++){let p=s[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function Ev(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new Ld,s.set(n,[o])):i>=r.length?(o=new Ld,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Rv(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new qe};break;case"SpotLight":t={position:new L,direction:new L,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t}}}function Cv(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var Pv=0;function Lv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Iv(s,e){let t=new Rv,n=Cv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new L);let r=new L,o=new pt,a=new pt;function l(u,f){let d=0,p=0,_=0;for(let J=0;J<9;J++)i.probe[J].set(0,0,0);let x=0,g=0,m=0,M=0,v=0,w=0,z=0,U=0,D=0,Q=0,E=0;u.sort(Lv);let P=f===!0?Math.PI:1;for(let J=0,Le=u.length;J<Le;J++){let B=u[J],se=B.color,pe=B.intensity,$=B.distance,K=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)d+=se.r*pe*P,p+=se.g*pe*P,_+=se.b*pe*P;else if(B.isLightProbe){for(let te=0;te<9;te++)i.probe[te].addScaledVector(B.sh.coefficients[te],pe);E++}else if(B.isDirectionalLight){let te=t.get(B);if(te.color.copy(B.color).multiplyScalar(B.intensity*P),B.castShadow){let me=B.shadow,be=n.get(B);be.shadowBias=me.bias,be.shadowNormalBias=me.normalBias,be.shadowRadius=me.radius,be.shadowMapSize=me.mapSize,i.directionalShadow[x]=be,i.directionalShadowMap[x]=K,i.directionalShadowMatrix[x]=B.shadow.matrix,w++}i.directional[x]=te,x++}else if(B.isSpotLight){let te=t.get(B);te.position.setFromMatrixPosition(B.matrixWorld),te.color.copy(se).multiplyScalar(pe*P),te.distance=$,te.coneCos=Math.cos(B.angle),te.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),te.decay=B.decay,i.spot[m]=te;let me=B.shadow;if(B.map&&(i.spotLightMap[D]=B.map,D++,me.updateMatrices(B),B.castShadow&&Q++),i.spotLightMatrix[m]=me.matrix,B.castShadow){let be=n.get(B);be.shadowBias=me.bias,be.shadowNormalBias=me.normalBias,be.shadowRadius=me.radius,be.shadowMapSize=me.mapSize,i.spotShadow[m]=be,i.spotShadowMap[m]=K,U++}m++}else if(B.isRectAreaLight){let te=t.get(B);te.color.copy(se).multiplyScalar(pe),te.halfWidth.set(B.width*.5,0,0),te.halfHeight.set(0,B.height*.5,0),i.rectArea[M]=te,M++}else if(B.isPointLight){let te=t.get(B);if(te.color.copy(B.color).multiplyScalar(B.intensity*P),te.distance=B.distance,te.decay=B.decay,B.castShadow){let me=B.shadow,be=n.get(B);be.shadowBias=me.bias,be.shadowNormalBias=me.normalBias,be.shadowRadius=me.radius,be.shadowMapSize=me.mapSize,be.shadowCameraNear=me.camera.near,be.shadowCameraFar=me.camera.far,i.pointShadow[g]=be,i.pointShadowMap[g]=K,i.pointShadowMatrix[g]=B.shadow.matrix,z++}i.point[g]=te,g++}else if(B.isHemisphereLight){let te=t.get(B);te.skyColor.copy(B.color).multiplyScalar(pe*P),te.groundColor.copy(B.groundColor).multiplyScalar(pe*P),i.hemi[v]=te,v++}}M>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Be.LTC_FLOAT_1,i.rectAreaLTC2=Be.LTC_FLOAT_2):(i.rectAreaLTC1=Be.LTC_HALF_1,i.rectAreaLTC2=Be.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Be.LTC_FLOAT_1,i.rectAreaLTC2=Be.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Be.LTC_HALF_1,i.rectAreaLTC2=Be.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=_;let ne=i.hash;(ne.directionalLength!==x||ne.pointLength!==g||ne.spotLength!==m||ne.rectAreaLength!==M||ne.hemiLength!==v||ne.numDirectionalShadows!==w||ne.numPointShadows!==z||ne.numSpotShadows!==U||ne.numSpotMaps!==D||ne.numLightProbes!==E)&&(i.directional.length=x,i.spot.length=m,i.rectArea.length=M,i.point.length=g,i.hemi.length=v,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=z,i.pointShadowMap.length=z,i.spotShadow.length=U,i.spotShadowMap.length=U,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=z,i.spotLightMatrix.length=U+D-Q,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=Q,i.numLightProbes=E,ne.directionalLength=x,ne.pointLength=g,ne.spotLength=m,ne.rectAreaLength=M,ne.hemiLength=v,ne.numDirectionalShadows=w,ne.numPointShadows=z,ne.numSpotShadows=U,ne.numSpotMaps=D,ne.numLightProbes=E,i.version=Pv++)}function c(u,f){let d=0,p=0,_=0,x=0,g=0,m=f.matrixWorldInverse;for(let M=0,v=u.length;M<v;M++){let w=u[M];if(w.isDirectionalLight){let z=i.directional[d];z.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),z.direction.sub(r),z.direction.transformDirection(m),d++}else if(w.isSpotLight){let z=i.spot[_];z.position.setFromMatrixPosition(w.matrixWorld),z.position.applyMatrix4(m),z.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),z.direction.sub(r),z.direction.transformDirection(m),_++}else if(w.isRectAreaLight){let z=i.rectArea[x];z.position.setFromMatrixPosition(w.matrixWorld),z.position.applyMatrix4(m),a.identity(),o.copy(w.matrixWorld),o.premultiply(m),a.extractRotation(o),z.halfWidth.set(w.width*.5,0,0),z.halfHeight.set(0,w.height*.5,0),z.halfWidth.applyMatrix4(a),z.halfHeight.applyMatrix4(a),x++}else if(w.isPointLight){let z=i.point[p];z.position.setFromMatrixPosition(w.matrixWorld),z.position.applyMatrix4(m),p++}else if(w.isHemisphereLight){let z=i.hemi[g];z.direction.setFromMatrixPosition(w.matrixWorld),z.direction.transformDirection(m),g++}}}return{setup:l,setupView:c,state:i}}function Id(s,e){let t=new Iv(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Dv(s,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),l;return a===void 0?(l=new Id(s,e),t.set(r,[l])):o>=a.length?(l=new Id(s,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}var mu=class extends Rn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=R0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},gu=class extends Rn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Uv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ov(s,e,t){let n=new Ro,i=new he,r=new he,o=new Ft,a=new mu({depthPacking:C0}),l=new gu,c={},u=t.maxTextureSize,f={[gi]:xn,[xn]:gi,[yt]:yt},d=new en({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:Uv,fragmentShader:Nv}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let _=new Dt;_.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ot(_,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=op;let m=this.type;this.render=function(U,D,Q){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||U.length===0)return;let E=s.getRenderTarget(),P=s.getActiveCubeFace(),ne=s.getActiveMipmapLevel(),J=s.state;J.setBlending(mi),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);let Le=m!==Ci&&this.type===Ci,B=m===Ci&&this.type!==Ci;for(let se=0,pe=U.length;se<pe;se++){let $=U[se],K=$.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;i.copy(K.mapSize);let te=K.getFrameExtents();if(i.multiply(te),r.copy(K.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/te.x),i.x=r.x*te.x,K.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/te.y),i.y=r.y*te.y,K.mapSize.y=r.y)),K.map===null||Le===!0||B===!0){let be=this.type!==Ci?{minFilter:nn,magFilter:nn}:{};K.map!==null&&K.map.dispose(),K.map=new hn(i.x,i.y,be),K.map.texture.name=$.name+".shadowMap",K.camera.updateProjectionMatrix()}s.setRenderTarget(K.map),s.clear();let me=K.getViewportCount();for(let be=0;be<me;be++){let de=K.getViewport(be);o.set(r.x*de.x,r.y*de.y,r.x*de.z,r.y*de.w),J.viewport(o),K.updateMatrices($,be),n=K.getFrustum(),w(D,Q,K.camera,$,this.type)}K.isPointLightShadow!==!0&&this.type===Ci&&M(K,Q),K.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(E,P,ne)};function M(U,D){let Q=e.update(x);d.defines.VSM_SAMPLES!==U.blurSamples&&(d.defines.VSM_SAMPLES=U.blurSamples,p.defines.VSM_SAMPLES=U.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new hn(i.x,i.y)),d.uniforms.shadow_pass.value=U.map.texture,d.uniforms.resolution.value=U.mapSize,d.uniforms.radius.value=U.radius,s.setRenderTarget(U.mapPass),s.clear(),s.renderBufferDirect(D,null,Q,d,x,null),p.uniforms.shadow_pass.value=U.mapPass.texture,p.uniforms.resolution.value=U.mapSize,p.uniforms.radius.value=U.radius,s.setRenderTarget(U.map),s.clear(),s.renderBufferDirect(D,null,Q,p,x,null)}function v(U,D,Q,E){let P=null,ne=Q.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(ne!==void 0)P=ne;else if(P=Q.isPointLight===!0?l:a,s.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){let J=P.uuid,Le=D.uuid,B=c[J];B===void 0&&(B={},c[J]=B);let se=B[Le];se===void 0&&(se=P.clone(),B[Le]=se,D.addEventListener("dispose",z)),P=se}if(P.visible=D.visible,P.wireframe=D.wireframe,E===Ci?P.side=D.shadowSide!==null?D.shadowSide:D.side:P.side=D.shadowSide!==null?D.shadowSide:f[D.side],P.alphaMap=D.alphaMap,P.alphaTest=D.alphaTest,P.map=D.map,P.clipShadows=D.clipShadows,P.clippingPlanes=D.clippingPlanes,P.clipIntersection=D.clipIntersection,P.displacementMap=D.displacementMap,P.displacementScale=D.displacementScale,P.displacementBias=D.displacementBias,P.wireframeLinewidth=D.wireframeLinewidth,P.linewidth=D.linewidth,Q.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let J=s.properties.get(P);J.light=Q}return P}function w(U,D,Q,E,P){if(U.visible===!1)return;if(U.layers.test(D.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&P===Ci)&&(!U.frustumCulled||n.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,U.matrixWorld);let Le=e.update(U),B=U.material;if(Array.isArray(B)){let se=Le.groups;for(let pe=0,$=se.length;pe<$;pe++){let K=se[pe],te=B[K.materialIndex];if(te&&te.visible){let me=v(U,te,E,P);U.onBeforeShadow(s,U,D,Q,Le,me,K),s.renderBufferDirect(Q,null,Le,me,U,K),U.onAfterShadow(s,U,D,Q,Le,me,K)}}}else if(B.visible){let se=v(U,B,E,P);U.onBeforeShadow(s,U,D,Q,Le,se,null),s.renderBufferDirect(Q,null,Le,se,U,null),U.onAfterShadow(s,U,D,Q,Le,se,null)}}let J=U.children;for(let Le=0,B=J.length;Le<B;Le++)w(J[Le],D,Q,E,P)}function z(U){U.target.removeEventListener("dispose",z);for(let Q in c){let E=c[Q],P=U.target.uuid;P in E&&(E[P].dispose(),delete E[P])}}}function Fv(s,e,t){let n=t.isWebGL2;function i(){let R=!1,H=new Ft,N=null,X=new Ft(0,0,0,0);return{setMask:function(ee){N!==ee&&!R&&(s.colorMask(ee,ee,ee,ee),N=ee)},setLocked:function(ee){R=ee},setClear:function(ee,j,oe,q,ce){ce===!0&&(ee*=q,j*=q,oe*=q),H.set(ee,j,oe,q),X.equals(H)===!1&&(s.clearColor(ee,j,oe,q),X.copy(H))},reset:function(){R=!1,N=null,X.set(-1,0,0,0)}}}function r(){let R=!1,H=null,N=null,X=null;return{setTest:function(ee){ee?et(s.DEPTH_TEST):ze(s.DEPTH_TEST)},setMask:function(ee){H!==ee&&!R&&(s.depthMask(ee),H=ee)},setFunc:function(ee){if(N!==ee){switch(ee){case l0:s.depthFunc(s.NEVER);break;case c0:s.depthFunc(s.ALWAYS);break;case u0:s.depthFunc(s.LESS);break;case Ya:s.depthFunc(s.LEQUAL);break;case h0:s.depthFunc(s.EQUAL);break;case f0:s.depthFunc(s.GEQUAL);break;case d0:s.depthFunc(s.GREATER);break;case p0:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}N=ee}},setLocked:function(ee){R=ee},setClear:function(ee){X!==ee&&(s.clearDepth(ee),X=ee)},reset:function(){R=!1,H=null,N=null,X=null}}}function o(){let R=!1,H=null,N=null,X=null,ee=null,j=null,oe=null,q=null,ce=null;return{setTest:function(Pe){R||(Pe?et(s.STENCIL_TEST):ze(s.STENCIL_TEST))},setMask:function(Pe){H!==Pe&&!R&&(s.stencilMask(Pe),H=Pe)},setFunc:function(Pe,De,Ze){(N!==Pe||X!==De||ee!==Ze)&&(s.stencilFunc(Pe,De,Ze),N=Pe,X=De,ee=Ze)},setOp:function(Pe,De,Ze){(j!==Pe||oe!==De||q!==Ze)&&(s.stencilOp(Pe,De,Ze),j=Pe,oe=De,q=Ze)},setLocked:function(Pe){R=Pe},setClear:function(Pe){ce!==Pe&&(s.clearStencil(Pe),ce=Pe)},reset:function(){R=!1,H=null,N=null,X=null,ee=null,j=null,oe=null,q=null,ce=null}}}let a=new i,l=new r,c=new o,u=new WeakMap,f=new WeakMap,d={},p={},_=new WeakMap,x=[],g=null,m=!1,M=null,v=null,w=null,z=null,U=null,D=null,Q=null,E=new qe(0,0,0),P=0,ne=!1,J=null,Le=null,B=null,se=null,pe=null,$=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,te=0,me=s.getParameter(s.VERSION);me.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(me)[1]),K=te>=1):me.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(me)[1]),K=te>=2);let be=null,de={},ie=s.getParameter(s.SCISSOR_BOX),F=s.getParameter(s.VIEWPORT),Se=new Ft().fromArray(ie),ke=new Ft().fromArray(F);function xe(R,H,N,X){let ee=new Uint8Array(4),j=s.createTexture();s.bindTexture(R,j),s.texParameteri(R,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(R,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let oe=0;oe<N;oe++)n&&(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)?s.texImage3D(H,0,s.RGBA,1,1,X,0,s.RGBA,s.UNSIGNED_BYTE,ee):s.texImage2D(H+oe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ee);return j}let nt={};nt[s.TEXTURE_2D]=xe(s.TEXTURE_2D,s.TEXTURE_2D,1),nt[s.TEXTURE_CUBE_MAP]=xe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(nt[s.TEXTURE_2D_ARRAY]=xe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),nt[s.TEXTURE_3D]=xe(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),et(s.DEPTH_TEST),l.setFunc(Ya),Fe(!1),C(df),et(s.CULL_FACE),ve(mi);function et(R){d[R]!==!0&&(s.enable(R),d[R]=!0)}function ze(R){d[R]!==!1&&(s.disable(R),d[R]=!1)}function it(R,H){return p[R]!==H?(s.bindFramebuffer(R,H),p[R]=H,n&&(R===s.DRAW_FRAMEBUFFER&&(p[s.FRAMEBUFFER]=H),R===s.FRAMEBUFFER&&(p[s.DRAW_FRAMEBUFFER]=H)),!0):!1}function W(R,H){let N=x,X=!1;if(R)if(N=_.get(H),N===void 0&&(N=[],_.set(H,N)),R.isWebGLMultipleRenderTargets){let ee=R.texture;if(N.length!==ee.length||N[0]!==s.COLOR_ATTACHMENT0){for(let j=0,oe=ee.length;j<oe;j++)N[j]=s.COLOR_ATTACHMENT0+j;N.length=ee.length,X=!0}}else N[0]!==s.COLOR_ATTACHMENT0&&(N[0]=s.COLOR_ATTACHMENT0,X=!0);else N[0]!==s.BACK&&(N[0]=s.BACK,X=!0);X&&(t.isWebGL2?s.drawBuffers(N):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(N))}function Te(R){return g!==R?(s.useProgram(R),g=R,!0):!1}let Me={[Rs]:s.FUNC_ADD,[Ym]:s.FUNC_SUBTRACT,[Zm]:s.FUNC_REVERSE_SUBTRACT};if(n)Me[gf]=s.MIN,Me[xf]=s.MAX;else{let R=e.get("EXT_blend_minmax");R!==null&&(Me[gf]=R.MIN_EXT,Me[xf]=R.MAX_EXT)}let Ie={[Km]:s.ZERO,[jm]:s.ONE,[Jm]:s.SRC_COLOR,[$c]:s.SRC_ALPHA,[i0]:s.SRC_ALPHA_SATURATE,[t0]:s.DST_COLOR,[Qm]:s.DST_ALPHA,[$m]:s.ONE_MINUS_SRC_COLOR,[Qc]:s.ONE_MINUS_SRC_ALPHA,[n0]:s.ONE_MINUS_DST_COLOR,[e0]:s.ONE_MINUS_DST_ALPHA,[s0]:s.CONSTANT_COLOR,[r0]:s.ONE_MINUS_CONSTANT_COLOR,[o0]:s.CONSTANT_ALPHA,[a0]:s.ONE_MINUS_CONSTANT_ALPHA};function ve(R,H,N,X,ee,j,oe,q,ce,Pe){if(R===mi){m===!0&&(ze(s.BLEND),m=!1);return}if(m===!1&&(et(s.BLEND),m=!0),R!==qm){if(R!==M||Pe!==ne){if((v!==Rs||U!==Rs)&&(s.blendEquation(s.FUNC_ADD),v=Rs,U=Rs),Pe)switch(R){case br:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Tr:s.blendFunc(s.ONE,s.ONE);break;case pf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case mf:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case br:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Tr:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case pf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case mf:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}w=null,z=null,D=null,Q=null,E.set(0,0,0),P=0,M=R,ne=Pe}return}ee=ee||H,j=j||N,oe=oe||X,(H!==v||ee!==U)&&(s.blendEquationSeparate(Me[H],Me[ee]),v=H,U=ee),(N!==w||X!==z||j!==D||oe!==Q)&&(s.blendFuncSeparate(Ie[N],Ie[X],Ie[j],Ie[oe]),w=N,z=X,D=j,Q=oe),(q.equals(E)===!1||ce!==P)&&(s.blendColor(q.r,q.g,q.b,ce),E.copy(q),P=ce),M=R,ne=!1}function je(R,H){R.side===yt?ze(s.CULL_FACE):et(s.CULL_FACE);let N=R.side===xn;H&&(N=!N),Fe(N),R.blending===br&&R.transparent===!1?ve(mi):ve(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),a.setMask(R.colorWrite);let X=R.stencilWrite;c.setTest(X),X&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),re(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?et(s.SAMPLE_ALPHA_TO_COVERAGE):ze(s.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(R){J!==R&&(R?s.frontFace(s.CW):s.frontFace(s.CCW),J=R)}function C(R){R!==Wm?(et(s.CULL_FACE),R!==Le&&(R===df?s.cullFace(s.BACK):R===Xm?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ze(s.CULL_FACE),Le=R}function A(R){R!==B&&(K&&s.lineWidth(R),B=R)}function re(R,H,N){R?(et(s.POLYGON_OFFSET_FILL),(se!==H||pe!==N)&&(s.polygonOffset(H,N),se=H,pe=N)):ze(s.POLYGON_OFFSET_FILL)}function we(R){R?et(s.SCISSOR_TEST):ze(s.SCISSOR_TEST)}function Ae(R){R===void 0&&(R=s.TEXTURE0+$-1),be!==R&&(s.activeTexture(R),be=R)}function ye(R,H,N){N===void 0&&(be===null?N=s.TEXTURE0+$-1:N=be);let X=de[N];X===void 0&&(X={type:void 0,texture:void 0},de[N]=X),(X.type!==R||X.texture!==H)&&(be!==N&&(s.activeTexture(N),be=N),s.bindTexture(R,H||nt[R]),X.type=R,X.texture=H)}function Ye(){let R=de[be];R!==void 0&&R.type!==void 0&&(s.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Ne(){try{s.compressedTexImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ge(){try{s.compressedTexImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function $e(){try{s.texSubImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Qe(){try{s.texSubImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Re(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function at(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function V(){try{s.texStorage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ee(){try{s.texStorage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Oe(){try{s.texImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ce(){try{s.texImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Je(R){Se.equals(R)===!1&&(s.scissor(R.x,R.y,R.z,R.w),Se.copy(R))}function lt(R){ke.equals(R)===!1&&(s.viewport(R.x,R.y,R.z,R.w),ke.copy(R))}function ft(R,H){let N=f.get(H);N===void 0&&(N=new WeakMap,f.set(H,N));let X=N.get(R);X===void 0&&(X=s.getUniformBlockIndex(H,R.name),N.set(R,X))}function G(R,H){let X=f.get(H).get(R);u.get(H)!==X&&(s.uniformBlockBinding(H,X,R.__bindingPointIndex),u.set(H,X))}function Z(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},be=null,de={},p={},_=new WeakMap,x=[],g=null,m=!1,M=null,v=null,w=null,z=null,U=null,D=null,Q=null,E=new qe(0,0,0),P=0,ne=!1,J=null,Le=null,B=null,se=null,pe=null,Se.set(0,0,s.canvas.width,s.canvas.height),ke.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:et,disable:ze,bindFramebuffer:it,drawBuffers:W,useProgram:Te,setBlending:ve,setMaterial:je,setFlipSided:Fe,setCullFace:C,setLineWidth:A,setPolygonOffset:re,setScissorTest:we,activeTexture:Ae,bindTexture:ye,unbindTexture:Ye,compressedTexImage2D:Ne,compressedTexImage3D:Ge,texImage2D:Oe,texImage3D:Ce,updateUBOMapping:ft,uniformBlockBinding:G,texStorage2D:V,texStorage3D:Ee,texSubImage2D:$e,texSubImage3D:Qe,compressedTexSubImage2D:Re,compressedTexSubImage3D:at,scissor:Je,viewport:lt,reset:Z}}function Bv(s,e,t,n,i,r,o){let a=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,f,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,A){return p?new OffscreenCanvas(C,A):Ao("canvas")}function x(C,A,re,we){let Ae=1;if((C.width>we||C.height>we)&&(Ae=we/Math.max(C.width,C.height)),Ae<1||A===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){let ye=A?Qa:Math.floor,Ye=ye(Ae*C.width),Ne=ye(Ae*C.height);f===void 0&&(f=_(Ye,Ne));let Ge=re?_(Ye,Ne):f;return Ge.width=Ye,Ge.height=Ne,Ge.getContext("2d").drawImage(C,0,0,Ye,Ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Ye+"x"+Ne+")."),Ge}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function g(C){return su(C.width)&&su(C.height)}function m(C){return a?!1:C.wrapS!==Un||C.wrapT!==Un||C.minFilter!==nn&&C.minFilter!==jt}function M(C,A){return C.generateMipmaps&&A&&C.minFilter!==nn&&C.minFilter!==jt}function v(C){s.generateMipmap(C)}function w(C,A,re,we,Ae=!1){if(a===!1)return A;if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ye=A;if(A===s.RED&&(re===s.FLOAT&&(ye=s.R32F),re===s.HALF_FLOAT&&(ye=s.R16F),re===s.UNSIGNED_BYTE&&(ye=s.R8)),A===s.RED_INTEGER&&(re===s.UNSIGNED_BYTE&&(ye=s.R8UI),re===s.UNSIGNED_SHORT&&(ye=s.R16UI),re===s.UNSIGNED_INT&&(ye=s.R32UI),re===s.BYTE&&(ye=s.R8I),re===s.SHORT&&(ye=s.R16I),re===s.INT&&(ye=s.R32I)),A===s.RG&&(re===s.FLOAT&&(ye=s.RG32F),re===s.HALF_FLOAT&&(ye=s.RG16F),re===s.UNSIGNED_BYTE&&(ye=s.RG8)),A===s.RGBA){let Ye=Ae?Ka:At.getTransfer(we);re===s.FLOAT&&(ye=s.RGBA32F),re===s.HALF_FLOAT&&(ye=s.RGBA16F),re===s.UNSIGNED_BYTE&&(ye=Ye===Ot?s.SRGB8_ALPHA8:s.RGBA8),re===s.UNSIGNED_SHORT_4_4_4_4&&(ye=s.RGBA4),re===s.UNSIGNED_SHORT_5_5_5_1&&(ye=s.RGB5_A1)}return(ye===s.R16F||ye===s.R32F||ye===s.RG16F||ye===s.RG32F||ye===s.RGBA16F||ye===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ye}function z(C,A,re){return M(C,re)===!0||C.isFramebufferTexture&&C.minFilter!==nn&&C.minFilter!==jt?Math.log2(Math.max(A.width,A.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?A.mipmaps.length:1}function U(C){return C===nn||C===Za||C===_o?s.NEAREST:s.LINEAR}function D(C){let A=C.target;A.removeEventListener("dispose",D),E(A),A.isVideoTexture&&u.delete(A)}function Q(C){let A=C.target;A.removeEventListener("dispose",Q),ne(A)}function E(C){let A=n.get(C);if(A.__webglInit===void 0)return;let re=C.source,we=d.get(re);if(we){let Ae=we[A.__cacheKey];Ae.usedTimes--,Ae.usedTimes===0&&P(C),Object.keys(we).length===0&&d.delete(re)}n.remove(C)}function P(C){let A=n.get(C);s.deleteTexture(A.__webglTexture);let re=C.source,we=d.get(re);delete we[A.__cacheKey],o.memory.textures--}function ne(C){let A=C.texture,re=n.get(C),we=n.get(A);if(we.__webglTexture!==void 0&&(s.deleteTexture(we.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let Ae=0;Ae<6;Ae++){if(Array.isArray(re.__webglFramebuffer[Ae]))for(let ye=0;ye<re.__webglFramebuffer[Ae].length;ye++)s.deleteFramebuffer(re.__webglFramebuffer[Ae][ye]);else s.deleteFramebuffer(re.__webglFramebuffer[Ae]);re.__webglDepthbuffer&&s.deleteRenderbuffer(re.__webglDepthbuffer[Ae])}else{if(Array.isArray(re.__webglFramebuffer))for(let Ae=0;Ae<re.__webglFramebuffer.length;Ae++)s.deleteFramebuffer(re.__webglFramebuffer[Ae]);else s.deleteFramebuffer(re.__webglFramebuffer);if(re.__webglDepthbuffer&&s.deleteRenderbuffer(re.__webglDepthbuffer),re.__webglMultisampledFramebuffer&&s.deleteFramebuffer(re.__webglMultisampledFramebuffer),re.__webglColorRenderbuffer)for(let Ae=0;Ae<re.__webglColorRenderbuffer.length;Ae++)re.__webglColorRenderbuffer[Ae]&&s.deleteRenderbuffer(re.__webglColorRenderbuffer[Ae]);re.__webglDepthRenderbuffer&&s.deleteRenderbuffer(re.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let Ae=0,ye=A.length;Ae<ye;Ae++){let Ye=n.get(A[Ae]);Ye.__webglTexture&&(s.deleteTexture(Ye.__webglTexture),o.memory.textures--),n.remove(A[Ae])}n.remove(A),n.remove(C)}let J=0;function Le(){J=0}function B(){let C=J;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),J+=1,C}function se(C){let A=[];return A.push(C.wrapS),A.push(C.wrapT),A.push(C.wrapR||0),A.push(C.magFilter),A.push(C.minFilter),A.push(C.anisotropy),A.push(C.internalFormat),A.push(C.format),A.push(C.type),A.push(C.generateMipmaps),A.push(C.premultiplyAlpha),A.push(C.flipY),A.push(C.unpackAlignment),A.push(C.colorSpace),A.join()}function pe(C,A){let re=n.get(C);if(C.isVideoTexture&&je(C),C.isRenderTargetTexture===!1&&C.version>0&&re.__version!==C.version){let we=C.image;if(we===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(we.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Se(re,C,A);return}}t.bindTexture(s.TEXTURE_2D,re.__webglTexture,s.TEXTURE0+A)}function $(C,A){let re=n.get(C);if(C.version>0&&re.__version!==C.version){Se(re,C,A);return}t.bindTexture(s.TEXTURE_2D_ARRAY,re.__webglTexture,s.TEXTURE0+A)}function K(C,A){let re=n.get(C);if(C.version>0&&re.__version!==C.version){Se(re,C,A);return}t.bindTexture(s.TEXTURE_3D,re.__webglTexture,s.TEXTURE0+A)}function te(C,A){let re=n.get(C);if(C.version>0&&re.__version!==C.version){ke(re,C,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture,s.TEXTURE0+A)}let me={[_n]:s.REPEAT,[Un]:s.CLAMP_TO_EDGE,[wo]:s.MIRRORED_REPEAT},be={[nn]:s.NEAREST,[Za]:s.NEAREST_MIPMAP_NEAREST,[_o]:s.NEAREST_MIPMAP_LINEAR,[jt]:s.LINEAR,[qu]:s.LINEAR_MIPMAP_NEAREST,[ns]:s.LINEAR_MIPMAP_LINEAR},de={[L0]:s.NEVER,[F0]:s.ALWAYS,[I0]:s.LESS,[yp]:s.LEQUAL,[D0]:s.EQUAL,[O0]:s.GEQUAL,[U0]:s.GREATER,[N0]:s.NOTEQUAL};function ie(C,A,re){if(re?(s.texParameteri(C,s.TEXTURE_WRAP_S,me[A.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,me[A.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,me[A.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,be[A.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,be[A.minFilter])):(s.texParameteri(C,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(C,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(A.wrapS!==Un||A.wrapT!==Un)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(C,s.TEXTURE_MAG_FILTER,U(A.magFilter)),s.texParameteri(C,s.TEXTURE_MIN_FILTER,U(A.minFilter)),A.minFilter!==nn&&A.minFilter!==jt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,de[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let we=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===nn||A.minFilter!==_o&&A.minFilter!==ns||A.type===Pi&&e.has("OES_texture_float_linear")===!1||a===!1&&A.type===ti&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(s.texParameterf(C,we.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function F(C,A){let re=!1;C.__webglInit===void 0&&(C.__webglInit=!0,A.addEventListener("dispose",D));let we=A.source,Ae=d.get(we);Ae===void 0&&(Ae={},d.set(we,Ae));let ye=se(A);if(ye!==C.__cacheKey){Ae[ye]===void 0&&(Ae[ye]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,re=!0),Ae[ye].usedTimes++;let Ye=Ae[C.__cacheKey];Ye!==void 0&&(Ae[C.__cacheKey].usedTimes--,Ye.usedTimes===0&&P(A)),C.__cacheKey=ye,C.__webglTexture=Ae[ye].texture}return re}function Se(C,A,re){let we=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(we=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(we=s.TEXTURE_3D);let Ae=F(C,A),ye=A.source;t.bindTexture(we,C.__webglTexture,s.TEXTURE0+re);let Ye=n.get(ye);if(ye.version!==Ye.__version||Ae===!0){t.activeTexture(s.TEXTURE0+re);let Ne=At.getPrimaries(At.workingColorSpace),Ge=A.colorSpace===zn?null:At.getPrimaries(A.colorSpace),$e=A.colorSpace===zn||Ne===Ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let Qe=m(A)&&g(A.image)===!1,Re=x(A.image,Qe,!1,i.maxTextureSize);Re=Fe(A,Re);let at=g(Re)||a,V=r.convert(A.format,A.colorSpace),Ee=r.convert(A.type),Oe=w(A.internalFormat,V,Ee,A.colorSpace,A.isVideoTexture);ie(we,A,at);let Ce,Je=A.mipmaps,lt=a&&A.isVideoTexture!==!0&&Oe!==mp,ft=Ye.__version===void 0||Ae===!0,G=z(A,Re,at);if(A.isDepthTexture)Oe=s.DEPTH_COMPONENT,a?A.type===Pi?Oe=s.DEPTH_COMPONENT32F:A.type===Ji?Oe=s.DEPTH_COMPONENT24:A.type===Ls?Oe=s.DEPTH24_STENCIL8:Oe=s.DEPTH_COMPONENT16:A.type===Pi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Is&&Oe===s.DEPTH_COMPONENT&&A.type!==Yu&&A.type!==Ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Ji,Ee=r.convert(A.type)),A.format===Er&&Oe===s.DEPTH_COMPONENT&&(Oe=s.DEPTH_STENCIL,A.type!==Ls&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Ls,Ee=r.convert(A.type))),ft&&(lt?t.texStorage2D(s.TEXTURE_2D,1,Oe,Re.width,Re.height):t.texImage2D(s.TEXTURE_2D,0,Oe,Re.width,Re.height,0,V,Ee,null));else if(A.isDataTexture)if(Je.length>0&&at){lt&&ft&&t.texStorage2D(s.TEXTURE_2D,G,Oe,Je[0].width,Je[0].height);for(let Z=0,R=Je.length;Z<R;Z++)Ce=Je[Z],lt?t.texSubImage2D(s.TEXTURE_2D,Z,0,0,Ce.width,Ce.height,V,Ee,Ce.data):t.texImage2D(s.TEXTURE_2D,Z,Oe,Ce.width,Ce.height,0,V,Ee,Ce.data);A.generateMipmaps=!1}else lt?(ft&&t.texStorage2D(s.TEXTURE_2D,G,Oe,Re.width,Re.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Re.width,Re.height,V,Ee,Re.data)):t.texImage2D(s.TEXTURE_2D,0,Oe,Re.width,Re.height,0,V,Ee,Re.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){lt&&ft&&t.texStorage3D(s.TEXTURE_2D_ARRAY,G,Oe,Je[0].width,Je[0].height,Re.depth);for(let Z=0,R=Je.length;Z<R;Z++)Ce=Je[Z],A.format!==kn?V!==null?lt?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,Ce.width,Ce.height,Re.depth,V,Ce.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Z,Oe,Ce.width,Ce.height,Re.depth,0,Ce.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?t.texSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,Ce.width,Ce.height,Re.depth,V,Ee,Ce.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Z,Oe,Ce.width,Ce.height,Re.depth,0,V,Ee,Ce.data)}else{lt&&ft&&t.texStorage2D(s.TEXTURE_2D,G,Oe,Je[0].width,Je[0].height);for(let Z=0,R=Je.length;Z<R;Z++)Ce=Je[Z],A.format!==kn?V!==null?lt?t.compressedTexSubImage2D(s.TEXTURE_2D,Z,0,0,Ce.width,Ce.height,V,Ce.data):t.compressedTexImage2D(s.TEXTURE_2D,Z,Oe,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?t.texSubImage2D(s.TEXTURE_2D,Z,0,0,Ce.width,Ce.height,V,Ee,Ce.data):t.texImage2D(s.TEXTURE_2D,Z,Oe,Ce.width,Ce.height,0,V,Ee,Ce.data)}else if(A.isDataArrayTexture)lt?(ft&&t.texStorage3D(s.TEXTURE_2D_ARRAY,G,Oe,Re.width,Re.height,Re.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Re.width,Re.height,Re.depth,V,Ee,Re.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Oe,Re.width,Re.height,Re.depth,0,V,Ee,Re.data);else if(A.isData3DTexture)lt?(ft&&t.texStorage3D(s.TEXTURE_3D,G,Oe,Re.width,Re.height,Re.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Re.width,Re.height,Re.depth,V,Ee,Re.data)):t.texImage3D(s.TEXTURE_3D,0,Oe,Re.width,Re.height,Re.depth,0,V,Ee,Re.data);else if(A.isFramebufferTexture){if(ft)if(lt)t.texStorage2D(s.TEXTURE_2D,G,Oe,Re.width,Re.height);else{let Z=Re.width,R=Re.height;for(let H=0;H<G;H++)t.texImage2D(s.TEXTURE_2D,H,Oe,Z,R,0,V,Ee,null),Z>>=1,R>>=1}}else if(Je.length>0&&at){lt&&ft&&t.texStorage2D(s.TEXTURE_2D,G,Oe,Je[0].width,Je[0].height);for(let Z=0,R=Je.length;Z<R;Z++)Ce=Je[Z],lt?t.texSubImage2D(s.TEXTURE_2D,Z,0,0,V,Ee,Ce):t.texImage2D(s.TEXTURE_2D,Z,Oe,V,Ee,Ce);A.generateMipmaps=!1}else lt?(ft&&t.texStorage2D(s.TEXTURE_2D,G,Oe,Re.width,Re.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,V,Ee,Re)):t.texImage2D(s.TEXTURE_2D,0,Oe,V,Ee,Re);M(A,at)&&v(we),Ye.__version=ye.version,A.onUpdate&&A.onUpdate(A)}C.__version=A.version}function ke(C,A,re){if(A.image.length!==6)return;let we=F(C,A),Ae=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+re);let ye=n.get(Ae);if(Ae.version!==ye.__version||we===!0){t.activeTexture(s.TEXTURE0+re);let Ye=At.getPrimaries(At.workingColorSpace),Ne=A.colorSpace===zn?null:At.getPrimaries(A.colorSpace),Ge=A.colorSpace===zn||Ye===Ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let $e=A.isCompressedTexture||A.image[0].isCompressedTexture,Qe=A.image[0]&&A.image[0].isDataTexture,Re=[];for(let Z=0;Z<6;Z++)!$e&&!Qe?Re[Z]=x(A.image[Z],!1,!0,i.maxCubemapSize):Re[Z]=Qe?A.image[Z].image:A.image[Z],Re[Z]=Fe(A,Re[Z]);let at=Re[0],V=g(at)||a,Ee=r.convert(A.format,A.colorSpace),Oe=r.convert(A.type),Ce=w(A.internalFormat,Ee,Oe,A.colorSpace),Je=a&&A.isVideoTexture!==!0,lt=ye.__version===void 0||we===!0,ft=z(A,at,V);ie(s.TEXTURE_CUBE_MAP,A,V);let G;if($e){Je&&lt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ft,Ce,at.width,at.height);for(let Z=0;Z<6;Z++){G=Re[Z].mipmaps;for(let R=0;R<G.length;R++){let H=G[R];A.format!==kn?Ee!==null?Je?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,R,0,0,H.width,H.height,Ee,H.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,R,Ce,H.width,H.height,0,H.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Je?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,R,0,0,H.width,H.height,Ee,Oe,H.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,R,Ce,H.width,H.height,0,Ee,Oe,H.data)}}}else{G=A.mipmaps,Je&&lt&&(G.length>0&&ft++,t.texStorage2D(s.TEXTURE_CUBE_MAP,ft,Ce,Re[0].width,Re[0].height));for(let Z=0;Z<6;Z++)if(Qe){Je?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Re[Z].width,Re[Z].height,Ee,Oe,Re[Z].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ce,Re[Z].width,Re[Z].height,0,Ee,Oe,Re[Z].data);for(let R=0;R<G.length;R++){let N=G[R].image[Z].image;Je?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,R+1,0,0,N.width,N.height,Ee,Oe,N.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,R+1,Ce,N.width,N.height,0,Ee,Oe,N.data)}}else{Je?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ee,Oe,Re[Z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ce,Ee,Oe,Re[Z]);for(let R=0;R<G.length;R++){let H=G[R];Je?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,R+1,0,0,Ee,Oe,H.image[Z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,R+1,Ce,Ee,Oe,H.image[Z])}}}M(A,V)&&v(s.TEXTURE_CUBE_MAP),ye.__version=Ae.version,A.onUpdate&&A.onUpdate(A)}C.__version=A.version}function xe(C,A,re,we,Ae,ye){let Ye=r.convert(re.format,re.colorSpace),Ne=r.convert(re.type),Ge=w(re.internalFormat,Ye,Ne,re.colorSpace);if(!n.get(A).__hasExternalTextures){let Qe=Math.max(1,A.width>>ye),Re=Math.max(1,A.height>>ye);Ae===s.TEXTURE_3D||Ae===s.TEXTURE_2D_ARRAY?t.texImage3D(Ae,ye,Ge,Qe,Re,A.depth,0,Ye,Ne,null):t.texImage2D(Ae,ye,Ge,Qe,Re,0,Ye,Ne,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),ve(A)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,we,Ae,n.get(re).__webglTexture,0,Ie(A)):(Ae===s.TEXTURE_2D||Ae>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Ae<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,we,Ae,n.get(re).__webglTexture,ye),t.bindFramebuffer(s.FRAMEBUFFER,null)}function nt(C,A,re){if(s.bindRenderbuffer(s.RENDERBUFFER,C),A.depthBuffer&&!A.stencilBuffer){let we=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(re||ve(A)){let Ae=A.depthTexture;Ae&&Ae.isDepthTexture&&(Ae.type===Pi?we=s.DEPTH_COMPONENT32F:Ae.type===Ji&&(we=s.DEPTH_COMPONENT24));let ye=Ie(A);ve(A)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ye,we,A.width,A.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ye,we,A.width,A.height)}else s.renderbufferStorage(s.RENDERBUFFER,we,A.width,A.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,C)}else if(A.depthBuffer&&A.stencilBuffer){let we=Ie(A);re&&ve(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,we,s.DEPTH24_STENCIL8,A.width,A.height):ve(A)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,we,s.DEPTH24_STENCIL8,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,C)}else{let we=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let Ae=0;Ae<we.length;Ae++){let ye=we[Ae],Ye=r.convert(ye.format,ye.colorSpace),Ne=r.convert(ye.type),Ge=w(ye.internalFormat,Ye,Ne,ye.colorSpace),$e=Ie(A);re&&ve(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,$e,Ge,A.width,A.height):ve(A)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$e,Ge,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Ge,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function et(C,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),pe(A.depthTexture,0);let we=n.get(A.depthTexture).__webglTexture,Ae=Ie(A);if(A.depthTexture.format===Is)ve(A)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,we,0,Ae):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,we,0);else if(A.depthTexture.format===Er)ve(A)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,we,0,Ae):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,we,0);else throw new Error("Unknown depthTexture format")}function ze(C){let A=n.get(C),re=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!A.__autoAllocateDepthBuffer){if(re)throw new Error("target.depthTexture not supported in Cube render targets");et(A.__webglFramebuffer,C)}else if(re){A.__webglDepthbuffer=[];for(let we=0;we<6;we++)t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[we]),A.__webglDepthbuffer[we]=s.createRenderbuffer(),nt(A.__webglDepthbuffer[we],C,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=s.createRenderbuffer(),nt(A.__webglDepthbuffer,C,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function it(C,A,re){let we=n.get(C);A!==void 0&&xe(we.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),re!==void 0&&ze(C)}function W(C){let A=C.texture,re=n.get(C),we=n.get(A);C.addEventListener("dispose",Q),C.isWebGLMultipleRenderTargets!==!0&&(we.__webglTexture===void 0&&(we.__webglTexture=s.createTexture()),we.__version=A.version,o.memory.textures++);let Ae=C.isWebGLCubeRenderTarget===!0,ye=C.isWebGLMultipleRenderTargets===!0,Ye=g(C)||a;if(Ae){re.__webglFramebuffer=[];for(let Ne=0;Ne<6;Ne++)if(a&&A.mipmaps&&A.mipmaps.length>0){re.__webglFramebuffer[Ne]=[];for(let Ge=0;Ge<A.mipmaps.length;Ge++)re.__webglFramebuffer[Ne][Ge]=s.createFramebuffer()}else re.__webglFramebuffer[Ne]=s.createFramebuffer()}else{if(a&&A.mipmaps&&A.mipmaps.length>0){re.__webglFramebuffer=[];for(let Ne=0;Ne<A.mipmaps.length;Ne++)re.__webglFramebuffer[Ne]=s.createFramebuffer()}else re.__webglFramebuffer=s.createFramebuffer();if(ye)if(i.drawBuffers){let Ne=C.texture;for(let Ge=0,$e=Ne.length;Ge<$e;Ge++){let Qe=n.get(Ne[Ge]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&ve(C)===!1){let Ne=ye?A:[A];re.__webglMultisampledFramebuffer=s.createFramebuffer(),re.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,re.__webglMultisampledFramebuffer);for(let Ge=0;Ge<Ne.length;Ge++){let $e=Ne[Ge];re.__webglColorRenderbuffer[Ge]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,re.__webglColorRenderbuffer[Ge]);let Qe=r.convert($e.format,$e.colorSpace),Re=r.convert($e.type),at=w($e.internalFormat,Qe,Re,$e.colorSpace,C.isXRRenderTarget===!0),V=Ie(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,V,at,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ge,s.RENDERBUFFER,re.__webglColorRenderbuffer[Ge])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(re.__webglDepthRenderbuffer=s.createRenderbuffer(),nt(re.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ae){t.bindTexture(s.TEXTURE_CUBE_MAP,we.__webglTexture),ie(s.TEXTURE_CUBE_MAP,A,Ye);for(let Ne=0;Ne<6;Ne++)if(a&&A.mipmaps&&A.mipmaps.length>0)for(let Ge=0;Ge<A.mipmaps.length;Ge++)xe(re.__webglFramebuffer[Ne][Ge],C,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Ge);else xe(re.__webglFramebuffer[Ne],C,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0);M(A,Ye)&&v(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){let Ne=C.texture;for(let Ge=0,$e=Ne.length;Ge<$e;Ge++){let Qe=Ne[Ge],Re=n.get(Qe);t.bindTexture(s.TEXTURE_2D,Re.__webglTexture),ie(s.TEXTURE_2D,Qe,Ye),xe(re.__webglFramebuffer,C,Qe,s.COLOR_ATTACHMENT0+Ge,s.TEXTURE_2D,0),M(Qe,Ye)&&v(s.TEXTURE_2D)}t.unbindTexture()}else{let Ne=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?Ne=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ne,we.__webglTexture),ie(Ne,A,Ye),a&&A.mipmaps&&A.mipmaps.length>0)for(let Ge=0;Ge<A.mipmaps.length;Ge++)xe(re.__webglFramebuffer[Ge],C,A,s.COLOR_ATTACHMENT0,Ne,Ge);else xe(re.__webglFramebuffer,C,A,s.COLOR_ATTACHMENT0,Ne,0);M(A,Ye)&&v(Ne),t.unbindTexture()}C.depthBuffer&&ze(C)}function Te(C){let A=g(C)||a,re=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let we=0,Ae=re.length;we<Ae;we++){let ye=re[we];if(M(ye,A)){let Ye=C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Ne=n.get(ye).__webglTexture;t.bindTexture(Ye,Ne),v(Ye),t.unbindTexture()}}}function Me(C){if(a&&C.samples>0&&ve(C)===!1){let A=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],re=C.width,we=C.height,Ae=s.COLOR_BUFFER_BIT,ye=[],Ye=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ne=n.get(C),Ge=C.isWebGLMultipleRenderTargets===!0;if(Ge)for(let $e=0;$e<A.length;$e++)t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let $e=0;$e<A.length;$e++){ye.push(s.COLOR_ATTACHMENT0+$e),C.depthBuffer&&ye.push(Ye);let Qe=Ne.__ignoreDepthValues!==void 0?Ne.__ignoreDepthValues:!1;if(Qe===!1&&(C.depthBuffer&&(Ae|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&(Ae|=s.STENCIL_BUFFER_BIT)),Ge&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ne.__webglColorRenderbuffer[$e]),Qe===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Ye]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Ye])),Ge){let Re=n.get(A[$e]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Re,0)}s.blitFramebuffer(0,0,re,we,0,0,re,we,Ae,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ye)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ge)for(let $e=0;$e<A.length;$e++){t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.RENDERBUFFER,Ne.__webglColorRenderbuffer[$e]);let Qe=n.get(A[$e]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.TEXTURE_2D,Qe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}}function Ie(C){return Math.min(i.maxSamples,C.samples)}function ve(C){let A=n.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function je(C){let A=o.render.frame;u.get(C)!==A&&(u.set(C,A),C.update())}function Fe(C,A){let re=C.colorSpace,we=C.format,Ae=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===iu||re!==sn&&re!==zn&&(At.getTransfer(re)===Ot?a===!1?e.has("EXT_sRGB")===!0&&we===kn?(C.format=iu,C.minFilter=jt,C.generateMipmaps=!1):A=el.sRGBToLinear(A):(we!==kn||Ae!==es)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",re)),A}this.allocateTextureUnit=B,this.resetTextureUnits=Le,this.setTexture2D=pe,this.setTexture2DArray=$,this.setTexture3D=K,this.setTextureCube=te,this.rebindTextures=it,this.setupRenderTarget=W,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=ve}function kv(s,e,t){let n=t.isWebGL2;function i(r,o=zn){let a,l=At.getTransfer(o);if(r===es)return s.UNSIGNED_BYTE;if(r===up)return s.UNSIGNED_SHORT_4_4_4_4;if(r===hp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===y0)return s.BYTE;if(r===v0)return s.SHORT;if(r===Yu)return s.UNSIGNED_SHORT;if(r===cp)return s.INT;if(r===Ji)return s.UNSIGNED_INT;if(r===Pi)return s.FLOAT;if(r===ti)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===b0)return s.ALPHA;if(r===kn)return s.RGBA;if(r===S0)return s.LUMINANCE;if(r===M0)return s.LUMINANCE_ALPHA;if(r===Is)return s.DEPTH_COMPONENT;if(r===Er)return s.DEPTH_STENCIL;if(r===iu)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===T0)return s.RED;if(r===fp)return s.RED_INTEGER;if(r===w0)return s.RG;if(r===dp)return s.RG_INTEGER;if(r===pp)return s.RGBA_INTEGER;if(r===mc||r===gc||r===xc||r===_c)if(l===Ot)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===mc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===gc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===xc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===_c)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===mc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===gc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===xc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===_c)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===yf||r===vf||r===bf||r===Sf)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===yf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===vf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===bf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Sf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===mp)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Mf||r===Tf)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Mf)return l===Ot?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Tf)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===wf||r===Af||r===Ef||r===Rf||r===Cf||r===Pf||r===Lf||r===If||r===Df||r===Uf||r===Nf||r===Of||r===Ff||r===Bf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===wf)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Af)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ef)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Rf)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Cf)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Pf)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Lf)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===If)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Df)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Uf)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Nf)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Of)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ff)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Bf)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===yc||r===kf||r===zf)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===yc)return l===Ot?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===kf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===zf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===A0||r===Gf||r===Vf||r===Hf)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===yc)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Gf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Vf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Hf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ls?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var xu=class extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},un=class extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}},zv={type:"move"},So=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(zv)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new un;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},_u=class extends xi{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,_=null,x=t.getContextAttributes(),g=null,m=null,M=[],v=[],w=new he,z=null,U=new Qt;U.layers.enable(1),U.viewport=new Ft;let D=new Qt;D.layers.enable(2),D.viewport=new Ft;let Q=[U,D],E=new xu;E.layers.enable(1),E.layers.enable(2);let P=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let F=M[ie];return F===void 0&&(F=new So,M[ie]=F),F.getTargetRaySpace()},this.getControllerGrip=function(ie){let F=M[ie];return F===void 0&&(F=new So,M[ie]=F),F.getGripSpace()},this.getHand=function(ie){let F=M[ie];return F===void 0&&(F=new So,M[ie]=F),F.getHandSpace()};function J(ie){let F=v.indexOf(ie.inputSource);if(F===-1)return;let Se=M[F];Se!==void 0&&(Se.update(ie.inputSource,ie.frame,c||o),Se.dispatchEvent({type:ie.type,data:ie.inputSource}))}function Le(){i.removeEventListener("select",J),i.removeEventListener("selectstart",J),i.removeEventListener("selectend",J),i.removeEventListener("squeeze",J),i.removeEventListener("squeezestart",J),i.removeEventListener("squeezeend",J),i.removeEventListener("end",Le),i.removeEventListener("inputsourceschange",B);for(let ie=0;ie<M.length;ie++){let F=v[ie];F!==null&&(v[ie]=null,M[ie].disconnect(F))}P=null,ne=null,e.setRenderTarget(g),p=null,d=null,f=null,i=null,m=null,de.stop(),n.isPresenting=!1,e.setPixelRatio(z),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){r=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(ie){if(i=ie,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",J),i.addEventListener("selectstart",J),i.addEventListener("selectend",J),i.addEventListener("squeeze",J),i.addEventListener("squeezestart",J),i.addEventListener("squeezeend",J),i.addEventListener("end",Le),i.addEventListener("inputsourceschange",B),x.xrCompatible!==!0&&await t.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(w),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let F={antialias:i.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,F),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),m=new hn(p.framebufferWidth,p.framebufferHeight,{format:kn,type:es,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let F=null,Se=null,ke=null;x.depth&&(ke=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,F=x.stencil?Er:Is,Se=x.stencil?Ls:Ji);let xe={colorFormat:t.RGBA8,depthFormat:ke,scaleFactor:r};f=new XRWebGLBinding(i,t),d=f.createProjectionLayer(xe),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),m=new hn(d.textureWidth,d.textureHeight,{format:kn,type:es,depthTexture:new al(d.textureWidth,d.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let nt=e.properties.get(m);nt.__ignoreDepthValues=d.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),de.setContext(i),de.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function B(ie){for(let F=0;F<ie.removed.length;F++){let Se=ie.removed[F],ke=v.indexOf(Se);ke>=0&&(v[ke]=null,M[ke].disconnect(Se))}for(let F=0;F<ie.added.length;F++){let Se=ie.added[F],ke=v.indexOf(Se);if(ke===-1){for(let nt=0;nt<M.length;nt++)if(nt>=v.length){v.push(Se),ke=nt;break}else if(v[nt]===null){v[nt]=Se,ke=nt;break}if(ke===-1)break}let xe=M[ke];xe&&xe.connect(Se)}}let se=new L,pe=new L;function $(ie,F,Se){se.setFromMatrixPosition(F.matrixWorld),pe.setFromMatrixPosition(Se.matrixWorld);let ke=se.distanceTo(pe),xe=F.projectionMatrix.elements,nt=Se.projectionMatrix.elements,et=xe[14]/(xe[10]-1),ze=xe[14]/(xe[10]+1),it=(xe[9]+1)/xe[5],W=(xe[9]-1)/xe[5],Te=(xe[8]-1)/xe[0],Me=(nt[8]+1)/nt[0],Ie=et*Te,ve=et*Me,je=ke/(-Te+Me),Fe=je*-Te;F.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Fe),ie.translateZ(je),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert();let C=et+je,A=ze+je,re=Ie-Fe,we=ve+(ke-Fe),Ae=it*ze/A*C,ye=W*ze/A*C;ie.projectionMatrix.makePerspective(re,we,Ae,ye,C,A),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}function K(ie,F){F===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(F.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(i===null)return;E.near=D.near=U.near=ie.near,E.far=D.far=U.far=ie.far,(P!==E.near||ne!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),P=E.near,ne=E.far);let F=ie.parent,Se=E.cameras;K(E,F);for(let ke=0;ke<Se.length;ke++)K(Se[ke],F);Se.length===2?$(E,U,D):E.projectionMatrix.copy(U.projectionMatrix),te(ie,E,F)};function te(ie,F,Se){Se===null?ie.matrix.copy(F.matrixWorld):(ie.matrix.copy(Se.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(F.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(F.projectionMatrix),ie.projectionMatrixInverse.copy(F.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Cr*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(ie){l=ie,d!==null&&(d.fixedFoveation=ie),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ie)};let me=null;function be(ie,F){if(u=F.getViewerPose(c||o),_=F,u!==null){let Se=u.views;p!==null&&(e.setRenderTargetFramebuffer(m,p.framebuffer),e.setRenderTarget(m));let ke=!1;Se.length!==E.cameras.length&&(E.cameras.length=0,ke=!0);for(let xe=0;xe<Se.length;xe++){let nt=Se[xe],et=null;if(p!==null)et=p.getViewport(nt);else{let it=f.getViewSubImage(d,nt);et=it.viewport,xe===0&&(e.setRenderTargetTextures(m,it.colorTexture,d.ignoreDepthValues?void 0:it.depthStencilTexture),e.setRenderTarget(m))}let ze=Q[xe];ze===void 0&&(ze=new Qt,ze.layers.enable(xe),ze.viewport=new Ft,Q[xe]=ze),ze.matrix.fromArray(nt.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(nt.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(et.x,et.y,et.width,et.height),xe===0&&(E.matrix.copy(ze.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ke===!0&&E.cameras.push(ze)}}for(let Se=0;Se<M.length;Se++){let ke=v[Se],xe=M[Se];ke!==null&&xe!==void 0&&xe.update(ke,F,c||o)}me&&me(ie,F),F.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:F}),_=null}let de=new Mp;de.setAnimationLoop(be),this.setAnimationLoop=function(ie){me=ie},this.dispose=function(){}}};function Gv(s,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Sp(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,M,v,w){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),f(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&p(g,m,w)):m.isMeshMatcapMaterial?(r(g,m),_(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,M,v):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===xn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===xn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let M=e.get(m).envMap;if(M&&(g.envMap.value=M,g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap){g.lightMap.value=m.lightMap;let v=s._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=m.lightMapIntensity*v,t(m.lightMap,g.lightMapTransform)}m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,M,v){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=v*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),e.get(m).envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function p(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===xn&&g.clearcoatNormalScale.value.negate())),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let M=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Vv(s,e,t,n){let i={},r={},o=[],a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,v){let w=v.program;n.uniformBlockBinding(M,w)}function c(M,v){let w=i[M.id];w===void 0&&(_(M),w=u(M),i[M.id]=w,M.addEventListener("dispose",g));let z=v.program;n.updateUBOMapping(M,z);let U=e.render.frame;r[M.id]!==U&&(d(M),r[M.id]=U)}function u(M){let v=f();M.__bindingPointIndex=v;let w=s.createBuffer(),z=M.__size,U=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,z,U),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,w),w}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let v=i[M.id],w=M.uniforms,z=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let U=0,D=w.length;U<D;U++){let Q=Array.isArray(w[U])?w[U]:[w[U]];for(let E=0,P=Q.length;E<P;E++){let ne=Q[E];if(p(ne,U,E,z)===!0){let J=ne.__offset,Le=Array.isArray(ne.value)?ne.value:[ne.value],B=0;for(let se=0;se<Le.length;se++){let pe=Le[se],$=x(pe);typeof pe=="number"||typeof pe=="boolean"?(ne.__data[0]=pe,s.bufferSubData(s.UNIFORM_BUFFER,J+B,ne.__data)):pe.isMatrix3?(ne.__data[0]=pe.elements[0],ne.__data[1]=pe.elements[1],ne.__data[2]=pe.elements[2],ne.__data[3]=0,ne.__data[4]=pe.elements[3],ne.__data[5]=pe.elements[4],ne.__data[6]=pe.elements[5],ne.__data[7]=0,ne.__data[8]=pe.elements[6],ne.__data[9]=pe.elements[7],ne.__data[10]=pe.elements[8],ne.__data[11]=0):(pe.toArray(ne.__data,B),B+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,J,ne.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(M,v,w,z){let U=M.value,D=v+"_"+w;if(z[D]===void 0)return typeof U=="number"||typeof U=="boolean"?z[D]=U:z[D]=U.clone(),!0;{let Q=z[D];if(typeof U=="number"||typeof U=="boolean"){if(Q!==U)return z[D]=U,!0}else if(Q.equals(U)===!1)return Q.copy(U),!0}return!1}function _(M){let v=M.uniforms,w=0,z=16;for(let D=0,Q=v.length;D<Q;D++){let E=Array.isArray(v[D])?v[D]:[v[D]];for(let P=0,ne=E.length;P<ne;P++){let J=E[P],Le=Array.isArray(J.value)?J.value:[J.value];for(let B=0,se=Le.length;B<se;B++){let pe=Le[B],$=x(pe),K=w%z;K!==0&&z-K<$.boundary&&(w+=z-K),J.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=w,w+=$.storage}}}let U=w%z;return U>0&&(w+=z-U),M.__size=w,M.__cache={},this}function x(M){let v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function g(M){let v=M.target;v.removeEventListener("dispose",g);let w=o.indexOf(v.__bindingPointIndex);o.splice(w,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function m(){for(let M in i)s.deleteBuffer(i[M]);o=[],i={},r={}}return{bind:l,update:c,dispose:m}}var Co=class{constructor(e={}){let{canvas:t=$0(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;let p=new Uint32Array(4),_=new Int32Array(4),x=null,g=null,m=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xe,this._useLegacyLights=!1,this.toneMapping=Qi,this.toneMappingExposure=1;let v=this,w=!1,z=0,U=0,D=null,Q=-1,E=null,P=new Ft,ne=new Ft,J=null,Le=new qe(0),B=0,se=t.width,pe=t.height,$=1,K=null,te=null,me=new Ft(0,0,se,pe),be=new Ft(0,0,se,pe),de=!1,ie=new Ro,F=!1,Se=!1,ke=null,xe=new pt,nt=new he,et=new L,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function it(){return D===null?$:1}let W=n;function Te(I,ae){for(let fe=0;fe<I.length;fe++){let ge=I[fe],ue=t.getContext(ge,ae);if(ue!==null)return ue}return null}try{let I={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",R,!1),t.addEventListener("webglcontextcreationerror",H,!1),W===null){let ae=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&ae.shift(),W=Te(ae,I),W===null)throw Te(ae)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&W instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let Me,Ie,ve,je,Fe,C,A,re,we,Ae,ye,Ye,Ne,Ge,$e,Qe,Re,at,V,Ee,Oe,Ce,Je,lt;function ft(){Me=new ay(W),Ie=new ty(W,Me,e),Me.init(Ie),Ce=new kv(W,Me,Ie),ve=new Fv(W,Me,Ie),je=new uy(W),Fe=new wv,C=new Bv(W,Me,ve,Fe,Ie,Ce,je),A=new iy(v),re=new oy(v),we=new _g(W,Ie),Je=new Q_(W,Me,we,Ie),Ae=new ly(W,we,je,Je),ye=new py(W,Ae,we,je),V=new dy(W,Ie,C),Qe=new ny(Fe),Ye=new Tv(v,A,re,Me,Ie,Je,Qe),Ne=new Gv(v,Fe),Ge=new Ev,$e=new Dv(Me,Ie),at=new $_(v,A,re,ve,ye,d,l),Re=new Ov(v,ye,Ie),lt=new Vv(W,je,Ie,ve),Ee=new ey(W,Me,je,Ie),Oe=new cy(W,Me,je,Ie),je.programs=Ye.programs,v.capabilities=Ie,v.extensions=Me,v.properties=Fe,v.renderLists=Ge,v.shadowMap=Re,v.state=ve,v.info=je}ft();let G=new _u(v,W);this.xr=G,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){let I=Me.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=Me.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(I){I!==void 0&&($=I,this.setSize(se,pe,!1))},this.getSize=function(I){return I.set(se,pe)},this.setSize=function(I,ae,fe=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=I,pe=ae,t.width=Math.floor(I*$),t.height=Math.floor(ae*$),fe===!0&&(t.style.width=I+"px",t.style.height=ae+"px"),this.setViewport(0,0,I,ae)},this.getDrawingBufferSize=function(I){return I.set(se*$,pe*$).floor()},this.setDrawingBufferSize=function(I,ae,fe){se=I,pe=ae,$=fe,t.width=Math.floor(I*fe),t.height=Math.floor(ae*fe),this.setViewport(0,0,I,ae)},this.getCurrentViewport=function(I){return I.copy(P)},this.getViewport=function(I){return I.copy(me)},this.setViewport=function(I,ae,fe,ge){I.isVector4?me.set(I.x,I.y,I.z,I.w):me.set(I,ae,fe,ge),ve.viewport(P.copy(me).multiplyScalar($).floor())},this.getScissor=function(I){return I.copy(be)},this.setScissor=function(I,ae,fe,ge){I.isVector4?be.set(I.x,I.y,I.z,I.w):be.set(I,ae,fe,ge),ve.scissor(ne.copy(be).multiplyScalar($).floor())},this.getScissorTest=function(){return de},this.setScissorTest=function(I){ve.setScissorTest(de=I)},this.setOpaqueSort=function(I){K=I},this.setTransparentSort=function(I){te=I},this.getClearColor=function(I){return I.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor.apply(at,arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha.apply(at,arguments)},this.clear=function(I=!0,ae=!0,fe=!0){let ge=0;if(I){let ue=!1;if(D!==null){let Ve=D.texture.format;ue=Ve===pp||Ve===dp||Ve===fp}if(ue){let Ve=D.texture.type,tt=Ve===es||Ve===Ji||Ve===Yu||Ve===Ls||Ve===up||Ve===hp,st=at.getClearColor(),ct=at.getClearAlpha(),dt=st.r,ht=st.g,ut=st.b;tt?(p[0]=dt,p[1]=ht,p[2]=ut,p[3]=ct,W.clearBufferuiv(W.COLOR,0,p)):(_[0]=dt,_[1]=ht,_[2]=ut,_[3]=ct,W.clearBufferiv(W.COLOR,0,_))}else ge|=W.COLOR_BUFFER_BIT}ae&&(ge|=W.DEPTH_BUFFER_BIT),fe&&(ge|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(ge)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",R,!1),t.removeEventListener("webglcontextcreationerror",H,!1),Ge.dispose(),$e.dispose(),Fe.dispose(),A.dispose(),re.dispose(),ye.dispose(),Je.dispose(),lt.dispose(),Ye.dispose(),G.dispose(),G.removeEventListener("sessionstart",ce),G.removeEventListener("sessionend",Pe),ke&&(ke.dispose(),ke=null),De.stop()};function Z(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function R(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let I=je.autoReset,ae=Re.enabled,fe=Re.autoUpdate,ge=Re.needsUpdate,ue=Re.type;ft(),je.autoReset=I,Re.enabled=ae,Re.autoUpdate=fe,Re.needsUpdate=ge,Re.type=ue}function H(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function N(I){let ae=I.target;ae.removeEventListener("dispose",N),X(ae)}function X(I){ee(I),Fe.remove(I)}function ee(I){let ae=Fe.get(I).programs;ae!==void 0&&(ae.forEach(function(fe){Ye.releaseProgram(fe)}),I.isShaderMaterial&&Ye.releaseShaderCache(I))}this.renderBufferDirect=function(I,ae,fe,ge,ue,Ve){ae===null&&(ae=ze);let tt=ue.isMesh&&ue.matrixWorld.determinant()<0,st=si(I,ae,fe,ge,ue);ve.setMaterial(ge,tt);let ct=fe.index,dt=1;if(ge.wireframe===!0){if(ct=Ae.getWireframeAttribute(fe),ct===void 0)return;dt=2}let ht=fe.drawRange,ut=fe.attributes.position,Xt=ht.start*dt,fn=(ht.start+ht.count)*dt;Ve!==null&&(Xt=Math.max(Xt,Ve.start*dt),fn=Math.min(fn,(Ve.start+Ve.count)*dt)),ct!==null?(Xt=Math.max(Xt,0),fn=Math.min(fn,ct.count)):ut!=null&&(Xt=Math.max(Xt,0),fn=Math.min(fn,ut.count));let qt=fn-Xt;if(qt<0||qt===1/0)return;Je.setup(ue,ge,st,fe,ct);let Mn,Pt=Ee;if(ct!==null&&(Mn=we.get(ct),Pt=Oe,Pt.setIndex(Mn)),ue.isMesh)ge.wireframe===!0?(ve.setLineWidth(ge.wireframeLinewidth*it()),Pt.setMode(W.LINES)):Pt.setMode(W.TRIANGLES);else if(ue.isLine){let rt=ge.linewidth;rt===void 0&&(rt=1),ve.setLineWidth(rt*it()),ue.isLineSegments?Pt.setMode(W.LINES):ue.isLineLoop?Pt.setMode(W.LINE_LOOP):Pt.setMode(W.LINE_STRIP)}else ue.isPoints?Pt.setMode(W.POINTS):ue.isSprite&&Pt.setMode(W.TRIANGLES);if(ue.isBatchedMesh)Pt.renderMultiDraw(ue._multiDrawStarts,ue._multiDrawCounts,ue._multiDrawCount);else if(ue.isInstancedMesh)Pt.renderInstances(Xt,qt,ue.count);else if(fe.isInstancedBufferGeometry){let rt=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,Jo=Math.min(fe.instanceCount,rt);Pt.renderInstances(Xt,qt,Jo)}else Pt.render(Xt,qt)};function j(I,ae,fe){I.transparent===!0&&I.side===yt&&I.forceSinglePass===!1?(I.side=xn,I.needsUpdate=!0,vt(I,ae,fe),I.side=gi,I.needsUpdate=!0,vt(I,ae,fe),I.side=yt):vt(I,ae,fe)}this.compile=function(I,ae,fe=null){fe===null&&(fe=I),g=$e.get(fe),g.init(),M.push(g),fe.traverseVisible(function(ue){ue.isLight&&ue.layers.test(ae.layers)&&(g.pushLight(ue),ue.castShadow&&g.pushShadow(ue))}),I!==fe&&I.traverseVisible(function(ue){ue.isLight&&ue.layers.test(ae.layers)&&(g.pushLight(ue),ue.castShadow&&g.pushShadow(ue))}),g.setupLights(v._useLegacyLights);let ge=new Set;return I.traverse(function(ue){let Ve=ue.material;if(Ve)if(Array.isArray(Ve))for(let tt=0;tt<Ve.length;tt++){let st=Ve[tt];j(st,fe,ue),ge.add(st)}else j(Ve,fe,ue),ge.add(Ve)}),M.pop(),g=null,ge},this.compileAsync=function(I,ae,fe=null){let ge=this.compile(I,ae,fe);return new Promise(ue=>{function Ve(){if(ge.forEach(function(tt){Fe.get(tt).currentProgram.isReady()&&ge.delete(tt)}),ge.size===0){ue(I);return}setTimeout(Ve,10)}Me.get("KHR_parallel_shader_compile")!==null?Ve():setTimeout(Ve,10)})};let oe=null;function q(I){oe&&oe(I)}function ce(){De.stop()}function Pe(){De.start()}let De=new Mp;De.setAnimationLoop(q),typeof self<"u"&&De.setContext(self),this.setAnimationLoop=function(I){oe=I,G.setAnimationLoop(I),I===null?De.stop():De.start()},G.addEventListener("sessionstart",ce),G.addEventListener("sessionend",Pe),this.render=function(I,ae){if(ae!==void 0&&ae.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ae.parent===null&&ae.matrixWorldAutoUpdate===!0&&ae.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(ae),ae=G.getCamera()),I.isScene===!0&&I.onBeforeRender(v,I,ae,D),g=$e.get(I,M.length),g.init(),M.push(g),xe.multiplyMatrices(ae.projectionMatrix,ae.matrixWorldInverse),ie.setFromProjectionMatrix(xe),Se=this.localClippingEnabled,F=Qe.init(this.clippingPlanes,Se),x=Ge.get(I,m.length),x.init(),m.push(x),Ze(I,ae,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(K,te),this.info.render.frame++,F===!0&&Qe.beginShadows();let fe=g.state.shadowsArray;if(Re.render(fe,I,ae),F===!0&&Qe.endShadows(),this.info.autoReset===!0&&this.info.reset(),at.render(x,I),g.setupLights(v._useLegacyLights),ae.isArrayCamera){let ge=ae.cameras;for(let ue=0,Ve=ge.length;ue<Ve;ue++){let tt=ge[ue];St(x,I,tt,tt.viewport)}}else St(x,I,ae);D!==null&&(C.updateMultisampleRenderTarget(D),C.updateRenderTargetMipmap(D)),I.isScene===!0&&I.onAfterRender(v,I,ae),Je.resetDefaultState(),Q=-1,E=null,M.pop(),M.length>0?g=M[M.length-1]:g=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function Ze(I,ae,fe,ge){if(I.visible===!1)return;if(I.layers.test(ae.layers)){if(I.isGroup)fe=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(ae);else if(I.isLight)g.pushLight(I),I.castShadow&&g.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||ie.intersectsSprite(I)){ge&&et.setFromMatrixPosition(I.matrixWorld).applyMatrix4(xe);let tt=ye.update(I),st=I.material;st.visible&&x.push(I,tt,st,fe,et.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||ie.intersectsObject(I))){let tt=ye.update(I),st=I.material;if(ge&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),et.copy(I.boundingSphere.center)):(tt.boundingSphere===null&&tt.computeBoundingSphere(),et.copy(tt.boundingSphere.center)),et.applyMatrix4(I.matrixWorld).applyMatrix4(xe)),Array.isArray(st)){let ct=tt.groups;for(let dt=0,ht=ct.length;dt<ht;dt++){let ut=ct[dt],Xt=st[ut.materialIndex];Xt&&Xt.visible&&x.push(I,tt,Xt,fe,et.z,ut)}}else st.visible&&x.push(I,tt,st,fe,et.z,null)}}let Ve=I.children;for(let tt=0,st=Ve.length;tt<st;tt++)Ze(Ve[tt],ae,fe,ge)}function St(I,ae,fe,ge){let ue=I.opaque,Ve=I.transmissive,tt=I.transparent;g.setupLightsView(fe),F===!0&&Qe.setGlobalState(v.clippingPlanes,fe),Ve.length>0&&Ut(ue,Ve,ae,fe),ge&&ve.viewport(P.copy(ge)),ue.length>0&&Tt(ue,ae,fe),Ve.length>0&&Tt(Ve,ae,fe),tt.length>0&&Tt(tt,ae,fe),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Ut(I,ae,fe,ge){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;let Ve=Ie.isWebGL2;ke===null&&(ke=new hn(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?ti:es,minFilter:ns,samples:Ve?4:0})),v.getDrawingBufferSize(nt),Ve?ke.setSize(nt.x,nt.y):ke.setSize(Qa(nt.x),Qa(nt.y));let tt=v.getRenderTarget();v.setRenderTarget(ke),v.getClearColor(Le),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),v.clear();let st=v.toneMapping;v.toneMapping=Qi,Tt(I,fe,ge),C.updateMultisampleRenderTarget(ke),C.updateRenderTargetMipmap(ke);let ct=!1;for(let dt=0,ht=ae.length;dt<ht;dt++){let ut=ae[dt],Xt=ut.object,fn=ut.geometry,qt=ut.material,Mn=ut.group;if(qt.side===yt&&Xt.layers.test(ge.layers)){let Pt=qt.side;qt.side=xn,qt.needsUpdate=!0,Rt(Xt,fe,ge,fn,qt,Mn),qt.side=Pt,qt.needsUpdate=!0,ct=!0}}ct===!0&&(C.updateMultisampleRenderTarget(ke),C.updateRenderTargetMipmap(ke)),v.setRenderTarget(tt),v.setClearColor(Le,B),v.toneMapping=st}function Tt(I,ae,fe){let ge=ae.isScene===!0?ae.overrideMaterial:null;for(let ue=0,Ve=I.length;ue<Ve;ue++){let tt=I[ue],st=tt.object,ct=tt.geometry,dt=ge===null?tt.material:ge,ht=tt.group;st.layers.test(fe.layers)&&Rt(st,ae,fe,ct,dt,ht)}}function Rt(I,ae,fe,ge,ue,Ve){I.onBeforeRender(v,ae,fe,ge,ue,Ve),I.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),ue.onBeforeRender(v,ae,fe,ge,I,Ve),ue.transparent===!0&&ue.side===yt&&ue.forceSinglePass===!1?(ue.side=xn,ue.needsUpdate=!0,v.renderBufferDirect(fe,ae,ge,ue,I,Ve),ue.side=gi,ue.needsUpdate=!0,v.renderBufferDirect(fe,ae,ge,ue,I,Ve),ue.side=yt):v.renderBufferDirect(fe,ae,ge,ue,I,Ve),I.onAfterRender(v,ae,fe,ge,ue,Ve)}function vt(I,ae,fe){ae.isScene!==!0&&(ae=ze);let ge=Fe.get(I),ue=g.state.lights,Ve=g.state.shadowsArray,tt=ue.state.version,st=Ye.getParameters(I,ue.state,Ve,ae,fe),ct=Ye.getProgramCacheKey(st),dt=ge.programs;ge.environment=I.isMeshStandardMaterial?ae.environment:null,ge.fog=ae.fog,ge.envMap=(I.isMeshStandardMaterial?re:A).get(I.envMap||ge.environment),dt===void 0&&(I.addEventListener("dispose",N),dt=new Map,ge.programs=dt);let ht=dt.get(ct);if(ht!==void 0){if(ge.currentProgram===ht&&ge.lightsStateVersion===tt)return Et(I,st),ht}else st.uniforms=Ye.getUniforms(I),I.onBuild(fe,st,v),I.onBeforeCompile(st,v),ht=Ye.acquireProgram(st,ct),dt.set(ct,ht),ge.uniforms=st.uniforms;let ut=ge.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(ut.clippingPlanes=Qe.uniform),Et(I,st),ge.needsLights=ri(I),ge.lightsStateVersion=tt,ge.needsLights&&(ut.ambientLightColor.value=ue.state.ambient,ut.lightProbe.value=ue.state.probe,ut.directionalLights.value=ue.state.directional,ut.directionalLightShadows.value=ue.state.directionalShadow,ut.spotLights.value=ue.state.spot,ut.spotLightShadows.value=ue.state.spotShadow,ut.rectAreaLights.value=ue.state.rectArea,ut.ltc_1.value=ue.state.rectAreaLTC1,ut.ltc_2.value=ue.state.rectAreaLTC2,ut.pointLights.value=ue.state.point,ut.pointLightShadows.value=ue.state.pointShadow,ut.hemisphereLights.value=ue.state.hemi,ut.directionalShadowMap.value=ue.state.directionalShadowMap,ut.directionalShadowMatrix.value=ue.state.directionalShadowMatrix,ut.spotShadowMap.value=ue.state.spotShadowMap,ut.spotLightMatrix.value=ue.state.spotLightMatrix,ut.spotLightMap.value=ue.state.spotLightMap,ut.pointShadowMap.value=ue.state.pointShadowMap,ut.pointShadowMatrix.value=ue.state.pointShadowMatrix),ge.currentProgram=ht,ge.uniformsList=null,ht}function Nt(I){if(I.uniformsList===null){let ae=I.currentProgram.getUniforms();I.uniformsList=Mr.seqWithValue(ae.seq,I.uniforms)}return I.uniformsList}function Et(I,ae){let fe=Fe.get(I);fe.outputColorSpace=ae.outputColorSpace,fe.batching=ae.batching,fe.instancing=ae.instancing,fe.instancingColor=ae.instancingColor,fe.skinning=ae.skinning,fe.morphTargets=ae.morphTargets,fe.morphNormals=ae.morphNormals,fe.morphColors=ae.morphColors,fe.morphTargetsCount=ae.morphTargetsCount,fe.numClippingPlanes=ae.numClippingPlanes,fe.numIntersection=ae.numClipIntersection,fe.vertexAlphas=ae.vertexAlphas,fe.vertexTangents=ae.vertexTangents,fe.toneMapping=ae.toneMapping}function si(I,ae,fe,ge,ue){ae.isScene!==!0&&(ae=ze),C.resetTextureUnits();let Ve=ae.fog,tt=ge.isMeshStandardMaterial?ae.environment:null,st=D===null?v.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:sn,ct=(ge.isMeshStandardMaterial?re:A).get(ge.envMap||tt),dt=ge.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,ht=!!fe.attributes.tangent&&(!!ge.normalMap||ge.anisotropy>0),ut=!!fe.morphAttributes.position,Xt=!!fe.morphAttributes.normal,fn=!!fe.morphAttributes.color,qt=Qi;ge.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(qt=v.toneMapping);let Mn=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,Pt=Mn!==void 0?Mn.length:0,rt=Fe.get(ge),Jo=g.state.lights;if(F===!0&&(Se===!0||I!==E)){let Tn=I===E&&ge.id===Q;Qe.setState(ge,I,Tn)}let Ct=!1;ge.version===rt.__version?(rt.needsLights&&rt.lightsStateVersion!==Jo.state.version||rt.outputColorSpace!==st||ue.isBatchedMesh&&rt.batching===!1||!ue.isBatchedMesh&&rt.batching===!0||ue.isInstancedMesh&&rt.instancing===!1||!ue.isInstancedMesh&&rt.instancing===!0||ue.isSkinnedMesh&&rt.skinning===!1||!ue.isSkinnedMesh&&rt.skinning===!0||ue.isInstancedMesh&&rt.instancingColor===!0&&ue.instanceColor===null||ue.isInstancedMesh&&rt.instancingColor===!1&&ue.instanceColor!==null||rt.envMap!==ct||ge.fog===!0&&rt.fog!==Ve||rt.numClippingPlanes!==void 0&&(rt.numClippingPlanes!==Qe.numPlanes||rt.numIntersection!==Qe.numIntersection)||rt.vertexAlphas!==dt||rt.vertexTangents!==ht||rt.morphTargets!==ut||rt.morphNormals!==Xt||rt.morphColors!==fn||rt.toneMapping!==qt||Ie.isWebGL2===!0&&rt.morphTargetsCount!==Pt)&&(Ct=!0):(Ct=!0,rt.__version=ge.version);let jn=rt.currentProgram;Ct===!0&&(jn=vt(ge,ae,ue));let oi=!1,ki=!1,zi=!1,Lt=jn.getUniforms(),ai=rt.uniforms;if(ve.useProgram(jn.program)&&(oi=!0,ki=!0,zi=!0),ge.id!==Q&&(Q=ge.id,ki=!0),oi||E!==I){Lt.setValue(W,"projectionMatrix",I.projectionMatrix),Lt.setValue(W,"viewMatrix",I.matrixWorldInverse);let Tn=Lt.map.cameraPosition;Tn!==void 0&&Tn.setValue(W,et.setFromMatrixPosition(I.matrixWorld)),Ie.logarithmicDepthBuffer&&Lt.setValue(W,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(ge.isMeshPhongMaterial||ge.isMeshToonMaterial||ge.isMeshLambertMaterial||ge.isMeshBasicMaterial||ge.isMeshStandardMaterial||ge.isShaderMaterial)&&Lt.setValue(W,"isOrthographic",I.isOrthographicCamera===!0),E!==I&&(E=I,ki=!0,zi=!0)}if(ue.isSkinnedMesh){Lt.setOptional(W,ue,"bindMatrix"),Lt.setOptional(W,ue,"bindMatrixInverse");let Tn=ue.skeleton;Tn&&(Ie.floatVertexTextures?(Tn.boneTexture===null&&Tn.computeBoneTexture(),Lt.setValue(W,"boneTexture",Tn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ue.isBatchedMesh&&(Lt.setOptional(W,ue,"batchingTexture"),Lt.setValue(W,"batchingTexture",ue._matricesTexture,C));let Qr=fe.morphAttributes;if((Qr.position!==void 0||Qr.normal!==void 0||Qr.color!==void 0&&Ie.isWebGL2===!0)&&V.update(ue,fe,jn),(ki||rt.receiveShadow!==ue.receiveShadow)&&(rt.receiveShadow=ue.receiveShadow,Lt.setValue(W,"receiveShadow",ue.receiveShadow)),ge.isMeshGouraudMaterial&&ge.envMap!==null&&(ai.envMap.value=ct,ai.flipEnvMap.value=ct.isCubeTexture&&ct.isRenderTargetTexture===!1?-1:1),ki&&(Lt.setValue(W,"toneMappingExposure",v.toneMappingExposure),rt.needsLights&&Fn(ai,zi),Ve&&ge.fog===!0&&Ne.refreshFogUniforms(ai,Ve),Ne.refreshMaterialUniforms(ai,ge,$,pe,ke),Mr.upload(W,Nt(rt),ai,C)),ge.isShaderMaterial&&ge.uniformsNeedUpdate===!0&&(Mr.upload(W,Nt(rt),ai,C),ge.uniformsNeedUpdate=!1),ge.isSpriteMaterial&&Lt.setValue(W,"center",ue.center),Lt.setValue(W,"modelViewMatrix",ue.modelViewMatrix),Lt.setValue(W,"normalMatrix",ue.normalMatrix),Lt.setValue(W,"modelMatrix",ue.matrixWorld),ge.isShaderMaterial||ge.isRawShaderMaterial){let Tn=ge.uniformsGroups;for(let gs=0,Xs=Tn.length;gs<Xs;gs++)if(Ie.isWebGL2){let $o=Tn[gs];lt.update($o,jn),lt.bind($o,jn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return jn}function Fn(I,ae){I.ambientLightColor.needsUpdate=ae,I.lightProbe.needsUpdate=ae,I.directionalLights.needsUpdate=ae,I.directionalLightShadows.needsUpdate=ae,I.pointLights.needsUpdate=ae,I.pointLightShadows.needsUpdate=ae,I.spotLights.needsUpdate=ae,I.spotLightShadows.needsUpdate=ae,I.rectAreaLights.needsUpdate=ae,I.hemisphereLights.needsUpdate=ae}function ri(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(I,ae,fe){Fe.get(I.texture).__webglTexture=ae,Fe.get(I.depthTexture).__webglTexture=fe;let ge=Fe.get(I);ge.__hasExternalTextures=!0,ge.__hasExternalTextures&&(ge.__autoAllocateDepthBuffer=fe===void 0,ge.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ge.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(I,ae){let fe=Fe.get(I);fe.__webglFramebuffer=ae,fe.__useDefaultFramebuffer=ae===void 0},this.setRenderTarget=function(I,ae=0,fe=0){D=I,z=ae,U=fe;let ge=!0,ue=null,Ve=!1,tt=!1;if(I){let ct=Fe.get(I);ct.__useDefaultFramebuffer!==void 0?(ve.bindFramebuffer(W.FRAMEBUFFER,null),ge=!1):ct.__webglFramebuffer===void 0?C.setupRenderTarget(I):ct.__hasExternalTextures&&C.rebindTextures(I,Fe.get(I.texture).__webglTexture,Fe.get(I.depthTexture).__webglTexture);let dt=I.texture;(dt.isData3DTexture||dt.isDataArrayTexture||dt.isCompressedArrayTexture)&&(tt=!0);let ht=Fe.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(ht[ae])?ue=ht[ae][fe]:ue=ht[ae],Ve=!0):Ie.isWebGL2&&I.samples>0&&C.useMultisampledRTT(I)===!1?ue=Fe.get(I).__webglMultisampledFramebuffer:Array.isArray(ht)?ue=ht[fe]:ue=ht,P.copy(I.viewport),ne.copy(I.scissor),J=I.scissorTest}else P.copy(me).multiplyScalar($).floor(),ne.copy(be).multiplyScalar($).floor(),J=de;if(ve.bindFramebuffer(W.FRAMEBUFFER,ue)&&Ie.drawBuffers&&ge&&ve.drawBuffers(I,ue),ve.viewport(P),ve.scissor(ne),ve.setScissorTest(J),Ve){let ct=Fe.get(I.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ct.__webglTexture,fe)}else if(tt){let ct=Fe.get(I.texture),dt=ae||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,ct.__webglTexture,fe||0,dt)}Q=-1},this.readRenderTargetPixels=function(I,ae,fe,ge,ue,Ve,tt){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let st=Fe.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&tt!==void 0&&(st=st[tt]),st){ve.bindFramebuffer(W.FRAMEBUFFER,st);try{let ct=I.texture,dt=ct.format,ht=ct.type;if(dt!==kn&&Ce.convert(dt)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let ut=ht===ti&&(Me.has("EXT_color_buffer_half_float")||Ie.isWebGL2&&Me.has("EXT_color_buffer_float"));if(ht!==es&&Ce.convert(ht)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ht===Pi&&(Ie.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!ut){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ae>=0&&ae<=I.width-ge&&fe>=0&&fe<=I.height-ue&&W.readPixels(ae,fe,ge,ue,Ce.convert(dt),Ce.convert(ht),Ve)}finally{let ct=D!==null?Fe.get(D).__webglFramebuffer:null;ve.bindFramebuffer(W.FRAMEBUFFER,ct)}}},this.copyFramebufferToTexture=function(I,ae,fe=0){let ge=Math.pow(2,-fe),ue=Math.floor(ae.image.width*ge),Ve=Math.floor(ae.image.height*ge);C.setTexture2D(ae,0),W.copyTexSubImage2D(W.TEXTURE_2D,fe,0,0,I.x,I.y,ue,Ve),ve.unbindTexture()},this.copyTextureToTexture=function(I,ae,fe,ge=0){let ue=ae.image.width,Ve=ae.image.height,tt=Ce.convert(fe.format),st=Ce.convert(fe.type);C.setTexture2D(fe,0),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,fe.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,fe.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,fe.unpackAlignment),ae.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,ge,I.x,I.y,ue,Ve,tt,st,ae.image.data):ae.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,ge,I.x,I.y,ae.mipmaps[0].width,ae.mipmaps[0].height,tt,ae.mipmaps[0].data):W.texSubImage2D(W.TEXTURE_2D,ge,I.x,I.y,tt,st,ae.image),ge===0&&fe.generateMipmaps&&W.generateMipmap(W.TEXTURE_2D),ve.unbindTexture()},this.copyTextureToTexture3D=function(I,ae,fe,ge,ue=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Ve=I.max.x-I.min.x+1,tt=I.max.y-I.min.y+1,st=I.max.z-I.min.z+1,ct=Ce.convert(ge.format),dt=Ce.convert(ge.type),ht;if(ge.isData3DTexture)C.setTexture3D(ge,0),ht=W.TEXTURE_3D;else if(ge.isDataArrayTexture||ge.isCompressedArrayTexture)C.setTexture2DArray(ge,0),ht=W.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,ge.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ge.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,ge.unpackAlignment);let ut=W.getParameter(W.UNPACK_ROW_LENGTH),Xt=W.getParameter(W.UNPACK_IMAGE_HEIGHT),fn=W.getParameter(W.UNPACK_SKIP_PIXELS),qt=W.getParameter(W.UNPACK_SKIP_ROWS),Mn=W.getParameter(W.UNPACK_SKIP_IMAGES),Pt=fe.isCompressedTexture?fe.mipmaps[ue]:fe.image;W.pixelStorei(W.UNPACK_ROW_LENGTH,Pt.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Pt.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,I.min.x),W.pixelStorei(W.UNPACK_SKIP_ROWS,I.min.y),W.pixelStorei(W.UNPACK_SKIP_IMAGES,I.min.z),fe.isDataTexture||fe.isData3DTexture?W.texSubImage3D(ht,ue,ae.x,ae.y,ae.z,Ve,tt,st,ct,dt,Pt.data):fe.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(ht,ue,ae.x,ae.y,ae.z,Ve,tt,st,ct,Pt.data)):W.texSubImage3D(ht,ue,ae.x,ae.y,ae.z,Ve,tt,st,ct,dt,Pt),W.pixelStorei(W.UNPACK_ROW_LENGTH,ut),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Xt),W.pixelStorei(W.UNPACK_SKIP_PIXELS,fn),W.pixelStorei(W.UNPACK_SKIP_ROWS,qt),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Mn),ue===0&&ge.generateMipmaps&&W.generateMipmap(ht),ve.unbindTexture()},this.initTexture=function(I){I.isCubeTexture?C.setTextureCube(I,0):I.isData3DTexture?C.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?C.setTexture2DArray(I,0):C.setTexture2D(I,0),ve.unbindTexture()},this.resetState=function(){z=0,U=0,D=null,ve.reset(),Je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Zu?"display-p3":"srgb",t.unpackColorSpace=At.workingColorSpace===Ll?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Xe?Ds:xp}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ds?Xe:sn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},yu=class extends Co{};yu.prototype.isWebGL1Renderer=!0;var ll=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new qe(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Dr=class extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Ur=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=nu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Gn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},yn=new L,Ns=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix4(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.applyNormalMatrix(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.transformDirection(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=pi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=pi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=pi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=pi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),n=It(n,this.array),i=It(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),n=It(n,this.array),i=It(i,this.array),r=It(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Vt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Po=class extends Rn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},dr,ho=new L,pr=new L,mr=new L,gr=new he,fo=new he,Cp=new pt,Na=new L,po=new L,Oa=new L,Dd=new he,Hc=new he,Ud=new he,cl=class extends Ht{constructor(e=new Po){if(super(),this.isSprite=!0,this.type="Sprite",dr===void 0){dr=new Dt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ur(t,5);dr.setIndex([0,1,2,0,2,3]),dr.setAttribute("position",new Ns(n,3,0,!1)),dr.setAttribute("uv",new Ns(n,2,3,!1))}this.geometry=dr,this.material=e,this.center=new he(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),pr.setFromMatrixScale(this.matrixWorld),Cp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),mr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&pr.multiplyScalar(-mr.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;Fa(Na.set(-.5,-.5,0),mr,o,pr,i,r),Fa(po.set(.5,-.5,0),mr,o,pr,i,r),Fa(Oa.set(.5,.5,0),mr,o,pr,i,r),Dd.set(0,0),Hc.set(1,0),Ud.set(1,1);let a=e.ray.intersectTriangle(Na,po,Oa,!1,ho);if(a===null&&(Fa(po.set(-.5,.5,0),mr,o,pr,i,r),Hc.set(0,1),a=e.ray.intersectTriangle(Na,Oa,po,!1,ho),a===null))return;let l=e.ray.origin.distanceTo(ho);l<e.near||l>e.far||t.push({distance:l,point:ho.clone(),uv:Ps.getInterpolation(ho,Na,po,Oa,Dd,Hc,Ud,new he),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Fa(s,e,t,n,i,r){gr.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(fo.x=r*gr.x-i*gr.y,fo.y=i*gr.x+r*gr.y):fo.copy(gr),s.copy(e),s.x+=fo.x,s.y+=fo.y,s.applyMatrix4(Cp)}var Nd=new L,Od=new Ft,Fd=new Ft,Hv=new L,Bd=new pt,Ba=new L,Wc=new Nn,kd=new pt,Xc=new Ii,ul=class extends ot{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=_f,this.bindMatrix=new pt,this.bindMatrixInverse=new pt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Vn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ba),this.boundingBox.expandByPoint(Ba)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Nn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ba),this.boundingSphere.expandByPoint(Ba)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wc.copy(this.boundingSphere),Wc.applyMatrix4(i),e.ray.intersectsSphere(Wc)!==!1&&(kd.copy(i).invert(),Xc.copy(e.ray).applyMatrix4(kd),!(this.boundingBox!==null&&Xc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Xc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Ft,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===_f?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===_0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Od.fromBufferAttribute(i.attributes.skinIndex,e),Fd.fromBufferAttribute(i.attributes.skinWeight,e),Nd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Fd.getComponent(r);if(o!==0){let a=Od.getComponent(r);Bd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Hv.copy(Nd).applyMatrix4(Bd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},Lo=class extends Ht{constructor(){super(),this.isBone=!0,this.type="Bone"}},vu=class extends rn{constructor(e=null,t=1,n=1,i,r,o,a,l,c=nn,u=nn,f,d){super(null,o,a,l,c,u,i,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},zd=new pt,Wv=new pt,hl=class s{constructor(e=[],t=[]){this.uuid=Gn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new pt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new pt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Wv;zd.multiplyMatrices(a,t[r]),zd.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new vu(t,e,e,kn,Pi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Lo),this.bones.push(o),this.boneInverses.push(new pt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},Os=class extends Vt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},xr=new pt,Gd=new pt,ka=[],Vd=new Vn,Xv=new pt,mo=new ot,go=new Nn,Nr=class extends ot{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Os(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Xv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Vn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xr),Vd.copy(e.boundingBox).applyMatrix4(xr),this.boundingBox.union(Vd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xr),go.copy(e.boundingSphere).applyMatrix4(xr),this.boundingSphere.union(go)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,i=this.count;if(mo.geometry=this.geometry,mo.material=this.material,mo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),go.copy(this.boundingSphere),go.applyMatrix4(n),e.ray.intersectsSphere(go)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,xr),Gd.multiplyMatrices(n,xr),mo.matrixWorld=Gd,mo.raycast(e,ka);for(let o=0,a=ka.length;o<a;o++){let l=ka[o];l.instanceId=r,l.object=this,t.push(l)}ka.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Os(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Fs=class extends Rn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Hd=new L,Wd=new L,Xd=new pt,qc=new Ii,za=new Nn,Or=class extends Ht{constructor(e=new Dt,t=new Fs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Hd.fromBufferAttribute(t,i-1),Wd.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Hd.distanceTo(Wd);e.setAttribute("lineDistance",new xt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),za.copy(n.boundingSphere),za.applyMatrix4(i),za.radius+=r,e.ray.intersectsSphere(za)===!1)return;Xd.copy(i).invert(),qc.copy(e.ray).applyMatrix4(Xd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new L,u=new L,f=new L,d=new L,p=this.isLineSegments?2:1,_=n.index,g=n.attributes.position;if(_!==null){let m=Math.max(0,o.start),M=Math.min(_.count,o.start+o.count);for(let v=m,w=M-1;v<w;v+=p){let z=_.getX(v),U=_.getX(v+1);if(c.fromBufferAttribute(g,z),u.fromBufferAttribute(g,U),qc.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);let Q=e.ray.origin.distanceTo(d);Q<e.near||Q>e.far||t.push({distance:Q,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let m=Math.max(0,o.start),M=Math.min(g.count,o.start+o.count);for(let v=m,w=M-1;v<w;v+=p){if(c.fromBufferAttribute(g,v),u.fromBufferAttribute(g,v+1),qc.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);let U=e.ray.origin.distanceTo(d);U<e.near||U>e.far||t.push({distance:U,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},qd=new L,Yd=new L,Fr=class extends Or{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)qd.fromBufferAttribute(t,i),Yd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+qd.distanceTo(Yd);e.setAttribute("lineDistance",new xt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},fl=class extends Or{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Bs=class extends Rn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Zd=new pt,bu=new Ii,Ga=new Nn,Va=new L,Br=class extends Ht{constructor(e=new Dt,t=new Bs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ga.copy(n.boundingSphere),Ga.applyMatrix4(i),Ga.radius+=r,e.ray.intersectsSphere(Ga)===!1)return;Zd.copy(i).invert(),bu.copy(e.ray).applyMatrix4(Zd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let _=d,x=p;_<x;_++){let g=c.getX(_);Va.fromBufferAttribute(f,g),Kd(Va,g,l,i,e,t,this)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let _=d,x=p;_<x;_++)Va.fromBufferAttribute(f,_),Kd(Va,_,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Kd(s,e,t,n,i,r,o){let a=bu.distanceSqToPoint(s);if(a<t){let l=new L;bu.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}var kt=class extends rn{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let u=n[i],d=n[i+1]-u,p=(o-u)/d;return(i+p)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new he:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new L,i=[],r=[],o=[],a=new L,l=new pt;for(let p=0;p<=e;p++){let _=p/e;i[p]=this.getTangentAt(_,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE,u=Math.abs(i[0].x),f=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();let _=Math.acos($t(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,_))}o[p].crossVectors(i[p],r[p])}if(t===!0){let p=Math.acos($t(r[0].dot(r[e]),-1,1));p/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(i[_],p*_)),o[_].crossVectors(i[_],r[_])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Io=class extends Hn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){let n=t||new he,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*u-p*f+this.aX,c=d*f+p*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Su=class extends Io{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ju(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,f){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+f)+(l-a)/f;d*=u,p*=u,i(o,a,d,p)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var Ha=new L,Yc=new Ju,Zc=new Ju,Kc=new Ju,ss=class extends Hn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new L){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%r]:(Ha.subVectors(i[0],i[1]).add(i[0]),c=Ha);let f=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(Ha.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Ha),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(f),p),x=Math.pow(f.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(u),p);x<1e-4&&(x=1),_<1e-4&&(_=x),g<1e-4&&(g=x),Yc.initNonuniformCatmullRom(c.x,f.x,d.x,u.x,_,x,g),Zc.initNonuniformCatmullRom(c.y,f.y,d.y,u.y,_,x,g),Kc.initNonuniformCatmullRom(c.z,f.z,d.z,u.z,_,x,g)}else this.curveType==="catmullrom"&&(Yc.initCatmullRom(c.x,f.x,d.x,u.x,this.tension),Zc.initCatmullRom(c.y,f.y,d.y,u.y,this.tension),Kc.initCatmullRom(c.z,f.z,d.z,u.z,this.tension));return n.set(Yc.calc(l),Zc.calc(l),Kc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new L().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function jd(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function qv(s,e){let t=1-s;return t*t*e}function Yv(s,e){return 2*(1-s)*s*e}function Zv(s,e){return s*s*e}function Mo(s,e,t,n){return qv(s,e)+Yv(s,t)+Zv(s,n)}function Kv(s,e){let t=1-s;return t*t*t*e}function jv(s,e){let t=1-s;return 3*t*t*s*e}function Jv(s,e){return 3*(1-s)*s*s*e}function $v(s,e){return s*s*s*e}function To(s,e,t,n,i){return Kv(s,e)+jv(s,t)+Jv(s,n)+$v(s,i)}var dl=class extends Hn{constructor(e=new he,t=new he,n=new he,i=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new he){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(To(e,i.x,r.x,o.x,a.x),To(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Mu=class extends Hn{constructor(e=new L,t=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new L){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(To(e,i.x,r.x,o.x,a.x),To(e,i.y,r.y,o.y,a.y),To(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},pl=class extends Hn{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Tu=class extends Hn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ml=class extends Hn{constructor(e=new he,t=new he,n=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new he){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Mo(e,i.x,r.x,o.x),Mo(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},gl=class extends Hn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Mo(e,i.x,r.x,o.x),Mo(e,i.y,r.y,o.y),Mo(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xl=class extends Hn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],f=i[o>i.length-3?i.length-1:o+2];return n.set(jd(a,l.x,c.x,u.x,f.x),jd(a,l.y,c.y,u.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new he().fromArray(i))}return this}},_l=Object.freeze({__proto__:null,ArcCurve:Su,CatmullRomCurve3:ss,CubicBezierCurve:dl,CubicBezierCurve3:Mu,EllipseCurve:Io,LineCurve:pl,LineCurve3:Tu,QuadraticBezierCurve:ml,QuadraticBezierCurve3:gl,SplineCurve:xl}),wu=class extends Hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new _l[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new _l[i.type]().fromJSON(i))}return this}},yl=class extends wu{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new pl(this.currentPoint.clone(),new he(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new ml(this.currentPoint.clone(),new he(e,t),new he(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){let a=new dl(this.currentPoint.clone(),new he(e,t),new he(n,i),new he(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new xl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){let c=new Io(e,t,n,i,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},kr=class s extends Dt{constructor(e=[new he(0,-.5),new he(.5,0),new he(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=$t(i,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/t,f=new L,d=new he,p=new L,_=new L,x=new L,g=0,m=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:g=e[M+1].x-e[M].x,m=e[M+1].y-e[M].y,p.x=m*1,p.y=-g,p.z=m*0,x.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:g=e[M+1].x-e[M].x,m=e[M+1].y-e[M].y,p.x=m*1,p.y=-g,p.z=m*0,_.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),l.push(p.x,p.y,p.z),x.copy(_)}for(let M=0;M<=t;M++){let v=n+M*u*i,w=Math.sin(v),z=Math.cos(v);for(let U=0;U<=e.length-1;U++){f.x=e[U].x*w,f.y=e[U].y,f.z=e[U].x*z,o.push(f.x,f.y,f.z),d.x=M/t,d.y=U/(e.length-1),a.push(d.x,d.y);let D=l[3*U+0]*w,Q=l[3*U+1],E=l[3*U+0]*z;c.push(D,Q,E)}}for(let M=0;M<t;M++)for(let v=0;v<e.length-1;v++){let w=v+M*e.length,z=w,U=w+e.length,D=w+e.length+1,Q=w+1;r.push(z,U,Q),r.push(D,Q,U)}this.setIndex(r),this.setAttribute("position",new xt(o,3)),this.setAttribute("uv",new xt(a,2)),this.setAttribute("normal",new xt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}};var rs=class s extends Dt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new L,u=new he;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=t;f++,d+=3){let p=n+f/t*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new xt(o,3)),this.setAttribute("normal",new xt(a,3)),this.setAttribute("uv",new xt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Wn=class s extends Dt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let u=[],f=[],d=[],p=[],_=0,x=[],g=n/2,m=0;M(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new xt(f,3)),this.setAttribute("normal",new xt(d,3)),this.setAttribute("uv",new xt(p,2));function M(){let w=new L,z=new L,U=0,D=(t-e)/n;for(let Q=0;Q<=r;Q++){let E=[],P=Q/r,ne=P*(t-e)+e;for(let J=0;J<=i;J++){let Le=J/i,B=Le*l+a,se=Math.sin(B),pe=Math.cos(B);z.x=ne*se,z.y=-P*n+g,z.z=ne*pe,f.push(z.x,z.y,z.z),w.set(se,D,pe).normalize(),d.push(w.x,w.y,w.z),p.push(Le,1-P),E.push(_++)}x.push(E)}for(let Q=0;Q<i;Q++)for(let E=0;E<r;E++){let P=x[E][Q],ne=x[E+1][Q],J=x[E+1][Q+1],Le=x[E][Q+1];u.push(P,ne,Le),u.push(ne,J,Le),U+=6}c.addGroup(m,U,0),m+=U}function v(w){let z=_,U=new he,D=new L,Q=0,E=w===!0?e:t,P=w===!0?1:-1;for(let J=1;J<=i;J++)f.push(0,g*P,0),d.push(0,P,0),p.push(.5,.5),_++;let ne=_;for(let J=0;J<=i;J++){let B=J/i*l+a,se=Math.cos(B),pe=Math.sin(B);D.x=E*pe,D.y=g*P,D.z=E*se,f.push(D.x,D.y,D.z),d.push(0,P,0),U.x=se*.5+.5,U.y=pe*.5*P+.5,p.push(U.x,U.y),_++}for(let J=0;J<i;J++){let Le=z+J,B=ne+J;w===!0?u.push(B,B+1,Le):u.push(B+1,B,Le),Q+=3}c.addGroup(m,Q,w===!0?1:2),m+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Do=class s extends Wn{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Au=class s extends Dt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],o=[];a(i),c(n),u(),this.setAttribute("position",new xt(r,3)),this.setAttribute("normal",new xt(r.slice(),3)),this.setAttribute("uv",new xt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let v=new L,w=new L,z=new L;for(let U=0;U<t.length;U+=3)p(t[U+0],v),p(t[U+1],w),p(t[U+2],z),l(v,w,z,M)}function l(M,v,w,z){let U=z+1,D=[];for(let Q=0;Q<=U;Q++){D[Q]=[];let E=M.clone().lerp(w,Q/U),P=v.clone().lerp(w,Q/U),ne=U-Q;for(let J=0;J<=ne;J++)J===0&&Q===U?D[Q][J]=E:D[Q][J]=E.clone().lerp(P,J/ne)}for(let Q=0;Q<U;Q++)for(let E=0;E<2*(U-Q)-1;E++){let P=Math.floor(E/2);E%2===0?(d(D[Q][P+1]),d(D[Q+1][P]),d(D[Q][P])):(d(D[Q][P+1]),d(D[Q+1][P+1]),d(D[Q+1][P]))}}function c(M){let v=new L;for(let w=0;w<r.length;w+=3)v.x=r[w+0],v.y=r[w+1],v.z=r[w+2],v.normalize().multiplyScalar(M),r[w+0]=v.x,r[w+1]=v.y,r[w+2]=v.z}function u(){let M=new L;for(let v=0;v<r.length;v+=3){M.x=r[v+0],M.y=r[v+1],M.z=r[v+2];let w=g(M)/2/Math.PI+.5,z=m(M)/Math.PI+.5;o.push(w,1-z)}_(),f()}function f(){for(let M=0;M<o.length;M+=6){let v=o[M+0],w=o[M+2],z=o[M+4],U=Math.max(v,w,z),D=Math.min(v,w,z);U>.9&&D<.1&&(v<.2&&(o[M+0]+=1),w<.2&&(o[M+2]+=1),z<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function p(M,v){let w=M*3;v.x=e[w+0],v.y=e[w+1],v.z=e[w+2]}function _(){let M=new L,v=new L,w=new L,z=new L,U=new he,D=new he,Q=new he;for(let E=0,P=0;E<r.length;E+=9,P+=6){M.set(r[E+0],r[E+1],r[E+2]),v.set(r[E+3],r[E+4],r[E+5]),w.set(r[E+6],r[E+7],r[E+8]),U.set(o[P+0],o[P+1]),D.set(o[P+2],o[P+3]),Q.set(o[P+4],o[P+5]),z.copy(M).add(v).add(w).divideScalar(3);let ne=g(z);x(U,P+0,M,ne),x(D,P+2,v,ne),x(Q,P+4,w,ne)}}function x(M,v,w,z){z<0&&M.x===1&&(o[v]=M.x-1),w.x===0&&w.z===0&&(o[v]=z/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.details)}};var Xn=class extends yl{constructor(e){super(e),this.uuid=Gn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new yl().fromJSON(i))}return this}},Qv={triangulate:function(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=Pp(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,f,d,p;if(n&&(r=s1(s,e,r,t)),s.length>80*t){a=c=s[0],l=u=s[1];for(let _=t;_<i;_+=t)f=s[_],d=s[_+1],f<a&&(a=f),d<l&&(l=d),f>c&&(c=f),d>u&&(u=d);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return Uo(r,o,t,a,l,p,0),o}};function Pp(s,e,t,n,i){let r,o;if(i===m1(s,e,t,n)>0)for(r=e;r<t;r+=n)o=Jd(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=Jd(r,s[r],s[r+1],o);return o&&Dl(o,o.next)&&(Oo(o),o=o.next),o}function ks(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Dl(t,t.next)||Yt(t.prev,t,t.next)===0)){if(Oo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Uo(s,e,t,n,i,r,o){if(!s)return;!o&&r&&c1(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?t1(s,n,i,r):e1(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),Oo(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=n1(ks(s),e,t),Uo(s,e,t,n,i,r,2)):o===2&&i1(s,e,t,n,i,r):Uo(ks(s),e,t,n,i,r,1);break}}}function e1(s){let e=s.prev,t=s,n=s.next;if(Yt(e,t,n)>=0)return!1;let i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=i<r?i<o?i:o:r<o?r:o,f=a<l?a<c?a:c:l<c?l:c,d=i>r?i>o?i:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c,_=n.next;for(;_!==e;){if(_.x>=u&&_.x<=d&&_.y>=f&&_.y<=p&&vr(i,a,r,l,o,c,_.x,_.y)&&Yt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function t1(s,e,t,n){let i=s.prev,r=s,o=s.next;if(Yt(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,u=i.y,f=r.y,d=o.y,p=a<l?a<c?a:c:l<c?l:c,_=u<f?u<d?u:d:f<d?f:d,x=a>l?a>c?a:c:l>c?l:c,g=u>f?u>d?u:d:f>d?f:d,m=Eu(p,_,e,t,n),M=Eu(x,g,e,t,n),v=s.prevZ,w=s.nextZ;for(;v&&v.z>=m&&w&&w.z<=M;){if(v.x>=p&&v.x<=x&&v.y>=_&&v.y<=g&&v!==i&&v!==o&&vr(a,u,l,f,c,d,v.x,v.y)&&Yt(v.prev,v,v.next)>=0||(v=v.prevZ,w.x>=p&&w.x<=x&&w.y>=_&&w.y<=g&&w!==i&&w!==o&&vr(a,u,l,f,c,d,w.x,w.y)&&Yt(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;v&&v.z>=m;){if(v.x>=p&&v.x<=x&&v.y>=_&&v.y<=g&&v!==i&&v!==o&&vr(a,u,l,f,c,d,v.x,v.y)&&Yt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;w&&w.z<=M;){if(w.x>=p&&w.x<=x&&w.y>=_&&w.y<=g&&w!==i&&w!==o&&vr(a,u,l,f,c,d,w.x,w.y)&&Yt(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function n1(s,e,t){let n=s;do{let i=n.prev,r=n.next.next;!Dl(i,r)&&Lp(i,n,n.next,r)&&No(i,r)&&No(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Oo(n),Oo(n.next),n=s=r),n=n.next}while(n!==s);return ks(n)}function i1(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&f1(o,a)){let l=Ip(o,a);o=ks(o,o.next),l=ks(l,l.next),Uo(o,e,t,n,i,r,0),Uo(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function s1(s,e,t,n){let i=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=Pp(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(h1(c));for(i.sort(r1),r=0;r<i.length;r++)t=o1(i[r],t);return t}function r1(s,e){return s.x-e.x}function o1(s,e){let t=a1(s,e);if(!t)return e;let n=Ip(t,s);return ks(n,n.next),ks(t,t.next)}function a1(s,e){let t=e,n=-1/0,i,r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===r))return i}t=t.next}while(t!==e);if(!i)return null;let a=i,l=i.x,c=i.y,u=1/0,f;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&vr(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(f=Math.abs(o-t.y)/(r-t.x),No(t,s)&&(f<u||f===u&&(t.x>i.x||t.x===i.x&&l1(i,t)))&&(i=t,u=f)),t=t.next;while(t!==a);return i}function l1(s,e){return Yt(s.prev,s,e.prev)<0&&Yt(e.next,s,s.next)<0}function c1(s,e,t,n){let i=s;do i.z===0&&(i.z=Eu(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,u1(i)}function u1(s){let e,t,n,i,r,o,a,l,c=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(o>1);return s}function Eu(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function h1(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function vr(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function f1(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!d1(s,e)&&(No(s,e)&&No(e,s)&&p1(s,e)&&(Yt(s.prev,s,e.prev)||Yt(s,e.prev,e))||Dl(s,e)&&Yt(s.prev,s,s.next)>0&&Yt(e.prev,e,e.next)>0)}function Yt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Dl(s,e){return s.x===e.x&&s.y===e.y}function Lp(s,e,t,n){let i=Xa(Yt(s,e,t)),r=Xa(Yt(s,e,n)),o=Xa(Yt(t,n,s)),a=Xa(Yt(t,n,e));return!!(i!==r&&o!==a||i===0&&Wa(s,t,e)||r===0&&Wa(s,n,e)||o===0&&Wa(t,s,n)||a===0&&Wa(t,e,n))}function Wa(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Xa(s){return s>0?1:s<0?-1:0}function d1(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Lp(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function No(s,e){return Yt(s.prev,s,s.next)<0?Yt(s,e,s.next)>=0&&Yt(s,s.prev,e)>=0:Yt(s,e,s.prev)<0||Yt(s,s.next,e)<0}function p1(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Ip(s,e){let t=new Ru(s.i,s.x,s.y),n=new Ru(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Jd(s,e,t,n){let i=new Ru(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Oo(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Ru(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function m1(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var ts=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];$d(e),Qd(n,e);let o=e.length;t.forEach($d);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Qd(n,t[l]);let a=Qv.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function $d(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Qd(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var Di=class s extends Dt{constructor(e=new Xn([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new xt(i,3)),this.setAttribute("uv",new xt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:p-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:g1,v,w=!1,z,U,D,Q;m&&(v=m.getSpacedPoints(u),w=!0,d=!1,z=m.computeFrenetFrames(u,!1),U=new L,D=new L,Q=new L),d||(g=0,p=0,_=0,x=0);let E=a.extractPoints(c),P=E.shape,ne=E.holes;if(!ts.isClockWise(P)){P=P.reverse();for(let W=0,Te=ne.length;W<Te;W++){let Me=ne[W];ts.isClockWise(Me)&&(ne[W]=Me.reverse())}}let Le=ts.triangulateShape(P,ne),B=P;for(let W=0,Te=ne.length;W<Te;W++){let Me=ne[W];P=P.concat(Me)}function se(W,Te,Me){return Te||console.error("THREE.ExtrudeGeometry: vec does not exist"),W.clone().addScaledVector(Te,Me)}let pe=P.length,$=Le.length;function K(W,Te,Me){let Ie,ve,je,Fe=W.x-Te.x,C=W.y-Te.y,A=Me.x-W.x,re=Me.y-W.y,we=Fe*Fe+C*C,Ae=Fe*re-C*A;if(Math.abs(Ae)>Number.EPSILON){let ye=Math.sqrt(we),Ye=Math.sqrt(A*A+re*re),Ne=Te.x-C/ye,Ge=Te.y+Fe/ye,$e=Me.x-re/Ye,Qe=Me.y+A/Ye,Re=(($e-Ne)*re-(Qe-Ge)*A)/(Fe*re-C*A);Ie=Ne+Fe*Re-W.x,ve=Ge+C*Re-W.y;let at=Ie*Ie+ve*ve;if(at<=2)return new he(Ie,ve);je=Math.sqrt(at/2)}else{let ye=!1;Fe>Number.EPSILON?A>Number.EPSILON&&(ye=!0):Fe<-Number.EPSILON?A<-Number.EPSILON&&(ye=!0):Math.sign(C)===Math.sign(re)&&(ye=!0),ye?(Ie=-C,ve=Fe,je=Math.sqrt(we)):(Ie=Fe,ve=C,je=Math.sqrt(we/2))}return new he(Ie/je,ve/je)}let te=[];for(let W=0,Te=B.length,Me=Te-1,Ie=W+1;W<Te;W++,Me++,Ie++)Me===Te&&(Me=0),Ie===Te&&(Ie=0),te[W]=K(B[W],B[Me],B[Ie]);let me=[],be,de=te.concat();for(let W=0,Te=ne.length;W<Te;W++){let Me=ne[W];be=[];for(let Ie=0,ve=Me.length,je=ve-1,Fe=Ie+1;Ie<ve;Ie++,je++,Fe++)je===ve&&(je=0),Fe===ve&&(Fe=0),be[Ie]=K(Me[Ie],Me[je],Me[Fe]);me.push(be),de=de.concat(be)}for(let W=0;W<g;W++){let Te=W/g,Me=p*Math.cos(Te*Math.PI/2),Ie=_*Math.sin(Te*Math.PI/2)+x;for(let ve=0,je=B.length;ve<je;ve++){let Fe=se(B[ve],te[ve],Ie);xe(Fe.x,Fe.y,-Me)}for(let ve=0,je=ne.length;ve<je;ve++){let Fe=ne[ve];be=me[ve];for(let C=0,A=Fe.length;C<A;C++){let re=se(Fe[C],be[C],Ie);xe(re.x,re.y,-Me)}}}let ie=_+x;for(let W=0;W<pe;W++){let Te=d?se(P[W],de[W],ie):P[W];w?(D.copy(z.normals[0]).multiplyScalar(Te.x),U.copy(z.binormals[0]).multiplyScalar(Te.y),Q.copy(v[0]).add(D).add(U),xe(Q.x,Q.y,Q.z)):xe(Te.x,Te.y,0)}for(let W=1;W<=u;W++)for(let Te=0;Te<pe;Te++){let Me=d?se(P[Te],de[Te],ie):P[Te];w?(D.copy(z.normals[W]).multiplyScalar(Me.x),U.copy(z.binormals[W]).multiplyScalar(Me.y),Q.copy(v[W]).add(D).add(U),xe(Q.x,Q.y,Q.z)):xe(Me.x,Me.y,f/u*W)}for(let W=g-1;W>=0;W--){let Te=W/g,Me=p*Math.cos(Te*Math.PI/2),Ie=_*Math.sin(Te*Math.PI/2)+x;for(let ve=0,je=B.length;ve<je;ve++){let Fe=se(B[ve],te[ve],Ie);xe(Fe.x,Fe.y,f+Me)}for(let ve=0,je=ne.length;ve<je;ve++){let Fe=ne[ve];be=me[ve];for(let C=0,A=Fe.length;C<A;C++){let re=se(Fe[C],be[C],Ie);w?xe(re.x,re.y+v[u-1].y,v[u-1].x+Me):xe(re.x,re.y,f+Me)}}}F(),Se();function F(){let W=i.length/3;if(d){let Te=0,Me=pe*Te;for(let Ie=0;Ie<$;Ie++){let ve=Le[Ie];nt(ve[2]+Me,ve[1]+Me,ve[0]+Me)}Te=u+g*2,Me=pe*Te;for(let Ie=0;Ie<$;Ie++){let ve=Le[Ie];nt(ve[0]+Me,ve[1]+Me,ve[2]+Me)}}else{for(let Te=0;Te<$;Te++){let Me=Le[Te];nt(Me[2],Me[1],Me[0])}for(let Te=0;Te<$;Te++){let Me=Le[Te];nt(Me[0]+pe*u,Me[1]+pe*u,Me[2]+pe*u)}}n.addGroup(W,i.length/3-W,0)}function Se(){let W=i.length/3,Te=0;ke(B,Te),Te+=B.length;for(let Me=0,Ie=ne.length;Me<Ie;Me++){let ve=ne[Me];ke(ve,Te),Te+=ve.length}n.addGroup(W,i.length/3-W,1)}function ke(W,Te){let Me=W.length;for(;--Me>=0;){let Ie=Me,ve=Me-1;ve<0&&(ve=W.length-1);for(let je=0,Fe=u+g*2;je<Fe;je++){let C=pe*je,A=pe*(je+1),re=Te+Ie+C,we=Te+ve+C,Ae=Te+ve+A,ye=Te+Ie+A;et(re,we,Ae,ye)}}}function xe(W,Te,Me){l.push(W),l.push(Te),l.push(Me)}function nt(W,Te,Me){ze(W),ze(Te),ze(Me);let Ie=i.length/3,ve=M.generateTopUV(n,i,Ie-3,Ie-2,Ie-1);it(ve[0]),it(ve[1]),it(ve[2])}function et(W,Te,Me,Ie){ze(W),ze(Te),ze(Ie),ze(Te),ze(Me),ze(Ie);let ve=i.length/3,je=M.generateSideWallUV(n,i,ve-6,ve-3,ve-2,ve-1);it(je[0]),it(je[1]),it(je[3]),it(je[1]),it(je[2]),it(je[3])}function ze(W){i.push(l[W*3+0]),i.push(l[W*3+1]),i.push(l[W*3+2])}function it(W){r.push(W.x),r.push(W.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return x1(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new _l[i.type]().fromJSON(i)),new s(n,e.options)}},g1={generateTopUV:function(s,e,t,n,i){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new he(r,o),new he(a,l),new he(c,u)]},generateSideWallUV:function(s,e,t,n,i,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],f=e[n*3+2],d=e[i*3],p=e[i*3+1],_=e[i*3+2],x=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new he(o,1-l),new he(c,1-f),new he(d,1-_),new he(x,1-m)]:[new he(a,1-l),new he(u,1-f),new he(p,1-_),new he(g,1-m)]}};function x1(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var vl=class s extends Au{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var Fo=class s extends Dt{constructor(e=new Xn([new he(0,.5),new he(-.5,-.5),new he(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new xt(i,3)),this.setAttribute("normal",new xt(r,3)),this.setAttribute("uv",new xt(o,2));function c(u){let f=i.length/3,d=u.extractPoints(t),p=d.shape,_=d.holes;ts.isClockWise(p)===!1&&(p=p.reverse());for(let g=0,m=_.length;g<m;g++){let M=_[g];ts.isClockWise(M)===!0&&(_[g]=M.reverse())}let x=ts.triangulateShape(p,_);for(let g=0,m=_.length;g<m;g++){let M=_[g];p=p.concat(M)}for(let g=0,m=p.length;g<m;g++){let M=p[g];i.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let g=0,m=x.length;g<m;g++){let M=x[g],v=M[0]+f,w=M[1]+f,z=M[2]+f;n.push(v,w,z),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return _1(t,e)}static fromJSON(e,t){let n=[];for(let i=0,r=e.shapes.length;i<r;i++){let o=t[e.shapes[i]];n.push(o)}return new s(n,e.curveSegments)}};function _1(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){let i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}var zr=class s extends Dt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],f=new L,d=new L,p=[],_=[],x=[],g=[];for(let m=0;m<=n;m++){let M=[],v=m/n,w=0;m===0&&o===0?w=.5/t:m===n&&l===Math.PI&&(w=-.5/t);for(let z=0;z<=t;z++){let U=z/t;f.x=-e*Math.cos(i+U*r)*Math.sin(o+v*a),f.y=e*Math.cos(o+v*a),f.z=e*Math.sin(i+U*r)*Math.sin(o+v*a),_.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),g.push(U+w,1-v),M.push(c++)}u.push(M)}for(let m=0;m<n;m++)for(let M=0;M<t;M++){let v=u[m][M+1],w=u[m][M],z=u[m+1][M],U=u[m+1][M+1];(m!==0||o>0)&&p.push(v,w,U),(m!==n-1||l<Math.PI)&&p.push(w,z,U)}this.setIndex(p),this.setAttribute("position",new xt(_,3)),this.setAttribute("normal",new xt(x,3)),this.setAttribute("uv",new xt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Kt=class s extends Dt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],u=new L,f=new L,d=new L;for(let p=0;p<=n;p++)for(let _=0;_<=i;_++){let x=_/i*r,g=p/n*Math.PI*2;f.x=(e+t*Math.cos(g))*Math.cos(x),f.y=(e+t*Math.cos(g))*Math.sin(x),f.z=t*Math.sin(g),a.push(f.x,f.y,f.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),d.subVectors(f,u).normalize(),l.push(d.x,d.y,d.z),c.push(_/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let _=1;_<=i;_++){let x=(i+1)*p+_-1,g=(i+1)*(p-1)+_-1,m=(i+1)*(p-1)+_,M=(i+1)*p+_;o.push(x,g,M),o.push(g,m,M)}this.setIndex(o),this.setAttribute("position",new xt(a,3)),this.setAttribute("normal",new xt(l,3)),this.setAttribute("uv",new xt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Gr=class s extends Dt{constructor(e=new gl(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new L,l=new L,c=new he,u=new L,f=[],d=[],p=[],_=[];x(),this.setIndex(_),this.setAttribute("position",new xt(f,3)),this.setAttribute("normal",new xt(d,3)),this.setAttribute("uv",new xt(p,2));function x(){for(let v=0;v<t;v++)g(v);g(r===!1?t:0),M(),m()}function g(v){u=e.getPointAt(v/t,u);let w=o.normals[v],z=o.binormals[v];for(let U=0;U<=i;U++){let D=U/i*Math.PI*2,Q=Math.sin(D),E=-Math.cos(D);l.x=E*w.x+Q*z.x,l.y=E*w.y+Q*z.y,l.z=E*w.z+Q*z.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,f.push(a.x,a.y,a.z)}}function m(){for(let v=1;v<=t;v++)for(let w=1;w<=i;w++){let z=(i+1)*(v-1)+(w-1),U=(i+1)*v+(w-1),D=(i+1)*v+w,Q=(i+1)*(v-1)+w;_.push(z,U,Q),_.push(U,D,Q)}}function M(){for(let v=0;v<=t;v++)for(let w=0;w<=i;w++)c.x=v/t,c.y=w/i,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new _l[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var bl=class extends en{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},We=class extends Rn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_p,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Sn=class extends We{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new he(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function qa(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function y1(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function v1(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function ep(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function Dp(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var os=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Cu=class extends os{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wf,endingEnd:Wf}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Xf:r=e,a=2*t-n;break;case qf:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Xf:o=e,l=2*n-t;break;case qf:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,p=this._weightNext,_=(n-t)/(i-t),x=_*_,g=x*_,m=-d*g+2*d*x-d*_,M=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*_+1,v=(-1-p)*g+(1.5+p)*x+.5*_,w=p*g-p*x;for(let z=0;z!==a;++z)r[z]=m*o[u+z]+M*o[c+z]+v*o[l+z]+w*o[f+z];return r}},Pu=class extends os{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),f=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*f+o[l+d]*u;return r}},Lu=class extends os{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},qn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=qa(t,this.TimeBufferType),this.values=qa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:qa(e.times,Array),values:qa(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Lu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Pu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Cu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Rr:t=this.InterpolantFactoryMethodDiscrete;break;case Us:t=this.InterpolantFactoryMethodLinear;break;case vc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Rr;case this.InterpolantFactoryMethodLinear:return Us;case this.InterpolantFactoryMethodSmooth:return vc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&y1(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===vc,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{let f=a*n,d=f-n,p=f+n;for(let _=0;_!==n;++_){let x=t[f+_];if(x!==t[d+_]||x!==t[p+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*n,d=o*n;for(let p=0;p!==n;++p)t[d+p]=t[f+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};qn.prototype.TimeBufferType=Float32Array;qn.prototype.ValueBufferType=Float32Array;qn.prototype.DefaultInterpolation=Us;var as=class extends qn{};as.prototype.ValueTypeName="bool";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=Rr;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;var Sl=class extends qn{};Sl.prototype.ValueTypeName="color";var Ui=class extends qn{};Ui.prototype.ValueTypeName="number";var Iu=class extends os{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let u=c+a;c!==u;c+=4)En.slerpFlat(r,0,o,c-a,o,c,l);return r}},_i=class extends qn{InterpolantFactoryMethodLinear(e){return new Iu(this.times,this.values,this.getValueSize(),e)}};_i.prototype.ValueTypeName="quaternion";_i.prototype.DefaultInterpolation=Us;_i.prototype.InterpolantFactoryMethodSmooth=void 0;var ls=class extends qn{};ls.prototype.ValueTypeName="string";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=Rr;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;var Ni=class extends qn{};Ni.prototype.ValueTypeName="vector";var Ml=class{constructor(e,t=-1,n,i=E0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Gn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(S1(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(qn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=v1(l);l=ep(l,1,u),c=ep(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ui(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let f=u[1],d=i[f];d||(i[f]=d=[]),d.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(f,d,p,_,x){if(p.length!==0){let g=[],m=[];Dp(p,g,m,_),g.length!==0&&x.push(new f(d,g,m))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let f=0;f<c.length;f++){let d=c[f].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let p={},_;for(_=0;_<d.length;_++)if(d[_].morphTargets)for(let x=0;x<d[_].morphTargets.length;x++)p[d[_].morphTargets[x]]=-1;for(let x in p){let g=[],m=[];for(let M=0;M!==d[_].morphTargets.length;++M){let v=d[_];g.push(v.time),m.push(v.morphTarget===x?1:0)}i.push(new Ui(".morphTargetInfluence["+x+"]",g,m))}l=p.length*o}else{let p=".bones["+t[f].name+"]";n(Ni,p+".position",d,"pos",i),n(_i,p+".quaternion",d,"rot",i),n(Ni,p+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function b1(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ui;case"vector":case"vector2":case"vector3":case"vector4":return Ni;case"color":return Sl;case"quaternion":return _i;case"bool":case"boolean":return as;case"string":return ls}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function S1(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=b1(s.type);if(s.times===void 0){let t=[],n=[];Dp(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var $i={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Du=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){let p=c[f],_=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}},M1=new Du,Oi=class{constructor(e){this.manager=e!==void 0?e:M1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Oi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ri={},Uu=class extends Error{constructor(e,t){super(e),this.response=t}},Bo=class extends Oi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=$i.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ri[e]!==void 0){Ri[e].push({onLoad:t,onProgress:n,onError:i});return}Ri[e]=[],Ri[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Ri[e],f=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=d?parseInt(d):0,_=p!==0,x=0,g=new ReadableStream({start(m){M();function M(){f.read().then(({done:v,value:w})=>{if(v)m.close();else{x+=w.byteLength;let z=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:p});for(let U=0,D=u.length;U<D;U++){let Q=u[U];Q.onProgress&&Q.onProgress(z)}m.enqueue(w),M()}})}}});return new Response(g)}else throw new Uu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{let f=/charset="?([^;"\s]*)"?/i.exec(a),d=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(_=>p.decode(_))}}}).then(c=>{$i.add(e,c);let u=Ri[e];delete Ri[e];for(let f=0,d=u.length;f<d;f++){let p=u[f];p.onLoad&&p.onLoad(c)}}).catch(c=>{let u=Ri[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ri[e];for(let f=0,d=u.length;f<d;f++){let p=u[f];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Nu=class extends Oi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=$i.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Ao("img");function l(){u(),$i.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(f){u(),i&&i(f),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Vr=class extends Oi{constructor(e){super(e)}load(e,t,n,i){let r=new rn,o=new Nu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Hr=class extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Tl=class extends Hr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},jc=new pt,tp=new L,np=new L,ko=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ro,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;tp.setFromMatrixPosition(e.matrixWorld),t.position.copy(tp),np.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(np),t.updateMatrixWorld(),jc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(jc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ou=class extends ko{constructor(){super(new Qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Cr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},wl=class extends Hr{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Ou}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},ip=new pt,xo=new L,Jc=new L,Fu=class extends ko{constructor(){super(new Qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new he(4,2),this._viewportCount=6,this._viewports=[new Ft(2,1,1,1),new Ft(0,1,1,1),new Ft(3,1,1,1),new Ft(1,1,1,1),new Ft(3,0,1,1),new Ft(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),xo.setFromMatrixPosition(e.matrixWorld),n.position.copy(xo),Jc.copy(n.position),Jc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Jc),n.updateMatrixWorld(),i.makeTranslation(-xo.x,-xo.y,-xo.z),ip.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ip)}},Fi=class extends Hr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Fu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Bu=class extends ko{constructor(){super(new is(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},zs=class extends Hr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new Bu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var cs=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Al=class extends Oi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=$i.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return $i.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),$i.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});$i.add(e,l),r.manager.itemStart(e)}};var El=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=sp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=sp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function sp(){return(typeof performance>"u"?Date:performance).now()}var $u="\\[\\]\\.:\\/",T1=new RegExp("["+$u+"]","g"),Qu="[^"+$u+"]",w1="[^"+$u.replace("\\.","")+"]",A1=/((?:WC+[\/:])*)/.source.replace("WC",Qu),E1=/(WCOD+)?/.source.replace("WCOD",w1),R1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qu),C1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qu),P1=new RegExp("^"+A1+E1+R1+C1+"$"),L1=["material","materials","bones","map"],ku=class{constructor(e,t,n){let i=n||Bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Bt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(T1,"")}static parseTrackName(e){let t=P1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);L1.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Bt.Composite=ku;Bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Bt.prototype.GetterByBindingType=[Bt.prototype._getValue_direct,Bt.prototype._getValue_array,Bt.prototype._getValue_arrayElement,Bt.prototype._getValue_toArray];Bt.prototype.SetterByBindingTypeAndVersioning=[[Bt.prototype._setValue_direct,Bt.prototype._setValue_direct_setNeedsUpdate,Bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_array,Bt.prototype._setValue_array_setNeedsUpdate,Bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_arrayElement,Bt.prototype._setValue_arrayElement_setNeedsUpdate,Bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_fromArray,Bt.prototype._setValue_fromArray_setNeedsUpdate,Bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vb=new Float32Array(1);var Rl=class{constructor(e,t,n=0,i=1/0){this.ray=new Ii(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Eo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return zu(e,this,n,t),n.sort(rp),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)zu(e[i],this,n,t);return n.sort(rp),n}};function rp(s,e){return s.distance-e.distance}function zu(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){let i=s.children;for(let r=0,o=i.length;r<o;r++)zu(i[r],e,t,!0)}}var zo=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos($t(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var Yn=matchMedia("(max-width:680px), (pointer:coarse)").matches,Op=new URLSearchParams(location.search).get("textures")==="desktop"?"desktop":"mobile",I1=new Set(["fashion-accessories-atlas-v1","fashion-garments-atlas-v1","student-mirror-reflection-v1","tea-pearl-seal-uv-v1"]),Xr=new Map,qr=[],Yr=!1,eh=0,Ul=Yn&&!!window.sceneBoot?.deferTextures,Fp=s=>Promise.resolve().then(s);function zt(s){return Op==="desktop"?s.replace("/textures/mobile/","/textures/fast/"):Yn?s.replace("/textures/fast/","/textures/mobile/"):s}function Up(s){let e=new URL(s,document.baseURI);if(e.pathname.includes("/textures/mobile/"))return e.href.replace("/textures/mobile/","/textures/fast/");if(!e.pathname.includes("/textures/fast/")||!e.pathname.endsWith(".webp"))return null;let t=e.pathname.split("/").pop().replace(/\.webp$/,"");return e.pathname=e.pathname.replace("/textures/fast/","/textures/").replace(/\.webp$/,I1.has(t)?".png":".jpg"),e.href}function Hs(){Yr||window.dispatchEvent(new CustomEvent("scene-textures",{detail:Wo()}))}function Np(s){let e=s.split("/").pop().split("?")[0];return[["bookcase","\u4E66\u67B6\u7167\u7247"],["drink-labels","\u996E\u6599\u5305\u88C5"],["products-atlas","\u5546\u54C1\u5305\u88C5"],["garments","\u670D\u88C5"],["fascia","\u5E97\u94FA\u62DB\u724C"],["tea-","\u5976\u8336\u676F"],["newsstand","\u62A5\u520A"],["screens","\u7535\u8111\u753B\u9762"],["tv-stills","\u7535\u89C6\u753B\u9762"],["bakery","\u9762\u5305"],["fashion","\u670D\u9970\u5546\u54C1"],["Plaster","\u5899\u9762"],["Tiles","\u74F7\u7816"],["Wood","\u6728\u7EB9"],["Fabric","\u5E03\u6599"],["Asphalt","\u8DEF\u9762"],["Paving","\u4EBA\u884C\u9053"],["Metal","\u91D1\u5C5E"],["Roof","\u5C4B\u9876"]].find(([n])=>e.includes(n))?.[1]||"\u5E97\u94FA\u7D20\u6750"}function Wo(){let s=[...Xr.values()];return{mode:Op,total:s.length,ready:s.filter(e=>e.status==="ready").length,pending:s.filter(e=>e.status==="pending"||e.status==="queued").length,failed:s.filter(e=>e.status==="failed").map(e=>e.url),fallbacks:s.filter(e=>e.usedFallback).length,current:s.filter(e=>e.status==="pending").map(e=>({name:Np(e.url),file:e.url.split("/").pop(),stage:e.stage,bytes:e.bytes||0,totalBytes:e.totalBytes||0,seconds:Math.floor((Date.now()-e.started)/1e3)})),failures:s.filter(e=>e.status==="failed").map(e=>({name:Np(e.url),file:e.url.split("/").pop(),reason:e.errorKind,message:e.error})),decodedBytes:s.reduce((e,t)=>e+(t.status==="ready"?t.canvas.width*t.canvas.height*4:0),0)}}window.sceneTextureDiagnostics=()=>({time:new Date().toISOString(),textures:Wo(),boot:window.sceneBoot?.state,scene:window.sceneQA?{contextLost:window.sceneQA().contextLost,drawCalls:window.sceneQA().drawCalls}:null});function Bi(s,e){let t=new Error(e);return t.kind=s,t}function D1(s,e){return new Promise((t,n)=>{let i=new AbortController,r,o,a,l=!1,c=u=>{l||(l=!0,clearTimeout(a),e.cancelAttempt=null,r&&(r.onload=r.onerror=null),o&&URL.revokeObjectURL(o),u?(i.abort(),r&&(r.src=""),n(u)):t(r))};e.cancelAttempt=()=>c(Bi("cancelled","\u5DF2\u91CD\u65B0\u5F00\u59CB\u4E0B\u8F7D")),a=setTimeout(()=>c(Bi("download-timeout","\u56FE\u7247\u4E0B\u8F7D\u8D85\u8FC7 15 \u79D2")),15e3),e.stage="downloading",e.started=Date.now(),e.bytes=0,e.totalBytes=0,Hs(),(async()=>{try{let u=await fetch(s,{signal:i.signal,credentials:"same-origin"});if(!u.ok)throw Bi(u.status===404?"not-found":"http","\u56FE\u7247\u8BF7\u6C42\u8FD4\u56DE "+u.status);e.totalBytes=Number(u.headers.get("content-length"))||0;let f;if(u.body?.getReader){let d=u.body.getReader(),p=[],_=0;for(;;){let{done:x,value:g}=await d.read();if(l)return;if(x)break;p.push(g),e.bytes+=g.byteLength,Date.now()-_>250&&(_=Date.now(),Hs())}f=new Blob(p,{type:u.headers.get("content-type")||"application/octet-stream"})}else f=await u.blob(),e.bytes=f.size;if(l)return;if(!f.size)throw Bi("empty","\u56FE\u7247\u6587\u4EF6\u4E3A\u7A7A");clearTimeout(a),e.stage="decoding",Hs(),a=setTimeout(()=>c(Bi("decode-timeout","\u56FE\u7247\u5DF2\u4E0B\u8F7D\uFF0C\u4F46\u6D4F\u89C8\u5668\u5904\u7406\u8D85\u65F6")),6e3),r=new Image,r.decoding="async",r.onload=()=>{r.naturalWidth?c():c(Bi("decode","\u56FE\u7247\u6CA1\u6709\u6709\u6548\u5C3A\u5BF8"))},r.onerror=()=>c(Bi("decode","\u56FE\u7247\u5DF2\u4E0B\u8F7D\uFF0C\u4F46\u65E0\u6CD5\u89E3\u6790")),o=URL.createObjectURL(f),r.src=o}catch(u){l||c(u.kind?u:Bi("network",u.message||"\u56FE\u7247\u8FDE\u63A5\u5931\u8D25"))}})()})}async function U1(s){let e=Up(s.url),t=[s.url,e,e&&Up(e)].filter((i,r,o)=>i&&o.indexOf(i)===r),n;for(let i=0;i<t.length;i++){let r;try{let o=new URL(t[i]);s.tries>1&&o.searchParams.set("textureRetry",String(s.tries)),r=await D1(o.href,s),s.stage="applying",Hs();let a=Yn?s.url.includes("/pbr/")?512:/atlas|fascia|bookcase/.test(s.url)?1536:1024:2048,l=Math.min(1,a/Math.max(r.naturalWidth,r.naturalHeight));s.canvas.width=Math.max(1,Math.round(r.naturalWidth*l)),s.canvas.height=Math.max(1,Math.round(r.naturalHeight*l));let c=s.canvas.getContext("2d");if(!c)throw Bi("canvas","\u624B\u673A\u672A\u80FD\u5206\u914D\u56FE\u7247\u753B\u5E03");c.drawImage(r,0,0,s.canvas.width,s.canvas.height),s.canvas.complete=!0,s.canvas.naturalWidth=s.canvas.width,s.canvas.naturalHeight=s.canvas.height,s.usedFallback=i>0,s.status="ready",s.stage="ready",s.error=null,s.errorKind=null;for(let u of s.textures)u.needsUpdate=!0;s.canvas.dispatchEvent(new Event("load"));return}catch(o){if(n=o,!["not-found","decode","decode-timeout"].includes(o.kind))break}finally{r&&(r.src="")}}s.retryRequested||Yr||(s.status="failed",s.stage="failed",s.error=String(n),s.errorKind=n?.kind||"processing",s.canvas.dispatchEvent(new Event("error")))}function Nl(){if(!(Ul||Yr))for(;eh<(Yn?3:6)&&qr.length;){let s=qr.shift();s.status="pending",s.tries=(s.tries||0)+1,eh++,U1(s).finally(()=>{eh--,s.retryRequested&&!Yr&&(s.retryRequested=!1,s.status="queued",qr.push(s)),Hs(),Nl()})}}function Bp(s){let e=new URL(zt(s),document.baseURI).href;if(Xr.has(e))return Xr.get(e);let t=document.createElement("canvas");t.width=t.height=1,t.complete=!1,t.naturalWidth=t.naturalHeight=0;let n={url:e,canvas:t,source:new Pr(t),textures:new Set,status:"queued",usedFallback:!1};return Xr.set(e,n),qr.push(n),Fp(()=>{Hs(),Nl()}),n}function ni(s){return Bp(s).canvas}var th=class extends Vr{load(e,t,n,i){let r=this.path?this.path+e:e;if(!/textures\/|blender_assets\//.test(r))return super.load(e,t,n,i);let o=Bp(r),a=new rn;a.source=o.source,o.textures.add(a),Yn&&(a.generateMipmaps=!1,a.minFilter=jt);let l=()=>{a.needsUpdate=!0,t&&t(a)};return o.status==="ready"?Fp(l):o.canvas.addEventListener("load",l,{once:!0}),i&&o.canvas.addEventListener("error",i,{once:!0}),a}};function ln(s){return new th(s)}function kp(){Ul=!1,Nl()}function nh(){for(let s of Xr.values())s.status==="failed"?(s.status="queued",qr.push(s)):s.status==="pending"&&(s.retryRequested=!0,s.cancelAttempt?.());Hs(),Nl()}function zp(){Yr=!0,Ul=!0,qr.length=0;for(let s of Xr.values())s.status==="pending"?(s.cancelAttempt?.(),s.status="failed"):s.status==="queued"&&(s.status="failed")}window.sceneStopTextureLoading=zp;window.addEventListener("pagehide",zp);window.addEventListener("pageshow",s=>{s.persisted&&(Yr=!1,Ul=!1,setTimeout(nh,0))});var Gp={type:"change"},ih={type:"start"},Vp={type:"end"},Ol=new Ii,Hp=new ei,N1=Math.cos(70*us.DEG2RAD),Fl=class extends xi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gs.ROTATE,MIDDLE:Gs.DOLLY,RIGHT:Gs.PAN},this.touches={ONE:Vs.ROTATE,TWO:Vs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(V){V.addEventListener("keydown",ye),this._domElementKeyEvents=V},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ye),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Gp),n.update(),r=i.NONE},this.update=(function(){let V=new L,Ee=new En().setFromUnitVectors(e.up,new L(0,1,0)),Oe=Ee.clone().invert(),Ce=new L,Je=new En,lt=new L,ft=2*Math.PI;return function(Z=null){let R=n.object.position;V.copy(R).sub(n.target),V.applyQuaternion(Ee),a.setFromVector3(V),n.autoRotate&&r===i.NONE&&ne(E(Z)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let H=n.minAzimuthAngle,N=n.maxAzimuthAngle;isFinite(H)&&isFinite(N)&&(H<-Math.PI?H+=ft:H>Math.PI&&(H-=ft),N<-Math.PI?N+=ft:N>Math.PI&&(N-=ft),H<=N?a.theta=Math.max(H,Math.min(N,a.theta)):a.theta=a.theta>(H+N)/2?Math.max(H,a.theta):Math.min(N,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&U||n.object.isOrthographicCamera?a.radius=te(a.radius):a.radius=te(a.radius*c),V.setFromSpherical(a),V.applyQuaternion(Oe),R.copy(n.target).add(V),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let X=!1;if(n.zoomToCursor&&U){let ee=null;if(n.object.isPerspectiveCamera){let j=V.length();ee=te(j*c);let oe=j-ee;n.object.position.addScaledVector(w,oe),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let j=new L(z.x,z.y,0);j.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),X=!0;let oe=new L(z.x,z.y,0);oe.unproject(n.object),n.object.position.sub(oe).add(j),n.object.updateMatrixWorld(),ee=V.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;ee!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(ee).add(n.object.position):(Ol.origin.copy(n.object.position),Ol.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Ol.direction))<N1?e.lookAt(n.target):(Hp.setFromNormalAndCoplanarPoint(n.object.up,n.target),Ol.intersectPlane(Hp,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),X=!0);return c=1,U=!1,X||Ce.distanceToSquared(n.object.position)>o||8*(1-Je.dot(n.object.quaternion))>o||lt.distanceToSquared(n.target)>0?(n.dispatchEvent(Gp),Ce.copy(n.object.position),Je.copy(n.object.quaternion),lt.copy(n.target),!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Ge),n.domElement.removeEventListener("pointerdown",Fe),n.domElement.removeEventListener("pointercancel",A),n.domElement.removeEventListener("wheel",Ae),n.domElement.removeEventListener("pointermove",C),n.domElement.removeEventListener("pointerup",A),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",ye),n._domElementKeyEvents=null)};let n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=i.NONE,o=1e-6,a=new zo,l=new zo,c=1,u=new L,f=new he,d=new he,p=new he,_=new he,x=new he,g=new he,m=new he,M=new he,v=new he,w=new L,z=new he,U=!1,D=[],Q={};function E(V){return V!==null?2*Math.PI/60*n.autoRotateSpeed*V:2*Math.PI/60/60*n.autoRotateSpeed}function P(V){let Ee=Math.abs(V)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*Ee)}function ne(V){l.theta-=V}function J(V){l.phi-=V}let Le=(function(){let V=new L;return function(Oe,Ce){V.setFromMatrixColumn(Ce,0),V.multiplyScalar(-Oe),u.add(V)}})(),B=(function(){let V=new L;return function(Oe,Ce){n.screenSpacePanning===!0?V.setFromMatrixColumn(Ce,1):(V.setFromMatrixColumn(Ce,0),V.crossVectors(n.object.up,V)),V.multiplyScalar(Oe),u.add(V)}})(),se=(function(){let V=new L;return function(Oe,Ce){let Je=n.domElement;if(n.object.isPerspectiveCamera){let lt=n.object.position;V.copy(lt).sub(n.target);let ft=V.length();ft*=Math.tan(n.object.fov/2*Math.PI/180),Le(2*Oe*ft/Je.clientHeight,n.object.matrix),B(2*Ce*ft/Je.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(Le(Oe*(n.object.right-n.object.left)/n.object.zoom/Je.clientWidth,n.object.matrix),B(Ce*(n.object.top-n.object.bottom)/n.object.zoom/Je.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function pe(V){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=V:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function $(V){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=V:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function K(V,Ee){if(!n.zoomToCursor)return;U=!0;let Oe=n.domElement.getBoundingClientRect(),Ce=V-Oe.left,Je=Ee-Oe.top,lt=Oe.width,ft=Oe.height;z.x=Ce/lt*2-1,z.y=-(Je/ft)*2+1,w.set(z.x,z.y,1).unproject(n.object).sub(n.object.position).normalize()}function te(V){return Math.max(n.minDistance,Math.min(n.maxDistance,V))}function me(V){f.set(V.clientX,V.clientY)}function be(V){K(V.clientX,V.clientX),m.set(V.clientX,V.clientY)}function de(V){_.set(V.clientX,V.clientY)}function ie(V){d.set(V.clientX,V.clientY),p.subVectors(d,f).multiplyScalar(n.rotateSpeed);let Ee=n.domElement;ne(2*Math.PI*p.x/Ee.clientHeight),J(2*Math.PI*p.y/Ee.clientHeight),f.copy(d),n.update()}function F(V){M.set(V.clientX,V.clientY),v.subVectors(M,m),v.y>0?pe(P(v.y)):v.y<0&&$(P(v.y)),m.copy(M),n.update()}function Se(V){x.set(V.clientX,V.clientY),g.subVectors(x,_).multiplyScalar(n.panSpeed),se(g.x,g.y),_.copy(x),n.update()}function ke(V){K(V.clientX,V.clientY),V.deltaY<0?$(P(V.deltaY)):V.deltaY>0&&pe(P(V.deltaY)),n.update()}function xe(V){let Ee=!1;switch(V.code){case n.keys.UP:V.ctrlKey||V.metaKey||V.shiftKey?J(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):se(0,n.keyPanSpeed),Ee=!0;break;case n.keys.BOTTOM:V.ctrlKey||V.metaKey||V.shiftKey?J(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):se(0,-n.keyPanSpeed),Ee=!0;break;case n.keys.LEFT:V.ctrlKey||V.metaKey||V.shiftKey?ne(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):se(n.keyPanSpeed,0),Ee=!0;break;case n.keys.RIGHT:V.ctrlKey||V.metaKey||V.shiftKey?ne(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):se(-n.keyPanSpeed,0),Ee=!0;break}Ee&&(V.preventDefault(),n.update())}function nt(V){if(D.length===1)f.set(V.pageX,V.pageY);else{let Ee=at(V),Oe=.5*(V.pageX+Ee.x),Ce=.5*(V.pageY+Ee.y);f.set(Oe,Ce)}}function et(V){if(D.length===1)_.set(V.pageX,V.pageY);else{let Ee=at(V),Oe=.5*(V.pageX+Ee.x),Ce=.5*(V.pageY+Ee.y);_.set(Oe,Ce)}}function ze(V){let Ee=at(V),Oe=V.pageX-Ee.x,Ce=V.pageY-Ee.y,Je=Math.sqrt(Oe*Oe+Ce*Ce);m.set(0,Je)}function it(V){n.enableZoom&&ze(V),n.enablePan&&et(V)}function W(V){n.enableZoom&&ze(V),n.enableRotate&&nt(V)}function Te(V){if(D.length==1)d.set(V.pageX,V.pageY);else{let Oe=at(V),Ce=.5*(V.pageX+Oe.x),Je=.5*(V.pageY+Oe.y);d.set(Ce,Je)}p.subVectors(d,f).multiplyScalar(n.rotateSpeed);let Ee=n.domElement;ne(2*Math.PI*p.x/Ee.clientHeight),J(2*Math.PI*p.y/Ee.clientHeight),f.copy(d)}function Me(V){if(D.length===1)x.set(V.pageX,V.pageY);else{let Ee=at(V),Oe=.5*(V.pageX+Ee.x),Ce=.5*(V.pageY+Ee.y);x.set(Oe,Ce)}g.subVectors(x,_).multiplyScalar(n.panSpeed),se(g.x,g.y),_.copy(x)}function Ie(V){let Ee=at(V),Oe=V.pageX-Ee.x,Ce=V.pageY-Ee.y,Je=Math.sqrt(Oe*Oe+Ce*Ce);M.set(0,Je),v.set(0,Math.pow(M.y/m.y,n.zoomSpeed)),pe(v.y),m.copy(M);let lt=(V.pageX+Ee.x)*.5,ft=(V.pageY+Ee.y)*.5;K(lt,ft)}function ve(V){n.enableZoom&&Ie(V),n.enablePan&&Me(V)}function je(V){n.enableZoom&&Ie(V),n.enableRotate&&Te(V)}function Fe(V){n.enabled!==!1&&(D.length===0&&(n.domElement.setPointerCapture(V.pointerId),n.domElement.addEventListener("pointermove",C),n.domElement.addEventListener("pointerup",A)),$e(V),V.pointerType==="touch"?Ye(V):re(V))}function C(V){n.enabled!==!1&&(V.pointerType==="touch"?Ne(V):we(V))}function A(V){Qe(V),D.length===0&&(n.domElement.releasePointerCapture(V.pointerId),n.domElement.removeEventListener("pointermove",C),n.domElement.removeEventListener("pointerup",A)),n.dispatchEvent(Vp),r=i.NONE}function re(V){let Ee;switch(V.button){case 0:Ee=n.mouseButtons.LEFT;break;case 1:Ee=n.mouseButtons.MIDDLE;break;case 2:Ee=n.mouseButtons.RIGHT;break;default:Ee=-1}switch(Ee){case Gs.DOLLY:if(n.enableZoom===!1)return;be(V),r=i.DOLLY;break;case Gs.ROTATE:if(V.ctrlKey||V.metaKey||V.shiftKey){if(n.enablePan===!1)return;de(V),r=i.PAN}else{if(n.enableRotate===!1)return;me(V),r=i.ROTATE}break;case Gs.PAN:if(V.ctrlKey||V.metaKey||V.shiftKey){if(n.enableRotate===!1)return;me(V),r=i.ROTATE}else{if(n.enablePan===!1)return;de(V),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(ih)}function we(V){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;ie(V);break;case i.DOLLY:if(n.enableZoom===!1)return;F(V);break;case i.PAN:if(n.enablePan===!1)return;Se(V);break}}function Ae(V){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(V.preventDefault(),n.dispatchEvent(ih),ke(V),n.dispatchEvent(Vp))}function ye(V){n.enabled===!1||n.enablePan===!1||xe(V)}function Ye(V){switch(Re(V),D.length){case 1:switch(n.touches.ONE){case Vs.ROTATE:if(n.enableRotate===!1)return;nt(V),r=i.TOUCH_ROTATE;break;case Vs.PAN:if(n.enablePan===!1)return;et(V),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Vs.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;it(V),r=i.TOUCH_DOLLY_PAN;break;case Vs.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;W(V),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(ih)}function Ne(V){switch(Re(V),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Te(V),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Me(V),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ve(V),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;je(V),n.update();break;default:r=i.NONE}}function Ge(V){n.enabled!==!1&&V.preventDefault()}function $e(V){D.push(V.pointerId)}function Qe(V){delete Q[V.pointerId];for(let Ee=0;Ee<D.length;Ee++)if(D[Ee]==V.pointerId){D.splice(Ee,1);return}}function Re(V){let Ee=Q[V.pointerId];Ee===void 0&&(Ee=new he,Q[V.pointerId]=Ee),Ee.set(V.pageX,V.pageY)}function at(V){let Ee=V.pointerId===D[0]?D[1]:D[0];return Q[Ee]}n.domElement.addEventListener("contextmenu",Ge),n.domElement.addEventListener("pointerdown",Fe),n.domElement.addEventListener("pointercancel",A),n.domElement.addEventListener("wheel",Ae,{passive:!1}),this.update()}};function Xp(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new Dt,c=0;for(let u=0;u<s.length;++u){let f=s[u],d=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in f.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(f.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in f.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(f.morphAttributes[p])}if(e){let p;if(t)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(t){let u=0,f=[];for(let d=0;d<s.length;++d){let p=s[d].index;for(let _=0;_<p.count;++_)f.push(p.getX(_)+u);u+=s[d].attributes.position.count}l.setIndex(f)}for(let u in r){let f=Wp(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,f)}for(let u in o){let f=o[u][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<f;++d){let p=[];for(let x=0;x<o[u].length;++x)p.push(o[u][x][d]);let _=Wp(p);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(_)}}return l}function Wp(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){let u=s[c];if(u.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.array.length}let o=new e(r),a=0;for(let c=0;c<s.length;++c)o.set(s[c].array,a),a+=s[c].array.length;let l=new Vt(o,t,n);return i!==void 0&&(l.gpuType=i),l}function sh(s,e){if(e===gp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Vo||e===Pl){let t=s.getIndex();if(t===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Vo)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var Kr=class extends Oi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new hh(t)}),this.register(function(t){return new vh(t)}),this.register(function(t){return new bh(t)}),this.register(function(t){return new Sh(t)}),this.register(function(t){return new dh(t)}),this.register(function(t){return new ph(t)}),this.register(function(t){return new mh(t)}),this.register(function(t){return new gh(t)}),this.register(function(t){return new uh(t)}),this.register(function(t){return new xh(t)}),this.register(function(t){return new fh(t)}),this.register(function(t){return new yh(t)}),this.register(function(t){return new _h(t)}),this.register(function(t){return new lh(t)}),this.register(function(t){return new Mh(t)}),this.register(function(t){return new Th(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=cs.extractUrlBase(e);o=cs.resolveURL(c,this.path)}else o=cs.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Bo(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===jp){try{o[wt.KHR_BINARY_GLTF]=new wh(e)}catch(f){i&&i(f);return}r=JSON.parse(o[wt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Ih(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let f=this.pluginCallbacks[u](c);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[f.name]=f,o[f.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let f=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(f){case wt.KHR_MATERIALS_UNLIT:o[f]=new ch;break;case wt.KHR_DRACO_MESH_COMPRESSION:o[f]=new Ah(r,this.dracoLoader);break;case wt.KHR_TEXTURE_TRANSFORM:o[f]=new Eh;break;case wt.KHR_MESH_QUANTIZATION:o[f]=new Rh;break;default:d.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function O1(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var wt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},lh=class{constructor(e){this.parser=e,this.name=wt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new qe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],sn);let f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new zs(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Fi(u),c.distance=f;break;case"spot":c=new wl(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,ds(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},ch=class{constructor(){this.name=wt.KHR_MATERIALS_UNLIT}getMaterialType(){return Zt}extendParams(e,t,n){let i=[];e.color=new qe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],sn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Xe))}return Promise.all(i)}},uh=class{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},hh=class{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new he(a,a)}return Promise.all(r)}},fh=class{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},dh=class{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new qe(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],sn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Xe)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},ph=class{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},mh=class{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new qe().setRGB(a[0],a[1],a[2],sn),Promise.all(r)}},gh=class{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},xh=class{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new qe().setRGB(a[0],a[1],a[2],sn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Xe)),Promise.all(r)}},_h=class{constructor(e){this.parser=e,this.name=wt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},yh=class{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},vh=class{constructor(e){this.parser=e,this.name=wt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},bh=class{constructor(e){this.parser=e,this.name=wt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Sh=class{constructor(e){this.parser=e,this.name=wt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Mh=class{constructor(e){this.name=wt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=i.byteOffset||0,c=i.byteLength||0,u=i.count,f=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,f,d,i.mode,i.filter).then(function(p){return p.buffer}):o.ready.then(function(){let p=new ArrayBuffer(u*f);return o.decodeGltfBuffer(new Uint8Array(p),u,f,d,i.mode,i.filter),p})})}else return null}},Th=class{constructor(e){this.name=wt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==Zn.TRIANGLES&&c.mode!==Zn.TRIANGLE_STRIP&&c.mode!==Zn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),f=u.isGroup?u.children:[u],d=c[0].count,p=[];for(let _ of f){let x=new pt,g=new L,m=new En,M=new L(1,1,1),v=new Nr(_.geometry,_.material,d);for(let w=0;w<d;w++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,w),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,w),l.SCALE&&M.fromBufferAttribute(l.SCALE,w),v.setMatrixAt(w,x.compose(g,m,M));for(let w in l)if(w==="_COLOR_0"){let z=l[w];v.instanceColor=new Os(z.array,z.itemSize,z.normalized)}else w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"&&_.geometry.setAttribute(w,l[w]);Ht.prototype.copy.call(v,_),this.parser.assignFinalMaterial(v),p.push(v)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}},jp="glTF",Xo=12,qp={JSON:1313821514,BIN:5130562},wh=class{constructor(e){this.name=wt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Xo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==jp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Xo,r=new DataView(e,Xo),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===qp.JSON){let c=new Uint8Array(e,Xo+o,a);this.content=n.decode(c)}else if(l===qp.BIN){let c=Xo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Ah=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=wt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let f=Ph[u]||u.toLowerCase();a[f]=o[u]}for(let u in e.attributes){let f=Ph[u]||u.toLowerCase();if(o[u]!==void 0){let d=n.accessors[e.attributes[u]],p=Zr[d.componentType];c[f]=p.name,l[f]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(f,d){i.decodeDracoFile(u,function(p){for(let _ in p.attributes){let x=p.attributes[_],g=l[_];g!==void 0&&(x.normalized=g)}f(p)},a,c,sn,d)})})}},Eh=class{constructor(){this.name=wt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Rh=class{constructor(){this.name=wt.KHR_MESH_QUANTIZATION}},Bl=class extends os{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,f=(n-t)/u,d=f*f,p=d*f,_=e*c,x=_-c,g=-2*p+3*d,m=p-d,M=1-g,v=m-d+f;for(let w=0;w!==a;w++){let z=o[x+w+a],U=o[x+w+l]*u,D=o[_+w+a],Q=o[_+w]*u;r[w]=M*z+v*U+g*D+m*Q}return r}},F1=new En,Ch=class extends Bl{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return F1.fromArray(r).normalize().toArray(r),r}},Zn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Zr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Yp={9728:nn,9729:jt,9984:Za,9985:qu,9986:_o,9987:ns},Zp={33071:Un,33648:wo,10497:_n},rh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ph={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},fs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},B1={CUBICSPLINE:void 0,LINEAR:Us,STEP:Rr},oh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function k1(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new We({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:gi})),s.DefaultMaterial}function Ws(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ds(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function z1(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let f=e[c];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(i=!0),f.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let f=e[c];if(n){let d=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):s.attributes.position;o.push(d)}if(i){let d=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):s.attributes.normal;a.push(d)}if(r){let d=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],f=c[1],d=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=f),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function G1(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function V1(s){let e,t=s.extensions&&s.extensions[wt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ah(t.attributes):e=s.indices+":"+ah(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+ah(s.targets[n]);return e}function ah(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Lh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function H1(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var W1=new pt,Ih=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new O1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new Vr(this.options.manager):this.textureLoader=new Al(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Bo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Ws(r,a,i),ds(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[wt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(cs.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=rh[i.type],a=Zr[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Vt(c,o,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=rh[i.type],c=Zr[i.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0,x,g;if(p&&p!==f){let m=Math.floor(d/p),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count,v=t.cache.get(M);v||(x=new c(a,m*p,i.count*p/u),v=new Ur(x,p/u),t.cache.add(M,v)),g=new Ns(v,l,d%p/u,_)}else a===null?x=new c(i.count*l):x=new c(a,d,i.count*l),g=new Vt(x,l,_);if(i.sparse!==void 0){let m=rh.SCALAR,M=Zr[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,w=i.sparse.values.byteOffset||0,z=new M(o[1],v,i.sparse.count*m),U=new c(o[2],w,i.sparse.count*l);a!==null&&(g=new Vt(g.array.slice(),g.itemSize,g.normalized));for(let D=0,Q=z.length;D<Q;D++){let E=z[D];if(g.setX(E,U[D*l]),l>=2&&g.setY(E,U[D*l+1]),l>=3&&g.setZ(E,U[D*l+2]),l>=4&&g.setW(E,U[D*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return u.magFilter=Yp[d.magFilter]||jt,u.minFilter=Yp[d.minFilter]||ns,u.wrapS=Zp[d.wrapS]||_n,u.wrapT=Zp[d.wrapT]||_n,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let o=i.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(f){c=!0;let d=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(f){return new Promise(function(d,p){let _=d;t.isImageBitmapLoader===!0&&(_=function(x){let g=new rn(x);g.needsUpdate=!0,d(g)}),t.load(cs.resolveURL(f,r.path),_,void 0,p)})}).then(function(f){return c===!0&&a.revokeObjectURL(l),f.userData.mimeType=o.mimeType||H1(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[wt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[wt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[wt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Bs,Rn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Fs,Rn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return We}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[wt.KHR_MATERIALS_UNLIT]){let f=i[wt.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,r,t))}else{let f=r.pbrMetallicRoughness||{};if(a.color=new qe(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){let d=f.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],sn),a.opacity=d[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",f.baseColorTexture,Xe)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=yt);let u=r.alphaMode||oh.OPAQUE;if(u===oh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===oh.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Zt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new he(1,1),r.normalTexture.scale!==void 0)){let f=r.normalTexture.scale;a.normalScale.set(f,f)}if(r.occlusionTexture!==void 0&&o!==Zt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Zt){let f=r.emissiveFactor;a.emissive=new qe().setRGB(f[0],f[1],f[2],sn)}return r.emissiveTexture!==void 0&&o!==Zt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Xe)),Promise.all(c).then(function(){let f=new o(a);return r.name&&(f.name=r.name),ds(f,r),t.associations.set(f,{materials:e}),r.extensions&&Ws(i,f,r),f})}createUniqueName(e){let t=Bt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[wt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Kp(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=V1(c),f=i[u];if(f)o.push(f.promise);else{let d;c.extensions&&c.extensions[wt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Kp(new Dt,c,t),i[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?k1(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let p=0,_=u.length;p<_;p++){let x=u[p],g=o[p],m,M=c[p];if(g.mode===Zn.TRIANGLES||g.mode===Zn.TRIANGLE_STRIP||g.mode===Zn.TRIANGLE_FAN||g.mode===void 0)m=r.isSkinnedMesh===!0?new ul(x,M):new ot(x,M),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===Zn.TRIANGLE_STRIP?m.geometry=sh(m.geometry,Pl):g.mode===Zn.TRIANGLE_FAN&&(m.geometry=sh(m.geometry,Vo));else if(g.mode===Zn.LINES)m=new Fr(x,M);else if(g.mode===Zn.LINE_STRIP)m=new Or(x,M);else if(g.mode===Zn.LINE_LOOP)m=new fl(x,M);else if(g.mode===Zn.POINTS)m=new Br(x,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&G1(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),ds(m,r),g.extensions&&Ws(i,m,g),t.assignFinalMaterial(m),f.push(m)}for(let p=0,_=f.length;p<_;p++)t.associations.set(f[p],{meshes:e,primitives:p});if(f.length===1)return r.extensions&&Ws(i,f[0],r),f[0];let d=new un;r.extensions&&Ws(i,d,r),t.associations.set(d,{meshes:e});for(let p=0,_=f.length;p<_;p++)d.add(f[p]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Qt(us.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new is(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ds(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let f=o[c];if(f){a.push(f);let d=new pt;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new hl(a,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let f=0,d=i.channels.length;f<d;f++){let p=i.channels[f],_=i.samplers[p.sampler],x=p.target,g=x.node,m=i.parameters!==void 0?i.parameters[_.input]:_.input,M=i.parameters!==void 0?i.parameters[_.output]:_.output;x.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",M)),c.push(_),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(f){let d=f[0],p=f[1],_=f[2],x=f[3],g=f[4],m=[];for(let M=0,v=d.length;M<v;M++){let w=d[M],z=p[M],U=_[M],D=x[M],Q=g[M];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();let E=n._createAnimationTracks(w,z,U,D,Q);if(E)for(let P=0;P<E.length;P++)m.push(E[P])}return new Ml(r,void 0,m)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],f=c[1],d=c[2];d!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(d,W1)});for(let p=0,_=f.length;p<_;p++)u.add(f[p]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Lo:c.length>1?u=new un:c.length===1?u=c[0]:u=new Ht,u!==c[0])for(let f=0,d=c.length;f<d;f++)u.add(c[f]);if(r.name&&(u.userData.name=r.name,u.name=o),ds(u,r),r.extensions&&Ws(n,u,r),r.matrix!==void 0){let f=new pt;f.fromArray(r.matrix),u.applyMatrix4(f)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new un;n.name&&(r.name=i.createUniqueName(n.name)),ds(r,n),n.extensions&&Ws(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,f=l.length;u<f;u++)r.add(l[u]);let c=u=>{let f=new Map;for(let[d,p]of i.associations)(d instanceof Rn||d instanceof rn)&&f.set(d,p);return u.traverse(d=>{let p=i.associations.get(d);p!=null&&f.set(d,p)}),f};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,l=[];fs[r.path]===fs.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(fs[r.path]){case fs.weights:c=Ui;break;case fs.rotation:c=_i;break;case fs.position:case fs.scale:c=Ni;break;default:switch(n.itemSize){case 1:c=Ui;break;case 2:case 3:default:c=Ni;break}break}let u=i.interpolation!==void 0?B1[i.interpolation]:Us,f=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){let _=new c(l[d]+"."+fs[r.path],t.array,f,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Lh(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof _i?Ch:Bl;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function X1(s,e,t){let n=e.attributes,i=new Vn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),a.normalized){let u=Lh(Zr[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new L,l=new L;for(let c=0,u=r.length;c<u;c++){let f=r[c];if(f.POSITION!==void 0){let d=t.json.accessors[f.POSITION],p=d.min,_=d.max;if(p!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(_[2]))),d.normalized){let x=Lh(Zr[d.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new Nn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Kp(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(let o in n){let a=Ph[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return At.workingColorSpace!==sn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${At.workingColorSpace}" not supported.`),ds(s,e),X1(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?z1(s,e.targets,t):s})}var qo=new L;function Kn(s,e,t,n,i,r){let o=2*Math.PI*i/4,a=Math.max(r-2*i,0),l=Math.PI/4;qo.copy(e),qo[n]=0,qo.normalize();let c=.5*o/(o+a),u=1-qo.angleTo(s)/l;return Math.sign(qo[t])===1?u*c:a/(o+a)+c+c*(1-u)}var ps=class extends bn{constructor(e=1,t=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,i,i,i),i===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new L,l=new L,c=new L(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,p=u.length/6,_=new L,x=.5/i;for(let g=0,m=0;g<u.length;g+=3,m+=2)switch(a.fromArray(u,g),l.copy(a),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),u[g+0]=c.x*Math.sign(a.x)+l.x*r,u[g+1]=c.y*Math.sign(a.y)+l.y*r,u[g+2]=c.z*Math.sign(a.z)+l.z*r,f[g+0]=l.x,f[g+1]=l.y,f[g+2]=l.z,Math.floor(g/p)){case 0:_.set(1,0,0),d[m+0]=Kn(_,l,"z","y",r,n),d[m+1]=1-Kn(_,l,"y","z",r,t);break;case 1:_.set(-1,0,0),d[m+0]=1-Kn(_,l,"z","y",r,n),d[m+1]=1-Kn(_,l,"y","z",r,t);break;case 2:_.set(0,1,0),d[m+0]=1-Kn(_,l,"x","z",r,e),d[m+1]=Kn(_,l,"z","x",r,n);break;case 3:_.set(0,-1,0),d[m+0]=1-Kn(_,l,"x","z",r,e),d[m+1]=1-Kn(_,l,"z","x",r,n);break;case 4:_.set(0,0,1),d[m+0]=1-Kn(_,l,"x","y",r,e),d[m+1]=1-Kn(_,l,"y","x",r,t);break;case 5:_.set(0,0,-1),d[m+0]=Kn(_,l,"x","y",r,e),d[m+1]=1-Kn(_,l,"y","x",r,t);break}}};var q1=new Wn(.103,.078,.35,36,1,!1),Y1=new Wn(.006,.006,.23,8),Z1=new Wn(.116,.116,.014,36),Jp=new We({color:"#b2a895",roughness:.88}),K1=new We({color:"#ece7d8",roughness:.42,transparent:!0,opacity:.92}),ii=[{name:"\u73CD\u73E0\u5976\u8336",base:"#b98b60",dark:"#785738",top:"#dfc6a1",pearls:!0},{name:"\u828B\u9999\u5976\u8336",base:"#aa8caa",dark:"#776079",top:"#d8c0d3",pearls:!0},{name:"\u8349\u8393\u5976\u8336",base:"#d999a7",dark:"#b96d80",top:"#f0ccd0",pearls:!1},{name:"\u67E0\u6AAC\u7EFF\u8336",base:"#a5ae65",dark:"#718544",top:"#d9d79e",pearls:!1}];function $p(s){let e=s|0;return()=>((e=Math.imul(1664525,e)+1013904223|0)>>>0)/4294967296}function j1(s){let e=document.createElement("canvas");e.width=1024,e.height=512;let t=e.getContext("2d"),n=$p(725+s*89),i=ii[s],r=t.createLinearGradient(0,0,0,512);r.addColorStop(0,i.top),r.addColorStop(.2,i.base),r.addColorStop(.77,i.base),r.addColorStop(1,i.dark),t.fillStyle=r,t.fillRect(0,0,1024,512);for(let a=0;a<2700;a++){let l=n()*1024,c=n()*512,u=.018+n()*.055;t.fillStyle=n()>.5?`rgba(255,250,225,${u})`:`rgba(75,44,39,${u*.65})`,t.fillRect(l,c,1+n()*3,1+n()*5)}for(let a=0;a<100;a++){let l=n()*1024,c=n()*512,u=2+n()*5;t.fillStyle="rgba(255,250,236,.24)",t.beginPath(),t.arc(l,c,u,0,Math.PI*2),t.fill()}if(i.pearls)for(let a=0;a<85;a++){let l=n()*1024,c=393+n()*109,u=5+n()*7;t.fillStyle="#35252a",t.beginPath(),t.arc(l,c,u,0,Math.PI*2),t.fill()}let o=new kt(e);return o.colorSpace=Xe,o.anisotropy=8,o.wrapS=_n,o}function J1(s){let e=document.createElement("canvas");e.width=512,e.height=512;let t=e.getContext("2d"),n=ii[s],i=$p(110+s);t.fillStyle=n.top,t.fillRect(0,0,512,512);for(let a=0;a<20;a++)t.fillStyle="rgba(255,255,241,.18)",t.beginPath(),t.ellipse(i()*512,i()*512,11+i()*30,5+i()*18,i()*Math.PI,0,Math.PI*2),t.fill();let r=t.createRadialGradient(180,145,30,256,256,340);r.addColorStop(0,"#ffffff55"),r.addColorStop(.7,"#ffffff09"),r.addColorStop(1,"#ffffff66"),t.fillStyle=r,t.fillRect(0,0,512,512),t.strokeStyle="#eff3e6bc",t.lineWidth=17,t.beginPath(),t.arc(256,256,248,0,Math.PI*2),t.stroke();let o=new kt(e);return o.colorSpace=Xe,o.anisotropy=8,o}var Qp=ln(),kl=Qp.load(zt("./textures/fast/tea-pearl-side-uv-v1.webp"));kl.colorSpace=Xe;kl.anisotropy=8;kl.wrapS=_n;var Uh=Qp.load(zt("./textures/fast/tea-pearl-seal-uv-v1.webp"));Uh.colorSpace=Xe;Uh.anisotropy=8;function $1(s,e){let t=document.createElement("canvas");t.width=1024,t.height=512;let n=t.getContext("2d"),i=new kt(t);i.colorSpace=Xe,i.anisotropy=8,i.wrapS=_n;let r=()=>{s.image?.width?n.drawImage(s.image,0,0,1024,512):(n.fillStyle=ii[e].base,n.fillRect(0,0,1024,512));for(let o of[0,512,1024])n.fillStyle="#f4e8c9ea",n.beginPath(),n.roundRect(o-194,100,388,244,28),n.fill(),n.strokeStyle=ii[e].dark,n.lineWidth=9,n.stroke(),n.fillStyle=ii[e].dark,n.textAlign="center",n.font='bold 106px "Songti SC",serif',n.fillText("\u4E03\u676F\u8336",o,230),n.font="bold 29px serif",n.fillText("QI BEI CHA  \xB7  2005",o,290);i.needsUpdate=!0};return r(),s.image?.addEventListener&&s.image.addEventListener("load",r,{once:!0}),i}var Dh=ii.map((s,e)=>({side:new We({map:$1(e===0?kl:j1(e),e),roughness:.71,metalness:0}),top:new We({map:e===0?Uh:J1(e),roughness:.68,metalness:0,transparent:e===0,side:yt})})),Q1=[new We({color:"#f3a0a6",roughness:.68}),new We({color:"#c5d8dc",roughness:.68})];function zl(s=0){let e=(s%ii.length+ii.length)%ii.length,t=new un;t.name="\u4E03\u676F\u8336 \xB7 "+ii[e].name,t.userData={productFamily:"sealed-milk-tea-cup",skin:e,sharedGeometry:!0,prototypeTexture:e===0?"photographic-uv":"draft-uv"};let n=new ot(q1,[Dh[e].side,Dh[e].top,Jp]);n.position.y=.175,n.castShadow=!0,n.receiveShadow=!0,t.add(n);let i=new ot(Z1,[K1,Dh[e].top,Jp]);i.position.y=.356,i.castShadow=!0,t.add(i);let r=new ot(Y1,Q1[e%2]);return r.position.set(e===0?.045:.022,.44,.01),r.rotation.z=.1,r.castShadow=!0,t.add(r),t}var Ib=ii.map(s=>s.name);function im(s,e=!1){let t=[],n=document.createElement("canvas");if(n.width=n.height=2,!e){let o=n.getContext("2d");o.fillStyle="#b9a98b",o.fillRect(0,0,2,2)}let i=new kt(n);i.colorSpace=Xe;let r=Array.from({length:16},(o,a)=>{let l=i.clone();return l.colorSpace=Xe,l.repeat.set(e?.244:.224,e?.244:.225),l.offset.set(a%4*.25+(e?.003:.013),(3-Math.floor(a/4))*.25+(e?.003:.012)),l.anisotropy=8,t.push(l),new We({map:l,transparent:e,alphaTest:e?.08:0,side:yt,roughness:.86,metalness:0})});return ln().load(s,o=>{for(let a=0;a<t.length;a++){let l=o.clone();l.colorSpace=Xe,l.repeat.set(e?.244:.224,e?.244:.225),l.offset.set(a%4*.25+(e?.003:.013),(3-Math.floor(a/4))*.25+(e?.003:.012)),l.anisotropy=8,l.needsUpdate=!0,r[a].map=l,r[a].needsUpdate=!0}}),r}var em=im(zt("./textures/fast/shop-products-atlas-v1.webp"));function eb(){let s=document.createElement("canvas");s.width=s.height=Yn?1024:2048;let e=s.getContext("2d"),t=new kt(s);e.scale(s.width/2048,s.height/2048),t.colorSpace=Xe,t.anisotropy=8;let n=Array.from({length:16},(o,a)=>{let l=a%4*512,c=Math.floor(a/4)*512;return[[0,0,128,384],[128,0,128,384],[0,384,256,64],[256,384,256,64],[256,0,256,384]].map(([f,d,p,_])=>{let x=t.clone();return x.colorSpace=Xe,x.repeat.set((p-4)/2048,(_-4)/2048),x.offset.set((l+f+2)/2048,(2048-c-d-_+2)/2048),x.anisotropy=8,x.needsUpdate=!0,new We({map:x,roughness:.68,side:yt})})}),i=ni("./textures/fast/shop-products-atlas-v1.webp"),r=["#ab493e","#c69c61","#426380","#b85b68","#a1754a","#8197a1","#c58637","#71915d","#b1514f","#7a544b","#a95b70","#bd6349","#536981","#d68b4c","#71909d","#c3b39b"];return i.onload=()=>{for(let o=0;o<16;o++){let a=o%4*512,l=Math.floor(o/4)*512,c=r[o];e.fillStyle=c,e.fillRect(a,l,512,512);for(let d of[0,128]){e.fillStyle="rgba(255,244,213,.45)",e.fillRect(a+d+10,l+27,108,24),e.fillStyle="rgba(42,34,30,.28)",e.fillRect(a+d+10,l+57,108,4),e.fillStyle="rgba(255,245,225,.22)",e.fillRect(a+d+10,l+78,108,225);for(let p=0;p<7;p++)e.fillStyle=p%2?"#f5e4c599":"#382f2855",e.fillRect(a+d+17,l+93+p*28,70+p%3*12,3);for(let p=0;p<7;p++)e.fillStyle=p%2?"#ffffff3a":"#261f2430",e.fillRect(a+d+5+p*17,l+345,3,34)}let u=o%4*i.width/4,f=Math.floor(o/4)*i.height/4;e.globalAlpha=.21,e.drawImage(i,u,f,i.width/4,i.height/4,a+262,l+8,244,365),e.globalAlpha=1,e.fillStyle="#eee2cbbb",e.fillRect(a+275,l+70,220,232),e.fillStyle="#4c413b",e.textAlign="left",e.font="bold 22px sans-serif",e.fillText("\u5546\u54C1\u8BF4\u660E",a+288,l+103),e.font="13px sans-serif";for(let d=0;d<8;d++)e.fillStyle=d%2?"#625347":"#786759",e.fillRect(a+288,l+122+d*15,176-d%3*19,3);e.fillStyle="#f4eddc",e.fillRect(a+357,l+262,124,72);for(let d=0;d<35;d++){let p=d%4===0?3:1;e.fillStyle="#272725",e.fillRect(a+366+d*3,l+270,p,42-d%5*3)}for(let d of[388,452]){e.fillStyle="#e0c79f",e.fillRect(a+5,l+d,502,58);for(let p=0;p<30;p++)e.fillStyle=p%2?"#ffffff83":"#5c413849",e.fillRect(a+11+p*16,l+d+5,3,48);e.fillStyle=c,e.fillRect(a+7,l+d+26,498,7)}}t.needsUpdate=!0;for(let o of n)for(let a of o)a.map.needsUpdate=!0,a.needsUpdate=!0},n}var tb=eb(),tm=im(zt("./textures/fast/fashion-garments-atlas-v1.webp"),!0),sm=Array.from({length:9},()=>new We({color:"#fff",transparent:!0,opacity:0,alphaTest:.08,side:yt,roughness:.84,depthWrite:!0}));ln().load(zt("./textures/fast/fashion-accessories-atlas-v1.webp"),s=>sm.forEach((e,t)=>{let n=s.clone();n.colorSpace=Xe,n.repeat.set(.318,.318),n.offset.set(t%3/3+.007,(2-Math.floor(t/3))/3+.007),n.anisotropy=8,n.needsUpdate=!0,e.map=n,e.opacity=1,e.needsUpdate=!0}));var Oh=ln().load(zt("./textures/fast/fashion-plum-tote-front-v1.webp"));Oh.colorSpace=Xe;Oh.anisotropy=8;var nb=new We({map:Oh,roughness:.93,side:yt}),Nh=Array.from({length:12},()=>new We({color:"#ffffff",transparent:!0,alphaTest:.08,roughness:.95,side:yt}));ln().load(zt("./textures/fast/fashion-garments-atlas-v1.webp"),s=>Nh.forEach((e,t)=>{let n=s.clone();n.colorSpace=Xe,n.repeat.set(.133,.112),n.offset.set(t%4*.25+.058,(3-Math.floor(t/4))*.25+.055),n.anisotropy=8,n.needsUpdate=!0,e.map=n,e.needsUpdate=!0}));var jr=ln().load(zt("./textures/fast/bakery-crust-uv-v1.webp"));jr.colorSpace=Xe;jr.wrapS=jr.wrapT=_n;jr.repeat.set(2.5,2.5);jr.anisotropy=8;var nm=new We({map:jr,roughness:.78}),ib=ln(),Yo=["#e2bd87","#dcc5a0","#6d9c59","#81583b"].map(s=>new We({color:s,roughness:.72}));ln().load(zt("./textures/fast/malatang-tray-top-uv-v1.webp"),s=>{let e=[[.66,.04,.3,.43],[.02,.55,.3,.39],[.34,.55,.3,.4],[.28,.04,.31,.41]];Yo.forEach((t,n)=>{let[i,r,o,a]=e[n],l=s.clone();l.colorSpace=Xe,l.repeat.set(o,a),l.offset.set(i,r),l.anisotropy=8,l.needsUpdate=!0,t.map=l,t.color.set("#ffffff"),t.needsUpdate=!0})});var Fh=ib.load(zt("./textures/fast/fried-skewer-tray-top-uv-v1.webp"));Fh.colorSpace=Xe;Fh.anisotropy=8;var sb=new We({map:Fh,roughness:.63,side:yt});function rm(s){let{group:e,box:t,cyl:n,orb:i,rod:r,mesh:o,mat:a,table:l,chair:c,stool:u,crt:f,fan:d,plant:p,fixture:_,label:x,wood:g,iron:m,cream:M,timber:v,roofFinish:w,metalPBR:z,ceramic:U,fabric:D,bookCovers:Q,bookBacks:E,bookSpines:P,paperEdge:ne,bookshelf:J,book:Le}=s,B=a("#a0aaa6",.34,.7),se=a("#28383c"),pe=U;Object.assign(B,z),B.normalScale.set(.25,.25),B.userData.metersPerTile=.8;let $=new We({color:"#a5cec8",transparent:!0,opacity:.16,roughness:.2,depthWrite:!1,side:yt}),K=["#a64a3e","#548b79","#c3a859","#617f9b","#b88087"],te=new bn(1,1,1),me=new bn(1,1,1,5,5,1),be=new zr(1,18,12,0,Math.PI*2,0,Math.PI*.72),de=new Wn(.78,.72,.28,18);{let G=me.attributes.position;for(let Z=0;Z<G.count;Z++){let R=G.getX(Z),H=G.getY(Z),N=G.getZ(Z);G.setXYZ(Z,R*(.91+.1*(1-Math.abs(H)*2)),H,N+Math.sign(N)*.16*(1-Math.abs(R)*1.4)*(1-Math.abs(H)*1.4))}me.computeVertexNormals()}let ie=K.map(G=>a(G,.49)),F=["\u51B0\u7EA2\u8336","\u6A58\u5B50\u6C7D\u6C34","\u7EFF\u8336","\u6C7D\u6C34","\u77FF\u6CC9\u6C34"],Se=ni("./textures/fast/period-drink-labels-v1.webp"),ke=F.map((G,Z)=>{let R=document.createElement("canvas");R.width=1024,R.height=256;let H=R.getContext("2d"),N=new kt(R);N.colorSpace=Xe,N.wrapS=_n,N.anisotropy=8;let X=()=>{Se.complete&&Se.naturalWidth?H.drawImage(Se,0,Z%4*Se.height/4,Se.width,Se.height/4,0,0,1024,256):(H.fillStyle=["#a56b3d","#e78e30","#46825b","#a95235","#538ead"][Z],H.fillRect(0,0,1024,256)),H.fillStyle="#faf1ddeb",H.fillRect(330,58,364,143),H.fillStyle="#31534a",H.textAlign="center",H.font='bold 83px "Songti SC",serif',H.fillText(G,512,163),N.needsUpdate=!0};return X(),Se.addEventListener("load",X),new We({map:N,roughness:.61,side:yt})});function xe(G,Z,R,H,N,X,ee,j,oe=.035){return o(G,new ps(Z,R,H,1,Math.min(oe,Z/5,R/5,H/5)),N,X,ee,j)}let nt=[[.041,0],[.057,.008],[.069,.025],[.073,.047],[.073,.166],[.068,.189],[.052,.215],[.036,.237],[.032,.248],[.032,.274]].map(G=>new he(...G)),et=new kr(nt,24);function ze(G,Z,R,H,N=0,X=1,ee="drink"){let j=e(G,Z,R,H);j.scale.setScalar(X);let oe=K[N%5],q=new ot(et,new Sn({color:ee==="care"?"#d9c8a8":oe,roughness:.26,metalness:0,clearcoat:.75,clearcoatRoughness:.2,transparent:ee==="drink",opacity:ee==="drink"?.84:1,depthWrite:!0}));q.castShadow=!0,j.add(q);for(let ce of[.038,.051,.184]){let Pe=new ot(new Kt(ce>.1?.067:.071,.0025,5,24),new We({color:"#ffffff",transparent:!0,opacity:.22}));Pe.rotation.x=Math.PI/2,Pe.position.y=ce,j.add(Pe)}if(ee==="drink"){let ce=new ot(new Wn(.074,.074,.102,28,1,!0),ke[N%5]);ce.position.y=.117,ce.castShadow=!0,j.add(ce)}else n(j,.074,.09,a("#e9dcc7"),0,.12,0,.074,24);n(j,.036,.027,a(ee==="care"?"#d6d1c4":"#e4d9bd",.38),0,.288,0,.036,20);for(let ce of[.279,.286,.293]){let Pe=new ot(new Kt(.036,.0025,5,20),M);Pe.rotation.x=Math.PI/2,Pe.position.y=ce,j.add(Pe)}return j}function it(G,Z,R,H,N,X=.21,ee=.29,j=.105){let oe=e(G,Z,R,H),q=ie[N%5],ce=N===5||N===6,Pe=N===14,De=!ce&&!Pe;Pe&&(X*=.78,ee*=1.12,j*=.38,oe.rotation.y=-.12);let[Ze,St,Ut,Tt,Rt]=tb[N%16];if(o(oe,De?me:te,[Ze,St,Ut,Tt,em[N%16],Rt],0,0,0).scale.set(X,ee,j),ce){let Nt=o(oe,new Do(X*.56,ee*.22,4),q,0,ee*.58,0);Nt.rotation.y=Math.PI/4}if(De)for(let Nt of[-1,1]){t(oe,X*.94,.012,j*.65,q,0,Nt*ee*.5,0);for(let Et=0;Et<7;Et++)t(oe,X*.1,.008,j*.7,a("#d1bfa1"),(-.42+Et*.14)*X,Nt*ee*.52,0)}return oe}function W(G,Z,R,H,N=0,X=1){if(N%3===2){let De=o(G,new Kt(.112*X,.043*X,10,24),nm,Z,R-.065*X,H);return De.rotation.x=Math.PI/2,De.rotation.z=N*.19,De}let ee=e(G,Z,R,H,N*.23),j=(N%3===1?.19:.15)*X,oe=.115*X,q=(N%3===1?.12:.15)*X;if(o(ee,be,nm,0,0,0).scale.set(j,oe,q),o(ee,de,a("#d5ad79",.96),0,-.8*oe,0).scale.set(j,oe,q),N%3===0)for(let De of[-.045,.045]){let Ze=r(ee,[-.08*X,.105*X,De],[.08*X,.105*X,De+.015*X],.0045*X,a("#aa7550"));Ze.castShadow=!1}return ee}function Te(G,Z="#584330",R="#dcc7a0"){let H=document.createElement("canvas");H.width=384,H.height=512;let N=H.getContext("2d");N.fillStyle=R,N.fillRect(0,0,384,512);for(let ee=0;ee<650;ee++)N.fillStyle=ee%3?"#ffffff16":"#48372810",N.fillRect(ee*117%384,ee*73%512,3,2);N.strokeStyle=Z,N.lineWidth=8,N.strokeRect(20,20,344,472),N.fillStyle=Z,N.textAlign="center",G.forEach((ee,j)=>{N.font=j===0?'bold 47px "Songti SC",serif':'bold 34px "Songti SC",serif',N.fillText(ee,192,102+j*104,335)});let X=new kt(H);return X.colorSpace=Xe,new We({map:X,roughness:.91,side:yt})}let Me={tea:["\u4E03\u676F\u8336","\u73CD\u73E0\u5976\u8336 3\u5143","\u653E\u5B66\u6765\u4E00\u676F"],noodles:["\u5C0F\u73B2\u7C73\u7EBF","\u725B\u8089\u7C73\u7EBF 6\u5143","\u73B0\u716E\u70ED\u6C64"],bakery:["\u9762\u5305\u574A","\u65B0\u9C9C\u51FA\u7089","\u9762\u5305 2\u5143\u8D77"],shop:["\u7EA2\u661F\u5C0F\u5356\u90E8","\u96F6\u98DF \u996E\u6599 \u6587\u5177","\u51B0\u6C7D\u6C34 2\u5143"],mianpi:["\u6C49\u4E2D\u64C0\u9762\u76AE","\u73B0\u62CC 4\u5143","\u52A0\u8FA3\u53EF\u9009"],fashion:["\u706B\u661F\u5730\u5E26","\u670D\u9970 \u9970\u54C1","\u5B66\u751F\u65B0\u6B3E"],barber:["\u9752\u6625\u7406\u53D1","\u5B66\u751F\u526A\u53D1 8\u5143","\u6D17\u526A\u5439"],bookshop:["\u8BF8\u845B\u4EAE\u8BFB\u4E66\u793E","\u6F2B\u753B \u5C0F\u8BF4","\u65E7\u4E66\u4EA4\u6362"],cyber:["\u661F\u5149\u7F51\u5427","\u4E0A\u7F51 2\u5143/\u65F6","\u8BF7\u52FF\u55A7\u54D7"]};function Ie(G,Z,R,H){let N=e(G,Z,0,R,.09);N.rotation.x=-.045;let X=Me[H];t(N,.51,.78,.045,a(H==="cyber"?"#46475e":"#6a5340"),0,.54,0);let ee=o(N,new Wt(.45,.72),Te(X,H==="cyber"?"#363d62":"#624432"),0,.54,.03);ee.castShadow=!1;for(let j of[-.19,.19])r(N,[j,.18,-.14],[j,.85,0],.02,m);return t(N,.54,.04,.22,g,0,.14,-.08),N}function ve(G,Z,R,H=.42,N=.31,X=.35){let ee=e(G,Z,0,R);xe(ee,H,N,X,a("#aa8863"),0,N/2,0,.012),t(ee,H*.94,.019,X*.92,a("#c3a477"),0,N+.011,0);for(let j of[-1,1])t(ee,.015,N*.75,.025,a("#856f54"),j*H*.31,N*.5,X/2+.004);return ee}function je(G){let Z=G.groups.map(H=>({...H})),R=G.attributes.normal;G.clearGroups();for(let H of Z){if(H.materialIndex!==0){G.addGroup(H.start,H.count,1);continue}let N=H.start,X=null;for(let ee=H.start;ee<H.start+H.count;ee+=3){let j=R.getZ(ee)>0?0:2;X!==null&&j!==X&&(G.addGroup(N,ee-N,X),N=ee),X=j}X!==null&&G.addGroup(N,H.start+H.count-N,X)}return G}function Fe(G,Z,R=!1){let H=new Xn;(R?[[-.23,-.5],[.23,-.5],[.28,.23],[.54,-.06],[.6,.06],[.4,.43],[.18,.5],[.08,.42],[-.08,.42],[-.18,.5],[-.4,.43],[-.6,.06],[-.54,-.06],[-.28,.23]]:[[-.28,-.5],[.28,-.5],[.3,.23],[.52,.18],[.58,.36],[.36,.49],[.16,.5],[.08,.4],[-.08,.4],[-.16,.5],[-.36,.49],[-.58,.36],[-.52,.18],[-.3,.23]]).forEach(([q,ce],Pe)=>Pe?H.lineTo(q*G,ce*Z):H.moveTo(q*G,ce*Z)),H.closePath();let X=je(new Di(H,{depth:.065,bevelEnabled:!0,bevelThickness:.008,bevelSize:.008,bevelSegments:1,curveSegments:2})),ee=X.attributes.position,j=X.attributes.normal,oe=X.attributes.uv;for(let q=0;q<ee.count;q++)Math.abs(j.getZ(q))>.7&&oe.setXY(q,ee.getX(q)/G+.5,ee.getY(q)/Z+.5);return oe.needsUpdate=!0,X}let C=Fe(.5,.79),A=Fe(.57,.95,!0);function re(G,Z,R,H,N,X=!1,ee=0){let j=e(G,Z,R,H,ee),oe=D(["#d7cbc0","#577f87","#b97680","#56545b","#bdb6a5","#62445d","#7d90a2","#77716e"][N%8]),q=o(j,X?A:C,[tm[N%16],oe,oe],0,0,0);return q.castShadow=!0,r(j,[-.13,X?.49:.43,-.02],[0,X?.56:.49,-.02],.008,m),r(j,[0,X?.56:.49,-.02],[.13,X?.49:.43,-.02],.008,m),j}function we(G,Z,R,H,N=0,X=0){let ee=e(G,Z,R,H,N),j=D(X?"#725967":"#536983"),oe=D(X?"#a68d91":"#d1c3ac"),q=new Xn;q.moveTo(-.205,0),q.lineTo(.205,0),q.lineTo(.255,.43),q.lineTo(-.255,.43),q.closePath();let ce=je(new Di(q,{depth:.12,bevelEnabled:!0,bevelSize:.012,bevelThickness:.012,bevelSegments:2,curveSegments:2})),Pe=ce.attributes.position,De=ce.attributes.normal,Ze=ce.attributes.uv;for(let Tt=0;Tt<Pe.count;Tt++)Math.abs(De.getZ(Tt))>.7&&Ze.setXY(Tt,Pe.getX(Tt)/.51+.5,Pe.getY(Tt)/.43);Ze.needsUpdate=!0;let St=o(ee,ce,[X?nb:j,j,j],0,.025,-.06);St.castShadow=!0;for(let Tt of[-.18,.18])t(ee,.065,.42,.014,oe,Tt,.35,.071),r(ee,[Tt,.43,.015],[Tt,.66,.015],.025,oe);let Ut=new ot(new Kt(.18,.025,6,20,Math.PI),oe);if(Ut.position.set(0,.64,.018),Ut.rotation.z=Math.PI,ee.add(Ut),!X){let Tt=o(ee,new Wt(.43,.36),tm[15],0,.25,.079);Tt.castShadow=!1}return ee}function Ae(G,Z,R,H,N=.55,X=.4){let ee=e(G,Z,R,H);t(ee,N,.045,X,a("#a4734e"),0,.025,0);for(let j=0;j<4;j++){for(let oe of[-X/2,X/2])t(ee,N,.025,.025,g,0,.07+j*.045,oe);for(let oe of[-N/2,N/2])t(ee,.025,.025,X,g,oe,.07+j*.045,0)}return ee}function ye(G,Z,R,H=2.4,N=2.25){let X=e(G,Z,0,R);for(let ee of[-H/2,H/2])t(X,.045,N,.36,m,ee,N/2,0);for(let ee=0;ee<5;ee++)t(X,H,.045,.4,v,0,.22+ee*.44,0);return X}function Ye(G,Z,R){let H=e(G,-Z/2+.28,0,R/2-.45);n(H,.14,.4,a("#61766a"),0,.2,0),n(H,.15,.04,m,0,.41,0),t(G,.12,.16,.035,M,Z/2-.16,.52,-R/2+.14),r(G,[Z/2-.14,.65,-R/2+.16],[Z/2-.14,2.75,-R/2+.16],.012,M);let N=e(G,-Z/2+.2,0,-R/2+.3,.12);r(N,[0,.15,0],[.12,1.25,0],.013,g),t(N,.19,.18,.07,a("#a18b51"),0,.12,0)}function Ne(G,Z,R){let H=e(G,-.25,0,.5);xe(H,2.25,.62,.72,a("#9e6b5d"),0,.4,0),t(H,2.36,.065,.83,B,0,.76,0);for(let oe of[-1.12,1.12])for(let q of[-.35,.35])r(H,[oe,.78,q],[oe,1.51,q],.025,B);for(let oe of[.9,1.25]){t(H,2.18,.025,.68,B,0,oe,0);for(let q=0;q<7;q++){let ce=-.9+q*.3;W(H,ce,oe+.08,.08,q,.7)}}let N=new We({color:"#d8e5d8",transparent:!0,opacity:.085,roughness:.12,depthWrite:!1,side:yt});t(H,2.24,.7,.012,N,0,1.14,.36),t(H,2.25,.018,.76,N,0,1.52,0);let X=ye(G,-.7,-R/2+.35,2.15);for(let oe=0;oe<5;oe++)for(let q=0;q<5;q++)W(X,-.83+q*.4,.33+oe*.44,0,q+oe,.78);let ee=e(G,Z/2-.62,0,-R/2+.65);xe(ee,.85,1.8,.88,B,0,.9,0);for(let oe=0;oe<3;oe++)t(ee,.69,.39,.03,se,0,.4+oe*.5,.455),t(ee,.54,.25,.015,a("#5b4330"),0,.4+oe*.5,.48),r(ee,[-.28,.55+oe*.5,.51],[.28,.55+oe*.5,.51],.022,B),n(ee,.035,.02,a("#b94b38"),.33,.42+oe*.5,.49);Ae(G,-Z/2+.48,.18,R/2-.62,.65,.45);let j=l(G,Z/2-.6,1,.8,.6,.85);t(j,.6,.025,.45,v,0,.9,0),W(j,0,1.05,0,1,1.25)}function Ge(G,Z,R){let H=ye(G,-.5,-R/2+.34,Z-1.35);for(let q=0;q<5;q++)for(let ce=0;ce<9;ce++){if(q===1&&ce===3||q===3&&ce===6||q===4&&ce===1)continue;let Pe=-(Z-1.65)/2+ce*(Z-1.65)/8+((q*7+ce*3)%5-2)*.014;if(q<2){let De=ze(H,Pe,.25+q*.44,((ce+q)%3-1)*.025,ce);De.rotation.y=((ce*3+q)%5-2)*.12}else{let De=(q*7+ce*5)%16,Ze=it(H,Pe,.37+q*.44,((q+ce)%3-1)*.03,De,.16+(q+ce)%3*.025,.22+(ce*2+q)%4*.025,.065+(ce+q)%2*.02);Ze.rotation.y=((ce*2+q)%5-2)*.075}}let N=e(G,Z/2-.59,0,-.7);xe(N,.83,1.95,.75,a("#ac4337"),0,.99,0),t(N,.68,1.58,.06,se,0,.99,.39);for(let q=0;q<4;q++){t(N,.63,.025,.38,M,0,.35+q*.37,.35);for(let ce=0;ce<4;ce++)ze(N,-.23+ce*.15,.36+q*.37,.38,ce)}t(N,.67,1.58,.015,$,0,.99,.52),r(N,[.25,.65,.54],[.25,1.23,.54],.018,M);let X=e(G,-.55,0,R/2-.9);xe(X,1.8,.9,.65,a("#8d7555"),0,.5,0),t(X,1.9,.065,.73,v,0,.98,0);for(let q=0;q<3;q++){let ce=t(X,.31,.035,.25,a(K[q]),-.63+q*.38,1.04,0),Pe=o(X,new Wt(.29,.23),em[14],-.63+q*.38,1.063,0);Pe.rotation.x=-Math.PI/2}let ee=e(X,.59,1.02,-.08);xe(ee,.36,.19,.3,a("#a7aaa1"),0,.1,0),t(ee,.28,.11,.025,a("#3c4c50"),0,.18,.16);for(let q=0;q<3;q++)for(let ce=0;ce<4;ce++)t(ee,.035,.012,.026,M,-.11+ce*.073,.22,-.08+q*.07);let j=e(G,-Z/2+.16,0,-.35,Math.PI/2);for(let q=0;q<3;q++)for(let ce=0;ce<5;ce++){let Pe=-.68+ce*.34,De=1.02+q*.39,Ze=(q*5+ce)%16;r(j,[Pe,De+.09,0],[Pe,De+.09,.1],.01,m),it(j,Pe,De,.14,Ze,.23,.3,.07)}let oe=Ae(G,-Z/2+.55,0,R/2-.58,.7,.48);for(let q=0;q<7;q++){let ce=it(oe,-.22+q%4*.145,.26+Math.floor(q/4)*.075,-.1+q%3*.085,(q*7+3)%16,.13,.19,.045);ce.rotation.z=(q%3-1)*.19,ce.rotation.y=(q%4-1.5)*.18}for(let[q,ce,Pe]of[[-.78,-.25,.66],[.28,.23,.46]]){let De=e(X,q,1.02,ce);n(De,.105,.24,new Sn({color:"#d5b698",transparent:!0,opacity:.36,roughness:.18,metalness:0,depthWrite:!1}),0,.13,0,.105,20),n(De,.112,.025,a("#b93e35"),0,.27,0,.112,20);for(let Ze=0;Ze<8*Pe;Ze++)i(De,.027,a(["#d6b46b","#c75942","#8da76f","#d8c7a3"][Ze%4]),(Ze%3-1)*.047,.055+Math.floor(Ze/3)*.048,(Ze*2%3-1)*.04)}}function $e(G,Z,R){let H=new Zt({color:"#dce6e3",side:yt,toneMapped:!1}),N=ln().load(zt("./textures/fast/student-mirror-reflection-v1.webp"));N.colorSpace=Xe,N.anisotropy=8;for(let q of[-1,.85]){if(xe(G,1.18,1.37,.1,a("#405f59"),q,1.97,-R/2+.15),q<0){let Pe=o(G,new Wt(1.02,1.2),H.clone(),q,1.97,-R/2+.24);Pe.name="barber-reflection-surface",Pe.castShadow=!1,Pe.userData.dynamic=!0;let De=new ot(new Wt(.62,1),new Zt({map:N,transparent:!0,opacity:0,depthWrite:!1,side:yt}));De.position.set(q-.04,1.96,-R/2+.241),De.name="barber-student-reflection",De.visible=!1,De.userData.dynamic=!0,G.add(De)}else{let Pe=o(G,new Wt(1.02,1.2),H.clone(),q,1.97,-R/2+.24);Pe.name="barber-reflection-surface",Pe.castShadow=!1,Pe.userData.dynamic=!0}t(G,1.35,.09,.43,v,q,1.18,-R/2+.35);for(let Pe=0;Pe<3;Pe++)ze(G,q-.43+Pe*.17,1.23,-R/2+.3,Pe,.8,"care");let ce=e(G,q,0,-.25,Math.PI);ce.name="barber-chair-facing-mirror",n(ce,.31,.07,B,0,.12,0),n(ce,.065,.49,B,0,.36,0),xe(ce,.59,.15,.6,a("#6d3935"),0,.66,0),xe(ce,.6,.68,.14,a("#6d3935"),0,.94,-.28);for(let Pe of[-.37,.37])r(ce,[Pe,.63,-.2],[Pe,.94,-.2],.026,B),xe(ce,.1,.08,.55,se,Pe,.97,0);r(ce,[-.22,.3,.42],[.22,.3,.42],.035,B),r(ce,[0,.58,.12],[0,.3,.42],.035,B)}let X=e(G,-Z/2+.39,0,.92,Math.PI/2);X.name="barber-sofa-left-wall";let ee=D("#52726c");xe(X,1.25,.18,.55,ee,0,.5,0),xe(X,1.25,.48,.12,ee,0,.8,-.28);for(let q of[-.65,.65]){xe(X,.12,.28,.64,ee,q,.62,0);for(let ce of[-.2,.2])n(X,.035,.32,g,q,.2,ce)}let j=e(G,Z/2-.52,0,-R/2+.65);xe(j,.62,.65,.65,M,0,.43,0),o(j,new Kt(.23,.065,8,24),M,0,.82,0).rotation.x=Math.PI/2,n(j,.19,.03,se,0,.78,0),r(j,[0,.8,-.2],[0,1.05,-.2],.025,B),r(j,[0,1.05,-.2],[0,1.05,0],.025,B);let oe=e(G,Z/2-.35,0,1);for(let q=0;q<4;q++)t(oe,.4,.055,.27,a(q%2?"#bec4b1":"#8daca3"),0,.7+q*.06,0);t(oe,.5,.65,.4,v,0,.33,0)}function Qe(G,Z,R){function H(De,Ze,St,Ut,Tt){let Rt=e(De,Ze,St,Ut),vt=D(["#57535a","#a18d78","#526d75","#875d70"][Tt%4]);Rt.rotation.y=Math.PI/2;let Nt=Tt%3===1,Et=new Xn;Et.moveTo(-.17,.02),Et.lineTo(.17,.02),Et.quadraticCurveTo(.205,.05,.18,.082),Et.lineTo(.115,.103),Et.lineTo(.03,.109),Et.lineTo(-.045,Nt?.18:.142),Et.lineTo(-.13,Nt?.185:.148),Et.lineTo(-.17,.075),Et.closePath(),xe(Rt,.36,.038,.195,a("#dfd7c9"),0,.019,0,.012);let si=o(Rt,new Di(Et,{depth:.17,bevelEnabled:!0,bevelThickness:.005,bevelSize:.005,bevelSegments:1}),vt,0,.014,-.085);si.castShadow=!0,xe(Rt,.085,.033,.174,a("#d3c7ba"),.135,.064,0,.009);for(let Fn=0;Fn<3;Fn++){let ri=-.035+Fn*.043,I=(Nt?.152:.115)-Fn*.014;r(Rt,[ri,I,-.077],[ri+.015,I,.077],.0065,a("#d9cfba"))}return t(Rt,.09,.012,.177,a("#eee5d6"),-.116,.048,0),Rt}let N=e(G,0,0,-R/2+.98);for(let De of[-1.4,1.4])r(N,[De,.15,0],[De,2.25,0],.026,B);r(N,[-1.4,2.25,0],[1.4,2.25,0],.026,B);for(let De=0;De<8;De++){let Ze=-1.26+De*.36,St=De>4;r(N,[Ze,2.22,0],[Ze-.12,2.05,0],.01,m),r(N,[Ze,2.22,0],[Ze+.12,2.05,0],.01,m),re(N,Ze,1.65,.055,De,St,(De%3-1)*.11)}let X=e(G,-Z/2+.13,0,-.1,Math.PI/2);t(X,1.7,1.9,.08,a("#66546f"),0,1.58,0),[[-.55,2.23,.31,.27,-.06],[-.03,2.14,.34,.28,.035],[.5,2.23,.33,.27,.045],[-.57,1.62,.33,.31,.055],[-.02,1.68,.35,.3,-.04],[.53,1.6,.33,.31,.065],[-.52,1.07,.3,.34,-.035],[.02,1.04,.32,.32,.045],[.54,1.08,.3,.32,-.025]].forEach(([De,Ze,St,Ut,Tt],Rt)=>{let vt=e(X,De,Ze,.09);if(vt.rotation.z=Tt,[0,1,2,6,8].includes(Rt))xe(vt,St+.035,Ut+.035,.017,a(Rt===8?"#ad9575":"#c9b69c"),0,0,0,.008),n(vt,.013,.006,a("#514a43"),0,Ut*.44,.013,.013,8).rotation.x=Math.PI/2;else{let si=o(vt,new Kt(Rt===5?.13:.105,.011,6,16),B,0,0,.018);si.castShadow=!1}r(vt,[0,Ut*.57,-.02],[0,Ut*.57,.11],.009,B);let Et=o(vt,new Wt(St,Ut),sm[Rt],0,0,.045);Et.castShadow=!1});let j=l(G,.3,.5,1.2,.8,.75);for(let[De,Ze,St,Ut,Tt]of[[0,-.36,-.12,3,"#5b7190"],[2,-.04,.19,2,"#b19b83"]]){let Rt=D(Tt);for(let vt=0;vt<Ut;vt++){let Nt=xe(j,.31+vt%2*.035,.055,.29-vt%2*.018,Rt,Ze+vt%2*.014,.84+vt*.054,St+vt%2*.012,.018);Nt.rotation.y=(De-1)*.09+vt%2*.035,xe(j,.115,.015,.15,Rt,Ze-.075,.875+vt*.054,St+.062,.008);let Et=o(j,new Wt(.28,.24),Nh[(De*3+vt)%12],Ze,.872+vt*.054,St);Et.rotation.x=-Math.PI/2,Et.rotation.z=(De-1)*.09,Et.castShadow=!1}}let oe=e(G,Z/2-.27,0,.15,-Math.PI/2),q=[];for(let De of[.48,1.03,1.58]){t(oe,2.15,.055,De===1.03?.58:.34,v,0,De,0);for(let Ze of[-.78,-.26,.26,.78])De===1.03&&Ze>0||q.push({x:Ze,y:De,k:(Math.round((Ze+1)*3)+Math.round(De*4))%4})}new Kr().load("./blender_assets/canvas_sneaker_v1.glb?v=74-multisurface-uv",De=>{let St=["blue","rose","sand","slate"].map(Tt=>{let Rt=ln().load("./blender_assets/canvas_sneaker_uv_"+Tt+".png?v=74");return Rt.colorSpace=Xe,Rt.flipY=!1,Rt.anisotropy=8,Rt}),Ut=new Map;for(let{x:Tt,y:Rt,k:vt}of q){let Nt=De.scene.clone(!0);Nt.position.set(Tt,Rt+.029,.02),Nt.rotation.y=-Math.PI/2,Nt.scale.setScalar(.86),Nt.traverse(Et=>{if(!Et.isMesh)return;Et.castShadow=!0,Et.receiveShadow=!0;let si=Et.material.name,Fn=vt+":"+si;if(!Ut.has(Fn)){let ri=Et.material.clone();ri.map=St[vt],ri.color.set("#ffffff"),ri.needsUpdate=!0,Ut.set(Fn,ri)}Et.material=Ut.get(Fn)}),oe.add(Nt)}document.querySelector("#scene").dataset.fashionShoes="ready"},void 0,De=>{console.error("\u5E06\u5E03\u978B Blender \u6A21\u578B\u52A0\u8F7D\u5931\u8D25\uFF0C\u4F7F\u7528\u7B80\u5316\u540E\u5907\u978B",De);for(let{x:Ze,y:St,k:Ut}of q)H(oe,Ze,St+.029,.02,Ut)}),we(j,.36,.8,-.04,-.12).scale.setScalar(.74),we(oe,.55,1.057,.08,Math.PI/2,1).scale.setScalar(.67),_(G,Z/2-.78,2.65,.38,"#ffe3c2",2.1,"room");let ce=e(G,Z/2-.56,0,-R/2+.75);r(ce,[-.4,2.45,.15],[.4,2.45,.15],.018,B);for(let De=0;De<5;De++){let Ze=t(ce,.16,1.55,.045,a(De%2?"#876977":"#9f8490"),-.3+De*.15,1.65,.17);Ze.rotation.y=(De%2?1:-1)*.08}t(G,.75,1.9,.05,B,Z/2-.45,1.13,-R/2+.13),t(G,.65,1.8,.02,new We({color:"#c5d6d8",metalness:.22,roughness:.18,emissive:"#839ba2",emissiveIntensity:.22}),Z/2-.45,1.13,-R/2+.17);let Pe=l(G,Z/2-.6,R/2-.65,.85,.6,.86);t(Pe,.3,.17,.3,se,0,1,0),u(G,Z/2-.6,R/2-1.35,"#8a718d")}function Re(G,Z,R){let H=e(G,0,0,-R/2+.62);xe(H,Z-.55,.9,.78,a("#6c8f86"),0,.48,0),t(H,Z-.42,.08,.9,B,0,.97,0),n(H,.36,.045,v,-.8,1.04,0);for(let X=0;X<7;X++)t(H,.39,.024,.19,a("#dcc69b"),-.8,1.08+X*.025,0);t(H,.035,.13,.26,B,-.44,1.15,.14),r(H,[-.44,1.22,.14],[-.44,1.42,.14],.026,g);for(let X=0;X<4;X++)n(H,.13,.16,B,.05+X*.34,1.1,.1),n(H,.115,.015,a(["#9e3b22","#d2c28b","#4c452d","#89a261"][X]),.05+X*.34,1.19,.1),r(H,[.05+X*.34,1.17,.1],[.12+X*.34,1.38,.15],.009,B);for(let X=0;X<4;X++)n(H,.3,.13,B,1.25,1.14+X*.14,-.15),o(H,new Kt(.29,.018,6,24),m,1.25,1.2+X*.14,-.15).rotation.x=Math.PI/2;let N=l(G,-.5,.3,1.7,.65,.85);for(let X=0;X<3;X++){let ee=-.53+X*.53;n(N,.19,.045,M,ee,.94,0),n(N,.16,.015,a("#a7542e"),ee,.969,0);for(let j=0;j<8;j++){let oe=new ss([new L(ee-.11,.99+j*.002,-.09+j*.025),new L(ee-.03,1.01+j*.002,-.07+j*.023),new L(ee+.08,.99+j*.002,-.11+j*.023)]);o(N,new Gr(oe,8,.012,4,!1),a("#d9bd81"))}for(let j=0;j<5;j++)t(N,.09,.012,.018,a("#578449"),ee-.07+j*.03,1.04,-.04+j*.023).rotation.y=j*.7}for(let X of[-1.3,1.2]){let ee=l(G,X,1.2,.65,.58,.73);u(G,X,1.7,"#79654d"),ze(ee,.15,.78,0,1,.7)}}function at(G,Z,R,H=0){let N=e(G,Z,0,R,H),X=l(N,0,0,1.16,.68,.76);f(X,0,.8,-.1),t(X,.49,.025,.17,M,-.06,.81,.22);for(let ee=0;ee<3;ee++)for(let j=0;j<10;j++)t(X,.032,.01,.024,a("#827f72"),-.26+j*.042,.831,.17+ee*.04);return i(X,.045,M,.38,.83,.23,1,.5,1.3),t(N,.22,.45,.4,M,.42,.33,-.1),c(N,0,.65),r(N,[.2,.7,-.3],[.2,.1,-.3],.012,m),N}function V(G,Z,R,H){for(let N of[-1.75,-.45,.85])at(G,N,-.6,Math.PI),at(G,N,.5,0);if(t(G,3.65,.45,.055,a("#4b5e64"),-.45,1.02,-.05),!H){let N=l(G,-2.15,1.9,1.25,.6,.82);f(N,-.22,.86,0),t(N,.22,.045,.25,a("#ae8b57"),.38,.9,.05),u(G,-2.15,1.25,"#555e68");let X=ye(G,1,-R/2+.25,1.55,1.6);for(let ee=0;ee<3;ee++)for(let j=0;j<5;j++)ze(X,-.6+j*.3,.25+ee*.44,0,j)}t(G,1.1,.7,.22,se,-2.2,2,-R/2+.17);for(let N=0;N<8;N++)t(G,.8,.018,.025,B,-2.2,1.72+N*.07,-R/2+.3),i(G,.012,a("#76bc82"),-1.74,1.8+N*.055,-R/2+.3);for(let N=0;N<3;N++)r(G,[-2.8,.2,-R/2+.18],[1.4,.2+N*.025,-R/2+.18],.012,m);d(G,-2.6,1.8,-R/2+.5),d(G,1.6,1.8,-R/2+.5)}function Ee(G,Z,R,H){let N=Z/2-.53;if(H){for(let X=0;X<6;X++)r(G,[N-.43,.17,-2.1+X*.58],[N-.43,.9,-2.1+X*.58],.018,m);r(G,[N-.43,.9,-2.1],[N-.43,.9,.8],.023,m)}else{for(let X=0;X<15;X++){let ee=1.35-X*.235;t(G,.8,.22*(X+1),.245,a("#8e8980"),N,.11*(X+1),ee)}for(let X=0;X<6;X++){let ee=1.35-X*.59,j=.22+X*.55;r(G,[N-.43,j,ee],[N-.43,j+.75,ee],.018,m)}r(G,[N-.43,.95,1.45],[N-.43,4,-2],.023,m)}}function Oe(G,Z,R=!1){({bakery:Ne,shop:Ge,barber:$e,fashion:Qe,mianpi:Re,cyber:V})[Z.kind]?.(G,Z.w,Z.d,R),Ye(G,Z.w,Z.d),Z.levels>1&&Ee(G,Z.w,Z.d,R)}function Ce(G){let{w:Z,d:R,kind:H,levels:N}=G,X=G.outside;for(let q of[-Z/2,Z/2])t(X,.22,.15,R+.1,a("#8b7f6a"),q,.25,0),t(X,.22,.1,R+.1,M,q,3.15,0);for(let q=0;q<4;q++)for(let ce=0;ce<5;ce++)t(X,.24,.1,.04,a(ce%2?"#966b4e":"#a37d5f"),-Z/2+.14+ce*.26,.36+q*.115,R/2+.17);let ee=e(X,Z/2+.12,0,-.6,Math.PI/2);t(ee,1.1,1.05,.05,a("#425b5a"),0,2,0);for(let q of[-.53,0,.53])t(ee,.035,1.08,.055,M,q,2,.035);for(let q of[1.47,2,2.53])t(ee,1.1,.035,.055,M,0,q,.035);t(ee,1.25,.09,.24,a("#8b8171"),0,1.43,.05);let j=e(X,-Z/2-.13,0,.15,-Math.PI/2);xe(j,.36,.52,.13,a("#84908b"),0,1.25,0),t(j,.21,.16,.02,se,0,1.34,.075),r(j,[0,1.5,0],[0,2.95,0],.015,m);for(let q of G.floors)for(let ce=0;ce<7;ce++)t(q.front,Z-.4,.045,.035,a("#849186"),0,2.69+ce*.045,R/2+.15);let oe=G.floors[N-1].roof;if(["shop","barber","fashion","mianpi"].includes(H)){let q=Math.atan2(.6,Z/2),ce=Math.hypot(Z/2,.6);for(let Ze of[-1,1]){let St=t(oe,ce+.04,.09,R+.3,w,Ze*Z/4,3.73,0);St.rotation.z=-Ze*q}let Pe=new Xn;Pe.moveTo(-Z/2,3.3),Pe.lineTo(Z/2,3.3),Pe.lineTo(Z/2,3.43),Pe.lineTo(0,4.03),Pe.lineTo(-Z/2,3.43),Pe.closePath();let De=new Di(Pe,{depth:.1,bevelEnabled:!1});for(let Ze of[-R/2-.05,R/2-.05])o(oe,De,a(G.color||"#b8ae9b"),0,0,Ze);t(oe,.18,.055,R+.1,a("#4c5351",.9),0,4.035,0)}else{for(let q of[-Z*.34,Z*.34])r(oe,[q,3.5,-.4],[q,4.3,-.4],.025,m);r(oe,[-Z*.34,4.3,-.4],[Z*.34,4.3,-.4],.012,m);for(let q=0;q<3;q++){let ce=-Z*.2+q*Z*.2;t(oe,.42,.64,.018,a(["#b5b2a1","#607d87","#b58c81"][q]),ce,3.94,-.4)}}if(H==="barber"){let q=e(X,-Z/2+.15,0,R/2+.35);n(q,.105,.9,M,0,1.9,0,.105,24);for(let ce=0;ce<12;ce++){let Pe=o(q,new Kt(.108,.028,5,20),a(ce%2?"#547caa":"#b84f48"),0,1.5+ce*.07,0);Pe.rotation.x=Math.PI/2+.35}n(q,.15,.1,B,0,1.4,0),n(q,.15,.1,B,0,2.4,0)}if(H==="fashion"){let q=e(X,Z/2-.7,0,R/2+.55);r(q,[-.5,.1,0],[-.5,1.6,0],.02,B),r(q,[.5,.1,0],[.5,1.6,0],.02,B),r(q,[-.5,1.6,0],[.5,1.6,0],.02,B);for(let ce=0;ce<4;ce++)re(q,-.36+ce*.24,1.16,.045,ce,!1,(ce-1.5)*.08).scale.setScalar(.57)}if(H==="shop")for(let q=0;q<2;q++){Ae(X,-Z/2+.5,.13+q*.25,R/2+.65,.8,.5);for(let ce=0;ce<4;ce++)ze(X,-Z/2+.24+ce*.17,.18+q*.25,R/2+.65,ce)}if(["tea","noodles","bakery","mianpi","fashion","barber","bookshop","cyber"].includes(H)&&Ie(X,-Z/2+.43,R/2+.56,H),H==="shop"||H==="bakery"||H==="bookshop"){let q=Z/2-.35,ce=R/2+.22;ve(X,q,ce,.36,.25,.35),H==="shop"&&ve(X,q-.05,ce-.05,.31,.18,.29),H==="bookshop"&&[[-.08,.275,-.1,-.1],[.07,.302,.04,.13],[-.02,.329,.01,-.05]].forEach(([De,Ze,St,Ut],Tt)=>{let Rt=e(X,q+De,Ze,ce+St,Ut),vt=[2,4,10][Tt];t(Rt,.29,.024,.38,[ne,ne,Q[vt],E[vt],ne,P[vt]],0,0,0)})}}function Je(G,Z,R){let H=e(G,Z,1.105,0),N=Yo[R?3:0],X=Yo[1],ee=Yo[2],j=a("#a9472d",.52);for(let[ce,Pe,De]of[[-.075,-.23,.048],[.078,-.15,.052],[-.055,.035,.055],[.085,.18,.045]])i(H,De,N,ce,.026,Pe,1,.86,1.05);for(let[ce,Pe,De]of[[-.09,.21,-.38],[.075,-.02,.48]]){let Ze=i(H,.085,ee,ce,0,Pe,1,.17,.65);Ze.rotation.y=De;let St=r(H,[ce-.045,.018,Pe-.025],[ce+.05,.026,Pe+.045],.006,a("#9eaf6a"));St.castShadow=!1}for(let[ce,Pe]of[[.005,-.3],[-.015,.29]]){let De=xe(H,.073,.05,.09,X,ce,.005,Pe,.012);De.rotation.y=R?.24:-.23}for(let[ce,Pe]of[[-.105,-.05],[.115,.285]]){let De=i(H,.021,j,ce,.045,Pe,1,.45,1.55);De.rotation.y=.7}let oe=o(H,new Kt(.043,.014,6,16),X,-.008,.024,.115);oe.rotation.x=Math.PI/2;let q=i(H,.057,Yo[3],.095,.022,-.285,1,.42,1);q.rotation.z=.18}function lt(G,Z,R,H){let N=e(G,Z,.1,R,H==="fried"?.14:-.18),X=H==="soup",ee=X?"#9e493c":"#567e85";xe(N,X?2.15:1.85,.8,.95,a(ee),0,.55,0),t(N,X?2.25:1.95,.07,1.03,B,0,.99,0);for(let j of[-.7,.7]){let oe=o(N,new Kt(.23,.04,7,20),m,j,.22,.39);for(let q=0;q<6;q++){let ce=q*Math.PI/3;r(N,[j,.22,.39],[j+Math.cos(ce)*.2,.22+Math.sin(ce)*.2,.39],.008,B)}}if(X){n(N,.32,.35,B,-.58,1.2,0),n(N,.29,.015,a("#a86631"),-.58,1.38,0);for(let j=0;j<2;j++){let oe=.24+j*.44;t(N,.4,.075,.72,B,oe,1.05,0),t(N,.36,.006,.68,a(j?"#67533e":"#634632",.42),oe,1.092,0),Je(N,oe,j);for(let q=0;q<3;q++){let ce=oe-.13+q*.1;r(N,[ce,1.12,-.16],[ce+.06,1.16,.22],.007,g)}}}else{t(N,.66,.24,.66,B,-.43,1.1,0),t(N,.53,.015,.54,a("#5b3f22"),-.43,1.24,0),t(N,.72,.06,.73,B,.48,1.07,.02);let j=o(N,new Wt(.67,.68),sb,.48,1.106,.02);j.rotation.x=-Math.PI/2,j.castShadow=!1;for(let oe=0;oe<4;oe++){r(N,[.23+oe*.15,1.14,-.25],[.23+oe*.15,1.14,.4],.009,g);for(let q=0;q<2;q++)i(N,.047,a(q%2?"#c7924c":"#a86a38"),.23+oe*.15,1.165,-.08+q*.18)}n(N,.18,.56,a("#776c5a"),-1.18,.3,-.1),r(N,[-1.18,.55,-.1],[-.65,.8,-.1],.025,m)}if(X){for(let j of[-.95,.95])for(let oe of[-.4,.4])r(N,[j,1,oe],[j,2.25,oe],.025,m);for(let j=0;j<12;j++)t(N,.2,.05,1.5,a(j%2?ee:"#c4ab7b"),-1.1+j*.2,2.28,0)}else{r(N,[0,.1,-.6],[0,2.45,-.6],.025,m);let j=o(N,new Do(1.5,.47,8,1,!0),a("#667c93"),0,2.48,-.6);j.rotation.y=.2}return x(N,X?"\u9EBB \u8FA3 \u70EB":"\u73B0 \u70B8 \u4E32 \u4E32",1.55,.35,ee,"#e6cf9b",75).position.set(0,.6,.49),_(N,0,2.14,0,"#ffcd8f",3,"street"),u(N,1.4,.7,ee),Ae(N,-1.3,0,.5,.55,.4),N}function ft(G,Z,R=!1){let{w:H,d:N,kind:X}=Z;if(X==="bookshop")if(R)t(G,1.5,.35,2.1,v,-1.5,.32,-.7),t(G,1.45,.18,2,M,-1.5,.59,-.7),t(G,1.35,.1,.36,a("#d2c2a3"),-1.5,.74,-1.35),l(G,.8,-1,1.4,.8),c(G,.8,-.1),t(G,.9,1.9,.6,v,-2.1,.95,1.6);else{for(let oe of[-1.5,.65])J(G,1.95,!0).position.set(oe,0,-N/2+.34);let j=J(G,2.8,!0);j.position.set(-H/2+.32,0,.1),j.rotation.y=Math.PI/2,l(G,.95,.75,1.55,.75,.83);for(let oe=0;oe<3;oe++)Le(G,.5+oe*.3,.9,.75,oe,!0);u(G,.7,1.8,"#ad4932")}else if(X==="cyber")for(let j of[-1.6,.45])for(let oe of[-.6,.7]){let q=l(G,j,oe,1.5,.7,.76);f(q,0,.8,-.12),t(q,.48,.025,.17,M,0,.81,.21),c(G,j,oe+.65)}else if(X==="tea"){t(G,2.65,.92,.72,a("#718d7c"),-.3,.56,.65),t(G,2.75,.07,.8,v,-.3,1.05,.65);for(let j=0;j<3;j++){let oe=zl(j);oe.position.set(-.95+j*.4,1.09,.62),G.add(oe)}t(G,H-.65,.9,.68,M,0,.56,-N/2+.5),t(G,H-.5,.06,.76,B,0,1.05,-N/2+.5);for(let j of[-.8,.7])t(G,.5,.65,.42,B,j,1.41,-N/2+.46),t(G,.35,.15,.02,se,j,1.48,-N/2+.69);u(G,-.9,1.65,"#b58b70"),u(G,.35,1.65,"#b58b70")}else if(X==="shop"){let j=ye(G,-.4,-N/2+.34,H-1.2);for(let q=0;q<3;q++)for(let ce=0;ce<6;ce++)it(j,-1.1+ce*.42,.43+q*.44,.08,(q*6+ce)%16,.25,.3,.09);for(let q=0;q<6;q++)ze(j,-1.1+q*.42,1.59,.08,q);t(G,1.8,.9,.65,a("#8d7555"),-.55,.5,N/2-.9),t(G,1.9,.06,.73,v,-.55,.98,N/2-.9),t(G,.34,.19,.28,M,.05,1.11,N/2-1);let oe=e(G,H/2-.5,0,-N/2+.65);t(oe,.85,1.95,.9,a("#993f35"),0,1,0),t(oe,.7,1.6,.02,se,0,1.03,.47);for(let q=0;q<3;q++)ze(oe,-.2+q*.2,.37,.5,q)}else if(X==="bakery"){t(G,2.25,.7,.72,a("#9e6b5d"),-.25,.44,.5);for(let oe of[.9,1.25]){t(G,2.18,.025,.68,B,-.25,oe,.5);for(let q=0;q<5;q++)W(G,-1.1+q*.42,oe+.08,.53,q,.8)}t(G,2.25,.7,.012,$,-.25,1.14,.86),t(G,2.25,.018,.76,$,-.25,1.52,.5);let j=ye(G,-.7,-N/2+.35,2.15);for(let oe=0;oe<5;oe++)W(j,-.8+oe*.4,1.18,0,oe,.9);t(G,.85,1.8,.88,B,H/2-.62,.9,-N/2+.65);for(let oe=0;oe<3;oe++)t(G,.7,.3,.025,se,H/2-.62,.4+oe*.5,-N/2+1.11)}else if(X==="fashion"){r(G,[-H/2+.55,.1,-1.2],[-H/2+.55,2.3,-1.2],.025,B),r(G,[-H/2+.55,2.3,-1.2],[-H/2+.55,2.3,1.1],.025,B);for(let oe=0;oe<4;oe++)re(G,-H/2+.6,1.7,-1+oe*.6,oe,oe===1,Math.PI/2);let j=l(G,.3,.5,1.2,.8,.75);for(let oe=0;oe<3;oe++)t(j,.38,.07,.3,Nh[oe],-.32+oe*.32,.86,0);we(j,.3,.79,-.05,-.12).scale.setScalar(.65)}else if(X==="barber"){for(let j of[-1,.85])t(G,1.18,1.37,.1,a("#405f59"),j,1.97,-N/2+.15),t(G,1.02,1.2,.015,a("#aabbb7",.3,.2),j,1.97,-N/2+.22),t(G,1.35,.09,.43,v,j,1.18,-N/2+.35),n(G,.31,.07,B,j,.12,-.25),t(G,.58,.16,.6,a("#6d3935"),j,.66,-.25),t(G,.6,.65,.14,a("#6d3935"),j,.95,.03);t(G,.55,.22,1.35,D("#52726c"),-H/2+.4,.5,.92),t(G,.12,.55,1.35,D("#52726c"),-H/2+.16,.85,.92)}else if(X==="noodles"||X==="mianpi"){t(G,H-.55,.9,.78,a(X==="mianpi"?"#6c8f86":"#b0a993"),0,.5,-N/2+.62),t(G,H-.42,.07,.9,B,0,.99,-N/2+.62),n(G,.35,.48,B,-1,1.27,-N/2+.6),n(G,.29,.02,a("#9e6936"),-1,1.52,-N/2+.6);for(let j of[-1.2,1.1])l(G,j,1,.85,.65,.74),u(G,j,1.65,"#79654d"),n(G,.19,.075,M,j,.82,1),n(G,.16,.012,a(X==="mianpi"?"#d2ad71":"#b0854f"),j,.865,1);for(let j=0;j<4;j++)ze(G,-.1+j*.3,1.05,-N/2+.62,j,.8,"care")}let ee=new Map;G.traverse(j=>{if(!j.isMesh)return;let oe=q=>{if(!q?.isMeshStandardMaterial||!q.map)return q;if(!ee.has(q)){let ce=q.clone();ce.emissive.copy(ce.color).multiplyScalar(.12),ce.map&&(ce.emissiveMap=ce.map),ee.set(q,ce)}return ee.get(q)};j.material=Array.isArray(j.material)?j.material.map(oe):oe(j.material)})}return{furnish:Oe,preview:ft,architecture:Ce,stall:lt,basket:Ae,bottle:ze,soft:xe}}var Gl={tea:"tea-objects-atlas-v1.webp",noodles:"food-objects-atlas-v1.webp",mianpi:"food-objects-atlas-v1.webp",bakery:"food-objects-atlas-v1.webp",shop:"shop-products-atlas-v1.webp",fashion:"fashion-garments-atlas-v1.webp",bookshop:"rental-books-atlas-v1.webp"},om=ln(),lm={noodles:om.load(zt("./textures/fast/noodle-soup-top-uv-v1.webp")),mianpi:om.load(zt("./textures/fast/mianpi-top-uv-v1.webp"))};for(let[s,e]of Object.entries(lm))e.colorSpace=Xe,e.anisotropy=8,s==="mianpi"&&(e.repeat.set(.91,.91),e.offset.set(.045,.045));var rb=Object.fromEntries(Object.entries(lm).map(([s,e])=>[s,new We({map:e,roughness:.57,side:yt})])),ob=[new he(.11,0),new he(.16,.025),new he(.202,.1),new he(.215,.14)],ab=new kr(ob,32),lb=new rs(.198,40),cb=new Kt(.214,.011,8,40),ub=new We({color:"#dfdbcc",roughness:.58}),hb=new We({color:"#e9e5d9",roughness:.43}),Zo={};for(let[s,e]of Object.entries(Gl))Zo[e]||(Zo[e]=ni("./textures/fast/"+e));var cm={tea:{title:"\u4E03\u676F\u8336",sub:"\u653E\u5B66\u8DEF\u4E0A \xB7 \u6765\u4E00\u676F",items:["\u73CD\u73E0\u5976\u8336  3\u5143","\u7EA2\u8C46\u5976\u8336  4\u5143","\u67E0\u6AAC\u7EFF\u8336  3\u5143"],photos:[0,1,2,4],paper:"#e9dcb9",ink:"#315c51"},noodles:{title:"\u5C0F\u73B2\u7C73\u7EBF",sub:"\u5C0F\u9505\u73B0\u716E \xB7 \u70ED\u6C64\u9C9C\u9999",items:["\u725B\u8089\u7C73\u7EBF  6\u5143","\u9178\u83DC\u7C73\u7EBF  5\u5143","\u9EBB\u8FA3\u7C73\u7EBF  5\u5143"],photos:[0,1,2,3],paper:"#e9d5b3",ink:"#8a4230"},mianpi:{title:"\u6C49\u4E2D\u64C0\u9762\u76AE",sub:"\u73B0\u62CC \xB7 \u52A0\u8FA3\u53EF\u9009",items:["\u64C0\u9762\u76AE  4\u5143","\u52A0\u83DC  1\u5143","\u52A0\u86CB  1\u5143"],photos:[4,5,6,7],paper:"#dfd7bd",ink:"#694638"},bakery:{title:"\u9762\u5305\u574A",sub:"\u65B0\u9C9C\u51FA\u7089 \xB7 \u653E\u5B66\u70B9\u5FC3",items:["\u5976\u6CB9\u9762\u5305  2\u5143","\u9999\u8471\u9762\u5305  2\u5143","\u751C\u751C\u5708  2\u5143"],photos:[12,13,14,15],paper:"#ead8bd",ink:"#814a39"},shop:{title:"\u7EA2\u661F\u5C0F\u5356\u90E8",sub:"\u96F6\u98DF \xB7 \u996E\u6599 \xB7 \u6587\u5177",items:["\u6C7D\u6C34  2\u5143","\u997C\u5E72  1\u5143\u8D77","\u4F5C\u4E1A\u672C  1\u5143"],photos:[5,1,12,14],paper:"#ded9bb",ink:"#3d6056"},fashion:{title:"\u706B\u661F\u5730\u5E26",sub:"\u9752\u6625\u8863\u6A71 \xB7 2005",items:["\u5370\u82B1 T \u6064  25\u5143\u8D77","\u725B\u4ED4\u5916\u5957  68\u5143","\u56F4\u5DFE\u9970\u54C1  8\u5143\u8D77"],photos:[0,6,13,14],paper:"#ded0d7",ink:"#61435e"},barber:{title:"\u9752\u6625\u7406\u53D1",sub:"\u7537\u751F\u5973\u751F \xB7 \u5B66\u751F\u4F18\u60E0",items:["\u5B66\u751F\u526A\u53D1  8\u5143","\u6D17\u526A\u5439  12\u5143","\u5218\u6D77\u4FEE\u526A  3\u5143"],paper:"#cfdcd4",ink:"#365f5a"},cyber:{title:"\u661F\u5149\u7F51\u5427",sub:"\u8425\u4E1A\u65F6\u95F4 08:00\u201423:00",items:["\u4E0A\u7F51  2\u5143/\u5C0F\u65F6","\u5305\u591C  8\u5143","\u51B0\u7EA2\u8336  2\u5143"],paper:"#d2d9d2",ink:"#315363"},bookshop:{title:"\u8BF8\u845B\u4EAE\u8BFB\u4E66\u793E",sub:"\u6F2B\u753B \xB7 \u5C0F\u8BF4 \xB7 \u5B66\u4E60\u8D44\u6599",items:["\u6F2B\u753B\u501F\u9605  1\u5143/\u672C","\u65E7\u4E66\u4EA4\u6362  \u8BF7\u8BE2\u5E97\u4E3B","\u4F5C\u6587\u9009  5\u5143\u8D77"],photos:[0,2,5,10],paper:"#e2d2ae",ink:"#66503a"}};function fb(s,e){let t=cm[s],n=document.createElement("canvas");n.width=Yn?384:512,n.height=Yn?576:768;let i=n.getContext("2d"),r=new kt(n);i.scale(n.width/512,n.height/768),r.colorSpace=Xe,r.anisotropy=8;let o=()=>{i.fillStyle=t.paper,i.fillRect(0,0,512,768);for(let c=0;c<1500;c++)i.fillStyle=c%3?"#594a2a0b":"#fff8e522",i.fillRect(c*131%512,c*71%768,3,2);i.fillStyle=t.ink+"22",i.fillRect(36,163,440,2),i.fillStyle=t.ink,i.textAlign="center",i.font='bold 52px "Songti SC",serif',i.fillText(t.title,256,103),i.font='23px "Songti SC",serif',i.fillText(t.sub,256,148);let l=Zo[Gl[s]];if(l?.complete&&l.naturalWidth)for(let c=0;c<2;c++){let u=t.photos[(e*2+c)%t.photos.length],f=u%4*l.width/4,d=Math.floor(u/4)*l.height/4;i.drawImage(l,f+3,d+3,l.width/4-6,l.height/4-6,51+c*208,181,202,207)}else if(s==="cyber"){i.fillStyle="#394b5e",i.fillRect(54,183,404,210),i.fillStyle="#b9ccce",i.fillRect(84,205,344,155),i.fillStyle="#576786";for(let c=0;c<4;c++)i.fillRect(102+c*80,231,58,71)}else if(s==="barber"){i.fillStyle="#53766d";for(let c=0;c<8;c++)i.fillRect(65+c*50,186,24,207);i.fillStyle="#c1d0be",i.font="bold 42px sans-serif",i.fillText("\u2702  \u9752\u6625\u7406\u53D1",256,312)}else i.fillStyle="#8d7860",i.fillRect(65,190,382,195),i.fillStyle="#efe5c8",i.font="bold 42px serif",i.fillText("\u6F2B \u753B \xB7 \u4E66 \u7C4D",256,310);i.fillStyle=t.ink,i.font='bold 28px "Songti SC",serif',i.textAlign="left",t.items.forEach((c,u)=>{let f=465+u*76;i.fillText(c,58,f),i.fillRect(58,f+16,397,1)}),i.textAlign="center",i.font="18px sans-serif",i.fillText("2005 \xB7 \u6821\u95E8\u53E3",256,710),r.needsUpdate=!0};o();let a=Zo[Gl[s]];return a&&!a.complete&&a.addEventListener("load",o,{once:!0}),r}var Bh=[],am={tv:ni("./textures/fast/fictional-tv-stills-v1.webp"),game:ni("./textures/fast/fictional-cyber-screens-v1.webp")};function db(s,e){let t=document.createElement("canvas");t.width=Yn?384:512,t.height=Yn?576:768;let n=t.getContext("2d"),i=new kt(t);n.scale(t.width/512,t.height/768),i.colorSpace=Xe,i.anisotropy=8;let r=s==="cyber"?am.game:Zo[Gl[s]]||am.tv,a=({tea:["\u4ECA\u65E5\u7279\u996E","\u590F\u65E5\u51B0\u8336"],noodles:["\u70ED\u6C64\u7C73\u7EBF","\u5C0F\u9505\u73B0\u716E"],mianpi:["\u73B0\u62CC\u64C0\u9762\u76AE","\u8FA3\u6912\u9999\u918B"],bakery:["\u6BCF\u65E5\u51FA\u7089","\u653E\u5B66\u70B9\u5FC3"],shop:["\u96F6\u98DF\u4E0A\u65B0","\u51B0\u996E\u6587\u5177"],fashion:["\u6362\u5B63\u65B0\u8863","\u5B66\u751F\u642D\u914D"],barber:["\u5B66\u751F\u526A\u53D1","\u6D17\u526A\u5439"],bookshop:["\u501F\u9605\u65B0\u4E66","\u672C\u5468\u4E66\u67B6"],cyber:["\u7F51\u7EDC\u5BF9\u6218","\u6E38\u620F\u4E4B\u591C"]}[s]||["\u5E97\u5185\u544A\u793A","\u4ECA\u65E5\u4F9B\u5E94"])[e],l=()=>{if(n.fillStyle="#e7ddc9",n.fillRect(0,0,512,768),r.complete&&r.naturalWidth){let c=s==="cyber"||s==="barber"?2:4,u=(e*3+s.length)%(c*c),f=r.width/c,d=r.height/c;n.drawImage(r,u%c*f,Math.floor(u/c)*d,f,d,0,0,512,632)}else n.fillStyle="#8d786a",n.fillRect(0,0,512,632);n.fillStyle="#eadcbb",n.fillRect(0,632,512,136),n.fillStyle="#3b3936",n.textAlign="center",n.font='bold 57px "Songti SC",serif',n.fillText(a,256,691),n.font="23px serif",n.fillText("2005 \xB7 \u653E\u5B66\u4EE5\u540E",256,731),i.needsUpdate=!0};return l(),r.addEventListener("load",l,{once:!0}),Bh.push({canvas:t,texture:i,draw:l}),i}function um(s){let e=[...s].filter(t=>t.type.startsWith("image/")).slice(0,12);return e.forEach((t,n)=>{let i=URL.createObjectURL(t),r=new Image;r.onload=()=>{for(let o=n;o<Bh.length;o+=e.length){let a=Bh[o],l=a.canvas,c=l.getContext("2d");c.fillStyle="#e5dbc8",c.fillRect(0,0,512,768);let u=Math.max(470/r.width,715/r.height),f=470/u,d=715/u;c.drawImage(r,(r.width-f)/2,(r.height-d)/2,f,d,21,21,470,715),a.texture.needsUpdate=!0}URL.revokeObjectURL(i)},r.src=i}),e.length}function hm(s,e){let t=e.kind;if(!cm[t])return;let i=t.split("").reduce((o,a)=>o+a.charCodeAt(0),0),r=[{side:-1,y:1.41+i%3*.09,back:.48,w:.55,h:.77,angle:-.028,type:"prices",variant:0},{side:-1,y:2.39+i%4*.045,back:1.05,w:.43,h:.61,angle:.041,type:"promo",variant:0},{side:1,y:1.65+(i+2)%4*.075,back:.34,w:.5,h:.69,angle:-.047,type:"prices",variant:1},{side:1,y:2.43-(i+1)%3*.07,back:.9,w:.31,h:.43,angle:.055,type:"promo",variant:1}];for(let o of r){let a=new un;a.position.set(o.side*(e.w/2-.105),o.y,e.d/2-o.back),a.rotation.y=o.side<0?Math.PI/2:-Math.PI/2,a.rotation.z=o.angle,s.add(a);let l=new Wt(o.w,o.h,3,3),c=l.attributes.position;for(let d=0;d<c.count;d++)c.setZ(d,.006*Math.abs(c.getX(d))/(o.w/2)+.004*Math.abs(c.getY(d))/(o.h/2));l.computeVertexNormals();let u=o.type==="prices"?fb(t,o.variant):db(t,o.variant),f=new ot(l,new We({map:u,roughness:.96,side:yt,polygonOffset:!0,polygonOffsetFactor:-1}));f.position.z=.022,f.castShadow=!1,a.add(f)}}function fm(s,e){let t=document.createElement("canvas");t.width=1024,t.height=256;let n=t.getContext("2d");n.fillStyle=s.sign,n.fillRect(0,0,1024,256);let i=s.kind,r=s.ink||"#f0d5aa";if(["tea","noodles","mianpi","bakery"].includes(i))n.fillStyle=i==="tea"?"#315b51":i==="noodles"?"#914532":i==="mianpi"?"#5b4d3b":"#864e42",n.fillRect(0,0,168,256),n.fillRect(856,0,168,256),n.fillStyle="#f2e3bc",n.textAlign="center",n.font="bold 92px serif",n.fillText({tea:"\u8336",noodles:"\u7C73",mianpi:"\u9762",bakery:"\u9EA6"}[i],84,155),n.fillText("\u2726",940,155),n.strokeStyle=r,n.lineWidth=6,n.strokeRect(183,18,657,219);else if(i==="cyber"){n.fillStyle="#272943",n.fillRect(0,0,1024,256),n.strokeStyle="#e18bd3",n.lineWidth=11,n.strokeRect(20,21,984,215),n.fillStyle="#e18bd3";for(let a=0;a<6;a++)n.fillRect(38+a*24,45,11,11)}else if(i==="fashion")n.fillStyle="#59435f",n.fillRect(0,0,1024,256),n.strokeStyle="#dec5b1",n.lineWidth=3,n.strokeRect(17,17,990,222),n.font="66px serif",n.fillStyle="#ecc4c6",n.fillText("\u2605",70,158),n.fillText("\u2605",958,158);else if(i==="shop"){n.fillStyle="#476856",n.fillRect(0,0,1024,256),n.fillStyle="#e9d790";for(let a=0;a<13;a++)n.fillRect(a*80,0,42,19)}else i==="barber"?(n.fillStyle="#315d56",n.fillRect(0,0,1024,256),n.fillStyle="#e4e2bf",n.font="bold 80px serif",n.fillText("\u2702",79,158)):i==="bookshop"&&(n.fillStyle="#5c4c36",n.fillRect(0,0,1024,256),n.fillStyle="#e4bd79",n.fillRect(0,0,1024,12),n.fillRect(0,244,1024,12));n.fillStyle=i==="cyber"?"#ffe0f2":r,n.textAlign="center",n.font=`bold ${i==="fashion"?87:i==="cyber"?88:i==="tea"?96:82}px "Songti SC","SimSun",serif`,n.fillText(e,512,137,i==="tea"||i==="mianpi"||i==="noodles"||i==="bakery"?650:850),n.font='27px "Songti SC",serif',n.fillText({tea:"\u73CD\u73E0\u5976\u8336 \xB7 \u51B0\u996E",noodles:"\u5C0F\u9505\u7C73\u7EBF \xB7 \u70ED\u6C64",mianpi:"\u6C49\u4E2D\u98CE\u5473 \xB7 \u73B0\u62CC",bakery:"\u6BCF\u65E5\u73B0\u70E4 \xB7 \u9762\u5305\u70B9\u5FC3",cyber:"INTERNET \xB7 2005",fashion:"\u670D\u9970 \xB7 \u9970\u54C1 \xB7 \u65B0\u6F6E",shop:"\u96F6\u98DF \xB7 \u996E\u6599 \xB7 \u6587\u5177",barber:"\u6D17\u526A\u5439 \xB7 \u5B66\u751F\u4F18\u60E0",bookshop:"\u6F2B\u753B \xB7 \u4E66\u7C4D \xB7 \u9605\u8BFB"}[i],512,215,760);let o=new kt(t);return o.colorSpace=Xe,o.anisotropy=8,o}function dm(s,e){let t=e.kind;if(t==="tea")for(let n=0;n<3;n++){let i=zl(n);i.scale.setScalar(.72),i.position.set(-.25+n*.25,1.035,.82),s.add(i)}if(t==="noodles"||t==="mianpi"){let n=t==="noodles"?[[-1.15,.87,1.1],[1.2,.87,1.1]]:[[-1.45,.77,1.16],[1.05,.77,1.16]];for(let i=0;i<n.length;i++){let r=new un;r.position.set(...n[i]),s.add(r);let o=new ot(ab,ub);o.castShadow=!0,o.receiveShadow=!0,r.add(o);let a=new ot(cb,hb);a.rotation.x=Math.PI/2,a.position.y=.14,r.add(a);let l=new ot(lb,rb[t]);if(l.rotation.x=-Math.PI/2,l.rotation.z=i*.38,l.position.y=.128,r.add(l),t==="noodles"&&i===1){let c=new We({color:"#ac3f1f",roughness:.5,transparent:!0,opacity:.84});for(let u=0;u<5;u++){let f=new ot(new zr(.022+u%2*.008,8,4),c);f.scale.y=.2,f.position.set(Math.sin(u*2.2)*.12,.133,Math.cos(u*2.2)*.11),r.add(f)}}}}}var pm=(s,e,t)=>{let n=Math.max(0,Math.min(1,(t-s)/(e-s)));return n*n*(3-2*n)};function kh(s,e="clear"){let t=1-pm(20,58,s),n=pm(62,94,s),i=1-t-n,r=["cloudy","rain","snow"].includes(e);return{day:t,night:n,dusk:i,overcast:r,sun:(t*3.1+i*1.05)*(r?.2:1),ambient:(t*1.05+i*.34+n*.075)*(r?.82:1),fill:t*.42+i*.19+n*.055,lamps:.12*t+.85*i+1.25*n,windowGlow:.04*t+.55*i+1.1*n,bloom:.12*t+.32*i+.43*n,exposure:1.03,label:t>.5?"\u767D\u5929 \xB7 12:30":n>.5?"\u591C\u665A \xB7 21:10":"\u9EC4\u660F \xB7 18:05"}}function Ko(s,e=1){let t={value:0},n={value:0};return s.onBeforeCompile=i=>{i.uniforms.surfaceSnow=t,i.uniforms.surfaceWet=n,i.vertexShader=`varying vec3 weatherPosition; varying float weatherUp;
`+i.vertexShader,i.vertexShader=i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
weatherPosition=(modelMatrix*vec4(position,1.0)).xyz;weatherUp=normalize(mat3(modelMatrix)*normal).y;`),i.fragmentShader=`varying vec3 weatherPosition; varying float weatherUp;
      uniform float surfaceSnow;uniform float surfaceWet;
      float weatherHash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      float weatherNoise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);return mix(mix(weatherHash(i),weatherHash(i+vec2(1,0)),f.x),mix(weatherHash(i+vec2(0,1)),weatherHash(i+vec2(1,1)),f.x),f.y);}
      `+i.fragmentShader,i.fragmentShader=i.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
      float surfaceUp=smoothstep(.45,.92,weatherUp);
      float drift=weatherNoise(weatherPosition.xz*1.7)*.7+weatherNoise(weatherPosition.xz*8.0)*.3;
      float snowMask=smoothstep(.65-surfaceSnow,.95-surfaceSnow,drift)*surfaceUp*min(1.0,surfaceSnow*3.0);
      diffuseColor.rgb*=1.0-.28*surfaceWet*surfaceUp;
      diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.78,.83,.88),snowMask);`),i.fragmentShader=i.fragmentShader.replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor=mix(roughnessFactor,.24,surfaceWet*surfaceUp*.8);roughnessFactor=mix(roughnessFactor,.96,snowMask);`)},s.customProgramCacheKey=()=>"weather-surface-v1",i=>{t.value=i==="snow"?e:0,n.value=i==="rain"?1:0}}function mm(){let s=window.AudioContext||window.webkitAudioContext,e={music:!0,ambience:!0,effects:!0,musicVolume:.38,ambienceVolume:.48,effectsVolume:.58},t={season:"spring",time:58,weather:"clear",open:!1,store:null,screens:!0},n,i,r,o,a,l,c,u,f,d,p,_,x,g=0,m=0,M=0,v=()=>!!n&&n.state==="running",w=(K,te,me=.3)=>{!K||!n||K.gain.setTargetAtTime(te,n.currentTime,me)},z=K=>440*2**((K-69)/12);function U(K,te){let me=Math.round(n.sampleRate*2),be=n.createBuffer(1,me,n.sampleRate),de=be.getChannelData(0);for(let ke=0;ke<me;ke++)de[ke]=Math.random()*2-1;let ie=n.createBufferSource();ie.buffer=be,ie.loop=!0;let F=n.createBiquadFilter();F.type=K,F.frequency.value=te;let Se=n.createGain();return Se.gain.value=0,ie.connect(F).connect(Se).connect(o),ie.start(),Se}function D(K,te,me,be,de,ie,F=.03,Se=.6){let ke=n.createOscillator(),xe=n.createGain();ke.type=de,ke.frequency.setValueAtTime(K,te),xe.gain.setValueAtTime(0,te),xe.gain.linearRampToValueAtTime(be,te+F),xe.gain.setTargetAtTime(1e-4,te+Math.max(F,me-Se),Math.max(.05,Se/4)),ke.connect(xe).connect(ie),ke.start(te),ke.stop(te+me+.25)}function Q(K){let te=[[57,60,64,67],[53,57,60,64],[48,52,55,59],[55,59,62,64]],me=.8,be=Math.floor(m/4)%te.length,de=m%4,ie=te[be];if(de===0)for(let Se of ie.slice(0,3))D(z(Se-12),K,me*4.35,.036,"sine",c,.35,1.6),D(z(Se),K,me*4.1,.011,"triangle",c,.55,1.7);let F=ie[[0,2,1,3][de]]+12;D(z(F),K+.02,me*1.8,.027,"sine",c,.012,.8),de===2&&D(z(ie[3]+24),K+me*.48,me*.95,.012,"sine",c,.012,.32)}function E(K,te){if(!e.ambience||t.open||t.weather==="rain"||t.weather==="snow")return;let me=n.createOscillator(),be=n.createGain();me.type="sine";let de=te?2200:1600;me.frequency.setValueAtTime(de,K),me.frequency.exponentialRampToValueAtTime(te?2800:2350,K+.13),me.frequency.exponentialRampToValueAtTime(de*.9,K+.27),be.gain.setValueAtTime(0,K),be.gain.linearRampToValueAtTime(te?.014:.022,K+.025),be.gain.exponentialRampToValueAtTime(1e-4,K+.3),me.connect(be).connect(o),me.start(K),me.stop(K+.31)}function P(){if(!v())return;let K=n.currentTime;if(e.music)for(g<K-.5&&(g=K+.08);g<K+.4;)Q(g),g+=.8,m++;else g=K+.08;if(e.ambience&&K>=M){let te=t.time>=78;(t.weather==="clear"||t.weather==="cloudy")&&!t.open&&t.season!=="winter"&&(E(K+.1,te),te&&t.season==="summer"&&E(K+.43,!0)),M=K+(te?3.9:6.2)}}function ne(){if(!n)return;w(r,e.music?e.musicVolume:0),w(o,e.ambience?e.ambienceVolume:0),w(a,e.effects?e.effectsVolume:0);let K=!t.open,te=t.weather==="rain",me=t.weather==="snow",be=t.time>=78;w(f,K&&te?.085:.003,.55),w(d,K?me?.075:t.weather==="cloudy"?.035:.012:.003,.7),w(p,K?be?.012:.024:.004,.7),w(_,K?0:.014,.4),w(x,!K&&t.screens&&["bookshop","cyber"].includes(t.store)?.012:0,.4),c.frequency.setTargetAtTime(be?1050:1850,n.currentTime,.8)}function J(){if(!s||n)return;n=new s,i=n.createGain(),i.gain.value=.62,r=n.createGain(),o=n.createGain(),a=n.createGain(),r.connect(i),o.connect(i),a.connect(i);let K=n.createDynamicsCompressor();K.threshold.value=-12,K.knee.value=12,K.ratio.value=3,i.connect(K).connect(n.destination),l=n.createMediaStreamDestination(),K.connect(l),c=n.createBiquadFilter(),c.type="lowpass",c.frequency.value=1500,c.connect(r),f=U("highpass",450),d=U("lowpass",520),p=U("lowpass",180),_=U("lowpass",100);let te=n.createOscillator();te.type="sine",te.frequency.value=98,x=n.createGain(),x.gain.value=0,te.connect(x).connect(o),te.start(),g=n.currentTime+.12,M=n.currentTime+2,u=setInterval(P,160),ne()}async function Le(){if(!s)return!1;J();try{return await n.resume(),P(),v()}catch{return!1}}async function B(){n&&await n.suspend()}function se(K){Object.assign(e,K),ne()}function pe(K){t={...t,...K},ne()}function $(K="tap"){if(!v()||!e.effects)return;let te=n.currentTime+.008;K==="door"?(D(660,te,.53,.045,"sine",a,.005,.35),D(990,te+.1,.6,.027,"sine",a,.005,.4)):K==="screen"?(D(185,te,.13,.065,"triangle",a,.003,.07),D(840,te+.035,.09,.018,"sine",a,.003,.05)):K==="shutter"?(D(520,te,.09,.035,"square",a,.002,.055),D(270,te+.035,.1,.025,"triangle",a,.002,.06)):D(420,te,.09,.018,"sine",a,.003,.05)}return{available:!!s,start:Le,pause:B,isPlaying:v,setOptions:se,setScene:pe,playEffect:$,getRecordStream:()=>v()?l.stream:null,debugState:()=>({available:!!s,status:n?.state||"not-started",settings:{...e},scene:{...t}})}}var Vl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var On=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},pb=new is(-1,1,1,-1,0,1),zh=class extends Dt{constructor(){super(),this.setAttribute("position",new xt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new xt([0,2,0,0,2,0],2))}},mb=new zh,ms=class{constructor(e){this._mesh=new ot(mb,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,pb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Hl=class extends On{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof en?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=hs.clone(e.uniforms),this.material=new en({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ms(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var jo=class extends On{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},Wl=class extends On{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Xl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new he);this._width=n.width,this._height=n.height,t=new hn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ti}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Hl(Vl),this.copyPass.material.blending=mi,this.clock=new El}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}jo!==void 0&&(o instanceof jo?n=!0:o instanceof Wl&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new he);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var ql=class extends On{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new qe}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}};var gm={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new qe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Jr=class s extends On{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new he(e.x,e.y):new he(256,256),this.clearColor=new qe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new hn(r,o,{type:ti}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){let d=new hn(r,o,{type:ti});d.texture.name="UnrealBloomPass.h"+f,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let p=new hn(r,o,{type:ti});p.texture.name="UnrealBloomPass.v"+f,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}let a=gm;this.highPassUniforms=hs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new en({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new he(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=Vl;this.copyUniforms=hs.clone(u.uniforms),this.blendMaterial=new en({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Tr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new qe,this.oldClearAlpha=1,this.basic=new Zt,this.fsQuad=new ms(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new he(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new en({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new he(.5,.5)},direction:{value:new he(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new en({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Jr.BlurDirectionX=new he(1,0);Jr.BlurDirectionY=new he(0,1);var xm={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Yl=class extends On{constructor(){super();let e=xm;this.uniforms=hs.clone(e.uniforms),this.material=new bl({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ms(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},At.getTransfer(this._outputColorSpace)===Ot&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Vu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Hu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Wu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Go?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Xu&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Zl=class extends Dr{constructor(e=null){super();let t=new bn;t.deleteAttribute("uv");let n=new We({side:xn}),i=new We,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let o=new Fi(16777215,r,28,2);o.position.set(.418,16.199,.3),this.add(o);let a=new ot(t,n);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let l=new ot(t,i);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let c=new ot(t,i);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);let u=new ot(t,i);u.position.set(6.167,.857,7.803),u.rotation.set(0,.561,0),u.scale.set(3.927,6.285,3.687),this.add(u);let f=new ot(t,i);f.position.set(-2.017,.018,6.124),f.rotation.set(0,.333,0),f.scale.set(2.002,4.566,2.064),this.add(f);let d=new ot(t,i);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);let p=new ot(t,i);p.position.set(-2.193,-.369,-5.547),p.rotation.set(0,.516,0),p.scale.set(3.875,3.487,2.986),this.add(p);let _=new ot(t,$r(50));_.position.set(-16.116,14.37,8.208),_.scale.set(.1,2.428,2.739),this.add(_);let x=new ot(t,$r(50));x.position.set(-16.109,18.021,-8.207),x.scale.set(.1,2.425,2.751),this.add(x);let g=new ot(t,$r(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let m=new ot(t,$r(43));m.position.set(-.462,8.89,14.52),m.scale.set(4.38,5.441,.088),this.add(m);let M=new ot(t,$r(20));M.position.set(3.235,11.486,-12.541),M.scale.set(2.5,2,.1),this.add(M);let v=new ot(t,$r(100));v.position.set(0,20,0),v.scale.set(1,.1,1),this.add(v)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function $r(s){let e=new Zt;return e.color.setScalar(s),e}async function gb(){async function s(h){window.sceneBoot?.phase(h),await new Promise(y=>requestAnimationFrame(()=>setTimeout(y,0)))}await s("\u6B63\u5728\u521B\u5EFA\u4E09\u7EF4\u753B\u9762\u2026");let e=document.querySelector("#scene");function t(){let h=Wo(),y=document.querySelector("#textureLoadStatus"),S=document.querySelector("#retryTextures");y&&(y.textContent=h.failed.length?"\u6709 "+h.failed.length+" \u5F20\u7D20\u6750\u52A0\u8F7D\u5931\u8D25":h.pending?"\u5E97\u94FA\u7D20\u6750 "+h.ready+" / "+h.total:"\u5E97\u94FA\u7D20\u6750\u5DF2\u5C31\u7EEA"),S&&(S.hidden=!h.failed.length)}window.addEventListener("scene-textures",t),document.querySelector("#retryTextures")?.addEventListener("click",nh),t();let n=matchMedia("(max-width:680px), (pointer:coarse)").matches;function i(h){if(!n)return;let y=new Set;h.traverse(S=>{for(let b of Array.isArray(S.material)?S.material:[S.material])if(b)for(let T of Object.values(b))T?.isTexture&&!T.isRenderTargetTexture&&!y.has(T)&&(y.add(T),(T.generateMipmaps||T.minFilter!==jt||T.anisotropy>2)&&(T.generateMipmaps=!1,T.minFilter=jt,T.anisotropy=Math.min(2,T.anisotropy),T.needsUpdate=!0))})}let r=new Co({canvas:e,antialias:!0,preserveDrawingBuffer:!0,powerPreference:n?"low-power":"high-performance",failIfMajorPerformanceCaveat:!1});r.setPixelRatio(Math.min(devicePixelRatio,n?1.65:1.75)),r.outputColorSpace=Xe,r.toneMapping=Go,r.shadowMap.enabled=!0,r.shadowMap.type=Gu;let o=new Dr;if(!n){let h=new Zl,y=new Ir(r);o.environment=y.fromScene(h,.035).texture,h.dispose(),y.dispose()}let a=new Qt(39,1,.15,180),l=new Fl(a,e),c=null,u=null;n||(c=new Xl(r),c.addPass(new ql(o,a)),u=new Jr(new he(640,480),.3,.55,1),c.addPass(u),c.addPass(new Yl)),l.enableDamping=!0,l.dampingFactor=.08,l.maxPolarAngle=1.48;let f=new un;o.add(f);let d=new Tl("#b9c4ef","#65516c",1.3);o.add(d);let p=new zs("#ffd5a4",3.2);p.position.set(-15,24,12),p.castShadow=!0,p.shadow.mapSize.set(n?1024:2048,n?1024:2048),Object.assign(p.shadow.camera,{left:-24,right:24,top:24,bottom:-24,near:.5,far:80}),p.shadow.bias=-3e-4,p.shadow.normalBias=.025,o.add(p);let _=new zs("#9fb5ef",.7);_.position.set(14,12,-8),o.add(_);let x={season:"spring",time:58,weather:"clear",palette:"dream",lights:!0,screens:!0,street:!0,store:null,floor:0,open:!1},g=mm(),m=()=>g.setScene({season:x.season,time:x.time,weather:x.weather,open:x.open,store:x.store,screens:x.screens}),M=new Map,v=[],w=[],z=[],U=[],D=[],Q=[],E=[],P=[],ne=20503,J=()=>(ne=ne*1664525+1013904223>>>0,ne/4294967296),Le=new bn(1,1,1),B=new ps(1,1,1,1,.022),se=new vl(1,1),pe=new Map;function $(h,y=.8,S=0){let b=h+y+S;return pe.has(b)||pe.set(b,new We({color:h,roughness:y,metalness:S})),pe.get(b)}let K=$("#30383b",.55,.45),te=$("#735039"),me=$("#b8b09a"),be=$("#b79459",.4,.6);function de(h,y=0,S=0,b=0,T=0){let O=new un;return O.position.set(y,S,b),O.rotation.y=T,h.add(O),O}function ie(h,y,S,b=0,T=0,O=0){let k=new ot(y,S);return k.position.set(b,T,O),k.castShadow=!0,k.receiveShadow=!0,h.add(k),k}function F(h,y,S,b,T,O=0,k=0,Y=0){if(T.userData?.metersPerTile){let _e=new bn(y,S,b),Ue=_e.attributes.position,He=_e.attributes.normal,mt=_e.attributes.uv,tn=T.userData.metersPerTile;for(let Mt=0;Mt<Ue.count;Mt++){let fi=Math.abs(He.getX(Mt)),bs=Math.abs(He.getY(Mt));mt.setXY(Mt,(fi>.5?Ue.getZ(Mt):Ue.getX(Mt))/tn,(bs>.5?Ue.getZ(Mt):Ue.getY(Mt))/tn)}return ie(h,_e,T,O,k,Y)}let le=ie(h,y>.3&&S>.3&&b>.1?B:Le,T,O,k,Y);return le.scale.set(y,S,b),le}function Se(h,y,S,b,T=0,O=0,k=0,Y=y,le=12){return ie(h,new Wn(y,Y,S,le),b,T,O,k)}function ke(h,y,S,b,T,O,k=1,Y=1,le=1){let _e=ie(h,se,S,b,T,O);return _e.scale.set(y*k,y*Y,y*le),_e}function xe(h,y,S,b=.025,T=K){let O=new L(...y),k=new L(...S),Y=k.clone().sub(O),le=Se(h,b,Y.length(),T,...O.clone().add(k).multiplyScalar(.5).toArray(),b,8);return le.quaternion.setFromUnitVectors(new L(0,1,0),Y.normalize()),le}function nt(h,y,S=.012,b=K){return ie(h,new Gr(new ss(y.map(T=>new L(...T))),24,S,5,!1),b)}function et(h,y=512){let S=document.createElement("canvas");S.width=S.height=y,h(S.getContext("2d"),y);let b=new kt(S);return b.colorSpace=Xe,b.anisotropy=8,b}function ze(h,y=1){return h.wrapS=h.wrapT=_n,h.repeat.set(y,y),h}let it=ln(),W={fashion:it.load(zt("./textures/fast/fashion-fascia-original-3to1-v3.webp")),bakery:it.load(zt("./textures/fast/bakery-fascia-3to1-v1.webp")),shop:it.load(zt("./textures/fast/hongxing-shop-fascia-3to1-v1.webp"))};for(let h of Object.values(W))h.colorSpace=Xe,h.anisotropy=8;function Te(h,y){let S=it.load(zt("./textures/fast/pbr/"+h+"_1K-JPG_"+y+".webp"));return y==="Color"&&(S.colorSpace=Xe),S.anisotropy=8,ze(S,1)}let Me={map:Te("Plaster001","Color"),normalMap:Te("Plaster001","NormalGL"),roughnessMap:Te("Plaster001","Roughness")},Ie={map:Te("WoodSiding006","Color"),normalMap:Te("WoodSiding006","NormalGL"),roughnessMap:Te("WoodSiding006","Roughness")},ve={normalMap:Te("Metal030","NormalGL"),roughnessMap:Te("Metal030","Roughness")},je={normalMap:Te("Fabric030","NormalGL"),roughnessMap:Te("Fabric030","Roughness")},Fe=new We({map:Te("Tiles036","Color"),normalMap:Te("Tiles036","NormalGL"),roughnessMap:Te("Tiles036","Roughness"),color:"#e1deca",roughness:.7,normalScale:new he(.4,.4)});Fe.userData.metersPerTile=1.8,Object.assign(te,Ie),te.color.set("#c1a180"),te.userData.metersPerTile=2,Object.assign(K,ve),K.normalScale.set(.2,.2),K.userData.metersPerTile=.8;function C(h){let y=new We({...je,color:h,roughness:1,normalScale:new he(.35,.35)});return y.userData.metersPerTile=.65,y}let A=new Map;function re(h){return A.has(h)||A.set(h,C(h)),A.get(h)}function we(h){let y=et((S,b)=>{S.fillStyle=h,S.fillRect(0,0,b,b);for(let T=0;T<6500;T++){let O=J();S.fillStyle=O>.55?"rgba(255,245,215,.07)":"rgba(30,26,24,.075)",S.fillRect(J()*b,J()*b,1+J()*5,1+J()*8)}for(let T=0;T<35;T++){let O=J()*b,k=J()*b;S.fillStyle="#a49a82",S.beginPath();for(let Y=0;Y<8;Y++){let le=Y/8*Math.PI*2,_e=4+J()*14;S.lineTo(O+Math.cos(le)*_e,k+Math.sin(le)*_e)}S.closePath(),S.fill()}S.strokeStyle="rgba(52,45,37,.16)",S.lineWidth=1;for(let T=0;T<12;T++){let O=J()*b,k=J()*b;S.beginPath(),S.moveTo(O,k);for(let Y=0;Y<6;Y++)O+=J()*12-6,k+=J()*11,S.lineTo(O,k);S.stroke()}},512);return new We({...Me,color:h,roughness:.95,normalScale:new he(.55,.55),bumpMap:y,bumpScale:.018})}let Ae=et((h,y)=>{h.fillStyle="#8b6242",h.fillRect(0,0,y,y);for(let S=0;S<800;S++){h.strokeStyle=S%2?"rgba(39,20,12,.12)":"rgba(255,225,171,.1)";let b=J()*y;h.beginPath(),h.moveTo(0,b),h.bezierCurveTo(y*.3,b+J()*12,y*.6,b-J()*12,y,b),h.stroke()}for(let S=0;S<y;S+=64)h.fillStyle="#46372d",h.fillRect(0,S,y,2)},512),ye=new We({...Ie,color:"#ffebcf",roughness:.88,normalScale:new he(.45,.45)}),Ye=ze(et((h,y)=>{h.fillStyle="#4c4b53",h.fillRect(0,0,y,y);for(let S=0;S<14e3;S++){let b=J();h.fillStyle=b>.5?"rgba(220,210,190,.12)":"rgba(15,18,27,.16)",h.fillRect(J()*y,J()*y,J()*2+1,J()*2+1)}h.strokeStyle="#282932";for(let S=0;S<6;S++){let b=J()*y,T=J()*y;h.beginPath(),h.moveTo(b,T);for(let O=0;O<20;O++)b+=J()*15-6,T+=J()*12,h.lineTo(b,T);h.stroke()}},1024),5),Ne=new We({map:Te("Asphalt010","Color"),normalMap:Te("Asphalt010","NormalGL"),roughnessMap:Te("Asphalt010","Roughness"),roughness:.95,normalScale:new he(.65,.65)});for(let h of[Ne.map,Ne.normalMap,Ne.roughnessMap])h.repeat.set(.25,.25);ye.userData.metersPerTile=2;let Ge=ln().load(zt("./textures/fast/terrazzo_floor.webp"));Ge.colorSpace=Xe,Ge.anisotropy=8;let $e=new We({map:Ge,roughness:.65,bumpMap:Ge,bumpScale:.008});$e.userData.metersPerTile=2,ze(Ge);let Qe=we("#b0a58f");Qe.userData.metersPerTile=2,P.push(Ko(Ne,.42),Ko(Qe,.9));let Re=new We({map:Te("Bricks051","Color"),normalMap:Te("Bricks051","NormalGL"),roughnessMap:Te("Bricks051","Roughness"),roughness:.92,normalScale:new he(.7,.7)});Re.userData.metersPerTile=2;let at=Array.from({length:16},()=>new We({color:"#b9a98b",roughness:.8,side:yt}));ln().load(zt("./textures/fast/rental-books-atlas-v1.webp"),h=>{at.forEach((y,S)=>{let b=h.clone();b.colorSpace=Xe,b.repeat.set(.244,.244),b.offset.set(S%4*.25+.003,(3-Math.floor(S/4))*.25+.003),b.anisotropy=8,b.needsUpdate=!0,y.map=b,y.color.set("#ffffff"),y.needsUpdate=!0})});let V=["#975f50","#536a74","#987c57","#7b586d","#6b806f","#a86458","#59647b","#a28562"],Ee=["\u9752\u6625\u6F2B\u8BB0","\u6821\u56ED\u7269\u8BED","\u5C11\u5E74\u4FA6\u63A2","\u65E7\u57CE\u6765\u4FE1","\u6B66\u4FA0\u6545\u4E8B","\u4EF2\u590F\u65E5\u8BB0","\u6F2B\u753B\u7CBE\u9009","\u661F\u7A7A\u65C5\u4EBA","\u8857\u89D2\u4E66\u5C4B","\u653E\u5B66\u4EE5\u540E","\u5947\u5999\u65C5\u7A0B","\u5E74\u5C11\u65F6\u5149","\u5348\u591C\u7535\u53F0","\u6A58\u8272\u9EC4\u660F","\u6625\u65E5\u4E66\u7B80","\u7EB8\u4E0A\u5192\u9669"],Oe=et((h,y)=>{h.fillStyle="#ddd1b7",h.fillRect(0,0,y,y);for(let S=0;S<y;S+=3)h.fillStyle=S%9?"#f7f0da8b":"#9d8d7059",h.fillRect(0,S,y,1)},256),Ce=new We({map:Oe,roughness:1});function Je(h,y=!1){let S=document.createElement("canvas");S.width=y?128:384,S.height=512;let b=S.getContext("2d"),T=V[h%8];if(b.fillStyle=T,b.fillRect(0,0,S.width,S.height),b.fillStyle="#efdcb1",b.fillRect(9,12,S.width-18,16),b.fillRect(9,480,S.width-18,12),b.fillStyle="#f2e9d9",b.textAlign="center",b.font=y?'bold 33px "Songti SC",serif':'bold 42px "Songti SC",serif',y)[...Ee[h]].slice(0,5).forEach((k,Y)=>b.fillText(k,64,95+Y*67)),b.fillStyle="#c9b48f",b.fillRect(18,442,92,11);else{b.fillText(Ee[h],192,80,350),b.font='21px "Songti SC",serif',b.fillText("\u51FA\u79DF \xB7 \u65E7\u4E66\u4EA4\u6362",192,122),b.fillStyle="#e4d6c6",b.fillRect(34,170,316,222),b.fillStyle="#8f7e65";for(let k=0;k<9;k++)b.fillRect(51,191+k*21,265-k%3*30,4);for(let k=0;k<28;k++)b.fillStyle="#332d29",b.fillRect(240+k*3,425,k%4===0?3:1,36)}let O=new kt(S);return O.colorSpace=Xe,O.anisotropy=8,new We({map:O,roughness:.87})}let lt=Ee.map((h,y)=>Je(y,!0)),ft=Ee.map((h,y)=>Je(y));function G(h,y,S,b,T="#d5b568",O="#4c3022",k=70){let Y=document.createElement("canvas");Y.width=1024,Y.height=256;let le=Y.getContext("2d");le.fillStyle=T,le.fillRect(0,0,1024,256);for(let He=0;He<1400;He++)le.fillStyle=He%2?"#ffffff0c":"#0000000b",le.fillRect(J()*1024,J()*256,J()*5+1,J()*4+1);le.strokeStyle=O+"66",le.lineWidth=5,le.strokeRect(12,12,1e3,232),le.textAlign="center",le.textBaseline="middle",le.fillStyle=O,le.font="bold "+k+'px "Songti SC", "SimSun", serif',le.fillText(y,512,128,970);let _e=new kt(Y);return _e.colorSpace=Xe,ie(h,new Wt(S,b),new We({map:_e,roughness:.75,emissive:"#fff5dc",emissiveMap:_e,emissiveIntensity:0,side:yt}))}function Z(h,y,S,b,T,O=!1){let k=.25+J()*.12,Y=O?.25:.055+J()*.026,le=O?.032:.2,_e=de(h,y,S,b),Ue=O?[lt[T%16],lt[T%16],Ce,Ce,at[T%16],ft[T%16]]:[at[T%16],ft[T%16],Ce,Ce,lt[T%16],lt[T%16]];return F(_e,Y,k,le,Ue,0,k/2,0),_e}let R=null,H=[];function N(h,y){if(!R)return;let S=R.clone();S.colorSpace=Xe,S.repeat.set(1,1/6),S.offset.y=y/6,S.anisotropy=8,S.needsUpdate=!0,h.map=S,h.color.set("#ffffff"),h.needsUpdate=!0}ln().load(zt("./textures/fast/rental-bookcase-face-v1.webp"),h=>{R=h;for(let[y,S]of H)N(y,S)});function X(h,y=2.2,S=!1){let b=de(h);F(b,y,2.35,.12,ye,0,1.2,-.19);for(let T of[-y/2,y/2])F(b,.08,2.45,.44,ye,T,1.22,0);for(let T=0;T<5;T++){let O=.16+T*.46;if(F(b,y,.055,.48,ye,0,O,0),S){let k=new We({color:"#b9a98b",roughness:.9});H.push([k,T]),N(k,T),ie(b,new Wt(y-.13,.37),k,0,O+.24,.105).castShadow=!1}else{let k=-y/2+.1,Y=0;for(;k<y/2-.16;){let le=Y%4===0;Z(b,k,O+.03,.03,(T*5+Y)%16,le),k+=le?.3:.105,Y++}}}return F(b,y+.1,.1,.5,ye,0,2.43,0),b}function ee(h,y,S,b="#ba5139",T=0){let O=de(h,y,T,S);F(O,.38,.08,.36,$(b),0,.46,0);for(let k of[-.13,.13])for(let Y of[-.12,.12])xe(O,[k,.44,Y],[k*1.25,.02,Y*1.25],.035,$(b));return F(O,.32,.04,.04,$(b),0,.2,.15),F(O,.32,.04,.04,$(b),0,.2,-.15),O}function j(h,y,S,b=0){let T=de(h,y,0,S,b);F(T,.47,.09,.45,$("#495d69"),0,.49,0);for(let O of[-.18,.18])for(let k of[-.17,.17])xe(T,[O,.02,k],[O,.49,k],.024,K);return F(T,.45,.48,.075,$("#465a64"),0,.84,.19),xe(T,[-.18,.48,.2],[-.18,1.03,.2],.025),xe(T,[.18,.48,.2],[.18,1.03,.2],.025),T}function oe(h,y,S,b=1.5,T=.7,O=.8){let k=de(h,y,0,S);F(k,b,.075,T,ye,0,O,0);for(let Y of[-b/2+.1,b/2-.1])for(let le of[-T/2+.1,T/2-.1])F(k,.065,O,.065,K,Y,O/2,le);return k}let q=et((h,y)=>{let S=h.createRadialGradient(y/2,y/2,0,y/2,y/2,y/2);S.addColorStop(0,"#fff8de"),S.addColorStop(.15,"#ffcd8999"),S.addColorStop(1,"#ffb54a00"),h.fillStyle=S,h.fillRect(0,0,y,y)},128),ce=et((h,y)=>{h.clearRect(0,0,y,y);let S=h.createLinearGradient(y*.2,0,y*.8,y);S.addColorStop(0,"#7e8981"),S.addColorStop(.48,"#e5e8c9"),S.addColorStop(1,"#717e6c"),h.fillStyle=S,h.beginPath(),h.moveTo(y*.5,y*.05),h.bezierCurveTo(y*.98,y*.31,y*.82,y*.72,y*.5,y*.94),h.bezierCurveTo(y*.18,y*.72,y*.02,y*.31,y*.5,y*.05),h.fill(),h.strokeStyle="#c6d0ae",h.lineWidth=1.4,h.beginPath(),h.moveTo(y*.5,y*.1),h.lineTo(y*.5,y*.95),h.stroke();for(let b=0;b<9;b++)for(let T of[-1,1]){let O=y*(.22+b*.065);h.strokeStyle="#a5b296",h.lineWidth=.7,h.beginPath(),h.moveTo(y*.5,O+y*.09),h.lineTo(y*(.5+T*(.25-Math.abs(b-3)*.02)),O),h.stroke()}},128),Pe=new Wt(.24,.48,2,4);for(let h=0;h<Pe.attributes.position.count;h++){let y=Pe.attributes.position;y.setZ(h,.026*Math.cos(y.getY(h)*8))}Pe.computeVertexNormals();let De=["#658153","#81915c","#4e7050"].map(h=>new We({map:ce,color:h,side:yt,alphaTest:.48,roughness:.92}));function Ze(h,y,S,b,T,O=1){let k=ie(h,Pe,De[T%3],y,S,b);return k.rotation.set(J()*2.8,J()*6.28,J()*6.28),k.scale.setScalar(O),k}function St(h,y,S,b,T="#ffd39b",O=20,k="room"){let Y=de(h,y,S,b);Se(Y,.19,.13,$("#d4c6a2"),0,.08,0,.09);let le=ke(Y,.075,new Zt({color:T}),0,-.02,0);le.userData.dynamic=!0;let _e=new Fi(T,O,10,1.6);_e.position.y=-.12,Y.add(_e);let Ue=new cl(new Po({map:q,color:T,transparent:!0,opacity:.4,depthWrite:!1,blending:Tr}));return Ue.scale.set(.7,.7,1),Y.add(Ue),v.push({light:_e,bulb:le,halo:Ue,power:O,type:k}),Y}function Ut(h,y,S,b,T=.53,O=.39,k=!1){let Y=document.createElement("canvas");Y.width=320,Y.height=240;let le=new kt(Y);le.colorSpace=Xe;let _e=ie(h,new Wt(T,O),new Zt({map:le}),y,S,b);_e.userData.dynamic=!0,_e.userData.screen=!0;let Ue={mesh:_e,canvas:Y,texture:le,page:k?0:U.length%4,tv:k};return U.push(Ue),Ue}function Tt(h,y,S,b,T=!1){let O=de(h,y,S,b),k=$(T?"#51493c":"#c6c2b3",.62),Y=$("#555650",.45);ie(O,new ps(.72,.59,.58,2,.075),k,0,.33,-.11),ie(O,new ps(.64,.47,.06,2,.035),Y,0,.35,.198);let le=Ut(O,-.025,.36,.235,.52,.365,T);le.mesh.material.side=yt,F(O,.27,.11,.25,k,0,.015,-.09);for(let _e=0;_e<3;_e++)for(let Ue=0;Ue<6;Ue++)F(O,.008,.008,.13,$("#68675f"),.361,.38-_e*.08,-.29+Ue*.055);ke(O,.013,new Zt({color:"#92dc74"}),.28,.13,.24);for(let _e=0;_e<2;_e++)Se(O,.027,.021,Y,.23+_e*.07,.12,.235,.027,12).rotation.x=Math.PI/2;if(F(O,.17,.035,.015,Y,-.24,.105,.232),T)for(let _e=0;_e<4;_e++)F(O,.045,.012,.015,K,.29,.43-_e*.05,.242);return O}function Rt(h,y,S){let b=oe(h,y,S,1.7,.75,.78);Tt(b,0,.82,-.13),F(b,.56,.035,.19,$("#afa992"),-.03,.835,.27);for(let T=0;T<4;T++)for(let O=0;O<12;O++)F(b,.032,.012,.028,$("#e2d6b9"),-.28+O*.043,.858,.205+T*.035);ke(b,.055,me,.46,.86,.29,1,.45,1.4),F(b,.24,.5,.42,me,.56,.29,-.08);for(let T=0;T<3;T++)F(b,.17,.015,.008,K,.56,.44-T*.04,.135);return j(h,y,S+.65),b}function vt(h,y,S,b){let T=de(h,y,S,b);Se(T,.16,.045,K,0,.025,0),xe(T,[0,.05,0],[0,.48,0],.025);let O=ie(T,new Kt(.22,.018,6,24),K,0,.5,0);for(let k=0;k<4;k++){let Y=k*Math.PI/2;xe(T,[0,.5,0],[Math.cos(Y)*.2,.5+Math.sin(Y)*.2,0],.009,me)}for(let k=0;k<3;k++){let Y=ke(T,.12,$("#7b9291"),0,.5,0,1,.35,.12);Y.rotation.z=k*2.094}return T}function Nt(h,y,S,b,T=1){let O=de(h,y,S,b);O.scale.setScalar(T),Se(O,.18,.33,$("#986648"),0,.17,0,.12),Se(O,.19,.06,$("#bf9061"),0,.33,0),Se(O,.155,.02,$("#433b2d"),0,.34,0);for(let k=0;k<9;k++){let Y=k*2.4,le=.16+J()*.2,_e=.6+J()*.45;xe(O,[0,.35,0],[Math.cos(Y)*le,_e,Math.sin(Y)*le],.009,$("#455d3b")),Ze(O,Math.cos(Y)*le,_e,Math.sin(Y)*le,k,.9).rotation.set(.2,Y,Y*.2)}return O}function Et(h,y,S,b){let T=de(h,y,S,b);F(T,.9,.58,.35,$("#b1b4ac"),0,0,0);let O=ie(T,new Kt(.19,.015,6,20),K,-.18,0,.19);for(let k=-3;k<=3;k++)xe(T,[-.36,k*.05,.2],[0,k*.05,.2],.009);for(let k=0;k<5;k++)F(T,.22,.02,.01,K,.27,.17-k*.07,.19);return xe(T,[-.3,-.3,0],[-.3,-.45,.2],.035),xe(T,[.3,-.3,0],[.3,-.45,.2],.035),nt(T,[[.47,0,0],[.6,-.2,0],[.6,-1.5,0]],.035,$("#9c977d")),T}function si(h,y,S,b=0){let T=de(h,y,.32,S,b);for(let k of[-.55,.55]){ie(T,new Kt(.31,.028,7,24),K,k,0,0);for(let Y=0;Y<8;Y++){let le=Y*Math.PI/4;xe(T,[k,0,0],[k+Math.cos(le)*.29,Math.sin(le)*.29,0],.006,me)}}let O=$("#697f76",.55,.4);for(let[k,Y]of[[[-.55,0,0],[-.15,.43,0]],[[-.15,.43,0],[.17,0,0]],[[.17,0,0],[-.55,0,0]],[[-.15,.43,0],[.44,.45,0]],[[.44,.45,0],[.17,0,0]],[[.44,.45,0],[.55,0,0]]])xe(T,k,Y,.024,O);return F(T,.27,.045,.15,$("#483e35"),-.17,.48,0),xe(T,[.44,.45,0],[.43,.7,0],.024,O),xe(T,[.43,.7,-.18],[.43,.7,.18],.024,O),T}function Fn(h,y,S,b){if(b){let T=de(h,-1.55,0,-.8);F(T,1.55,.27,2.25,ye,0,.34,0),F(T,1.48,.18,2.12,$("#c9b89e"),0,.56,0);for(let le=0;le<9;le++)F(T,1.45,.045,.15,$(le%2?"#5d757d":"#ab7759"),0,.675,-.7+le*.17);F(T,1.38,.12,.38,$("#d9c9ad"),0,.72,-.8),F(T,1.6,.7,.1,ye,0,.58,-1.16);let O=oe(h,.8,-1,1.4,.8);for(let le=0;le<5;le++)Z(O,-.7+le*.12,.85,-.18,le);vt(O,.55,.85,-.18),j(h,.8,-.1);let k=X(h,1.4);k.position.set(.9,0,1.7),k.scale.y=.48,F(h,.9,1.9,.6,ye,-2.1,.95,1.6),F(h,.04,.12,.03,be,-1.9,1,1.92);let Y=F(h,1.5,.015,1.1,$("#7e4e46"),-.2,.15,.8)}else{for(let le of[-1.5,.65])X(h,1.95,!0).position.set(le,0,-S/2+.34);let T=X(h,2.8,!0);T.position.set(-y/2+.32,0,.1),T.rotation.y=Math.PI/2;let O=oe(h,-1.25,1.15,1.2,.72,.73);for(let le=0;le<2;le++)for(let _e=0;_e<3;_e++){let Ue=Z(O,-.42+_e*.31,.78,-.18+le*.32,_e+le*5,!0);Ue.rotation.x=-.35}let k=oe(h,.95,.75,1.55,.75,.83);Tt(k,.12,.88,-.05,!0);for(let le=0;le<4;le++){let _e=de(k,-.5,.9+le*.045,.12,(le-1.5)*.12),Ue=[10,3,5,14][le];F(_e,.34,.035,.25,[Ce,Ce,at[Ue],ft[Ue],Ce,lt[Ue]],0,0,0)}ee(h,.7,1.8,"#ad4932"),ee(h,-1.8,1.9,"#397a83"),vt(k,.67,.865,-.22).scale.setScalar(.7)}}function ri(h,y,S,b){for(let k of[-1.25,1.25])for(let Y of[-1.65,-.1,1.45])Rt(h,k,Y);G(h,b?"\u5B89\u9759\u4E0A\u7F51 \xB7 \u8BF7\u52FF\u55A7\u54D7":"\u5305\u591C 8 \u5143  \xB7  \u51B0\u7EA2\u8336 2 \u5143",3,.36,"#ded4b3","#5e483b",58).position.set(0,2.65,-S/2+.16);let O=F(h,3.4,.07,.1,new Zt({color:b?"#ffb9ec":"#bfe8ff"}),0,2.9,-1.8);vt(h,2.5,.86,-2.3);for(let k=0;k<3;k++)Se(h,.07,.17,$("#a34a36"),-2.5,.95,-1+k*.4)}function I(h,y,S){let b=F(h,y-.6,.9,.65,$("#96b6a1"),0,.45,-.55);F(h,y-.5,.09,.77,$("#c9b9a1",.4),0,.94,-.55);for(let O=0;O<8;O++)Se(h,.065,.16,$(O%2?"#edddbf":"#d1a876"),-1.3+O*.35,1.07,-.4),Se(h,.075,.025,me,-1.3+O*.35,1.16,-.4);for(let O=0;O<3;O++)Se(h,.15,.6,new We({color:"#e2d6aa",transparent:!0,opacity:.45,roughness:.15}),-.8+O*.6,1.28,-.77),Se(h,.16,.05,be,-.8+O*.6,1.6,-.77);Se(h,.25,.5,$("#aeb4b1",.25,.8),1.35,1.25,-.6),G(h,"\u4E03\u676F\u8336  /  \u73CD\u73E0\u5976\u8336 3\u5143  \xB7  \u67E0\u6AAC\u8336 2\u5143",y-.5,.85,"#e8dfc1","#31594b",55).position.set(0,2.25,-S/2+.16);for(let O of[-1.3,0,1.3])ee(h,O,1.1,O===0?"#bf603b":"#478f89");F(h,.8,1.65,.65,$("#bcb9a7"),y/2-.6,.83,-1.65);for(let O=0;O<4;O++)F(h,.6,.05,.55,me,y/2-.6,.3+O*.35,-1.65);Nt(h,-y/2+.35,0,1.5,.9)}function ae(h,y=!1){let S=document.createElement("canvas");S.width=900,S.height=y?1100:500;let b=S.getContext("2d"),T=h==="tea",O=T?"#eee0b8":"#ead8ad",k=T?"#28564a":"#7e3427",Y=T?"#bd593d":"#b14a32";b.fillStyle=O,b.fillRect(0,0,S.width,S.height);for(let le=0;le<1800;le++)b.fillStyle=le%3?"#543b1a0c":"#fff7dd25",b.fillRect(J()*S.width,J()*S.height,J()*5+1,J()*3+1);if(b.strokeStyle=k,b.lineWidth=12,b.strokeRect(18,18,S.width-36,S.height-36),b.strokeStyle=Y,b.lineWidth=3,b.strokeRect(35,35,S.width-70,S.height-70),b.textAlign="center",b.textBaseline="middle",b.fillStyle=k,b.font='bold 70px "Songti SC","SimSun","Hiragino Sans GB",serif',b.fillText(T?"\u4E03\u676F\u8336":"\u5C0F\u73B2\u7C73\u7EBF",450,y?125:88),b.fillStyle=Y,b.font="bold 27px sans-serif",b.fillText(T?"\u653E\u5B66\u540E\u6765\u4E00\u676F \xB7 \u6E05\u51C9\u53C8\u89E3\u6E34":"\u5C0F\u9505\u73B0\u716E \xB7 \u70ED\u6C64\u9C9C\u9999",450,y?190:142),y?(b.textAlign="center",b.fillStyle=k,b.font='bold 42px "Songti SC","SimSun",serif',b.fillText(T?"\u73CD\u73E0\u5976\u8336":"\u62DB\u724C\u7C73\u7EBF",450,285),b.fillStyle=Y,b.font="bold 34px sans-serif",b.fillText(T?"\u73CD\u73E0 \xB7 \u6930\u679C \xB7 \u7EA2\u8C46":"\u725B\u8089 \xB7 \u9178\u83DC \xB7 \u9EBB\u8FA3",450,345),b.fillStyle=k,b.font="28px sans-serif",b.fillText(T?"\u52A0\u73CD\u73E0 +1\u5143":"\u52A0\u714E\u86CB +1\u5143",450,405)):(b.textAlign="left",b.font='bold 30px "Songti SC","SimSun",serif',(T?[["\u73CD\u73E0\u5976\u8336","3\u5143"],["\u7EA2\u8C46\u5976\u8336","4\u5143"],["\u67E0\u6AAC\u7EFF\u8336","3\u5143"],["\u73CD\u73E0 / \u6930\u679C","\u52A01\u5143"]]:[["\u62DB\u724C\u725B\u8089\u7C73\u7EBF","6\u5143"],["\u9178\u83DC\u8089\u4E1D\u7C73\u7EBF","5\u5143"],["\u9EBB\u8FA3\u7C73\u7EBF","5\u5143"],["\u52A0\u714E\u86CB / \u52A0\u8089","1\u5143\u8D77"]]).forEach((_e,Ue)=>{let He=220+Ue*60;b.fillStyle=k,b.fillText(_e[0],58,He),b.textAlign="right",b.fillStyle=Y,b.fillText(_e[1],565,He),b.textAlign="left",b.strokeStyle="#7c664332",b.lineWidth=2,b.beginPath(),b.moveTo(58,He+28),b.lineTo(565,He+28),b.stroke()})),T)for(let le=0;le<3;le++){let _e=660+le*67,Ue=y?850:430;b.fillStyle=["#c79650","#e7d9b1","#bf6b43"][le],b.beginPath(),b.moveTo(_e-34,Ue-74),b.lineTo(_e+34,Ue-74),b.lineTo(_e+25,Ue),b.lineTo(_e-25,Ue),b.closePath(),b.fill(),b.fillStyle="#593d2d";for(let He=0;He<4;He++)b.beginPath(),b.arc(_e-15+He%2*24,Ue-18-Math.floor(He/2)*20,5,0,Math.PI*2),b.fill();b.strokeStyle=k,b.lineWidth=7,b.beginPath(),b.moveTo(_e,Ue-77),b.lineTo(_e+15,Ue-140),b.stroke()}else{let _e=y?820:390;b.fillStyle=k,b.beginPath(),b.ellipse(675,_e,130,42,0,0,Math.PI),b.lineTo(571,_e-94),b.quadraticCurveTo(675,_e-132,779,_e-94),b.closePath(),b.fill(),b.fillStyle="#d9a754";for(let Ue=0;Ue<8;Ue++)b.beginPath(),b.arc(600+Ue*21,_e-74-Ue%2*20,7,0,Math.PI*2),b.fill();b.strokeStyle="#f3cf83",b.lineWidth=9,b.beginPath(),b.moveTo(625,_e-91),b.bezierCurveTo(595,_e-140,720,_e-65,745,_e-112),b.stroke()}return b.textAlign="center",b.fillStyle=k,b.font="22px sans-serif",b.fillText("2005 \xB7 \u653E\u5B66\u65F6\u6BB5\u4F9B\u5E94",450,S.height-34),new kt(S)}function fe(h,y,S,b,T,O,k,Y=!1,le=0){let _e=de(h,S,b,T,le),Ue=.055;F(_e,O+.09,k+.09,Ue,$(y==="tea"?"#765139":"#765045"),0,0,0),F(_e,O,k,.012,$("#dbc89e"),0,0,Ue*.56);let He=ae(y,Y);He.colorSpace=Xe,He.anisotropy=8;let mt=new We({map:He,roughness:.88,emissive:y==="tea"?"#d7b480":"#cfaa79",emissiveMap:He,emissiveIntensity:.055,side:yt});ie(_e,new Wt(O-.08,k-.08),mt,0,0,Ue*.62);for(let tn of[-O/2-.015,O/2+.015])Se(_e,.018,k+.08,be,tn,0,Ue*.75,.018,8);return _e}function ge(h,y,S,b){fe(h,y,0,2.67,-b/2+.14,2.78,.72,!1);let T=y==="tea";fe(h,y,T?-S/2+.13:S/2-.13,1.88,-.15,.54,.88,!0,T?Math.PI/2:-Math.PI/2)}let ue=new We({map:Te("RoofingTiles001","Color"),normalMap:Te("RoofingTiles001","NormalGL"),roughnessMap:Te("RoofingTiles001","Roughness"),color:"#aeb6b9",roughness:.9,normalScale:new he(.85,.85)});ue.userData.metersPerTile=2,P.push(Ko(ue,.95));let Ve=rm({group:de,box:F,cyl:Se,orb:ke,rod:xe,mesh:ie,mat:$,table:oe,chair:j,stool:ee,crt:Tt,fan:vt,plant:Nt,fixture:St,label:G,wood:te,iron:K,cream:me,timber:ye,roofFinish:ue,metalPBR:ve,ceramic:Fe,fabric:C,bookCovers:at,bookBacks:ft,bookSpines:lt,paperEdge:Ce,bookshelf:X,book:Z});function tt(h,y){let{w:S,d:b,kind:T}=y,O=["tea","noodles","mianpi","bakery"].includes(T),k=O?$("#767d76",.5):te;F(h,S-.2,.14,.045,k,0,.24,-b/2+.12);for(let Y of[-1,1])F(h,.045,.14,b-.2,k,Y*(S/2-.12),.24,0);if(O){F(h,S-.25,1.2,.025,Fe,0,1.45,-b/2+.115);for(let Y of[-1,1])F(h,.025,1.2,b*.55,Fe,Y*(S/2-.115),1.45,-b*.2)}for(let Y of[-1,1]){let le=de(h,Y*(S/2-.13),1.25,-b*.28,-Y*Math.PI/2);F(le,.115,.12,.025,me);for(let _e of[-.025,.025])F(le,.009,.028,.004,K,_e,0,.016);F(le,.008,.018,.004,K,0,.034,.016)}if(T==="barber"){let Y=C("#a3b5b4");for(let le=0;le<3;le++)F(h,.34,.035,.24,Y,-S/2+.47,1.03+le*.04,-b/2+.51)}}function st(h,y,S){y.kind==="bookshop"&&Fn(h,y.w,y.d,S===1),Ve.furnish(h,y,S===1),tt(h,y),S===0&&(hm(h,y),dm(h,y)),St(h,0,2.85,.15,y.kind==="cyber"?"#b2c5e4":"#ffcf91",y.kind==="cyber"?3.5:4.5),(y.kind==="bookshop"||y.kind==="cyber")&&St(h,0,2.85,-1.55,y.kind==="cyber"?"#c7bad7":"#ffe1b6",2.5),S===0&&["tea","noodles","bakery","shop","mianpi"].includes(y.kind)&&St(h,-y.w*.12,2.52,y.d/2-.62,"#ffdda8",2.9)}let ct=et((h,y)=>{h.clearRect(0,0,y,y);for(let S=0;S<1800;S++){let b=J()*y,T=y*(.6+J()*.4),O=1+J()*10;h.fillStyle="rgba(58,54,40,"+(.025+J()*.07)+")",h.beginPath(),h.ellipse(b,T,O,O*.4,0,0,6.28),h.fill()}for(let S=0;S<35;S++){let b=J()*y,T=y*(.08+J()*.4),O=h.createLinearGradient(0,0,0,T);O.addColorStop(0,"#403b2833"),O.addColorStop(1,"#403b2800"),h.fillStyle=O,h.fillRect(b,0,2+J()*5,T)}for(let S=0;S<45;S++){let b=J()*y,T=J()*y;h.strokeStyle="#665b3b30",h.lineWidth=.7,h.beginPath(),h.moveTo(b,T),h.lineTo(b+4,T+8),h.lineTo(b+2,T+12),h.stroke()}},512);function dt(h,y,S,b,T,O,k=0){let Y=new We({map:ct,transparent:!0,opacity:.8,depthWrite:!1,roughness:1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),le=ie(h,new Wt(y,S),Y,b,T,O);return le.rotation.y=k,le.castShadow=!1,le}function ht(h){let y=de(f,h.x,.18,h.z,h.angle);y.userData.id=h.id;let S={...h,root:y,floors:[],outside:de(y)};M.set(h.id,S),D.push(y),F(S.outside,h.w+.6,.2,h.d+.65,Qe,0,0,0);for(let Y=0;Y<3;Y++)F(S.outside,h.w+.5,.085,.3,Qe,0,-.05-Y*.055,h.d/2+.35+Y*.22);let b=we(h.color),T=we(h.base||"#477669");b.userData.metersPerTile=2,T.userData.metersPerTile=2;for(let Y=0;Y<h.levels;Y++){let le=de(y,0,Y*3.3,0),_e=de(le),Ue=de(le),He=de(le),mt=de(le),tn=n?de(le):null;if(S.floors.push({floor:le,shell:_e,front:Ue,inside:He,roof:mt,preview:tn,insideBatched:!1,insideBuilt:!1}),tn&&(tn.name=h.id+"-street-interior-"+Y,Ve.preview(tn,h,Y===1)),Y>0?(F(_e,h.w-1.05,.16,h.d,$e,-.525,.08,0),F(_e,1.05,.16,1.1,$e,h.w/2-.525,.08,h.d/2-.55),F(_e,1.05,.16,.65,$e,h.w/2-.525,.08,-h.d/2+.325)):F(_e,h.w,.16,h.d,$e,0,.08,0),F(_e,h.w,3.15,.18,b,0,1.67,-h.d/2),Y===0){F(_e,h.w,.78,.035,Re,0,.57,-h.d/2-.11);for(let Ke of[-1,1])F(_e,.035,.78,h.d,Re,Ke*(h.w/2+.11),.57,0)}for(let Ke of[-h.w/2,h.w/2])F(_e,.18,3.15,h.d,b,Ke,1.67,0),F(_e,.19,.8,h.d,T,Ke,.57,0);F(_e,h.w,.75,.19,T,0,.54,-h.d/2+.01);for(let Ke of[-h.w/2+.16,h.w/2-.16])F(Ue,.35,3.2,.3,b,Ke,1.67,h.d/2);for(let Ke of[-h.w/2+.16,h.w/2-.16])dt(Ue,.34,2.8,Ke,1.55,h.d/2+.155);for(let Ke of[-1,1])dt(_e,h.d-.15,3,Ke*(h.w/2+.115),1.7,0,Ke*Math.PI/2);F(Ue,h.w,.48,.3,b,0,3.02,h.d/2);let Mt=Y===0&&!!W[h.kind],fi=Mt?h.kind==="bakery"?2.48:2.7:h.w-.35,bs=Mt?fi/3:.5,ha=Mt?3.16:3.02,fc=F(Ue,Mt?fi+.14:h.w-.2,Mt?bs+.1:.62,.17,$(Mt?{fashion:"#4b284d",bakery:"#8b421f",shop:"#9c382b"}[h.kind]:h.sign),0,Mt?3.14:2.99,h.d/2+.21),vi=G(Ue,Y===0?h.name:h.kind==="bookshop"?"\u6F2B\u753B \xB7 \u4E66\u7C4D \xB7 VCD \u79DF\u552E":"\u661F \u5149 \u7F51 \u5427  /  \u4E8C \u697C",fi,bs,h.sign,h.ink||"#f2d19c",h.kind==="tea"?73:87);if(vi.position.set(0,ha,h.d/2+.31),Y===0&&(vi.material.map=W[h.kind]||fm(h,h.name),Mt&&(vi.material.emissiveMap=null,vi.material.emissive.set("#000000")),vi.material.needsUpdate=!0),h.kind==="cyber"){vi.material.emissiveMap=null,vi.material.emissive.set("#000000"),vi.material.emissiveIntensity=0,vi.material.needsUpdate=!0;let Ke=new We({color:"#a9508e",emissive:"#ff83d3",emissiveIntensity:0,roughness:.35});for(let Si of[2.758,3.282])F(Ue,h.w-.38,.018,.023,Ke,0,Si,h.d/2+.34);let gt=new Fi("#e58bdd",0,3.2,2);gt.position.set(0,2.95,h.d/2+.65),Ue.add(gt),E.push({material:Ke,power:1.35,light:gt})}Y===0&&St(Ue,-h.w*.32,2.43,h.d/2+.42,"#ffd8a6",5.5,"shopfront").scale.setScalar(.7);for(let Ke of[-h.w*.34,h.w*.34]){F(Ue,.055,2.5,.065,te,Ke,1.4,h.d/2+.1),F(Ue,h.w*.29,.055,.065,te,Ke,1.45,h.d/2+.1),F(Ue,h.w*.29,.055,.065,te,Ke,2.65,h.d/2+.1);let gt=new We({color:"#b9c7b6",transparent:!0,opacity:.13,roughness:.15,depthWrite:!1});F(Ue,h.w*.28,2.35,.025,gt,Ke,1.4,h.d/2+.08)}if(Y===0&&["bookshop","cyber","fashion"].includes(h.kind)){let Ke=de(Ue,-.48,.18,h.d/2+.16,-1.12);for(let gt of[0,.86])F(Ke,.045,2.32,.055,te,gt,1.16,0);for(let gt of[0,.5,2.32])F(Ke,.9,.055,.055,te,.43,gt,0);F(Ke,.81,.44,.035,b,.43,.25,0),F(Ke,.81,1.75,.014,new We({color:"#96aba5",roughness:.15,transparent:!0,opacity:.16,depthWrite:!1}),.43,1.41,0),xe(Ke,[.74,.97,.045],[.74,1.19,.045],.017,be);for(let gt of[.35,1.9])Se(Ke,.025,.12,K,0,gt,0)}let bi=de(Ue,0,2.58,h.d/2+.57);bi.rotation.x=.14;let pn=h.w-.2;if(h.kind==="cyber")F(bi,pn,.12,.72,$("#29374a",.36,.3),0,0,0),F(bi,pn,.08,.08,$("#d776a9",.35),0,-.08,.37);else if(h.kind==="bookshop"){F(bi,pn,.1,.84,te,0,0,0);for(let Ke=0;Ke<8;Ke++)F(bi,pn/8-.02,.12,.07,ye,-pn/2+(Ke+.5)*pn/8,-.08,.43)}else if(h.kind==="fashion"){F(bi,pn,.055,1.05,re("#66516d"),0,0,0);for(let Ke=0;Ke<10;Ke++)F(bi,pn/10-.015,.21,.025,re(Ke%2?"#66516d":"#9c738e"),-pn/2+(Ke+.5)*pn/10,-.1,.53)}else for(let Ke=0;Ke<18;Ke++){let gt=Ke%2?h.awning:"#d8c69b";F(bi,pn/18,.045,1.12,re(gt),-pn/2+(Ke+.5)*pn/18,0,0),F(bi,pn/18,.18,.04,re(gt),-pn/2+(Ke+.5)*pn/18,-.09,.55)}if(Y===0&&h.kind==="tea"){let Ke=ie(Ue,new rs(.31,32),$("#efe2b5"),h.w/2-.48,1.95,h.d/2+.43);Ke.castShadow=!1,ie(Ue,new Kt(.31,.027,8,32),$("#326457"),h.w/2-.48,1.95,h.d/2+.447),G(Ue,"\u8336",.43,.28,"#efe2b5","#326457",168).position.set(h.w/2-.48,1.96,h.d/2+.456)}if(Y===0&&h.kind==="barber"){let Ke=de(Ue,h.w/2-.4,1.55,h.d/2+.46);Se(Ke,.105,.82,me,0,0,0,.105,20);for(let gt=0;gt<7;gt++){let Si=ie(Ke,new Kt(.107,.017,5,24),$(gt%2?"#376b78":"#b44547"),0,-.34+gt*.113,0);Si.rotation.x=Math.PI/2,Si.rotation.y=gt*.42}for(let gt of[-.44,.44])Se(Ke,.125,.035,K,0,gt,0,.125,20)}Y===0&&h.kind==="bookshop"&&(F(Ue,.64,1.05,.05,te,-h.w/2+.55,1.75,h.d/2+.38),G(Ue,"\u65E7\u4E66\u501F\u9605",.52,.92,"#d8c397","#563e2d",80).position.set(-h.w/2+.55,1.75,h.d/2+.42)),Y===0&&["noodles","mianpi"].includes(h.kind)&&G(Ue,h.kind==="noodles"?"\u70ED\u6C64\u73B0\u716E":"\u73B0\u62CC\u64C0\u9762\u76AE",.66,.95,h.kind==="noodles"?"#e2c38a":"#d8bea1","#713a2d",69).position.set(h.w/2-.55,1.7,h.d/2+.42);for(let Ke of[-h.w*.4,h.w*.4])xe(Ue,[Ke,2.15,h.d/2],[Ke,2.5,h.d/2+1.1],.018,K);let Hm=h.kind==="tea"||h.kind==="noodles"?1:0;for(let Ke=0;Ke<Hm;Ke++){let gt=[1.12,1.93][Ke],Si=-h.w/2+.19+(Ke?-.015:.01),hf=h.d/2+.17;if((h.kind==="tea"||h.kind==="noodles")&&Y===0){let ff=new ot(new Wt(.26,.43),new We({map:ae(h.kind,!0),roughness:.9,side:yt}));ff.position.set(Si,gt,hf),Ue.add(ff)}else poster(Ue,Si,gt,hf,Ke+Y*4+h.name.length,.26,.43)}if(F(mt,h.w+.3,.15,h.d+.3,Qe,0,3.28,0),Y===h.levels-1){let Ke=["shop","barber","fashion","mianpi"].includes(h.kind);if(!Ke){for(let gt of[-h.w/2,h.w/2])F(mt,.13,.28,h.d+.15,b,gt,3.5,0),F(mt,.22,.07,h.d+.26,Qe,gt,3.66,0);for(let gt of[-h.d/2,h.d/2])F(mt,h.w,.28,.13,b,0,3.5,gt),F(mt,h.w+.22,.07,.22,Qe,0,3.66,gt)}if(h.levels>1){Se(mt,.42,.9,$("#919b98",.4,.65),-h.w*.28,3.85,-h.d*.2);for(let gt=0;gt<5;gt++){let Si=ie(mt,new Kt(.425,.018,5,20),K,-h.w*.28,3.5+gt*.17,-h.d*.2);Si.rotation.x=Math.PI/2}xe(mt,[h.w*.25,3.45,-1],[h.w*.25,5,-1],.025),xe(mt,[h.w*.25-.7,4.8,-1],[h.w*.25+.7,4.8,-1],.018);for(let gt=0;gt<5;gt++)xe(mt,[h.w*.25-.6+gt*.3,4.8,-1.3],[h.w*.25-.6+gt*.3,4.8,-.7],.012)}else Ke||(F(mt,.48,.5,.48,$("#8b8376"),-h.w*.3,3.63,-h.d*.25),F(mt,.58,.08,.58,K,-h.w*.3,3.92,-h.d*.25));["shop","barber","fashion","mianpi"].includes(h.kind)||Nt(mt,h.w*.33,3.4,h.d*.3,.85)}n||(st(He,h,Y),S.floors[Y].insideBuilt=!0)}Et(S.outside,h.w/2+.03,2.4,h.d/2-.8).rotation.y=Math.PI/2;let O=de(S.outside,h.w/2+.105,.4,-.3,Math.PI/2);for(let Y=0;Y<4;Y++)for(let le=0;le<5-Y%2;le++)F(O,.23,.095,.025,$(["#9d6b51","#ae7958","#8f6351"][(le+Y)%3]),le*.25+Y%2*.12,Y*.11,0);xe(S.outside,[-h.w/2-.13,.2,h.d/2-.1],[-h.w/2-.13,h.levels*3.3,h.d/2-.1],.05,$("#756d5d"));for(let Y=0;.5+Y*.9<h.levels*3.3;Y++)F(S.outside,.13,.03,.14,K,-h.w/2-.13,.5+Y*.9,h.d/2-.1);Nt(S.outside,-h.w/2-.35,.12,h.d/2+.4,1.2),Nt(S.outside,h.w/2+.25,.12,h.d/2+.5,.85),h.kind==="shop"?si(S.outside,-1.05,h.d/2+1.75,-.12):si(S.outside,h.w*.35,h.d/2+.6,.08);let k=de(S.outside,h.w/2+.16,0,h.d/2-.2);for(let Y=0;Y<(h.levels===1?17:32);Y++){let le=.5+Y*.16,_e=ke(k,.15,$(Y%2?"#57734e":"#7c8751"),Math.sin(Y)*.13,le,Math.cos(Y)*.13,.7,1,.25);w.push(_e)}return Ve.architecture(S),S}let ut=[{id:"bookshop",name:"\u8BF8\u845B\u4EAE\u8BFB\u4E66\u793E",kind:"bookshop",x:5.5,z:-3.2,w:6,d:5.3,levels:2,angle:-.66,color:"#c5ad79",base:"#416d5c",sign:"#244d42",awning:"#9b9c5d"},{id:"cyber",name:"\u2606 \u661F\u5149\u7F51\u5427",kind:"cyber",x:-5.5,z:-2.7,w:6,d:5.4,levels:2,angle:.68,color:"#648082",base:"#376173",sign:"#35476f",ink:"#f4b8eb",awning:"#697b9e"},{id:"tea",name:"\u4E03\u676F\u8336",kind:"tea",x:5.9,z:4.1,w:4.6,d:4.2,levels:1,angle:-.48,color:"#c6c8a5",base:"#68988a",sign:"#e1c993",ink:"#345a49",awning:"#c77341"},{id:"noodles",name:"\u5C0F\u73B2\u7C73\u7EBF",kind:"noodles",x:-6.1,z:5.1,w:4.8,d:4.5,levels:1,angle:.48,color:"#c9aa82",base:"#9b5745",sign:"#d8ad61",ink:"#8e3c2c",awning:"#c99c45"},{id:"bakery",name:"\u9762 \u5305 \u574A",kind:"bakery",x:7.9,z:9.6,w:3.8,d:3.8,levels:1,angle:-.44,color:"#c3a68a",base:"#bd867f",sign:"#e1caa0",ink:"#8b4734",awning:"#b47775"},{id:"shop",name:"\u7EA2\u661F\u5C0F\u5356\u90E8",kind:"shop",x:-8.6,z:-13,w:4.4,d:3.8,levels:1,angle:.18,color:"#b5aa8a",base:"#7b8170",sign:"#a34e3c",awning:"#a75a43"},{id:"barber",name:"\u9752 \u6625 \u7406 \u53D1",kind:"barber",x:7.1,z:15.1,w:4.5,d:4.4,levels:1,angle:-.64,color:"#9cae9c",base:"#437971",sign:"#396f69",awning:"#73948a"},{id:"fashion",name:"\u706B \u661F \u5730 \u5E26",kind:"fashion",x:-6.7,z:10.9,w:4.7,d:4.4,levels:1,angle:.62,color:"#b5b880",base:"#858355",sign:"#75547e",awning:"#9a85a0"},{id:"mianpi",name:"\u6C49\u4E2D\u64C0\u9762\u76AE",kind:"mianpi",x:8.6,z:-13,w:4.7,d:3.9,levels:1,angle:-.18,color:"#c7bc9f",base:"#7c8e79",sign:"#8e4938",awning:"#b69460"}],Xt={bookshop:[8.1,-3.2,-1.4],cyber:[-8.1,-2.5,1.4],tea:[7.8,4.5,-1.48],noodles:[-7.9,5.2,1.45],bakery:[7.5,10.3,-1.42],barber:[7.9,16.2,-1.48],fashion:[-7.8,12,1.45],shop:[-7.9,-12.8,.85],mianpi:[7.9,-12.8,-.85]};for(let h of ut)[h.x,h.z,h.angle]=Xt[h.id];function fn(h,y,S){let b=new Xn;return b.moveTo(-h/2+S,-y/2),b.lineTo(h/2-S,-y/2),b.quadraticCurveTo(h/2,-y/2,h/2,-y/2+S),b.lineTo(h/2,y/2-S),b.quadraticCurveTo(h/2,y/2,h/2-S,y/2),b.lineTo(-h/2+S,y/2),b.quadraticCurveTo(-h/2,y/2,-h/2,y/2-S),b.lineTo(-h/2,-y/2+S),b.quadraticCurveTo(-h/2,-y/2,-h/2+S,-y/2),b}let qt=ie(f,new Di(fn(26,40,2.2),{depth:.7,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:.16,bevelThickness:.12,curveSegments:12}),$("#383645"));qt.rotation.x=-Math.PI/2,qt.position.set(0,-.9,3);let Mn=ie(f,new Fo(fn(25.9,39.9,2.2),20),Ne);Mn.rotation.x=-Math.PI/2,Mn.position.set(0,.02,3);let Pt=F(o,600,.1,600,new Zt({color:"#69617a"}),0,-1.02,0);Pt.castShadow=!1,Pt.receiveShadow=!1;let rt=new ss([[0,0,22.6],[1.1,0,17],[-1,0,10],[.7,0,4],[-.6,0,-1],[.8,0,-6],[0,0,-11.7]].map(h=>new L(...h))),Jo=ze(et((h,y)=>{h.fillStyle="#756e65",h.fillRect(0,0,y,y);for(let S=0;S<8;S++)for(let b=0;b<8;b++){let T=130+Math.floor(J()*32);h.fillStyle="rgb("+T+","+(T-8)+","+(T-22)+")",h.fillRect(b*64+2,S*64+2,60,60);for(let O=0;O<30;O++)h.fillStyle=O%2?"#ffffff09":"#00000012",h.fillRect(b*64+J()*60,S*64+J()*60,J()*4+1,J()*3+1)}},512),.2),Ct=new We({map:Te("PavingStones036","Color"),normalMap:Te("PavingStones036","NormalGL"),roughnessMap:Te("PavingStones036","Roughness"),color:"#e1d8c8",roughness:.92,normalScale:new he(.55,.55)});P.push(Ko(Ct,.76));for(let h of[Ct.map,Ct.normalMap,Ct.roughnessMap])h.repeat.set(.4,.4);for(let h of[-1,1]){let y=[];for(let b=0;b<=80;b++){let T=rt.getPointAt(b/80),O=rt.getTangentAt(b/80),k=new L(O.z,0,-O.x);y.push(new he(T.x+k.x*h*3.12,-(T.z+k.z*h*3.12)))}y.push(new he(-h*12.15,14.9),new he(-h*12.15,-21.5));let S=ie(f,new Fo(new Xn(y)),Ct);S.rotation.x=-Math.PI/2,S.position.y=.1}for(let h of[-1,1])for(let y=0;y<78;y++){let S=rt.getPointAt(y/78),b=rt.getTangentAt(y/78),T=new L(b.z,0,-b.x),O=de(f,S.x+T.x*h*3,.08,S.z+T.z*h*3,Math.atan2(b.x,b.z));F(O,.18,.22,.43,Qe,0,0,0)}let jn=de(f);for(let h of[-1,1]){for(let y=0;y<13;y++){let S=h*(3.25+y*.41);F(jn,.37,.025,1.3,Ct,S,.122,-10.35+Math.sin(y*.72)*.035)}F(jn,5.35,.055,.11,$("#aaa08d"),h*5.9,.13,-11.08),F(jn,5.35,.055,.11,$("#aaa08d"),h*5.9,.13,-9.65)}for(let h=0;h<ut.length;h++)ht(ut[h]),n&&await s("\u6B63\u5728\u521B\u5EFA\u5E97\u94FA "+(h+1)+" / "+ut.length+"\u2026");let oi=[],ki=[],zi=null,Lt=null,ai=new L,Qr="varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",Tn=`uniform sampler2D reflection;uniform vec2 pixel;varying vec2 vUv;
void main(){
  vec3 c=texture2D(reflection,vUv).rgb*.28;
  c+=texture2D(reflection,vUv+vec2(pixel.x*4.5,0.)).rgb*.12;
  c+=texture2D(reflection,vUv-vec2(pixel.x*4.5,0.)).rgb*.12;
  c+=texture2D(reflection,vUv+vec2(0.,pixel.y*4.5)).rgb*.12;
  c+=texture2D(reflection,vUv-vec2(0.,pixel.y*4.5)).rgb*.12;
  c+=texture2D(reflection,vUv+pixel*3.).rgb*.06;
  c+=texture2D(reflection,vUv-pixel*3.).rgb*.06;
  c+=texture2D(reflection,vUv+vec2(pixel.x*3.,-pixel.y*3.)).rgb*.06;
  c+=texture2D(reflection,vUv+vec2(-pixel.x*3.,pixel.y*3.)).rgb*.06;
  c=mix(c,vec3(.43,.51,.49),.24);
  gl_FragColor=vec4(c,1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;function gs(){if(zi)return;let h=M.get("barber").floors[0].inside;h.traverse(y=>{y.name==="barber-reflection-surface"&&oi.push(y)}),oi.length&&(zi=oi[0],Lt=h.getObjectByName("barber-student-reflection")||null,oi.forEach((y,S)=>{let b=new hn(192,224,{minFilter:jt,magFilter:jt}),T=new Qt(72,192/224,.1,20);T.position.set(S===0?-1:.85,1.97,-M.get("barber").d/2+.34),T.rotation.set(-.16,Math.PI,0),M.get("barber").floors[0].inside.add(T),y.material=new en({uniforms:{reflection:{value:b.texture},pixel:{value:new he(1/192,1/224)}},vertexShader:Qr,fragmentShader:Tn,side:yt}),ki.push({target:b,camera:T})}))}gs();let Xs=!1,$o=new Kr;function _m(h){let y=new Map;h.traverse(S=>{if(!S.isMesh||Array.isArray(S.material))return;let b=S.material,T=b.name||"";if(!y.has(b.uuid)){let O=b.clone();/钢|铝|黑铁/.test(T)?(Object.assign(O,ve),O.normalScale.set(.22,.22)):/木/.test(T)?(Object.assign(O,Ie),O.color.set("#c9b08a"),O.userData.metersPerTile=2):/瓷砖/.test(T)&&(O.map=Fe.map,O.normalMap=Fe.normalMap,O.roughnessMap=Fe.roughnessMap,O.normalScale.set(.35,.35),O.userData.metersPerTile=1.8),y.set(b.uuid,O)}if(S.material=y.get(b.uuid),S.material.userData.metersPerTile){S.geometry=S.geometry.clone();let O=S.geometry.attributes.position,k=S.geometry.attributes.normal,Y=S.geometry.attributes.uv,le=S.material.userData.metersPerTile;if(Y)for(let _e=0;_e<O.count;_e++){let Ue=Math.abs(k.getX(_e)),He=Math.abs(k.getY(_e));Y.setXY(_e,(Ue>.5?O.getZ(_e)*S.scale.z:O.getX(_e)*S.scale.x)/le,(He>.5?O.getZ(_e)*S.scale.z:O.getY(_e)*S.scale.y)/le)}}})}function qs(h,y){let S=M.get(h);!S||S.interiorModelRequested||(S.interiorModelRequested=!0,$o.load("./blender_assets/"+y+"?v=48-shop-details",b=>{let T=b.scene;_m(T),T.rotation.y=Math.PI,T.traverse(O=>{O.isMesh&&(O.castShadow=!0,O.receiveShadow=!0)}),S.floors[0].inside.add(T),i(T),li(T),yi(),document.querySelector("#scene").dataset[h+"Model"]="ready"},void 0,b=>{console.error("\u5E97\u94FA\u6A21\u578B\u52A0\u8F7D\u5931\u8D25",h,b),wn(S.name+"\u8BBE\u5907\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u5237\u65B0\u91CD\u8BD5")}))}n||(qs("tea","seven_cups_tea_v2.glb"),qs("noodles","xiaoling_noodles.glb"));function ym(h,y){let S=de(f,h,0,y,h>0?Math.PI:0);Se(S,.075,4.1,K,0,2.05,0,.12),Se(S,.16,.3,K,0,.15,0),nt(S,[[0,3.5,0],[0,4.25,0],[.55,4.25,0],[.65,3.95,0]],.04),St(S,.65,3.94,0,"#ffd18d",16,"street")}for(let h of[[-3.6,9.2],[3.5,7.2],[-3.5,1.5],[3.3,-6.8]])ym(...h);function vm(h,y,S=1.2){let b=de(f,h,.1,y),T=ye.clone();T.color.set("#605344"),T.roughness=1,Se(b,.11,2.5,T,0,1.25,0,.22,14);for(let O=0;O<9;O++){let k=O*2.4,Y=[Math.cos(k)*S*.75,2.9+O%3*.3,Math.sin(k)*S*.75];xe(b,[0,1.3+O*.08,0],Y,.035,T);for(let le=0;le<4;le++){let _e=k+le*.7;xe(b,Y,[Y[0]+Math.cos(_e)*.5,Y[1]+.35+le*.08,Y[2]+Math.sin(_e)*.5],.011,T)}}for(let O=0;O<(n?150:580);O++){let k=J()*6.28,Y=J()*2-1,le=Math.sqrt(1-Y*Y)*Math.sqrt(J())*S,_e=Ze(b,Math.cos(k)*le,3.4+Y*1.15,Math.sin(k)*le,O,.7+J()*.7);_e.userData.deciduous=!0,w.push(_e)}return b}for(let h of[[-11.25,-16,1],[11.25,-16,1],[-11,6,1.2],[11,3,1],[-10,12,1.2]])vm(...h);function Kl(h,y){let S=de(f,h,0,y);Se(S,.09,6.5,$("#797766"),0,3.25,0,.14),F(S,1.6,.1,.12,te,0,5.9,0);for(let b=0;b<4;b++)Se(S,.06,.22,me,-.6+b*.4,6.08,0);for(let b=0;b<3;b++)F(S,.15,.035,.17,K,0,3+b*.5,0);return S}Kl(-10.6,9),Kl(-10,-6),Kl(10.4,-6);for(let h=0;h<3;h++)nt(f,[[-10.6+h*.3,6,9],[-10.4+h*.3,5.4,1],[-10+h*.3,6,-6]],.014),nt(f,[[-10+h*.3,6,-6],[0,5.1,-6.8],[10.4+h*.2,6,-6]],.014);let xs=de(f,0,.12,-12.4),Qo=we("#beb59e");Qo.userData.metersPerTile=2;for(let h of[-2.1,2.1])F(xs,.55,3.2,.65,Qo,h,1.6,0),St(xs,h,3.4,0,"#ffdb9a",9,"street");F(xs,4.8,.65,.65,Qo,0,3.02,0),G(xs,"\u7B2C\u4E00\u4E2D\u5B66",3.3,.55,"#bfb092","#504638",105).position.set(0,3.03,.34);for(let h=0;h<18;h++)xe(xs,[-1.9+h*.22,.1,0],[-1.9+h*.22,2.7,0],.025);for(let h of[.4,1.6,2.5])xe(xs,[-1.9,h,0],[1.9,h,0],.035);for(let h of[-1,1])F(xs,3,1.4,.3,Qo,h*3.9,.7,0);function bm(h,y){let S=new We({color:"#a5b0af",emissive:"#ffd59d",emissiveIntensity:0,roughness:.32});return Q.push({material:S,power:(y+h*3)%4===0?.06:.65+y*7%3*.15}),S}let eo=de(f,0,0,-15.3);F(eo,9,5.7,1.6,we("#9a9993"),0,2.9,-.5);for(let h=0;h<3;h++)for(let y=0;y<8;y++)F(eo,.67,.95,.03,$("#b7a17a"),-3.6+y*1.03,1.1+h*1.7,.32),F(eo,.58,.83,.035,bm(h,y),-3.6+y*1.03,1.1+h*1.7,.35),F(eo,.04,.9,.04,te,-3.6+y*1.03,1.1+h*1.7,.38),F(eo,.62,.04,.04,te,-3.6+y*1.03,1.1+h*1.7,.38);let to=[["\u8BFB\u8005","\u5FC3\u7075\u4E0E\u751F\u6D3B",0,0,"#a66535"],["\u9752\u5E74\u6587\u6458","\u9752\u6625\u9605\u8BFB \xB7 \u7EA2\u7248",0,1,"#ae433b"],["\u6545\u4E8B\u4F1A","\u6C11\u95F4\u6545\u4E8B",0,2,"#af4132"],["\u840C\u82BD","\u9752\u6625\u6587\u5B66",0,3,"#315e64"],["\u79D1\u5E7B\u4E16\u754C","\u5E7B\u60F3\u6587\u5B66",0,4,"#326080"],["\u4ECA\u53E4\u4F20\u5947","\u6B66\u4FA0\u7248",0,5,"#8e4439"],["\u770B\u7535\u5F71","\u5F71\u8FF7\u8BFB\u672C",1,0,"#2c4265"],["\u6F2B\u53CB","\u6F2B\u753B 100",1,1,"#b54e70"],["\u6211\u7231\u6447\u6EDA\u4E50","\u97F3\u4E50\u4E0E\u9752\u5E74",1,2,"#8d2f2f"],["\u9752\u5E74\u89C6\u89C9","VISION",1,3,"#74495a"],["\u5965\u79D8","\u63A2\u7D22\u672A\u77E5",1,4,"#386b5d"],["\u4E2D\u56FD\u65F6\u88C5","Harper\u2019s BAZAAR",1,5,"#7e3d42"],["ELLE","\u4E16\u754C\u65F6\u88C5\u4E4B\u82D1",1,3,"#2d3337"],["\u65F6\u5C1A\u82AD\u838E","Harper\u2019s BAZAAR",1,5,"#843d47"]],Gh=["literature","culture"].map(h=>ni("./textures/fast/newsstand-"+h+"-art-atlas.webp")),Vh=[];function Sm(h){let[y,S,b,T,O]=to[h],k=document.createElement("canvas");k.width=384,k.height=560;let Y=k.getContext("2d"),le=new kt(k);le.colorSpace=Xe,le.anisotropy=8;let _e=()=>{Y.fillStyle="#e8dfcb",Y.fillRect(0,0,384,560);let Ue=Gh[b];if(Ue.complete&&Ue.naturalWidth){let He=Ue.width/3,mt=Ue.height/2,tn=T%3*He,Mt=Math.floor(T/3)*mt;Y.drawImage(Ue,tn+3,Mt+20,He-6,Math.min(mt-34,520),0,0,384,560)}Y.fillStyle=O,Y.fillRect(0,0,384,106),Y.fillStyle="#f5efdb",Y.textAlign="center",Y.textBaseline="middle",Y.font=(y.length>4?"bold 56px":"bold 72px")+' "Songti SC","PingFang SC",serif',Y.fillText(y,192,51,368),Y.font='bold 22px "PingFang SC",sans-serif',Y.fillText(S,192,90,364),Y.fillStyle="rgba(20,22,24,.68)",Y.fillRect(0,516,384,44),Y.textAlign="left",Y.fillStyle="#fff1d3",Y.font="19px sans-serif",Y.fillText(h===11?"2003 \xB7 08":"2005 \xB7 "+String(3+h%5).padStart(2,"0"),14,544),Y.textAlign="right",Y.fillText("\u653E\u5B66\u540E\u7684\u9605\u8BFB",372,544),Y.strokeStyle="rgba(255,248,224,.65)",Y.lineWidth=3,Y.strokeRect(5,5,374,550),le.needsUpdate=!0};return Vh.push(_e),_e(),new We({map:le,roughness:.9,side:yt})}let Mm=to.map((h,y)=>Sm(y));Gh.forEach(h=>h.addEventListener("load",()=>Vh.forEach(y=>y())));function Hh(h,y=!1){let[S,b,,,T]=to[h],O=document.createElement("canvas");O.width=y?128:384,O.height=560;let k=O.getContext("2d");if(k.fillStyle=T,k.fillRect(0,0,O.width,O.height),k.fillStyle="#e7dece",k.fillRect(10,13,O.width-20,O.height-26),k.fillStyle=T,y)k.fillRect(10,13,O.width-20,70),k.save(),k.translate(67,515),k.rotate(-Math.PI/2),k.font='bold 42px "Songti SC",serif',k.textAlign="center",k.fillText(S,245,0,430),k.restore();else{k.textAlign="center",k.font='bold 36px "Songti SC",serif',k.fillText(S,192,74,345),k.font='22px "Songti SC",serif',k.fillText(b,192,111,340),k.textAlign="left";for(let le=0;le<12;le++)k.fillStyle=le%3?"#887f708f":"#b7aa96",k.fillRect(35,160+le*22,306-le%4*31,4);k.fillStyle="#faf4e8",k.fillRect(215,425,128,78);for(let le=0;le<35;le++)k.fillStyle="#2b2927",k.fillRect(226+le*3,433,le%5===0?3:1,48-le%4*3);k.font="18px sans-serif",k.fillStyle=T,k.fillText("2005 \xB7 \u8857\u8FB9\u8BFB\u7269",35,518)}let Y=new kt(O);return Y.colorSpace=Xe,Y.anisotropy=8,new We({map:Y,roughness:.89})}let Tm=to.map((h,y)=>Hh(y)),Wh=to.map((h,y)=>Hh(y,!0));function Xh(h,y,S,b,T,O=.36,k=.5,Y=0){let le=de(h,y,S,b,Y);return F(le,O,k,.025,[Wh[T],Wh[T],Ce,Ce,Mm[T],Tm[T]],0,0,0),le}function wm(h,y,S,b=0){let T=de(h,y,.11,S,b);for(let k=0;k<5;k++)F(T,.62,.008,.43,$(k%2?"#d7d0ba":"#e2dbc8"),0,k*.009,0);let O=G(T,"\u665A \u62A5",.55,.16,"#e1dbc8","#373b3b",100);return O.rotation.x=-Math.PI/2,O.position.set(0,.055,.1),F(T,.012,.055,.47,$("#a38a60"),0,.04,0),T}let Gt=de(f,6.1,.12,21,-.35),Am=$("#718577",.75,.25),Gi=$("#405951",.63,.4),Em=new We({color:"#c7d7cc",metalness:.05,roughness:.16,transparent:!0,opacity:.21,depthWrite:!1});F(Gt,2.5,2.18,1.58,Am,0,1.09,0),F(Gt,2.72,.18,1.8,Gi,0,2.28,-.04);for(let h=0;h<11;h++)F(Gt,2.65,.018,.024,$(h%2?"#8ca091":"#567063"),0,2.39,-.75+h*.15);F(Gt,2.18,1.28,.035,Em,0,1.46,.81);for(let h of[-1.1,0,1.1])F(Gt,.035,1.38,.06,Gi,h,1.45,.84);for(let h of[.81,1.48,2.15])F(Gt,2.25,.035,.06,Gi,0,h,.84);F(Gt,2.58,.12,.78,$("#b9aa87",.55,.25),0,.87,1.03),F(Gt,2.55,.03,.85,Gi,0,.8,1.04),F(Gt,.1,1.55,1.3,Gi,1.29,1.32,0),F(Gt,.1,1.55,1.3,Gi,-1.29,1.32,0),G(Gt,"\u62A5 \u520A \u4EAD",2.25,.34,"#d9d2af","#344d46",124).position.set(0,2.58,.9),G(Gt,"\u62A5\u7EB8 \xB7 \u6742\u5FD7 \xB7 \u753B\u62A5",1.7,.19,"#526b5d","#e4dac0",86).position.set(0,.64,1.29);for(let h=0;h<2;h++){let y=F(Gt,2.22,.035,.14,Gi,0,1.18+h*.58,1.02);for(let S=0;S<5;S++){let b=h*5+S;Xh(Gt,-.84+S*.42,1.42+h*.58,1.11+S%2*.008,b,.34,.48,(S-2)*.017)}}let qh=de(Gt,-1.36,0,.08,-Math.PI/2);for(let h=0;h<5;h++){let y=h<3,S=y?h:h-3,b=y?-.5+S*.5:-.25+S*.5,T=y?1.8:1.15;F(qh,.39,.035,.12,Gi,b,T-.3,.02),Xh(qh,b,T,.095,9+h,.35,.48)}for(let h=0;h<3;h++)wm(Gt,-.72+h*.53,1.08+h*.02,-.05+h*.05);F(Gt,.2,.045,.18,be,.82,.95,.94),St(Gt,0,2.03,.58,"#ffe0ad",5,"street");function xb(h,y,S){let b=de(f,h,.1,y,-.12);F(b,1.8,.8,.85,$(S),0,.67,0),F(b,1.9,.08,.95,$("#aaa598",.35,.5),0,1.1,0),G(b,"\u70ED \u70E4 \u4E32  \xB7  \u51C9 \u9762",1.65,.48,S,"#efdbb4",72).position.set(0,.65,.44);for(let T of[-.65,.65]){let O=ie(b,new Kt(.22,.05,6,16),K,T,.25,.35)}for(let T of[-.8,.8])for(let O of[-.35,.35])xe(b,[T,1.1,O],[T,2.05,O],.026);for(let T=0;T<10;T++)F(b,.2,.055,1.3,$(T%2?S:"#c9b797"),-.9+T*.2,2.1,0);for(let T of[-.48,.28])Se(b,.22,.25,$("#a3a9a5",.3,.8),T,1.27,0),Se(b,.19,.01,$("#7a5131"),T,1.4,0);for(let T=0;T<8;T++)xe(b,[-.65+T*.13,1.17,.25],[-.65+T*.13,1.17,.57],.008,te),ke(b,.04,$("#bd7041"),-.65+T*.13,1.19,.36);return St(b,0,1.96,0,"#ffd491",9),ee(b,1.3,.3),b}let Rm=Ve.stall(f,-5.7,16.4,"soup"),Cm=Ve.stall(f,-8.8,18.5,"fried"),Cn=de(f);for(let h of[-1,1])for(let y=0;y<42;y++){let S=rt.getPointAt(y/42),b=rt.getTangentAt(y/42),T=new L(b.z,0,-b.x),O=de(Cn,S.x+T.x*h*2.82,.04,S.z+T.z*h*2.82,Math.atan2(b.x,b.z));if(F(O,.15,.025,.7,$("#645f57"),0,0,0),y%7===0)for(let k=0;k<7;k++)F(O,.18,.018,.022,K,0,.025,-.26+k*.08)}function jl(h,y,S=0){let b=de(Cn,h,.1,y,S);for(let T=0;T<4;T++)F(b,1.65,.06,.1,ye,0,.48,-.18+T*.12);for(let T=0;T<3;T++)F(b,1.65,.1,.045,ye,0,.75+T*.13,-.25);for(let T of[-.62,.62])xe(b,[T,0,-.2],[T,.98,-.25],.035,K),xe(b,[T,.45,.2],[T,0,.25],.035,K);return b}jl(-4.1,-7.9,.3),jl(4.1,-7.9,-.3),jl(-4,20.2,-.22);for(let[h,y]of[[-4,14.6],[-10,16.5],[3.7,18.6]]){let S=de(Cn,h,.1,y);F(S,.52,.8,.5,$("#526459"),0,.4,0),F(S,.57,.08,.54,K,0,.83,0),F(S,.37,.14,.025,Pm(),0,.66,.26)}function Pm(){return $("#303d38")}for(let h of[-1,1])for(let y=0;y<18;y++){let S=-12+y*1.7;F(Cn,.25,.52,1.65,$(y%3?"#8b7664":"#9a856e"),h*11.8,.35,S),F(Cn,.34,.08,1.69,Qe,h*11.8,.65,S),y%3===0&&Nt(Cn,h*11.2,.12,S,.75)}for(let h of[-4.25,4.25]){for(let y=0;y<6;y++)xe(Cn,[h,.2,16+y*.65],[h,.85,16+y*.65],.028,K);xe(Cn,[h,.85,16],[h,.85,19.25],.035,K)}let _b=F(Cn,5.7,.06,3,Qe,0,.12,-10.5);for(let h=0;h<8;h++)F(Cn,.025,.012,2.9,$("#7b776e"),-2.5+h*.7,.16,-10.5);for(let[h,y]of[[-1,"\u2190 \u5C0F\u5356\u90E8"],[1,"\u64C0\u9762\u76AE \u2192"]]){let S=de(Cn,h*3.34,.15,-10.55);xe(S,[0,0,0],[0,1.55,0],.028,K),G(S,y,1.35,.25,"#667b68","#f4e9c8",80).position.set(h*.2,1.47,.04)}let ea=document.createElement("canvas");ea.width=600,ea.height=400;let Vi=ea.getContext("2d");Vi.fillStyle="#de2910",Vi.fillRect(0,0,600,400);function Yh(h,y,S,b){Vi.beginPath();for(let T=0;T<10;T++){let O=b+T*Math.PI/5,k=T%2?S*.382:S,Y=h+Math.cos(O)*k,le=y+Math.sin(O)*k;T?Vi.lineTo(Y,le):Vi.moveTo(Y,le)}Vi.closePath(),Vi.fill()}Vi.fillStyle="#ffde00",Yh(100,100,60,-Math.PI/2);for(let[h,y]of[[200,40],[240,80],[240,140],[200,180]])Yh(h,y,20,Math.atan2(100-y,100-h));let Jl=new kt(ea);Jl.colorSpace=Xe,Jl.anisotropy=8,F(Cn,4.05,.035,2.5,Qe,0,.065,-13.75);let $l=de(Cn,0,.1,-13.9);xe($l,[0,0,0],[0,4.85,0],.034,Lm());let Ql=ie($l,new Wt(1.08,.72,8,4),new We({map:Jl,roughness:.95,side:yt}),.54,4.35,0),ta=Ql.geometry.attributes.position;for(let h=0;h<ta.count;h++){let y=ta.getX(h),S=ta.getY(h);ta.setZ(h,.018*Math.sin(y*7+S*4)*(y+.54))}Ql.geometry.computeVertexNormals(),Ql.castShadow=!0,Se($l,.28,.13,Qe,0,.07,0);function Lm(){return $("#9ba5a2",.35,.65)}let ec=de(f);for(let h=0;h<16;h++){let y=rt.getPointAt((h+.5)/17),S=ie(ec,new rs(.24+J()*.35,14),new We({color:"#829398",metalness:.35,roughness:.13,transparent:!0,opacity:.48}),y.x+(h%2?2.1:-2.1),.055,y.z);S.rotation.x=-Math.PI/2,S.scale.y=.4}let tc=de(f);for(let h=0;h<150;h++){let y=rt.getPointAt(J());ie(tc,new rs(.035+J()*.025,5),$(["#ad7442","#c39755","#9f5a35"][h%3]),y.x+(h%2?1:-1)*(2.7+J()*.4),.065,y.z).rotation.set(-Math.PI/2,0,J()*6.28)}for(let h of[[-3.6,8],[3,2],[-3,-5]]){let y=de(f,h[0],0,h[1]);Se(y,.1,.8,$("#bfab7b"),0,.4,0);for(let S=0;S<3;S++)Se(y,.105,.12,$("#4b4c43"),0,.17+S*.24,0)}let Zh=de(f,1,.06,9.2);Se(Zh,.46,.025,K,0,0,0,.46,32);for(let h=-3;h<=3;h++)F(Zh,.65,.012,.025,$("#74726a"),0,.022,h*.09);for(let h of[[-3.7,3],[3.2,8]]){let y=de(f,h[0],.08,h[1]);F(y,.45,.03,.8,K);for(let S=0;S<7;S++)F(y,.38,.02,.035,$("#807b6d"),0,.025,-.32+S*.1)}function li(h){h.updateWorldMatrix(!0,!0);let y=h.matrixWorld.clone().invert(),S=new Map,b=[];h.traverse(T=>{if(!T.isMesh||T.isInstancedMesh||T.userData.dynamic||Array.isArray(T.material))return;let O=T.material.uuid;S.has(O)||S.set(O,{material:T.material,geos:[]});let k=T.geometry.index?T.geometry.toNonIndexed():T.geometry.clone();k.applyMatrix4(new pt().multiplyMatrices(y,T.matrixWorld)),S.get(O).geos.push(k),b.push(T)});for(let T of b)T.removeFromParent();for(let T of S.values()){let O=Xp(T.geos,!1);if(O){let k=ie(h,O,T.material);k.userData.batched=!0}for(let k of T.geos)k.dispose()}}await s("\u6B63\u5728\u6574\u7406\u8857\u9053\u4E0E\u6821\u95E8\u2026");let Kh=de(f),jh=[],na=new Map;f.updateMatrixWorld(!0);for(let h of w){let y=h.material.uuid+h.geometry.uuid;na.has(y)||na.set(y,[]),na.get(y).push(h)}for(let h of na.values()){let y=new Nr(h[0].geometry,h[0].material.clone(),h.length);h.forEach((S,b)=>{y.setMatrixAt(b,S.matrixWorld),S.removeFromParent()}),y.userData.deciduous=!!h[0].userData.deciduous,y.castShadow=!0,y.receiveShadow=!0,Kh.add(y),jh.push(y)}for(let h of M.values()){for(let y of h.floors)li(y.shell),li(y.front),n||(li(y.inside),y.insideBatched=!0),li(y.roof),y.preview&&li(y.preview);li(h.outside),n&&await s("\u6B63\u5728\u6574\u7406 "+h.name+"\u2026")}for(let h of f.children)h.isGroup&&!h.userData.id&&h!==Kh&&h!==ec&&h!==tc&&li(h);let Ys=800,dn=new Float32Array(Ys*3);for(let h=0;h<Ys;h++)dn[h*3]=(J()-.5)*28,dn[h*3+1]=J()*15,dn[h*3+2]=(J()-.5)*40+3;let Im=et((h,y)=>{h.clearRect(0,0,y,y);let S=h.createRadialGradient(y/2,y/2,0,y/2,y/2,y*.47);S.addColorStop(0,"#ffffff"),S.addColorStop(.28,"#fffffff0"),S.addColorStop(.65,"#ffffff80"),S.addColorStop(1,"#ffffff00"),h.fillStyle=S,h.fillRect(0,0,y,y)},64),ia=new Dt;ia.setAttribute("position",new Vt(dn,3));let sa=new Float32Array(Ys);for(let h=0;h<Ys;h++)sa[h]=.45+J()*1.1;ia.setAttribute("flakeSize",new Vt(sa,1));let ra=new Bs({map:Im,color:"#f2f4f7",size:.11,sizeAttenuation:!0,transparent:!0,opacity:.9,alphaTest:.035,depthWrite:!1});ra.onBeforeCompile=h=>{h.vertexShader=`attribute float flakeSize;
`+h.vertexShader,h.vertexShader=h.vertexShader.replace("gl_PointSize = size;","gl_PointSize = size * flakeSize;")};let oa=new Br(ia,ra);o.add(oa);let Jh=new Float32Array(Ys*6),nc=new Dt;nc.setAttribute("position",new Vt(Jh,3));let ic=new Fr(nc,new Fs({color:"#b8d0db",transparent:!0,opacity:.35,depthWrite:!1}));o.add(ic);function sc(){ec.visible=x.weather==="rain"&&!x.open,tc.visible=x.season==="autumn"&&!x.open,ic.visible=x.weather==="rain"&&!x.open}let aa=document.createElement("canvas");aa.width=32,aa.height=512;let rc=new kt(aa);rc.colorSpace=Xe,o.background=rc;function yi(){let h=kh(x.time,x.weather),{day:y,dusk:S,night:b}=h;e.dataset.sunIntensity=h.sun.toFixed(3),e.dataset.ambientIntensity=h.ambient.toFixed(3),e.dataset.weather=x.weather;let T=(He,mt,tn)=>new qe(He).multiplyScalar(y).add(new qe(mt).multiplyScalar(S)).add(new qe(tn).multiplyScalar(b)),O=T("#8daac1","#595178","#050b1b"),k=T("#d9e0df","#d9a08b","#162139"),Y={mint:"#6e9f9d",film:"#ba9b7c",violet:"#827aab"}[x.palette];Y&&(O.lerp(new qe(Y).multiplyScalar(1-b*.9),.16),k.lerp(new qe(Y).multiplyScalar(1-b*.87),.14)),h.overcast&&(O.lerp(new qe("#73808b").multiplyScalar(1-b*.96),.58),k.lerp(new qe("#a4adb3").multiplyScalar(1-b*.94),.6));let le=aa.getContext("2d"),_e=le.createLinearGradient(0,0,0,512);_e.addColorStop(0,O.getStyle()),_e.addColorStop(1,k.getStyle()),le.fillStyle=_e,le.fillRect(0,0,32,512),rc.needsUpdate=!0,o.fog=new ll(k,h.overcast?35:55,h.overcast?85:125),Pt.material.color.copy(O).multiplyScalar(.5),d.intensity=h.ambient,d.color.set(b>.5?"#93a9d5":"#b7c8df"),d.groundColor.set(b>.5?"#242c43":"#716b66"),p.intensity=h.sun,p.color.set(y>.5?"#fff0dc":"#ffc89b"),p.position.set(-18,10+y*20,8+y*6),p.castShadow=b<.95,_.intensity=h.fill,_.color.set("#91a9dd"),r.toneMappingExposure=h.exposure,u&&(u.strength=h.bloom);for(let He of v){let mt=He.type==="street"?x.street:x.lights;He.light.intensity=mt?He.power*h.lamps:0,He.bulb.visible=mt,He.halo.visible=mt,He.halo.material.opacity=mt?.04*y+.22*S+.32*b:0}for(let He of Q)He.material.emissiveIntensity=x.lights?h.windowGlow*He.power:0,He.material.color.set(b>.5?"#253043":"#a8b1ab");for(let He of E)He.material.emissiveIntensity=x.lights?He.power*(.08*y+.8*S+1.4*b):0,He.light&&(He.light.intensity=x.lights?3*h.lamps:0);for(let He of P)He(x.weather);let Ue=new Set;o.traverse(He=>{if(He.isMesh)for(let mt of Array.isArray(He.material)?He.material:[He.material])Ue.has(mt)||(Ue.add(mt),mt.isMeshStandardMaterial&&(mt.envMapIntensity=.5*y+.14*S+.035*b))}),oa.visible=x.weather==="snow"&&!x.open,ra.color.set(b>.5?"#8193b5":"#f0f5ff"),ra.opacity=b>.5?.68:.9,sc(),document.querySelector("#timeValue").textContent=h.label,!x.store&&!Pn&&document.querySelector("#sceneName").textContent==="\u653E\u5B66\u540E\u7684\u6821\u95E8\u53E3"&&(document.querySelector("#sceneEyebrow").textContent="2005 \xB7 "+h.label),document.querySelectorAll("#timeCtrl button").forEach(He=>He.classList.toggle("selected",He.dataset.value===(y>.5?"day":b>.5?"night":"dusk"))),document.querySelector("#weatherReadout").textContent={clear:"\u6674\u5929",cloudy:"\u9634\u5929",rain:"\u4E0B\u96E8",snow:"\u4E0B\u96EA"}[x.weather]+" \xB7 "+(y>.5?"\u767D\u5929":b>.5?"\u591C\u665A":"\u9EC4\u660F"),Xs=!1,m()}function $h(){let h={spring:["#587748","#77905b","#8d9b61"],summer:["#3f6547","#547447","#6b814f"],autumn:["#a8733e","#b3904c","#9c5e3c"],winter:["#718077","#89928a","#a0a99e"]}[x.season];jh.forEach((y,S)=>{y.material.color.set(h[S%3]),y.visible=x.season!=="winter"||!y.userData.deciduous}),sc(),document.querySelector("#seasonValue").textContent={spring:"\u6625 \xB7 \u65B0\u82BD",summer:"\u590F \xB7 \u6D53\u836B",autumn:"\u79CB \xB7 \u91D1\u53F6",winter:"\u51AC \xB7 \u679D\u5BD2"}[x.season],m()}let Dm=f.children.filter(h=>!h.userData.id&&h!==qt&&h!==Mn);function la(){qt.visible=Mn.visible=Pt.visible=!x.open;for(let h of Dm)h.visible=!x.open;for(let h of M.values()){let y=h.id===x.store;h.root.visible=!x.open||y,h.outside.visible=!x.open;for(let S=0;S<h.floors.length;S++){let b=h.floors[S];b.floor.visible=!x.open||S===x.floor,b.front.visible=!x.open,b.roof.visible=!x.open,n&&(b.inside.visible=x.open||!!b.streetDetailed,b.preview&&(b.preview.visible=!x.open&&!b.streetDetailed))}}for(let h of oi)h.visible=x.open&&x.store==="barber"&&x.floor===0;Lt&&(Lt.visible=!1,Lt.material.opacity=0),Xs=!1;for(let h of v){let y=!0,S=h.light;for(;S;){if(!S.visible){y=!1;break}S=S.parent}h.light.castShadow=x.open&&y&&h.type==="room",h.light.castShadow&&(h.light.shadow.mapSize.set(512,512),h.light.shadow.bias=-.001,h.light.shadow.normalBias=.025)}oa.visible=x.weather==="snow"&&!x.open,sc(),m()}function ci(h,y){l.enableDamping=!1,a.position.copy(h),l.target.copy(y),l.update(),l.enableDamping=!0}let Pn=!1;function oc(){Xi.clear(),document.querySelector('#viewCtrl [data-value="front"]').textContent="\u5230\u5E97\u95E8\u53E3",l.enabled=!0,a.fov=39,a.updateProjectionMatrix(),document.querySelector("#walkCtrl").hidden=!0,document.querySelector("#lookCtrl").hidden=!0}function Ln(){Pn=!1,x.open=!1,x.store=null,x.floor=0,oc(),l.minDistance=13,l.maxDistance=70,l.maxPolarAngle=1.45,la(),ci(new L(8,34,50),new L(0,2,3)),document.querySelector("#sceneName").textContent="\u653E\u5B66\u540E\u7684\u6821\u95E8\u53E3",document.querySelector("#sceneEyebrow").textContent="2005 \xB7 "+kh(x.time,x.weather).label,document.querySelector("#sceneCaption").textContent="\u62D6\u52A8\u65CB\u8F6C \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u70B9\u51FB\u5E97\u94FA",ac()}function Qh(h){let y=M.get(h);if(!y)return;Pn=!1,x.open=!1,x.store=h,x.floor=0,oc(),l.minDistance=1.7,l.maxDistance=45,l.maxPolarAngle=1.48,la(),a.fov=n?55:44,a.updateProjectionMatrix();let S=new L(0,1.35,y.d/2-.6),b=new L(.3,2.3,y.d/2+7.6);y.root.updateMatrixWorld(!0),y.root.localToWorld(S),y.root.localToWorld(b),ci(b,S),document.querySelector("#sceneName").textContent=y.name.replace("\u2606 ",""),document.querySelector("#sceneEyebrow").textContent="\u5E97\u524D\u8857\u666F \xB7 \u53EF\u6CBF\u4EBA\u884C\u9053\u9760\u8FD1",document.querySelector("#sceneCaption").textContent="\u62D6\u52A8\u770B\u5E97\u95E8 \xB7 \u70B9\u51FB\u300C\u4E00\u5C42\u300D\u8FDB\u5165\u5BA4\u5185",ac()}function Zs(h,y=0){let S=M.get(h);if(!S)return;if(Pn=!1,x.store=h,x.floor=Math.min(y,S.levels-1),n){let k=S.floors[x.floor];k.insideBuilt||(st(k.inside,S,x.floor),k.insideBuilt=!0,i(k.inside),h==="barber"&&x.floor===0&&gs(),yi()),k.insideBatched||(li(k.inside),k.insideBatched=!0)}n&&h==="tea"&&qs(h,"seven_cups_tea_v2.glb"),n&&h==="noodles"&&qs(h,"xiaoling_noodles.glb"),x.open=!0,oc(),l.minDistance=3,l.maxDistance=25,l.maxPolarAngle=1.46,la();let b=x.floor*3.3,T=new L(.7,b+4.6,S.d/2+6.3),O=new L(0,b+1.35,-.2);S.root.updateMatrixWorld(!0),S.root.localToWorld(T),S.root.localToWorld(O),ci(T,O),document.querySelector("#sceneName").textContent=S.name.replace("\u2606 ",""),document.querySelector("#sceneEyebrow").textContent="\u4E34\u8857\u7ACB\u9762\u5C55\u5F00 \xB7 "+(y?"\u4E8C\u5C42":"\u4E00\u5C42"),document.querySelector("#sceneCaption").textContent="\u5899\u9762\u3001\u95E8\u7A97\u3001\u96E8\u68DA\u3001\u5C4B\u9876\u5DF2\u79FB\u5F00 \xB7 \u70B9\u51FB\u5C4F\u5E55\u6362\u53F0",ac(),g.playEffect("door")}function ef(){Ln(),l.minDistance=1.3,l.maxDistance=35,Gt.updateWorldMatrix(!0,!1),ci(Gt.localToWorld(new L(.5,2.5,5)),Gt.localToWorld(new L(0,1.5,.5))),document.querySelector("#sceneName").textContent="\u8857\u53E3\u62A5\u520A\u4EAD",document.querySelector("#sceneEyebrow").textContent="2003\u20132005 \xB7 \u8857\u8FB9\u62A5\u520A",document.querySelector("#sceneCaption").textContent="\u8857\u53E3\u4E70\u4E00\u672C\u6742\u5FD7\uFF0C\u518D\u6162\u6162\u8D70\u5411\u5B66\u6821"}function Um(){Ln(),l.minDistance=1.3,l.maxDistance=35,Gt.updateWorldMatrix(!0,!1),ci(Gt.localToWorld(new L(-5,2.3,1)),Gt.localToWorld(new L(-1.2,1.5,0))),document.querySelector("#sceneName").textContent="\u62A5\u520A\u4EAD\u4FA7\u67B6",document.querySelector("#sceneEyebrow").textContent="2003\u20132005 \xB7 \u6742\u5FD7\u4FA7\u67B6",document.querySelector("#sceneCaption").textContent="\u9752\u5E74\u89C6\u89C9 \xB7 \u5965\u79D8 \xB7 ELLE \xB7 \u4E2D\u56FD\u65F6\u88C5 / \u65F6\u5C1A\u82AD\u838E"}function tf(h,y){Ln(),l.minDistance=1.1,l.maxDistance=25,h.updateWorldMatrix(!0,!1),ci(h.localToWorld(new L(1.25,2.25,3.6)),h.localToWorld(new L(0,1.16,0))),document.querySelector("#sceneName").textContent=y,document.querySelector("#sceneEyebrow").textContent="\u8857\u8FB9\u5C0F\u644A \xB7 \u8FD1\u770B\u98DF\u6750",document.querySelector("#sceneCaption").textContent="\u62D6\u52A8\u65CB\u8F6C \xB7 \u89C2\u5BDF\u6258\u76D8\u4E0E\u72EC\u7ACB\u98DF\u6750\u6A21\u578B"}function ac(){document.querySelector("#openBuilding").checked=x.open,document.querySelector("#floorValue").textContent=x.open?x.floor?"\u4E8C\u5C42\u5BA4\u5185":"\u4E00\u5C42\u5BA4\u5185":"\u8857\u533A\u603B\u89C8",document.querySelector('#viewCtrl [data-value="near"]').textContent=x.store==="fashion"?"\u8FD1\u770B\u978B\u67B6":"\u8FD1\u770B\u7EC6\u8282",document.querySelectorAll("#floorCtrl button").forEach(h=>{h.classList.toggle("selected",h.dataset.value===(x.open?x.floor?"upper":"ground":"outside")),h.disabled=h.dataset.value==="upper"&&x.open&&M.get(x.store).levels<2}),document.querySelectorAll(".scene-tab").forEach(h=>h.classList.toggle("active",h.dataset.scene===(x.store||"block")))}function wn(h){let y=document.querySelector("#toast");y.textContent=h,y.classList.add("show"),clearTimeout(wn.timer),wn.timer=setTimeout(()=>y.classList.remove("show"),2200)}function Ks(h,y){document.querySelectorAll("#"+h+" button").forEach(S=>S.onclick=()=>{document.querySelectorAll("#"+h+" button").forEach(b=>{b.classList.remove("selected","active")}),S.classList.add(h==="paletteCtrl"?"active":"selected"),y(S.dataset.value)})}Ks("viewCtrl",h=>{if(h==="next"){let O=ut.map(k=>k.id);Zs(O[(O.indexOf(x.store)+1)%O.length]);return}if(h==="front"){if(Pn){nf(4);return}x.store?Qh(x.store):(Ln(),l.minDistance=2,ci(new L(0,27,-4),new L(0,0,-12)),document.querySelector("#sceneName").textContent="\u6821\u95E8\u540E\u8857",document.querySelector("#sceneCaption").textContent="\u4E24\u4FA7\u6B65\u9053\u901A\u5F80\u5C0F\u5356\u90E8\u4E0E\u6C49\u4E2D\u64C0\u9762\u76AE");return}if(!x.store){h==="above"?Ln():(Ln(),l.minDistance=1.5,ci(new L(0,2.1,20),new L(0,1.8,-8)));return}let y=M.get(x.store),S=x.floor*3.3;if(x.store==="fashion"&&h==="near"){l.minDistance=.75;let O=new L(1.1,S+1.85,1.63),k=new L(y.w/2-.2,S+1.12,.08);y.root.localToWorld(O),y.root.localToWorld(k),ci(O,k),document.querySelector("#sceneCaption").textContent="\u53F3\u4FA7\u978B\u67B6 \xB7 \u62D6\u52A8\u6216\u6EDA\u8F6E\u7EC6\u770B Blender \u5E06\u5E03\u978B";return}let b=h==="above"?new L(.2,S+9.5,2.2):new L(.7,S+2.7,y.d/2+3.8),T=new L(0,S+1.25,-.35);y.root.localToWorld(b),y.root.localToWorld(T),ci(b,T)});let yb=0,An=0,Hi=0,no=0,Wi=0,Xi=new Set,_s=.9,io=rt.getLength();function Nm(h="gate"){An=Hi=_s;let y=rt.getPointAt(An);y.y=1.8;let S=new L(0,2.2,-12.4);if(h==="shop"||h==="mianpi"){let T=M.get(h);S=T.root.localToWorld(new L(0,1.68,T.d/2+.3))}let b=rt.getTangentAt(An);no=Math.atan2(S.x-y.x,S.z-y.z)-Math.atan2(b.x,b.z),Wi=Math.atan2(S.y-y.y,Math.hypot(S.x-y.x,S.z-y.z)),document.querySelectorAll("#lookCtrl button").forEach(T=>T.classList.toggle("selected",T.dataset.look===h)),lc(0)}function nf(h=0){Pn||(Ln(),Pn=!0,An=Hi=0,no=Wi=0),document.querySelector('#viewCtrl [data-value="front"]').textContent="\u8D70\u5230\u6821\u95E8",l.enabled=!1,a.fov=65,a.updateProjectionMatrix(),h===4&&(Hi=_s),document.querySelector("#walkCtrl").hidden=!1,document.querySelector("#sceneEyebrow").textContent="\u6B65\u884C \xB7 \u62D6\u52A8\u73AF\u987E",document.querySelector("#sceneCaption").textContent=n?"\u5728\u4E0B\u65B9\u70B9\u524D\u8FDB/\u540E\u9000 \xB7 \u62D6\u52A8\u753B\u9762\u770B\u56DB\u5468":"W/S \u6216 \u2191/\u2193 \u884C\u8D70 \xB7 \u62D6\u52A8\u770B\u56DB\u5468 \xB7 \u6309 Esc \u8FD4\u56DE\u9E1F\u77B0",document.querySelectorAll(".scene-tab").forEach(y=>y.classList.toggle("active",y.dataset.scene==="street")),matchMedia("(max-width:680px)").matches&&document.querySelector(".panel").scrollTo({top:0,behavior:"smooth"}),lc(0)}function lc(h){if(!Pn)return;let y=(Xi.has("w")||Xi.has("ArrowUp")?1:0)-(Xi.has("s")||Xi.has("ArrowDown")?1:0);y&&(Hi=us.clamp(An+y*2.2*h/io,0,_s));let S=Hi-An;Math.abs(S)>1e-4&&An>_s-.03&&(Wi=.06),An+=Math.sign(S)*Math.min(Math.abs(S),2.2*h/io);let b=rt.getPointAt(An),T=rt.getTangentAt(An),O=Math.atan2(T.x,T.z)+no;a.position.set(b.x,1.8,b.z);let k=new L(b.x+Math.sin(O)*Math.cos(Wi),1.8+Math.sin(Wi),b.z+Math.cos(O)*Math.cos(Wi));a.lookAt(k),l.target.copy(k);let Y=An>_s-.006,le=Y?78:65;a.fov!==le&&(a.fov=le,a.updateProjectionMatrix()),document.querySelector("#sceneName").textContent=Y?"\u6821\u95E8\u524D":"\u6CBF\u8857\u6D4F\u89C8",document.querySelector("#walkStep").textContent=Y?"\u5DF2\u5230\u6821\u95E8\u524D":"\u8DDD\u6821\u95E8 "+Math.round((_s-An)*io)+" \u7C73",document.querySelector("#walkBack").disabled=An<=0,document.querySelector("#walkForward").disabled=Y,document.querySelector("#lookCtrl").hidden=!Y}document.querySelector("#walkBack").onclick=()=>{Hi=Math.max(0,An-4/io)},document.querySelector("#walkForward").onclick=()=>{Hi=Math.min(_s,Hi+4/io)},window.addEventListener("keydown",h=>{Pn&&["w","s","ArrowUp","ArrowDown"].includes(h.key)&&!["INPUT","TEXTAREA"].includes(h.target.tagName)&&(h.preventDefault(),Xi.add(h.key))}),window.addEventListener("keyup",h=>Xi.delete(h.key)),window.addEventListener("blur",()=>Xi.clear());let ys=null;e.addEventListener("pointerdown",h=>{Pn&&(ys=[h.clientX,h.clientY,no,Wi])}),e.addEventListener("pointermove",h=>{Pn&&ys&&h.buttons&&(no=ys[2]-(h.clientX-ys[0])*.004,Wi=us.clamp(ys[3]-(h.clientY-ys[1])*.004,-.85,.85))}),window.addEventListener("pointerup",()=>ys=null),document.querySelectorAll("#lookCtrl button").forEach(h=>h.onclick=()=>h.dataset.look==="newsstand"?ef():Nm(h.dataset.look)),document.querySelector("#newsstandBtn").onclick=ef,document.querySelector("#newsstandSideBtn").onclick=Um,document.querySelector("#soupStallBtn").onclick=()=>tf(Rm,"\u9EBB\u8FA3\u70EB\u644A"),document.querySelector("#friedStallBtn").onclick=()=>tf(Cm,"\u70B8\u4E32\u644A"),document.querySelectorAll(".scene-tab").forEach(h=>h.onclick=()=>{h.dataset.scene==="block"?Ln():h.dataset.scene==="street"?nf(0):Pn?Qh(h.dataset.scene):Zs(h.dataset.scene)}),Ks("seasonCtrl",h=>{x.season=h,$h()}),Ks("weatherCtrl",h=>{x.weather=h,document.querySelector("#weatherValue").textContent={clear:"\u6674\u5929",cloudy:"\u9634\u5929",rain:"\u4E0B\u96E8",snow:"\u4E0B\u96EA"}[h],yi()}),Ks("timeCtrl",h=>{x.time={day:15,dusk:58,night:95}[h],document.querySelector("#timeSlider").value=x.time,yi()}),Ks("floorCtrl",h=>{h==="outside"?Ln():x.store?Zs(x.store,h==="upper"?1:0):Zs("bookshop",h==="upper"?1:0)}),Ks("paletteCtrl",h=>{x.palette=h,document.querySelector("#app").dataset.palette=h,document.querySelector("#paletteValue").textContent={dream:"\u68A6\u6838\u9EC4\u660F",mint:"\u8584\u8377\u84DD\u8C03",film:"\u80F6\u7247\u6696\u9EC4",violet:"\u51AC\u591C\u7D2B"}[h],yi()}),document.querySelector("#timeSlider").oninput=h=>{x.time=+h.target.value,yi()},document.querySelector("#openBuilding").onchange=h=>h.target.checked?Zs(x.store||"bookshop",x.floor):Ln();for(let[h,y]of[["lightsToggle","lights"],["screensToggle","screens"],["streetToggle","street"]])document.querySelector("#"+h).onchange=S=>{if(x[y]=S.target.checked,y==="screens")for(let b of hi.tv)b.tagName==="VIDEO"&&(x.screens?b.play().catch(()=>{}):b.pause());yi(),vs(performance.now())};document.querySelector("#resetBtn").onclick=()=>{Object.assign(x,{season:"spring",time:58,weather:"clear",palette:"dream",lights:!0,screens:!0,street:!0});for(let h of["lightsToggle","screensToggle","streetToggle"])document.querySelector("#"+h).checked=!0;document.querySelector('#seasonCtrl button[data-value="spring"]').click(),document.querySelector('#weatherCtrl button[data-value="clear"]').click(),document.querySelector('#timeCtrl button[data-value="dusk"]').click(),document.querySelector('#paletteCtrl button[data-value="dream"]').click(),Ln()};let ca=document.querySelector("#audioStartBtn"),cc=document.querySelector("#audioStatus");function Om(){let h=g.isPlaying();ca.textContent=h?"\u266B \u6682\u505C\u58F0\u97F3":"\u266A \u5F00\u542F\u58F0\u97F3",ca.classList.toggle("playing",h),cc.textContent=h?"\u6B63\u5728\u64AD\u653E":"\u70B9\u51FB\u5F00\u542F\u58F0\u97F3"}g.available||(ca.disabled=!0,cc.textContent="\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u58F0\u97F3"),ca.onclick=async()=>{if(g.isPlaying())await g.pause();else if(!await g.start()){cc.textContent="\u65E0\u6CD5\u64AD\u653E\uFF0C\u8BF7\u68C0\u67E5\u6D4F\u89C8\u5668\u58F0\u97F3\u6743\u9650";return}Om()};for(let[h,y,S]of[["musicToggle","musicVolume","music"],["ambienceToggle","ambienceVolume","ambience"],["effectsToggle","effectsVolume","effects"]])document.querySelector("#"+h).onchange=b=>g.setOptions({[S]:b.target.checked}),document.querySelector("#"+y).oninput=b=>g.setOptions({[S+"Volume"]:+b.target.value/100});document.querySelectorAll("#seasonCtrl button,#weatherCtrl button,#timeCtrl button,#viewCtrl button,.scene-tab").forEach(h=>h.addEventListener("click",()=>g.playEffect("tap")));let sf=(h,y)=>{let S=URL.createObjectURL(h),b=document.createElement("a");b.href=S,b.download=y,b.click(),setTimeout(()=>URL.revokeObjectURL(S),1e4)};document.querySelector("#shotBtn").onclick=()=>{g.playEffect("shutter"),r.render(o,a),e.toBlob(h=>sf(h,"\u653E\u5B66\u4EE5\u540E_\u6A21\u578B\u622A\u56FE.webp")),wn("\u573A\u666F\u622A\u56FE\u5DF2\u5BFC\u51FA")};let ui=null,so=null,ro=null;document.querySelector("#recordBtn").onclick=()=>{if(ui&&ui.state==="recording"){ui.stop();return}if(!e.captureStream||!window.MediaRecorder){wn("\u6B64\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u5F55\u5C4F");return}ro=e.captureStream(30);let h=g.getRecordStream();so=new MediaStream([...ro.getVideoTracks(),...h?h.getAudioTracks():[]]);let b=(!!h?["video/webm;codecs=vp9,opus","video/webm;codecs=vp8,opus","video/webm","video/mp4"]:["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"]).find(k=>MediaRecorder.isTypeSupported(k));try{ui=new MediaRecorder(so,b?{mimeType:b}:{})}catch{so=ro;let k=["video/webm;codecs=vp8","video/webm","video/mp4"].find(Y=>MediaRecorder.isTypeSupported(Y));try{ui=new MediaRecorder(so,k?{mimeType:k}:{})}catch{ro.getTracks().forEach(Y=>Y.stop()),wn("\u6B64\u6D4F\u89C8\u5668\u65E0\u6CD5\u542F\u52A8\u5F55\u5C4F");return}}let T=so.getAudioTracks().length>0,O=[];ui.ondataavailable=k=>{k.data.size&&O.push(k.data)},ui.onstop=()=>{sf(new Blob(O,{type:ui.mimeType}),"\u653E\u5B66\u4EE5\u540E_\u573A\u666F\u5F55\u5C4F."+(ui.mimeType.includes("mp4")?"mp4":"webm")),ro.getTracks().forEach(k=>k.stop()),document.querySelector("#recordLabel").textContent="\u5F55\u5C4F",document.querySelector("#recordBtn").classList.remove("recording"),wn("\u5F55\u5C4F\u5DF2\u5BFC\u51FA"+(T?"\uFF08\u542B\u573A\u666F\u58F0\u97F3\uFF09":""))},ui.start(),g.playEffect("tap"),document.querySelector("#recordLabel").textContent="\u505C\u6B62",document.querySelector("#recordBtn").classList.add("recording")};for(let h of["closeHelp","gotIt"])document.querySelector("#"+h).onclick=()=>document.querySelector("#helpModal").classList.add("hidden");document.querySelector("#helpBtn").onclick=()=>document.querySelector("#helpModal").classList.remove("hidden");let Fm=ni("./textures/fast/fictional-cyber-screens-v1.webp"),Bm=ni("./textures/fast/fictional-tv-stills-v1.webp"),hi={tv:[],game:[]},js={tv:[],game:[]},rf={mp4:"video/mp4",m4v:"video/mp4",mov:"video/quicktime",webm:"video/webm",ogv:"video/ogg"},km=/\.(avif|bmp|gif|jpe?g|png|webp)$/i;function zm(h){let y=(h.name.split(".").pop()||"").toLowerCase();return h.type.startsWith("video/")?{kind:"video",mime:h.type}:rf[y]?{kind:"video",mime:rf[y]}:h.type.startsWith("image/")||km.test(h.name)?{kind:"image",mime:h.type}:null}for(let[h,y,S,b]of[["tv","importTvVideoBtn","tvVideoFiles","video"],["tv","importTvImageBtn","tvImageFiles","image"],["game","importGameBtn","gameFiles","image"]])document.querySelector("#"+y).onclick=()=>document.querySelector("#"+S).click(),document.querySelector("#"+S).onchange=T=>{let O=[],k=[];hi[h].forEach((He,mt)=>{let tn=He.tagName==="VIDEO"?"video":"image";h==="tv"&&tn!==b?(O.push(He),k.push(js[h][mt])):(He.tagName==="VIDEO"&&He.pause(),URL.revokeObjectURL(js[h][mt]))}),hi[h]=O,js[h]=k;let Y=[...T.target.files],le=[];if(!Y.length){T.target.value="";return}let _e=0,Ue=0;for(let He of Y.slice(0,8)){if(h==="tv"&&He.size>10*1024*1024){le.push(He.name+" \u8D85\u8FC7 10 MB");continue}let mt=zm(He),tn=h==="tv"&&mt?.kind==="video";if(!mt||mt.kind!==b){le.push(He.name+" \u683C\u5F0F\u4E0D\u652F\u6301");continue}let Mt=tn?document.createElement("video"):new Image,fi=URL.createObjectURL(He);js[h].push(fi),hi[h].push(Mt),_e++;let bs=()=>{Ue++,vs(performance.now()),Ue===_e&&wn(h==="tv"?"\u7535\u89C6\u7D20\u6750\u5DF2\u663E\u793A\uFF0C\u53EF\u4EE5\u70B9\u51FB\u5C4F\u5E55\u5207\u6362":"\u7F51\u5427\u5C4F\u5E55\u56FE\u7247\u5DF2\u663E\u793A")};tn?(Mt.muted=!0,Mt.loop=!0,Mt.playsInline=!0,Mt.preload="auto",Mt.setAttribute("playsinline",""),Mt.addEventListener("loadeddata",()=>{bs(),x.screens&&Mt.play().catch(()=>wn("\u89C6\u9891\u5DF2\u663E\u793A\uFF1B\u82E5\u672A\u64AD\u653E\uFF0C\u8BF7\u70B9\u4E00\u4E0B\u7535\u89C6\u5C4F\u5E55"))},{once:!0}),Mt.addEventListener("playing",()=>vs(performance.now())),Mt.addEventListener("error",()=>{let ha=hi[h].indexOf(Mt);ha>=0&&hi[h].splice(ha,1);let fc=js[h].indexOf(fi);fc>=0&&js[h].splice(fc,1),URL.revokeObjectURL(fi),vs(performance.now()),wn(He.name+" \u65E0\u6CD5\u89E3\u7801\uFF1B\u8BF7\u7528 MP4\uFF08H.264\uFF09\u6216 WebM \u91CD\u8BD5")},{once:!0})):(Mt.dataset.animated=String(mt.mime==="image/gif"||He.name.toLowerCase().endsWith(".gif")),Mt.onload=bs,Mt.onerror=()=>wn(He.name+" \u56FE\u7247\u52A0\u8F7D\u5931\u8D25")),Mt.src=fi,tn&&Mt.load()}Y.length>8&&le.push("\u4E00\u6B21\u6700\u591A\u5BFC\u5165 8 \u4E2A\u6587\u4EF6"),T.target.value="",vs(performance.now()),wn((Ue<_e?"\u6B63\u5728\u8BFB\u53D6\u7D20\u6750\u2026 ":"\u5DF2\u9009\u62E9 ")+hi[h].length+" \u4E2A"+(h==="tv"?"\u7535\u89C6":"\u6E38\u620F")+"\u7D20\u6750"+(le.length?"\uFF1B"+le[0]:""))};document.querySelector("#importPosterBtn").onclick=()=>document.querySelector("#posterFiles").click(),document.querySelector("#posterFiles").onchange=h=>wn("\u5DF2\u5728\u672C\u673A\u66FF\u6362 "+um(h.target.files)+" \u5F20\u6388\u6743\u6D77\u62A5\u56FE\u7247");function vs(h){for(let y of U){let S=y.canvas.getContext("2d");if(S.fillStyle="#020709",S.fillRect(0,0,320,240),x.screens){let b=hi[y.tv?"tv":"game"],T=b.length?b[y.page%b.length]:y.tv?Bm:Fm,O=T.tagName==="VIDEO";if(O?T.readyState>=2:T.complete&&T.naturalWidth)if(b.length)S.drawImage(T,0,0,O?T.videoWidth:T.width,O?T.videoHeight:T.height,0,0,320,240);else{let Y=y.page%4,le=Y%2*T.width/2,_e=Math.floor(Y/2)*T.height/2;S.drawImage(T,le,_e,T.width/2,T.height/2,0,0,320,240)}else S.fillStyle=y.tv?"#6b637b":"#345c77",S.fillRect(5,5,310,230),S.fillStyle="#d8d5ca",S.font='17px "Songti SC",serif',S.fillText(y.tv?"\u539F\u521B\u7535\u89C6\u5267\u753B\u9762 \xB7 \u52A0\u8F7D\u4E2D":"\u661F\u5149\u7F51\u5427 \xB7 \u52A0\u8F7D\u4E2D",20,37);S.fillStyle="#07101a22";for(let Y=0;Y<240;Y+=3)S.fillRect(0,Y,320,1)}y.texture.needsUpdate=!0}}let uc=new Rl,ua;e.onpointerdown=h=>ua=[h.clientX,h.clientY],e.onpointerup=h=>{if(!ua||Math.hypot(h.clientX-ua[0],h.clientY-ua[1])>5)return;let y=e.getBoundingClientRect();if(uc.setFromCamera(new he((h.clientX-y.left)/y.width*2-1,-(h.clientY-y.top)/y.height*2+1),a),x.open){let S=uc.intersectObjects(U.filter(b=>b.mesh.parent&&b.mesh.parent.parent).map(b=>b.mesh),!1).find(b=>{let T=b.object;for(;T;){if(!T.visible)return!1;T=T.parent}return!0});if(S){let b=U.find(O=>O.mesh===S.object),T=hi[b.tv?"tv":"game"].length||4;b.page=(b.page+1)%T,vs(performance.now()),g.playEffect("screen"),wn("\u5DF2\u5207\u6362\u5C4F\u5E55\u5185\u5BB9")}}else{let S=uc.intersectObjects(D,!0).find(b=>b.object.visible);if(S){let b=S.object;for(;b&&!b.userData.id;)b=b.parent;b&&Zs(b.userData.id)}}},window.onkeydown=h=>{h.key==="Escape"&&Ln()};function Gm(){let h=r.getRenderTarget();for(let T of oi)T.visible=!1;Lt&&(Lt.visible=!1);let y=M.get("barber").floors[0],S=y.front.visible,b=y.roof.visible;y.front.visible=!0,y.roof.visible=!0;for(let{target:T,camera:O}of ki)r.setRenderTarget(T),r.clear(),r.render(o,O);r.setRenderTarget(h),y.front.visible=S,y.roof.visible=b;for(let T of oi)T.visible=!0;Xs=!0}let of=0;function Vm(h){if(!n||x.open||h-of<350)return;of=h;let y=!1,S=!1;for(let b of M.values()){let T=b.root.localToWorld(new L(0,1.5,b.d/2)),O=a.position.distanceTo(T);for(let k=0;k<b.floors.length;k++){let Y=b.floors[k],le=O<(Y.streetDetailed?13:11)&&k===0;le&&!Y.insideBuilt&&!y&&(st(Y.inside,b,k),Y.insideBuilt=!0,i(Y.inside),li(Y.inside),Y.insideBatched=!0,b.id==="barber"&&gs(),b.id==="tea"&&qs(b.id,"seven_cups_tea_v2.glb"),b.id==="noodles"&&qs(b.id,"xiaoling_noodles.glb"),y=!0);let _e=le&&Y.insideBuilt;!!Y.streetDetailed!==_e&&(Y.streetDetailed=_e,S=!0),Y.inside.visible=_e,Y.preview.visible=!_e}}y&&yi(),S&&la()}let af=performance.now(),lf=0,cf=!1;function uf(h){requestAnimationFrame(uf);let y=(h-af)/1e3,S=Math.min(.05,y);if(af=h,Pn?lc(Math.min(1,y)):l.update(),Vm(h),zi?.visible&&Lt){Xs||Gm(),zi.getWorldPosition(ai);let T=a.position.distanceTo(ai),O=us.clamp((10.1-T)/2.3,0,1),k=.34*O*O*(3-2*O);Lt.material.opacity+=(k-Lt.material.opacity)*(1-Math.exp(-S*2.5)),Lt.visible=Lt.material.opacity>.005}if(oa.visible||ic.visible){for(let T=0;T<Ys;T++)dn[T*3+1]-=S*(x.weather==="rain"?16+sa[T]*4:.55+sa[T]*.55),dn[T*3]+=S*(x.weather==="rain"?.5:Math.sin(h/1300+T)*.18),dn[T*3+1]<.1&&(dn[T*3+1]=15,dn[T*3]=(J()-.5)*28,dn[T*3+2]=(J()-.5)*40+3),Jh.set([dn[T*3],dn[T*3+1],dn[T*3+2],dn[T*3]-.05,dn[T*3+1]+.35,dn[T*3+2]],T*6);ia.attributes.position.needsUpdate=!0,nc.attributes.position.needsUpdate=!0}let b=hi.tv.some(T=>T.tagName==="VIDEO"||T.dataset?.animated==="true");h-lf>(b&&x.screens?40:250)&&(vs(h),lf=h),n?r.render(o,a):c.render(),!cf&&r.info.render.calls>0&&(cf=!0,window.sceneBoot?.ready(),kp())}function hc(){let h=e.getBoundingClientRect();r.setSize(h.width,h.height,!1),n||c.setSize(h.width,h.height),a.aspect=h.width/h.height,a.updateProjectionMatrix()}typeof ResizeObserver=="function"?new ResizeObserver(hc).observe(e):window.addEventListener("resize",hc,{passive:!0}),i(o),hc(),$h(),yi(),Ln(),document.querySelector("#status").textContent="9 \u5BB6\u53EF\u8FDB\u5165\u5E97\u94FA \xB7 \u9EBB\u8FA3\u70EB / \u70B8\u4E32\u644A",requestAnimationFrame(uf),window.sceneQA=()=>({textures:Wo(),contextLost:r.getContext().isContextLost(),gpuTextures:r.info.memory.textures,state:{...x},audio:g.debugState(),stores:[...M.values()].map(h=>({id:h.id,visible:h.root.visible,levels:h.floors.map(y=>({visible:y.floor.visible,front:y.front.visible,roof:y.roof.visible,insideBuilt:y.insideBuilt,insideVisible:y.inside.visible,streetDetailed:!!y.streetDetailed,previewVisible:y.preview?.visible||!1,previewMeshes:y.preview?(()=>{let S=0;return y.preview.traverse(b=>{b.isMesh&&S++}),S})():0}))})),drawCalls:r.info.render.calls,triangles:r.info.render.triangles,screenCount:U.length,roomLights:v.filter(h=>h.type==="room").length,canvas:[e.width,e.height]})}gb().catch(s=>{window.sceneBoot?.fail(s.message||String(s)),console.error(s)});})();
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
