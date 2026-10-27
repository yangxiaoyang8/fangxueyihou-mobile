(()=>{typeof CanvasRenderingContext2D<"u"&&!CanvasRenderingContext2D.prototype.roundRect&&(CanvasRenderingContext2D.prototype.roundRect=function(s,e,t,n,i=0){t<0&&(s+=t,t=-t),n<0&&(e+=n,n=-n),i=Math.min(Math.max(0,Number(Array.isArray(i)?i[0]:i)||0),t/2,n/2),this.moveTo(s+i,e),this.lineTo(s+t-i,e),this.quadraticCurveTo(s+t,e,s+t,e+i),this.lineTo(s+t,e+n-i),this.quadraticCurveTo(s+t,e+n,s+t-i,e+n),this.lineTo(s+i,e+n),this.quadraticCurveTo(s,e+n,s,e+n-i),this.lineTo(s,e+i),this.quadraticCurveTo(s,e,s+i,e),this.closePath()});var gs=document.querySelector(".panel"),Jr=document.querySelector("#mobilePanelToggle"),na=matchMedia("(max-width: 680px)");function oc(s){gs.classList.toggle("is-collapsed",!s),s&&(gs.scrollTop=0),Jr.setAttribute("aria-expanded",String(s)),Jr.querySelector(".mobile-toggle-label").textContent=s?"\u6536\u8D77":"\u5C55\u5F00",Jr.querySelector(".mobile-panel-chevron").textContent=s?"\u2304":"\u2303"}function rc(){let s=document.querySelector('[data-mobile-tab][aria-selected="true"]');document.querySelectorAll("[data-mobile-tab]").forEach(e=>{e.tabIndex=e===s?0:-1}),na.matches?oc(!1):(gs.classList.remove("is-collapsed"),Jr.setAttribute("aria-expanded","true"))}Jr.addEventListener("click",()=>{oc(gs.classList.contains("is-collapsed"))});na.addEventListener?na.addEventListener("change",rc):na.addListener(rc);rc();document.querySelectorAll(".mobile-quicknav button").forEach(s=>{s.addEventListener("click",()=>{gs.classList.contains("is-collapsed")&&oc(!0);let e=s.dataset.mobileTab;e&&(document.querySelectorAll("[data-mobile-tab]").forEach(t=>{let n=t===s;t.classList.toggle("active",n),t.setAttribute("aria-selected",String(n)),t.tabIndex=n?0:-1}),document.querySelectorAll("[data-mobile-view]").forEach(t=>{t.classList.toggle("is-active",t.dataset.mobileView===e)}),gs.dataset.activeMobileTab=e,gs.scrollTop=0)})});document.querySelector(".mobile-quicknav")?.addEventListener("keydown",s=>{if(!["ArrowLeft","ArrowRight"].includes(s.key))return;let e=[...document.querySelectorAll("[data-mobile-tab]")],t=e.indexOf(document.activeElement);t<0||(s.preventDefault(),e[(t+(s.key==="ArrowRight"?1:e.length-1))%e.length].focus())});var Ns={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Os={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Nm=0,rf=1,Om=2;var $d=1,Du=2,Mi=3,hi=0,pn=1,vt=2;var ui=0,mr=1,_r=2,of=3,af=4,Fm=5,Ss=100,Bm=101,km=102,lf=103,cf=104,zm=200,Gm=201,Vm=202,Hm=203,Wc=204,Xc=205,Wm=206,Xm=207,qm=208,Ym=209,Zm=210,Km=211,jm=212,Jm=213,$m=214,Qm=0,e0=1,t0=2,Fa=3,n0=4,i0=5,s0=6,r0=7,Qd=0,o0=1,a0=2,Zi=0,Uu=1,Nu=2,Ou=3,Io=4,l0=5,Fu=6,uf="attached",c0="detached",ep=300,yr=301,vr=302,qc=303,Yc=304,yl=306,mn=1e3,In=1001,go=1002,$t=1003,Ba=1004;var lo=1005;var Yt=1006,Bu=1007;var Ji=1008;var Ki=1009,u0=1010,h0=1011,ku=1012,tp=1013,qi=1014,Ti=1015,Qn=1016,np=1017,ip=1018,ws=1020,f0=1021,Bn=1023,d0=1024,p0=1025,As=1026,br=1027,m0=1028,sp=1029,g0=1030,rp=1031,op=1033,ac=33776,lc=33777,cc=33778,uc=33779,hf=35840,ff=35841,df=35842,pf=35843,ap=36196,mf=37492,gf=37496,xf=37808,_f=37809,yf=37810,vf=37811,bf=37812,Sf=37813,Mf=37814,Tf=37815,wf=37816,Af=37817,Ef=37818,Rf=37819,Cf=37820,Pf=37821,hc=36492,Lf=36494,If=36495,x0=36283,Df=36284,Uf=36285,Nf=36286;var Sr=2300,Rs=2301,fc=2302,Of=2400,Ff=2401,Bf=2402,_0=2500;var lp=0,vl=1,Do=2,cp=3e3,Es=3001,y0=3200,v0=3201,up=0,b0=1,kn="",qe="srgb",Qt="srgb-linear",zu="display-p3",bl="display-p3-linear",ka="linear",It="srgb",za="rec709",Ga="p3";var Xs=7680;var kf=519,S0=512,M0=513,T0=514,hp=515,w0=516,A0=517,E0=518,R0=519,Zc=35044;var zf="300 es",Kc=1035,wi=2e3,Va=2001,fi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gf=1234567,co=Math.PI/180,Mr=180/Math.PI;function zn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[s&255]+fn[s>>8&255]+fn[s>>16&255]+fn[s>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function Kt(s,e,t){return Math.max(e,Math.min(t,s))}function Gu(s,e){return(s%e+e)%e}function C0(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function P0(s,e,t){return s!==e?(t-s)/(e-s):0}function uo(s,e,t){return(1-t)*s+t*e}function L0(s,e,t,n){return uo(s,e,1-Math.exp(-t*n))}function I0(s,e=1){return e-Math.abs(Gu(s,e*2)-e)}function D0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function U0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function N0(s,e){return s+Math.floor(Math.random()*(e-s+1))}function O0(s,e){return s+Math.random()*(e-s)}function F0(s){return s*(.5-Math.random())}function B0(s){s!==void 0&&(Gf=s);let e=Gf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function k0(s){return s*co}function z0(s){return s*Mr}function jc(s){return(s&s-1)===0&&s!==0}function G0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ha(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function V0(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),f=r((e-n)/2),d=o((e-n)/2),p=r((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*f,l*d,a*c);break;case"YZY":s.set(l*d,a*u,l*f,a*c);break;case"ZXZ":s.set(l*f,l*d,a*u,a*c);break;case"XZX":s.set(a*u,l*_,l*p,a*c);break;case"YXY":s.set(l*p,a*u,l*_,a*c);break;case"ZYZ":s.set(l*_,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ci(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Pt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var rs={DEG2RAD:co,RAD2DEG:Mr,generateUUID:zn,clamp:Kt,euclideanModulo:Gu,mapLinear:C0,inverseLerp:P0,lerp:uo,damp:L0,pingpong:I0,smoothstep:D0,smootherstep:U0,randInt:N0,randFloat:O0,randFloatSpread:F0,seededRandom:B0,degToRad:k0,radToDeg:z0,isPowerOfTwo:jc,ceilPowerOfTwo:G0,floorPowerOfTwo:Ha,setQuaternionFromProperEuler:V0,normalize:Pt,denormalize:ci},ce=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},bt=class s{constructor(e,t,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],p=n[5],_=n[8],x=i[0],g=i[3],m=i[6],M=i[1],v=i[4],A=i[7],B=i[2],U=i[5],D=i[8];return r[0]=o*x+a*M+l*B,r[3]=o*g+a*v+l*U,r[6]=o*m+a*A+l*D,r[1]=c*x+u*M+f*B,r[4]=c*g+u*v+f*U,r[7]=c*m+u*A+f*D,r[2]=d*x+p*M+_*B,r[5]=d*g+p*v+_*U,r[8]=d*m+p*A+_*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*r,p=c*r-o*l,_=t*f+n*d+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/_;return e[0]=f*x,e[1]=(i*c-u*n)*x,e[2]=(a*n-i*o)*x,e[3]=d*x,e[4]=(u*t-i*l)*x,e[5]=(i*r-a*t)*x,e[6]=p*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(dc.makeScale(e,t)),this}rotate(e){return this.premultiply(dc.makeRotation(-e)),this}translate(e,t){return this.premultiply(dc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},dc=new bt;function fp(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function xo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function H0(){let s=xo("canvas");return s.style.display="block",s}var Vf={};function ho(s){s in Vf||(Vf[s]=!0,console.warn(s))}var Hf=new bt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Wf=new bt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ia={[Qt]:{transfer:ka,primaries:za,toReference:s=>s,fromReference:s=>s},[qe]:{transfer:It,primaries:za,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[bl]:{transfer:ka,primaries:Ga,toReference:s=>s.applyMatrix3(Wf),fromReference:s=>s.applyMatrix3(Hf)},[zu]:{transfer:It,primaries:Ga,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Wf),fromReference:s=>s.applyMatrix3(Hf).convertLinearToSRGB()}},W0=new Set([Qt,bl]),Mt={enabled:!0,_workingColorSpace:Qt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!W0.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let n=ia[e].toReference,i=ia[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return ia[s].primaries},getTransfer:function(s){return s===kn?ka:ia[s].transfer}};function gr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function pc(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var qs,Wa=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qs===void 0&&(qs=xo("canvas")),qs.width=e.width,qs.height=e.height;let n=qs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=qs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=xo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=gr(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(gr(t[n]/255)*255):t[n]=gr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},X0=0,Tr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:X0++}),this.uuid=zn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(mc(i[o].image)):r.push(mc(i[o]))}else r=mc(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function mc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Wa.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var q0=0,en=class s extends fi{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=In,i=In,r=Yt,o=Ji,a=Bn,l=Ki,c=s.DEFAULT_ANISOTROPY,u=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=zn(),this.name="",this.source=new Tr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(ho("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Es?qe:kn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ep)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mn:e.x=e.x-Math.floor(e.x);break;case In:e.x=e.x<0?0:1;break;case go:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mn:e.y=e.y-Math.floor(e.y);break;case In:e.y=e.y<0?0:1;break;case go:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ho("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===qe?Es:cp}set encoding(e){ho("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Es?qe:kn}};en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=ep;en.DEFAULT_ANISOTROPY=1;var Dt=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],_=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-x)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+x)<.1&&Math.abs(_+g)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,A=(p+1)/2,B=(m+1)/2,U=(u+d)/4,D=(f+x)/4,J=(_+g)/4;return v>A&&v>B?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=U/n,r=D/n):A>B?A<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(A),n=U/i,r=J/i):B<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(B),n=D/r,i=J/r),this.set(n,i,r,t),this}let M=Math.sqrt((g-_)*(g-_)+(f-x)*(f-x)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(g-_)/M,this.y=(f-x)/M,this.z=(d-u)/M,this.w=Math.acos((c+p+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Jc=class extends fi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t);let i={width:e,height:t,depth:1};n.encoding!==void 0&&(ho("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Es?qe:kn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new en(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Tr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ln=class extends Jc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Xa=class extends en{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=$t,this.minFilter=$t,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $c=class extends en{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=$t,this.minFilter=$t,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var wn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3],d=r[o+0],p=r[o+1],_=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=x;return}if(f!==x||l!==d||c!==p||u!==_){let g=1-a,m=l*d+c*p+u*_+f*x,M=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){let B=Math.sqrt(v),U=Math.atan2(B,m*M);g=Math.sin(g*U)/B,a=Math.sin(a*U)/B}let A=a*M;if(l=l*g+d*A,c=c*g+p*A,u=u*g+_*A,f=f*g+x*A,g===1-a){let B=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=B,c*=B,u*=B,f*=B}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=r[o],d=r[o+1],p=r[o+2],_=r[o+3];return e[t]=a*_+u*f+l*p-c*d,e[t+1]=l*_+u*d+c*f-a*p,e[t+2]=c*_+u*p+a*d-l*f,e[t+3]=u*_-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),f=a(r/2),d=l(n/2),p=l(i/2),_=l(r/2);switch(o){case"XYZ":this._x=d*u*f+c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f-d*p*_;break;case"YXZ":this._x=d*u*f+c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f+d*p*_;break;case"ZXY":this._x=d*u*f-c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f-d*p*_;break;case"ZYX":this._x=d*u*f-c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f+d*p*_;break;case"YZX":this._x=d*u*f+c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f-d*p*_;break;case"XZY":this._x=d*u*f-c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=n+a+f;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-i)*p}else if(n>a&&n>f){let p=2*Math.sqrt(1+n-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+c)/p}else if(a>f){let p=2*Math.sqrt(1+a-n-f);this._w=(r-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+f-n-a);this._w=(o-i)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-r*i),f=2*(r*n-o*t);return this.x=t+l*c+o*f-a*u,this.y=n+l*u+a*c-r*f,this.z=i+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return gc.copy(this).projectOnVector(e),this.sub(gc)}reflect(e){return this.sub(gc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},gc=new L,Xf=new wn,Gn=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Kn):Kn.fromBufferAttribute(r,o),Kn.applyMatrix4(e.matrixWorld),this.expandByPoint(Kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),sa.copy(n.boundingBox)),sa.applyMatrix4(e.matrixWorld),this.union(sa)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($r),ra.subVectors(this.max,$r),Ys.subVectors(e.a,$r),Zs.subVectors(e.b,$r),Ks.subVectors(e.c,$r),Gi.subVectors(Zs,Ys),Vi.subVectors(Ks,Zs),xs.subVectors(Ys,Ks);let t=[0,-Gi.z,Gi.y,0,-Vi.z,Vi.y,0,-xs.z,xs.y,Gi.z,0,-Gi.x,Vi.z,0,-Vi.x,xs.z,0,-xs.x,-Gi.y,Gi.x,0,-Vi.y,Vi.x,0,-xs.y,xs.x,0];return!xc(t,Ys,Zs,Ks,ra)||(t=[1,0,0,0,1,0,0,0,1],!xc(t,Ys,Zs,Ks,ra))?!1:(oa.crossVectors(Gi,Vi),t=[oa.x,oa.y,oa.z],xc(t,Ys,Zs,Ks,ra))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},xi=[new L,new L,new L,new L,new L,new L,new L,new L],Kn=new L,sa=new Gn,Ys=new L,Zs=new L,Ks=new L,Gi=new L,Vi=new L,xs=new L,$r=new L,ra=new L,oa=new L,_s=new L;function xc(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){_s.fromArray(s,r);let a=i.x*Math.abs(_s.x)+i.y*Math.abs(_s.y)+i.z*Math.abs(_s.z),l=e.dot(_s),c=t.dot(_s),u=n.dot(_s);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Y0=new Gn,Qr=new L,_c=new L,Dn=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Y0.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qr.subVectors(e,this.center);let t=Qr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Qr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_c.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qr.copy(e.center).add(_c)),this.expandByPoint(Qr.copy(e.center).sub(_c))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},_i=new L,yc=new L,aa=new L,Hi=new L,vc=new L,la=new L,bc=new L,Ai=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=_i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_i.copy(this.origin).addScaledVector(this.direction,t),_i.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){yc.copy(e).add(t).multiplyScalar(.5),aa.copy(t).sub(e).normalize(),Hi.copy(this.origin).sub(yc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(aa),a=Hi.dot(this.direction),l=-Hi.dot(aa),c=Hi.lengthSq(),u=Math.abs(1-o*o),f,d,p,_;if(u>0)if(f=o*l-a,d=o*a-l,_=r*u,f>=0)if(d>=-_)if(d<=_){let x=1/u;f*=x,d*=x,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(yc).addScaledVector(aa,d),p}intersectSphere(e,t){_i.subVectors(e.center,this.origin);let n=_i.dot(this.direction),i=_i.dot(_i)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,_i)!==null}intersectTriangle(e,t,n,i,r){vc.subVectors(t,e),la.subVectors(n,e),bc.crossVectors(vc,la);let o=this.direction.dot(bc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Hi.subVectors(this.origin,e);let l=a*this.direction.dot(la.crossVectors(Hi,la));if(l<0)return null;let c=a*this.direction.dot(vc.cross(Hi));if(c<0||l+c>o)return null;let u=-a*Hi.dot(bc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ft=class s{constructor(e,t,n,i,r,o,a,l,c,u,f,d,p,_,x,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,u,f,d,p,_,x,g)}set(e,t,n,i,r,o,a,l,c,u,f,d,p,_,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=d,m[3]=p,m[7]=_,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/js.setFromMatrixColumn(e,0).length(),r=1/js.setFromMatrixColumn(e,1).length(),o=1/js.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let d=o*u,p=o*f,_=a*u,x=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+_*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=_+p*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,p=l*f,_=c*u,x=c*f;t[0]=d+x*a,t[4]=_*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-_,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,p=l*f,_=c*u,x=c*f;t[0]=d-x*a,t[4]=-o*f,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,p=o*f,_=a*u,x=a*f;t[0]=l*u,t[4]=_*c-p,t[8]=d*c+x,t[1]=l*f,t[5]=x*c+d,t[9]=p*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,p=o*c,_=a*l,x=a*c;t[0]=l*u,t[4]=x-d*f,t[8]=_*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+_,t[10]=d-x*f}else if(e.order==="XZY"){let d=o*l,p=o*c,_=a*l,x=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+x,t[5]=o*u,t[9]=p*f-_,t[2]=_*f-p,t[6]=a*u,t[10]=x*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Z0,e,K0)}lookAt(e,t,n){let i=this.elements;return Pn.subVectors(e,t),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Wi.crossVectors(n,Pn),Wi.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Wi.crossVectors(n,Pn)),Wi.normalize(),ca.crossVectors(Pn,Wi),i[0]=Wi.x,i[4]=ca.x,i[8]=Pn.x,i[1]=Wi.y,i[5]=ca.y,i[9]=Pn.y,i[2]=Wi.z,i[6]=ca.z,i[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],p=n[13],_=n[2],x=n[6],g=n[10],m=n[14],M=n[3],v=n[7],A=n[11],B=n[15],U=i[0],D=i[4],J=i[8],R=i[12],P=i[1],te=i[5],z=i[9],Ce=i[13],Y=i[2],re=i[6],ue=i[10],K=i[14],W=i[3],ee=i[7],ge=i[11],ye=i[15];return r[0]=o*U+a*P+l*Y+c*W,r[4]=o*D+a*te+l*re+c*ee,r[8]=o*J+a*z+l*ue+c*ge,r[12]=o*R+a*Ce+l*K+c*ye,r[1]=u*U+f*P+d*Y+p*W,r[5]=u*D+f*te+d*re+p*ee,r[9]=u*J+f*z+d*ue+p*ge,r[13]=u*R+f*Ce+d*K+p*ye,r[2]=_*U+x*P+g*Y+m*W,r[6]=_*D+x*te+g*re+m*ee,r[10]=_*J+x*z+g*ue+m*ge,r[14]=_*R+x*Ce+g*K+m*ye,r[3]=M*U+v*P+A*Y+B*W,r[7]=M*D+v*te+A*re+B*ee,r[11]=M*J+v*z+A*ue+B*ge,r[15]=M*R+v*Ce+A*K+B*ye,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],_=e[3],x=e[7],g=e[11],m=e[15];return _*(+r*l*f-i*c*f-r*a*d+n*c*d+i*a*p-n*l*p)+x*(+t*l*p-t*c*d+r*o*d-i*o*p+i*c*u-r*l*u)+g*(+t*c*f-t*a*p-r*o*f+n*o*p+r*a*u-n*c*u)+m*(-i*a*u-t*l*f+t*a*d+i*o*f-n*o*d+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],_=e[12],x=e[13],g=e[14],m=e[15],M=f*g*c-x*d*c+x*l*p-a*g*p-f*l*m+a*d*m,v=_*d*c-u*g*c-_*l*p+o*g*p+u*l*m-o*d*m,A=u*x*c-_*f*c+_*a*p-o*x*p-u*a*m+o*f*m,B=_*f*l-u*x*l-_*a*d+o*x*d+u*a*g-o*f*g,U=t*M+n*v+i*A+r*B;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/U;return e[0]=M*D,e[1]=(x*d*r-f*g*r-x*i*p+n*g*p+f*i*m-n*d*m)*D,e[2]=(a*g*r-x*l*r+x*i*c-n*g*c-a*i*m+n*l*m)*D,e[3]=(f*l*r-a*d*r-f*i*c+n*d*c+a*i*p-n*l*p)*D,e[4]=v*D,e[5]=(u*g*r-_*d*r+_*i*p-t*g*p-u*i*m+t*d*m)*D,e[6]=(_*l*r-o*g*r-_*i*c+t*g*c+o*i*m-t*l*m)*D,e[7]=(o*d*r-u*l*r+u*i*c-t*d*c-o*i*p+t*l*p)*D,e[8]=A*D,e[9]=(_*f*r-u*x*r-_*n*p+t*x*p+u*n*m-t*f*m)*D,e[10]=(o*x*r-_*a*r+_*n*c-t*x*c-o*n*m+t*a*m)*D,e[11]=(u*a*r-o*f*r-u*n*c+t*f*c+o*n*p-t*a*p)*D,e[12]=B*D,e[13]=(u*x*i-_*f*i+_*n*d-t*x*d-u*n*g+t*f*g)*D,e[14]=(_*a*i-o*x*i-_*n*l+t*x*l+o*n*g-t*a*g)*D,e[15]=(o*f*i-u*a*i+u*n*l-t*f*l-o*n*d+t*a*d)*D,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,f=a+a,d=r*c,p=r*u,_=r*f,x=o*u,g=o*f,m=a*f,M=l*c,v=l*u,A=l*f,B=n.x,U=n.y,D=n.z;return i[0]=(1-(x+m))*B,i[1]=(p+A)*B,i[2]=(_-v)*B,i[3]=0,i[4]=(p-A)*U,i[5]=(1-(d+m))*U,i[6]=(g+M)*U,i[7]=0,i[8]=(_+v)*D,i[9]=(g-M)*D,i[10]=(1-(d+x))*D,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=js.set(i[0],i[1],i[2]).length(),o=js.set(i[4],i[5],i[6]).length(),a=js.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],jn.copy(this);let c=1/r,u=1/o,f=1/a;return jn.elements[0]*=c,jn.elements[1]*=c,jn.elements[2]*=c,jn.elements[4]*=u,jn.elements[5]*=u,jn.elements[6]*=u,jn.elements[8]*=f,jn.elements[9]*=f,jn.elements[10]*=f,t.setFromRotationMatrix(jn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=wi){let l=this.elements,c=2*r/(t-e),u=2*r/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i),p,_;if(a===wi)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Va)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=wi){let l=this.elements,c=1/(t-e),u=1/(n-i),f=1/(o-r),d=(t+e)*c,p=(n+i)*u,_,x;if(a===wi)_=(o+r)*f,x=-2*f;else if(a===Va)_=r*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},js=new L,jn=new ft,Z0=new L(0,0,0),K0=new L(1,1,1),Wi=new L,ca=new L,Pn=new L,qf=new ft,Yf=new wn,qa=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],f=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Kt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yf.setFromEuler(this),this.setFromQuaternion(Yf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qa.DEFAULT_ORDER="XYZ";var _o=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},j0=0,Zf=new L,Js=new wn,yi=new ft,ua=new L,eo=new L,J0=new L,$0=new wn,Kf=new L(1,0,0),jf=new L(0,1,0),Jf=new L(0,0,1),Q0={type:"added"},eg={type:"removed"},kt=class s extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:j0++}),this.uuid=zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new L,t=new qa,n=new wn,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ft},normalMatrix:{value:new bt}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _o,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.multiply(Js),this}rotateOnWorldAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.premultiply(Js),this}rotateX(e){return this.rotateOnAxis(Kf,e)}rotateY(e){return this.rotateOnAxis(jf,e)}rotateZ(e){return this.rotateOnAxis(Jf,e)}translateOnAxis(e,t){return Zf.copy(e).applyQuaternion(this.quaternion),this.position.add(Zf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kf,e)}translateY(e){return this.translateOnAxis(jf,e)}translateZ(e){return this.translateOnAxis(Jf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ua.copy(e):ua.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(eo,ua,this.up):yi.lookAt(ua,eo,this.up),this.quaternion.setFromRotationMatrix(yi),i&&(yi.extractRotation(i.matrixWorld),Js.setFromRotationMatrix(yi),this.quaternion.premultiply(Js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Q0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(eg)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(yi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,e,J0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,$0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++){let a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};kt.DEFAULT_UP=new L(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Jn=new L,vi=new L,Sc=new L,bi=new L,$s=new L,Qs=new L,$f=new L,Mc=new L,Tc=new L,wc=new L,ha=!1,Ts=class s{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Jn.subVectors(e,t),i.cross(Jn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Jn.subVectors(i,t),vi.subVectors(n,t),Sc.subVectors(e,t);let o=Jn.dot(Jn),a=Jn.dot(vi),l=Jn.dot(Sc),c=vi.dot(vi),u=vi.dot(Sc),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let d=1/f,p=(c*l-a*u)*d,_=(o*u-a*l)*d;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getUV(e,t,n,i,r,o,a,l){return ha===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ha=!0),this.getInterpolation(e,t,n,i,r,o,a,l)}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,bi.x),l.addScaledVector(o,bi.y),l.addScaledVector(a,bi.z),l)}static isFrontFacing(e,t,n,i){return Jn.subVectors(n,t),vi.subVectors(e,t),Jn.cross(vi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),Jn.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return ha===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ha=!0),s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;$s.subVectors(i,n),Qs.subVectors(r,n),Mc.subVectors(e,n);let l=$s.dot(Mc),c=Qs.dot(Mc);if(l<=0&&c<=0)return t.copy(n);Tc.subVectors(e,i);let u=$s.dot(Tc),f=Qs.dot(Tc);if(u>=0&&f<=u)return t.copy(i);let d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector($s,o);wc.subVectors(e,r);let p=$s.dot(wc),_=Qs.dot(wc);if(_>=0&&p<=_)return t.copy(r);let x=p*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(Qs,a);let g=u*_-p*f;if(g<=0&&f-u>=0&&p-_>=0)return $f.subVectors(r,i),a=(f-u)/(f-u+(p-_)),t.copy(i).addScaledVector($f,a);let m=1/(g+x+d);return o=x*m,a=d*m,t.copy(n).addScaledVector($s,o).addScaledVector(Qs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},dp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},fa={h:0,s:0,l:0};function Ac(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Ye=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Mt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Mt.workingColorSpace){if(e=Gu(e,1),t=Kt(t,0,1),n=Kt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ac(o,r,e+1/3),this.g=Ac(o,r,e),this.b=Ac(o,r,e-1/3)}return Mt.toWorkingColorSpace(this,i),this}setStyle(e,t=qe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qe){let n=dp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gr(e.r),this.g=gr(e.g),this.b=gr(e.b),this}copyLinearToSRGB(e){return this.r=pc(e.r),this.g=pc(e.g),this.b=pc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qe){return Mt.fromWorkingColorSpace(dn.copy(this),e),Math.round(Kt(dn.r*255,0,255))*65536+Math.round(Kt(dn.g*255,0,255))*256+Math.round(Kt(dn.b*255,0,255))}getHexString(e=qe){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.fromWorkingColorSpace(dn.copy(this),t);let n=dn.r,i=dn.g,r=dn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=qe){Mt.fromWorkingColorSpace(dn.copy(this),e);let t=dn.r,n=dn.g,i=dn.b;return e!==qe?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Xi),this.setHSL(Xi.h+e,Xi.s+t,Xi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Xi),e.getHSL(fa);let n=uo(Xi.h,fa.h,t),i=uo(Xi.s,fa.s,t),r=uo(Xi.l,fa.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},dn=new Ye;Ye.NAMES=dp;var tg=0,An=class extends fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tg++}),this.uuid=zn(),this.name="",this.type="Material",this.blending=mr,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wc,this.blendDst=Xc,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Fa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xs,this.stencilZFail=Xs,this.stencilZPass=Xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==mr&&(n.blending=this.blending),this.side!==hi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wc&&(n.blendSrc=this.blendSrc),this.blendDst!==Xc&&(n.blendDst=this.blendDst),this.blendEquation!==Ss&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Xt=class extends An{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Qd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Zt=new L,da=new ce,Bt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Zc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)da.fromBufferAttribute(this,t),da.applyMatrix3(e),this.setXY(t,da.x,da.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),i=Pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),i=Pt(i,this.array),r=Pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zc&&(e.usage=this.usage),e}};var Ya=class extends Bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Za=class extends Bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var xt=class extends Bt{constructor(e,t,n){super(new Float32Array(e),t,n)}};var ng=0,Fn=new ft,Ec=new kt,er=new L,Ln=new Gn,to=new Gn,on=new L,Lt=class s extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ng++}),this.uuid=zn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fp(e)?Za:Ya)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new bt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,t,n){return Fn.makeTranslation(e,t,n),this.applyMatrix4(Fn),this}scale(e,t,n){return Fn.makeScale(e,t,n),this.applyMatrix4(Fn),this}lookAt(e){return Ec.lookAt(e),Ec.updateMatrix(),this.applyMatrix4(Ec.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(er).negate(),this.translate(er.x,er.y,er.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new xt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Ln.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];to.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(Ln.min,to.min),Ln.expandByPoint(on),on.addVectors(Ln.max,to.max),Ln.expandByPoint(on)):(Ln.expandByPoint(to.min),Ln.expandByPoint(to.max))}Ln.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)on.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(on));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)on.fromBufferAttribute(a,c),l&&(er.fromBufferAttribute(e,c),on.add(er)),i=Math.max(i,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bt(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],u=[];for(let P=0;P<a;P++)c[P]=new L,u[P]=new L;let f=new L,d=new L,p=new L,_=new ce,x=new ce,g=new ce,m=new L,M=new L;function v(P,te,z){f.fromArray(i,P*3),d.fromArray(i,te*3),p.fromArray(i,z*3),_.fromArray(o,P*2),x.fromArray(o,te*2),g.fromArray(o,z*2),d.sub(f),p.sub(f),x.sub(_),g.sub(_);let Ce=1/(x.x*g.y-g.x*x.y);isFinite(Ce)&&(m.copy(d).multiplyScalar(g.y).addScaledVector(p,-x.y).multiplyScalar(Ce),M.copy(p).multiplyScalar(x.x).addScaledVector(d,-g.x).multiplyScalar(Ce),c[P].add(m),c[te].add(m),c[z].add(m),u[P].add(M),u[te].add(M),u[z].add(M))}let A=this.groups;A.length===0&&(A=[{start:0,count:n.length}]);for(let P=0,te=A.length;P<te;++P){let z=A[P],Ce=z.start,Y=z.count;for(let re=Ce,ue=Ce+Y;re<ue;re+=3)v(n[re+0],n[re+1],n[re+2])}let B=new L,U=new L,D=new L,J=new L;function R(P){D.fromArray(r,P*3),J.copy(D);let te=c[P];B.copy(te),B.sub(D.multiplyScalar(D.dot(te))).normalize(),U.crossVectors(J,te);let Ce=U.dot(u[P])<0?-1:1;l[P*4]=B.x,l[P*4+1]=B.y,l[P*4+2]=B.z,l[P*4+3]=Ce}for(let P=0,te=A.length;P<te;++P){let z=A[P],Ce=z.start,Y=z.count;for(let re=Ce,ue=Ce+Y;re<ue;re+=3)R(n[re+0]),R(n[re+1]),R(n[re+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let i=new L,r=new L,o=new L,a=new L,l=new L,c=new L,u=new L,f=new L;if(e)for(let d=0,p=e.count;d<p;d+=3){let _=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),u.subVectors(o,r),f.subVectors(i,r),u.cross(f),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),f.subVectors(i,r),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u),p=0,_=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let m=0;m<u;m++)d[_++]=c[p++]}return new Bt(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){let d=c[u],p=e(d,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){let p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],f=r[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qf=new ft,ys=new Ai,pa=new Dn,ed=new L,tr=new L,nr=new L,ir=new L,Rc=new L,ma=new L,ga=new ce,xa=new ce,_a=new ce,td=new L,nd=new L,id=new L,ya=new L,va=new L,ot=class extends kt{constructor(e=new Lt,t=new Xt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){ma.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],f=r[l];u!==0&&(Rc.fromBufferAttribute(f,e),o?ma.addScaledVector(Rc,u):ma.addScaledVector(Rc.sub(t),u))}t.add(ma)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(r),ys.copy(e.ray).recast(e.near),!(pa.containsPoint(ys.origin)===!1&&(ys.intersectSphere(pa,ed)===null||ys.origin.distanceToSquared(ed)>(e.far-e.near)**2))&&(Qf.copy(r).invert(),ys.copy(e.ray).applyMatrix4(Qf),!(n.boundingBox!==null&&ys.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ys)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){let g=d[_],m=o[g.materialIndex],M=Math.max(g.start,p.start),v=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let A=M,B=v;A<B;A+=3){let U=a.getX(A),D=a.getX(A+1),J=a.getX(A+2);i=ba(this,m,e,n,c,u,f,U,D,J),i&&(i.faceIndex=Math.floor(A/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let _=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let g=_,m=x;g<m;g+=3){let M=a.getX(g),v=a.getX(g+1),A=a.getX(g+2);i=ba(this,o,e,n,c,u,f,M,v,A),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){let g=d[_],m=o[g.materialIndex],M=Math.max(g.start,p.start),v=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let A=M,B=v;A<B;A+=3){let U=A,D=A+1,J=A+2;i=ba(this,m,e,n,c,u,f,U,D,J),i&&(i.faceIndex=Math.floor(A/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let g=_,m=x;g<m;g+=3){let M=g,v=g+1,A=g+2;i=ba(this,o,e,n,c,u,f,M,v,A),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function ig(s,e,t,n,i,r,o,a){let l;if(e.side===pn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===hi,a),l===null)return null;va.copy(a),va.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(va);return c<t.near||c>t.far?null:{distance:c,point:va.clone(),object:s}}function ba(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,tr),s.getVertexPosition(l,nr),s.getVertexPosition(c,ir);let u=ig(s,e,t,n,tr,nr,ir,ya);if(u){i&&(ga.fromBufferAttribute(i,a),xa.fromBufferAttribute(i,l),_a.fromBufferAttribute(i,c),u.uv=Ts.getInterpolation(ya,tr,nr,ir,ga,xa,_a,new ce)),r&&(ga.fromBufferAttribute(r,a),xa.fromBufferAttribute(r,l),_a.fromBufferAttribute(r,c),u.uv1=Ts.getInterpolation(ya,tr,nr,ir,ga,xa,_a,new ce),u.uv2=u.uv1),o&&(td.fromBufferAttribute(o,a),nd.fromBufferAttribute(o,l),id.fromBufferAttribute(o,c),u.normal=Ts.getInterpolation(ya,tr,nr,ir,td,nd,id,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new L,materialIndex:0};Ts.getNormal(tr,nr,ir,f.normal),u.face=f}return u}var yn=class s extends Lt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],f=[],d=0,p=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(u,3)),this.setAttribute("uv",new xt(f,2));function _(x,g,m,M,v,A,B,U,D,J,R){let P=A/D,te=B/J,z=A/2,Ce=B/2,Y=U/2,re=D+1,ue=J+1,K=0,W=0,ee=new L;for(let ge=0;ge<ue;ge++){let ye=ge*te-Ce;for(let de=0;de<re;de++){let $=de*P-z;ee[x]=$*M,ee[g]=ye*v,ee[m]=Y,c.push(ee.x,ee.y,ee.z),ee[x]=0,ee[g]=0,ee[m]=U>0?1:-1,u.push(ee.x,ee.y,ee.z),f.push(de/D),f.push(1-ge/J),K+=1}}for(let ge=0;ge<J;ge++)for(let ye=0;ye<D;ye++){let de=d+ye+re*ge,$=d+ye+re*(ge+1),O=d+(ye+1)+re*(ge+1),pe=d+(ye+1)+re*ge;l.push(de,$,pe),l.push($,O,pe),W+=6}a.addGroup(p,W,R),p+=W,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function wr(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function _n(s){let e={};for(let t=0;t<s.length;t++){let n=wr(s[t]);for(let i in n)e[i]=n[i]}return e}function sg(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function pp(s){return s.getRenderTarget()===null?s.outputColorSpace:Mt.workingColorSpace}var os={clone:wr,merge:_n},rg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,og=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Jt=class extends An{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rg,this.fragmentShader=og,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wr(e.uniforms),this.uniformsGroups=sg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ka=class extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=wi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},jt=class extends Ka{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Mr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(co*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mr*2*Math.atan(Math.tan(co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(co*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},sr=-90,rr=1,Qc=class extends kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new jt(sr,rr,e,t);i.layers=this.layers,this.add(i);let r=new jt(sr,rr,e,t);r.layers=this.layers,this.add(r);let o=new jt(sr,rr,e,t);o.layers=this.layers,this.add(o);let a=new jt(sr,rr,e,t);a.layers=this.layers,this.add(a);let l=new jt(sr,rr,e,t);l.layers=this.layers,this.add(l);let c=new jt(sr,rr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===wi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Va)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(f,d,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},ja=class extends en{constructor(e,t,n,i,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:yr,super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},eu=class extends ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(ho("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Es?qe:kn),this.texture=new ja(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new yn(5,5,5),r=new Jt({name:"CubemapFromEquirect",uniforms:wr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:ui});r.uniforms.tEquirect.value=t;let o=new ot(i,r),a=t.minFilter;return t.minFilter===Ji&&(t.minFilter=Yt),new Qc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},Cc=new L,ag=new L,lg=new bt,$n=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Cc.subVectors(n,t).cross(ag.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Cc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||lg.getNormalMatrix(e),i=this.coplanarPoint(Cc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},vs=new Dn,Sa=new L,yo=class{constructor(e=new $n,t=new $n,n=new $n,i=new $n,r=new $n,o=new $n){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=wi){let n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],f=i[6],d=i[7],p=i[8],_=i[9],x=i[10],g=i[11],m=i[12],M=i[13],v=i[14],A=i[15];if(n[0].setComponents(l-r,d-c,g-p,A-m).normalize(),n[1].setComponents(l+r,d+c,g+p,A+m).normalize(),n[2].setComponents(l+o,d+u,g+_,A+M).normalize(),n[3].setComponents(l-o,d-u,g-_,A-M).normalize(),n[4].setComponents(l-a,d-f,g-x,A-v).normalize(),t===wi)n[5].setComponents(l+a,d+f,g+x,A+v).normalize();else if(t===Va)n[5].setComponents(a,f,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(e){return vs.center.set(0,0,0),vs.radius=.7071067811865476,vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Sa.x=i.normal.x>0?e.max.x:e.min.x,Sa.y=i.normal.y>0?e.max.y:e.min.y,Sa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Sa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function mp(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function cg(s,e){let t=e.isWebGL2,n=new WeakMap;function i(c,u){let f=c.array,d=c.usage,p=f.byteLength,_=s.createBuffer();s.bindBuffer(u,_),s.bufferData(u,f,d),c.onUploadCallback();let x;if(f instanceof Float32Array)x=s.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=s.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=s.SHORT;else if(f instanceof Uint32Array)x=s.UNSIGNED_INT;else if(f instanceof Int32Array)x=s.INT;else if(f instanceof Int8Array)x=s.BYTE;else if(f instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,u,f){let d=u.array,p=u._updateRange,_=u.updateRanges;if(s.bindBuffer(f,c),p.count===-1&&_.length===0&&s.bufferSubData(f,0,d),_.length!==0){for(let x=0,g=_.length;x<g;x++){let m=_[x];t?s.bufferSubData(f,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):s.bufferSubData(f,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}u.clearUpdateRanges()}p.count!==-1&&(t?s.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):s.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);u&&(s.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){let d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let f=n.get(c);if(f===void 0)n.set(c,i(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,c,u),f.version=c.version}}return{get:o,remove:a,update:l}}var zt=class s extends Lt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,f=e/a,d=t/l,p=[],_=[],x=[],g=[];for(let m=0;m<u;m++){let M=m*d-o;for(let v=0;v<c;v++){let A=v*f-r;_.push(A,-M,0),x.push(0,0,1),g.push(v/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){let v=M+c*m,A=M+c*(m+1),B=M+1+c*(m+1),U=M+1+c*m;p.push(v,A,U),p.push(A,B,U)}this.setIndex(p),this.setAttribute("position",new xt(_,3)),this.setAttribute("normal",new xt(x,3)),this.setAttribute("uv",new xt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},ug=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hg=`#ifdef USE_ALPHAHASH
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
#endif`,fg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,mg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gg=`#ifdef USE_AOMAP
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
#endif`,xg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_g=`#ifdef USE_BATCHING
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
#endif`,yg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,vg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Mg=`#ifdef USE_IRIDESCENCE
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
#endif`,Tg=`#ifdef USE_BUMPMAP
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
#endif`,wg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ag=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Eg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ig=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Dg=`#define PI 3.141592653589793
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
} // validated`,Ug=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ng=`vec3 transformedNormal = objectNormal;
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
#endif`,Og=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gg=`
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
}`,Vg=`#ifdef USE_ENVMAP
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
#endif`,Hg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wg=`#ifdef USE_ENVMAP
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
#endif`,Xg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qg=`#ifdef USE_ENVMAP
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
#endif`,Yg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jg=`#ifdef USE_GRADIENTMAP
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
}`,$g=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Qg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ex=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nx=`uniform bool receiveShadow;
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
#endif`,ix=`#ifdef USE_ENVMAP
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
#endif`,sx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ox=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ax=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lx=`PhysicalMaterial material;
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
#endif`,cx=`struct PhysicalMaterial {
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
}`,ux=`
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
#endif`,hx=`#if defined( RE_IndirectDiffuse )
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
#endif`,fx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,px=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,gx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,xx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_x=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vx=`#if defined( USE_POINTS_UV )
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
#endif`,bx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tx=`#ifdef USE_MORPHNORMALS
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
#endif`,wx=`#ifdef USE_MORPHTARGETS
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
#endif`,Ax=`#ifdef USE_MORPHTARGETS
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
#endif`,Ex=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Rx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Px=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ix=`#ifdef USE_NORMALMAP
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
#endif`,Dx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ux=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ox=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,kx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zx=`float getShadowMask() {
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
}`,Kx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jx=`#ifdef USE_SKINNING
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
#endif`,Jx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$x=`#ifdef USE_SKINNING
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
#endif`,Qx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,e_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,t_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,n_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,i_=`#ifdef USE_TRANSMISSION
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
#endif`,s_=`#ifdef USE_TRANSMISSION
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
#endif`,r_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,c_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,u_=`uniform sampler2D t2D;
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
}`,h_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,d_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m_=`#include <common>
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
}`,g_=`#if DEPTH_PACKING == 3200
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
}`,x_=`#define DISTANCE
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
}`,__=`#define DISTANCE
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
}`,y_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,v_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b_=`uniform float scale;
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
}`,S_=`uniform vec3 diffuse;
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
}`,M_=`#include <common>
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
}`,T_=`uniform vec3 diffuse;
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
}`,w_=`#define LAMBERT
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
}`,A_=`#define LAMBERT
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
}`,E_=`#define MATCAP
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
}`,R_=`#define MATCAP
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
}`,C_=`#define NORMAL
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
}`,P_=`#define NORMAL
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
}`,L_=`#define PHONG
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
}`,I_=`#define PHONG
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
}`,D_=`#define STANDARD
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
}`,U_=`#define STANDARD
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
}`,N_=`#define TOON
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
}`,O_=`#define TOON
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
}`,F_=`uniform float size;
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
}`,B_=`uniform vec3 diffuse;
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
}`,k_=`#include <common>
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
}`,z_=`uniform vec3 color;
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
}`,G_=`uniform float rotation;
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
}`,V_=`uniform vec3 diffuse;
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
}`,_t={alphahash_fragment:ug,alphahash_pars_fragment:hg,alphamap_fragment:fg,alphamap_pars_fragment:dg,alphatest_fragment:pg,alphatest_pars_fragment:mg,aomap_fragment:gg,aomap_pars_fragment:xg,batching_pars_vertex:_g,batching_vertex:yg,begin_vertex:vg,beginnormal_vertex:bg,bsdfs:Sg,iridescence_fragment:Mg,bumpmap_pars_fragment:Tg,clipping_planes_fragment:wg,clipping_planes_pars_fragment:Ag,clipping_planes_pars_vertex:Eg,clipping_planes_vertex:Rg,color_fragment:Cg,color_pars_fragment:Pg,color_pars_vertex:Lg,color_vertex:Ig,common:Dg,cube_uv_reflection_fragment:Ug,defaultnormal_vertex:Ng,displacementmap_pars_vertex:Og,displacementmap_vertex:Fg,emissivemap_fragment:Bg,emissivemap_pars_fragment:kg,colorspace_fragment:zg,colorspace_pars_fragment:Gg,envmap_fragment:Vg,envmap_common_pars_fragment:Hg,envmap_pars_fragment:Wg,envmap_pars_vertex:Xg,envmap_physical_pars_fragment:ix,envmap_vertex:qg,fog_vertex:Yg,fog_pars_vertex:Zg,fog_fragment:Kg,fog_pars_fragment:jg,gradientmap_pars_fragment:Jg,lightmap_fragment:$g,lightmap_pars_fragment:Qg,lights_lambert_fragment:ex,lights_lambert_pars_fragment:tx,lights_pars_begin:nx,lights_toon_fragment:sx,lights_toon_pars_fragment:rx,lights_phong_fragment:ox,lights_phong_pars_fragment:ax,lights_physical_fragment:lx,lights_physical_pars_fragment:cx,lights_fragment_begin:ux,lights_fragment_maps:hx,lights_fragment_end:fx,logdepthbuf_fragment:dx,logdepthbuf_pars_fragment:px,logdepthbuf_pars_vertex:mx,logdepthbuf_vertex:gx,map_fragment:xx,map_pars_fragment:_x,map_particle_fragment:yx,map_particle_pars_fragment:vx,metalnessmap_fragment:bx,metalnessmap_pars_fragment:Sx,morphcolor_vertex:Mx,morphnormal_vertex:Tx,morphtarget_pars_vertex:wx,morphtarget_vertex:Ax,normal_fragment_begin:Ex,normal_fragment_maps:Rx,normal_pars_fragment:Cx,normal_pars_vertex:Px,normal_vertex:Lx,normalmap_pars_fragment:Ix,clearcoat_normal_fragment_begin:Dx,clearcoat_normal_fragment_maps:Ux,clearcoat_pars_fragment:Nx,iridescence_pars_fragment:Ox,opaque_fragment:Fx,packing:Bx,premultiplied_alpha_fragment:kx,project_vertex:zx,dithering_fragment:Gx,dithering_pars_fragment:Vx,roughnessmap_fragment:Hx,roughnessmap_pars_fragment:Wx,shadowmap_pars_fragment:Xx,shadowmap_pars_vertex:qx,shadowmap_vertex:Yx,shadowmask_pars_fragment:Zx,skinbase_vertex:Kx,skinning_pars_vertex:jx,skinning_vertex:Jx,skinnormal_vertex:$x,specularmap_fragment:Qx,specularmap_pars_fragment:e_,tonemapping_fragment:t_,tonemapping_pars_fragment:n_,transmission_fragment:i_,transmission_pars_fragment:s_,uv_pars_fragment:r_,uv_pars_vertex:o_,uv_vertex:a_,worldpos_vertex:l_,background_vert:c_,background_frag:u_,backgroundCube_vert:h_,backgroundCube_frag:f_,cube_vert:d_,cube_frag:p_,depth_vert:m_,depth_frag:g_,distanceRGBA_vert:x_,distanceRGBA_frag:__,equirect_vert:y_,equirect_frag:v_,linedashed_vert:b_,linedashed_frag:S_,meshbasic_vert:M_,meshbasic_frag:T_,meshlambert_vert:w_,meshlambert_frag:A_,meshmatcap_vert:E_,meshmatcap_frag:R_,meshnormal_vert:C_,meshnormal_frag:P_,meshphong_vert:L_,meshphong_frag:I_,meshphysical_vert:D_,meshphysical_frag:U_,meshtoon_vert:N_,meshtoon_frag:O_,points_vert:F_,points_frag:B_,shadow_vert:k_,shadow_frag:z_,sprite_vert:G_,sprite_frag:V_},Be={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new bt},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new bt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new bt},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0},uvTransform:{value:new bt}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new bt},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0}}},li={basic:{uniforms:_n([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:_n([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Ye(0)}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:_n([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:_n([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:_n([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new Ye(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:_n([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:_n([Be.points,Be.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:_n([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:_n([Be.common,Be.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:_n([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:_n([Be.sprite,Be.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distanceRGBA:{uniforms:_n([Be.common,Be.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distanceRGBA_vert,fragmentShader:_t.distanceRGBA_frag},shadow:{uniforms:_n([Be.lights,Be.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};li.physical={uniforms:_n([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new bt},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new bt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new bt},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new bt},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new bt},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new bt},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new bt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};var Ma={r:0,b:0,g:0};function H_(s,e,t,n,i,r,o){let a=new Ye(0),l=r===!0?0:1,c,u,f=null,d=0,p=null;function _(g,m){let M=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v===null?x(a,l):v&&v.isColor&&(x(v,1),M=!0);let A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||M)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===yl)?(u===void 0&&(u=new ot(new yn(1,1,1),new Jt({name:"BackgroundCubeMaterial",uniforms:wr(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(B,U,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=Mt.getTransfer(v.colorSpace)!==It,(f!==v||d!==v.version||p!==s.toneMapping)&&(u.material.needsUpdate=!0,f=v,d=v.version,p=s.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ot(new zt(2,2),new Jt({name:"BackgroundMaterial",uniforms:wr(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=Mt.getTransfer(v.colorSpace)!==It,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||d!==v.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,f=v,d=v.version,p=s.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function x(g,m){g.getRGB(Ma,pp(s)),n.buffers.color.setClear(Ma.r,Ma.g,Ma.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(g,m=1){a.set(g),l=m,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,x(a,l)},render:_}}function W_(s,e,t,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=g(null),c=l,u=!1;function f(Y,re,ue,K,W){let ee=!1;if(o){let ge=x(K,ue,re);c!==ge&&(c=ge,p(c.object)),ee=m(Y,K,ue,W),ee&&M(Y,K,ue,W)}else{let ge=re.wireframe===!0;(c.geometry!==K.id||c.program!==ue.id||c.wireframe!==ge)&&(c.geometry=K.id,c.program=ue.id,c.wireframe=ge,ee=!0)}W!==null&&t.update(W,s.ELEMENT_ARRAY_BUFFER),(ee||u)&&(u=!1,J(Y,re,ue,K),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function p(Y){return n.isWebGL2?s.bindVertexArray(Y):r.bindVertexArrayOES(Y)}function _(Y){return n.isWebGL2?s.deleteVertexArray(Y):r.deleteVertexArrayOES(Y)}function x(Y,re,ue){let K=ue.wireframe===!0,W=a[Y.id];W===void 0&&(W={},a[Y.id]=W);let ee=W[re.id];ee===void 0&&(ee={},W[re.id]=ee);let ge=ee[K];return ge===void 0&&(ge=g(d()),ee[K]=ge),ge}function g(Y){let re=[],ue=[],K=[];for(let W=0;W<i;W++)re[W]=0,ue[W]=0,K[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:re,enabledAttributes:ue,attributeDivisors:K,object:Y,attributes:{},index:null}}function m(Y,re,ue,K){let W=c.attributes,ee=re.attributes,ge=0,ye=ue.getAttributes();for(let de in ye)if(ye[de].location>=0){let O=W[de],pe=ee[de];if(pe===void 0&&(de==="instanceMatrix"&&Y.instanceMatrix&&(pe=Y.instanceMatrix),de==="instanceColor"&&Y.instanceColor&&(pe=Y.instanceColor)),O===void 0||O.attribute!==pe||pe&&O.data!==pe.data)return!0;ge++}return c.attributesNum!==ge||c.index!==K}function M(Y,re,ue,K){let W={},ee=re.attributes,ge=0,ye=ue.getAttributes();for(let de in ye)if(ye[de].location>=0){let O=ee[de];O===void 0&&(de==="instanceMatrix"&&Y.instanceMatrix&&(O=Y.instanceMatrix),de==="instanceColor"&&Y.instanceColor&&(O=Y.instanceColor));let pe={};pe.attribute=O,O&&O.data&&(pe.data=O.data),W[de]=pe,ge++}c.attributes=W,c.attributesNum=ge,c.index=K}function v(){let Y=c.newAttributes;for(let re=0,ue=Y.length;re<ue;re++)Y[re]=0}function A(Y){B(Y,0)}function B(Y,re){let ue=c.newAttributes,K=c.enabledAttributes,W=c.attributeDivisors;ue[Y]=1,K[Y]===0&&(s.enableVertexAttribArray(Y),K[Y]=1),W[Y]!==re&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](Y,re),W[Y]=re)}function U(){let Y=c.newAttributes,re=c.enabledAttributes;for(let ue=0,K=re.length;ue<K;ue++)re[ue]!==Y[ue]&&(s.disableVertexAttribArray(ue),re[ue]=0)}function D(Y,re,ue,K,W,ee,ge){ge===!0?s.vertexAttribIPointer(Y,re,ue,W,ee):s.vertexAttribPointer(Y,re,ue,K,W,ee)}function J(Y,re,ue,K){if(n.isWebGL2===!1&&(Y.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let W=K.attributes,ee=ue.getAttributes(),ge=re.defaultAttributeValues;for(let ye in ee){let de=ee[ye];if(de.location>=0){let $=W[ye];if($===void 0&&(ye==="instanceMatrix"&&Y.instanceMatrix&&($=Y.instanceMatrix),ye==="instanceColor"&&Y.instanceColor&&($=Y.instanceColor)),$!==void 0){let O=$.normalized,pe=$.itemSize,ke=t.get($);if(ke===void 0)continue;let we=ke.buffer,Ke=ke.type,$e=ke.bytesPerElement,He=n.isWebGL2===!0&&(Ke===s.INT||Ke===s.UNSIGNED_INT||$.gpuType===tp);if($.isInterleavedBufferAttribute){let it=$.data,H=it.stride,Me=$.offset;if(it.isInstancedInterleavedBuffer){for(let ve=0;ve<de.locationSize;ve++)B(de.location+ve,it.meshPerAttribute);Y.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let ve=0;ve<de.locationSize;ve++)A(de.location+ve);s.bindBuffer(s.ARRAY_BUFFER,we);for(let ve=0;ve<de.locationSize;ve++)D(de.location+ve,pe/de.locationSize,Ke,O,H*$e,(Me+pe/de.locationSize*ve)*$e,He)}else{if($.isInstancedBufferAttribute){for(let it=0;it<de.locationSize;it++)B(de.location+it,$.meshPerAttribute);Y.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let it=0;it<de.locationSize;it++)A(de.location+it);s.bindBuffer(s.ARRAY_BUFFER,we);for(let it=0;it<de.locationSize;it++)D(de.location+it,pe/de.locationSize,Ke,O,pe*$e,pe/de.locationSize*it*$e,He)}}else if(ge!==void 0){let O=ge[ye];if(O!==void 0)switch(O.length){case 2:s.vertexAttrib2fv(de.location,O);break;case 3:s.vertexAttrib3fv(de.location,O);break;case 4:s.vertexAttrib4fv(de.location,O);break;default:s.vertexAttrib1fv(de.location,O)}}}}U()}function R(){z();for(let Y in a){let re=a[Y];for(let ue in re){let K=re[ue];for(let W in K)_(K[W].object),delete K[W];delete re[ue]}delete a[Y]}}function P(Y){if(a[Y.id]===void 0)return;let re=a[Y.id];for(let ue in re){let K=re[ue];for(let W in K)_(K[W].object),delete K[W];delete re[ue]}delete a[Y.id]}function te(Y){for(let re in a){let ue=a[re];if(ue[Y.id]===void 0)continue;let K=ue[Y.id];for(let W in K)_(K[W].object),delete K[W];delete ue[Y.id]}}function z(){Ce(),u=!0,c!==l&&(c=l,p(c.object))}function Ce(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:z,resetDefaultState:Ce,dispose:R,releaseStatesOfGeometry:P,releaseStatesOfProgram:te,initAttributes:v,enableAttribute:A,disableUnusedAttributes:U}}function X_(s,e,t,n){let i=n.isWebGL2,r;function o(u){r=u}function a(u,f){s.drawArrays(r,u,f),t.update(f,r,1)}function l(u,f,d){if(d===0)return;let p,_;if(i)p=s,_="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](r,u,f,d),t.update(f,r,d)}function c(u,f,d){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<d;_++)this.render(u[_],f[_]);else{p.multiDrawArraysWEBGL(r,u,0,f,0,d);let _=0;for(let x=0;x<d;x++)_+=f[x];t.update(_,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function q_(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(D){if(D==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),g=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),m=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,A=o||e.has("OES_texture_float"),B=v&&A,U=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:g,maxVaryings:m,maxFragmentUniforms:M,vertexTextures:v,floatFragmentTextures:A,floatVertexTextures:B,maxSamples:U}}function Y_(s){let e=this,t=null,n=0,i=!1,r=!1,o=new $n,a=new bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let p=f.length!==0||d||n!==0||i;return i=d,n=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,p){let _=f.clippingPlanes,x=f.clipIntersection,g=f.clipShadows,m=s.get(f);if(!i||_===null||_.length===0||r&&!g)r?u(null):c();else{let M=r?0:n,v=M*4,A=m.clippingState||null;l.value=A,A=u(_,d,v,p);for(let B=0;B!==v;++B)A[B]=t[B];m.clippingState=A,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,p,_){let x=f!==null?f.length:0,g=null;if(x!==0){if(g=l.value,_!==!0||g===null){let m=p+x*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let v=0,A=p;v!==x;++v,A+=4)o.copy(f[v]).applyMatrix4(M,a),o.normal.toArray(g,A),g[A+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function Z_(s){let e=new WeakMap;function t(o,a){return a===qc?o.mapping=yr:a===Yc&&(o.mapping=vr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===qc||a===Yc)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new eu(l.height/2);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var $i=class extends Ka{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},fr=4,sd=[.125,.215,.35,.446,.526,.582],Ms=20,Pc=new $i,rd=new Ye,Lc=null,Ic=0,Dc=0,bs=(1+Math.sqrt(5))/2,or=1/bs,od=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,bs,or),new L(0,bs,-or),new L(or,0,bs),new L(-or,0,bs),new L(bs,or,0),new L(-bs,or,0)],Ar=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Lc=this._renderer.getRenderTarget(),Ic=this._renderer.getActiveCubeFace(),Dc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ld(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Lc,Ic,Dc),e.scissorTest=!1,Ta(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===yr||e.mapping===vr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Lc=this._renderer.getRenderTarget(),Ic=this._renderer.getActiveCubeFace(),Dc=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:Qn,format:Bn,colorSpace:Qt,depthBuffer:!1},i=ad(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ad(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=K_(r)),this._blurMaterial=j_(r,e,t)}return i}_compileMaterial(e){let t=new ot(this._lodPlanes[0],e);this._renderer.compile(t,Pc)}_sceneToCubeUV(e,t,n,i){let a=new jt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(rd),u.toneMapping=Zi,u.autoClear=!1;let p=new Xt({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),_=new ot(new yn,p),x=!1,g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,x=!0):(p.color.copy(rd),x=!0);for(let m=0;m<6;m++){let M=m%3;M===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):M===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let v=this._cubeSize;Ta(i,M*v,m>2?v:0,v,v),u.setRenderTarget(i),x&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===yr||e.mapping===vr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=cd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ld());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new ot(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Ta(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Pc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=od[(i-1)%od.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,f=new ot(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ms-1),x=r/_,g=isFinite(r)?1+Math.floor(u*x):Ms;g>Ms&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ms}`);let m=[],M=0;for(let D=0;D<Ms;++D){let J=D/x,R=Math.exp(-J*J/2);m.push(R),D===0?M+=R:D<g&&(M+=2*R)}for(let D=0;D<m.length;D++)m[D]=m[D]/M;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:v}=this;d.dTheta.value=_,d.mipInt.value=v-n;let A=this._sizeLods[i],B=3*A*(i>v-fr?i-v+fr:0),U=4*(this._cubeSize-A);Ta(t,B,U,3*A,2*A),l.setRenderTarget(t),l.render(f,Pc)}};function K_(s){let e=[],t=[],n=[],i=s,r=s-fr+1+sd.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);t.push(a);let l=1/a;o>s-fr?l=sd[o-s+fr-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,x=3,g=2,m=1,M=new Float32Array(x*_*p),v=new Float32Array(g*_*p),A=new Float32Array(m*_*p);for(let U=0;U<p;U++){let D=U%3*2/3-1,J=U>2?0:-1,R=[D,J,0,D+2/3,J,0,D+2/3,J+1,0,D,J,0,D+2/3,J+1,0,D,J+1,0];M.set(R,x*_*U),v.set(d,g*_*U);let P=[U,U,U,U,U,U];A.set(P,m*_*U)}let B=new Lt;B.setAttribute("position",new Bt(M,x)),B.setAttribute("uv",new Bt(v,g)),B.setAttribute("faceIndex",new Bt(A,m)),e.push(B),i>fr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ad(s,e,t){let n=new ln(s,e,t);return n.texture.mapping=yl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ta(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function j_(s,e,t){let n=new Float32Array(Ms),i=new L(0,1,0);return new Jt({name:"SphericalGaussianBlur",defines:{n:Ms,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Vu(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function ld(){return new Jt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vu(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function cd(){return new Jt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Vu(){return`

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
	`}function J_(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===qc||l===Yc,u=l===yr||l===vr;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Ar(s)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{let f=a.image;if(c&&f&&f.height>0||u&&f&&i(f)){t===null&&(t=new Ar(s));let d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function $_(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Q_(s,e,t,n){let i={},r=new WeakMap;function o(f){let d=f.target;d.index!==null&&e.remove(d.index);for(let _ in d.attributes)e.remove(d.attributes[_]);for(let _ in d.morphAttributes){let x=d.morphAttributes[_];for(let g=0,m=x.length;g<m;g++)e.remove(x[g])}d.removeEventListener("dispose",o),delete i[d.id];let p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(f){let d=f.attributes;for(let _ in d)e.update(d[_],s.ARRAY_BUFFER);let p=f.morphAttributes;for(let _ in p){let x=p[_];for(let g=0,m=x.length;g<m;g++)e.update(x[g],s.ARRAY_BUFFER)}}function c(f){let d=[],p=f.index,_=f.attributes.position,x=0;if(p!==null){let M=p.array;x=p.version;for(let v=0,A=M.length;v<A;v+=3){let B=M[v+0],U=M[v+1],D=M[v+2];d.push(B,U,U,D,D,B)}}else if(_!==void 0){let M=_.array;x=_.version;for(let v=0,A=M.length/3-1;v<A;v+=3){let B=v+0,U=v+1,D=v+2;d.push(B,U,U,D,D,B)}}else return;let g=new(fp(d)?Za:Ya)(d,1);g.version=x;let m=r.get(f);m&&e.remove(m),r.set(f,g)}function u(f){let d=r.get(f);if(d){let p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function ey(s,e,t,n){let i=n.isWebGL2,r;function o(p){r=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function u(p,_){s.drawElements(r,_,a,p*l),t.update(_,r,1)}function f(p,_,x){if(x===0)return;let g,m;if(i)g=s,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](r,_,a,p*l,x),t.update(_,r,x)}function d(p,_,x){if(x===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<x;m++)this.render(p[m]/l,_[m]);else{g.multiDrawElementsWEBGL(r,_,0,a,p,0,x);let m=0;for(let M=0;M<x;M++)m+=_[M];t.update(m,r,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=d}function ty(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function ny(s,e){return s[0]-e[0]}function iy(s,e){return Math.abs(e[1])-Math.abs(s[1])}function sy(s,e,t){let n={},i=new Float32Array(8),r=new WeakMap,o=new Dt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){let d=c.morphTargetInfluences;if(e.isWebGL2===!0){let p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=p!==void 0?p.length:0,x=r.get(u);if(x===void 0||x.count!==_){let Y=function(){z.dispose(),r.delete(u),u.removeEventListener("dispose",Y)};x!==void 0&&x.texture.dispose();let M=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,B=u.morphAttributes.position||[],U=u.morphAttributes.normal||[],D=u.morphAttributes.color||[],J=0;M===!0&&(J=1),v===!0&&(J=2),A===!0&&(J=3);let R=u.attributes.position.count*J,P=1;R>e.maxTextureSize&&(P=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);let te=new Float32Array(R*P*4*_),z=new Xa(te,R,P,_);z.type=Ti,z.needsUpdate=!0;let Ce=J*4;for(let re=0;re<_;re++){let ue=B[re],K=U[re],W=D[re],ee=R*P*4*re;for(let ge=0;ge<ue.count;ge++){let ye=ge*Ce;M===!0&&(o.fromBufferAttribute(ue,ge),te[ee+ye+0]=o.x,te[ee+ye+1]=o.y,te[ee+ye+2]=o.z,te[ee+ye+3]=0),v===!0&&(o.fromBufferAttribute(K,ge),te[ee+ye+4]=o.x,te[ee+ye+5]=o.y,te[ee+ye+6]=o.z,te[ee+ye+7]=0),A===!0&&(o.fromBufferAttribute(W,ge),te[ee+ye+8]=o.x,te[ee+ye+9]=o.y,te[ee+ye+10]=o.z,te[ee+ye+11]=W.itemSize===4?o.w:1)}}x={count:_,texture:z,size:new ce(R,P)},r.set(u,x),u.addEventListener("dispose",Y)}let g=0;for(let M=0;M<d.length;M++)g+=d[M];let m=u.morphTargetsRelative?1:1-g;f.getUniforms().setValue(s,"morphTargetBaseInfluence",m),f.getUniforms().setValue(s,"morphTargetInfluences",d),f.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}else{let p=d===void 0?0:d.length,_=n[u.id];if(_===void 0||_.length!==p){_=[];for(let v=0;v<p;v++)_[v]=[v,0];n[u.id]=_}for(let v=0;v<p;v++){let A=_[v];A[0]=v,A[1]=d[v]}_.sort(iy);for(let v=0;v<8;v++)v<p&&_[v][1]?(a[v][0]=_[v][0],a[v][1]=_[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(ny);let x=u.morphAttributes.position,g=u.morphAttributes.normal,m=0;for(let v=0;v<8;v++){let A=a[v],B=A[0],U=A[1];B!==Number.MAX_SAFE_INTEGER&&U?(x&&u.getAttribute("morphTarget"+v)!==x[B]&&u.setAttribute("morphTarget"+v,x[B]),g&&u.getAttribute("morphNormal"+v)!==g[B]&&u.setAttribute("morphNormal"+v,g[B]),i[v]=U,m+=U):(x&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),g&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}let M=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(s,"morphTargetBaseInfluence",M),f.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function ry(s,e,t,n){let i=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,f=e.get(l,u);if(i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return f}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Ja=class extends en{constructor(e,t,n,i,r,o,a,l,c,u){if(u=u!==void 0?u:As,u!==As&&u!==br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===As&&(n=qi),n===void 0&&u===br&&(n=ws),super(null,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:$t,this.minFilter=l!==void 0?l:$t,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},gp=new en,xp=new Ja(1,1);xp.compareFunction=hp;var _p=new Xa,yp=new $c,vp=new ja,ud=[],hd=[],fd=new Float32Array(16),dd=new Float32Array(9),pd=new Float32Array(4);function Br(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=ud[i];if(r===void 0&&(r=new Float32Array(i),ud[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function tn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function nn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Sl(s,e){let t=hd[e];t===void 0&&(t=new Int32Array(e),hd[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function oy(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function ay(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;s.uniform2fv(this.addr,e),nn(t,e)}}function ly(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;s.uniform3fv(this.addr,e),nn(t,e)}}function cy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;s.uniform4fv(this.addr,e),nn(t,e)}}function uy(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;pd.set(n),s.uniformMatrix2fv(this.addr,!1,pd),nn(t,n)}}function hy(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;dd.set(n),s.uniformMatrix3fv(this.addr,!1,dd),nn(t,n)}}function fy(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;fd.set(n),s.uniformMatrix4fv(this.addr,!1,fd),nn(t,n)}}function dy(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function py(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;s.uniform2iv(this.addr,e),nn(t,e)}}function my(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;s.uniform3iv(this.addr,e),nn(t,e)}}function gy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;s.uniform4iv(this.addr,e),nn(t,e)}}function xy(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function _y(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;s.uniform2uiv(this.addr,e),nn(t,e)}}function yy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;s.uniform3uiv(this.addr,e),nn(t,e)}}function vy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;s.uniform4uiv(this.addr,e),nn(t,e)}}function by(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?xp:gp;t.setTexture2D(e||r,i)}function Sy(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||yp,i)}function My(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||vp,i)}function Ty(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||_p,i)}function wy(s){switch(s){case 5126:return oy;case 35664:return ay;case 35665:return ly;case 35666:return cy;case 35674:return uy;case 35675:return hy;case 35676:return fy;case 5124:case 35670:return dy;case 35667:case 35671:return py;case 35668:case 35672:return my;case 35669:case 35673:return gy;case 5125:return xy;case 36294:return _y;case 36295:return yy;case 36296:return vy;case 35678:case 36198:case 36298:case 36306:case 35682:return by;case 35679:case 36299:case 36307:return Sy;case 35680:case 36300:case 36308:case 36293:return My;case 36289:case 36303:case 36311:case 36292:return Ty}}function Ay(s,e){s.uniform1fv(this.addr,e)}function Ey(s,e){let t=Br(e,this.size,2);s.uniform2fv(this.addr,t)}function Ry(s,e){let t=Br(e,this.size,3);s.uniform3fv(this.addr,t)}function Cy(s,e){let t=Br(e,this.size,4);s.uniform4fv(this.addr,t)}function Py(s,e){let t=Br(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Ly(s,e){let t=Br(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Iy(s,e){let t=Br(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Dy(s,e){s.uniform1iv(this.addr,e)}function Uy(s,e){s.uniform2iv(this.addr,e)}function Ny(s,e){s.uniform3iv(this.addr,e)}function Oy(s,e){s.uniform4iv(this.addr,e)}function Fy(s,e){s.uniform1uiv(this.addr,e)}function By(s,e){s.uniform2uiv(this.addr,e)}function ky(s,e){s.uniform3uiv(this.addr,e)}function zy(s,e){s.uniform4uiv(this.addr,e)}function Gy(s,e,t){let n=this.cache,i=e.length,r=Sl(t,i);tn(n,r)||(s.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||gp,r[o])}function Vy(s,e,t){let n=this.cache,i=e.length,r=Sl(t,i);tn(n,r)||(s.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||yp,r[o])}function Hy(s,e,t){let n=this.cache,i=e.length,r=Sl(t,i);tn(n,r)||(s.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||vp,r[o])}function Wy(s,e,t){let n=this.cache,i=e.length,r=Sl(t,i);tn(n,r)||(s.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||_p,r[o])}function Xy(s){switch(s){case 5126:return Ay;case 35664:return Ey;case 35665:return Ry;case 35666:return Cy;case 35674:return Py;case 35675:return Ly;case 35676:return Iy;case 5124:case 35670:return Dy;case 35667:case 35671:return Uy;case 35668:case 35672:return Ny;case 35669:case 35673:return Oy;case 5125:return Fy;case 36294:return By;case 36295:return ky;case 36296:return zy;case 35678:case 36198:case 36298:case 36306:case 35682:return Gy;case 35679:case 36299:case 36307:return Vy;case 35680:case 36300:case 36308:case 36293:return Hy;case 36289:case 36303:case 36311:case 36292:return Wy}}var tu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=wy(t.type)}},nu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Xy(t.type)}},iu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},Uc=/(\w+)(\])?(\[|\.)?/g;function md(s,e){s.seq.push(e),s.map[e.id]=e}function qy(s,e,t){let n=s.name,i=n.length;for(Uc.lastIndex=0;;){let r=Uc.exec(n),o=Uc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){md(t,c===void 0?new tu(a,s,e):new nu(a,s,e));break}else{let f=t.map[a];f===void 0&&(f=new iu(a),md(t,f)),t=f}}}var xr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);qy(r,o,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function gd(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var Yy=37297,Zy=0;function Ky(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function jy(s){let e=Mt.getPrimaries(Mt.workingColorSpace),t=Mt.getPrimaries(s),n;switch(e===t?n="":e===Ga&&t===za?n="LinearDisplayP3ToLinearSRGB":e===za&&t===Ga&&(n="LinearSRGBToLinearDisplayP3"),s){case Qt:case bl:return[n,"LinearTransferOETF"];case qe:case zu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function xd(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Ky(s.getShaderSource(e),o)}else return i}function Jy(s,e){let t=jy(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function $y(s,e){let t;switch(e){case Uu:t="Linear";break;case Nu:t="Reinhard";break;case Ou:t="OptimizedCineon";break;case Io:t="ACESFilmic";break;case Fu:t="AgX";break;case l0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Qy(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(dr).join(`
`)}function ev(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(dr).join(`
`)}function tv(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function nv(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function dr(s){return s!==""}function _d(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yd(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var iv=/^[ \t]*#include +<([\w\d./]+)>/gm;function su(s){return s.replace(iv,rv)}var sv=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function rv(s,e){let t=_t[e];if(t===void 0){let n=sv.get(e);if(n!==void 0)t=_t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return su(t)}var ov=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vd(s){return s.replace(ov,av)}function av(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function bd(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function lv(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===$d?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Du?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Mi&&(e="SHADOWMAP_TYPE_VSM"),e}function cv(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case yr:case vr:e="ENVMAP_TYPE_CUBE";break;case yl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function uv(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case vr:e="ENVMAP_MODE_REFRACTION";break}return e}function hv(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Qd:e="ENVMAP_BLENDING_MULTIPLY";break;case o0:e="ENVMAP_BLENDING_MIX";break;case a0:e="ENVMAP_BLENDING_ADD";break}return e}function fv(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function dv(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=lv(t),c=cv(t),u=uv(t),f=hv(t),d=fv(t),p=t.isWebGL2?"":Qy(t),_=ev(t),x=tv(r),g=i.createProgram(),m,M,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(dr).join(`
`),m.length>0&&(m+=`
`),M=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(dr).join(`
`),M.length>0&&(M+=`
`)):(m=[bd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),M=[p,bd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zi?"#define TONE_MAPPING":"",t.toneMapping!==Zi?_t.tonemapping_pars_fragment:"",t.toneMapping!==Zi?$y("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,Jy("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(dr).join(`
`)),o=su(o),o=_d(o,t),o=yd(o,t),a=su(a),a=_d(a,t),a=yd(a,t),o=vd(o),a=vd(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===zf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let A=v+m+o,B=v+M+a,U=gd(i,i.VERTEX_SHADER,A),D=gd(i,i.FRAGMENT_SHADER,B);i.attachShader(g,U),i.attachShader(g,D),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function J(z){if(s.debug.checkShaderErrors){let Ce=i.getProgramInfoLog(g).trim(),Y=i.getShaderInfoLog(U).trim(),re=i.getShaderInfoLog(D).trim(),ue=!0,K=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(ue=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,U,D);else{let W=xd(i,U,"vertex"),ee=xd(i,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Program Info Log: `+Ce+`
`+W+`
`+ee)}else Ce!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Ce):(Y===""||re==="")&&(K=!1);K&&(z.diagnostics={runnable:ue,programLog:Ce,vertexShader:{log:Y,prefix:m},fragmentShader:{log:re,prefix:M}})}i.deleteShader(U),i.deleteShader(D),R=new xr(i,g),P=nv(i,g)}let R;this.getUniforms=function(){return R===void 0&&J(this),R};let P;this.getAttributes=function(){return P===void 0&&J(this),P};let te=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return te===!1&&(te=i.getProgramParameter(g,Yy)),te},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Zy++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=U,this.fragmentShader=D,this}var pv=0,ru=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ou(e),t.set(e,n)),n}},ou=class{constructor(e){this.id=pv++,this.code=e,this.usedTimes=0}};function mv(s,e,t,n,i,r,o){let a=new _o,l=new ru,c=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,d=i.vertexTextures,p=i.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(R){return R===0?"uv":`uv${R}`}function g(R,P,te,z,Ce){let Y=z.fog,re=Ce.geometry,ue=R.isMeshStandardMaterial?z.environment:null,K=(R.isMeshStandardMaterial?t:e).get(R.envMap||ue),W=K&&K.mapping===yl?K.image.height:null,ee=_[R.type];R.precision!==null&&(p=i.getMaxPrecision(R.precision),p!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",p,"instead."));let ge=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,ye=ge!==void 0?ge.length:0,de=0;re.morphAttributes.position!==void 0&&(de=1),re.morphAttributes.normal!==void 0&&(de=2),re.morphAttributes.color!==void 0&&(de=3);let $,O,pe,ke;if(ee){let We=li[ee];$=We.vertexShader,O=We.fragmentShader}else $=R.vertexShader,O=R.fragmentShader,l.update(R),pe=l.getVertexShaderID(R),ke=l.getFragmentShaderID(R);let we=s.getRenderTarget(),Ke=Ce.isInstancedMesh===!0,$e=Ce.isBatchedMesh===!0,He=!!R.map,it=!!R.matcap,H=!!K,Me=!!R.aoMap,ve=!!R.lightMap,Ie=!!R.bumpMap,_e=!!R.normalMap,Je=!!R.displacementMap,Fe=!!R.emissiveMap,C=!!R.metalnessMap,E=!!R.roughnessMap,ne=R.anisotropy>0,Te=R.clearcoat>0,Pe=R.iridescence>0,Se=R.sheen>0,Ze=R.transmission>0,Ne=ne&&!!R.anisotropyMap,ze=Te&&!!R.clearcoatMap,Qe=Te&&!!R.clearcoatNormalMap,et=Te&&!!R.clearcoatRoughnessMap,Re=Pe&&!!R.iridescenceMap,ct=Pe&&!!R.iridescenceThicknessMap,G=Se&&!!R.sheenColorMap,Ae=Se&&!!R.sheenRoughnessMap,Oe=!!R.specularMap,Le=!!R.specularColorMap,j=!!R.specularIntensityMap,se=Ze&&!!R.transmissionMap,he=Ze&&!!R.thicknessMap,Q=!!R.gradientMap,F=!!R.alphaMap,T=R.alphaTest>0,Z=!!R.alphaHash,X=!!R.extensions,me=!!re.attributes.uv1,V=!!re.attributes.uv2,oe=!!re.attributes.uv3,Ee=Zi;return R.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(Ee=s.toneMapping),{isWebGL2:u,shaderID:ee,shaderType:R.type,shaderName:R.name,vertexShader:$,fragmentShader:O,defines:R.defines,customVertexShaderID:pe,customFragmentShaderID:ke,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:p,batching:$e,instancing:Ke,instancingColor:Ke&&Ce.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:we===null?s.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:Qt,map:He,matcap:it,envMap:H,envMapMode:H&&K.mapping,envMapCubeUVHeight:W,aoMap:Me,lightMap:ve,bumpMap:Ie,normalMap:_e,displacementMap:d&&Je,emissiveMap:Fe,normalMapObjectSpace:_e&&R.normalMapType===b0,normalMapTangentSpace:_e&&R.normalMapType===up,metalnessMap:C,roughnessMap:E,anisotropy:ne,anisotropyMap:Ne,clearcoat:Te,clearcoatMap:ze,clearcoatNormalMap:Qe,clearcoatRoughnessMap:et,iridescence:Pe,iridescenceMap:Re,iridescenceThicknessMap:ct,sheen:Se,sheenColorMap:G,sheenRoughnessMap:Ae,specularMap:Oe,specularColorMap:Le,specularIntensityMap:j,transmission:Ze,transmissionMap:se,thicknessMap:he,gradientMap:Q,opaque:R.transparent===!1&&R.blending===mr,alphaMap:F,alphaTest:T,alphaHash:Z,combine:R.combine,mapUv:He&&x(R.map.channel),aoMapUv:Me&&x(R.aoMap.channel),lightMapUv:ve&&x(R.lightMap.channel),bumpMapUv:Ie&&x(R.bumpMap.channel),normalMapUv:_e&&x(R.normalMap.channel),displacementMapUv:Je&&x(R.displacementMap.channel),emissiveMapUv:Fe&&x(R.emissiveMap.channel),metalnessMapUv:C&&x(R.metalnessMap.channel),roughnessMapUv:E&&x(R.roughnessMap.channel),anisotropyMapUv:Ne&&x(R.anisotropyMap.channel),clearcoatMapUv:ze&&x(R.clearcoatMap.channel),clearcoatNormalMapUv:Qe&&x(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&x(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&x(R.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&x(R.iridescenceThicknessMap.channel),sheenColorMapUv:G&&x(R.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&x(R.sheenRoughnessMap.channel),specularMapUv:Oe&&x(R.specularMap.channel),specularColorMapUv:Le&&x(R.specularColorMap.channel),specularIntensityMapUv:j&&x(R.specularIntensityMap.channel),transmissionMapUv:se&&x(R.transmissionMap.channel),thicknessMapUv:he&&x(R.thicknessMap.channel),alphaMapUv:F&&x(R.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(_e||ne),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,vertexUv1s:me,vertexUv2s:V,vertexUv3s:oe,pointsUvs:Ce.isPoints===!0&&!!re.attributes.uv&&(He||F),fog:!!Y,useFog:R.fog===!0,fogExp2:Y&&Y.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:Ce.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:de,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:R.dithering,shadowMapEnabled:s.shadowMap.enabled&&te.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ee,useLegacyLights:s._useLegacyLights,decodeVideoTexture:He&&R.map.isVideoTexture===!0&&Mt.getTransfer(R.map.colorSpace)===It,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===vt,flipSided:R.side===pn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionDerivatives:X&&R.extensions.derivatives===!0,extensionFragDepth:X&&R.extensions.fragDepth===!0,extensionDrawBuffers:X&&R.extensions.drawBuffers===!0,extensionShaderTextureLOD:X&&R.extensions.shaderTextureLOD===!0,extensionClipCullDistance:X&&R.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()}}function m(R){let P=[];if(R.shaderID?P.push(R.shaderID):(P.push(R.customVertexShaderID),P.push(R.customFragmentShaderID)),R.defines!==void 0)for(let te in R.defines)P.push(te),P.push(R.defines[te]);return R.isRawShaderMaterial===!1&&(M(P,R),v(P,R),P.push(s.outputColorSpace)),P.push(R.customProgramCacheKey),P.join()}function M(R,P){R.push(P.precision),R.push(P.outputColorSpace),R.push(P.envMapMode),R.push(P.envMapCubeUVHeight),R.push(P.mapUv),R.push(P.alphaMapUv),R.push(P.lightMapUv),R.push(P.aoMapUv),R.push(P.bumpMapUv),R.push(P.normalMapUv),R.push(P.displacementMapUv),R.push(P.emissiveMapUv),R.push(P.metalnessMapUv),R.push(P.roughnessMapUv),R.push(P.anisotropyMapUv),R.push(P.clearcoatMapUv),R.push(P.clearcoatNormalMapUv),R.push(P.clearcoatRoughnessMapUv),R.push(P.iridescenceMapUv),R.push(P.iridescenceThicknessMapUv),R.push(P.sheenColorMapUv),R.push(P.sheenRoughnessMapUv),R.push(P.specularMapUv),R.push(P.specularColorMapUv),R.push(P.specularIntensityMapUv),R.push(P.transmissionMapUv),R.push(P.thicknessMapUv),R.push(P.combine),R.push(P.fogExp2),R.push(P.sizeAttenuation),R.push(P.morphTargetsCount),R.push(P.morphAttributeCount),R.push(P.numDirLights),R.push(P.numPointLights),R.push(P.numSpotLights),R.push(P.numSpotLightMaps),R.push(P.numHemiLights),R.push(P.numRectAreaLights),R.push(P.numDirLightShadows),R.push(P.numPointLightShadows),R.push(P.numSpotLightShadows),R.push(P.numSpotLightShadowsWithMaps),R.push(P.numLightProbes),R.push(P.shadowMapType),R.push(P.toneMapping),R.push(P.numClippingPlanes),R.push(P.numClipIntersection),R.push(P.depthPacking)}function v(R,P){a.disableAll(),P.isWebGL2&&a.enable(0),P.supportsVertexTextures&&a.enable(1),P.instancing&&a.enable(2),P.instancingColor&&a.enable(3),P.matcap&&a.enable(4),P.envMap&&a.enable(5),P.normalMapObjectSpace&&a.enable(6),P.normalMapTangentSpace&&a.enable(7),P.clearcoat&&a.enable(8),P.iridescence&&a.enable(9),P.alphaTest&&a.enable(10),P.vertexColors&&a.enable(11),P.vertexAlphas&&a.enable(12),P.vertexUv1s&&a.enable(13),P.vertexUv2s&&a.enable(14),P.vertexUv3s&&a.enable(15),P.vertexTangents&&a.enable(16),P.anisotropy&&a.enable(17),P.alphaHash&&a.enable(18),P.batching&&a.enable(19),R.push(a.mask),a.disableAll(),P.fog&&a.enable(0),P.useFog&&a.enable(1),P.flatShading&&a.enable(2),P.logarithmicDepthBuffer&&a.enable(3),P.skinning&&a.enable(4),P.morphTargets&&a.enable(5),P.morphNormals&&a.enable(6),P.morphColors&&a.enable(7),P.premultipliedAlpha&&a.enable(8),P.shadowMapEnabled&&a.enable(9),P.useLegacyLights&&a.enable(10),P.doubleSided&&a.enable(11),P.flipSided&&a.enable(12),P.useDepthPacking&&a.enable(13),P.dithering&&a.enable(14),P.transmission&&a.enable(15),P.sheen&&a.enable(16),P.opaque&&a.enable(17),P.pointsUvs&&a.enable(18),P.decodeVideoTexture&&a.enable(19),R.push(a.mask)}function A(R){let P=_[R.type],te;if(P){let z=li[P];te=os.clone(z.uniforms)}else te=R.uniforms;return te}function B(R,P){let te;for(let z=0,Ce=c.length;z<Ce;z++){let Y=c[z];if(Y.cacheKey===P){te=Y,++te.usedTimes;break}}return te===void 0&&(te=new dv(s,P,R,r),c.push(te)),te}function U(R){if(--R.usedTimes===0){let P=c.indexOf(R);c[P]=c[c.length-1],c.pop(),R.destroy()}}function D(R){l.remove(R)}function J(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:A,acquireProgram:B,releaseProgram:U,releaseShaderCache:D,programs:c,dispose:J}}function gv(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function xv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Sd(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Md(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(f,d,p,_,x,g){let m=s[e];return m===void 0?(m={id:f.id,object:f,geometry:d,material:p,groupOrder:_,renderOrder:f.renderOrder,z:x,group:g},s[e]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=p,m.groupOrder=_,m.renderOrder=f.renderOrder,m.z=x,m.group=g),e++,m}function a(f,d,p,_,x,g){let m=o(f,d,p,_,x,g);p.transmission>0?n.push(m):p.transparent===!0?i.push(m):t.push(m)}function l(f,d,p,_,x,g){let m=o(f,d,p,_,x,g);p.transmission>0?n.unshift(m):p.transparent===!0?i.unshift(m):t.unshift(m)}function c(f,d){t.length>1&&t.sort(f||xv),n.length>1&&n.sort(d||Sd),i.length>1&&i.sort(d||Sd)}function u(){for(let f=e,d=s.length;f<d;f++){let p=s[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function _v(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new Md,s.set(n,[o])):i>=r.length?(o=new Md,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function yv(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Ye};break;case"SpotLight":t={position:new L,direction:new L,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t}}}function vv(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var bv=0;function Sv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Mv(s,e){let t=new yv,n=vv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new L);let r=new L,o=new ft,a=new ft;function l(u,f){let d=0,p=0,_=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let x=0,g=0,m=0,M=0,v=0,A=0,B=0,U=0,D=0,J=0,R=0;u.sort(Sv);let P=f===!0?Math.PI:1;for(let z=0,Ce=u.length;z<Ce;z++){let Y=u[z],re=Y.color,ue=Y.intensity,K=Y.distance,W=Y.shadow&&Y.shadow.map?Y.shadow.map.texture:null;if(Y.isAmbientLight)d+=re.r*ue*P,p+=re.g*ue*P,_+=re.b*ue*P;else if(Y.isLightProbe){for(let ee=0;ee<9;ee++)i.probe[ee].addScaledVector(Y.sh.coefficients[ee],ue);R++}else if(Y.isDirectionalLight){let ee=t.get(Y);if(ee.color.copy(Y.color).multiplyScalar(Y.intensity*P),Y.castShadow){let ge=Y.shadow,ye=n.get(Y);ye.shadowBias=ge.bias,ye.shadowNormalBias=ge.normalBias,ye.shadowRadius=ge.radius,ye.shadowMapSize=ge.mapSize,i.directionalShadow[x]=ye,i.directionalShadowMap[x]=W,i.directionalShadowMatrix[x]=Y.shadow.matrix,A++}i.directional[x]=ee,x++}else if(Y.isSpotLight){let ee=t.get(Y);ee.position.setFromMatrixPosition(Y.matrixWorld),ee.color.copy(re).multiplyScalar(ue*P),ee.distance=K,ee.coneCos=Math.cos(Y.angle),ee.penumbraCos=Math.cos(Y.angle*(1-Y.penumbra)),ee.decay=Y.decay,i.spot[m]=ee;let ge=Y.shadow;if(Y.map&&(i.spotLightMap[D]=Y.map,D++,ge.updateMatrices(Y),Y.castShadow&&J++),i.spotLightMatrix[m]=ge.matrix,Y.castShadow){let ye=n.get(Y);ye.shadowBias=ge.bias,ye.shadowNormalBias=ge.normalBias,ye.shadowRadius=ge.radius,ye.shadowMapSize=ge.mapSize,i.spotShadow[m]=ye,i.spotShadowMap[m]=W,U++}m++}else if(Y.isRectAreaLight){let ee=t.get(Y);ee.color.copy(re).multiplyScalar(ue),ee.halfWidth.set(Y.width*.5,0,0),ee.halfHeight.set(0,Y.height*.5,0),i.rectArea[M]=ee,M++}else if(Y.isPointLight){let ee=t.get(Y);if(ee.color.copy(Y.color).multiplyScalar(Y.intensity*P),ee.distance=Y.distance,ee.decay=Y.decay,Y.castShadow){let ge=Y.shadow,ye=n.get(Y);ye.shadowBias=ge.bias,ye.shadowNormalBias=ge.normalBias,ye.shadowRadius=ge.radius,ye.shadowMapSize=ge.mapSize,ye.shadowCameraNear=ge.camera.near,ye.shadowCameraFar=ge.camera.far,i.pointShadow[g]=ye,i.pointShadowMap[g]=W,i.pointShadowMatrix[g]=Y.shadow.matrix,B++}i.point[g]=ee,g++}else if(Y.isHemisphereLight){let ee=t.get(Y);ee.skyColor.copy(Y.color).multiplyScalar(ue*P),ee.groundColor.copy(Y.groundColor).multiplyScalar(ue*P),i.hemi[v]=ee,v++}}M>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Be.LTC_FLOAT_1,i.rectAreaLTC2=Be.LTC_FLOAT_2):(i.rectAreaLTC1=Be.LTC_HALF_1,i.rectAreaLTC2=Be.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Be.LTC_FLOAT_1,i.rectAreaLTC2=Be.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Be.LTC_HALF_1,i.rectAreaLTC2=Be.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=_;let te=i.hash;(te.directionalLength!==x||te.pointLength!==g||te.spotLength!==m||te.rectAreaLength!==M||te.hemiLength!==v||te.numDirectionalShadows!==A||te.numPointShadows!==B||te.numSpotShadows!==U||te.numSpotMaps!==D||te.numLightProbes!==R)&&(i.directional.length=x,i.spot.length=m,i.rectArea.length=M,i.point.length=g,i.hemi.length=v,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=B,i.pointShadowMap.length=B,i.spotShadow.length=U,i.spotShadowMap.length=U,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=B,i.spotLightMatrix.length=U+D-J,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=J,i.numLightProbes=R,te.directionalLength=x,te.pointLength=g,te.spotLength=m,te.rectAreaLength=M,te.hemiLength=v,te.numDirectionalShadows=A,te.numPointShadows=B,te.numSpotShadows=U,te.numSpotMaps=D,te.numLightProbes=R,i.version=bv++)}function c(u,f){let d=0,p=0,_=0,x=0,g=0,m=f.matrixWorldInverse;for(let M=0,v=u.length;M<v;M++){let A=u[M];if(A.isDirectionalLight){let B=i.directional[d];B.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),B.direction.sub(r),B.direction.transformDirection(m),d++}else if(A.isSpotLight){let B=i.spot[_];B.position.setFromMatrixPosition(A.matrixWorld),B.position.applyMatrix4(m),B.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),B.direction.sub(r),B.direction.transformDirection(m),_++}else if(A.isRectAreaLight){let B=i.rectArea[x];B.position.setFromMatrixPosition(A.matrixWorld),B.position.applyMatrix4(m),a.identity(),o.copy(A.matrixWorld),o.premultiply(m),a.extractRotation(o),B.halfWidth.set(A.width*.5,0,0),B.halfHeight.set(0,A.height*.5,0),B.halfWidth.applyMatrix4(a),B.halfHeight.applyMatrix4(a),x++}else if(A.isPointLight){let B=i.point[p];B.position.setFromMatrixPosition(A.matrixWorld),B.position.applyMatrix4(m),p++}else if(A.isHemisphereLight){let B=i.hemi[g];B.direction.setFromMatrixPosition(A.matrixWorld),B.direction.transformDirection(m),g++}}}return{setup:l,setupView:c,state:i}}function Td(s,e){let t=new Mv(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Tv(s,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),l;return a===void 0?(l=new Td(s,e),t.set(r,[l])):o>=a.length?(l=new Td(s,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}var au=class extends An{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=y0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},lu=class extends An{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},wv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Av=`uniform sampler2D shadow_pass;
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
}`;function Ev(s,e,t){let n=new yo,i=new ce,r=new ce,o=new Dt,a=new au({depthPacking:v0}),l=new lu,c={},u=t.maxTextureSize,f={[hi]:pn,[pn]:hi,[vt]:vt},d=new Jt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:wv,fragmentShader:Av}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let _=new Lt;_.setAttribute("position",new Bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ot(_,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$d;let m=this.type;this.render=function(U,D,J){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||U.length===0)return;let R=s.getRenderTarget(),P=s.getActiveCubeFace(),te=s.getActiveMipmapLevel(),z=s.state;z.setBlending(ui),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let Ce=m!==Mi&&this.type===Mi,Y=m===Mi&&this.type!==Mi;for(let re=0,ue=U.length;re<ue;re++){let K=U[re],W=K.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);let ee=W.getFrameExtents();if(i.multiply(ee),r.copy(W.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/ee.x),i.x=r.x*ee.x,W.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/ee.y),i.y=r.y*ee.y,W.mapSize.y=r.y)),W.map===null||Ce===!0||Y===!0){let ye=this.type!==Mi?{minFilter:$t,magFilter:$t}:{};W.map!==null&&W.map.dispose(),W.map=new ln(i.x,i.y,ye),W.map.texture.name=K.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();let ge=W.getViewportCount();for(let ye=0;ye<ge;ye++){let de=W.getViewport(ye);o.set(r.x*de.x,r.y*de.y,r.x*de.z,r.y*de.w),z.viewport(o),W.updateMatrices(K,ye),n=W.getFrustum(),A(D,J,W.camera,K,this.type)}W.isPointLightShadow!==!0&&this.type===Mi&&M(W,J),W.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(R,P,te)};function M(U,D){let J=e.update(x);d.defines.VSM_SAMPLES!==U.blurSamples&&(d.defines.VSM_SAMPLES=U.blurSamples,p.defines.VSM_SAMPLES=U.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new ln(i.x,i.y)),d.uniforms.shadow_pass.value=U.map.texture,d.uniforms.resolution.value=U.mapSize,d.uniforms.radius.value=U.radius,s.setRenderTarget(U.mapPass),s.clear(),s.renderBufferDirect(D,null,J,d,x,null),p.uniforms.shadow_pass.value=U.mapPass.texture,p.uniforms.resolution.value=U.mapSize,p.uniforms.radius.value=U.radius,s.setRenderTarget(U.map),s.clear(),s.renderBufferDirect(D,null,J,p,x,null)}function v(U,D,J,R){let P=null,te=J.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(te!==void 0)P=te;else if(P=J.isPointLight===!0?l:a,s.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){let z=P.uuid,Ce=D.uuid,Y=c[z];Y===void 0&&(Y={},c[z]=Y);let re=Y[Ce];re===void 0&&(re=P.clone(),Y[Ce]=re,D.addEventListener("dispose",B)),P=re}if(P.visible=D.visible,P.wireframe=D.wireframe,R===Mi?P.side=D.shadowSide!==null?D.shadowSide:D.side:P.side=D.shadowSide!==null?D.shadowSide:f[D.side],P.alphaMap=D.alphaMap,P.alphaTest=D.alphaTest,P.map=D.map,P.clipShadows=D.clipShadows,P.clippingPlanes=D.clippingPlanes,P.clipIntersection=D.clipIntersection,P.displacementMap=D.displacementMap,P.displacementScale=D.displacementScale,P.displacementBias=D.displacementBias,P.wireframeLinewidth=D.wireframeLinewidth,P.linewidth=D.linewidth,J.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let z=s.properties.get(P);z.light=J}return P}function A(U,D,J,R,P){if(U.visible===!1)return;if(U.layers.test(D.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&P===Mi)&&(!U.frustumCulled||n.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,U.matrixWorld);let Ce=e.update(U),Y=U.material;if(Array.isArray(Y)){let re=Ce.groups;for(let ue=0,K=re.length;ue<K;ue++){let W=re[ue],ee=Y[W.materialIndex];if(ee&&ee.visible){let ge=v(U,ee,R,P);U.onBeforeShadow(s,U,D,J,Ce,ge,W),s.renderBufferDirect(J,null,Ce,ge,U,W),U.onAfterShadow(s,U,D,J,Ce,ge,W)}}}else if(Y.visible){let re=v(U,Y,R,P);U.onBeforeShadow(s,U,D,J,Ce,re,null),s.renderBufferDirect(J,null,Ce,re,U,null),U.onAfterShadow(s,U,D,J,Ce,re,null)}}let z=U.children;for(let Ce=0,Y=z.length;Ce<Y;Ce++)A(z[Ce],D,J,R,P)}function B(U){U.target.removeEventListener("dispose",B);for(let J in c){let R=c[J],P=U.target.uuid;P in R&&(R[P].dispose(),delete R[P])}}}function Rv(s,e,t){let n=t.isWebGL2;function i(){let T=!1,Z=new Dt,X=null,me=new Dt(0,0,0,0);return{setMask:function(V){X!==V&&!T&&(s.colorMask(V,V,V,V),X=V)},setLocked:function(V){T=V},setClear:function(V,oe,Ee,De,We){We===!0&&(V*=De,oe*=De,Ee*=De),Z.set(V,oe,Ee,De),me.equals(Z)===!1&&(s.clearColor(V,oe,Ee,De),me.copy(Z))},reset:function(){T=!1,X=null,me.set(-1,0,0,0)}}}function r(){let T=!1,Z=null,X=null,me=null;return{setTest:function(V){V?$e(s.DEPTH_TEST):He(s.DEPTH_TEST)},setMask:function(V){Z!==V&&!T&&(s.depthMask(V),Z=V)},setFunc:function(V){if(X!==V){switch(V){case Qm:s.depthFunc(s.NEVER);break;case e0:s.depthFunc(s.ALWAYS);break;case t0:s.depthFunc(s.LESS);break;case Fa:s.depthFunc(s.LEQUAL);break;case n0:s.depthFunc(s.EQUAL);break;case i0:s.depthFunc(s.GEQUAL);break;case s0:s.depthFunc(s.GREATER);break;case r0:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}X=V}},setLocked:function(V){T=V},setClear:function(V){me!==V&&(s.clearDepth(V),me=V)},reset:function(){T=!1,Z=null,X=null,me=null}}}function o(){let T=!1,Z=null,X=null,me=null,V=null,oe=null,Ee=null,De=null,We=null;return{setTest:function(nt){T||(nt?$e(s.STENCIL_TEST):He(s.STENCIL_TEST))},setMask:function(nt){Z!==nt&&!T&&(s.stencilMask(nt),Z=nt)},setFunc:function(nt,dt,pt){(X!==nt||me!==dt||V!==pt)&&(s.stencilFunc(nt,dt,pt),X=nt,me=dt,V=pt)},setOp:function(nt,dt,pt){(oe!==nt||Ee!==dt||De!==pt)&&(s.stencilOp(nt,dt,pt),oe=nt,Ee=dt,De=pt)},setLocked:function(nt){T=nt},setClear:function(nt){We!==nt&&(s.clearStencil(nt),We=nt)},reset:function(){T=!1,Z=null,X=null,me=null,V=null,oe=null,Ee=null,De=null,We=null}}}let a=new i,l=new r,c=new o,u=new WeakMap,f=new WeakMap,d={},p={},_=new WeakMap,x=[],g=null,m=!1,M=null,v=null,A=null,B=null,U=null,D=null,J=null,R=new Ye(0,0,0),P=0,te=!1,z=null,Ce=null,Y=null,re=null,ue=null,K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,ee=0,ge=s.getParameter(s.VERSION);ge.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(ge)[1]),W=ee>=1):ge.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(ge)[1]),W=ee>=2);let ye=null,de={},$=s.getParameter(s.SCISSOR_BOX),O=s.getParameter(s.VIEWPORT),pe=new Dt().fromArray($),ke=new Dt().fromArray(O);function we(T,Z,X,me){let V=new Uint8Array(4),oe=s.createTexture();s.bindTexture(T,oe),s.texParameteri(T,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(T,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ee=0;Ee<X;Ee++)n&&(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)?s.texImage3D(Z,0,s.RGBA,1,1,me,0,s.RGBA,s.UNSIGNED_BYTE,V):s.texImage2D(Z+Ee,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,V);return oe}let Ke={};Ke[s.TEXTURE_2D]=we(s.TEXTURE_2D,s.TEXTURE_2D,1),Ke[s.TEXTURE_CUBE_MAP]=we(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ke[s.TEXTURE_2D_ARRAY]=we(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ke[s.TEXTURE_3D]=we(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),$e(s.DEPTH_TEST),l.setFunc(Fa),Fe(!1),C(rf),$e(s.CULL_FACE),_e(ui);function $e(T){d[T]!==!0&&(s.enable(T),d[T]=!0)}function He(T){d[T]!==!1&&(s.disable(T),d[T]=!1)}function it(T,Z){return p[T]!==Z?(s.bindFramebuffer(T,Z),p[T]=Z,n&&(T===s.DRAW_FRAMEBUFFER&&(p[s.FRAMEBUFFER]=Z),T===s.FRAMEBUFFER&&(p[s.DRAW_FRAMEBUFFER]=Z)),!0):!1}function H(T,Z){let X=x,me=!1;if(T)if(X=_.get(Z),X===void 0&&(X=[],_.set(Z,X)),T.isWebGLMultipleRenderTargets){let V=T.texture;if(X.length!==V.length||X[0]!==s.COLOR_ATTACHMENT0){for(let oe=0,Ee=V.length;oe<Ee;oe++)X[oe]=s.COLOR_ATTACHMENT0+oe;X.length=V.length,me=!0}}else X[0]!==s.COLOR_ATTACHMENT0&&(X[0]=s.COLOR_ATTACHMENT0,me=!0);else X[0]!==s.BACK&&(X[0]=s.BACK,me=!0);me&&(t.isWebGL2?s.drawBuffers(X):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(X))}function Me(T){return g!==T?(s.useProgram(T),g=T,!0):!1}let ve={[Ss]:s.FUNC_ADD,[Bm]:s.FUNC_SUBTRACT,[km]:s.FUNC_REVERSE_SUBTRACT};if(n)ve[lf]=s.MIN,ve[cf]=s.MAX;else{let T=e.get("EXT_blend_minmax");T!==null&&(ve[lf]=T.MIN_EXT,ve[cf]=T.MAX_EXT)}let Ie={[zm]:s.ZERO,[Gm]:s.ONE,[Vm]:s.SRC_COLOR,[Wc]:s.SRC_ALPHA,[Zm]:s.SRC_ALPHA_SATURATE,[qm]:s.DST_COLOR,[Wm]:s.DST_ALPHA,[Hm]:s.ONE_MINUS_SRC_COLOR,[Xc]:s.ONE_MINUS_SRC_ALPHA,[Ym]:s.ONE_MINUS_DST_COLOR,[Xm]:s.ONE_MINUS_DST_ALPHA,[Km]:s.CONSTANT_COLOR,[jm]:s.ONE_MINUS_CONSTANT_COLOR,[Jm]:s.CONSTANT_ALPHA,[$m]:s.ONE_MINUS_CONSTANT_ALPHA};function _e(T,Z,X,me,V,oe,Ee,De,We,nt){if(T===ui){m===!0&&(He(s.BLEND),m=!1);return}if(m===!1&&($e(s.BLEND),m=!0),T!==Fm){if(T!==M||nt!==te){if((v!==Ss||U!==Ss)&&(s.blendEquation(s.FUNC_ADD),v=Ss,U=Ss),nt)switch(T){case mr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case _r:s.blendFunc(s.ONE,s.ONE);break;case of:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case af:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}else switch(T){case mr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case _r:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case of:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case af:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}A=null,B=null,D=null,J=null,R.set(0,0,0),P=0,M=T,te=nt}return}V=V||Z,oe=oe||X,Ee=Ee||me,(Z!==v||V!==U)&&(s.blendEquationSeparate(ve[Z],ve[V]),v=Z,U=V),(X!==A||me!==B||oe!==D||Ee!==J)&&(s.blendFuncSeparate(Ie[X],Ie[me],Ie[oe],Ie[Ee]),A=X,B=me,D=oe,J=Ee),(De.equals(R)===!1||We!==P)&&(s.blendColor(De.r,De.g,De.b,We),R.copy(De),P=We),M=T,te=!1}function Je(T,Z){T.side===vt?He(s.CULL_FACE):$e(s.CULL_FACE);let X=T.side===pn;Z&&(X=!X),Fe(X),T.blending===mr&&T.transparent===!1?_e(ui):_e(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),l.setFunc(T.depthFunc),l.setTest(T.depthTest),l.setMask(T.depthWrite),a.setMask(T.colorWrite);let me=T.stencilWrite;c.setTest(me),me&&(c.setMask(T.stencilWriteMask),c.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),c.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),ne(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?$e(s.SAMPLE_ALPHA_TO_COVERAGE):He(s.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(T){z!==T&&(T?s.frontFace(s.CW):s.frontFace(s.CCW),z=T)}function C(T){T!==Nm?($e(s.CULL_FACE),T!==Ce&&(T===rf?s.cullFace(s.BACK):T===Om?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):He(s.CULL_FACE),Ce=T}function E(T){T!==Y&&(W&&s.lineWidth(T),Y=T)}function ne(T,Z,X){T?($e(s.POLYGON_OFFSET_FILL),(re!==Z||ue!==X)&&(s.polygonOffset(Z,X),re=Z,ue=X)):He(s.POLYGON_OFFSET_FILL)}function Te(T){T?$e(s.SCISSOR_TEST):He(s.SCISSOR_TEST)}function Pe(T){T===void 0&&(T=s.TEXTURE0+K-1),ye!==T&&(s.activeTexture(T),ye=T)}function Se(T,Z,X){X===void 0&&(ye===null?X=s.TEXTURE0+K-1:X=ye);let me=de[X];me===void 0&&(me={type:void 0,texture:void 0},de[X]=me),(me.type!==T||me.texture!==Z)&&(ye!==X&&(s.activeTexture(X),ye=X),s.bindTexture(T,Z||Ke[T]),me.type=T,me.texture=Z)}function Ze(){let T=de[ye];T!==void 0&&T.type!==void 0&&(s.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function Ne(){try{s.compressedTexImage2D.apply(s,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ze(){try{s.compressedTexImage3D.apply(s,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Qe(){try{s.texSubImage2D.apply(s,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function et(){try{s.texSubImage3D.apply(s,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Re(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ct(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function G(){try{s.texStorage2D.apply(s,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Ae(){try{s.texStorage3D.apply(s,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Oe(){try{s.texImage2D.apply(s,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Le(){try{s.texImage3D.apply(s,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function j(T){pe.equals(T)===!1&&(s.scissor(T.x,T.y,T.z,T.w),pe.copy(T))}function se(T){ke.equals(T)===!1&&(s.viewport(T.x,T.y,T.z,T.w),ke.copy(T))}function he(T,Z){let X=f.get(Z);X===void 0&&(X=new WeakMap,f.set(Z,X));let me=X.get(T);me===void 0&&(me=s.getUniformBlockIndex(Z,T.name),X.set(T,me))}function Q(T,Z){let me=f.get(Z).get(T);u.get(Z)!==me&&(s.uniformBlockBinding(Z,me,T.__bindingPointIndex),u.set(Z,me))}function F(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},ye=null,de={},p={},_=new WeakMap,x=[],g=null,m=!1,M=null,v=null,A=null,B=null,U=null,D=null,J=null,R=new Ye(0,0,0),P=0,te=!1,z=null,Ce=null,Y=null,re=null,ue=null,pe.set(0,0,s.canvas.width,s.canvas.height),ke.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:$e,disable:He,bindFramebuffer:it,drawBuffers:H,useProgram:Me,setBlending:_e,setMaterial:Je,setFlipSided:Fe,setCullFace:C,setLineWidth:E,setPolygonOffset:ne,setScissorTest:Te,activeTexture:Pe,bindTexture:Se,unbindTexture:Ze,compressedTexImage2D:Ne,compressedTexImage3D:ze,texImage2D:Oe,texImage3D:Le,updateUBOMapping:he,uniformBlockBinding:Q,texStorage2D:G,texStorage3D:Ae,texSubImage2D:Qe,texSubImage3D:et,compressedTexSubImage2D:Re,compressedTexSubImage3D:ct,scissor:j,viewport:se,reset:F}}function Cv(s,e,t,n,i,r,o){let a=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,f,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,E){return p?new OffscreenCanvas(C,E):xo("canvas")}function x(C,E,ne,Te){let Pe=1;if((C.width>Te||C.height>Te)&&(Pe=Te/Math.max(C.width,C.height)),Pe<1||E===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){let Se=E?Ha:Math.floor,Ze=Se(Pe*C.width),Ne=Se(Pe*C.height);f===void 0&&(f=_(Ze,Ne));let ze=ne?_(Ze,Ne):f;return ze.width=Ze,ze.height=Ne,ze.getContext("2d").drawImage(C,0,0,Ze,Ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Ze+"x"+Ne+")."),ze}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function g(C){return jc(C.width)&&jc(C.height)}function m(C){return a?!1:C.wrapS!==In||C.wrapT!==In||C.minFilter!==$t&&C.minFilter!==Yt}function M(C,E){return C.generateMipmaps&&E&&C.minFilter!==$t&&C.minFilter!==Yt}function v(C){s.generateMipmap(C)}function A(C,E,ne,Te,Pe=!1){if(a===!1)return E;if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Se=E;if(E===s.RED&&(ne===s.FLOAT&&(Se=s.R32F),ne===s.HALF_FLOAT&&(Se=s.R16F),ne===s.UNSIGNED_BYTE&&(Se=s.R8)),E===s.RED_INTEGER&&(ne===s.UNSIGNED_BYTE&&(Se=s.R8UI),ne===s.UNSIGNED_SHORT&&(Se=s.R16UI),ne===s.UNSIGNED_INT&&(Se=s.R32UI),ne===s.BYTE&&(Se=s.R8I),ne===s.SHORT&&(Se=s.R16I),ne===s.INT&&(Se=s.R32I)),E===s.RG&&(ne===s.FLOAT&&(Se=s.RG32F),ne===s.HALF_FLOAT&&(Se=s.RG16F),ne===s.UNSIGNED_BYTE&&(Se=s.RG8)),E===s.RGBA){let Ze=Pe?ka:Mt.getTransfer(Te);ne===s.FLOAT&&(Se=s.RGBA32F),ne===s.HALF_FLOAT&&(Se=s.RGBA16F),ne===s.UNSIGNED_BYTE&&(Se=Ze===It?s.SRGB8_ALPHA8:s.RGBA8),ne===s.UNSIGNED_SHORT_4_4_4_4&&(Se=s.RGBA4),ne===s.UNSIGNED_SHORT_5_5_5_1&&(Se=s.RGB5_A1)}return(Se===s.R16F||Se===s.R32F||Se===s.RG16F||Se===s.RG32F||Se===s.RGBA16F||Se===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Se}function B(C,E,ne){return M(C,ne)===!0||C.isFramebufferTexture&&C.minFilter!==$t&&C.minFilter!==Yt?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function U(C){return C===$t||C===Ba||C===lo?s.NEAREST:s.LINEAR}function D(C){let E=C.target;E.removeEventListener("dispose",D),R(E),E.isVideoTexture&&u.delete(E)}function J(C){let E=C.target;E.removeEventListener("dispose",J),te(E)}function R(C){let E=n.get(C);if(E.__webglInit===void 0)return;let ne=C.source,Te=d.get(ne);if(Te){let Pe=Te[E.__cacheKey];Pe.usedTimes--,Pe.usedTimes===0&&P(C),Object.keys(Te).length===0&&d.delete(ne)}n.remove(C)}function P(C){let E=n.get(C);s.deleteTexture(E.__webglTexture);let ne=C.source,Te=d.get(ne);delete Te[E.__cacheKey],o.memory.textures--}function te(C){let E=C.texture,ne=n.get(C),Te=n.get(E);if(Te.__webglTexture!==void 0&&(s.deleteTexture(Te.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let Pe=0;Pe<6;Pe++){if(Array.isArray(ne.__webglFramebuffer[Pe]))for(let Se=0;Se<ne.__webglFramebuffer[Pe].length;Se++)s.deleteFramebuffer(ne.__webglFramebuffer[Pe][Se]);else s.deleteFramebuffer(ne.__webglFramebuffer[Pe]);ne.__webglDepthbuffer&&s.deleteRenderbuffer(ne.__webglDepthbuffer[Pe])}else{if(Array.isArray(ne.__webglFramebuffer))for(let Pe=0;Pe<ne.__webglFramebuffer.length;Pe++)s.deleteFramebuffer(ne.__webglFramebuffer[Pe]);else s.deleteFramebuffer(ne.__webglFramebuffer);if(ne.__webglDepthbuffer&&s.deleteRenderbuffer(ne.__webglDepthbuffer),ne.__webglMultisampledFramebuffer&&s.deleteFramebuffer(ne.__webglMultisampledFramebuffer),ne.__webglColorRenderbuffer)for(let Pe=0;Pe<ne.__webglColorRenderbuffer.length;Pe++)ne.__webglColorRenderbuffer[Pe]&&s.deleteRenderbuffer(ne.__webglColorRenderbuffer[Pe]);ne.__webglDepthRenderbuffer&&s.deleteRenderbuffer(ne.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let Pe=0,Se=E.length;Pe<Se;Pe++){let Ze=n.get(E[Pe]);Ze.__webglTexture&&(s.deleteTexture(Ze.__webglTexture),o.memory.textures--),n.remove(E[Pe])}n.remove(E),n.remove(C)}let z=0;function Ce(){z=0}function Y(){let C=z;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),z+=1,C}function re(C){let E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function ue(C,E){let ne=n.get(C);if(C.isVideoTexture&&Je(C),C.isRenderTargetTexture===!1&&C.version>0&&ne.__version!==C.version){let Te=C.image;if(Te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(ne,C,E);return}}t.bindTexture(s.TEXTURE_2D,ne.__webglTexture,s.TEXTURE0+E)}function K(C,E){let ne=n.get(C);if(C.version>0&&ne.__version!==C.version){pe(ne,C,E);return}t.bindTexture(s.TEXTURE_2D_ARRAY,ne.__webglTexture,s.TEXTURE0+E)}function W(C,E){let ne=n.get(C);if(C.version>0&&ne.__version!==C.version){pe(ne,C,E);return}t.bindTexture(s.TEXTURE_3D,ne.__webglTexture,s.TEXTURE0+E)}function ee(C,E){let ne=n.get(C);if(C.version>0&&ne.__version!==C.version){ke(ne,C,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture,s.TEXTURE0+E)}let ge={[mn]:s.REPEAT,[In]:s.CLAMP_TO_EDGE,[go]:s.MIRRORED_REPEAT},ye={[$t]:s.NEAREST,[Ba]:s.NEAREST_MIPMAP_NEAREST,[lo]:s.NEAREST_MIPMAP_LINEAR,[Yt]:s.LINEAR,[Bu]:s.LINEAR_MIPMAP_NEAREST,[Ji]:s.LINEAR_MIPMAP_LINEAR},de={[S0]:s.NEVER,[R0]:s.ALWAYS,[M0]:s.LESS,[hp]:s.LEQUAL,[T0]:s.EQUAL,[E0]:s.GEQUAL,[w0]:s.GREATER,[A0]:s.NOTEQUAL};function $(C,E,ne){if(ne?(s.texParameteri(C,s.TEXTURE_WRAP_S,ge[E.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,ge[E.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,ge[E.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,ye[E.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,ye[E.minFilter])):(s.texParameteri(C,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(C,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(E.wrapS!==In||E.wrapT!==In)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(C,s.TEXTURE_MAG_FILTER,U(E.magFilter)),s.texParameteri(C,s.TEXTURE_MIN_FILTER,U(E.minFilter)),E.minFilter!==$t&&E.minFilter!==Yt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,de[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let Te=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===$t||E.minFilter!==lo&&E.minFilter!==Ji||E.type===Ti&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===Qn&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(s.texParameterf(C,Te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function O(C,E){let ne=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",D));let Te=E.source,Pe=d.get(Te);Pe===void 0&&(Pe={},d.set(Te,Pe));let Se=re(E);if(Se!==C.__cacheKey){Pe[Se]===void 0&&(Pe[Se]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,ne=!0),Pe[Se].usedTimes++;let Ze=Pe[C.__cacheKey];Ze!==void 0&&(Pe[C.__cacheKey].usedTimes--,Ze.usedTimes===0&&P(E)),C.__cacheKey=Se,C.__webglTexture=Pe[Se].texture}return ne}function pe(C,E,ne){let Te=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Te=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Te=s.TEXTURE_3D);let Pe=O(C,E),Se=E.source;t.bindTexture(Te,C.__webglTexture,s.TEXTURE0+ne);let Ze=n.get(Se);if(Se.version!==Ze.__version||Pe===!0){t.activeTexture(s.TEXTURE0+ne);let Ne=Mt.getPrimaries(Mt.workingColorSpace),ze=E.colorSpace===kn?null:Mt.getPrimaries(E.colorSpace),Qe=E.colorSpace===kn||Ne===ze?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let et=m(E)&&g(E.image)===!1,Re=x(E.image,et,!1,i.maxTextureSize);Re=Fe(E,Re);let ct=g(Re)||a,G=r.convert(E.format,E.colorSpace),Ae=r.convert(E.type),Oe=A(E.internalFormat,G,Ae,E.colorSpace,E.isVideoTexture);$(Te,E,ct);let Le,j=E.mipmaps,se=a&&E.isVideoTexture!==!0&&Oe!==ap,he=Ze.__version===void 0||Pe===!0,Q=B(E,Re,ct);if(E.isDepthTexture)Oe=s.DEPTH_COMPONENT,a?E.type===Ti?Oe=s.DEPTH_COMPONENT32F:E.type===qi?Oe=s.DEPTH_COMPONENT24:E.type===ws?Oe=s.DEPTH24_STENCIL8:Oe=s.DEPTH_COMPONENT16:E.type===Ti&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===As&&Oe===s.DEPTH_COMPONENT&&E.type!==ku&&E.type!==qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=qi,Ae=r.convert(E.type)),E.format===br&&Oe===s.DEPTH_COMPONENT&&(Oe=s.DEPTH_STENCIL,E.type!==ws&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=ws,Ae=r.convert(E.type))),he&&(se?t.texStorage2D(s.TEXTURE_2D,1,Oe,Re.width,Re.height):t.texImage2D(s.TEXTURE_2D,0,Oe,Re.width,Re.height,0,G,Ae,null));else if(E.isDataTexture)if(j.length>0&&ct){se&&he&&t.texStorage2D(s.TEXTURE_2D,Q,Oe,j[0].width,j[0].height);for(let F=0,T=j.length;F<T;F++)Le=j[F],se?t.texSubImage2D(s.TEXTURE_2D,F,0,0,Le.width,Le.height,G,Ae,Le.data):t.texImage2D(s.TEXTURE_2D,F,Oe,Le.width,Le.height,0,G,Ae,Le.data);E.generateMipmaps=!1}else se?(he&&t.texStorage2D(s.TEXTURE_2D,Q,Oe,Re.width,Re.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Re.width,Re.height,G,Ae,Re.data)):t.texImage2D(s.TEXTURE_2D,0,Oe,Re.width,Re.height,0,G,Ae,Re.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){se&&he&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Q,Oe,j[0].width,j[0].height,Re.depth);for(let F=0,T=j.length;F<T;F++)Le=j[F],E.format!==Bn?G!==null?se?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,F,0,0,0,Le.width,Le.height,Re.depth,G,Le.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,F,Oe,Le.width,Le.height,Re.depth,0,Le.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?t.texSubImage3D(s.TEXTURE_2D_ARRAY,F,0,0,0,Le.width,Le.height,Re.depth,G,Ae,Le.data):t.texImage3D(s.TEXTURE_2D_ARRAY,F,Oe,Le.width,Le.height,Re.depth,0,G,Ae,Le.data)}else{se&&he&&t.texStorage2D(s.TEXTURE_2D,Q,Oe,j[0].width,j[0].height);for(let F=0,T=j.length;F<T;F++)Le=j[F],E.format!==Bn?G!==null?se?t.compressedTexSubImage2D(s.TEXTURE_2D,F,0,0,Le.width,Le.height,G,Le.data):t.compressedTexImage2D(s.TEXTURE_2D,F,Oe,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?t.texSubImage2D(s.TEXTURE_2D,F,0,0,Le.width,Le.height,G,Ae,Le.data):t.texImage2D(s.TEXTURE_2D,F,Oe,Le.width,Le.height,0,G,Ae,Le.data)}else if(E.isDataArrayTexture)se?(he&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Q,Oe,Re.width,Re.height,Re.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Re.width,Re.height,Re.depth,G,Ae,Re.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Oe,Re.width,Re.height,Re.depth,0,G,Ae,Re.data);else if(E.isData3DTexture)se?(he&&t.texStorage3D(s.TEXTURE_3D,Q,Oe,Re.width,Re.height,Re.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Re.width,Re.height,Re.depth,G,Ae,Re.data)):t.texImage3D(s.TEXTURE_3D,0,Oe,Re.width,Re.height,Re.depth,0,G,Ae,Re.data);else if(E.isFramebufferTexture){if(he)if(se)t.texStorage2D(s.TEXTURE_2D,Q,Oe,Re.width,Re.height);else{let F=Re.width,T=Re.height;for(let Z=0;Z<Q;Z++)t.texImage2D(s.TEXTURE_2D,Z,Oe,F,T,0,G,Ae,null),F>>=1,T>>=1}}else if(j.length>0&&ct){se&&he&&t.texStorage2D(s.TEXTURE_2D,Q,Oe,j[0].width,j[0].height);for(let F=0,T=j.length;F<T;F++)Le=j[F],se?t.texSubImage2D(s.TEXTURE_2D,F,0,0,G,Ae,Le):t.texImage2D(s.TEXTURE_2D,F,Oe,G,Ae,Le);E.generateMipmaps=!1}else se?(he&&t.texStorage2D(s.TEXTURE_2D,Q,Oe,Re.width,Re.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,G,Ae,Re)):t.texImage2D(s.TEXTURE_2D,0,Oe,G,Ae,Re);M(E,ct)&&v(Te),Ze.__version=Se.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function ke(C,E,ne){if(E.image.length!==6)return;let Te=O(C,E),Pe=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+ne);let Se=n.get(Pe);if(Pe.version!==Se.__version||Te===!0){t.activeTexture(s.TEXTURE0+ne);let Ze=Mt.getPrimaries(Mt.workingColorSpace),Ne=E.colorSpace===kn?null:Mt.getPrimaries(E.colorSpace),ze=E.colorSpace===kn||Ze===Ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let Qe=E.isCompressedTexture||E.image[0].isCompressedTexture,et=E.image[0]&&E.image[0].isDataTexture,Re=[];for(let F=0;F<6;F++)!Qe&&!et?Re[F]=x(E.image[F],!1,!0,i.maxCubemapSize):Re[F]=et?E.image[F].image:E.image[F],Re[F]=Fe(E,Re[F]);let ct=Re[0],G=g(ct)||a,Ae=r.convert(E.format,E.colorSpace),Oe=r.convert(E.type),Le=A(E.internalFormat,Ae,Oe,E.colorSpace),j=a&&E.isVideoTexture!==!0,se=Se.__version===void 0||Te===!0,he=B(E,ct,G);$(s.TEXTURE_CUBE_MAP,E,G);let Q;if(Qe){j&&se&&t.texStorage2D(s.TEXTURE_CUBE_MAP,he,Le,ct.width,ct.height);for(let F=0;F<6;F++){Q=Re[F].mipmaps;for(let T=0;T<Q.length;T++){let Z=Q[T];E.format!==Bn?Ae!==null?j?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,T,0,0,Z.width,Z.height,Ae,Z.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,T,Le,Z.width,Z.height,0,Z.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,T,0,0,Z.width,Z.height,Ae,Oe,Z.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,T,Le,Z.width,Z.height,0,Ae,Oe,Z.data)}}}else{Q=E.mipmaps,j&&se&&(Q.length>0&&he++,t.texStorage2D(s.TEXTURE_CUBE_MAP,he,Le,Re[0].width,Re[0].height));for(let F=0;F<6;F++)if(et){j?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,Re[F].width,Re[F].height,Ae,Oe,Re[F].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,Le,Re[F].width,Re[F].height,0,Ae,Oe,Re[F].data);for(let T=0;T<Q.length;T++){let X=Q[T].image[F].image;j?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,T+1,0,0,X.width,X.height,Ae,Oe,X.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,T+1,Le,X.width,X.height,0,Ae,Oe,X.data)}}else{j?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,Ae,Oe,Re[F]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,Le,Ae,Oe,Re[F]);for(let T=0;T<Q.length;T++){let Z=Q[T];j?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,T+1,0,0,Ae,Oe,Z.image[F]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,T+1,Le,Ae,Oe,Z.image[F])}}}M(E,G)&&v(s.TEXTURE_CUBE_MAP),Se.__version=Pe.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function we(C,E,ne,Te,Pe,Se){let Ze=r.convert(ne.format,ne.colorSpace),Ne=r.convert(ne.type),ze=A(ne.internalFormat,Ze,Ne,ne.colorSpace);if(!n.get(E).__hasExternalTextures){let et=Math.max(1,E.width>>Se),Re=Math.max(1,E.height>>Se);Pe===s.TEXTURE_3D||Pe===s.TEXTURE_2D_ARRAY?t.texImage3D(Pe,Se,ze,et,Re,E.depth,0,Ze,Ne,null):t.texImage2D(Pe,Se,ze,et,Re,0,Ze,Ne,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),_e(E)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Te,Pe,n.get(ne).__webglTexture,0,Ie(E)):(Pe===s.TEXTURE_2D||Pe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Pe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Te,Pe,n.get(ne).__webglTexture,Se),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ke(C,E,ne){if(s.bindRenderbuffer(s.RENDERBUFFER,C),E.depthBuffer&&!E.stencilBuffer){let Te=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(ne||_e(E)){let Pe=E.depthTexture;Pe&&Pe.isDepthTexture&&(Pe.type===Ti?Te=s.DEPTH_COMPONENT32F:Pe.type===qi&&(Te=s.DEPTH_COMPONENT24));let Se=Ie(E);_e(E)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Se,Te,E.width,E.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,Se,Te,E.width,E.height)}else s.renderbufferStorage(s.RENDERBUFFER,Te,E.width,E.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,C)}else if(E.depthBuffer&&E.stencilBuffer){let Te=Ie(E);ne&&_e(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Te,s.DEPTH24_STENCIL8,E.width,E.height):_e(E)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Te,s.DEPTH24_STENCIL8,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,C)}else{let Te=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let Pe=0;Pe<Te.length;Pe++){let Se=Te[Pe],Ze=r.convert(Se.format,Se.colorSpace),Ne=r.convert(Se.type),ze=A(Se.internalFormat,Ze,Ne,Se.colorSpace),Qe=Ie(E);ne&&_e(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Qe,ze,E.width,E.height):_e(E)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Qe,ze,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ze,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function $e(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ue(E.depthTexture,0);let Te=n.get(E.depthTexture).__webglTexture,Pe=Ie(E);if(E.depthTexture.format===As)_e(E)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Te,0,Pe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Te,0);else if(E.depthTexture.format===br)_e(E)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Te,0,Pe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Te,0);else throw new Error("Unknown depthTexture format")}function He(C){let E=n.get(C),ne=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");$e(E.__webglFramebuffer,C)}else if(ne){E.__webglDepthbuffer=[];for(let Te=0;Te<6;Te++)t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[Te]),E.__webglDepthbuffer[Te]=s.createRenderbuffer(),Ke(E.__webglDepthbuffer[Te],C,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=s.createRenderbuffer(),Ke(E.__webglDepthbuffer,C,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function it(C,E,ne){let Te=n.get(C);E!==void 0&&we(Te.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ne!==void 0&&He(C)}function H(C){let E=C.texture,ne=n.get(C),Te=n.get(E);C.addEventListener("dispose",J),C.isWebGLMultipleRenderTargets!==!0&&(Te.__webglTexture===void 0&&(Te.__webglTexture=s.createTexture()),Te.__version=E.version,o.memory.textures++);let Pe=C.isWebGLCubeRenderTarget===!0,Se=C.isWebGLMultipleRenderTargets===!0,Ze=g(C)||a;if(Pe){ne.__webglFramebuffer=[];for(let Ne=0;Ne<6;Ne++)if(a&&E.mipmaps&&E.mipmaps.length>0){ne.__webglFramebuffer[Ne]=[];for(let ze=0;ze<E.mipmaps.length;ze++)ne.__webglFramebuffer[Ne][ze]=s.createFramebuffer()}else ne.__webglFramebuffer[Ne]=s.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){ne.__webglFramebuffer=[];for(let Ne=0;Ne<E.mipmaps.length;Ne++)ne.__webglFramebuffer[Ne]=s.createFramebuffer()}else ne.__webglFramebuffer=s.createFramebuffer();if(Se)if(i.drawBuffers){let Ne=C.texture;for(let ze=0,Qe=Ne.length;ze<Qe;ze++){let et=n.get(Ne[ze]);et.__webglTexture===void 0&&(et.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&_e(C)===!1){let Ne=Se?E:[E];ne.__webglMultisampledFramebuffer=s.createFramebuffer(),ne.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let ze=0;ze<Ne.length;ze++){let Qe=Ne[ze];ne.__webglColorRenderbuffer[ze]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ne.__webglColorRenderbuffer[ze]);let et=r.convert(Qe.format,Qe.colorSpace),Re=r.convert(Qe.type),ct=A(Qe.internalFormat,et,Re,Qe.colorSpace,C.isXRRenderTarget===!0),G=Ie(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,G,ct,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.RENDERBUFFER,ne.__webglColorRenderbuffer[ze])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(ne.__webglDepthRenderbuffer=s.createRenderbuffer(),Ke(ne.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Pe){t.bindTexture(s.TEXTURE_CUBE_MAP,Te.__webglTexture),$(s.TEXTURE_CUBE_MAP,E,Ze);for(let Ne=0;Ne<6;Ne++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let ze=0;ze<E.mipmaps.length;ze++)we(ne.__webglFramebuffer[Ne][ze],C,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,ze);else we(ne.__webglFramebuffer[Ne],C,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0);M(E,Ze)&&v(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){let Ne=C.texture;for(let ze=0,Qe=Ne.length;ze<Qe;ze++){let et=Ne[ze],Re=n.get(et);t.bindTexture(s.TEXTURE_2D,Re.__webglTexture),$(s.TEXTURE_2D,et,Ze),we(ne.__webglFramebuffer,C,et,s.COLOR_ATTACHMENT0+ze,s.TEXTURE_2D,0),M(et,Ze)&&v(s.TEXTURE_2D)}t.unbindTexture()}else{let Ne=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?Ne=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ne,Te.__webglTexture),$(Ne,E,Ze),a&&E.mipmaps&&E.mipmaps.length>0)for(let ze=0;ze<E.mipmaps.length;ze++)we(ne.__webglFramebuffer[ze],C,E,s.COLOR_ATTACHMENT0,Ne,ze);else we(ne.__webglFramebuffer,C,E,s.COLOR_ATTACHMENT0,Ne,0);M(E,Ze)&&v(Ne),t.unbindTexture()}C.depthBuffer&&He(C)}function Me(C){let E=g(C)||a,ne=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let Te=0,Pe=ne.length;Te<Pe;Te++){let Se=ne[Te];if(M(Se,E)){let Ze=C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Ne=n.get(Se).__webglTexture;t.bindTexture(Ze,Ne),v(Ze),t.unbindTexture()}}}function ve(C){if(a&&C.samples>0&&_e(C)===!1){let E=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],ne=C.width,Te=C.height,Pe=s.COLOR_BUFFER_BIT,Se=[],Ze=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ne=n.get(C),ze=C.isWebGLMultipleRenderTargets===!0;if(ze)for(let Qe=0;Qe<E.length;Qe++)t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Qe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Qe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let Qe=0;Qe<E.length;Qe++){Se.push(s.COLOR_ATTACHMENT0+Qe),C.depthBuffer&&Se.push(Ze);let et=Ne.__ignoreDepthValues!==void 0?Ne.__ignoreDepthValues:!1;if(et===!1&&(C.depthBuffer&&(Pe|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&(Pe|=s.STENCIL_BUFFER_BIT)),ze&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ne.__webglColorRenderbuffer[Qe]),et===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Ze]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Ze])),ze){let Re=n.get(E[Qe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Re,0)}s.blitFramebuffer(0,0,ne,Te,0,0,ne,Te,Pe,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Se)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ze)for(let Qe=0;Qe<E.length;Qe++){t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Qe,s.RENDERBUFFER,Ne.__webglColorRenderbuffer[Qe]);let et=n.get(E[Qe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Qe,s.TEXTURE_2D,et,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}}function Ie(C){return Math.min(i.maxSamples,C.samples)}function _e(C){let E=n.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Je(C){let E=o.render.frame;u.get(C)!==E&&(u.set(C,E),C.update())}function Fe(C,E){let ne=C.colorSpace,Te=C.format,Pe=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Kc||ne!==Qt&&ne!==kn&&(Mt.getTransfer(ne)===It?a===!1?e.has("EXT_sRGB")===!0&&Te===Bn?(C.format=Kc,C.minFilter=Yt,C.generateMipmaps=!1):E=Wa.sRGBToLinear(E):(Te!==Bn||Pe!==Ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ne)),E}this.allocateTextureUnit=Y,this.resetTextureUnits=Ce,this.setTexture2D=ue,this.setTexture2DArray=K,this.setTexture3D=W,this.setTextureCube=ee,this.rebindTextures=it,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=we,this.useMultisampledRTT=_e}function Pv(s,e,t){let n=t.isWebGL2;function i(r,o=kn){let a,l=Mt.getTransfer(o);if(r===Ki)return s.UNSIGNED_BYTE;if(r===np)return s.UNSIGNED_SHORT_4_4_4_4;if(r===ip)return s.UNSIGNED_SHORT_5_5_5_1;if(r===u0)return s.BYTE;if(r===h0)return s.SHORT;if(r===ku)return s.UNSIGNED_SHORT;if(r===tp)return s.INT;if(r===qi)return s.UNSIGNED_INT;if(r===Ti)return s.FLOAT;if(r===Qn)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===f0)return s.ALPHA;if(r===Bn)return s.RGBA;if(r===d0)return s.LUMINANCE;if(r===p0)return s.LUMINANCE_ALPHA;if(r===As)return s.DEPTH_COMPONENT;if(r===br)return s.DEPTH_STENCIL;if(r===Kc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===m0)return s.RED;if(r===sp)return s.RED_INTEGER;if(r===g0)return s.RG;if(r===rp)return s.RG_INTEGER;if(r===op)return s.RGBA_INTEGER;if(r===ac||r===lc||r===cc||r===uc)if(l===It)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===ac)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===lc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===cc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===uc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===ac)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===lc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===cc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===uc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===hf||r===ff||r===df||r===pf)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===hf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ff)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===df)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===pf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ap)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===mf||r===gf)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===mf)return l===It?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===gf)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===xf||r===_f||r===yf||r===vf||r===bf||r===Sf||r===Mf||r===Tf||r===wf||r===Af||r===Ef||r===Rf||r===Cf||r===Pf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===xf)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===_f)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===yf)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===vf)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===bf)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Sf)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Mf)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Tf)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===wf)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Af)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ef)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Rf)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Cf)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Pf)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===hc||r===Lf||r===If)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===hc)return l===It?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Lf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===If)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===x0||r===Df||r===Uf||r===Nf)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===hc)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Df)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Uf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Nf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ws?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var cu=class extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},an=class extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Lv={type:"move"},fo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new an,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new an,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new an,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Lv)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new an;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},uu=class extends fi{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,_=null,x=t.getContextAttributes(),g=null,m=null,M=[],v=[],A=new ce,B=null,U=new jt;U.layers.enable(1),U.viewport=new Dt;let D=new jt;D.layers.enable(2),D.viewport=new Dt;let J=[U,D],R=new cu;R.layers.enable(1),R.layers.enable(2);let P=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let O=M[$];return O===void 0&&(O=new fo,M[$]=O),O.getTargetRaySpace()},this.getControllerGrip=function($){let O=M[$];return O===void 0&&(O=new fo,M[$]=O),O.getGripSpace()},this.getHand=function($){let O=M[$];return O===void 0&&(O=new fo,M[$]=O),O.getHandSpace()};function z($){let O=v.indexOf($.inputSource);if(O===-1)return;let pe=M[O];pe!==void 0&&(pe.update($.inputSource,$.frame,c||o),pe.dispatchEvent({type:$.type,data:$.inputSource}))}function Ce(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",Ce),i.removeEventListener("inputsourceschange",Y);for(let $=0;$<M.length;$++){let O=v[$];O!==null&&(v[$]=null,M[$].disconnect(O))}P=null,te=null,e.setRenderTarget(g),p=null,d=null,f=null,i=null,m=null,de.stop(),n.isPresenting=!1,e.setPixelRatio(B),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",Ce),i.addEventListener("inputsourceschange",Y),x.xrCompatible!==!0&&await t.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(A),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let O={antialias:i.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,O),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),m=new ln(p.framebufferWidth,p.framebufferHeight,{format:Bn,type:Ki,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let O=null,pe=null,ke=null;x.depth&&(ke=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,O=x.stencil?br:As,pe=x.stencil?ws:qi);let we={colorFormat:t.RGBA8,depthFormat:ke,scaleFactor:r};f=new XRWebGLBinding(i,t),d=f.createProjectionLayer(we),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),m=new ln(d.textureWidth,d.textureHeight,{format:Bn,type:Ki,depthTexture:new Ja(d.textureWidth,d.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let Ke=e.properties.get(m);Ke.__ignoreDepthValues=d.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),de.setContext(i),de.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function Y($){for(let O=0;O<$.removed.length;O++){let pe=$.removed[O],ke=v.indexOf(pe);ke>=0&&(v[ke]=null,M[ke].disconnect(pe))}for(let O=0;O<$.added.length;O++){let pe=$.added[O],ke=v.indexOf(pe);if(ke===-1){for(let Ke=0;Ke<M.length;Ke++)if(Ke>=v.length){v.push(pe),ke=Ke;break}else if(v[Ke]===null){v[Ke]=pe,ke=Ke;break}if(ke===-1)break}let we=M[ke];we&&we.connect(pe)}}let re=new L,ue=new L;function K($,O,pe){re.setFromMatrixPosition(O.matrixWorld),ue.setFromMatrixPosition(pe.matrixWorld);let ke=re.distanceTo(ue),we=O.projectionMatrix.elements,Ke=pe.projectionMatrix.elements,$e=we[14]/(we[10]-1),He=we[14]/(we[10]+1),it=(we[9]+1)/we[5],H=(we[9]-1)/we[5],Me=(we[8]-1)/we[0],ve=(Ke[8]+1)/Ke[0],Ie=$e*Me,_e=$e*ve,Je=ke/(-Me+ve),Fe=Je*-Me;O.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Fe),$.translateZ(Je),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();let C=$e+Je,E=He+Je,ne=Ie-Fe,Te=_e+(ke-Fe),Pe=it*He/E*C,Se=H*He/E*C;$.projectionMatrix.makePerspective(ne,Te,Pe,Se,C,E),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function W($,O){O===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(O.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;R.near=D.near=U.near=$.near,R.far=D.far=U.far=$.far,(P!==R.near||te!==R.far)&&(i.updateRenderState({depthNear:R.near,depthFar:R.far}),P=R.near,te=R.far);let O=$.parent,pe=R.cameras;W(R,O);for(let ke=0;ke<pe.length;ke++)W(pe[ke],O);pe.length===2?K(R,U,D):R.projectionMatrix.copy(U.projectionMatrix),ee($,R,O)};function ee($,O,pe){pe===null?$.matrix.copy(O.matrixWorld):($.matrix.copy(pe.matrixWorld),$.matrix.invert(),$.matrix.multiply(O.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(O.projectionMatrix),$.projectionMatrixInverse.copy(O.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Mr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)};let ge=null;function ye($,O){if(u=O.getViewerPose(c||o),_=O,u!==null){let pe=u.views;p!==null&&(e.setRenderTargetFramebuffer(m,p.framebuffer),e.setRenderTarget(m));let ke=!1;pe.length!==R.cameras.length&&(R.cameras.length=0,ke=!0);for(let we=0;we<pe.length;we++){let Ke=pe[we],$e=null;if(p!==null)$e=p.getViewport(Ke);else{let it=f.getViewSubImage(d,Ke);$e=it.viewport,we===0&&(e.setRenderTargetTextures(m,it.colorTexture,d.ignoreDepthValues?void 0:it.depthStencilTexture),e.setRenderTarget(m))}let He=J[we];He===void 0&&(He=new jt,He.layers.enable(we),He.viewport=new Dt,J[we]=He),He.matrix.fromArray(Ke.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(Ke.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set($e.x,$e.y,$e.width,$e.height),we===0&&(R.matrix.copy(He.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ke===!0&&R.cameras.push(He)}}for(let pe=0;pe<M.length;pe++){let ke=v[pe],we=M[pe];ke!==null&&we!==void 0&&we.update(ke,O,c||o)}ge&&ge($,O),O.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:O}),_=null}let de=new mp;de.setAnimationLoop(ye),this.setAnimationLoop=function($){ge=$},this.dispose=function(){}}};function Iv(s,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,pp(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,M,v,A){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),f(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&p(g,m,A)):m.isMeshMatcapMaterial?(r(g,m),_(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,M,v):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===pn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===pn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let M=e.get(m).envMap;if(M&&(g.envMap.value=M,g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap){g.lightMap.value=m.lightMap;let v=s._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=m.lightMapIntensity*v,t(m.lightMap,g.lightMapTransform)}m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,M,v){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=v*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),e.get(m).envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function p(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===pn&&g.clearcoatNormalScale.value.negate())),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let M=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Dv(s,e,t,n){let i={},r={},o=[],a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,v){let A=v.program;n.uniformBlockBinding(M,A)}function c(M,v){let A=i[M.id];A===void 0&&(_(M),A=u(M),i[M.id]=A,M.addEventListener("dispose",g));let B=v.program;n.updateUBOMapping(M,B);let U=e.render.frame;r[M.id]!==U&&(d(M),r[M.id]=U)}function u(M){let v=f();M.__bindingPointIndex=v;let A=s.createBuffer(),B=M.__size,U=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,A),s.bufferData(s.UNIFORM_BUFFER,B,U),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,A),A}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let v=i[M.id],A=M.uniforms,B=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let U=0,D=A.length;U<D;U++){let J=Array.isArray(A[U])?A[U]:[A[U]];for(let R=0,P=J.length;R<P;R++){let te=J[R];if(p(te,U,R,B)===!0){let z=te.__offset,Ce=Array.isArray(te.value)?te.value:[te.value],Y=0;for(let re=0;re<Ce.length;re++){let ue=Ce[re],K=x(ue);typeof ue=="number"||typeof ue=="boolean"?(te.__data[0]=ue,s.bufferSubData(s.UNIFORM_BUFFER,z+Y,te.__data)):ue.isMatrix3?(te.__data[0]=ue.elements[0],te.__data[1]=ue.elements[1],te.__data[2]=ue.elements[2],te.__data[3]=0,te.__data[4]=ue.elements[3],te.__data[5]=ue.elements[4],te.__data[6]=ue.elements[5],te.__data[7]=0,te.__data[8]=ue.elements[6],te.__data[9]=ue.elements[7],te.__data[10]=ue.elements[8],te.__data[11]=0):(ue.toArray(te.__data,Y),Y+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,te.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(M,v,A,B){let U=M.value,D=v+"_"+A;if(B[D]===void 0)return typeof U=="number"||typeof U=="boolean"?B[D]=U:B[D]=U.clone(),!0;{let J=B[D];if(typeof U=="number"||typeof U=="boolean"){if(J!==U)return B[D]=U,!0}else if(J.equals(U)===!1)return J.copy(U),!0}return!1}function _(M){let v=M.uniforms,A=0,B=16;for(let D=0,J=v.length;D<J;D++){let R=Array.isArray(v[D])?v[D]:[v[D]];for(let P=0,te=R.length;P<te;P++){let z=R[P],Ce=Array.isArray(z.value)?z.value:[z.value];for(let Y=0,re=Ce.length;Y<re;Y++){let ue=Ce[Y],K=x(ue),W=A%B;W!==0&&B-W<K.boundary&&(A+=B-W),z.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=A,A+=K.storage}}}let U=A%B;return U>0&&(A+=B-U),M.__size=A,M.__cache={},this}function x(M){let v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function g(M){let v=M.target;v.removeEventListener("dispose",g);let A=o.indexOf(v.__bindingPointIndex);o.splice(A,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function m(){for(let M in i)s.deleteBuffer(i[M]);o=[],i={},r={}}return{bind:l,update:c,dispose:m}}var vo=class{constructor(e={}){let{canvas:t=H0(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;let p=new Uint32Array(4),_=new Int32Array(4),x=null,g=null,m=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qe,this._useLegacyLights=!1,this.toneMapping=Zi,this.toneMappingExposure=1;let v=this,A=!1,B=0,U=0,D=null,J=-1,R=null,P=new Dt,te=new Dt,z=null,Ce=new Ye(0),Y=0,re=t.width,ue=t.height,K=1,W=null,ee=null,ge=new Dt(0,0,re,ue),ye=new Dt(0,0,re,ue),de=!1,$=new yo,O=!1,pe=!1,ke=null,we=new ft,Ke=new ce,$e=new L,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function it(){return D===null?K:1}let H=n;function Me(I,ie){for(let fe=0;fe<I.length;fe++){let xe=I[fe],le=t.getContext(xe,ie);if(le!==null)return le}return null}try{let I={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",F,!1),t.addEventListener("webglcontextrestored",T,!1),t.addEventListener("webglcontextcreationerror",Z,!1),H===null){let ie=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&ie.shift(),H=Me(ie,I),H===null)throw Me(ie)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let ve,Ie,_e,Je,Fe,C,E,ne,Te,Pe,Se,Ze,Ne,ze,Qe,et,Re,ct,G,Ae,Oe,Le,j,se;function he(){ve=new $_(H),Ie=new q_(H,ve,e),ve.init(Ie),Le=new Pv(H,ve,Ie),_e=new Rv(H,ve,Ie),Je=new ty(H),Fe=new gv,C=new Cv(H,ve,_e,Fe,Ie,Le,Je),E=new Z_(v),ne=new J_(v),Te=new cg(H,Ie),j=new W_(H,ve,Te,Ie),Pe=new Q_(H,Te,Je,j),Se=new ry(H,Pe,Te,Je),G=new sy(H,Ie,C),et=new Y_(Fe),Ze=new mv(v,E,ne,ve,Ie,j,et),Ne=new Iv(v,Fe),ze=new _v,Qe=new Tv(ve,Ie),ct=new H_(v,E,ne,_e,Se,d,l),Re=new Ev(v,Se,Ie),se=new Dv(H,Je,Ie,_e),Ae=new X_(H,ve,Je,Ie),Oe=new ey(H,ve,Je,Ie),Je.programs=Ze.programs,v.capabilities=Ie,v.extensions=ve,v.properties=Fe,v.renderLists=ze,v.shadowMap=Re,v.state=_e,v.info=Je}he();let Q=new uu(v,H);this.xr=Q,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let I=ve.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=ve.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(I){I!==void 0&&(K=I,this.setSize(re,ue,!1))},this.getSize=function(I){return I.set(re,ue)},this.setSize=function(I,ie,fe=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}re=I,ue=ie,t.width=Math.floor(I*K),t.height=Math.floor(ie*K),fe===!0&&(t.style.width=I+"px",t.style.height=ie+"px"),this.setViewport(0,0,I,ie)},this.getDrawingBufferSize=function(I){return I.set(re*K,ue*K).floor()},this.setDrawingBufferSize=function(I,ie,fe){re=I,ue=ie,K=fe,t.width=Math.floor(I*fe),t.height=Math.floor(ie*fe),this.setViewport(0,0,I,ie)},this.getCurrentViewport=function(I){return I.copy(P)},this.getViewport=function(I){return I.copy(ge)},this.setViewport=function(I,ie,fe,xe){I.isVector4?ge.set(I.x,I.y,I.z,I.w):ge.set(I,ie,fe,xe),_e.viewport(P.copy(ge).multiplyScalar(K).floor())},this.getScissor=function(I){return I.copy(ye)},this.setScissor=function(I,ie,fe,xe){I.isVector4?ye.set(I.x,I.y,I.z,I.w):ye.set(I,ie,fe,xe),_e.scissor(te.copy(ye).multiplyScalar(K).floor())},this.getScissorTest=function(){return de},this.setScissorTest=function(I){_e.setScissorTest(de=I)},this.setOpaqueSort=function(I){W=I},this.setTransparentSort=function(I){ee=I},this.getClearColor=function(I){return I.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor.apply(ct,arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha.apply(ct,arguments)},this.clear=function(I=!0,ie=!0,fe=!0){let xe=0;if(I){let le=!1;if(D!==null){let Ge=D.texture.format;le=Ge===op||Ge===rp||Ge===sp}if(le){let Ge=D.texture.type,tt=Ge===Ki||Ge===qi||Ge===ku||Ge===ws||Ge===np||Ge===ip,rt=ct.getClearColor(),at=ct.getClearAlpha(),ht=rt.r,ut=rt.g,lt=rt.b;tt?(p[0]=ht,p[1]=ut,p[2]=lt,p[3]=at,H.clearBufferuiv(H.COLOR,0,p)):(_[0]=ht,_[1]=ut,_[2]=lt,_[3]=at,H.clearBufferiv(H.COLOR,0,_))}else xe|=H.COLOR_BUFFER_BIT}ie&&(xe|=H.DEPTH_BUFFER_BIT),fe&&(xe|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(xe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",F,!1),t.removeEventListener("webglcontextrestored",T,!1),t.removeEventListener("webglcontextcreationerror",Z,!1),ze.dispose(),Qe.dispose(),Fe.dispose(),E.dispose(),ne.dispose(),Se.dispose(),j.dispose(),se.dispose(),Ze.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",We),Q.removeEventListener("sessionend",nt),ke&&(ke.dispose(),ke=null),dt.stop()};function F(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function T(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let I=Je.autoReset,ie=Re.enabled,fe=Re.autoUpdate,xe=Re.needsUpdate,le=Re.type;he(),Je.autoReset=I,Re.enabled=ie,Re.autoUpdate=fe,Re.needsUpdate=xe,Re.type=le}function Z(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function X(I){let ie=I.target;ie.removeEventListener("dispose",X),me(ie)}function me(I){V(I),Fe.remove(I)}function V(I){let ie=Fe.get(I).programs;ie!==void 0&&(ie.forEach(function(fe){Ze.releaseProgram(fe)}),I.isShaderMaterial&&Ze.releaseShaderCache(I))}this.renderBufferDirect=function(I,ie,fe,xe,le,Ge){ie===null&&(ie=He);let tt=le.isMesh&&le.matrixWorld.determinant()<0,rt=hs(I,ie,fe,xe,le);_e.setMaterial(xe,tt);let at=fe.index,ht=1;if(xe.wireframe===!0){if(at=Pe.getWireframeAttribute(fe),at===void 0)return;ht=2}let ut=fe.drawRange,lt=fe.attributes.position,Gt=ut.start*ht,cn=(ut.start+ut.count)*ht;Ge!==null&&(Gt=Math.max(Gt,Ge.start*ht),cn=Math.min(cn,(Ge.start+Ge.count)*ht)),at!==null?(Gt=Math.max(Gt,0),cn=Math.min(cn,at.count)):lt!=null&&(Gt=Math.max(Gt,0),cn=Math.min(cn,lt.count));let Vt=cn-Gt;if(Vt<0||Vt===1/0)return;j.setup(le,xe,rt,fe,at);let bn,Rt=Ae;if(at!==null&&(bn=Te.get(at),Rt=Oe,Rt.setIndex(bn)),le.isMesh)xe.wireframe===!0?(_e.setLineWidth(xe.wireframeLinewidth*it()),Rt.setMode(H.LINES)):Rt.setMode(H.TRIANGLES);else if(le.isLine){let st=xe.linewidth;st===void 0&&(st=1),_e.setLineWidth(st*it()),le.isLineSegments?Rt.setMode(H.LINES):le.isLineLoop?Rt.setMode(H.LINE_LOOP):Rt.setMode(H.LINE_STRIP)}else le.isPoints?Rt.setMode(H.POINTS):le.isSprite&&Rt.setMode(H.TRIANGLES);if(le.isBatchedMesh)Rt.renderMultiDraw(le._multiDrawStarts,le._multiDrawCounts,le._multiDrawCount);else if(le.isInstancedMesh)Rt.renderInstances(Gt,Vt,le.count);else if(fe.isInstancedBufferGeometry){let st=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,Vo=Math.min(fe.instanceCount,st);Rt.renderInstances(Gt,Vt,Vo)}else Rt.render(Gt,Vt)};function oe(I,ie,fe){I.transparent===!0&&I.side===vt&&I.forceSinglePass===!1?(I.side=pn,I.needsUpdate=!0,gn(I,ie,fe),I.side=hi,I.needsUpdate=!0,gn(I,ie,fe),I.side=vt):gn(I,ie,fe)}this.compile=function(I,ie,fe=null){fe===null&&(fe=I),g=Qe.get(fe),g.init(),M.push(g),fe.traverseVisible(function(le){le.isLight&&le.layers.test(ie.layers)&&(g.pushLight(le),le.castShadow&&g.pushShadow(le))}),I!==fe&&I.traverseVisible(function(le){le.isLight&&le.layers.test(ie.layers)&&(g.pushLight(le),le.castShadow&&g.pushShadow(le))}),g.setupLights(v._useLegacyLights);let xe=new Set;return I.traverse(function(le){let Ge=le.material;if(Ge)if(Array.isArray(Ge))for(let tt=0;tt<Ge.length;tt++){let rt=Ge[tt];oe(rt,fe,le),xe.add(rt)}else oe(Ge,fe,le),xe.add(Ge)}),M.pop(),g=null,xe},this.compileAsync=function(I,ie,fe=null){let xe=this.compile(I,ie,fe);return new Promise(le=>{function Ge(){if(xe.forEach(function(tt){Fe.get(tt).currentProgram.isReady()&&xe.delete(tt)}),xe.size===0){le(I);return}setTimeout(Ge,10)}ve.get("KHR_parallel_shader_compile")!==null?Ge():setTimeout(Ge,10)})};let Ee=null;function De(I){Ee&&Ee(I)}function We(){dt.stop()}function nt(){dt.start()}let dt=new mp;dt.setAnimationLoop(De),typeof self<"u"&&dt.setContext(self),this.setAnimationLoop=function(I){Ee=I,Q.setAnimationLoop(I),I===null?dt.stop():dt.start()},Q.addEventListener("sessionstart",We),Q.addEventListener("sessionend",nt),this.render=function(I,ie){if(ie!==void 0&&ie.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ie.parent===null&&ie.matrixWorldAutoUpdate===!0&&ie.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(ie),ie=Q.getCamera()),I.isScene===!0&&I.onBeforeRender(v,I,ie,D),g=Qe.get(I,M.length),g.init(),M.push(g),we.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),$.setFromProjectionMatrix(we),pe=this.localClippingEnabled,O=et.init(this.clippingPlanes,pe),x=ze.get(I,m.length),x.init(),m.push(x),pt(I,ie,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(W,ee),this.info.render.frame++,O===!0&&et.beginShadows();let fe=g.state.shadowsArray;if(Re.render(fe,I,ie),O===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset(),ct.render(x,I),g.setupLights(v._useLegacyLights),ie.isArrayCamera){let xe=ie.cameras;for(let le=0,Ge=xe.length;le<Ge;le++){let tt=xe[le];yt(x,I,tt,tt.viewport)}}else yt(x,I,ie);D!==null&&(C.updateMultisampleRenderTarget(D),C.updateRenderTargetMipmap(D)),I.isScene===!0&&I.onAfterRender(v,I,ie),j.resetDefaultState(),J=-1,R=null,M.pop(),M.length>0?g=M[M.length-1]:g=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function pt(I,ie,fe,xe){if(I.visible===!1)return;if(I.layers.test(ie.layers)){if(I.isGroup)fe=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(ie);else if(I.isLight)g.pushLight(I),I.castShadow&&g.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||$.intersectsSprite(I)){xe&&$e.setFromMatrixPosition(I.matrixWorld).applyMatrix4(we);let tt=Se.update(I),rt=I.material;rt.visible&&x.push(I,tt,rt,fe,$e.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||$.intersectsObject(I))){let tt=Se.update(I),rt=I.material;if(xe&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),$e.copy(I.boundingSphere.center)):(tt.boundingSphere===null&&tt.computeBoundingSphere(),$e.copy(tt.boundingSphere.center)),$e.applyMatrix4(I.matrixWorld).applyMatrix4(we)),Array.isArray(rt)){let at=tt.groups;for(let ht=0,ut=at.length;ht<ut;ht++){let lt=at[ht],Gt=rt[lt.materialIndex];Gt&&Gt.visible&&x.push(I,tt,Gt,fe,$e.z,lt)}}else rt.visible&&x.push(I,tt,rt,fe,$e.z,null)}}let Ge=I.children;for(let tt=0,rt=Ge.length;tt<rt;tt++)pt(Ge[tt],ie,fe,xe)}function yt(I,ie,fe,xe){let le=I.opaque,Ge=I.transmissive,tt=I.transparent;g.setupLightsView(fe),O===!0&&et.setGlobalState(v.clippingPlanes,fe),Ge.length>0&&Tt(le,Ge,ie,fe),xe&&_e.viewport(P.copy(xe)),le.length>0&&Ut(le,ie,fe),Ge.length>0&&Ut(Ge,ie,fe),tt.length>0&&Ut(tt,ie,fe),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Tt(I,ie,fe,xe){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;let Ge=Ie.isWebGL2;ke===null&&(ke=new ln(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?Qn:Ki,minFilter:Ji,samples:Ge?4:0})),v.getDrawingBufferSize(Ke),Ge?ke.setSize(Ke.x,Ke.y):ke.setSize(Ha(Ke.x),Ha(Ke.y));let tt=v.getRenderTarget();v.setRenderTarget(ke),v.getClearColor(Ce),Y=v.getClearAlpha(),Y<1&&v.setClearColor(16777215,.5),v.clear();let rt=v.toneMapping;v.toneMapping=Zi,Ut(I,fe,xe),C.updateMultisampleRenderTarget(ke),C.updateRenderTargetMipmap(ke);let at=!1;for(let ht=0,ut=ie.length;ht<ut;ht++){let lt=ie[ht],Gt=lt.object,cn=lt.geometry,Vt=lt.material,bn=lt.group;if(Vt.side===vt&&Gt.layers.test(xe.layers)){let Rt=Vt.side;Vt.side=pn,Vt.needsUpdate=!0,wt(Gt,fe,xe,cn,Vt,bn),Vt.side=Rt,Vt.needsUpdate=!0,at=!0}}at===!0&&(C.updateMultisampleRenderTarget(ke),C.updateRenderTargetMipmap(ke)),v.setRenderTarget(tt),v.setClearColor(Ce,Y),v.toneMapping=rt}function Ut(I,ie,fe){let xe=ie.isScene===!0?ie.overrideMaterial:null;for(let le=0,Ge=I.length;le<Ge;le++){let tt=I[le],rt=tt.object,at=tt.geometry,ht=xe===null?tt.material:xe,ut=tt.group;rt.layers.test(fe.layers)&&wt(rt,ie,fe,at,ht,ut)}}function wt(I,ie,fe,xe,le,Ge){I.onBeforeRender(v,ie,fe,xe,le,Ge),I.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),le.onBeforeRender(v,ie,fe,xe,I,Ge),le.transparent===!0&&le.side===vt&&le.forceSinglePass===!1?(le.side=pn,le.needsUpdate=!0,v.renderBufferDirect(fe,ie,xe,le,I,Ge),le.side=hi,le.needsUpdate=!0,v.renderBufferDirect(fe,ie,xe,le,I,Ge),le.side=vt):v.renderBufferDirect(fe,ie,xe,le,I,Ge),I.onAfterRender(v,ie,fe,xe,le,Ge)}function gn(I,ie,fe){ie.isScene!==!0&&(ie=He);let xe=Fe.get(I),le=g.state.lights,Ge=g.state.shadowsArray,tt=le.state.version,rt=Ze.getParameters(I,le.state,Ge,ie,fe),at=Ze.getProgramCacheKey(rt),ht=xe.programs;xe.environment=I.isMeshStandardMaterial?ie.environment:null,xe.fog=ie.fog,xe.envMap=(I.isMeshStandardMaterial?ne:E).get(I.envMap||xe.environment),ht===void 0&&(I.addEventListener("dispose",X),ht=new Map,xe.programs=ht);let ut=ht.get(at);if(ut!==void 0){if(xe.currentProgram===ut&&xe.lightsStateVersion===tt)return Nn(I,rt),ut}else rt.uniforms=Ze.getUniforms(I),I.onBuild(fe,rt,v),I.onBeforeCompile(rt,v),ut=Ze.acquireProgram(rt,at),ht.set(at,ut),xe.uniforms=rt.uniforms;let lt=xe.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(lt.clippingPlanes=et.uniform),Nn(I,rt),xe.needsLights=Dh(I),xe.lightsStateVersion=tt,xe.needsLights&&(lt.ambientLightColor.value=le.state.ambient,lt.lightProbe.value=le.state.probe,lt.directionalLights.value=le.state.directional,lt.directionalLightShadows.value=le.state.directionalShadow,lt.spotLights.value=le.state.spot,lt.spotLightShadows.value=le.state.spotShadow,lt.rectAreaLights.value=le.state.rectArea,lt.ltc_1.value=le.state.rectAreaLTC1,lt.ltc_2.value=le.state.rectAreaLTC2,lt.pointLights.value=le.state.point,lt.pointLightShadows.value=le.state.pointShadow,lt.hemisphereLights.value=le.state.hemi,lt.directionalShadowMap.value=le.state.directionalShadowMap,lt.directionalShadowMatrix.value=le.state.directionalShadowMatrix,lt.spotShadowMap.value=le.state.spotShadowMap,lt.spotLightMatrix.value=le.state.spotLightMatrix,lt.spotLightMap.value=le.state.spotLightMap,lt.pointShadowMap.value=le.state.pointShadowMap,lt.pointShadowMatrix.value=le.state.pointShadowMatrix),xe.currentProgram=ut,xe.uniformsList=null,ut}function rn(I){if(I.uniformsList===null){let ie=I.currentProgram.getUniforms();I.uniformsList=xr.seqWithValue(ie.seq,I.uniforms)}return I.uniformsList}function Nn(I,ie){let fe=Fe.get(I);fe.outputColorSpace=ie.outputColorSpace,fe.batching=ie.batching,fe.instancing=ie.instancing,fe.instancingColor=ie.instancingColor,fe.skinning=ie.skinning,fe.morphTargets=ie.morphTargets,fe.morphNormals=ie.morphNormals,fe.morphColors=ie.morphColors,fe.morphTargetsCount=ie.morphTargetsCount,fe.numClippingPlanes=ie.numClippingPlanes,fe.numIntersection=ie.numClipIntersection,fe.vertexAlphas=ie.vertexAlphas,fe.vertexTangents=ie.vertexTangents,fe.toneMapping=ie.toneMapping}function hs(I,ie,fe,xe,le){ie.isScene!==!0&&(ie=He),C.resetTextureUnits();let Ge=ie.fog,tt=xe.isMeshStandardMaterial?ie.environment:null,rt=D===null?v.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Qt,at=(xe.isMeshStandardMaterial?ne:E).get(xe.envMap||tt),ht=xe.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,ut=!!fe.attributes.tangent&&(!!xe.normalMap||xe.anisotropy>0),lt=!!fe.morphAttributes.position,Gt=!!fe.morphAttributes.normal,cn=!!fe.morphAttributes.color,Vt=Zi;xe.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Vt=v.toneMapping);let bn=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,Rt=bn!==void 0?bn.length:0,st=Fe.get(xe),Vo=g.state.lights;if(O===!0&&(pe===!0||I!==R)){let Sn=I===R&&xe.id===J;et.setState(xe,I,Sn)}let Et=!1;xe.version===st.__version?(st.needsLights&&st.lightsStateVersion!==Vo.state.version||st.outputColorSpace!==rt||le.isBatchedMesh&&st.batching===!1||!le.isBatchedMesh&&st.batching===!0||le.isInstancedMesh&&st.instancing===!1||!le.isInstancedMesh&&st.instancing===!0||le.isSkinnedMesh&&st.skinning===!1||!le.isSkinnedMesh&&st.skinning===!0||le.isInstancedMesh&&st.instancingColor===!0&&le.instanceColor===null||le.isInstancedMesh&&st.instancingColor===!1&&le.instanceColor!==null||st.envMap!==at||xe.fog===!0&&st.fog!==Ge||st.numClippingPlanes!==void 0&&(st.numClippingPlanes!==et.numPlanes||st.numIntersection!==et.numIntersection)||st.vertexAlphas!==ht||st.vertexTangents!==ut||st.morphTargets!==lt||st.morphNormals!==Gt||st.morphColors!==cn||st.toneMapping!==Vt||Ie.isWebGL2===!0&&st.morphTargetsCount!==Rt)&&(Et=!0):(Et=!0,st.__version=xe.version);let Zn=st.currentProgram;Et===!0&&(Zn=gn(xe,ie,le));let ii=!1,Ii=!1,Di=!1,Ct=Zn.getUniforms(),si=st.uniforms;if(_e.useProgram(Zn.program)&&(ii=!0,Ii=!0,Di=!0),xe.id!==J&&(J=xe.id,Ii=!0),ii||R!==I){Ct.setValue(H,"projectionMatrix",I.projectionMatrix),Ct.setValue(H,"viewMatrix",I.matrixWorldInverse);let Sn=Ct.map.cameraPosition;Sn!==void 0&&Sn.setValue(H,$e.setFromMatrixPosition(I.matrixWorld)),Ie.logarithmicDepthBuffer&&Ct.setValue(H,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(xe.isMeshPhongMaterial||xe.isMeshToonMaterial||xe.isMeshLambertMaterial||xe.isMeshBasicMaterial||xe.isMeshStandardMaterial||xe.isShaderMaterial)&&Ct.setValue(H,"isOrthographic",I.isOrthographicCamera===!0),R!==I&&(R=I,Ii=!0,Di=!0)}if(le.isSkinnedMesh){Ct.setOptional(H,le,"bindMatrix"),Ct.setOptional(H,le,"bindMatrixInverse");let Sn=le.skeleton;Sn&&(Ie.floatVertexTextures?(Sn.boneTexture===null&&Sn.computeBoneTexture(),Ct.setValue(H,"boneTexture",Sn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}le.isBatchedMesh&&(Ct.setOptional(H,le,"batchingTexture"),Ct.setValue(H,"batchingTexture",le._matricesTexture,C));let Wr=fe.morphAttributes;if((Wr.position!==void 0||Wr.normal!==void 0||Wr.color!==void 0&&Ie.isWebGL2===!0)&&G.update(le,fe,Zn),(Ii||st.receiveShadow!==le.receiveShadow)&&(st.receiveShadow=le.receiveShadow,Ct.setValue(H,"receiveShadow",le.receiveShadow)),xe.isMeshGouraudMaterial&&xe.envMap!==null&&(si.envMap.value=at,si.flipEnvMap.value=at.isCubeTexture&&at.isRenderTargetTexture===!1?-1:1),Ii&&(Ct.setValue(H,"toneMappingExposure",v.toneMappingExposure),st.needsLights&&kl(si,Di),Ge&&xe.fog===!0&&Ne.refreshFogUniforms(si,Ge),Ne.refreshMaterialUniforms(si,xe,K,ue,ke),xr.upload(H,rn(st),si,C)),xe.isShaderMaterial&&xe.uniformsNeedUpdate===!0&&(xr.upload(H,rn(st),si,C),xe.uniformsNeedUpdate=!1),xe.isSpriteMaterial&&Ct.setValue(H,"center",le.center),Ct.setValue(H,"modelViewMatrix",le.modelViewMatrix),Ct.setValue(H,"normalMatrix",le.normalMatrix),Ct.setValue(H,"modelMatrix",le.matrixWorld),xe.isShaderMaterial||xe.isRawShaderMaterial){let Sn=xe.uniformsGroups;for(let Bs=0,ks=Sn.length;Bs<ks;Bs++)if(Ie.isWebGL2){let Ho=Sn[Bs];se.update(Ho,Zn),se.bind(Ho,Zn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Zn}function kl(I,ie){I.ambientLightColor.needsUpdate=ie,I.lightProbe.needsUpdate=ie,I.directionalLights.needsUpdate=ie,I.directionalLightShadows.needsUpdate=ie,I.pointLights.needsUpdate=ie,I.pointLightShadows.needsUpdate=ie,I.spotLights.needsUpdate=ie,I.spotLightShadows.needsUpdate=ie,I.rectAreaLights.needsUpdate=ie,I.hemisphereLights.needsUpdate=ie}function Dh(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(I,ie,fe){Fe.get(I.texture).__webglTexture=ie,Fe.get(I.depthTexture).__webglTexture=fe;let xe=Fe.get(I);xe.__hasExternalTextures=!0,xe.__hasExternalTextures&&(xe.__autoAllocateDepthBuffer=fe===void 0,xe.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),xe.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(I,ie){let fe=Fe.get(I);fe.__webglFramebuffer=ie,fe.__useDefaultFramebuffer=ie===void 0},this.setRenderTarget=function(I,ie=0,fe=0){D=I,B=ie,U=fe;let xe=!0,le=null,Ge=!1,tt=!1;if(I){let at=Fe.get(I);at.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(H.FRAMEBUFFER,null),xe=!1):at.__webglFramebuffer===void 0?C.setupRenderTarget(I):at.__hasExternalTextures&&C.rebindTextures(I,Fe.get(I.texture).__webglTexture,Fe.get(I.depthTexture).__webglTexture);let ht=I.texture;(ht.isData3DTexture||ht.isDataArrayTexture||ht.isCompressedArrayTexture)&&(tt=!0);let ut=Fe.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(ut[ie])?le=ut[ie][fe]:le=ut[ie],Ge=!0):Ie.isWebGL2&&I.samples>0&&C.useMultisampledRTT(I)===!1?le=Fe.get(I).__webglMultisampledFramebuffer:Array.isArray(ut)?le=ut[fe]:le=ut,P.copy(I.viewport),te.copy(I.scissor),z=I.scissorTest}else P.copy(ge).multiplyScalar(K).floor(),te.copy(ye).multiplyScalar(K).floor(),z=de;if(_e.bindFramebuffer(H.FRAMEBUFFER,le)&&Ie.drawBuffers&&xe&&_e.drawBuffers(I,le),_e.viewport(P),_e.scissor(te),_e.setScissorTest(z),Ge){let at=Fe.get(I.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+ie,at.__webglTexture,fe)}else if(tt){let at=Fe.get(I.texture),ht=ie||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,at.__webglTexture,fe||0,ht)}J=-1},this.readRenderTargetPixels=function(I,ie,fe,xe,le,Ge,tt){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let rt=Fe.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&tt!==void 0&&(rt=rt[tt]),rt){_e.bindFramebuffer(H.FRAMEBUFFER,rt);try{let at=I.texture,ht=at.format,ut=at.type;if(ht!==Bn&&Le.convert(ht)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let lt=ut===Qn&&(ve.has("EXT_color_buffer_half_float")||Ie.isWebGL2&&ve.has("EXT_color_buffer_float"));if(ut!==Ki&&Le.convert(ut)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ut===Ti&&(Ie.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!lt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ie>=0&&ie<=I.width-xe&&fe>=0&&fe<=I.height-le&&H.readPixels(ie,fe,xe,le,Le.convert(ht),Le.convert(ut),Ge)}finally{let at=D!==null?Fe.get(D).__webglFramebuffer:null;_e.bindFramebuffer(H.FRAMEBUFFER,at)}}},this.copyFramebufferToTexture=function(I,ie,fe=0){let xe=Math.pow(2,-fe),le=Math.floor(ie.image.width*xe),Ge=Math.floor(ie.image.height*xe);C.setTexture2D(ie,0),H.copyTexSubImage2D(H.TEXTURE_2D,fe,0,0,I.x,I.y,le,Ge),_e.unbindTexture()},this.copyTextureToTexture=function(I,ie,fe,xe=0){let le=ie.image.width,Ge=ie.image.height,tt=Le.convert(fe.format),rt=Le.convert(fe.type);C.setTexture2D(fe,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,fe.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,fe.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,fe.unpackAlignment),ie.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,xe,I.x,I.y,le,Ge,tt,rt,ie.image.data):ie.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,xe,I.x,I.y,ie.mipmaps[0].width,ie.mipmaps[0].height,tt,ie.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,xe,I.x,I.y,tt,rt,ie.image),xe===0&&fe.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(I,ie,fe,xe,le=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Ge=I.max.x-I.min.x+1,tt=I.max.y-I.min.y+1,rt=I.max.z-I.min.z+1,at=Le.convert(xe.format),ht=Le.convert(xe.type),ut;if(xe.isData3DTexture)C.setTexture3D(xe,0),ut=H.TEXTURE_3D;else if(xe.isDataArrayTexture||xe.isCompressedArrayTexture)C.setTexture2DArray(xe,0),ut=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,xe.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,xe.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,xe.unpackAlignment);let lt=H.getParameter(H.UNPACK_ROW_LENGTH),Gt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),cn=H.getParameter(H.UNPACK_SKIP_PIXELS),Vt=H.getParameter(H.UNPACK_SKIP_ROWS),bn=H.getParameter(H.UNPACK_SKIP_IMAGES),Rt=fe.isCompressedTexture?fe.mipmaps[le]:fe.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,Rt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Rt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,I.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,I.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,I.min.z),fe.isDataTexture||fe.isData3DTexture?H.texSubImage3D(ut,le,ie.x,ie.y,ie.z,Ge,tt,rt,at,ht,Rt.data):fe.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(ut,le,ie.x,ie.y,ie.z,Ge,tt,rt,at,Rt.data)):H.texSubImage3D(ut,le,ie.x,ie.y,ie.z,Ge,tt,rt,at,ht,Rt),H.pixelStorei(H.UNPACK_ROW_LENGTH,lt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Gt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,cn),H.pixelStorei(H.UNPACK_SKIP_ROWS,Vt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,bn),le===0&&xe.generateMipmaps&&H.generateMipmap(ut),_e.unbindTexture()},this.initTexture=function(I){I.isCubeTexture?C.setTextureCube(I,0):I.isData3DTexture?C.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?C.setTexture2DArray(I,0):C.setTexture2D(I,0),_e.unbindTexture()},this.resetState=function(){B=0,U=0,D=null,_e.reset(),j.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===zu?"display-p3":"srgb",t.unpackColorSpace=Mt.workingColorSpace===bl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===qe?Es:cp}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Es?qe:Qt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},hu=class extends vo{};hu.prototype.isWebGL1Renderer=!0;var $a=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ye(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Er=class extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Rr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Zc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},xn=new L,Cs=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix4(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyNormalMatrix(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.transformDirection(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ci(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ci(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ci(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ci(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),i=Pt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),i=Pt(i,this.array),r=Pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Bt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},bo=class extends An{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ar,no=new L,lr=new L,cr=new L,ur=new ce,io=new ce,bp=new ft,wa=new L,so=new L,Aa=new L,wd=new ce,Nc=new ce,Ad=new ce,Qa=class extends kt{constructor(e=new bo){if(super(),this.isSprite=!0,this.type="Sprite",ar===void 0){ar=new Lt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Rr(t,5);ar.setIndex([0,1,2,0,2,3]),ar.setAttribute("position",new Cs(n,3,0,!1)),ar.setAttribute("uv",new Cs(n,2,3,!1))}this.geometry=ar,this.material=e,this.center=new ce(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),lr.setFromMatrixScale(this.matrixWorld),bp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),cr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&lr.multiplyScalar(-cr.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;Ea(wa.set(-.5,-.5,0),cr,o,lr,i,r),Ea(so.set(.5,-.5,0),cr,o,lr,i,r),Ea(Aa.set(.5,.5,0),cr,o,lr,i,r),wd.set(0,0),Nc.set(1,0),Ad.set(1,1);let a=e.ray.intersectTriangle(wa,so,Aa,!1,no);if(a===null&&(Ea(so.set(-.5,.5,0),cr,o,lr,i,r),Nc.set(0,1),a=e.ray.intersectTriangle(wa,Aa,so,!1,no),a===null))return;let l=e.ray.origin.distanceTo(no);l<e.near||l>e.far||t.push({distance:l,point:no.clone(),uv:Ts.getInterpolation(no,wa,so,Aa,wd,Nc,Ad,new ce),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ea(s,e,t,n,i,r){ur.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(io.x=r*ur.x-i*ur.y,io.y=i*ur.x+r*ur.y):io.copy(ur),s.copy(e),s.x+=io.x,s.y+=io.y,s.applyMatrix4(bp)}var Ed=new L,Rd=new Dt,Cd=new Dt,Uv=new L,Pd=new ft,Ra=new L,Oc=new Dn,Ld=new ft,Fc=new Ai,el=class extends ot{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=uf,this.bindMatrix=new ft,this.bindMatrixInverse=new ft,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Gn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ra),this.boundingBox.expandByPoint(Ra)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Dn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ra),this.boundingSphere.expandByPoint(Ra)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oc.copy(this.boundingSphere),Oc.applyMatrix4(i),e.ray.intersectsSphere(Oc)!==!1&&(Ld.copy(i).invert(),Fc.copy(e.ray).applyMatrix4(Ld),!(this.boundingBox!==null&&Fc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Fc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Dt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===uf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===c0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Rd.fromBufferAttribute(i.attributes.skinIndex,e),Cd.fromBufferAttribute(i.attributes.skinWeight,e),Ed.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Cd.getComponent(r);if(o!==0){let a=Rd.getComponent(r);Pd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Uv.copy(Ed).applyMatrix4(Pd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},So=class extends kt{constructor(){super(),this.isBone=!0,this.type="Bone"}},fu=class extends en{constructor(e=null,t=1,n=1,i,r,o,a,l,c=$t,u=$t,f,d){super(null,o,a,l,c,u,i,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Id=new ft,Nv=new ft,tl=class s{constructor(e=[],t=[]){this.uuid=zn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ft)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new ft;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Nv;Id.multiplyMatrices(a,t[r]),Id.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new fu(t,e,e,Bn,Ti);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new So),this.bones.push(o),this.boneInverses.push(new ft().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},Ps=class extends Bt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},hr=new ft,Dd=new ft,Ca=[],Ud=new Gn,Ov=new ft,ro=new ot,oo=new Dn,Cr=class extends ot{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ps(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Ov)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Gn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,hr),Ud.copy(e.boundingBox).applyMatrix4(hr),this.boundingBox.union(Ud)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Dn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,hr),oo.copy(e.boundingSphere).applyMatrix4(hr),this.boundingSphere.union(oo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,i=this.count;if(ro.geometry=this.geometry,ro.material=this.material,ro.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oo.copy(this.boundingSphere),oo.applyMatrix4(n),e.ray.intersectsSphere(oo)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,hr),Dd.multiplyMatrices(n,hr),ro.matrixWorld=Dd,ro.raycast(e,Ca);for(let o=0,a=Ca.length;o<a;o++){let l=Ca[o];l.instanceId=r,l.object=this,t.push(l)}Ca.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ps(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Ls=class extends An{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Nd=new L,Od=new L,Fd=new ft,Bc=new Ai,Pa=new Dn,Pr=class extends kt{constructor(e=new Lt,t=new Ls){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Nd.fromBufferAttribute(t,i-1),Od.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Nd.distanceTo(Od);e.setAttribute("lineDistance",new xt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pa.copy(n.boundingSphere),Pa.applyMatrix4(i),Pa.radius+=r,e.ray.intersectsSphere(Pa)===!1)return;Fd.copy(i).invert(),Bc.copy(e.ray).applyMatrix4(Fd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new L,u=new L,f=new L,d=new L,p=this.isLineSegments?2:1,_=n.index,g=n.attributes.position;if(_!==null){let m=Math.max(0,o.start),M=Math.min(_.count,o.start+o.count);for(let v=m,A=M-1;v<A;v+=p){let B=_.getX(v),U=_.getX(v+1);if(c.fromBufferAttribute(g,B),u.fromBufferAttribute(g,U),Bc.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);let J=e.ray.origin.distanceTo(d);J<e.near||J>e.far||t.push({distance:J,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let m=Math.max(0,o.start),M=Math.min(g.count,o.start+o.count);for(let v=m,A=M-1;v<A;v+=p){if(c.fromBufferAttribute(g,v),u.fromBufferAttribute(g,v+1),Bc.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);let U=e.ray.origin.distanceTo(d);U<e.near||U>e.far||t.push({distance:U,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},Bd=new L,kd=new L,Lr=class extends Pr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Bd.fromBufferAttribute(t,i),kd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Bd.distanceTo(kd);e.setAttribute("lineDistance",new xt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},nl=class extends Pr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Is=class extends An{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},zd=new ft,du=new Ai,La=new Dn,Ia=new L,Ir=class extends kt{constructor(e=new Lt,t=new Is){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),La.copy(n.boundingSphere),La.applyMatrix4(i),La.radius+=r,e.ray.intersectsSphere(La)===!1)return;zd.copy(i).invert(),du.copy(e.ray).applyMatrix4(zd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let _=d,x=p;_<x;_++){let g=c.getX(_);Ia.fromBufferAttribute(f,g),Gd(Ia,g,l,i,e,t,this)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let _=d,x=p;_<x;_++)Ia.fromBufferAttribute(f,_),Gd(Ia,_,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Gd(s,e,t,n,i,r,o){let a=du.distanceSqToPoint(s);if(a<t){let l=new L;du.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}var Ot=class extends en{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Vn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let u=n[i],d=n[i+1]-u,p=(o-u)/d;return(i+p)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new ce:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new L,i=[],r=[],o=[],a=new L,l=new ft;for(let p=0;p<=e;p++){let _=p/e;i[p]=this.getTangentAt(_,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE,u=Math.abs(i[0].x),f=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();let _=Math.acos(Kt(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,_))}o[p].crossVectors(i[p],r[p])}if(t===!0){let p=Math.acos(Kt(r[0].dot(r[e]),-1,1));p/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(i[_],p*_)),o[_].crossVectors(i[_],r[_])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Mo=class extends Vn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){let n=t||new ce,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*u-p*f+this.aX,c=d*f+p*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},pu=class extends Mo{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Hu(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,f){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+f)+(l-a)/f;d*=u,p*=u,i(o,a,d,p)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var Da=new L,kc=new Hu,zc=new Hu,Gc=new Hu,Qi=class extends Vn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new L){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%r]:(Da.subVectors(i[0],i[1]).add(i[0]),c=Da);let f=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(Da.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Da),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(f),p),x=Math.pow(f.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(u),p);x<1e-4&&(x=1),_<1e-4&&(_=x),g<1e-4&&(g=x),kc.initNonuniformCatmullRom(c.x,f.x,d.x,u.x,_,x,g),zc.initNonuniformCatmullRom(c.y,f.y,d.y,u.y,_,x,g),Gc.initNonuniformCatmullRom(c.z,f.z,d.z,u.z,_,x,g)}else this.curveType==="catmullrom"&&(kc.initCatmullRom(c.x,f.x,d.x,u.x,this.tension),zc.initCatmullRom(c.y,f.y,d.y,u.y,this.tension),Gc.initCatmullRom(c.z,f.z,d.z,u.z,this.tension));return n.set(kc.calc(l),zc.calc(l),Gc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new L().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Vd(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function Fv(s,e){let t=1-s;return t*t*e}function Bv(s,e){return 2*(1-s)*s*e}function kv(s,e){return s*s*e}function po(s,e,t,n){return Fv(s,e)+Bv(s,t)+kv(s,n)}function zv(s,e){let t=1-s;return t*t*t*e}function Gv(s,e){let t=1-s;return 3*t*t*s*e}function Vv(s,e){return 3*(1-s)*s*s*e}function Hv(s,e){return s*s*s*e}function mo(s,e,t,n,i){return zv(s,e)+Gv(s,t)+Vv(s,n)+Hv(s,i)}var il=class extends Vn{constructor(e=new ce,t=new ce,n=new ce,i=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ce){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(mo(e,i.x,r.x,o.x,a.x),mo(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},mu=class extends Vn{constructor(e=new L,t=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new L){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(mo(e,i.x,r.x,o.x,a.x),mo(e,i.y,r.y,o.y,a.y),mo(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},sl=class extends Vn{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},gu=class extends Vn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},rl=class extends Vn{constructor(e=new ce,t=new ce,n=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ce){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(po(e,i.x,r.x,o.x),po(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ol=class extends Vn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(po(e,i.x,r.x,o.x),po(e,i.y,r.y,o.y),po(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},al=class extends Vn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],f=i[o>i.length-3?i.length-1:o+2];return n.set(Vd(a,l.x,c.x,u.x,f.x),Vd(a,l.y,c.y,u.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new ce().fromArray(i))}return this}},ll=Object.freeze({__proto__:null,ArcCurve:pu,CatmullRomCurve3:Qi,CubicBezierCurve:il,CubicBezierCurve3:mu,EllipseCurve:Mo,LineCurve:sl,LineCurve3:gu,QuadraticBezierCurve:rl,QuadraticBezierCurve3:ol,SplineCurve:al}),xu=class extends Vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ll[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new ll[i.type]().fromJSON(i))}return this}},cl=class extends xu{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new sl(this.currentPoint.clone(),new ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new rl(this.currentPoint.clone(),new ce(e,t),new ce(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){let a=new il(this.currentPoint.clone(),new ce(e,t),new ce(n,i),new ce(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new al(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){let c=new Mo(e,t,n,i,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Dr=class s extends Lt{constructor(e=[new ce(0,-.5),new ce(.5,0),new ce(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Kt(i,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/t,f=new L,d=new ce,p=new L,_=new L,x=new L,g=0,m=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:g=e[M+1].x-e[M].x,m=e[M+1].y-e[M].y,p.x=m*1,p.y=-g,p.z=m*0,x.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:g=e[M+1].x-e[M].x,m=e[M+1].y-e[M].y,p.x=m*1,p.y=-g,p.z=m*0,_.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),l.push(p.x,p.y,p.z),x.copy(_)}for(let M=0;M<=t;M++){let v=n+M*u*i,A=Math.sin(v),B=Math.cos(v);for(let U=0;U<=e.length-1;U++){f.x=e[U].x*A,f.y=e[U].y,f.z=e[U].x*B,o.push(f.x,f.y,f.z),d.x=M/t,d.y=U/(e.length-1),a.push(d.x,d.y);let D=l[3*U+0]*A,J=l[3*U+1],R=l[3*U+0]*B;c.push(D,J,R)}}for(let M=0;M<t;M++)for(let v=0;v<e.length-1;v++){let A=v+M*e.length,B=A,U=A+e.length,D=A+e.length+1,J=A+1;r.push(B,U,J),r.push(D,J,U)}this.setIndex(r),this.setAttribute("position",new xt(o,3)),this.setAttribute("uv",new xt(a,2)),this.setAttribute("normal",new xt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}};var es=class s extends Lt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new L,u=new ce;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=t;f++,d+=3){let p=n+f/t*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new xt(o,3)),this.setAttribute("normal",new xt(a,3)),this.setAttribute("uv",new xt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Hn=class s extends Lt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let u=[],f=[],d=[],p=[],_=0,x=[],g=n/2,m=0;M(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new xt(f,3)),this.setAttribute("normal",new xt(d,3)),this.setAttribute("uv",new xt(p,2));function M(){let A=new L,B=new L,U=0,D=(t-e)/n;for(let J=0;J<=r;J++){let R=[],P=J/r,te=P*(t-e)+e;for(let z=0;z<=i;z++){let Ce=z/i,Y=Ce*l+a,re=Math.sin(Y),ue=Math.cos(Y);B.x=te*re,B.y=-P*n+g,B.z=te*ue,f.push(B.x,B.y,B.z),A.set(re,D,ue).normalize(),d.push(A.x,A.y,A.z),p.push(Ce,1-P),R.push(_++)}x.push(R)}for(let J=0;J<i;J++)for(let R=0;R<r;R++){let P=x[R][J],te=x[R+1][J],z=x[R+1][J+1],Ce=x[R][J+1];u.push(P,te,Ce),u.push(te,z,Ce),U+=6}c.addGroup(m,U,0),m+=U}function v(A){let B=_,U=new ce,D=new L,J=0,R=A===!0?e:t,P=A===!0?1:-1;for(let z=1;z<=i;z++)f.push(0,g*P,0),d.push(0,P,0),p.push(.5,.5),_++;let te=_;for(let z=0;z<=i;z++){let Y=z/i*l+a,re=Math.cos(Y),ue=Math.sin(Y);D.x=R*ue,D.y=g*P,D.z=R*re,f.push(D.x,D.y,D.z),d.push(0,P,0),U.x=re*.5+.5,U.y=ue*.5*P+.5,p.push(U.x,U.y),_++}for(let z=0;z<i;z++){let Ce=B+z,Y=te+z;A===!0?u.push(Y,Y+1,Ce):u.push(Y+1,Y,Ce),J+=3}c.addGroup(m,J,A===!0?1:2),m+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},To=class s extends Hn{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},_u=class s extends Lt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],o=[];a(i),c(n),u(),this.setAttribute("position",new xt(r,3)),this.setAttribute("normal",new xt(r.slice(),3)),this.setAttribute("uv",new xt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let v=new L,A=new L,B=new L;for(let U=0;U<t.length;U+=3)p(t[U+0],v),p(t[U+1],A),p(t[U+2],B),l(v,A,B,M)}function l(M,v,A,B){let U=B+1,D=[];for(let J=0;J<=U;J++){D[J]=[];let R=M.clone().lerp(A,J/U),P=v.clone().lerp(A,J/U),te=U-J;for(let z=0;z<=te;z++)z===0&&J===U?D[J][z]=R:D[J][z]=R.clone().lerp(P,z/te)}for(let J=0;J<U;J++)for(let R=0;R<2*(U-J)-1;R++){let P=Math.floor(R/2);R%2===0?(d(D[J][P+1]),d(D[J+1][P]),d(D[J][P])):(d(D[J][P+1]),d(D[J+1][P+1]),d(D[J+1][P]))}}function c(M){let v=new L;for(let A=0;A<r.length;A+=3)v.x=r[A+0],v.y=r[A+1],v.z=r[A+2],v.normalize().multiplyScalar(M),r[A+0]=v.x,r[A+1]=v.y,r[A+2]=v.z}function u(){let M=new L;for(let v=0;v<r.length;v+=3){M.x=r[v+0],M.y=r[v+1],M.z=r[v+2];let A=g(M)/2/Math.PI+.5,B=m(M)/Math.PI+.5;o.push(A,1-B)}_(),f()}function f(){for(let M=0;M<o.length;M+=6){let v=o[M+0],A=o[M+2],B=o[M+4],U=Math.max(v,A,B),D=Math.min(v,A,B);U>.9&&D<.1&&(v<.2&&(o[M+0]+=1),A<.2&&(o[M+2]+=1),B<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function p(M,v){let A=M*3;v.x=e[A+0],v.y=e[A+1],v.z=e[A+2]}function _(){let M=new L,v=new L,A=new L,B=new L,U=new ce,D=new ce,J=new ce;for(let R=0,P=0;R<r.length;R+=9,P+=6){M.set(r[R+0],r[R+1],r[R+2]),v.set(r[R+3],r[R+4],r[R+5]),A.set(r[R+6],r[R+7],r[R+8]),U.set(o[P+0],o[P+1]),D.set(o[P+2],o[P+3]),J.set(o[P+4],o[P+5]),B.copy(M).add(v).add(A).divideScalar(3);let te=g(B);x(U,P+0,M,te),x(D,P+2,v,te),x(J,P+4,A,te)}}function x(M,v,A,B){B<0&&M.x===1&&(o[v]=M.x-1),A.x===0&&A.z===0&&(o[v]=B/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.details)}};var Wn=class extends cl{constructor(e){super(e),this.uuid=zn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new cl().fromJSON(i))}return this}},Wv={triangulate:function(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=Sp(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,f,d,p;if(n&&(r=Kv(s,e,r,t)),s.length>80*t){a=c=s[0],l=u=s[1];for(let _=t;_<i;_+=t)f=s[_],d=s[_+1],f<a&&(a=f),d<l&&(l=d),f>c&&(c=f),d>u&&(u=d);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return wo(r,o,t,a,l,p,0),o}};function Sp(s,e,t,n,i){let r,o;if(i===o1(s,e,t,n)>0)for(r=e;r<t;r+=n)o=Hd(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=Hd(r,s[r],s[r+1],o);return o&&Ml(o,o.next)&&(Eo(o),o=o.next),o}function Ds(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Ml(t,t.next)||Wt(t.prev,t,t.next)===0)){if(Eo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function wo(s,e,t,n,i,r,o){if(!s)return;!o&&r&&e1(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?qv(s,n,i,r):Xv(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),Eo(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=Yv(Ds(s),e,t),wo(s,e,t,n,i,r,2)):o===2&&Zv(s,e,t,n,i,r):wo(Ds(s),e,t,n,i,r,1);break}}}function Xv(s){let e=s.prev,t=s,n=s.next;if(Wt(e,t,n)>=0)return!1;let i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=i<r?i<o?i:o:r<o?r:o,f=a<l?a<c?a:c:l<c?l:c,d=i>r?i>o?i:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c,_=n.next;for(;_!==e;){if(_.x>=u&&_.x<=d&&_.y>=f&&_.y<=p&&pr(i,a,r,l,o,c,_.x,_.y)&&Wt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function qv(s,e,t,n){let i=s.prev,r=s,o=s.next;if(Wt(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,u=i.y,f=r.y,d=o.y,p=a<l?a<c?a:c:l<c?l:c,_=u<f?u<d?u:d:f<d?f:d,x=a>l?a>c?a:c:l>c?l:c,g=u>f?u>d?u:d:f>d?f:d,m=yu(p,_,e,t,n),M=yu(x,g,e,t,n),v=s.prevZ,A=s.nextZ;for(;v&&v.z>=m&&A&&A.z<=M;){if(v.x>=p&&v.x<=x&&v.y>=_&&v.y<=g&&v!==i&&v!==o&&pr(a,u,l,f,c,d,v.x,v.y)&&Wt(v.prev,v,v.next)>=0||(v=v.prevZ,A.x>=p&&A.x<=x&&A.y>=_&&A.y<=g&&A!==i&&A!==o&&pr(a,u,l,f,c,d,A.x,A.y)&&Wt(A.prev,A,A.next)>=0))return!1;A=A.nextZ}for(;v&&v.z>=m;){if(v.x>=p&&v.x<=x&&v.y>=_&&v.y<=g&&v!==i&&v!==o&&pr(a,u,l,f,c,d,v.x,v.y)&&Wt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;A&&A.z<=M;){if(A.x>=p&&A.x<=x&&A.y>=_&&A.y<=g&&A!==i&&A!==o&&pr(a,u,l,f,c,d,A.x,A.y)&&Wt(A.prev,A,A.next)>=0)return!1;A=A.nextZ}return!0}function Yv(s,e,t){let n=s;do{let i=n.prev,r=n.next.next;!Ml(i,r)&&Mp(i,n,n.next,r)&&Ao(i,r)&&Ao(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Eo(n),Eo(n.next),n=s=r),n=n.next}while(n!==s);return Ds(n)}function Zv(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&i1(o,a)){let l=Tp(o,a);o=Ds(o,o.next),l=Ds(l,l.next),wo(o,e,t,n,i,r,0),wo(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Kv(s,e,t,n){let i=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=Sp(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(n1(c));for(i.sort(jv),r=0;r<i.length;r++)t=Jv(i[r],t);return t}function jv(s,e){return s.x-e.x}function Jv(s,e){let t=$v(s,e);if(!t)return e;let n=Tp(t,s);return Ds(n,n.next),Ds(t,t.next)}function $v(s,e){let t=e,n=-1/0,i,r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===r))return i}t=t.next}while(t!==e);if(!i)return null;let a=i,l=i.x,c=i.y,u=1/0,f;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&pr(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(f=Math.abs(o-t.y)/(r-t.x),Ao(t,s)&&(f<u||f===u&&(t.x>i.x||t.x===i.x&&Qv(i,t)))&&(i=t,u=f)),t=t.next;while(t!==a);return i}function Qv(s,e){return Wt(s.prev,s,e.prev)<0&&Wt(e.next,s,s.next)<0}function e1(s,e,t,n){let i=s;do i.z===0&&(i.z=yu(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,t1(i)}function t1(s){let e,t,n,i,r,o,a,l,c=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(o>1);return s}function yu(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function n1(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function pr(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function i1(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!s1(s,e)&&(Ao(s,e)&&Ao(e,s)&&r1(s,e)&&(Wt(s.prev,s,e.prev)||Wt(s,e.prev,e))||Ml(s,e)&&Wt(s.prev,s,s.next)>0&&Wt(e.prev,e,e.next)>0)}function Wt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Ml(s,e){return s.x===e.x&&s.y===e.y}function Mp(s,e,t,n){let i=Na(Wt(s,e,t)),r=Na(Wt(s,e,n)),o=Na(Wt(t,n,s)),a=Na(Wt(t,n,e));return!!(i!==r&&o!==a||i===0&&Ua(s,t,e)||r===0&&Ua(s,n,e)||o===0&&Ua(t,s,n)||a===0&&Ua(t,e,n))}function Ua(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Na(s){return s>0?1:s<0?-1:0}function s1(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Mp(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Ao(s,e){return Wt(s.prev,s,s.next)<0?Wt(s,e,s.next)>=0&&Wt(s,s.prev,e)>=0:Wt(s,e,s.prev)<0||Wt(s,s.next,e)<0}function r1(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Tp(s,e){let t=new vu(s.i,s.x,s.y),n=new vu(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Hd(s,e,t,n){let i=new vu(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Eo(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function vu(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function o1(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var ji=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];Wd(e),Xd(n,e);let o=e.length;t.forEach(Wd);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Xd(n,t[l]);let a=Wv.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Wd(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Xd(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var Ei=class s extends Lt{constructor(e=new Wn([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new xt(i,3)),this.setAttribute("uv",new xt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:p-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:a1,v,A=!1,B,U,D,J;m&&(v=m.getSpacedPoints(u),A=!0,d=!1,B=m.computeFrenetFrames(u,!1),U=new L,D=new L,J=new L),d||(g=0,p=0,_=0,x=0);let R=a.extractPoints(c),P=R.shape,te=R.holes;if(!ji.isClockWise(P)){P=P.reverse();for(let H=0,Me=te.length;H<Me;H++){let ve=te[H];ji.isClockWise(ve)&&(te[H]=ve.reverse())}}let Ce=ji.triangulateShape(P,te),Y=P;for(let H=0,Me=te.length;H<Me;H++){let ve=te[H];P=P.concat(ve)}function re(H,Me,ve){return Me||console.error("THREE.ExtrudeGeometry: vec does not exist"),H.clone().addScaledVector(Me,ve)}let ue=P.length,K=Ce.length;function W(H,Me,ve){let Ie,_e,Je,Fe=H.x-Me.x,C=H.y-Me.y,E=ve.x-H.x,ne=ve.y-H.y,Te=Fe*Fe+C*C,Pe=Fe*ne-C*E;if(Math.abs(Pe)>Number.EPSILON){let Se=Math.sqrt(Te),Ze=Math.sqrt(E*E+ne*ne),Ne=Me.x-C/Se,ze=Me.y+Fe/Se,Qe=ve.x-ne/Ze,et=ve.y+E/Ze,Re=((Qe-Ne)*ne-(et-ze)*E)/(Fe*ne-C*E);Ie=Ne+Fe*Re-H.x,_e=ze+C*Re-H.y;let ct=Ie*Ie+_e*_e;if(ct<=2)return new ce(Ie,_e);Je=Math.sqrt(ct/2)}else{let Se=!1;Fe>Number.EPSILON?E>Number.EPSILON&&(Se=!0):Fe<-Number.EPSILON?E<-Number.EPSILON&&(Se=!0):Math.sign(C)===Math.sign(ne)&&(Se=!0),Se?(Ie=-C,_e=Fe,Je=Math.sqrt(Te)):(Ie=Fe,_e=C,Je=Math.sqrt(Te/2))}return new ce(Ie/Je,_e/Je)}let ee=[];for(let H=0,Me=Y.length,ve=Me-1,Ie=H+1;H<Me;H++,ve++,Ie++)ve===Me&&(ve=0),Ie===Me&&(Ie=0),ee[H]=W(Y[H],Y[ve],Y[Ie]);let ge=[],ye,de=ee.concat();for(let H=0,Me=te.length;H<Me;H++){let ve=te[H];ye=[];for(let Ie=0,_e=ve.length,Je=_e-1,Fe=Ie+1;Ie<_e;Ie++,Je++,Fe++)Je===_e&&(Je=0),Fe===_e&&(Fe=0),ye[Ie]=W(ve[Ie],ve[Je],ve[Fe]);ge.push(ye),de=de.concat(ye)}for(let H=0;H<g;H++){let Me=H/g,ve=p*Math.cos(Me*Math.PI/2),Ie=_*Math.sin(Me*Math.PI/2)+x;for(let _e=0,Je=Y.length;_e<Je;_e++){let Fe=re(Y[_e],ee[_e],Ie);we(Fe.x,Fe.y,-ve)}for(let _e=0,Je=te.length;_e<Je;_e++){let Fe=te[_e];ye=ge[_e];for(let C=0,E=Fe.length;C<E;C++){let ne=re(Fe[C],ye[C],Ie);we(ne.x,ne.y,-ve)}}}let $=_+x;for(let H=0;H<ue;H++){let Me=d?re(P[H],de[H],$):P[H];A?(D.copy(B.normals[0]).multiplyScalar(Me.x),U.copy(B.binormals[0]).multiplyScalar(Me.y),J.copy(v[0]).add(D).add(U),we(J.x,J.y,J.z)):we(Me.x,Me.y,0)}for(let H=1;H<=u;H++)for(let Me=0;Me<ue;Me++){let ve=d?re(P[Me],de[Me],$):P[Me];A?(D.copy(B.normals[H]).multiplyScalar(ve.x),U.copy(B.binormals[H]).multiplyScalar(ve.y),J.copy(v[H]).add(D).add(U),we(J.x,J.y,J.z)):we(ve.x,ve.y,f/u*H)}for(let H=g-1;H>=0;H--){let Me=H/g,ve=p*Math.cos(Me*Math.PI/2),Ie=_*Math.sin(Me*Math.PI/2)+x;for(let _e=0,Je=Y.length;_e<Je;_e++){let Fe=re(Y[_e],ee[_e],Ie);we(Fe.x,Fe.y,f+ve)}for(let _e=0,Je=te.length;_e<Je;_e++){let Fe=te[_e];ye=ge[_e];for(let C=0,E=Fe.length;C<E;C++){let ne=re(Fe[C],ye[C],Ie);A?we(ne.x,ne.y+v[u-1].y,v[u-1].x+ve):we(ne.x,ne.y,f+ve)}}}O(),pe();function O(){let H=i.length/3;if(d){let Me=0,ve=ue*Me;for(let Ie=0;Ie<K;Ie++){let _e=Ce[Ie];Ke(_e[2]+ve,_e[1]+ve,_e[0]+ve)}Me=u+g*2,ve=ue*Me;for(let Ie=0;Ie<K;Ie++){let _e=Ce[Ie];Ke(_e[0]+ve,_e[1]+ve,_e[2]+ve)}}else{for(let Me=0;Me<K;Me++){let ve=Ce[Me];Ke(ve[2],ve[1],ve[0])}for(let Me=0;Me<K;Me++){let ve=Ce[Me];Ke(ve[0]+ue*u,ve[1]+ue*u,ve[2]+ue*u)}}n.addGroup(H,i.length/3-H,0)}function pe(){let H=i.length/3,Me=0;ke(Y,Me),Me+=Y.length;for(let ve=0,Ie=te.length;ve<Ie;ve++){let _e=te[ve];ke(_e,Me),Me+=_e.length}n.addGroup(H,i.length/3-H,1)}function ke(H,Me){let ve=H.length;for(;--ve>=0;){let Ie=ve,_e=ve-1;_e<0&&(_e=H.length-1);for(let Je=0,Fe=u+g*2;Je<Fe;Je++){let C=ue*Je,E=ue*(Je+1),ne=Me+Ie+C,Te=Me+_e+C,Pe=Me+_e+E,Se=Me+Ie+E;$e(ne,Te,Pe,Se)}}}function we(H,Me,ve){l.push(H),l.push(Me),l.push(ve)}function Ke(H,Me,ve){He(H),He(Me),He(ve);let Ie=i.length/3,_e=M.generateTopUV(n,i,Ie-3,Ie-2,Ie-1);it(_e[0]),it(_e[1]),it(_e[2])}function $e(H,Me,ve,Ie){He(H),He(Me),He(Ie),He(Me),He(ve),He(Ie);let _e=i.length/3,Je=M.generateSideWallUV(n,i,_e-6,_e-3,_e-2,_e-1);it(Je[0]),it(Je[1]),it(Je[3]),it(Je[1]),it(Je[2]),it(Je[3])}function He(H){i.push(l[H*3+0]),i.push(l[H*3+1]),i.push(l[H*3+2])}function it(H){r.push(H.x),r.push(H.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return l1(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new ll[i.type]().fromJSON(i)),new s(n,e.options)}},a1={generateTopUV:function(s,e,t,n,i){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new ce(r,o),new ce(a,l),new ce(c,u)]},generateSideWallUV:function(s,e,t,n,i,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],f=e[n*3+2],d=e[i*3],p=e[i*3+1],_=e[i*3+2],x=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ce(o,1-l),new ce(c,1-f),new ce(d,1-_),new ce(x,1-m)]:[new ce(a,1-l),new ce(u,1-f),new ce(p,1-_),new ce(g,1-m)]}};function l1(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ul=class s extends _u{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var Ro=class s extends Lt{constructor(e=new Wn([new ce(0,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new xt(i,3)),this.setAttribute("normal",new xt(r,3)),this.setAttribute("uv",new xt(o,2));function c(u){let f=i.length/3,d=u.extractPoints(t),p=d.shape,_=d.holes;ji.isClockWise(p)===!1&&(p=p.reverse());for(let g=0,m=_.length;g<m;g++){let M=_[g];ji.isClockWise(M)===!0&&(_[g]=M.reverse())}let x=ji.triangulateShape(p,_);for(let g=0,m=_.length;g<m;g++){let M=_[g];p=p.concat(M)}for(let g=0,m=p.length;g<m;g++){let M=p[g];i.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let g=0,m=x.length;g<m;g++){let M=x[g],v=M[0]+f,A=M[1]+f,B=M[2]+f;n.push(v,A,B),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return c1(t,e)}static fromJSON(e,t){let n=[];for(let i=0,r=e.shapes.length;i<r;i++){let o=t[e.shapes[i]];n.push(o)}return new s(n,e.curveSegments)}};function c1(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){let i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}var Ur=class s extends Lt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],f=new L,d=new L,p=[],_=[],x=[],g=[];for(let m=0;m<=n;m++){let M=[],v=m/n,A=0;m===0&&o===0?A=.5/t:m===n&&l===Math.PI&&(A=-.5/t);for(let B=0;B<=t;B++){let U=B/t;f.x=-e*Math.cos(i+U*r)*Math.sin(o+v*a),f.y=e*Math.cos(o+v*a),f.z=e*Math.sin(i+U*r)*Math.sin(o+v*a),_.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),g.push(U+A,1-v),M.push(c++)}u.push(M)}for(let m=0;m<n;m++)for(let M=0;M<t;M++){let v=u[m][M+1],A=u[m][M],B=u[m+1][M],U=u[m+1][M+1];(m!==0||o>0)&&p.push(v,A,U),(m!==n-1||l<Math.PI)&&p.push(A,B,U)}this.setIndex(p),this.setAttribute("position",new xt(_,3)),this.setAttribute("normal",new xt(x,3)),this.setAttribute("uv",new xt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var qt=class s extends Lt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],u=new L,f=new L,d=new L;for(let p=0;p<=n;p++)for(let _=0;_<=i;_++){let x=_/i*r,g=p/n*Math.PI*2;f.x=(e+t*Math.cos(g))*Math.cos(x),f.y=(e+t*Math.cos(g))*Math.sin(x),f.z=t*Math.sin(g),a.push(f.x,f.y,f.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),d.subVectors(f,u).normalize(),l.push(d.x,d.y,d.z),c.push(_/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let _=1;_<=i;_++){let x=(i+1)*p+_-1,g=(i+1)*(p-1)+_-1,m=(i+1)*(p-1)+_,M=(i+1)*p+_;o.push(x,g,M),o.push(g,m,M)}this.setIndex(o),this.setAttribute("position",new xt(a,3)),this.setAttribute("normal",new xt(l,3)),this.setAttribute("uv",new xt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Nr=class s extends Lt{constructor(e=new ol(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new L,l=new L,c=new ce,u=new L,f=[],d=[],p=[],_=[];x(),this.setIndex(_),this.setAttribute("position",new xt(f,3)),this.setAttribute("normal",new xt(d,3)),this.setAttribute("uv",new xt(p,2));function x(){for(let v=0;v<t;v++)g(v);g(r===!1?t:0),M(),m()}function g(v){u=e.getPointAt(v/t,u);let A=o.normals[v],B=o.binormals[v];for(let U=0;U<=i;U++){let D=U/i*Math.PI*2,J=Math.sin(D),R=-Math.cos(D);l.x=R*A.x+J*B.x,l.y=R*A.y+J*B.y,l.z=R*A.z+J*B.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,f.push(a.x,a.y,a.z)}}function m(){for(let v=1;v<=t;v++)for(let A=1;A<=i;A++){let B=(i+1)*(v-1)+(A-1),U=(i+1)*v+(A-1),D=(i+1)*v+A,J=(i+1)*(v-1)+A;_.push(B,U,J),_.push(U,D,J)}}function M(){for(let v=0;v<=t;v++)for(let A=0;A<=i;A++)c.x=v/t,c.y=A/i,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new ll[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var hl=class extends Jt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Xe=class extends An{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=up,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},vn=class extends Xe{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Oa(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function u1(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function h1(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function qd(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function wp(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var ts=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},bu=class extends ts{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Of,endingEnd:Of}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ff:r=e,a=2*t-n;break;case Bf:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ff:o=e,l=2*n-t;break;case Bf:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,p=this._weightNext,_=(n-t)/(i-t),x=_*_,g=x*_,m=-d*g+2*d*x-d*_,M=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*_+1,v=(-1-p)*g+(1.5+p)*x+.5*_,A=p*g-p*x;for(let B=0;B!==a;++B)r[B]=m*o[u+B]+M*o[c+B]+v*o[l+B]+A*o[f+B];return r}},Su=class extends ts{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),f=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*f+o[l+d]*u;return r}},Mu=class extends ts{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Xn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Oa(t,this.TimeBufferType),this.values=Oa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Oa(e.times,Array),values:Oa(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Mu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Su(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new bu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Sr:t=this.InterpolantFactoryMethodDiscrete;break;case Rs:t=this.InterpolantFactoryMethodLinear;break;case fc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Sr;case this.InterpolantFactoryMethodLinear:return Rs;case this.InterpolantFactoryMethodSmooth:return fc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&u1(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===fc,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{let f=a*n,d=f-n,p=f+n;for(let _=0;_!==n;++_){let x=t[f+_];if(x!==t[d+_]||x!==t[p+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*n,d=o*n;for(let p=0;p!==n;++p)t[d+p]=t[f+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Xn.prototype.TimeBufferType=Float32Array;Xn.prototype.ValueBufferType=Float32Array;Xn.prototype.DefaultInterpolation=Rs;var ns=class extends Xn{};ns.prototype.ValueTypeName="bool";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=Sr;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var fl=class extends Xn{};fl.prototype.ValueTypeName="color";var Ri=class extends Xn{};Ri.prototype.ValueTypeName="number";var Tu=class extends ts{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let u=c+a;c!==u;c+=4)wn.slerpFlat(r,0,o,c-a,o,c,l);return r}},di=class extends Xn{InterpolantFactoryMethodLinear(e){return new Tu(this.times,this.values,this.getValueSize(),e)}};di.prototype.ValueTypeName="quaternion";di.prototype.DefaultInterpolation=Rs;di.prototype.InterpolantFactoryMethodSmooth=void 0;var is=class extends Xn{};is.prototype.ValueTypeName="string";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=Sr;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var Ci=class extends Xn{};Ci.prototype.ValueTypeName="vector";var dl=class{constructor(e,t=-1,n,i=_0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=zn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(d1(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Xn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=h1(l);l=qd(l,1,u),c=qd(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ri(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let f=u[1],d=i[f];d||(i[f]=d=[]),d.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(f,d,p,_,x){if(p.length!==0){let g=[],m=[];wp(p,g,m,_),g.length!==0&&x.push(new f(d,g,m))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let f=0;f<c.length;f++){let d=c[f].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let p={},_;for(_=0;_<d.length;_++)if(d[_].morphTargets)for(let x=0;x<d[_].morphTargets.length;x++)p[d[_].morphTargets[x]]=-1;for(let x in p){let g=[],m=[];for(let M=0;M!==d[_].morphTargets.length;++M){let v=d[_];g.push(v.time),m.push(v.morphTarget===x?1:0)}i.push(new Ri(".morphTargetInfluence["+x+"]",g,m))}l=p.length*o}else{let p=".bones["+t[f].name+"]";n(Ci,p+".position",d,"pos",i),n(di,p+".quaternion",d,"rot",i),n(Ci,p+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function f1(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ri;case"vector":case"vector2":case"vector3":case"vector4":return Ci;case"color":return fl;case"quaternion":return di;case"bool":case"boolean":return ns;case"string":return is}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function d1(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=f1(s.type);if(s.times===void 0){let t=[],n=[];wp(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var Yi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},wu=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){let p=c[f],_=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}},p1=new wu,Pi=class{constructor(e){this.manager=e!==void 0?e:p1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Pi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Si={},Au=class extends Error{constructor(e,t){super(e),this.response=t}},Co=class extends Pi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Yi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Si[e]!==void 0){Si[e].push({onLoad:t,onProgress:n,onError:i});return}Si[e]=[],Si[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Si[e],f=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=d?parseInt(d):0,_=p!==0,x=0,g=new ReadableStream({start(m){M();function M(){f.read().then(({done:v,value:A})=>{if(v)m.close();else{x+=A.byteLength;let B=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:p});for(let U=0,D=u.length;U<D;U++){let J=u[U];J.onProgress&&J.onProgress(B)}m.enqueue(A),M()}})}}});return new Response(g)}else throw new Au(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{let f=/charset="?([^;"\s]*)"?/i.exec(a),d=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(_=>p.decode(_))}}}).then(c=>{Yi.add(e,c);let u=Si[e];delete Si[e];for(let f=0,d=u.length;f<d;f++){let p=u[f];p.onLoad&&p.onLoad(c)}}).catch(c=>{let u=Si[e];if(u===void 0)throw this.manager.itemError(e),c;delete Si[e];for(let f=0,d=u.length;f<d;f++){let p=u[f];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Eu=class extends Pi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Yi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=xo("img");function l(){u(),Yi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(f){u(),i&&i(f),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Or=class extends Pi{constructor(e){super(e)}load(e,t,n,i){let r=new en,o=new Eu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Fr=class extends kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},pl=class extends Fr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Vc=new ft,Yd=new L,Zd=new L,Po=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yo,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Yd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yd),Zd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zd),t.updateMatrixWorld(),Vc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Vc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ru=class extends Po{constructor(){super(new jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Mr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ml=class extends Fr{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Ru}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Kd=new ft,ao=new L,Hc=new L,Cu=class extends Po{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new Dt(2,1,1,1),new Dt(0,1,1,1),new Dt(3,1,1,1),new Dt(1,1,1,1),new Dt(3,0,1,1),new Dt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ao.setFromMatrixPosition(e.matrixWorld),n.position.copy(ao),Hc.copy(n.position),Hc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Hc),n.updateMatrixWorld(),i.makeTranslation(-ao.x,-ao.y,-ao.z),Kd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kd)}},Li=class extends Fr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Cu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Pu=class extends Po{constructor(){super(new $i(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Us=class extends Fr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new Pu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ss=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var gl=class extends Pi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Yi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Yi.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Yi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Yi.add(e,l),r.manager.itemStart(e)}};var xl=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=jd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=jd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function jd(){return(typeof performance>"u"?Date:performance).now()}var Wu="\\[\\]\\.:\\/",m1=new RegExp("["+Wu+"]","g"),Xu="[^"+Wu+"]",g1="[^"+Wu.replace("\\.","")+"]",x1=/((?:WC+[\/:])*)/.source.replace("WC",Xu),_1=/(WCOD+)?/.source.replace("WCOD",g1),y1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xu),v1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xu),b1=new RegExp("^"+x1+_1+y1+v1+"$"),S1=["material","materials","bones","map"],Lu=class{constructor(e,t,n){let i=n||Nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Nt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(m1,"")}static parseTrackName(e){let t=b1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);S1.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Nt.Composite=Lu;Nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Nt.prototype.GetterByBindingType=[Nt.prototype._getValue_direct,Nt.prototype._getValue_array,Nt.prototype._getValue_arrayElement,Nt.prototype._getValue_toArray];Nt.prototype.SetterByBindingTypeAndVersioning=[[Nt.prototype._setValue_direct,Nt.prototype._setValue_direct_setNeedsUpdate,Nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_array,Nt.prototype._setValue_array_setNeedsUpdate,Nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_arrayElement,Nt.prototype._setValue_arrayElement_setNeedsUpdate,Nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_fromArray,Nt.prototype._setValue_fromArray_setNeedsUpdate,Nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var fb=new Float32Array(1);var _l=class{constructor(e,t,n=0,i=1/0){this.ray=new Ai(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new _o,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Iu(e,this,n,t),n.sort(Jd),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Iu(e[i],this,n,t);return n.sort(Jd),n}};function Jd(s,e){return s.distance-e.distance}function Iu(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){let i=s.children;for(let r=0,o=i.length;r<o;r++)Iu(i[r],e,t,!0)}}var Lo=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Kt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var ei=matchMedia("(max-width:680px), (pointer:coarse)").matches,M1=new Set(["fashion-accessories-atlas-v1","fashion-garments-atlas-v1","student-mirror-reflection-v1","tea-pearl-seal-uv-v1"]),No=new Map,Tl=[],qu=0,Ap=ei&&!!window.sceneBoot?.deferTextures,Ep=s=>Promise.resolve().then(s);function T1(s){let e=new URL(s,document.baseURI);if(!e.pathname.includes("/textures/fast/")||!e.pathname.endsWith(".webp"))return null;let t=e.pathname.split("/").pop().replace(/\.webp$/,"");return e.pathname=e.pathname.replace("/textures/fast/","/textures/").replace(/\.webp$/,M1.has(t)?".png":".jpg"),e.href}function Zu(){window.dispatchEvent(new CustomEvent("scene-textures",{detail:wl()}))}function wl(){let s=[...No.values()];return{total:s.length,ready:s.filter(e=>e.status==="ready").length,pending:s.filter(e=>e.status==="pending"||e.status==="queued").length,failed:s.filter(e=>e.status==="failed").map(e=>e.url),fallbacks:s.filter(e=>e.usedFallback).length,decodedBytes:s.reduce((e,t)=>e+(t.status==="ready"?t.canvas.width*t.canvas.height*4:0),0)}}function w1(s){return new Promise((e,t)=>{let n=new Image;n.crossOrigin="anonymous",n.decoding="async";let i=setTimeout(()=>r(new Error("Image timed out")),2e4);function r(o){clearTimeout(i),n.onload=n.onerror=null,o?(n.src="",t(o)):e(n)}n.onload=()=>r(),n.onerror=()=>r(new Error("Image could not be decoded")),n.src=s})}async function A1(s){let e=[s.url,T1(s.url)].filter(Boolean),t;for(let n=0;n<e.length;n++){let i;try{i=await w1(e[n]);let r=ei?s.url.includes("/pbr/")?512:s.url.includes("fascia")?1024:768:2048,o=Math.min(1,r/Math.max(i.naturalWidth,i.naturalHeight));s.canvas.width=Math.max(1,Math.round(i.naturalWidth*o)),s.canvas.height=Math.max(1,Math.round(i.naturalHeight*o)),s.canvas.getContext("2d").drawImage(i,0,0,s.canvas.width,s.canvas.height),s.canvas.complete=!0,s.canvas.naturalWidth=s.canvas.width,s.canvas.naturalHeight=s.canvas.height,s.usedFallback=n>0,s.status="ready";for(let a of s.textures)a.needsUpdate=!0;s.canvas.dispatchEvent(new Event("load"));return}catch(r){t=r}finally{i&&(i.src="")}}s.status="failed",s.error=String(t),s.canvas.dispatchEvent(new Event("error"))}function Al(){if(!Ap)for(;qu<(ei?3:6)&&Tl.length;){let s=Tl.shift();s.status="pending",qu++,A1(s).finally(()=>{qu--,Zu(),Al()})}}function Rp(s){let e=new URL(s,document.baseURI).href;if(No.has(e))return No.get(e);let t=document.createElement("canvas");t.width=t.height=1,t.complete=!1,t.naturalWidth=t.naturalHeight=0;let n={url:e,canvas:t,source:new Tr(t),textures:new Set,status:"queued",usedFallback:!1};return No.set(e,n),Tl.push(n),Ep(()=>{Zu(),Al()}),n}function ti(s){return Rp(s).canvas}var Yu=class extends Or{load(e,t,n,i){let r=this.path?this.path+e:e;if(!/textures\/|blender_assets\//.test(r))return super.load(e,t,n,i);let o=Rp(r),a=new en;a.source=o.source,o.textures.add(a),ei&&(a.generateMipmaps=!1,a.minFilter=Yt);let l=()=>{a.needsUpdate=!0,t&&t(a)};return o.status==="ready"?Ep(l):o.canvas.addEventListener("load",l,{once:!0}),i&&o.canvas.addEventListener("error",i,{once:!0}),a}};function sn(s){return new Yu(s)}function Cp(){Ap=!1,Al()}function Pp(){for(let s of No.values())s.status==="failed"&&(s.status="queued",Tl.push(s));Zu(),Al()}var Lp={type:"change"},Ku={type:"start"},Ip={type:"end"},El=new Ai,Dp=new $n,E1=Math.cos(70*rs.DEG2RAD),Rl=class extends fi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ns.ROTATE,MIDDLE:Ns.DOLLY,RIGHT:Ns.PAN},this.touches={ONE:Os.ROTATE,TWO:Os.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(G){G.addEventListener("keydown",Se),this._domElementKeyEvents=G},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Se),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Lp),n.update(),r=i.NONE},this.update=(function(){let G=new L,Ae=new wn().setFromUnitVectors(e.up,new L(0,1,0)),Oe=Ae.clone().invert(),Le=new L,j=new wn,se=new L,he=2*Math.PI;return function(F=null){let T=n.object.position;G.copy(T).sub(n.target),G.applyQuaternion(Ae),a.setFromVector3(G),n.autoRotate&&r===i.NONE&&te(R(F)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Z=n.minAzimuthAngle,X=n.maxAzimuthAngle;isFinite(Z)&&isFinite(X)&&(Z<-Math.PI?Z+=he:Z>Math.PI&&(Z-=he),X<-Math.PI?X+=he:X>Math.PI&&(X-=he),Z<=X?a.theta=Math.max(Z,Math.min(X,a.theta)):a.theta=a.theta>(Z+X)/2?Math.max(Z,a.theta):Math.min(X,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&U||n.object.isOrthographicCamera?a.radius=ee(a.radius):a.radius=ee(a.radius*c),G.setFromSpherical(a),G.applyQuaternion(Oe),T.copy(n.target).add(G),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let me=!1;if(n.zoomToCursor&&U){let V=null;if(n.object.isPerspectiveCamera){let oe=G.length();V=ee(oe*c);let Ee=oe-V;n.object.position.addScaledVector(A,Ee),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let oe=new L(B.x,B.y,0);oe.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),me=!0;let Ee=new L(B.x,B.y,0);Ee.unproject(n.object),n.object.position.sub(Ee).add(oe),n.object.updateMatrixWorld(),V=G.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;V!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(V).add(n.object.position):(El.origin.copy(n.object.position),El.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(El.direction))<E1?e.lookAt(n.target):(Dp.setFromNormalAndCoplanarPoint(n.object.up,n.target),El.intersectPlane(Dp,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),me=!0);return c=1,U=!1,me||Le.distanceToSquared(n.object.position)>o||8*(1-j.dot(n.object.quaternion))>o||se.distanceToSquared(n.target)>0?(n.dispatchEvent(Lp),Le.copy(n.object.position),j.copy(n.object.quaternion),se.copy(n.target),!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ze),n.domElement.removeEventListener("pointerdown",Fe),n.domElement.removeEventListener("pointercancel",E),n.domElement.removeEventListener("wheel",Pe),n.domElement.removeEventListener("pointermove",C),n.domElement.removeEventListener("pointerup",E),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Se),n._domElementKeyEvents=null)};let n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=i.NONE,o=1e-6,a=new Lo,l=new Lo,c=1,u=new L,f=new ce,d=new ce,p=new ce,_=new ce,x=new ce,g=new ce,m=new ce,M=new ce,v=new ce,A=new L,B=new ce,U=!1,D=[],J={};function R(G){return G!==null?2*Math.PI/60*n.autoRotateSpeed*G:2*Math.PI/60/60*n.autoRotateSpeed}function P(G){let Ae=Math.abs(G)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*Ae)}function te(G){l.theta-=G}function z(G){l.phi-=G}let Ce=(function(){let G=new L;return function(Oe,Le){G.setFromMatrixColumn(Le,0),G.multiplyScalar(-Oe),u.add(G)}})(),Y=(function(){let G=new L;return function(Oe,Le){n.screenSpacePanning===!0?G.setFromMatrixColumn(Le,1):(G.setFromMatrixColumn(Le,0),G.crossVectors(n.object.up,G)),G.multiplyScalar(Oe),u.add(G)}})(),re=(function(){let G=new L;return function(Oe,Le){let j=n.domElement;if(n.object.isPerspectiveCamera){let se=n.object.position;G.copy(se).sub(n.target);let he=G.length();he*=Math.tan(n.object.fov/2*Math.PI/180),Ce(2*Oe*he/j.clientHeight,n.object.matrix),Y(2*Le*he/j.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(Ce(Oe*(n.object.right-n.object.left)/n.object.zoom/j.clientWidth,n.object.matrix),Y(Le*(n.object.top-n.object.bottom)/n.object.zoom/j.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function ue(G){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=G:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function K(G){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=G:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function W(G,Ae){if(!n.zoomToCursor)return;U=!0;let Oe=n.domElement.getBoundingClientRect(),Le=G-Oe.left,j=Ae-Oe.top,se=Oe.width,he=Oe.height;B.x=Le/se*2-1,B.y=-(j/he)*2+1,A.set(B.x,B.y,1).unproject(n.object).sub(n.object.position).normalize()}function ee(G){return Math.max(n.minDistance,Math.min(n.maxDistance,G))}function ge(G){f.set(G.clientX,G.clientY)}function ye(G){W(G.clientX,G.clientX),m.set(G.clientX,G.clientY)}function de(G){_.set(G.clientX,G.clientY)}function $(G){d.set(G.clientX,G.clientY),p.subVectors(d,f).multiplyScalar(n.rotateSpeed);let Ae=n.domElement;te(2*Math.PI*p.x/Ae.clientHeight),z(2*Math.PI*p.y/Ae.clientHeight),f.copy(d),n.update()}function O(G){M.set(G.clientX,G.clientY),v.subVectors(M,m),v.y>0?ue(P(v.y)):v.y<0&&K(P(v.y)),m.copy(M),n.update()}function pe(G){x.set(G.clientX,G.clientY),g.subVectors(x,_).multiplyScalar(n.panSpeed),re(g.x,g.y),_.copy(x),n.update()}function ke(G){W(G.clientX,G.clientY),G.deltaY<0?K(P(G.deltaY)):G.deltaY>0&&ue(P(G.deltaY)),n.update()}function we(G){let Ae=!1;switch(G.code){case n.keys.UP:G.ctrlKey||G.metaKey||G.shiftKey?z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):re(0,n.keyPanSpeed),Ae=!0;break;case n.keys.BOTTOM:G.ctrlKey||G.metaKey||G.shiftKey?z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):re(0,-n.keyPanSpeed),Ae=!0;break;case n.keys.LEFT:G.ctrlKey||G.metaKey||G.shiftKey?te(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):re(n.keyPanSpeed,0),Ae=!0;break;case n.keys.RIGHT:G.ctrlKey||G.metaKey||G.shiftKey?te(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):re(-n.keyPanSpeed,0),Ae=!0;break}Ae&&(G.preventDefault(),n.update())}function Ke(G){if(D.length===1)f.set(G.pageX,G.pageY);else{let Ae=ct(G),Oe=.5*(G.pageX+Ae.x),Le=.5*(G.pageY+Ae.y);f.set(Oe,Le)}}function $e(G){if(D.length===1)_.set(G.pageX,G.pageY);else{let Ae=ct(G),Oe=.5*(G.pageX+Ae.x),Le=.5*(G.pageY+Ae.y);_.set(Oe,Le)}}function He(G){let Ae=ct(G),Oe=G.pageX-Ae.x,Le=G.pageY-Ae.y,j=Math.sqrt(Oe*Oe+Le*Le);m.set(0,j)}function it(G){n.enableZoom&&He(G),n.enablePan&&$e(G)}function H(G){n.enableZoom&&He(G),n.enableRotate&&Ke(G)}function Me(G){if(D.length==1)d.set(G.pageX,G.pageY);else{let Oe=ct(G),Le=.5*(G.pageX+Oe.x),j=.5*(G.pageY+Oe.y);d.set(Le,j)}p.subVectors(d,f).multiplyScalar(n.rotateSpeed);let Ae=n.domElement;te(2*Math.PI*p.x/Ae.clientHeight),z(2*Math.PI*p.y/Ae.clientHeight),f.copy(d)}function ve(G){if(D.length===1)x.set(G.pageX,G.pageY);else{let Ae=ct(G),Oe=.5*(G.pageX+Ae.x),Le=.5*(G.pageY+Ae.y);x.set(Oe,Le)}g.subVectors(x,_).multiplyScalar(n.panSpeed),re(g.x,g.y),_.copy(x)}function Ie(G){let Ae=ct(G),Oe=G.pageX-Ae.x,Le=G.pageY-Ae.y,j=Math.sqrt(Oe*Oe+Le*Le);M.set(0,j),v.set(0,Math.pow(M.y/m.y,n.zoomSpeed)),ue(v.y),m.copy(M);let se=(G.pageX+Ae.x)*.5,he=(G.pageY+Ae.y)*.5;W(se,he)}function _e(G){n.enableZoom&&Ie(G),n.enablePan&&ve(G)}function Je(G){n.enableZoom&&Ie(G),n.enableRotate&&Me(G)}function Fe(G){n.enabled!==!1&&(D.length===0&&(n.domElement.setPointerCapture(G.pointerId),n.domElement.addEventListener("pointermove",C),n.domElement.addEventListener("pointerup",E)),Qe(G),G.pointerType==="touch"?Ze(G):ne(G))}function C(G){n.enabled!==!1&&(G.pointerType==="touch"?Ne(G):Te(G))}function E(G){et(G),D.length===0&&(n.domElement.releasePointerCapture(G.pointerId),n.domElement.removeEventListener("pointermove",C),n.domElement.removeEventListener("pointerup",E)),n.dispatchEvent(Ip),r=i.NONE}function ne(G){let Ae;switch(G.button){case 0:Ae=n.mouseButtons.LEFT;break;case 1:Ae=n.mouseButtons.MIDDLE;break;case 2:Ae=n.mouseButtons.RIGHT;break;default:Ae=-1}switch(Ae){case Ns.DOLLY:if(n.enableZoom===!1)return;ye(G),r=i.DOLLY;break;case Ns.ROTATE:if(G.ctrlKey||G.metaKey||G.shiftKey){if(n.enablePan===!1)return;de(G),r=i.PAN}else{if(n.enableRotate===!1)return;ge(G),r=i.ROTATE}break;case Ns.PAN:if(G.ctrlKey||G.metaKey||G.shiftKey){if(n.enableRotate===!1)return;ge(G),r=i.ROTATE}else{if(n.enablePan===!1)return;de(G),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Ku)}function Te(G){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;$(G);break;case i.DOLLY:if(n.enableZoom===!1)return;O(G);break;case i.PAN:if(n.enablePan===!1)return;pe(G);break}}function Pe(G){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(G.preventDefault(),n.dispatchEvent(Ku),ke(G),n.dispatchEvent(Ip))}function Se(G){n.enabled===!1||n.enablePan===!1||we(G)}function Ze(G){switch(Re(G),D.length){case 1:switch(n.touches.ONE){case Os.ROTATE:if(n.enableRotate===!1)return;Ke(G),r=i.TOUCH_ROTATE;break;case Os.PAN:if(n.enablePan===!1)return;$e(G),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Os.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;it(G),r=i.TOUCH_DOLLY_PAN;break;case Os.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;H(G),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Ku)}function Ne(G){switch(Re(G),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Me(G),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ve(G),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;_e(G),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Je(G),n.update();break;default:r=i.NONE}}function ze(G){n.enabled!==!1&&G.preventDefault()}function Qe(G){D.push(G.pointerId)}function et(G){delete J[G.pointerId];for(let Ae=0;Ae<D.length;Ae++)if(D[Ae]==G.pointerId){D.splice(Ae,1);return}}function Re(G){let Ae=J[G.pointerId];Ae===void 0&&(Ae=new ce,J[G.pointerId]=Ae),Ae.set(G.pageX,G.pageY)}function ct(G){let Ae=G.pointerId===D[0]?D[1]:D[0];return J[Ae]}n.domElement.addEventListener("contextmenu",ze),n.domElement.addEventListener("pointerdown",Fe),n.domElement.addEventListener("pointercancel",E),n.domElement.addEventListener("wheel",Pe,{passive:!1}),this.update()}};function Np(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new Lt,c=0;for(let u=0;u<s.length;++u){let f=s[u],d=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in f.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(f.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in f.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(f.morphAttributes[p])}if(e){let p;if(t)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(t){let u=0,f=[];for(let d=0;d<s.length;++d){let p=s[d].index;for(let _=0;_<p.count;++_)f.push(p.getX(_)+u);u+=s[d].attributes.position.count}l.setIndex(f)}for(let u in r){let f=Up(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,f)}for(let u in o){let f=o[u][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<f;++d){let p=[];for(let x=0;x<o[u].length;++x)p.push(o[u][x][d]);let _=Up(p);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(_)}}return l}function Up(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){let u=s[c];if(u.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.array.length}let o=new e(r),a=0;for(let c=0;c<s.length;++c)o.set(s[c].array,a),a+=s[c].array.length;let l=new Bt(o,t,n);return i!==void 0&&(l.gpuType=i),l}function ju(s,e){if(e===lp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Do||e===vl){let t=s.getIndex();if(t===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Do)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var zr=class extends Pi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ih(t)}),this.register(function(t){return new fh(t)}),this.register(function(t){return new dh(t)}),this.register(function(t){return new ph(t)}),this.register(function(t){return new rh(t)}),this.register(function(t){return new oh(t)}),this.register(function(t){return new ah(t)}),this.register(function(t){return new lh(t)}),this.register(function(t){return new nh(t)}),this.register(function(t){return new ch(t)}),this.register(function(t){return new sh(t)}),this.register(function(t){return new hh(t)}),this.register(function(t){return new uh(t)}),this.register(function(t){return new eh(t)}),this.register(function(t){return new mh(t)}),this.register(function(t){return new gh(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=ss.extractUrlBase(e);o=ss.resolveURL(c,this.path)}else o=ss.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Co(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===zp){try{o[St.KHR_BINARY_GLTF]=new xh(e)}catch(f){i&&i(f);return}r=JSON.parse(o[St.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Th(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let f=this.pluginCallbacks[u](c);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[f.name]=f,o[f.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let f=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(f){case St.KHR_MATERIALS_UNLIT:o[f]=new th;break;case St.KHR_DRACO_MESH_COMPRESSION:o[f]=new _h(r,this.dracoLoader);break;case St.KHR_TEXTURE_TRANSFORM:o[f]=new yh;break;case St.KHR_MESH_QUANTIZATION:o[f]=new vh;break;default:d.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function R1(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var St={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},eh=class{constructor(e){this.parser=e,this.name=St.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new Ye(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Qt);let f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Us(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Li(u),c.distance=f;break;case"spot":c=new ml(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,ls(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},th=class{constructor(){this.name=St.KHR_MATERIALS_UNLIT}getMaterialType(){return Xt}extendParams(e,t,n){let i=[];e.color=new Ye(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Qt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,qe))}return Promise.all(i)}},nh=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},ih=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ce(a,a)}return Promise.all(r)}},sh=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},rh=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Ye(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Qt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,qe)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},oh=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},ah=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ye().setRGB(a[0],a[1],a[2],Qt),Promise.all(r)}},lh=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},ch=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ye().setRGB(a[0],a[1],a[2],Qt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,qe)),Promise.all(r)}},uh=class{constructor(e){this.parser=e,this.name=St.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},hh=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},fh=class{constructor(e){this.parser=e,this.name=St.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},dh=class{constructor(e){this.parser=e,this.name=St.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},ph=class{constructor(e){this.parser=e,this.name=St.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},mh=class{constructor(e){this.name=St.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=i.byteOffset||0,c=i.byteLength||0,u=i.count,f=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,f,d,i.mode,i.filter).then(function(p){return p.buffer}):o.ready.then(function(){let p=new ArrayBuffer(u*f);return o.decodeGltfBuffer(new Uint8Array(p),u,f,d,i.mode,i.filter),p})})}else return null}},gh=class{constructor(e){this.name=St.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==qn.TRIANGLES&&c.mode!==qn.TRIANGLE_STRIP&&c.mode!==qn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),f=u.isGroup?u.children:[u],d=c[0].count,p=[];for(let _ of f){let x=new ft,g=new L,m=new wn,M=new L(1,1,1),v=new Cr(_.geometry,_.material,d);for(let A=0;A<d;A++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,A),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,A),l.SCALE&&M.fromBufferAttribute(l.SCALE,A),v.setMatrixAt(A,x.compose(g,m,M));for(let A in l)if(A==="_COLOR_0"){let B=l[A];v.instanceColor=new Ps(B.array,B.itemSize,B.normalized)}else A!=="TRANSLATION"&&A!=="ROTATION"&&A!=="SCALE"&&_.geometry.setAttribute(A,l[A]);kt.prototype.copy.call(v,_),this.parser.assignFinalMaterial(v),p.push(v)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}},zp="glTF",Oo=12,Op={JSON:1313821514,BIN:5130562},xh=class{constructor(e){this.name=St.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Oo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==zp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Oo,r=new DataView(e,Oo),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===Op.JSON){let c=new Uint8Array(e,Oo+o,a);this.content=n.decode(c)}else if(l===Op.BIN){let c=Oo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},_h=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=St.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let f=Sh[u]||u.toLowerCase();a[f]=o[u]}for(let u in e.attributes){let f=Sh[u]||u.toLowerCase();if(o[u]!==void 0){let d=n.accessors[e.attributes[u]],p=kr[d.componentType];c[f]=p.name,l[f]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(f,d){i.decodeDracoFile(u,function(p){for(let _ in p.attributes){let x=p.attributes[_],g=l[_];g!==void 0&&(x.normalized=g)}f(p)},a,c,Qt,d)})})}},yh=class{constructor(){this.name=St.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},vh=class{constructor(){this.name=St.KHR_MESH_QUANTIZATION}},Cl=class extends ts{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,f=(n-t)/u,d=f*f,p=d*f,_=e*c,x=_-c,g=-2*p+3*d,m=p-d,M=1-g,v=m-d+f;for(let A=0;A!==a;A++){let B=o[x+A+a],U=o[x+A+l]*u,D=o[_+A+a],J=o[_+A]*u;r[A]=M*B+v*U+g*D+m*J}return r}},C1=new wn,bh=class extends Cl{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return C1.fromArray(r).normalize().toArray(r),r}},qn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},kr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Fp={9728:$t,9729:Yt,9984:Ba,9985:Bu,9986:lo,9987:Ji},Bp={33071:In,33648:go,10497:mn},Ju={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Sh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},as={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},P1={CUBICSPLINE:void 0,LINEAR:Rs,STEP:Sr},$u={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function L1(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Xe({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:hi})),s.DefaultMaterial}function Fs(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ls(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function I1(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let f=e[c];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(i=!0),f.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let f=e[c];if(n){let d=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):s.attributes.position;o.push(d)}if(i){let d=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):s.attributes.normal;a.push(d)}if(r){let d=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],f=c[1],d=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=f),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function D1(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function U1(s){let e,t=s.extensions&&s.extensions[St.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Qu(t.attributes):e=s.indices+":"+Qu(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Qu(s.targets[n]);return e}function Qu(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Mh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function N1(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var O1=new ft,Th=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new R1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new Or(this.options.manager):this.textureLoader=new gl(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Co(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Fs(r,a,i),ls(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[St.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(ss.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=Ju[i.type],a=kr[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Bt(c,o,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Ju[i.type],c=kr[i.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0,x,g;if(p&&p!==f){let m=Math.floor(d/p),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count,v=t.cache.get(M);v||(x=new c(a,m*p,i.count*p/u),v=new Rr(x,p/u),t.cache.add(M,v)),g=new Cs(v,l,d%p/u,_)}else a===null?x=new c(i.count*l):x=new c(a,d,i.count*l),g=new Bt(x,l,_);if(i.sparse!==void 0){let m=Ju.SCALAR,M=kr[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,A=i.sparse.values.byteOffset||0,B=new M(o[1],v,i.sparse.count*m),U=new c(o[2],A,i.sparse.count*l);a!==null&&(g=new Bt(g.array.slice(),g.itemSize,g.normalized));for(let D=0,J=B.length;D<J;D++){let R=B[D];if(g.setX(R,U[D*l]),l>=2&&g.setY(R,U[D*l+1]),l>=3&&g.setZ(R,U[D*l+2]),l>=4&&g.setW(R,U[D*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return u.magFilter=Fp[d.magFilter]||Yt,u.minFilter=Fp[d.minFilter]||Ji,u.wrapS=Bp[d.wrapS]||mn,u.wrapT=Bp[d.wrapT]||mn,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let o=i.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(f){c=!0;let d=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(f){return new Promise(function(d,p){let _=d;t.isImageBitmapLoader===!0&&(_=function(x){let g=new en(x);g.needsUpdate=!0,d(g)}),t.load(ss.resolveURL(f,r.path),_,void 0,p)})}).then(function(f){return c===!0&&a.revokeObjectURL(l),f.userData.mimeType=o.mimeType||N1(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[St.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[St.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[St.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Is,An.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Ls,An.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Xe}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[St.KHR_MATERIALS_UNLIT]){let f=i[St.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,r,t))}else{let f=r.pbrMetallicRoughness||{};if(a.color=new Ye(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){let d=f.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Qt),a.opacity=d[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",f.baseColorTexture,qe)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=vt);let u=r.alphaMode||$u.OPAQUE;if(u===$u.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===$u.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Xt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ce(1,1),r.normalTexture.scale!==void 0)){let f=r.normalTexture.scale;a.normalScale.set(f,f)}if(r.occlusionTexture!==void 0&&o!==Xt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Xt){let f=r.emissiveFactor;a.emissive=new Ye().setRGB(f[0],f[1],f[2],Qt)}return r.emissiveTexture!==void 0&&o!==Xt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,qe)),Promise.all(c).then(function(){let f=new o(a);return r.name&&(f.name=r.name),ls(f,r),t.associations.set(f,{materials:e}),r.extensions&&Fs(i,f,r),f})}createUniqueName(e){let t=Nt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[St.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return kp(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=U1(c),f=i[u];if(f)o.push(f.promise);else{let d;c.extensions&&c.extensions[St.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=kp(new Lt,c,t),i[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?L1(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let p=0,_=u.length;p<_;p++){let x=u[p],g=o[p],m,M=c[p];if(g.mode===qn.TRIANGLES||g.mode===qn.TRIANGLE_STRIP||g.mode===qn.TRIANGLE_FAN||g.mode===void 0)m=r.isSkinnedMesh===!0?new el(x,M):new ot(x,M),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===qn.TRIANGLE_STRIP?m.geometry=ju(m.geometry,vl):g.mode===qn.TRIANGLE_FAN&&(m.geometry=ju(m.geometry,Do));else if(g.mode===qn.LINES)m=new Lr(x,M);else if(g.mode===qn.LINE_STRIP)m=new Pr(x,M);else if(g.mode===qn.LINE_LOOP)m=new nl(x,M);else if(g.mode===qn.POINTS)m=new Ir(x,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&D1(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),ls(m,r),g.extensions&&Fs(i,m,g),t.assignFinalMaterial(m),f.push(m)}for(let p=0,_=f.length;p<_;p++)t.associations.set(f[p],{meshes:e,primitives:p});if(f.length===1)return r.extensions&&Fs(i,f[0],r),f[0];let d=new an;r.extensions&&Fs(i,d,r),t.associations.set(d,{meshes:e});for(let p=0,_=f.length;p<_;p++)d.add(f[p]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new jt(rs.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new $i(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ls(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let f=o[c];if(f){a.push(f);let d=new ft;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new tl(a,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let f=0,d=i.channels.length;f<d;f++){let p=i.channels[f],_=i.samplers[p.sampler],x=p.target,g=x.node,m=i.parameters!==void 0?i.parameters[_.input]:_.input,M=i.parameters!==void 0?i.parameters[_.output]:_.output;x.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",M)),c.push(_),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(f){let d=f[0],p=f[1],_=f[2],x=f[3],g=f[4],m=[];for(let M=0,v=d.length;M<v;M++){let A=d[M],B=p[M],U=_[M],D=x[M],J=g[M];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();let R=n._createAnimationTracks(A,B,U,D,J);if(R)for(let P=0;P<R.length;P++)m.push(R[P])}return new dl(r,void 0,m)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],f=c[1],d=c[2];d!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(d,O1)});for(let p=0,_=f.length;p<_;p++)u.add(f[p]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new So:c.length>1?u=new an:c.length===1?u=c[0]:u=new kt,u!==c[0])for(let f=0,d=c.length;f<d;f++)u.add(c[f]);if(r.name&&(u.userData.name=r.name,u.name=o),ls(u,r),r.extensions&&Fs(n,u,r),r.matrix!==void 0){let f=new ft;f.fromArray(r.matrix),u.applyMatrix4(f)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new an;n.name&&(r.name=i.createUniqueName(n.name)),ls(r,n),n.extensions&&Fs(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,f=l.length;u<f;u++)r.add(l[u]);let c=u=>{let f=new Map;for(let[d,p]of i.associations)(d instanceof An||d instanceof en)&&f.set(d,p);return u.traverse(d=>{let p=i.associations.get(d);p!=null&&f.set(d,p)}),f};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,l=[];as[r.path]===as.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(as[r.path]){case as.weights:c=Ri;break;case as.rotation:c=di;break;case as.position:case as.scale:c=Ci;break;default:switch(n.itemSize){case 1:c=Ri;break;case 2:case 3:default:c=Ci;break}break}let u=i.interpolation!==void 0?P1[i.interpolation]:Rs,f=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){let _=new c(l[d]+"."+as[r.path],t.array,f,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Mh(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof di?bh:Cl;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function F1(s,e,t){let n=e.attributes,i=new Gn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),a.normalized){let u=Mh(kr[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new L,l=new L;for(let c=0,u=r.length;c<u;c++){let f=r[c];if(f.POSITION!==void 0){let d=t.json.accessors[f.POSITION],p=d.min,_=d.max;if(p!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(_[2]))),d.normalized){let x=Mh(kr[d.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new Dn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function kp(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(let o in n){let a=Sh[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Mt.workingColorSpace!==Qt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Mt.workingColorSpace}" not supported.`),ls(s,e),F1(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?I1(s,e.targets,t):s})}var Fo=new L;function Yn(s,e,t,n,i,r){let o=2*Math.PI*i/4,a=Math.max(r-2*i,0),l=Math.PI/4;Fo.copy(e),Fo[n]=0,Fo.normalize();let c=.5*o/(o+a),u=1-Fo.angleTo(s)/l;return Math.sign(Fo[t])===1?u*c:a/(o+a)+c+c*(1-u)}var cs=class extends yn{constructor(e=1,t=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,i,i,i),i===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new L,l=new L,c=new L(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,p=u.length/6,_=new L,x=.5/i;for(let g=0,m=0;g<u.length;g+=3,m+=2)switch(a.fromArray(u,g),l.copy(a),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),u[g+0]=c.x*Math.sign(a.x)+l.x*r,u[g+1]=c.y*Math.sign(a.y)+l.y*r,u[g+2]=c.z*Math.sign(a.z)+l.z*r,f[g+0]=l.x,f[g+1]=l.y,f[g+2]=l.z,Math.floor(g/p)){case 0:_.set(1,0,0),d[m+0]=Yn(_,l,"z","y",r,n),d[m+1]=1-Yn(_,l,"y","z",r,t);break;case 1:_.set(-1,0,0),d[m+0]=1-Yn(_,l,"z","y",r,n),d[m+1]=1-Yn(_,l,"y","z",r,t);break;case 2:_.set(0,1,0),d[m+0]=1-Yn(_,l,"x","z",r,e),d[m+1]=Yn(_,l,"z","x",r,n);break;case 3:_.set(0,-1,0),d[m+0]=1-Yn(_,l,"x","z",r,e),d[m+1]=1-Yn(_,l,"z","x",r,n);break;case 4:_.set(0,0,1),d[m+0]=1-Yn(_,l,"x","y",r,e),d[m+1]=1-Yn(_,l,"y","x",r,t);break;case 5:_.set(0,0,-1),d[m+0]=Yn(_,l,"x","y",r,e),d[m+1]=1-Yn(_,l,"y","x",r,t);break}}};function Wp(s,e=!1){let t=[],n=document.createElement("canvas");if(n.width=n.height=2,!e){let o=n.getContext("2d");o.fillStyle="#b9a98b",o.fillRect(0,0,2,2)}let i=new Ot(n);i.colorSpace=qe;let r=Array.from({length:16},(o,a)=>{let l=i.clone();return l.colorSpace=qe,l.repeat.set(e?.244:.224,e?.244:.225),l.offset.set(a%4*.25+(e?.003:.013),(3-Math.floor(a/4))*.25+(e?.003:.012)),l.anisotropy=8,t.push(l),new Xe({map:l,transparent:e,alphaTest:e?.08:0,side:vt,roughness:.86,metalness:0})});return sn().load(s,o=>{for(let a=0;a<t.length;a++){let l=o.clone();l.colorSpace=qe,l.repeat.set(e?.244:.224,e?.244:.225),l.offset.set(a%4*.25+(e?.003:.013),(3-Math.floor(a/4))*.25+(e?.003:.012)),l.anisotropy=8,l.needsUpdate=!0,r[a].map=l,r[a].needsUpdate=!0}}),r}var Gp=Wp("./textures/fast/shop-products-atlas-v1.webp");function B1(){let s=document.createElement("canvas");s.width=s.height=ei?1024:2048;let e=s.getContext("2d"),t=new Ot(s);e.scale(s.width/2048,s.height/2048),t.colorSpace=qe,t.anisotropy=8;let n=Array.from({length:16},(o,a)=>{let l=a%4*512,c=Math.floor(a/4)*512;return[[0,0,128,384],[128,0,128,384],[0,384,256,64],[256,384,256,64],[256,0,256,384]].map(([f,d,p,_])=>{let x=t.clone();return x.colorSpace=qe,x.repeat.set((p-4)/2048,(_-4)/2048),x.offset.set((l+f+2)/2048,(2048-c-d-_+2)/2048),x.anisotropy=8,x.needsUpdate=!0,new Xe({map:x,roughness:.68,side:vt})})}),i=ti("./textures/fast/shop-products-atlas-v1.webp"),r=["#ab493e","#c69c61","#426380","#b85b68","#a1754a","#8197a1","#c58637","#71915d","#b1514f","#7a544b","#a95b70","#bd6349","#536981","#d68b4c","#71909d","#c3b39b"];return i.onload=()=>{for(let o=0;o<16;o++){let a=o%4*512,l=Math.floor(o/4)*512,c=r[o];e.fillStyle=c,e.fillRect(a,l,512,512);for(let d of[0,128]){e.fillStyle="rgba(255,244,213,.45)",e.fillRect(a+d+10,l+27,108,24),e.fillStyle="rgba(42,34,30,.28)",e.fillRect(a+d+10,l+57,108,4),e.fillStyle="rgba(255,245,225,.22)",e.fillRect(a+d+10,l+78,108,225);for(let p=0;p<7;p++)e.fillStyle=p%2?"#f5e4c599":"#382f2855",e.fillRect(a+d+17,l+93+p*28,70+p%3*12,3);for(let p=0;p<7;p++)e.fillStyle=p%2?"#ffffff3a":"#261f2430",e.fillRect(a+d+5+p*17,l+345,3,34)}let u=o%4*i.width/4,f=Math.floor(o/4)*i.height/4;e.globalAlpha=.21,e.drawImage(i,u,f,i.width/4,i.height/4,a+262,l+8,244,365),e.globalAlpha=1,e.fillStyle="#eee2cbbb",e.fillRect(a+275,l+70,220,232),e.fillStyle="#4c413b",e.textAlign="left",e.font="bold 22px sans-serif",e.fillText("\u5546\u54C1\u8BF4\u660E",a+288,l+103),e.font="13px sans-serif";for(let d=0;d<8;d++)e.fillStyle=d%2?"#625347":"#786759",e.fillRect(a+288,l+122+d*15,176-d%3*19,3);e.fillStyle="#f4eddc",e.fillRect(a+357,l+262,124,72);for(let d=0;d<35;d++){let p=d%4===0?3:1;e.fillStyle="#272725",e.fillRect(a+366+d*3,l+270,p,42-d%5*3)}for(let d of[388,452]){e.fillStyle="#e0c79f",e.fillRect(a+5,l+d,502,58);for(let p=0;p<30;p++)e.fillStyle=p%2?"#ffffff83":"#5c413849",e.fillRect(a+11+p*16,l+d+5,3,48);e.fillStyle=c,e.fillRect(a+7,l+d+26,498,7)}}t.needsUpdate=!0;for(let o of n)for(let a of o)a.map.needsUpdate=!0,a.needsUpdate=!0},n}var k1=B1(),Vp=Wp("./textures/fast/fashion-garments-atlas-v1.webp",!0),Xp=Array.from({length:9},()=>new Xe({color:"#fff",transparent:!0,opacity:0,alphaTest:.08,side:vt,roughness:.84,depthWrite:!0}));sn().load("./textures/fast/fashion-accessories-atlas-v1.webp",s=>Xp.forEach((e,t)=>{let n=s.clone();n.colorSpace=qe,n.repeat.set(.318,.318),n.offset.set(t%3/3+.007,(2-Math.floor(t/3))/3+.007),n.anisotropy=8,n.needsUpdate=!0,e.map=n,e.opacity=1,e.needsUpdate=!0}));var Ah=sn().load("./textures/fast/fashion-plum-tote-front-v1.webp");Ah.colorSpace=qe;Ah.anisotropy=8;var z1=new Xe({map:Ah,roughness:.93,side:vt}),qp=Array.from({length:12},()=>new Xe({color:"#ffffff",transparent:!0,alphaTest:.08,roughness:.95,side:vt}));sn().load("./textures/fast/fashion-garments-atlas-v1.webp",s=>qp.forEach((e,t)=>{let n=s.clone();n.colorSpace=qe,n.repeat.set(.133,.112),n.offset.set(t%4*.25+.058,(3-Math.floor(t/4))*.25+.055),n.anisotropy=8,n.needsUpdate=!0,e.map=n,e.needsUpdate=!0}));var Gr=sn().load("./textures/fast/bakery-crust-uv-v1.webp");Gr.colorSpace=qe;Gr.wrapS=Gr.wrapT=mn;Gr.repeat.set(2.5,2.5);Gr.anisotropy=8;var Hp=new Xe({map:Gr,roughness:.78}),G1=sn(),Bo=["#e2bd87","#dcc5a0","#6d9c59","#81583b"].map(s=>new Xe({color:s,roughness:.72}));sn().load("./textures/fast/malatang-tray-top-uv-v1.webp",s=>{let e=[[.66,.04,.3,.43],[.02,.55,.3,.39],[.34,.55,.3,.4],[.28,.04,.31,.41]];Bo.forEach((t,n)=>{let[i,r,o,a]=e[n],l=s.clone();l.colorSpace=qe,l.repeat.set(o,a),l.offset.set(i,r),l.anisotropy=8,l.needsUpdate=!0,t.map=l,t.color.set("#ffffff"),t.needsUpdate=!0})});var Eh=G1.load("./textures/fast/fried-skewer-tray-top-uv-v1.webp");Eh.colorSpace=qe;Eh.anisotropy=8;var V1=new Xe({map:Eh,roughness:.63,side:vt});function Yp(s){let{group:e,box:t,cyl:n,orb:i,rod:r,mesh:o,mat:a,table:l,chair:c,stool:u,crt:f,fan:d,plant:p,fixture:_,label:x,wood:g,iron:m,cream:M,timber:v,roofFinish:A,metalPBR:B,ceramic:U,fabric:D,bookCovers:J,bookBacks:R,bookSpines:P,paperEdge:te}=s,z=a("#a0aaa6",.34,.7),Ce=a("#28383c"),Y=U;Object.assign(z,B),z.normalScale.set(.25,.25),z.userData.metersPerTile=.8;let re=new Xe({color:"#a5cec8",transparent:!0,opacity:.16,roughness:.2,depthWrite:!1,side:vt}),ue=["#a64a3e","#548b79","#c3a859","#617f9b","#b88087"],K=new yn(1,1,1),W=new yn(1,1,1,5,5,1),ee=new Ur(1,18,12,0,Math.PI*2,0,Math.PI*.72),ge=new Hn(.78,.72,.28,18);{let j=W.attributes.position;for(let se=0;se<j.count;se++){let he=j.getX(se),Q=j.getY(se),F=j.getZ(se);j.setXYZ(se,he*(.91+.1*(1-Math.abs(Q)*2)),Q,F+Math.sign(F)*.16*(1-Math.abs(he)*1.4)*(1-Math.abs(Q)*1.4))}W.computeVertexNormals()}let ye=ue.map(j=>a(j,.49)),de=["\u51B0\u7EA2\u8336","\u6A58\u5B50\u6C7D\u6C34","\u7EFF\u8336","\u6C7D\u6C34","\u77FF\u6CC9\u6C34"],$=ti("./textures/fast/period-drink-labels-v1.webp"),O=de.map((j,se)=>{let he=document.createElement("canvas");he.width=1024,he.height=256;let Q=he.getContext("2d"),F=new Ot(he);F.colorSpace=qe,F.wrapS=mn,F.anisotropy=8;let T=()=>{$.complete&&$.naturalWidth?Q.drawImage($,0,se%4*$.height/4,$.width,$.height/4,0,0,1024,256):(Q.fillStyle=["#a56b3d","#e78e30","#46825b","#a95235","#538ead"][se],Q.fillRect(0,0,1024,256)),Q.fillStyle="#faf1ddeb",Q.fillRect(330,58,364,143),Q.fillStyle="#31534a",Q.textAlign="center",Q.font='bold 83px "Songti SC",serif',Q.fillText(j,512,163),F.needsUpdate=!0};return T(),$.addEventListener("load",T),new Xe({map:F,roughness:.61,side:vt})});function pe(j,se,he,Q,F,T,Z,X,me=.035){return o(j,new cs(se,he,Q,1,Math.min(me,se/5,he/5,Q/5)),F,T,Z,X)}let ke=[[.041,0],[.057,.008],[.069,.025],[.073,.047],[.073,.166],[.068,.189],[.052,.215],[.036,.237],[.032,.248],[.032,.274]].map(j=>new ce(...j)),we=new Dr(ke,24);function Ke(j,se,he,Q,F=0,T=1,Z="drink"){let X=e(j,se,he,Q);X.scale.setScalar(T);let me=ue[F%5],V=new ot(we,new vn({color:Z==="care"?"#d9c8a8":me,roughness:.26,metalness:0,clearcoat:.75,clearcoatRoughness:.2,transparent:Z==="drink",opacity:Z==="drink"?.84:1,depthWrite:!0}));V.castShadow=!0,X.add(V);for(let oe of[.038,.051,.184]){let Ee=new ot(new qt(oe>.1?.067:.071,.0025,5,24),new Xe({color:"#ffffff",transparent:!0,opacity:.22}));Ee.rotation.x=Math.PI/2,Ee.position.y=oe,X.add(Ee)}if(Z==="drink"){let oe=new ot(new Hn(.074,.074,.102,28,1,!0),O[F%5]);oe.position.y=.117,oe.castShadow=!0,X.add(oe)}else n(X,.074,.09,a("#e9dcc7"),0,.12,0,.074,24);n(X,.036,.027,a(Z==="care"?"#d6d1c4":"#e4d9bd",.38),0,.288,0,.036,20);for(let oe of[.279,.286,.293]){let Ee=new ot(new qt(.036,.0025,5,20),M);Ee.rotation.x=Math.PI/2,Ee.position.y=oe,X.add(Ee)}return X}function $e(j,se,he,Q,F,T=.21,Z=.29,X=.105){let me=e(j,se,he,Q),V=ye[F%5],oe=F===5||F===6,Ee=F===14,De=!oe&&!Ee;Ee&&(T*=.78,Z*=1.12,X*=.38,me.rotation.y=-.12);let[We,nt,dt,pt,yt]=k1[F%16];if(o(me,De?W:K,[We,nt,dt,pt,Gp[F%16],yt],0,0,0).scale.set(T,Z,X),oe){let Ut=o(me,new To(T*.56,Z*.22,4),V,0,Z*.58,0);Ut.rotation.y=Math.PI/4}if(De)for(let Ut of[-1,1]){t(me,T*.94,.012,X*.65,V,0,Ut*Z*.5,0);for(let wt=0;wt<7;wt++)t(me,T*.1,.008,X*.7,a("#d1bfa1"),(-.42+wt*.14)*T,Ut*Z*.52,0)}return me}function He(j,se,he,Q,F=0,T=1){if(F%3===2){let De=o(j,new qt(.112*T,.043*T,10,24),Hp,se,he-.065*T,Q);return De.rotation.x=Math.PI/2,De.rotation.z=F*.19,De}let Z=e(j,se,he,Q,F*.23),X=(F%3===1?.19:.15)*T,me=.115*T,V=(F%3===1?.12:.15)*T;if(o(Z,ee,Hp,0,0,0).scale.set(X,me,V),o(Z,ge,a("#d5ad79",.96),0,-.8*me,0).scale.set(X,me,V),F%3===0)for(let De of[-.045,.045]){let We=r(Z,[-.08*T,.105*T,De],[.08*T,.105*T,De+.015*T],.0045*T,a("#aa7550"));We.castShadow=!1}return Z}function it(j,se="#584330",he="#dcc7a0"){let Q=document.createElement("canvas");Q.width=384,Q.height=512;let F=Q.getContext("2d");F.fillStyle=he,F.fillRect(0,0,384,512);for(let Z=0;Z<650;Z++)F.fillStyle=Z%3?"#ffffff16":"#48372810",F.fillRect(Z*117%384,Z*73%512,3,2);F.strokeStyle=se,F.lineWidth=8,F.strokeRect(20,20,344,472),F.fillStyle=se,F.textAlign="center",j.forEach((Z,X)=>{F.font=X===0?'bold 47px "Songti SC",serif':'bold 34px "Songti SC",serif',F.fillText(Z,192,102+X*104,335)});let T=new Ot(Q);return T.colorSpace=qe,new Xe({map:T,roughness:.91,side:vt})}let H={tea:["\u4E03\u676F\u8336","\u73CD\u73E0\u5976\u8336 3\u5143","\u653E\u5B66\u6765\u4E00\u676F"],noodles:["\u5C0F\u73B2\u7C73\u7EBF","\u725B\u8089\u7C73\u7EBF 6\u5143","\u73B0\u716E\u70ED\u6C64"],bakery:["\u9762\u5305\u574A","\u65B0\u9C9C\u51FA\u7089","\u9762\u5305 2\u5143\u8D77"],shop:["\u7EA2\u661F\u5C0F\u5356\u90E8","\u96F6\u98DF \u996E\u6599 \u6587\u5177","\u51B0\u6C7D\u6C34 2\u5143"],mianpi:["\u6C49\u4E2D\u64C0\u9762\u76AE","\u73B0\u62CC 4\u5143","\u52A0\u8FA3\u53EF\u9009"],fashion:["\u706B\u661F\u5730\u5E26","\u670D\u9970 \u9970\u54C1","\u5B66\u751F\u65B0\u6B3E"],barber:["\u9752\u6625\u7406\u53D1","\u5B66\u751F\u526A\u53D1 8\u5143","\u6D17\u526A\u5439"],bookshop:["\u8BF8\u845B\u4EAE\u8BFB\u4E66\u793E","\u6F2B\u753B \u5C0F\u8BF4","\u65E7\u4E66\u4EA4\u6362"],cyber:["\u661F\u5149\u7F51\u5427","\u4E0A\u7F51 2\u5143/\u65F6","\u8BF7\u52FF\u55A7\u54D7"]};function Me(j,se,he,Q){let F=e(j,se,0,he,.09);F.rotation.x=-.045;let T=H[Q];t(F,.51,.78,.045,a(Q==="cyber"?"#46475e":"#6a5340"),0,.54,0);let Z=o(F,new zt(.45,.72),it(T,Q==="cyber"?"#363d62":"#624432"),0,.54,.03);Z.castShadow=!1;for(let X of[-.19,.19])r(F,[X,.18,-.14],[X,.85,0],.02,m);return t(F,.54,.04,.22,g,0,.14,-.08),F}function ve(j,se,he,Q=.42,F=.31,T=.35){let Z=e(j,se,0,he);pe(Z,Q,F,T,a("#aa8863"),0,F/2,0,.012),t(Z,Q*.94,.019,T*.92,a("#c3a477"),0,F+.011,0);for(let X of[-1,1])t(Z,.015,F*.75,.025,a("#856f54"),X*Q*.31,F*.5,T/2+.004);return Z}function Ie(j){let se=j.groups.map(Q=>({...Q})),he=j.attributes.normal;j.clearGroups();for(let Q of se){if(Q.materialIndex!==0){j.addGroup(Q.start,Q.count,1);continue}let F=Q.start,T=null;for(let Z=Q.start;Z<Q.start+Q.count;Z+=3){let X=he.getZ(Z)>0?0:2;T!==null&&X!==T&&(j.addGroup(F,Z-F,T),F=Z),T=X}T!==null&&j.addGroup(F,Q.start+Q.count-F,T)}return j}function _e(j,se,he=!1){let Q=new Wn;(he?[[-.23,-.5],[.23,-.5],[.28,.23],[.54,-.06],[.6,.06],[.4,.43],[.18,.5],[.08,.42],[-.08,.42],[-.18,.5],[-.4,.43],[-.6,.06],[-.54,-.06],[-.28,.23]]:[[-.28,-.5],[.28,-.5],[.3,.23],[.52,.18],[.58,.36],[.36,.49],[.16,.5],[.08,.4],[-.08,.4],[-.16,.5],[-.36,.49],[-.58,.36],[-.52,.18],[-.3,.23]]).forEach(([V,oe],Ee)=>Ee?Q.lineTo(V*j,oe*se):Q.moveTo(V*j,oe*se)),Q.closePath();let T=Ie(new Ei(Q,{depth:.065,bevelEnabled:!0,bevelThickness:.008,bevelSize:.008,bevelSegments:1,curveSegments:2})),Z=T.attributes.position,X=T.attributes.normal,me=T.attributes.uv;for(let V=0;V<Z.count;V++)Math.abs(X.getZ(V))>.7&&me.setXY(V,Z.getX(V)/j+.5,Z.getY(V)/se+.5);return me.needsUpdate=!0,T}let Je=_e(.5,.79),Fe=_e(.57,.95,!0);function C(j,se,he,Q,F,T=!1,Z=0){let X=e(j,se,he,Q,Z),me=D(["#d7cbc0","#577f87","#b97680","#56545b","#bdb6a5","#62445d","#7d90a2","#77716e"][F%8]),V=o(X,T?Fe:Je,[Vp[F%16],me,me],0,0,0);return V.castShadow=!0,r(X,[-.13,T?.49:.43,-.02],[0,T?.56:.49,-.02],.008,m),r(X,[0,T?.56:.49,-.02],[.13,T?.49:.43,-.02],.008,m),X}function E(j,se,he,Q,F=0,T=0){let Z=e(j,se,he,Q,F),X=D(T?"#725967":"#536983"),me=D(T?"#a68d91":"#d1c3ac"),V=new Wn;V.moveTo(-.205,0),V.lineTo(.205,0),V.lineTo(.255,.43),V.lineTo(-.255,.43),V.closePath();let oe=Ie(new Ei(V,{depth:.12,bevelEnabled:!0,bevelSize:.012,bevelThickness:.012,bevelSegments:2,curveSegments:2})),Ee=oe.attributes.position,De=oe.attributes.normal,We=oe.attributes.uv;for(let pt=0;pt<Ee.count;pt++)Math.abs(De.getZ(pt))>.7&&We.setXY(pt,Ee.getX(pt)/.51+.5,Ee.getY(pt)/.43);We.needsUpdate=!0;let nt=o(Z,oe,[T?z1:X,X,X],0,.025,-.06);nt.castShadow=!0;for(let pt of[-.18,.18])t(Z,.065,.42,.014,me,pt,.35,.071),r(Z,[pt,.43,.015],[pt,.66,.015],.025,me);let dt=new ot(new qt(.18,.025,6,20,Math.PI),me);if(dt.position.set(0,.64,.018),dt.rotation.z=Math.PI,Z.add(dt),!T){let pt=o(Z,new zt(.43,.36),Vp[15],0,.25,.079);pt.castShadow=!1}return Z}function ne(j,se,he,Q,F=.55,T=.4){let Z=e(j,se,he,Q);t(Z,F,.045,T,a("#a4734e"),0,.025,0);for(let X=0;X<4;X++){for(let me of[-T/2,T/2])t(Z,F,.025,.025,g,0,.07+X*.045,me);for(let me of[-F/2,F/2])t(Z,.025,.025,T,g,me,.07+X*.045,0)}return Z}function Te(j,se,he,Q=2.4,F=2.25){let T=e(j,se,0,he);for(let Z of[-Q/2,Q/2])t(T,.045,F,.36,m,Z,F/2,0);for(let Z=0;Z<5;Z++)t(T,Q,.045,.4,v,0,.22+Z*.44,0);return T}function Pe(j,se,he){let Q=e(j,-se/2+.28,0,he/2-.45);n(Q,.14,.4,a("#61766a"),0,.2,0),n(Q,.15,.04,m,0,.41,0),t(j,.12,.16,.035,M,se/2-.16,.52,-he/2+.14),r(j,[se/2-.14,.65,-he/2+.16],[se/2-.14,2.75,-he/2+.16],.012,M);let F=e(j,-se/2+.2,0,-he/2+.3,.12);r(F,[0,.15,0],[.12,1.25,0],.013,g),t(F,.19,.18,.07,a("#a18b51"),0,.12,0)}function Se(j,se,he){let Q=e(j,-.25,0,.5);pe(Q,2.25,.62,.72,a("#9e6b5d"),0,.4,0),t(Q,2.36,.065,.83,z,0,.76,0);for(let me of[-1.12,1.12])for(let V of[-.35,.35])r(Q,[me,.78,V],[me,1.51,V],.025,z);for(let me of[.9,1.25]){t(Q,2.18,.025,.68,z,0,me,0);for(let V=0;V<7;V++){let oe=-.9+V*.3;He(Q,oe,me+.08,.08,V,.7)}}let F=new Xe({color:"#d8e5d8",transparent:!0,opacity:.085,roughness:.12,depthWrite:!1,side:vt});t(Q,2.24,.7,.012,F,0,1.14,.36),t(Q,2.25,.018,.76,F,0,1.52,0);let T=Te(j,-.7,-he/2+.35,2.15);for(let me=0;me<5;me++)for(let V=0;V<5;V++)He(T,-.83+V*.4,.33+me*.44,0,V+me,.78);let Z=e(j,se/2-.62,0,-he/2+.65);pe(Z,.85,1.8,.88,z,0,.9,0);for(let me=0;me<3;me++)t(Z,.69,.39,.03,Ce,0,.4+me*.5,.455),t(Z,.54,.25,.015,a("#5b4330"),0,.4+me*.5,.48),r(Z,[-.28,.55+me*.5,.51],[.28,.55+me*.5,.51],.022,z),n(Z,.035,.02,a("#b94b38"),.33,.42+me*.5,.49);ne(j,-se/2+.48,.18,he/2-.62,.65,.45);let X=l(j,se/2-.6,1,.8,.6,.85);t(X,.6,.025,.45,v,0,.9,0),He(X,0,1.05,0,1,1.25)}function Ze(j,se,he){let Q=Te(j,-.5,-he/2+.34,se-1.35);for(let V=0;V<5;V++)for(let oe=0;oe<9;oe++){if(V===1&&oe===3||V===3&&oe===6||V===4&&oe===1)continue;let Ee=-(se-1.65)/2+oe*(se-1.65)/8+((V*7+oe*3)%5-2)*.014;if(V<2){let De=Ke(Q,Ee,.25+V*.44,((oe+V)%3-1)*.025,oe);De.rotation.y=((oe*3+V)%5-2)*.12}else{let De=(V*7+oe*5)%16,We=$e(Q,Ee,.37+V*.44,((V+oe)%3-1)*.03,De,.16+(V+oe)%3*.025,.22+(oe*2+V)%4*.025,.065+(oe+V)%2*.02);We.rotation.y=((oe*2+V)%5-2)*.075}}let F=e(j,se/2-.59,0,-.7);pe(F,.83,1.95,.75,a("#ac4337"),0,.99,0),t(F,.68,1.58,.06,Ce,0,.99,.39);for(let V=0;V<4;V++){t(F,.63,.025,.38,M,0,.35+V*.37,.35);for(let oe=0;oe<4;oe++)Ke(F,-.23+oe*.15,.36+V*.37,.38,oe)}t(F,.67,1.58,.015,re,0,.99,.52),r(F,[.25,.65,.54],[.25,1.23,.54],.018,M);let T=e(j,-.55,0,he/2-.9);pe(T,1.8,.9,.65,a("#8d7555"),0,.5,0),t(T,1.9,.065,.73,v,0,.98,0);for(let V=0;V<3;V++){let oe=t(T,.31,.035,.25,a(ue[V]),-.63+V*.38,1.04,0),Ee=o(T,new zt(.29,.23),Gp[14],-.63+V*.38,1.063,0);Ee.rotation.x=-Math.PI/2}let Z=e(T,.59,1.02,-.08);pe(Z,.36,.19,.3,a("#a7aaa1"),0,.1,0),t(Z,.28,.11,.025,a("#3c4c50"),0,.18,.16);for(let V=0;V<3;V++)for(let oe=0;oe<4;oe++)t(Z,.035,.012,.026,M,-.11+oe*.073,.22,-.08+V*.07);let X=e(j,-se/2+.16,0,-.35,Math.PI/2);for(let V=0;V<3;V++)for(let oe=0;oe<5;oe++){let Ee=-.68+oe*.34,De=1.02+V*.39,We=(V*5+oe)%16;r(X,[Ee,De+.09,0],[Ee,De+.09,.1],.01,m),$e(X,Ee,De,.14,We,.23,.3,.07)}let me=ne(j,-se/2+.55,0,he/2-.58,.7,.48);for(let V=0;V<7;V++){let oe=$e(me,-.22+V%4*.145,.26+Math.floor(V/4)*.075,-.1+V%3*.085,(V*7+3)%16,.13,.19,.045);oe.rotation.z=(V%3-1)*.19,oe.rotation.y=(V%4-1.5)*.18}for(let[V,oe,Ee]of[[-.78,-.25,.66],[.28,.23,.46]]){let De=e(T,V,1.02,oe);n(De,.105,.24,new vn({color:"#d5b698",transparent:!0,opacity:.36,roughness:.18,metalness:0,depthWrite:!1}),0,.13,0,.105,20),n(De,.112,.025,a("#b93e35"),0,.27,0,.112,20);for(let We=0;We<8*Ee;We++)i(De,.027,a(["#d6b46b","#c75942","#8da76f","#d8c7a3"][We%4]),(We%3-1)*.047,.055+Math.floor(We/3)*.048,(We*2%3-1)*.04)}}function Ne(j,se,he){let Q=new Xt({color:"#dce6e3",side:vt,toneMapped:!1}),F=sn().load("./textures/fast/student-mirror-reflection-v1.webp");F.colorSpace=qe,F.anisotropy=8;for(let V of[-1,.85]){if(pe(j,1.18,1.37,.1,a("#405f59"),V,1.97,-he/2+.15),V<0){let Ee=o(j,new zt(1.02,1.2),Q.clone(),V,1.97,-he/2+.24);Ee.name="barber-reflection-surface",Ee.castShadow=!1,Ee.userData.dynamic=!0;let De=new ot(new zt(.62,1),new Xt({map:F,transparent:!0,opacity:0,depthWrite:!1,side:vt}));De.position.set(V-.04,1.96,-he/2+.241),De.name="barber-student-reflection",De.visible=!1,De.userData.dynamic=!0,j.add(De)}else{let Ee=o(j,new zt(1.02,1.2),Q.clone(),V,1.97,-he/2+.24);Ee.name="barber-reflection-surface",Ee.castShadow=!1,Ee.userData.dynamic=!0}t(j,1.35,.09,.43,v,V,1.18,-he/2+.35);for(let Ee=0;Ee<3;Ee++)Ke(j,V-.43+Ee*.17,1.23,-he/2+.3,Ee,.8,"care");let oe=e(j,V,0,-.25,Math.PI);oe.name="barber-chair-facing-mirror",n(oe,.31,.07,z,0,.12,0),n(oe,.065,.49,z,0,.36,0),pe(oe,.59,.15,.6,a("#6d3935"),0,.66,0),pe(oe,.6,.68,.14,a("#6d3935"),0,.94,-.28);for(let Ee of[-.37,.37])r(oe,[Ee,.63,-.2],[Ee,.94,-.2],.026,z),pe(oe,.1,.08,.55,Ce,Ee,.97,0);r(oe,[-.22,.3,.42],[.22,.3,.42],.035,z),r(oe,[0,.58,.12],[0,.3,.42],.035,z)}let T=e(j,-se/2+.39,0,.92,Math.PI/2);T.name="barber-sofa-left-wall";let Z=D("#52726c");pe(T,1.25,.18,.55,Z,0,.5,0),pe(T,1.25,.48,.12,Z,0,.8,-.28);for(let V of[-.65,.65]){pe(T,.12,.28,.64,Z,V,.62,0);for(let oe of[-.2,.2])n(T,.035,.32,g,V,.2,oe)}let X=e(j,se/2-.52,0,-he/2+.65);pe(X,.62,.65,.65,M,0,.43,0),o(X,new qt(.23,.065,8,24),M,0,.82,0).rotation.x=Math.PI/2,n(X,.19,.03,Ce,0,.78,0),r(X,[0,.8,-.2],[0,1.05,-.2],.025,z),r(X,[0,1.05,-.2],[0,1.05,0],.025,z);let me=e(j,se/2-.35,0,1);for(let V=0;V<4;V++)t(me,.4,.055,.27,a(V%2?"#bec4b1":"#8daca3"),0,.7+V*.06,0);t(me,.5,.65,.4,v,0,.33,0)}function ze(j,se,he){function Q(De,We,nt,dt,pt){let yt=e(De,We,nt,dt),Tt=D(["#57535a","#a18d78","#526d75","#875d70"][pt%4]);yt.rotation.y=Math.PI/2;let Ut=pt%3===1,wt=new Wn;wt.moveTo(-.17,.02),wt.lineTo(.17,.02),wt.quadraticCurveTo(.205,.05,.18,.082),wt.lineTo(.115,.103),wt.lineTo(.03,.109),wt.lineTo(-.045,Ut?.18:.142),wt.lineTo(-.13,Ut?.185:.148),wt.lineTo(-.17,.075),wt.closePath(),pe(yt,.36,.038,.195,a("#dfd7c9"),0,.019,0,.012);let gn=o(yt,new Ei(wt,{depth:.17,bevelEnabled:!0,bevelThickness:.005,bevelSize:.005,bevelSegments:1}),Tt,0,.014,-.085);gn.castShadow=!0,pe(yt,.085,.033,.174,a("#d3c7ba"),.135,.064,0,.009);for(let rn=0;rn<3;rn++){let Nn=-.035+rn*.043,hs=(Ut?.152:.115)-rn*.014;r(yt,[Nn,hs,-.077],[Nn+.015,hs,.077],.0065,a("#d9cfba"))}return t(yt,.09,.012,.177,a("#eee5d6"),-.116,.048,0),yt}let F=e(j,0,0,-he/2+.98);for(let De of[-1.4,1.4])r(F,[De,.15,0],[De,2.25,0],.026,z);r(F,[-1.4,2.25,0],[1.4,2.25,0],.026,z);for(let De=0;De<8;De++){let We=-1.26+De*.36,nt=De>4;r(F,[We,2.22,0],[We-.12,2.05,0],.01,m),r(F,[We,2.22,0],[We+.12,2.05,0],.01,m),C(F,We,1.65,.055,De,nt,(De%3-1)*.11)}let T=e(j,-se/2+.13,0,-.1,Math.PI/2);t(T,1.7,1.9,.08,a("#66546f"),0,1.58,0),[[-.55,2.23,.31,.27,-.06],[-.03,2.14,.34,.28,.035],[.5,2.23,.33,.27,.045],[-.57,1.62,.33,.31,.055],[-.02,1.68,.35,.3,-.04],[.53,1.6,.33,.31,.065],[-.52,1.07,.3,.34,-.035],[.02,1.04,.32,.32,.045],[.54,1.08,.3,.32,-.025]].forEach(([De,We,nt,dt,pt],yt)=>{let Tt=e(T,De,We,.09);if(Tt.rotation.z=pt,[0,1,2,6,8].includes(yt))pe(Tt,nt+.035,dt+.035,.017,a(yt===8?"#ad9575":"#c9b69c"),0,0,0,.008),n(Tt,.013,.006,a("#514a43"),0,dt*.44,.013,.013,8).rotation.x=Math.PI/2;else{let gn=o(Tt,new qt(yt===5?.13:.105,.011,6,16),z,0,0,.018);gn.castShadow=!1}r(Tt,[0,dt*.57,-.02],[0,dt*.57,.11],.009,z);let wt=o(Tt,new zt(nt,dt),Xp[yt],0,0,.045);wt.castShadow=!1});let X=l(j,.3,.5,1.2,.8,.75);for(let[De,We,nt,dt,pt]of[[0,-.36,-.12,3,"#5b7190"],[2,-.04,.19,2,"#b19b83"]]){let yt=D(pt);for(let Tt=0;Tt<dt;Tt++){let Ut=pe(X,.31+Tt%2*.035,.055,.29-Tt%2*.018,yt,We+Tt%2*.014,.84+Tt*.054,nt+Tt%2*.012,.018);Ut.rotation.y=(De-1)*.09+Tt%2*.035,pe(X,.115,.015,.15,yt,We-.075,.875+Tt*.054,nt+.062,.008);let wt=o(X,new zt(.28,.24),qp[(De*3+Tt)%12],We,.872+Tt*.054,nt);wt.rotation.x=-Math.PI/2,wt.rotation.z=(De-1)*.09,wt.castShadow=!1}}let me=e(j,se/2-.27,0,.15,-Math.PI/2),V=[];for(let De of[.48,1.03,1.58]){t(me,2.15,.055,De===1.03?.58:.34,v,0,De,0);for(let We of[-.78,-.26,.26,.78])De===1.03&&We>0||V.push({x:We,y:De,k:(Math.round((We+1)*3)+Math.round(De*4))%4})}new zr().load("./blender_assets/canvas_sneaker_v1.glb?v=74-multisurface-uv",De=>{let nt=["blue","rose","sand","slate"].map(pt=>{let yt=sn().load("./blender_assets/canvas_sneaker_uv_"+pt+".png?v=74");return yt.colorSpace=qe,yt.flipY=!1,yt.anisotropy=8,yt}),dt=new Map;for(let{x:pt,y:yt,k:Tt}of V){let Ut=De.scene.clone(!0);Ut.position.set(pt,yt+.029,.02),Ut.rotation.y=-Math.PI/2,Ut.scale.setScalar(.86),Ut.traverse(wt=>{if(!wt.isMesh)return;wt.castShadow=!0,wt.receiveShadow=!0;let gn=wt.material.name,rn=Tt+":"+gn;if(!dt.has(rn)){let Nn=wt.material.clone();Nn.map=nt[Tt],Nn.color.set("#ffffff"),Nn.needsUpdate=!0,dt.set(rn,Nn)}wt.material=dt.get(rn)}),me.add(Ut)}document.querySelector("#scene").dataset.fashionShoes="ready"},void 0,De=>{console.error("\u5E06\u5E03\u978B Blender \u6A21\u578B\u52A0\u8F7D\u5931\u8D25\uFF0C\u4F7F\u7528\u7B80\u5316\u540E\u5907\u978B",De);for(let{x:We,y:nt,k:dt}of V)Q(me,We,nt+.029,.02,dt)}),E(X,.36,.8,-.04,-.12).scale.setScalar(.74),E(me,.55,1.057,.08,Math.PI/2,1).scale.setScalar(.67),_(j,se/2-.78,2.65,.38,"#ffe3c2",2.1,"room");let oe=e(j,se/2-.56,0,-he/2+.75);r(oe,[-.4,2.45,.15],[.4,2.45,.15],.018,z);for(let De=0;De<5;De++){let We=t(oe,.16,1.55,.045,a(De%2?"#876977":"#9f8490"),-.3+De*.15,1.65,.17);We.rotation.y=(De%2?1:-1)*.08}t(j,.75,1.9,.05,z,se/2-.45,1.13,-he/2+.13),t(j,.65,1.8,.02,new Xe({color:"#c5d6d8",metalness:.22,roughness:.18,emissive:"#839ba2",emissiveIntensity:.22}),se/2-.45,1.13,-he/2+.17);let Ee=l(j,se/2-.6,he/2-.65,.85,.6,.86);t(Ee,.3,.17,.3,Ce,0,1,0),u(j,se/2-.6,he/2-1.35,"#8a718d")}function Qe(j,se,he){let Q=e(j,0,0,-he/2+.62);pe(Q,se-.55,.9,.78,a("#6c8f86"),0,.48,0),t(Q,se-.42,.08,.9,z,0,.97,0),n(Q,.36,.045,v,-.8,1.04,0);for(let T=0;T<7;T++)t(Q,.39,.024,.19,a("#dcc69b"),-.8,1.08+T*.025,0);t(Q,.035,.13,.26,z,-.44,1.15,.14),r(Q,[-.44,1.22,.14],[-.44,1.42,.14],.026,g);for(let T=0;T<4;T++)n(Q,.13,.16,z,.05+T*.34,1.1,.1),n(Q,.115,.015,a(["#9e3b22","#d2c28b","#4c452d","#89a261"][T]),.05+T*.34,1.19,.1),r(Q,[.05+T*.34,1.17,.1],[.12+T*.34,1.38,.15],.009,z);for(let T=0;T<4;T++)n(Q,.3,.13,z,1.25,1.14+T*.14,-.15),o(Q,new qt(.29,.018,6,24),m,1.25,1.2+T*.14,-.15).rotation.x=Math.PI/2;let F=l(j,-.5,.3,1.7,.65,.85);for(let T=0;T<3;T++){let Z=-.53+T*.53;n(F,.19,.045,M,Z,.94,0),n(F,.16,.015,a("#a7542e"),Z,.969,0);for(let X=0;X<8;X++){let me=new Qi([new L(Z-.11,.99+X*.002,-.09+X*.025),new L(Z-.03,1.01+X*.002,-.07+X*.023),new L(Z+.08,.99+X*.002,-.11+X*.023)]);o(F,new Nr(me,8,.012,4,!1),a("#d9bd81"))}for(let X=0;X<5;X++)t(F,.09,.012,.018,a("#578449"),Z-.07+X*.03,1.04,-.04+X*.023).rotation.y=X*.7}for(let T of[-1.3,1.2]){let Z=l(j,T,1.2,.65,.58,.73);u(j,T,1.7,"#79654d"),Ke(Z,.15,.78,0,1,.7)}}function et(j,se,he,Q=0){let F=e(j,se,0,he,Q),T=l(F,0,0,1.16,.68,.76);f(T,0,.8,-.1),t(T,.49,.025,.17,M,-.06,.81,.22);for(let Z=0;Z<3;Z++)for(let X=0;X<10;X++)t(T,.032,.01,.024,a("#827f72"),-.26+X*.042,.831,.17+Z*.04);return i(T,.045,M,.38,.83,.23,1,.5,1.3),t(F,.22,.45,.4,M,.42,.33,-.1),c(F,0,.65),r(F,[.2,.7,-.3],[.2,.1,-.3],.012,m),F}function Re(j,se,he,Q){for(let F of[-1.75,-.45,.85])et(j,F,-.6,Math.PI),et(j,F,.5,0);if(t(j,3.65,.45,.055,a("#4b5e64"),-.45,1.02,-.05),!Q){let F=l(j,-2.15,1.9,1.25,.6,.82);f(F,-.22,.86,0),t(F,.22,.045,.25,a("#ae8b57"),.38,.9,.05),u(j,-2.15,1.25,"#555e68");let T=Te(j,1,-he/2+.25,1.55,1.6);for(let Z=0;Z<3;Z++)for(let X=0;X<5;X++)Ke(T,-.6+X*.3,.25+Z*.44,0,X)}t(j,1.1,.7,.22,Ce,-2.2,2,-he/2+.17);for(let F=0;F<8;F++)t(j,.8,.018,.025,z,-2.2,1.72+F*.07,-he/2+.3),i(j,.012,a("#76bc82"),-1.74,1.8+F*.055,-he/2+.3);for(let F=0;F<3;F++)r(j,[-2.8,.2,-he/2+.18],[1.4,.2+F*.025,-he/2+.18],.012,m);d(j,-2.6,1.8,-he/2+.5),d(j,1.6,1.8,-he/2+.5)}function ct(j,se,he,Q){let F=se/2-.53;if(Q){for(let T=0;T<6;T++)r(j,[F-.43,.17,-2.1+T*.58],[F-.43,.9,-2.1+T*.58],.018,m);r(j,[F-.43,.9,-2.1],[F-.43,.9,.8],.023,m)}else{for(let T=0;T<15;T++){let Z=1.35-T*.235;t(j,.8,.22*(T+1),.245,a("#8e8980"),F,.11*(T+1),Z)}for(let T=0;T<6;T++){let Z=1.35-T*.59,X=.22+T*.55;r(j,[F-.43,X,Z],[F-.43,X+.75,Z],.018,m)}r(j,[F-.43,.95,1.45],[F-.43,4,-2],.023,m)}}function G(j,se,he=!1){({bakery:Se,shop:Ze,barber:Ne,fashion:ze,mianpi:Qe,cyber:Re})[se.kind]?.(j,se.w,se.d,he),Pe(j,se.w,se.d),se.levels>1&&ct(j,se.w,se.d,he)}function Ae(j){let{w:se,d:he,kind:Q,levels:F}=j,T=j.outside;for(let V of[-se/2,se/2])t(T,.22,.15,he+.1,a("#8b7f6a"),V,.25,0),t(T,.22,.1,he+.1,M,V,3.15,0);for(let V=0;V<4;V++)for(let oe=0;oe<5;oe++)t(T,.24,.1,.04,a(oe%2?"#966b4e":"#a37d5f"),-se/2+.14+oe*.26,.36+V*.115,he/2+.17);let Z=e(T,se/2+.12,0,-.6,Math.PI/2);t(Z,1.1,1.05,.05,a("#425b5a"),0,2,0);for(let V of[-.53,0,.53])t(Z,.035,1.08,.055,M,V,2,.035);for(let V of[1.47,2,2.53])t(Z,1.1,.035,.055,M,0,V,.035);t(Z,1.25,.09,.24,a("#8b8171"),0,1.43,.05);let X=e(T,-se/2-.13,0,.15,-Math.PI/2);pe(X,.36,.52,.13,a("#84908b"),0,1.25,0),t(X,.21,.16,.02,Ce,0,1.34,.075),r(X,[0,1.5,0],[0,2.95,0],.015,m);for(let V of j.floors)for(let oe=0;oe<7;oe++)t(V.front,se-.4,.045,.035,a("#849186"),0,2.69+oe*.045,he/2+.15);let me=j.floors[F-1].roof;if(["shop","barber","fashion","mianpi"].includes(Q)){let V=Math.atan2(.6,se/2),oe=Math.hypot(se/2,.6);for(let We of[-1,1]){let nt=t(me,oe+.04,.09,he+.3,A,We*se/4,3.73,0);nt.rotation.z=-We*V}let Ee=new Wn;Ee.moveTo(-se/2,3.3),Ee.lineTo(se/2,3.3),Ee.lineTo(se/2,3.43),Ee.lineTo(0,4.03),Ee.lineTo(-se/2,3.43),Ee.closePath();let De=new Ei(Ee,{depth:.1,bevelEnabled:!1});for(let We of[-he/2-.05,he/2-.05])o(me,De,a(j.color||"#b8ae9b"),0,0,We);t(me,.18,.055,he+.1,a("#4c5351",.9),0,4.035,0)}else{for(let V of[-se*.34,se*.34])r(me,[V,3.5,-.4],[V,4.3,-.4],.025,m);r(me,[-se*.34,4.3,-.4],[se*.34,4.3,-.4],.012,m);for(let V=0;V<3;V++){let oe=-se*.2+V*se*.2;t(me,.42,.64,.018,a(["#b5b2a1","#607d87","#b58c81"][V]),oe,3.94,-.4)}}if(Q==="barber"){let V=e(T,-se/2+.15,0,he/2+.35);n(V,.105,.9,M,0,1.9,0,.105,24);for(let oe=0;oe<12;oe++){let Ee=o(V,new qt(.108,.028,5,20),a(oe%2?"#547caa":"#b84f48"),0,1.5+oe*.07,0);Ee.rotation.x=Math.PI/2+.35}n(V,.15,.1,z,0,1.4,0),n(V,.15,.1,z,0,2.4,0)}if(Q==="fashion"){let V=e(T,se/2-.7,0,he/2+.55);r(V,[-.5,.1,0],[-.5,1.6,0],.02,z),r(V,[.5,.1,0],[.5,1.6,0],.02,z),r(V,[-.5,1.6,0],[.5,1.6,0],.02,z);for(let oe=0;oe<4;oe++)C(V,-.36+oe*.24,1.16,.045,oe,!1,(oe-1.5)*.08).scale.setScalar(.57)}if(Q==="shop")for(let V=0;V<2;V++){ne(T,-se/2+.5,.13+V*.25,he/2+.65,.8,.5);for(let oe=0;oe<4;oe++)Ke(T,-se/2+.24+oe*.17,.18+V*.25,he/2+.65,oe)}if(["tea","noodles","bakery","mianpi","fashion","barber","bookshop","cyber"].includes(Q)&&Me(T,-se/2+.43,he/2+.56,Q),Q==="shop"||Q==="bakery"||Q==="bookshop"){let V=se/2-.35,oe=he/2+.22;ve(T,V,oe,.36,.25,.35),Q==="shop"&&ve(T,V-.05,oe-.05,.31,.18,.29),Q==="bookshop"&&[[-.08,.275,-.1,-.1],[.07,.302,.04,.13],[-.02,.329,.01,-.05]].forEach(([De,We,nt,dt],pt)=>{let yt=e(T,V+De,We,oe+nt,dt),Tt=[2,4,10][pt];t(yt,.29,.024,.38,[te,te,J[Tt],R[Tt],te,P[Tt]],0,0,0)})}}function Oe(j,se,he){let Q=e(j,se,1.105,0),F=Bo[he?3:0],T=Bo[1],Z=Bo[2],X=a("#a9472d",.52);for(let[oe,Ee,De]of[[-.075,-.23,.048],[.078,-.15,.052],[-.055,.035,.055],[.085,.18,.045]])i(Q,De,F,oe,.026,Ee,1,.86,1.05);for(let[oe,Ee,De]of[[-.09,.21,-.38],[.075,-.02,.48]]){let We=i(Q,.085,Z,oe,0,Ee,1,.17,.65);We.rotation.y=De;let nt=r(Q,[oe-.045,.018,Ee-.025],[oe+.05,.026,Ee+.045],.006,a("#9eaf6a"));nt.castShadow=!1}for(let[oe,Ee]of[[.005,-.3],[-.015,.29]]){let De=pe(Q,.073,.05,.09,T,oe,.005,Ee,.012);De.rotation.y=he?.24:-.23}for(let[oe,Ee]of[[-.105,-.05],[.115,.285]]){let De=i(Q,.021,X,oe,.045,Ee,1,.45,1.55);De.rotation.y=.7}let me=o(Q,new qt(.043,.014,6,16),T,-.008,.024,.115);me.rotation.x=Math.PI/2;let V=i(Q,.057,Bo[3],.095,.022,-.285,1,.42,1);V.rotation.z=.18}function Le(j,se,he,Q){let F=e(j,se,.1,he,Q==="fried"?.14:-.18),T=Q==="soup",Z=T?"#9e493c":"#567e85";pe(F,T?2.15:1.85,.8,.95,a(Z),0,.55,0),t(F,T?2.25:1.95,.07,1.03,z,0,.99,0);for(let X of[-.7,.7]){let me=o(F,new qt(.23,.04,7,20),m,X,.22,.39);for(let V=0;V<6;V++){let oe=V*Math.PI/3;r(F,[X,.22,.39],[X+Math.cos(oe)*.2,.22+Math.sin(oe)*.2,.39],.008,z)}}if(T){n(F,.32,.35,z,-.58,1.2,0),n(F,.29,.015,a("#a86631"),-.58,1.38,0);for(let X=0;X<2;X++){let me=.24+X*.44;t(F,.4,.075,.72,z,me,1.05,0),t(F,.36,.006,.68,a(X?"#67533e":"#634632",.42),me,1.092,0),Oe(F,me,X);for(let V=0;V<3;V++){let oe=me-.13+V*.1;r(F,[oe,1.12,-.16],[oe+.06,1.16,.22],.007,g)}}}else{t(F,.66,.24,.66,z,-.43,1.1,0),t(F,.53,.015,.54,a("#5b3f22"),-.43,1.24,0),t(F,.72,.06,.73,z,.48,1.07,.02);let X=o(F,new zt(.67,.68),V1,.48,1.106,.02);X.rotation.x=-Math.PI/2,X.castShadow=!1;for(let me=0;me<4;me++){r(F,[.23+me*.15,1.14,-.25],[.23+me*.15,1.14,.4],.009,g);for(let V=0;V<2;V++)i(F,.047,a(V%2?"#c7924c":"#a86a38"),.23+me*.15,1.165,-.08+V*.18)}n(F,.18,.56,a("#776c5a"),-1.18,.3,-.1),r(F,[-1.18,.55,-.1],[-.65,.8,-.1],.025,m)}if(T){for(let X of[-.95,.95])for(let me of[-.4,.4])r(F,[X,1,me],[X,2.25,me],.025,m);for(let X=0;X<12;X++)t(F,.2,.05,1.5,a(X%2?Z:"#c4ab7b"),-1.1+X*.2,2.28,0)}else{r(F,[0,.1,-.6],[0,2.45,-.6],.025,m);let X=o(F,new To(1.5,.47,8,1,!0),a("#667c93"),0,2.48,-.6);X.rotation.y=.2}return x(F,T?"\u9EBB \u8FA3 \u70EB":"\u73B0 \u70B8 \u4E32 \u4E32",1.55,.35,Z,"#e6cf9b",75).position.set(0,.6,.49),_(F,0,2.14,0,"#ffcd8f",3,"street"),u(F,1.4,.7,Z),ne(F,-1.3,0,.5,.55,.4),F}return{furnish:G,architecture:Ae,stall:Le,basket:ne,bottle:Ke,soft:pe}}var H1=new Hn(.103,.078,.35,36,1,!1),W1=new Hn(.006,.006,.23,8),X1=new Hn(.116,.116,.014,36),Zp=new Xe({color:"#b2a895",roughness:.88}),q1=new Xe({color:"#ece7d8",roughness:.42,transparent:!0,opacity:.92}),ni=[{name:"\u73CD\u73E0\u5976\u8336",base:"#b98b60",dark:"#785738",top:"#dfc6a1",pearls:!0},{name:"\u828B\u9999\u5976\u8336",base:"#aa8caa",dark:"#776079",top:"#d8c0d3",pearls:!0},{name:"\u8349\u8393\u5976\u8336",base:"#d999a7",dark:"#b96d80",top:"#f0ccd0",pearls:!1},{name:"\u67E0\u6AAC\u7EFF\u8336",base:"#a5ae65",dark:"#718544",top:"#d9d79e",pearls:!1}];function Kp(s){let e=s|0;return()=>((e=Math.imul(1664525,e)+1013904223|0)>>>0)/4294967296}function Y1(s){let e=document.createElement("canvas");e.width=1024,e.height=512;let t=e.getContext("2d"),n=Kp(725+s*89),i=ni[s],r=t.createLinearGradient(0,0,0,512);r.addColorStop(0,i.top),r.addColorStop(.2,i.base),r.addColorStop(.77,i.base),r.addColorStop(1,i.dark),t.fillStyle=r,t.fillRect(0,0,1024,512);for(let a=0;a<2700;a++){let l=n()*1024,c=n()*512,u=.018+n()*.055;t.fillStyle=n()>.5?`rgba(255,250,225,${u})`:`rgba(75,44,39,${u*.65})`,t.fillRect(l,c,1+n()*3,1+n()*5)}for(let a=0;a<100;a++){let l=n()*1024,c=n()*512,u=2+n()*5;t.fillStyle="rgba(255,250,236,.24)",t.beginPath(),t.arc(l,c,u,0,Math.PI*2),t.fill()}if(i.pearls)for(let a=0;a<85;a++){let l=n()*1024,c=393+n()*109,u=5+n()*7;t.fillStyle="#35252a",t.beginPath(),t.arc(l,c,u,0,Math.PI*2),t.fill()}let o=new Ot(e);return o.colorSpace=qe,o.anisotropy=8,o.wrapS=mn,o}function Z1(s){let e=document.createElement("canvas");e.width=512,e.height=512;let t=e.getContext("2d"),n=ni[s],i=Kp(110+s);t.fillStyle=n.top,t.fillRect(0,0,512,512);for(let a=0;a<20;a++)t.fillStyle="rgba(255,255,241,.18)",t.beginPath(),t.ellipse(i()*512,i()*512,11+i()*30,5+i()*18,i()*Math.PI,0,Math.PI*2),t.fill();let r=t.createRadialGradient(180,145,30,256,256,340);r.addColorStop(0,"#ffffff55"),r.addColorStop(.7,"#ffffff09"),r.addColorStop(1,"#ffffff66"),t.fillStyle=r,t.fillRect(0,0,512,512),t.strokeStyle="#eff3e6bc",t.lineWidth=17,t.beginPath(),t.arc(256,256,248,0,Math.PI*2),t.stroke();let o=new Ot(e);return o.colorSpace=qe,o.anisotropy=8,o}var jp=sn(),Pl=jp.load("./textures/fast/tea-pearl-side-uv-v1.webp");Pl.colorSpace=qe;Pl.anisotropy=8;Pl.wrapS=mn;var Ch=jp.load("./textures/fast/tea-pearl-seal-uv-v1.webp");Ch.colorSpace=qe;Ch.anisotropy=8;function K1(s,e){let t=document.createElement("canvas");t.width=1024,t.height=512;let n=t.getContext("2d"),i=new Ot(t);i.colorSpace=qe,i.anisotropy=8,i.wrapS=mn;let r=()=>{s.image?.width?n.drawImage(s.image,0,0,1024,512):(n.fillStyle=ni[e].base,n.fillRect(0,0,1024,512));for(let o of[0,512,1024])n.fillStyle="#f4e8c9ea",n.beginPath(),n.roundRect(o-194,100,388,244,28),n.fill(),n.strokeStyle=ni[e].dark,n.lineWidth=9,n.stroke(),n.fillStyle=ni[e].dark,n.textAlign="center",n.font='bold 106px "Songti SC",serif',n.fillText("\u4E03\u676F\u8336",o,230),n.font="bold 29px serif",n.fillText("QI BEI CHA  \xB7  2005",o,290);i.needsUpdate=!0};return r(),s.image?.addEventListener&&s.image.addEventListener("load",r,{once:!0}),i}var Rh=ni.map((s,e)=>({side:new Xe({map:K1(e===0?Pl:Y1(e),e),roughness:.71,metalness:0}),top:new Xe({map:e===0?Ch:Z1(e),roughness:.68,metalness:0,transparent:e===0,side:vt})})),j1=[new Xe({color:"#f3a0a6",roughness:.68}),new Xe({color:"#c5d8dc",roughness:.68})];function Jp(s=0){let e=(s%ni.length+ni.length)%ni.length,t=new an;t.name="\u4E03\u676F\u8336 \xB7 "+ni[e].name,t.userData={productFamily:"sealed-milk-tea-cup",skin:e,sharedGeometry:!0,prototypeTexture:e===0?"photographic-uv":"draft-uv"};let n=new ot(H1,[Rh[e].side,Rh[e].top,Zp]);n.position.y=.175,n.castShadow=!0,n.receiveShadow=!0,t.add(n);let i=new ot(X1,[q1,Rh[e].top,Zp]);i.position.y=.356,i.castShadow=!0,t.add(i);let r=new ot(W1,j1[e%2]);return r.position.set(e===0?.045:.022,.44,.01),r.rotation.z=.1,r.castShadow=!0,t.add(r),t}var Rb=ni.map(s=>s.name);var Ll={tea:"tea-objects-atlas-v1.webp",noodles:"food-objects-atlas-v1.webp",mianpi:"food-objects-atlas-v1.webp",bakery:"food-objects-atlas-v1.webp",shop:"shop-products-atlas-v1.webp",fashion:"fashion-garments-atlas-v1.webp",bookshop:"rental-books-atlas-v1.webp"},$p=sn(),em={noodles:$p.load("./textures/fast/noodle-soup-top-uv-v1.webp"),mianpi:$p.load("./textures/fast/mianpi-top-uv-v1.webp")};for(let[s,e]of Object.entries(em))e.colorSpace=qe,e.anisotropy=8,s==="mianpi"&&(e.repeat.set(.91,.91),e.offset.set(.045,.045));var J1=Object.fromEntries(Object.entries(em).map(([s,e])=>[s,new Xe({map:e,roughness:.57,side:vt})])),$1=[new ce(.11,0),new ce(.16,.025),new ce(.202,.1),new ce(.215,.14)],Q1=new Dr($1,32),eb=new es(.198,40),tb=new qt(.214,.011,8,40),nb=new Xe({color:"#dfdbcc",roughness:.58}),ib=new Xe({color:"#e9e5d9",roughness:.43}),ko={};for(let[s,e]of Object.entries(Ll))ko[e]||(ko[e]=ti("./textures/fast/"+e));var tm={tea:{title:"\u4E03\u676F\u8336",sub:"\u653E\u5B66\u8DEF\u4E0A \xB7 \u6765\u4E00\u676F",items:["\u73CD\u73E0\u5976\u8336  3\u5143","\u7EA2\u8C46\u5976\u8336  4\u5143","\u67E0\u6AAC\u7EFF\u8336  3\u5143"],photos:[0,1,2,4],paper:"#e9dcb9",ink:"#315c51"},noodles:{title:"\u5C0F\u73B2\u7C73\u7EBF",sub:"\u5C0F\u9505\u73B0\u716E \xB7 \u70ED\u6C64\u9C9C\u9999",items:["\u725B\u8089\u7C73\u7EBF  6\u5143","\u9178\u83DC\u7C73\u7EBF  5\u5143","\u9EBB\u8FA3\u7C73\u7EBF  5\u5143"],photos:[0,1,2,3],paper:"#e9d5b3",ink:"#8a4230"},mianpi:{title:"\u6C49\u4E2D\u64C0\u9762\u76AE",sub:"\u73B0\u62CC \xB7 \u52A0\u8FA3\u53EF\u9009",items:["\u64C0\u9762\u76AE  4\u5143","\u52A0\u83DC  1\u5143","\u52A0\u86CB  1\u5143"],photos:[4,5,6,7],paper:"#dfd7bd",ink:"#694638"},bakery:{title:"\u9762\u5305\u574A",sub:"\u65B0\u9C9C\u51FA\u7089 \xB7 \u653E\u5B66\u70B9\u5FC3",items:["\u5976\u6CB9\u9762\u5305  2\u5143","\u9999\u8471\u9762\u5305  2\u5143","\u751C\u751C\u5708  2\u5143"],photos:[12,13,14,15],paper:"#ead8bd",ink:"#814a39"},shop:{title:"\u7EA2\u661F\u5C0F\u5356\u90E8",sub:"\u96F6\u98DF \xB7 \u996E\u6599 \xB7 \u6587\u5177",items:["\u6C7D\u6C34  2\u5143","\u997C\u5E72  1\u5143\u8D77","\u4F5C\u4E1A\u672C  1\u5143"],photos:[5,1,12,14],paper:"#ded9bb",ink:"#3d6056"},fashion:{title:"\u706B\u661F\u5730\u5E26",sub:"\u9752\u6625\u8863\u6A71 \xB7 2005",items:["\u5370\u82B1 T \u6064  25\u5143\u8D77","\u725B\u4ED4\u5916\u5957  68\u5143","\u56F4\u5DFE\u9970\u54C1  8\u5143\u8D77"],photos:[0,6,13,14],paper:"#ded0d7",ink:"#61435e"},barber:{title:"\u9752\u6625\u7406\u53D1",sub:"\u7537\u751F\u5973\u751F \xB7 \u5B66\u751F\u4F18\u60E0",items:["\u5B66\u751F\u526A\u53D1  8\u5143","\u6D17\u526A\u5439  12\u5143","\u5218\u6D77\u4FEE\u526A  3\u5143"],paper:"#cfdcd4",ink:"#365f5a"},cyber:{title:"\u661F\u5149\u7F51\u5427",sub:"\u8425\u4E1A\u65F6\u95F4 08:00\u201423:00",items:["\u4E0A\u7F51  2\u5143/\u5C0F\u65F6","\u5305\u591C  8\u5143","\u51B0\u7EA2\u8336  2\u5143"],paper:"#d2d9d2",ink:"#315363"},bookshop:{title:"\u8BF8\u845B\u4EAE\u8BFB\u4E66\u793E",sub:"\u6F2B\u753B \xB7 \u5C0F\u8BF4 \xB7 \u5B66\u4E60\u8D44\u6599",items:["\u6F2B\u753B\u501F\u9605  1\u5143/\u672C","\u65E7\u4E66\u4EA4\u6362  \u8BF7\u8BE2\u5E97\u4E3B","\u4F5C\u6587\u9009  5\u5143\u8D77"],photos:[0,2,5,10],paper:"#e2d2ae",ink:"#66503a"}};function sb(s,e){let t=tm[s],n=document.createElement("canvas");n.width=ei?384:512,n.height=ei?576:768;let i=n.getContext("2d"),r=new Ot(n);i.scale(n.width/512,n.height/768),r.colorSpace=qe,r.anisotropy=8;let o=()=>{i.fillStyle=t.paper,i.fillRect(0,0,512,768);for(let c=0;c<1500;c++)i.fillStyle=c%3?"#594a2a0b":"#fff8e522",i.fillRect(c*131%512,c*71%768,3,2);i.fillStyle=t.ink+"22",i.fillRect(36,163,440,2),i.fillStyle=t.ink,i.textAlign="center",i.font='bold 52px "Songti SC",serif',i.fillText(t.title,256,103),i.font='23px "Songti SC",serif',i.fillText(t.sub,256,148);let l=ko[Ll[s]];if(l?.complete&&l.naturalWidth)for(let c=0;c<2;c++){let u=t.photos[(e*2+c)%t.photos.length],f=u%4*l.width/4,d=Math.floor(u/4)*l.height/4;i.drawImage(l,f+3,d+3,l.width/4-6,l.height/4-6,51+c*208,181,202,207)}else if(s==="cyber"){i.fillStyle="#394b5e",i.fillRect(54,183,404,210),i.fillStyle="#b9ccce",i.fillRect(84,205,344,155),i.fillStyle="#576786";for(let c=0;c<4;c++)i.fillRect(102+c*80,231,58,71)}else if(s==="barber"){i.fillStyle="#53766d";for(let c=0;c<8;c++)i.fillRect(65+c*50,186,24,207);i.fillStyle="#c1d0be",i.font="bold 42px sans-serif",i.fillText("\u2702  \u9752\u6625\u7406\u53D1",256,312)}else i.fillStyle="#8d7860",i.fillRect(65,190,382,195),i.fillStyle="#efe5c8",i.font="bold 42px serif",i.fillText("\u6F2B \u753B \xB7 \u4E66 \u7C4D",256,310);i.fillStyle=t.ink,i.font='bold 28px "Songti SC",serif',i.textAlign="left",t.items.forEach((c,u)=>{let f=465+u*76;i.fillText(c,58,f),i.fillRect(58,f+16,397,1)}),i.textAlign="center",i.font="18px sans-serif",i.fillText("2005 \xB7 \u6821\u95E8\u53E3",256,710),r.needsUpdate=!0};o();let a=ko[Ll[s]];return a&&!a.complete&&a.addEventListener("load",o,{once:!0}),r}var Ph=[],Qp={tv:ti("./textures/fast/fictional-tv-stills-v1.webp"),game:ti("./textures/fast/fictional-cyber-screens-v1.webp")};function rb(s,e){let t=document.createElement("canvas");t.width=ei?384:512,t.height=ei?576:768;let n=t.getContext("2d"),i=new Ot(t);n.scale(t.width/512,t.height/768),i.colorSpace=qe,i.anisotropy=8;let r=s==="cyber"?Qp.game:ko[Ll[s]]||Qp.tv,a=({tea:["\u4ECA\u65E5\u7279\u996E","\u590F\u65E5\u51B0\u8336"],noodles:["\u70ED\u6C64\u7C73\u7EBF","\u5C0F\u9505\u73B0\u716E"],mianpi:["\u73B0\u62CC\u64C0\u9762\u76AE","\u8FA3\u6912\u9999\u918B"],bakery:["\u6BCF\u65E5\u51FA\u7089","\u653E\u5B66\u70B9\u5FC3"],shop:["\u96F6\u98DF\u4E0A\u65B0","\u51B0\u996E\u6587\u5177"],fashion:["\u6362\u5B63\u65B0\u8863","\u5B66\u751F\u642D\u914D"],barber:["\u5B66\u751F\u526A\u53D1","\u6D17\u526A\u5439"],bookshop:["\u501F\u9605\u65B0\u4E66","\u672C\u5468\u4E66\u67B6"],cyber:["\u7F51\u7EDC\u5BF9\u6218","\u6E38\u620F\u4E4B\u591C"]}[s]||["\u5E97\u5185\u544A\u793A","\u4ECA\u65E5\u4F9B\u5E94"])[e],l=()=>{if(n.fillStyle="#e7ddc9",n.fillRect(0,0,512,768),r.complete&&r.naturalWidth){let c=s==="cyber"||s==="barber"?2:4,u=(e*3+s.length)%(c*c),f=r.width/c,d=r.height/c;n.drawImage(r,u%c*f,Math.floor(u/c)*d,f,d,0,0,512,632)}else n.fillStyle="#8d786a",n.fillRect(0,0,512,632);n.fillStyle="#eadcbb",n.fillRect(0,632,512,136),n.fillStyle="#3b3936",n.textAlign="center",n.font='bold 57px "Songti SC",serif',n.fillText(a,256,691),n.font="23px serif",n.fillText("2005 \xB7 \u653E\u5B66\u4EE5\u540E",256,731),i.needsUpdate=!0};return l(),r.addEventListener("load",l,{once:!0}),Ph.push({canvas:t,texture:i,draw:l}),i}function nm(s){let e=[...s].filter(t=>t.type.startsWith("image/")).slice(0,12);return e.forEach((t,n)=>{let i=URL.createObjectURL(t),r=new Image;r.onload=()=>{for(let o=n;o<Ph.length;o+=e.length){let a=Ph[o],l=a.canvas,c=l.getContext("2d");c.fillStyle="#e5dbc8",c.fillRect(0,0,512,768);let u=Math.max(470/r.width,715/r.height),f=470/u,d=715/u;c.drawImage(r,(r.width-f)/2,(r.height-d)/2,f,d,21,21,470,715),a.texture.needsUpdate=!0}URL.revokeObjectURL(i)},r.src=i}),e.length}function im(s,e){let t=e.kind;if(!tm[t])return;let i=t.split("").reduce((o,a)=>o+a.charCodeAt(0),0),r=[{side:-1,y:1.41+i%3*.09,back:.48,w:.55,h:.77,angle:-.028,type:"prices",variant:0},{side:-1,y:2.39+i%4*.045,back:1.05,w:.43,h:.61,angle:.041,type:"promo",variant:0},{side:1,y:1.65+(i+2)%4*.075,back:.34,w:.5,h:.69,angle:-.047,type:"prices",variant:1},{side:1,y:2.43-(i+1)%3*.07,back:.9,w:.31,h:.43,angle:.055,type:"promo",variant:1}];for(let o of r){let a=new an;a.position.set(o.side*(e.w/2-.105),o.y,e.d/2-o.back),a.rotation.y=o.side<0?Math.PI/2:-Math.PI/2,a.rotation.z=o.angle,s.add(a);let l=new zt(o.w,o.h,3,3),c=l.attributes.position;for(let d=0;d<c.count;d++)c.setZ(d,.006*Math.abs(c.getX(d))/(o.w/2)+.004*Math.abs(c.getY(d))/(o.h/2));l.computeVertexNormals();let u=o.type==="prices"?sb(t,o.variant):rb(t,o.variant),f=new ot(l,new Xe({map:u,roughness:.96,side:vt,polygonOffset:!0,polygonOffsetFactor:-1}));f.position.z=.022,f.castShadow=!1,a.add(f)}}function sm(s,e){let t=document.createElement("canvas");t.width=1024,t.height=256;let n=t.getContext("2d");n.fillStyle=s.sign,n.fillRect(0,0,1024,256);let i=s.kind,r=s.ink||"#f0d5aa";if(["tea","noodles","mianpi","bakery"].includes(i))n.fillStyle=i==="tea"?"#315b51":i==="noodles"?"#914532":i==="mianpi"?"#5b4d3b":"#864e42",n.fillRect(0,0,168,256),n.fillRect(856,0,168,256),n.fillStyle="#f2e3bc",n.textAlign="center",n.font="bold 92px serif",n.fillText({tea:"\u8336",noodles:"\u7C73",mianpi:"\u9762",bakery:"\u9EA6"}[i],84,155),n.fillText("\u2726",940,155),n.strokeStyle=r,n.lineWidth=6,n.strokeRect(183,18,657,219);else if(i==="cyber"){n.fillStyle="#272943",n.fillRect(0,0,1024,256),n.strokeStyle="#e18bd3",n.lineWidth=11,n.strokeRect(20,21,984,215),n.fillStyle="#e18bd3";for(let a=0;a<6;a++)n.fillRect(38+a*24,45,11,11)}else if(i==="fashion")n.fillStyle="#59435f",n.fillRect(0,0,1024,256),n.strokeStyle="#dec5b1",n.lineWidth=3,n.strokeRect(17,17,990,222),n.font="66px serif",n.fillStyle="#ecc4c6",n.fillText("\u2605",70,158),n.fillText("\u2605",958,158);else if(i==="shop"){n.fillStyle="#476856",n.fillRect(0,0,1024,256),n.fillStyle="#e9d790";for(let a=0;a<13;a++)n.fillRect(a*80,0,42,19)}else i==="barber"?(n.fillStyle="#315d56",n.fillRect(0,0,1024,256),n.fillStyle="#e4e2bf",n.font="bold 80px serif",n.fillText("\u2702",79,158)):i==="bookshop"&&(n.fillStyle="#5c4c36",n.fillRect(0,0,1024,256),n.fillStyle="#e4bd79",n.fillRect(0,0,1024,12),n.fillRect(0,244,1024,12));n.fillStyle=i==="cyber"?"#ffe0f2":r,n.textAlign="center",n.font=`bold ${i==="fashion"?87:i==="cyber"?88:i==="tea"?96:82}px "Songti SC","SimSun",serif`,n.fillText(e,512,137,i==="tea"||i==="mianpi"||i==="noodles"||i==="bakery"?650:850),n.font='27px "Songti SC",serif',n.fillText({tea:"\u73CD\u73E0\u5976\u8336 \xB7 \u51B0\u996E",noodles:"\u5C0F\u9505\u7C73\u7EBF \xB7 \u70ED\u6C64",mianpi:"\u6C49\u4E2D\u98CE\u5473 \xB7 \u73B0\u62CC",bakery:"\u6BCF\u65E5\u73B0\u70E4 \xB7 \u9762\u5305\u70B9\u5FC3",cyber:"INTERNET \xB7 2005",fashion:"\u670D\u9970 \xB7 \u9970\u54C1 \xB7 \u65B0\u6F6E",shop:"\u96F6\u98DF \xB7 \u996E\u6599 \xB7 \u6587\u5177",barber:"\u6D17\u526A\u5439 \xB7 \u5B66\u751F\u4F18\u60E0",bookshop:"\u6F2B\u753B \xB7 \u4E66\u7C4D \xB7 \u9605\u8BFB"}[i],512,215,760);let o=new Ot(t);return o.colorSpace=qe,o.anisotropy=8,o}function rm(s,e){let t=e.kind;if(t==="tea")for(let n=0;n<3;n++){let i=Jp(n);i.scale.setScalar(.72),i.position.set(-.25+n*.25,1.035,.82),s.add(i)}if(t==="noodles"||t==="mianpi"){let n=t==="noodles"?[[-1.15,.87,1.1],[1.2,.87,1.1]]:[[-1.45,.77,1.16],[1.05,.77,1.16]];for(let i=0;i<n.length;i++){let r=new an;r.position.set(...n[i]),s.add(r);let o=new ot(Q1,nb);o.castShadow=!0,o.receiveShadow=!0,r.add(o);let a=new ot(tb,ib);a.rotation.x=Math.PI/2,a.position.y=.14,r.add(a);let l=new ot(eb,J1[t]);if(l.rotation.x=-Math.PI/2,l.rotation.z=i*.38,l.position.y=.128,r.add(l),t==="noodles"&&i===1){let c=new Xe({color:"#ac3f1f",roughness:.5,transparent:!0,opacity:.84});for(let u=0;u<5;u++){let f=new ot(new Ur(.022+u%2*.008,8,4),c);f.scale.y=.2,f.position.set(Math.sin(u*2.2)*.12,.133,Math.cos(u*2.2)*.11),r.add(f)}}}}}var om=(s,e,t)=>{let n=Math.max(0,Math.min(1,(t-s)/(e-s)));return n*n*(3-2*n)};function Lh(s,e="clear"){let t=1-om(20,58,s),n=om(62,94,s),i=1-t-n,r=["cloudy","rain","snow"].includes(e);return{day:t,night:n,dusk:i,overcast:r,sun:(t*3.1+i*1.05)*(r?.2:1),ambient:(t*1.05+i*.34+n*.075)*(r?.82:1),fill:t*.42+i*.19+n*.055,lamps:.12*t+.85*i+1.25*n,windowGlow:.04*t+.55*i+1.1*n,bloom:.12*t+.32*i+.43*n,exposure:1.03,label:t>.5?"\u767D\u5929 \xB7 12:30":n>.5?"\u591C\u665A \xB7 21:10":"\u9EC4\u660F \xB7 18:05"}}function zo(s,e=1){let t={value:0},n={value:0};return s.onBeforeCompile=i=>{i.uniforms.surfaceSnow=t,i.uniforms.surfaceWet=n,i.vertexShader=`varying vec3 weatherPosition; varying float weatherUp;
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
roughnessFactor=mix(roughnessFactor,.24,surfaceWet*surfaceUp*.8);roughnessFactor=mix(roughnessFactor,.96,snowMask);`)},s.customProgramCacheKey=()=>"weather-surface-v1",i=>{t.value=i==="snow"?e:0,n.value=i==="rain"?1:0}}function am(){let s=window.AudioContext||window.webkitAudioContext,e={music:!0,ambience:!0,effects:!0,musicVolume:.38,ambienceVolume:.48,effectsVolume:.58},t={season:"spring",time:58,weather:"clear",open:!1,store:null,screens:!0},n,i,r,o,a,l,c,u,f,d,p,_,x,g=0,m=0,M=0,v=()=>!!n&&n.state==="running",A=(W,ee,ge=.3)=>{!W||!n||W.gain.setTargetAtTime(ee,n.currentTime,ge)},B=W=>440*2**((W-69)/12);function U(W,ee){let ge=Math.round(n.sampleRate*2),ye=n.createBuffer(1,ge,n.sampleRate),de=ye.getChannelData(0);for(let ke=0;ke<ge;ke++)de[ke]=Math.random()*2-1;let $=n.createBufferSource();$.buffer=ye,$.loop=!0;let O=n.createBiquadFilter();O.type=W,O.frequency.value=ee;let pe=n.createGain();return pe.gain.value=0,$.connect(O).connect(pe).connect(o),$.start(),pe}function D(W,ee,ge,ye,de,$,O=.03,pe=.6){let ke=n.createOscillator(),we=n.createGain();ke.type=de,ke.frequency.setValueAtTime(W,ee),we.gain.setValueAtTime(0,ee),we.gain.linearRampToValueAtTime(ye,ee+O),we.gain.setTargetAtTime(1e-4,ee+Math.max(O,ge-pe),Math.max(.05,pe/4)),ke.connect(we).connect($),ke.start(ee),ke.stop(ee+ge+.25)}function J(W){let ee=[[57,60,64,67],[53,57,60,64],[48,52,55,59],[55,59,62,64]],ge=.8,ye=Math.floor(m/4)%ee.length,de=m%4,$=ee[ye];if(de===0)for(let pe of $.slice(0,3))D(B(pe-12),W,ge*4.35,.036,"sine",c,.35,1.6),D(B(pe),W,ge*4.1,.011,"triangle",c,.55,1.7);let O=$[[0,2,1,3][de]]+12;D(B(O),W+.02,ge*1.8,.027,"sine",c,.012,.8),de===2&&D(B($[3]+24),W+ge*.48,ge*.95,.012,"sine",c,.012,.32)}function R(W,ee){if(!e.ambience||t.open||t.weather==="rain"||t.weather==="snow")return;let ge=n.createOscillator(),ye=n.createGain();ge.type="sine";let de=ee?2200:1600;ge.frequency.setValueAtTime(de,W),ge.frequency.exponentialRampToValueAtTime(ee?2800:2350,W+.13),ge.frequency.exponentialRampToValueAtTime(de*.9,W+.27),ye.gain.setValueAtTime(0,W),ye.gain.linearRampToValueAtTime(ee?.014:.022,W+.025),ye.gain.exponentialRampToValueAtTime(1e-4,W+.3),ge.connect(ye).connect(o),ge.start(W),ge.stop(W+.31)}function P(){if(!v())return;let W=n.currentTime;if(e.music)for(g<W-.5&&(g=W+.08);g<W+.4;)J(g),g+=.8,m++;else g=W+.08;if(e.ambience&&W>=M){let ee=t.time>=78;(t.weather==="clear"||t.weather==="cloudy")&&!t.open&&t.season!=="winter"&&(R(W+.1,ee),ee&&t.season==="summer"&&R(W+.43,!0)),M=W+(ee?3.9:6.2)}}function te(){if(!n)return;A(r,e.music?e.musicVolume:0),A(o,e.ambience?e.ambienceVolume:0),A(a,e.effects?e.effectsVolume:0);let W=!t.open,ee=t.weather==="rain",ge=t.weather==="snow",ye=t.time>=78;A(f,W&&ee?.085:.003,.55),A(d,W?ge?.075:t.weather==="cloudy"?.035:.012:.003,.7),A(p,W?ye?.012:.024:.004,.7),A(_,W?0:.014,.4),A(x,!W&&t.screens&&["bookshop","cyber"].includes(t.store)?.012:0,.4),c.frequency.setTargetAtTime(ye?1050:1850,n.currentTime,.8)}function z(){if(!s||n)return;n=new s,i=n.createGain(),i.gain.value=.62,r=n.createGain(),o=n.createGain(),a=n.createGain(),r.connect(i),o.connect(i),a.connect(i);let W=n.createDynamicsCompressor();W.threshold.value=-12,W.knee.value=12,W.ratio.value=3,i.connect(W).connect(n.destination),l=n.createMediaStreamDestination(),W.connect(l),c=n.createBiquadFilter(),c.type="lowpass",c.frequency.value=1500,c.connect(r),f=U("highpass",450),d=U("lowpass",520),p=U("lowpass",180),_=U("lowpass",100);let ee=n.createOscillator();ee.type="sine",ee.frequency.value=98,x=n.createGain(),x.gain.value=0,ee.connect(x).connect(o),ee.start(),g=n.currentTime+.12,M=n.currentTime+2,u=setInterval(P,160),te()}async function Ce(){if(!s)return!1;z();try{return await n.resume(),P(),v()}catch{return!1}}async function Y(){n&&await n.suspend()}function re(W){Object.assign(e,W),te()}function ue(W){t={...t,...W},te()}function K(W="tap"){if(!v()||!e.effects)return;let ee=n.currentTime+.008;W==="door"?(D(660,ee,.53,.045,"sine",a,.005,.35),D(990,ee+.1,.6,.027,"sine",a,.005,.4)):W==="screen"?(D(185,ee,.13,.065,"triangle",a,.003,.07),D(840,ee+.035,.09,.018,"sine",a,.003,.05)):W==="shutter"?(D(520,ee,.09,.035,"square",a,.002,.055),D(270,ee+.035,.1,.025,"triangle",a,.002,.06)):D(420,ee,.09,.018,"sine",a,.003,.05)}return{available:!!s,start:Ce,pause:Y,isPlaying:v,setOptions:re,setScene:ue,playEffect:K,getRecordStream:()=>v()?l.stream:null,debugState:()=>({available:!!s,status:n?.state||"not-started",settings:{...e},scene:{...t}})}}var Il={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Un=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},ob=new $i(-1,1,1,-1,0,1),Ih=class extends Lt{constructor(){super(),this.setAttribute("position",new xt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new xt([0,2,0,0,2,0],2))}},ab=new Ih,us=class{constructor(e){this._mesh=new ot(ab,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ob)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Dl=class extends Un{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Jt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=os.clone(e.uniforms),this.material=new Jt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new us(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Go=class extends Un{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},Ul=class extends Un{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Nl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ce);this._width=n.width,this._height=n.height,t=new ln(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Qn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Dl(Il),this.copyPass.material.blending=ui,this.clock=new xl}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Go!==void 0&&(o instanceof Go?n=!0:o instanceof Ul&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ol=class extends Un{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ye}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}};var lm={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ye(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Vr=class s extends Un{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new ce(e.x,e.y):new ce(256,256),this.clearColor=new Ye(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new ln(r,o,{type:Qn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){let d=new ln(r,o,{type:Qn});d.texture.name="UnrealBloomPass.h"+f,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let p=new ln(r,o,{type:Qn});p.texture.name="UnrealBloomPass.v"+f,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}let a=lm;this.highPassUniforms=os.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Jt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new ce(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=Il;this.copyUniforms=os.clone(u.uniforms),this.blendMaterial=new Jt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:_r,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ye,this.oldClearAlpha=1,this.basic=new Xt,this.fsQuad=new us(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new ce(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Jt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ce(.5,.5)},direction:{value:new ce(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Jt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Vr.BlurDirectionX=new ce(1,0);Vr.BlurDirectionY=new ce(0,1);var cm={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Fl=class extends Un{constructor(){super();let e=cm;this.uniforms=os.clone(e.uniforms),this.material=new hl({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new us(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Mt.getTransfer(this._outputColorSpace)===It&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Uu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Nu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ou?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Io?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Fu&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Bl=class extends Er{constructor(e=null){super();let t=new yn;t.deleteAttribute("uv");let n=new Xe({side:pn}),i=new Xe,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let o=new Li(16777215,r,28,2);o.position.set(.418,16.199,.3),this.add(o);let a=new ot(t,n);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let l=new ot(t,i);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let c=new ot(t,i);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);let u=new ot(t,i);u.position.set(6.167,.857,7.803),u.rotation.set(0,.561,0),u.scale.set(3.927,6.285,3.687),this.add(u);let f=new ot(t,i);f.position.set(-2.017,.018,6.124),f.rotation.set(0,.333,0),f.scale.set(2.002,4.566,2.064),this.add(f);let d=new ot(t,i);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);let p=new ot(t,i);p.position.set(-2.193,-.369,-5.547),p.rotation.set(0,.516,0),p.scale.set(3.875,3.487,2.986),this.add(p);let _=new ot(t,Hr(50));_.position.set(-16.116,14.37,8.208),_.scale.set(.1,2.428,2.739),this.add(_);let x=new ot(t,Hr(50));x.position.set(-16.109,18.021,-8.207),x.scale.set(.1,2.425,2.751),this.add(x);let g=new ot(t,Hr(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let m=new ot(t,Hr(43));m.position.set(-.462,8.89,14.52),m.scale.set(4.38,5.441,.088),this.add(m);let M=new ot(t,Hr(20));M.position.set(3.235,11.486,-12.541),M.scale.set(2.5,2,.1),this.add(M);let v=new ot(t,Hr(100));v.position.set(0,20,0),v.scale.set(1,.1,1),this.add(v)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Hr(s){let e=new Xt;return e.color.setScalar(s),e}async function lb(){async function s(h){window.sceneBoot?.phase(h),await new Promise(y=>requestAnimationFrame(()=>setTimeout(y,0)))}await s("\u6B63\u5728\u521B\u5EFA\u4E09\u7EF4\u753B\u9762\u2026");let e=document.querySelector("#scene");function t(){let h=wl(),y=document.querySelector("#textureLoadStatus"),S=document.querySelector("#retryTextures");y&&(y.textContent=h.failed.length?"\u6709 "+h.failed.length+" \u5F20\u7D20\u6750\u52A0\u8F7D\u5931\u8D25":h.pending?"\u5E97\u94FA\u7D20\u6750 "+h.ready+" / "+h.total:"\u5E97\u94FA\u7D20\u6750\u5DF2\u5C31\u7EEA"),S&&(S.hidden=!h.failed.length)}window.addEventListener("scene-textures",t),document.querySelector("#retryTextures")?.addEventListener("click",Pp),t();let n=matchMedia("(max-width:680px), (pointer:coarse)").matches;function i(h){if(!n)return;let y=new Set;h.traverse(S=>{for(let b of Array.isArray(S.material)?S.material:[S.material])if(b)for(let w of Object.values(b))w?.isTexture&&!w.isRenderTargetTexture&&!y.has(w)&&(y.add(w),(w.generateMipmaps||w.minFilter!==Yt||w.anisotropy>2)&&(w.generateMipmaps=!1,w.minFilter=Yt,w.anisotropy=Math.min(2,w.anisotropy),w.needsUpdate=!0))})}let r=new vo({canvas:e,antialias:!n,preserveDrawingBuffer:!0,powerPreference:n?"low-power":"high-performance",failIfMajorPerformanceCaveat:!1});r.setPixelRatio(Math.min(devicePixelRatio,n?1.35:1.75)),r.outputColorSpace=qe,r.toneMapping=Io,r.shadowMap.enabled=!0,r.shadowMap.type=Du;let o=new Er;if(!n){let h=new Bl,y=new Ar(r);o.environment=y.fromScene(h,.035).texture,h.dispose(),y.dispose()}let a=new jt(39,1,.15,180),l=new Rl(a,e),c=null,u=null;n||(c=new Nl(r),c.addPass(new Ol(o,a)),u=new Vr(new ce(640,480),.3,.55,1),c.addPass(u),c.addPass(new Fl)),l.enableDamping=!0,l.dampingFactor=.08,l.maxPolarAngle=1.48;let f=new an;o.add(f);let d=new pl("#b9c4ef","#65516c",1.3);o.add(d);let p=new Us("#ffd5a4",3.2);p.position.set(-15,24,12),p.castShadow=!0,p.shadow.mapSize.set(n?1024:2048,n?1024:2048),Object.assign(p.shadow.camera,{left:-24,right:24,top:24,bottom:-24,near:.5,far:80}),p.shadow.bias=-3e-4,p.shadow.normalBias=.025,o.add(p);let _=new Us("#9fb5ef",.7);_.position.set(14,12,-8),o.add(_);let x={season:"spring",time:58,weather:"clear",palette:"dream",lights:!0,screens:!0,street:!0,store:null,floor:0,open:!1},g=am(),m=()=>g.setScene({season:x.season,time:x.time,weather:x.weather,open:x.open,store:x.store,screens:x.screens}),M=new Map,v=[],A=[],B=[],U=[],D=[],J=[],R=[],P=[],te=20503,z=()=>(te=te*1664525+1013904223>>>0,te/4294967296),Ce=new yn(1,1,1),Y=new cs(1,1,1,1,.022),re=new ul(1,1),ue=new Map;function K(h,y=.8,S=0){let b=h+y+S;return ue.has(b)||ue.set(b,new Xe({color:h,roughness:y,metalness:S})),ue.get(b)}let W=K("#30383b",.55,.45),ee=K("#735039"),ge=K("#b8b09a"),ye=K("#b79459",.4,.6);function de(h,y=0,S=0,b=0,w=0){let N=new an;return N.position.set(y,S,b),N.rotation.y=w,h.add(N),N}function $(h,y,S,b=0,w=0,N=0){let k=new ot(y,S);return k.position.set(b,w,N),k.castShadow=!0,k.receiveShadow=!0,h.add(k),k}function O(h,y,S,b,w,N=0,k=0,q=0){if(w.userData?.metersPerTile){let be=new yn(y,S,b),Ue=be.attributes.position,Ve=be.attributes.normal,mt=be.attributes.uv,Ht=w.userData.metersPerTile;for(let At=0;At<Ue.count;At++){let pi=Math.abs(Ve.getX(At)),Ws=Math.abs(Ve.getY(At));mt.setXY(At,(pi>.5?Ue.getZ(At):Ue.getX(At))/Ht,(Ws>.5?Ue.getZ(At):Ue.getY(At))/Ht)}return $(h,be,w,N,k,q)}let ae=$(h,y>.3&&S>.3&&b>.1?Y:Ce,w,N,k,q);return ae.scale.set(y,S,b),ae}function pe(h,y,S,b,w=0,N=0,k=0,q=y,ae=12){return $(h,new Hn(y,q,S,ae),b,w,N,k)}function ke(h,y,S,b,w,N,k=1,q=1,ae=1){let be=$(h,re,S,b,w,N);return be.scale.set(y*k,y*q,y*ae),be}function we(h,y,S,b=.025,w=W){let N=new L(...y),k=new L(...S),q=k.clone().sub(N),ae=pe(h,b,q.length(),w,...N.clone().add(k).multiplyScalar(.5).toArray(),b,8);return ae.quaternion.setFromUnitVectors(new L(0,1,0),q.normalize()),ae}function Ke(h,y,S=.012,b=W){return $(h,new Nr(new Qi(y.map(w=>new L(...w))),24,S,5,!1),b)}function $e(h,y=512){let S=document.createElement("canvas");S.width=S.height=y,h(S.getContext("2d"),y);let b=new Ot(S);return b.colorSpace=qe,b.anisotropy=8,b}function He(h,y=1){return h.wrapS=h.wrapT=mn,h.repeat.set(y,y),h}let it=sn(),H={fashion:it.load("./textures/fast/fashion-fascia-original-3to1-v3.webp"),bakery:it.load("./textures/fast/bakery-fascia-3to1-v1.webp"),shop:it.load("./textures/fast/hongxing-shop-fascia-3to1-v1.webp")};for(let h of Object.values(H))h.colorSpace=qe,h.anisotropy=8;function Me(h,y){let S=it.load("./textures/fast/pbr/"+h+"_1K-JPG_"+y+".webp");return y==="Color"&&(S.colorSpace=qe),S.anisotropy=8,He(S,1)}let ve={map:Me("Plaster001","Color"),normalMap:Me("Plaster001","NormalGL"),roughnessMap:Me("Plaster001","Roughness")},Ie={map:Me("WoodSiding006","Color"),normalMap:Me("WoodSiding006","NormalGL"),roughnessMap:Me("WoodSiding006","Roughness")},_e={normalMap:Me("Metal030","NormalGL"),roughnessMap:Me("Metal030","Roughness")},Je={normalMap:Me("Fabric030","NormalGL"),roughnessMap:Me("Fabric030","Roughness")},Fe=new Xe({map:Me("Tiles036","Color"),normalMap:Me("Tiles036","NormalGL"),roughnessMap:Me("Tiles036","Roughness"),color:"#e1deca",roughness:.7,normalScale:new ce(.4,.4)});Fe.userData.metersPerTile=1.8,Object.assign(ee,Ie),ee.color.set("#c1a180"),ee.userData.metersPerTile=2,Object.assign(W,_e),W.normalScale.set(.2,.2),W.userData.metersPerTile=.8;function C(h){let y=new Xe({...Je,color:h,roughness:1,normalScale:new ce(.35,.35)});return y.userData.metersPerTile=.65,y}let E=new Map;function ne(h){return E.has(h)||E.set(h,C(h)),E.get(h)}function Te(h){let y=$e((S,b)=>{S.fillStyle=h,S.fillRect(0,0,b,b);for(let w=0;w<6500;w++){let N=z();S.fillStyle=N>.55?"rgba(255,245,215,.07)":"rgba(30,26,24,.075)",S.fillRect(z()*b,z()*b,1+z()*5,1+z()*8)}for(let w=0;w<35;w++){let N=z()*b,k=z()*b;S.fillStyle="#a49a82",S.beginPath();for(let q=0;q<8;q++){let ae=q/8*Math.PI*2,be=4+z()*14;S.lineTo(N+Math.cos(ae)*be,k+Math.sin(ae)*be)}S.closePath(),S.fill()}S.strokeStyle="rgba(52,45,37,.16)",S.lineWidth=1;for(let w=0;w<12;w++){let N=z()*b,k=z()*b;S.beginPath(),S.moveTo(N,k);for(let q=0;q<6;q++)N+=z()*12-6,k+=z()*11,S.lineTo(N,k);S.stroke()}},512);return new Xe({...ve,color:h,roughness:.95,normalScale:new ce(.55,.55),bumpMap:y,bumpScale:.018})}let Pe=$e((h,y)=>{h.fillStyle="#8b6242",h.fillRect(0,0,y,y);for(let S=0;S<800;S++){h.strokeStyle=S%2?"rgba(39,20,12,.12)":"rgba(255,225,171,.1)";let b=z()*y;h.beginPath(),h.moveTo(0,b),h.bezierCurveTo(y*.3,b+z()*12,y*.6,b-z()*12,y,b),h.stroke()}for(let S=0;S<y;S+=64)h.fillStyle="#46372d",h.fillRect(0,S,y,2)},512),Se=new Xe({...Ie,color:"#ffebcf",roughness:.88,normalScale:new ce(.45,.45)}),Ze=He($e((h,y)=>{h.fillStyle="#4c4b53",h.fillRect(0,0,y,y);for(let S=0;S<14e3;S++){let b=z();h.fillStyle=b>.5?"rgba(220,210,190,.12)":"rgba(15,18,27,.16)",h.fillRect(z()*y,z()*y,z()*2+1,z()*2+1)}h.strokeStyle="#282932";for(let S=0;S<6;S++){let b=z()*y,w=z()*y;h.beginPath(),h.moveTo(b,w);for(let N=0;N<20;N++)b+=z()*15-6,w+=z()*12,h.lineTo(b,w);h.stroke()}},1024),5),Ne=new Xe({map:Me("Asphalt010","Color"),normalMap:Me("Asphalt010","NormalGL"),roughnessMap:Me("Asphalt010","Roughness"),roughness:.95,normalScale:new ce(.65,.65)});for(let h of[Ne.map,Ne.normalMap,Ne.roughnessMap])h.repeat.set(.25,.25);Se.userData.metersPerTile=2;let ze=sn().load("./textures/fast/terrazzo_floor.webp");ze.colorSpace=qe,ze.anisotropy=8;let Qe=new Xe({map:ze,roughness:.65,bumpMap:ze,bumpScale:.008});Qe.userData.metersPerTile=2,He(ze);let et=Te("#b0a58f");et.userData.metersPerTile=2,P.push(zo(Ne,.42),zo(et,.9));let Re=new Xe({map:Me("Bricks051","Color"),normalMap:Me("Bricks051","NormalGL"),roughnessMap:Me("Bricks051","Roughness"),roughness:.92,normalScale:new ce(.7,.7)});Re.userData.metersPerTile=2;let ct=Array.from({length:16},()=>new Xe({color:"#b9a98b",roughness:.8,side:vt}));sn().load("./textures/fast/rental-books-atlas-v1.webp",h=>{ct.forEach((y,S)=>{let b=h.clone();b.colorSpace=qe,b.repeat.set(.244,.244),b.offset.set(S%4*.25+.003,(3-Math.floor(S/4))*.25+.003),b.anisotropy=8,b.needsUpdate=!0,y.map=b,y.color.set("#ffffff"),y.needsUpdate=!0})});let G=["#975f50","#536a74","#987c57","#7b586d","#6b806f","#a86458","#59647b","#a28562"],Ae=["\u9752\u6625\u6F2B\u8BB0","\u6821\u56ED\u7269\u8BED","\u5C11\u5E74\u4FA6\u63A2","\u65E7\u57CE\u6765\u4FE1","\u6B66\u4FA0\u6545\u4E8B","\u4EF2\u590F\u65E5\u8BB0","\u6F2B\u753B\u7CBE\u9009","\u661F\u7A7A\u65C5\u4EBA","\u8857\u89D2\u4E66\u5C4B","\u653E\u5B66\u4EE5\u540E","\u5947\u5999\u65C5\u7A0B","\u5E74\u5C11\u65F6\u5149","\u5348\u591C\u7535\u53F0","\u6A58\u8272\u9EC4\u660F","\u6625\u65E5\u4E66\u7B80","\u7EB8\u4E0A\u5192\u9669"],Oe=$e((h,y)=>{h.fillStyle="#ddd1b7",h.fillRect(0,0,y,y);for(let S=0;S<y;S+=3)h.fillStyle=S%9?"#f7f0da8b":"#9d8d7059",h.fillRect(0,S,y,1)},256),Le=new Xe({map:Oe,roughness:1});function j(h,y=!1){let S=document.createElement("canvas");S.width=y?128:384,S.height=512;let b=S.getContext("2d"),w=G[h%8];if(b.fillStyle=w,b.fillRect(0,0,S.width,S.height),b.fillStyle="#efdcb1",b.fillRect(9,12,S.width-18,16),b.fillRect(9,480,S.width-18,12),b.fillStyle="#f2e9d9",b.textAlign="center",b.font=y?'bold 33px "Songti SC",serif':'bold 42px "Songti SC",serif',y)[...Ae[h]].slice(0,5).forEach((k,q)=>b.fillText(k,64,95+q*67)),b.fillStyle="#c9b48f",b.fillRect(18,442,92,11);else{b.fillText(Ae[h],192,80,350),b.font='21px "Songti SC",serif',b.fillText("\u51FA\u79DF \xB7 \u65E7\u4E66\u4EA4\u6362",192,122),b.fillStyle="#e4d6c6",b.fillRect(34,170,316,222),b.fillStyle="#8f7e65";for(let k=0;k<9;k++)b.fillRect(51,191+k*21,265-k%3*30,4);for(let k=0;k<28;k++)b.fillStyle="#332d29",b.fillRect(240+k*3,425,k%4===0?3:1,36)}let N=new Ot(S);return N.colorSpace=qe,N.anisotropy=8,new Xe({map:N,roughness:.87})}let se=Ae.map((h,y)=>j(y,!0)),he=Ae.map((h,y)=>j(y));function Q(h,y,S,b,w="#d5b568",N="#4c3022",k=70){let q=document.createElement("canvas");q.width=1024,q.height=256;let ae=q.getContext("2d");ae.fillStyle=w,ae.fillRect(0,0,1024,256);for(let Ve=0;Ve<1400;Ve++)ae.fillStyle=Ve%2?"#ffffff0c":"#0000000b",ae.fillRect(z()*1024,z()*256,z()*5+1,z()*4+1);ae.strokeStyle=N+"66",ae.lineWidth=5,ae.strokeRect(12,12,1e3,232),ae.textAlign="center",ae.textBaseline="middle",ae.fillStyle=N,ae.font="bold "+k+'px "Songti SC", "SimSun", serif',ae.fillText(y,512,128,970);let be=new Ot(q);return be.colorSpace=qe,$(h,new zt(S,b),new Xe({map:be,roughness:.75,emissive:"#fff5dc",emissiveMap:be,emissiveIntensity:0,side:vt}))}function F(h,y,S,b,w,N=!1){let k=.25+z()*.12,q=N?.25:.055+z()*.026,ae=N?.032:.2,be=de(h,y,S,b),Ue=N?[se[w%16],se[w%16],Le,Le,ct[w%16],he[w%16]]:[ct[w%16],he[w%16],Le,Le,se[w%16],se[w%16]];return O(be,q,k,ae,Ue,0,k/2,0),be}let T=null,Z=[];function X(h,y){if(!T)return;let S=T.clone();S.colorSpace=qe,S.repeat.set(1,1/6),S.offset.y=y/6,S.anisotropy=8,S.needsUpdate=!0,h.map=S,h.color.set("#ffffff"),h.needsUpdate=!0}sn().load("./textures/fast/rental-bookcase-face-v1.webp",h=>{T=h;for(let[y,S]of Z)X(y,S)});function me(h,y=2.2,S=!1){let b=de(h);O(b,y,2.35,.12,Se,0,1.2,-.19);for(let w of[-y/2,y/2])O(b,.08,2.45,.44,Se,w,1.22,0);for(let w=0;w<5;w++){let N=.16+w*.46;if(O(b,y,.055,.48,Se,0,N,0),S){let k=new Xe({color:"#b9a98b",roughness:.9});Z.push([k,w]),X(k,w),$(b,new zt(y-.13,.37),k,0,N+.24,.105).castShadow=!1}else{let k=-y/2+.1,q=0;for(;k<y/2-.16;){let ae=q%4===0;F(b,k,N+.03,.03,(w*5+q)%16,ae),k+=ae?.3:.105,q++}}}return O(b,y+.1,.1,.5,Se,0,2.43,0),b}function V(h,y,S,b="#ba5139",w=0){let N=de(h,y,w,S);O(N,.38,.08,.36,K(b),0,.46,0);for(let k of[-.13,.13])for(let q of[-.12,.12])we(N,[k,.44,q],[k*1.25,.02,q*1.25],.035,K(b));return O(N,.32,.04,.04,K(b),0,.2,.15),O(N,.32,.04,.04,K(b),0,.2,-.15),N}function oe(h,y,S,b=0){let w=de(h,y,0,S,b);O(w,.47,.09,.45,K("#495d69"),0,.49,0);for(let N of[-.18,.18])for(let k of[-.17,.17])we(w,[N,.02,k],[N,.49,k],.024,W);return O(w,.45,.48,.075,K("#465a64"),0,.84,.19),we(w,[-.18,.48,.2],[-.18,1.03,.2],.025),we(w,[.18,.48,.2],[.18,1.03,.2],.025),w}function Ee(h,y,S,b=1.5,w=.7,N=.8){let k=de(h,y,0,S);O(k,b,.075,w,Se,0,N,0);for(let q of[-b/2+.1,b/2-.1])for(let ae of[-w/2+.1,w/2-.1])O(k,.065,N,.065,W,q,N/2,ae);return k}let De=$e((h,y)=>{let S=h.createRadialGradient(y/2,y/2,0,y/2,y/2,y/2);S.addColorStop(0,"#fff8de"),S.addColorStop(.15,"#ffcd8999"),S.addColorStop(1,"#ffb54a00"),h.fillStyle=S,h.fillRect(0,0,y,y)},128),We=$e((h,y)=>{h.clearRect(0,0,y,y);let S=h.createLinearGradient(y*.2,0,y*.8,y);S.addColorStop(0,"#7e8981"),S.addColorStop(.48,"#e5e8c9"),S.addColorStop(1,"#717e6c"),h.fillStyle=S,h.beginPath(),h.moveTo(y*.5,y*.05),h.bezierCurveTo(y*.98,y*.31,y*.82,y*.72,y*.5,y*.94),h.bezierCurveTo(y*.18,y*.72,y*.02,y*.31,y*.5,y*.05),h.fill(),h.strokeStyle="#c6d0ae",h.lineWidth=1.4,h.beginPath(),h.moveTo(y*.5,y*.1),h.lineTo(y*.5,y*.95),h.stroke();for(let b=0;b<9;b++)for(let w of[-1,1]){let N=y*(.22+b*.065);h.strokeStyle="#a5b296",h.lineWidth=.7,h.beginPath(),h.moveTo(y*.5,N+y*.09),h.lineTo(y*(.5+w*(.25-Math.abs(b-3)*.02)),N),h.stroke()}},128),nt=new zt(.24,.48,2,4);for(let h=0;h<nt.attributes.position.count;h++){let y=nt.attributes.position;y.setZ(h,.026*Math.cos(y.getY(h)*8))}nt.computeVertexNormals();let dt=["#658153","#81915c","#4e7050"].map(h=>new Xe({map:We,color:h,side:vt,alphaTest:.48,roughness:.92}));function pt(h,y,S,b,w,N=1){let k=$(h,nt,dt[w%3],y,S,b);return k.rotation.set(z()*2.8,z()*6.28,z()*6.28),k.scale.setScalar(N),k}function yt(h,y,S,b,w="#ffd39b",N=20,k="room"){let q=de(h,y,S,b);pe(q,.19,.13,K("#d4c6a2"),0,.08,0,.09);let ae=ke(q,.075,new Xt({color:w}),0,-.02,0);ae.userData.dynamic=!0;let be=new Li(w,N,10,1.6);be.position.y=-.12,q.add(be);let Ue=new Qa(new bo({map:De,color:w,transparent:!0,opacity:.4,depthWrite:!1,blending:_r}));return Ue.scale.set(.7,.7,1),q.add(Ue),v.push({light:be,bulb:ae,halo:Ue,power:N,type:k}),q}function Tt(h,y,S,b,w=.53,N=.39,k=!1){let q=document.createElement("canvas");q.width=320,q.height=240;let ae=new Ot(q);ae.colorSpace=qe;let be=$(h,new zt(w,N),new Xt({map:ae}),y,S,b);be.userData.dynamic=!0,be.userData.screen=!0;let Ue={mesh:be,canvas:q,texture:ae,page:k?0:U.length%4,tv:k};return U.push(Ue),Ue}function Ut(h,y,S,b,w=!1){let N=de(h,y,S,b),k=K(w?"#51493c":"#c6c2b3",.62),q=K("#555650",.45);$(N,new cs(.72,.59,.58,2,.075),k,0,.33,-.11),$(N,new cs(.64,.47,.06,2,.035),q,0,.35,.198);let ae=Tt(N,-.025,.36,.235,.52,.365,w);ae.mesh.material.side=vt,O(N,.27,.11,.25,k,0,.015,-.09);for(let be=0;be<3;be++)for(let Ue=0;Ue<6;Ue++)O(N,.008,.008,.13,K("#68675f"),.361,.38-be*.08,-.29+Ue*.055);ke(N,.013,new Xt({color:"#92dc74"}),.28,.13,.24);for(let be=0;be<2;be++)pe(N,.027,.021,q,.23+be*.07,.12,.235,.027,12).rotation.x=Math.PI/2;if(O(N,.17,.035,.015,q,-.24,.105,.232),w)for(let be=0;be<4;be++)O(N,.045,.012,.015,W,.29,.43-be*.05,.242);return N}function wt(h,y,S){let b=Ee(h,y,S,1.7,.75,.78);Ut(b,0,.82,-.13),O(b,.56,.035,.19,K("#afa992"),-.03,.835,.27);for(let w=0;w<4;w++)for(let N=0;N<12;N++)O(b,.032,.012,.028,K("#e2d6b9"),-.28+N*.043,.858,.205+w*.035);ke(b,.055,ge,.46,.86,.29,1,.45,1.4),O(b,.24,.5,.42,ge,.56,.29,-.08);for(let w=0;w<3;w++)O(b,.17,.015,.008,W,.56,.44-w*.04,.135);return oe(h,y,S+.65),b}function gn(h,y,S,b){let w=de(h,y,S,b);pe(w,.16,.045,W,0,.025,0),we(w,[0,.05,0],[0,.48,0],.025);let N=$(w,new qt(.22,.018,6,24),W,0,.5,0);for(let k=0;k<4;k++){let q=k*Math.PI/2;we(w,[0,.5,0],[Math.cos(q)*.2,.5+Math.sin(q)*.2,0],.009,ge)}for(let k=0;k<3;k++){let q=ke(w,.12,K("#7b9291"),0,.5,0,1,.35,.12);q.rotation.z=k*2.094}return w}function rn(h,y,S,b,w=1){let N=de(h,y,S,b);N.scale.setScalar(w),pe(N,.18,.33,K("#986648"),0,.17,0,.12),pe(N,.19,.06,K("#bf9061"),0,.33,0),pe(N,.155,.02,K("#433b2d"),0,.34,0);for(let k=0;k<9;k++){let q=k*2.4,ae=.16+z()*.2,be=.6+z()*.45;we(N,[0,.35,0],[Math.cos(q)*ae,be,Math.sin(q)*ae],.009,K("#455d3b")),pt(N,Math.cos(q)*ae,be,Math.sin(q)*ae,k,.9).rotation.set(.2,q,q*.2)}return N}function Nn(h,y,S,b){let w=de(h,y,S,b);O(w,.9,.58,.35,K("#b1b4ac"),0,0,0);let N=$(w,new qt(.19,.015,6,20),W,-.18,0,.19);for(let k=-3;k<=3;k++)we(w,[-.36,k*.05,.2],[0,k*.05,.2],.009);for(let k=0;k<5;k++)O(w,.22,.02,.01,W,.27,.17-k*.07,.19);return we(w,[-.3,-.3,0],[-.3,-.45,.2],.035),we(w,[.3,-.3,0],[.3,-.45,.2],.035),Ke(w,[[.47,0,0],[.6,-.2,0],[.6,-1.5,0]],.035,K("#9c977d")),w}function hs(h,y,S,b=0){let w=de(h,y,.32,S,b);for(let k of[-.55,.55]){$(w,new qt(.31,.028,7,24),W,k,0,0);for(let q=0;q<8;q++){let ae=q*Math.PI/4;we(w,[k,0,0],[k+Math.cos(ae)*.29,Math.sin(ae)*.29,0],.006,ge)}}let N=K("#697f76",.55,.4);for(let[k,q]of[[[-.55,0,0],[-.15,.43,0]],[[-.15,.43,0],[.17,0,0]],[[.17,0,0],[-.55,0,0]],[[-.15,.43,0],[.44,.45,0]],[[.44,.45,0],[.17,0,0]],[[.44,.45,0],[.55,0,0]]])we(w,k,q,.024,N);return O(w,.27,.045,.15,K("#483e35"),-.17,.48,0),we(w,[.44,.45,0],[.43,.7,0],.024,N),we(w,[.43,.7,-.18],[.43,.7,.18],.024,N),w}function kl(h,y,S,b){if(b){let w=de(h,-1.55,0,-.8);O(w,1.55,.27,2.25,Se,0,.34,0),O(w,1.48,.18,2.12,K("#c9b89e"),0,.56,0);for(let ae=0;ae<9;ae++)O(w,1.45,.045,.15,K(ae%2?"#5d757d":"#ab7759"),0,.675,-.7+ae*.17);O(w,1.38,.12,.38,K("#d9c9ad"),0,.72,-.8),O(w,1.6,.7,.1,Se,0,.58,-1.16);let N=Ee(h,.8,-1,1.4,.8);for(let ae=0;ae<5;ae++)F(N,-.7+ae*.12,.85,-.18,ae);gn(N,.55,.85,-.18),oe(h,.8,-.1);let k=me(h,1.4);k.position.set(.9,0,1.7),k.scale.y=.48,O(h,.9,1.9,.6,Se,-2.1,.95,1.6),O(h,.04,.12,.03,ye,-1.9,1,1.92);let q=O(h,1.5,.015,1.1,K("#7e4e46"),-.2,.15,.8)}else{for(let ae of[-1.5,.65])me(h,1.95,!0).position.set(ae,0,-S/2+.34);let w=me(h,2.8,!0);w.position.set(-y/2+.32,0,.1),w.rotation.y=Math.PI/2;let N=Ee(h,-1.25,1.15,1.2,.72,.73);for(let ae=0;ae<2;ae++)for(let be=0;be<3;be++){let Ue=F(N,-.42+be*.31,.78,-.18+ae*.32,be+ae*5,!0);Ue.rotation.x=-.35}let k=Ee(h,.95,.75,1.55,.75,.83);Ut(k,.12,.88,-.05,!0);for(let ae=0;ae<4;ae++){let be=de(k,-.5,.9+ae*.045,.12,(ae-1.5)*.12),Ue=[10,3,5,14][ae];O(be,.34,.035,.25,[Le,Le,ct[Ue],he[Ue],Le,se[Ue]],0,0,0)}V(h,.7,1.8,"#ad4932"),V(h,-1.8,1.9,"#397a83"),gn(k,.67,.865,-.22).scale.setScalar(.7)}}function Dh(h,y,S,b){for(let k of[-1.25,1.25])for(let q of[-1.65,-.1,1.45])wt(h,k,q);Q(h,b?"\u5B89\u9759\u4E0A\u7F51 \xB7 \u8BF7\u52FF\u55A7\u54D7":"\u5305\u591C 8 \u5143  \xB7  \u51B0\u7EA2\u8336 2 \u5143",3,.36,"#ded4b3","#5e483b",58).position.set(0,2.65,-S/2+.16);let N=O(h,3.4,.07,.1,new Xt({color:b?"#ffb9ec":"#bfe8ff"}),0,2.9,-1.8);gn(h,2.5,.86,-2.3);for(let k=0;k<3;k++)pe(h,.07,.17,K("#a34a36"),-2.5,.95,-1+k*.4)}function I(h,y,S){let b=O(h,y-.6,.9,.65,K("#96b6a1"),0,.45,-.55);O(h,y-.5,.09,.77,K("#c9b9a1",.4),0,.94,-.55);for(let N=0;N<8;N++)pe(h,.065,.16,K(N%2?"#edddbf":"#d1a876"),-1.3+N*.35,1.07,-.4),pe(h,.075,.025,ge,-1.3+N*.35,1.16,-.4);for(let N=0;N<3;N++)pe(h,.15,.6,new Xe({color:"#e2d6aa",transparent:!0,opacity:.45,roughness:.15}),-.8+N*.6,1.28,-.77),pe(h,.16,.05,ye,-.8+N*.6,1.6,-.77);pe(h,.25,.5,K("#aeb4b1",.25,.8),1.35,1.25,-.6),Q(h,"\u4E03\u676F\u8336  /  \u73CD\u73E0\u5976\u8336 3\u5143  \xB7  \u67E0\u6AAC\u8336 2\u5143",y-.5,.85,"#e8dfc1","#31594b",55).position.set(0,2.25,-S/2+.16);for(let N of[-1.3,0,1.3])V(h,N,1.1,N===0?"#bf603b":"#478f89");O(h,.8,1.65,.65,K("#bcb9a7"),y/2-.6,.83,-1.65);for(let N=0;N<4;N++)O(h,.6,.05,.55,ge,y/2-.6,.3+N*.35,-1.65);rn(h,-y/2+.35,0,1.5,.9)}function ie(h,y=!1){let S=document.createElement("canvas");S.width=900,S.height=y?1100:500;let b=S.getContext("2d"),w=h==="tea",N=w?"#eee0b8":"#ead8ad",k=w?"#28564a":"#7e3427",q=w?"#bd593d":"#b14a32";b.fillStyle=N,b.fillRect(0,0,S.width,S.height);for(let ae=0;ae<1800;ae++)b.fillStyle=ae%3?"#543b1a0c":"#fff7dd25",b.fillRect(z()*S.width,z()*S.height,z()*5+1,z()*3+1);if(b.strokeStyle=k,b.lineWidth=12,b.strokeRect(18,18,S.width-36,S.height-36),b.strokeStyle=q,b.lineWidth=3,b.strokeRect(35,35,S.width-70,S.height-70),b.textAlign="center",b.textBaseline="middle",b.fillStyle=k,b.font='bold 70px "Songti SC","SimSun","Hiragino Sans GB",serif',b.fillText(w?"\u4E03\u676F\u8336":"\u5C0F\u73B2\u7C73\u7EBF",450,y?125:88),b.fillStyle=q,b.font="bold 27px sans-serif",b.fillText(w?"\u653E\u5B66\u540E\u6765\u4E00\u676F \xB7 \u6E05\u51C9\u53C8\u89E3\u6E34":"\u5C0F\u9505\u73B0\u716E \xB7 \u70ED\u6C64\u9C9C\u9999",450,y?190:142),y?(b.textAlign="center",b.fillStyle=k,b.font='bold 42px "Songti SC","SimSun",serif',b.fillText(w?"\u73CD\u73E0\u5976\u8336":"\u62DB\u724C\u7C73\u7EBF",450,285),b.fillStyle=q,b.font="bold 34px sans-serif",b.fillText(w?"\u73CD\u73E0 \xB7 \u6930\u679C \xB7 \u7EA2\u8C46":"\u725B\u8089 \xB7 \u9178\u83DC \xB7 \u9EBB\u8FA3",450,345),b.fillStyle=k,b.font="28px sans-serif",b.fillText(w?"\u52A0\u73CD\u73E0 +1\u5143":"\u52A0\u714E\u86CB +1\u5143",450,405)):(b.textAlign="left",b.font='bold 30px "Songti SC","SimSun",serif',(w?[["\u73CD\u73E0\u5976\u8336","3\u5143"],["\u7EA2\u8C46\u5976\u8336","4\u5143"],["\u67E0\u6AAC\u7EFF\u8336","3\u5143"],["\u73CD\u73E0 / \u6930\u679C","\u52A01\u5143"]]:[["\u62DB\u724C\u725B\u8089\u7C73\u7EBF","6\u5143"],["\u9178\u83DC\u8089\u4E1D\u7C73\u7EBF","5\u5143"],["\u9EBB\u8FA3\u7C73\u7EBF","5\u5143"],["\u52A0\u714E\u86CB / \u52A0\u8089","1\u5143\u8D77"]]).forEach((be,Ue)=>{let Ve=220+Ue*60;b.fillStyle=k,b.fillText(be[0],58,Ve),b.textAlign="right",b.fillStyle=q,b.fillText(be[1],565,Ve),b.textAlign="left",b.strokeStyle="#7c664332",b.lineWidth=2,b.beginPath(),b.moveTo(58,Ve+28),b.lineTo(565,Ve+28),b.stroke()})),w)for(let ae=0;ae<3;ae++){let be=660+ae*67,Ue=y?850:430;b.fillStyle=["#c79650","#e7d9b1","#bf6b43"][ae],b.beginPath(),b.moveTo(be-34,Ue-74),b.lineTo(be+34,Ue-74),b.lineTo(be+25,Ue),b.lineTo(be-25,Ue),b.closePath(),b.fill(),b.fillStyle="#593d2d";for(let Ve=0;Ve<4;Ve++)b.beginPath(),b.arc(be-15+Ve%2*24,Ue-18-Math.floor(Ve/2)*20,5,0,Math.PI*2),b.fill();b.strokeStyle=k,b.lineWidth=7,b.beginPath(),b.moveTo(be,Ue-77),b.lineTo(be+15,Ue-140),b.stroke()}else{let be=y?820:390;b.fillStyle=k,b.beginPath(),b.ellipse(675,be,130,42,0,0,Math.PI),b.lineTo(571,be-94),b.quadraticCurveTo(675,be-132,779,be-94),b.closePath(),b.fill(),b.fillStyle="#d9a754";for(let Ue=0;Ue<8;Ue++)b.beginPath(),b.arc(600+Ue*21,be-74-Ue%2*20,7,0,Math.PI*2),b.fill();b.strokeStyle="#f3cf83",b.lineWidth=9,b.beginPath(),b.moveTo(625,be-91),b.bezierCurveTo(595,be-140,720,be-65,745,be-112),b.stroke()}return b.textAlign="center",b.fillStyle=k,b.font="22px sans-serif",b.fillText("2005 \xB7 \u653E\u5B66\u65F6\u6BB5\u4F9B\u5E94",450,S.height-34),new Ot(S)}function fe(h,y,S,b,w,N,k,q=!1,ae=0){let be=de(h,S,b,w,ae),Ue=.055;O(be,N+.09,k+.09,Ue,K(y==="tea"?"#765139":"#765045"),0,0,0),O(be,N,k,.012,K("#dbc89e"),0,0,Ue*.56);let Ve=ie(y,q);Ve.colorSpace=qe,Ve.anisotropy=8;let mt=new Xe({map:Ve,roughness:.88,emissive:y==="tea"?"#d7b480":"#cfaa79",emissiveMap:Ve,emissiveIntensity:.055,side:vt});$(be,new zt(N-.08,k-.08),mt,0,0,Ue*.62);for(let Ht of[-N/2-.015,N/2+.015])pe(be,.018,k+.08,ye,Ht,0,Ue*.75,.018,8);return be}function xe(h,y,S,b){fe(h,y,0,2.67,-b/2+.14,2.78,.72,!1);let w=y==="tea";fe(h,y,w?-S/2+.13:S/2-.13,1.88,-.15,.54,.88,!0,w?Math.PI/2:-Math.PI/2)}let le=new Xe({map:Me("RoofingTiles001","Color"),normalMap:Me("RoofingTiles001","NormalGL"),roughnessMap:Me("RoofingTiles001","Roughness"),color:"#aeb6b9",roughness:.9,normalScale:new ce(.85,.85)});le.userData.metersPerTile=2,P.push(zo(le,.95));let Ge=Yp({group:de,box:O,cyl:pe,orb:ke,rod:we,mesh:$,mat:K,table:Ee,chair:oe,stool:V,crt:Ut,fan:gn,plant:rn,fixture:yt,label:Q,wood:ee,iron:W,cream:ge,timber:Se,roofFinish:le,metalPBR:_e,ceramic:Fe,fabric:C,bookCovers:ct,bookBacks:he,bookSpines:se,paperEdge:Le});function tt(h,y){let{w:S,d:b,kind:w}=y,N=["tea","noodles","mianpi","bakery"].includes(w),k=N?K("#767d76",.5):ee;O(h,S-.2,.14,.045,k,0,.24,-b/2+.12);for(let q of[-1,1])O(h,.045,.14,b-.2,k,q*(S/2-.12),.24,0);if(N){O(h,S-.25,1.2,.025,Fe,0,1.45,-b/2+.115);for(let q of[-1,1])O(h,.025,1.2,b*.55,Fe,q*(S/2-.115),1.45,-b*.2)}for(let q of[-1,1]){let ae=de(h,q*(S/2-.13),1.25,-b*.28,-q*Math.PI/2);O(ae,.115,.12,.025,ge);for(let be of[-.025,.025])O(ae,.009,.028,.004,W,be,0,.016);O(ae,.008,.018,.004,W,0,.034,.016)}if(w==="barber"){let q=C("#a3b5b4");for(let ae=0;ae<3;ae++)O(h,.34,.035,.24,q,-S/2+.47,1.03+ae*.04,-b/2+.51)}}function rt(h,y,S){y.kind==="bookshop"&&kl(h,y.w,y.d,S===1),Ge.furnish(h,y,S===1),tt(h,y),S===0&&(im(h,y),rm(h,y)),yt(h,0,2.85,.15,y.kind==="cyber"?"#b2c5e4":"#ffcf91",y.kind==="cyber"?3.5:4.5),(y.kind==="bookshop"||y.kind==="cyber")&&yt(h,0,2.85,-1.55,y.kind==="cyber"?"#c7bad7":"#ffe1b6",2.5),S===0&&["tea","noodles","bakery","shop","mianpi"].includes(y.kind)&&yt(h,-y.w*.12,2.52,y.d/2-.62,"#ffdda8",2.9)}let at=$e((h,y)=>{h.clearRect(0,0,y,y);for(let S=0;S<1800;S++){let b=z()*y,w=y*(.6+z()*.4),N=1+z()*10;h.fillStyle="rgba(58,54,40,"+(.025+z()*.07)+")",h.beginPath(),h.ellipse(b,w,N,N*.4,0,0,6.28),h.fill()}for(let S=0;S<35;S++){let b=z()*y,w=y*(.08+z()*.4),N=h.createLinearGradient(0,0,0,w);N.addColorStop(0,"#403b2833"),N.addColorStop(1,"#403b2800"),h.fillStyle=N,h.fillRect(b,0,2+z()*5,w)}for(let S=0;S<45;S++){let b=z()*y,w=z()*y;h.strokeStyle="#665b3b30",h.lineWidth=.7,h.beginPath(),h.moveTo(b,w),h.lineTo(b+4,w+8),h.lineTo(b+2,w+12),h.stroke()}},512);function ht(h,y,S,b,w,N,k=0){let q=new Xe({map:at,transparent:!0,opacity:.8,depthWrite:!1,roughness:1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),ae=$(h,new zt(y,S),q,b,w,N);return ae.rotation.y=k,ae.castShadow=!1,ae}function ut(h){let y=de(f,h.x,.18,h.z,h.angle);y.userData.id=h.id;let S={...h,root:y,floors:[],outside:de(y)};M.set(h.id,S),D.push(y),O(S.outside,h.w+.6,.2,h.d+.65,et,0,0,0);for(let q=0;q<3;q++)O(S.outside,h.w+.5,.085,.3,et,0,-.05-q*.055,h.d/2+.35+q*.22);let b=Te(h.color),w=Te(h.base||"#477669");b.userData.metersPerTile=2,w.userData.metersPerTile=2;for(let q=0;q<h.levels;q++){let ae=de(y,0,q*3.3,0),be=de(ae),Ue=de(ae),Ve=de(ae),mt=de(ae);if(S.floors.push({floor:ae,shell:be,front:Ue,inside:Ve,roof:mt,insideBatched:!1,insideBuilt:!1}),q>0?(O(be,h.w-1.05,.16,h.d,Qe,-.525,.08,0),O(be,1.05,.16,1.1,Qe,h.w/2-.525,.08,h.d/2-.55),O(be,1.05,.16,.65,Qe,h.w/2-.525,.08,-h.d/2+.325)):O(be,h.w,.16,h.d,Qe,0,.08,0),O(be,h.w,3.15,.18,b,0,1.67,-h.d/2),q===0){O(be,h.w,.78,.035,Re,0,.57,-h.d/2-.11);for(let je of[-1,1])O(be,.035,.78,h.d,Re,je*(h.w/2+.11),.57,0)}for(let je of[-h.w/2,h.w/2])O(be,.18,3.15,h.d,b,je,1.67,0),O(be,.19,.8,h.d,w,je,.57,0);O(be,h.w,.75,.19,w,0,.54,-h.d/2+.01);for(let je of[-h.w/2+.16,h.w/2-.16])O(Ue,.35,3.2,.3,b,je,1.67,h.d/2);for(let je of[-h.w/2+.16,h.w/2-.16])ht(Ue,.34,2.8,je,1.55,h.d/2+.155);for(let je of[-1,1])ht(be,h.d-.15,3,je*(h.w/2+.115),1.7,0,je*Math.PI/2);O(Ue,h.w,.48,.3,b,0,3.02,h.d/2);let Ht=q===0&&!!H[h.kind],At=Ht?h.kind==="bakery"?2.48:2.7:h.w-.35,pi=Ht?At/3:.5,Ws=Ht?3.16:3.02,sc=O(Ue,Ht?At+.14:h.w-.2,Ht?pi+.1:.62,.17,K(Ht?{fashion:"#4b284d",bakery:"#8b421f",shop:"#9c382b"}[h.kind]:h.sign),0,Ht?3.14:2.99,h.d/2+.21),On=Q(Ue,q===0?h.name:h.kind==="bookshop"?"\u6F2B\u753B \xB7 \u4E66\u7C4D \xB7 VCD \u79DF\u552E":"\u661F \u5149 \u7F51 \u5427  /  \u4E8C \u697C",At,pi,h.sign,h.ink||"#f2d19c",h.kind==="tea"?73:87);if(On.position.set(0,Ws,h.d/2+.31),q===0&&(On.material.map=H[h.kind]||sm(h,h.name),Ht&&(On.material.emissiveMap=null,On.material.emissive.set("#000000")),On.material.needsUpdate=!0),h.kind==="cyber"){On.material.emissiveMap=null,On.material.emissive.set("#000000"),On.material.emissiveIntensity=0,On.material.needsUpdate=!0;let je=new Xe({color:"#a9508e",emissive:"#ff83d3",emissiveIntensity:0,roughness:.35});for(let gi of[2.758,3.282])O(Ue,h.w-.38,.018,.023,je,0,gi,h.d/2+.34);let gt=new Li("#e58bdd",0,3.2,2);gt.position.set(0,2.95,h.d/2+.65),Ue.add(gt),R.push({material:je,power:1.35,light:gt})}q===0&&yt(Ue,-h.w*.32,2.43,h.d/2+.42,"#ffd8a6",5.5,"shopfront").scale.setScalar(.7);for(let je of[-h.w*.34,h.w*.34]){O(Ue,.055,2.5,.065,ee,je,1.4,h.d/2+.1),O(Ue,h.w*.29,.055,.065,ee,je,1.45,h.d/2+.1),O(Ue,h.w*.29,.055,.065,ee,je,2.65,h.d/2+.1);let gt=new Xe({color:"#b9c7b6",transparent:!0,opacity:.13,roughness:.15,depthWrite:!1});O(Ue,h.w*.28,2.35,.025,gt,je,1.4,h.d/2+.08)}if(q===0&&["bookshop","cyber","fashion"].includes(h.kind)){let je=de(Ue,-.48,.18,h.d/2+.16,-1.12);for(let gt of[0,.86])O(je,.045,2.32,.055,ee,gt,1.16,0);for(let gt of[0,.5,2.32])O(je,.9,.055,.055,ee,.43,gt,0);O(je,.81,.44,.035,b,.43,.25,0),O(je,.81,1.75,.014,new Xe({color:"#96aba5",roughness:.15,transparent:!0,opacity:.16,depthWrite:!1}),.43,1.41,0),we(je,[.74,.97,.045],[.74,1.19,.045],.017,ye);for(let gt of[.35,1.9])pe(je,.025,.12,W,0,gt,0)}let mi=de(Ue,0,2.58,h.d/2+.57);mi.rotation.x=.14;let hn=h.w-.2;if(h.kind==="cyber")O(mi,hn,.12,.72,K("#29374a",.36,.3),0,0,0),O(mi,hn,.08,.08,K("#d776a9",.35),0,-.08,.37);else if(h.kind==="bookshop"){O(mi,hn,.1,.84,ee,0,0,0);for(let je=0;je<8;je++)O(mi,hn/8-.02,.12,.07,Se,-hn/2+(je+.5)*hn/8,-.08,.43)}else if(h.kind==="fashion"){O(mi,hn,.055,1.05,ne("#66516d"),0,0,0);for(let je=0;je<10;je++)O(mi,hn/10-.015,.21,.025,ne(je%2?"#66516d":"#9c738e"),-hn/2+(je+.5)*hn/10,-.1,.53)}else for(let je=0;je<18;je++){let gt=je%2?h.awning:"#d8c69b";O(mi,hn/18,.045,1.12,ne(gt),-hn/2+(je+.5)*hn/18,0,0),O(mi,hn/18,.18,.04,ne(gt),-hn/2+(je+.5)*hn/18,-.09,.55)}if(q===0&&h.kind==="tea"){let je=$(Ue,new es(.31,32),K("#efe2b5"),h.w/2-.48,1.95,h.d/2+.43);je.castShadow=!1,$(Ue,new qt(.31,.027,8,32),K("#326457"),h.w/2-.48,1.95,h.d/2+.447),Q(Ue,"\u8336",.43,.28,"#efe2b5","#326457",168).position.set(h.w/2-.48,1.96,h.d/2+.456)}if(q===0&&h.kind==="barber"){let je=de(Ue,h.w/2-.4,1.55,h.d/2+.46);pe(je,.105,.82,ge,0,0,0,.105,20);for(let gt=0;gt<7;gt++){let gi=$(je,new qt(.107,.017,5,24),K(gt%2?"#376b78":"#b44547"),0,-.34+gt*.113,0);gi.rotation.x=Math.PI/2,gi.rotation.y=gt*.42}for(let gt of[-.44,.44])pe(je,.125,.035,W,0,gt,0,.125,20)}q===0&&h.kind==="bookshop"&&(O(Ue,.64,1.05,.05,ee,-h.w/2+.55,1.75,h.d/2+.38),Q(Ue,"\u65E7\u4E66\u501F\u9605",.52,.92,"#d8c397","#563e2d",80).position.set(-h.w/2+.55,1.75,h.d/2+.42)),q===0&&["noodles","mianpi"].includes(h.kind)&&Q(Ue,h.kind==="noodles"?"\u70ED\u6C64\u73B0\u716E":"\u73B0\u62CC\u64C0\u9762\u76AE",.66,.95,h.kind==="noodles"?"#e2c38a":"#d8bea1","#713a2d",69).position.set(h.w/2-.55,1.7,h.d/2+.42);for(let je of[-h.w*.4,h.w*.4])we(Ue,[je,2.15,h.d/2],[je,2.5,h.d/2+1.1],.018,W);let Um=h.kind==="tea"||h.kind==="noodles"?1:0;for(let je=0;je<Um;je++){let gt=[1.12,1.93][je],gi=-h.w/2+.19+(je?-.015:.01),nf=h.d/2+.17;if((h.kind==="tea"||h.kind==="noodles")&&q===0){let sf=new ot(new zt(.26,.43),new Xe({map:ie(h.kind,!0),roughness:.9,side:vt}));sf.position.set(gi,gt,nf),Ue.add(sf)}else poster(Ue,gi,gt,nf,je+q*4+h.name.length,.26,.43)}if(O(mt,h.w+.3,.15,h.d+.3,et,0,3.28,0),q===h.levels-1){let je=["shop","barber","fashion","mianpi"].includes(h.kind);if(!je){for(let gt of[-h.w/2,h.w/2])O(mt,.13,.28,h.d+.15,b,gt,3.5,0),O(mt,.22,.07,h.d+.26,et,gt,3.66,0);for(let gt of[-h.d/2,h.d/2])O(mt,h.w,.28,.13,b,0,3.5,gt),O(mt,h.w+.22,.07,.22,et,0,3.66,gt)}if(h.levels>1){pe(mt,.42,.9,K("#919b98",.4,.65),-h.w*.28,3.85,-h.d*.2);for(let gt=0;gt<5;gt++){let gi=$(mt,new qt(.425,.018,5,20),W,-h.w*.28,3.5+gt*.17,-h.d*.2);gi.rotation.x=Math.PI/2}we(mt,[h.w*.25,3.45,-1],[h.w*.25,5,-1],.025),we(mt,[h.w*.25-.7,4.8,-1],[h.w*.25+.7,4.8,-1],.018);for(let gt=0;gt<5;gt++)we(mt,[h.w*.25-.6+gt*.3,4.8,-1.3],[h.w*.25-.6+gt*.3,4.8,-.7],.012)}else je||(O(mt,.48,.5,.48,K("#8b8376"),-h.w*.3,3.63,-h.d*.25),O(mt,.58,.08,.58,W,-h.w*.3,3.92,-h.d*.25));["shop","barber","fashion","mianpi"].includes(h.kind)||rn(mt,h.w*.33,3.4,h.d*.3,.85)}n||(rt(Ve,h,q),S.floors[q].insideBuilt=!0)}Nn(S.outside,h.w/2+.03,2.4,h.d/2-.8).rotation.y=Math.PI/2;let N=de(S.outside,h.w/2+.105,.4,-.3,Math.PI/2);for(let q=0;q<4;q++)for(let ae=0;ae<5-q%2;ae++)O(N,.23,.095,.025,K(["#9d6b51","#ae7958","#8f6351"][(ae+q)%3]),ae*.25+q%2*.12,q*.11,0);we(S.outside,[-h.w/2-.13,.2,h.d/2-.1],[-h.w/2-.13,h.levels*3.3,h.d/2-.1],.05,K("#756d5d"));for(let q=0;.5+q*.9<h.levels*3.3;q++)O(S.outside,.13,.03,.14,W,-h.w/2-.13,.5+q*.9,h.d/2-.1);rn(S.outside,-h.w/2-.35,.12,h.d/2+.4,1.2),rn(S.outside,h.w/2+.25,.12,h.d/2+.5,.85),h.kind==="shop"?hs(S.outside,-1.05,h.d/2+1.75,-.12):hs(S.outside,h.w*.35,h.d/2+.6,.08);let k=de(S.outside,h.w/2+.16,0,h.d/2-.2);for(let q=0;q<(h.levels===1?17:32);q++){let ae=.5+q*.16,be=ke(k,.15,K(q%2?"#57734e":"#7c8751"),Math.sin(q)*.13,ae,Math.cos(q)*.13,.7,1,.25);A.push(be)}return Ge.architecture(S),S}let lt=[{id:"bookshop",name:"\u8BF8\u845B\u4EAE\u8BFB\u4E66\u793E",kind:"bookshop",x:5.5,z:-3.2,w:6,d:5.3,levels:2,angle:-.66,color:"#c5ad79",base:"#416d5c",sign:"#244d42",awning:"#9b9c5d"},{id:"cyber",name:"\u2606 \u661F\u5149\u7F51\u5427",kind:"cyber",x:-5.5,z:-2.7,w:6,d:5.4,levels:2,angle:.68,color:"#648082",base:"#376173",sign:"#35476f",ink:"#f4b8eb",awning:"#697b9e"},{id:"tea",name:"\u4E03\u676F\u8336\u5976\u8336\u5E97",kind:"tea",x:5.9,z:4.1,w:4.6,d:4.2,levels:1,angle:-.48,color:"#c6c8a5",base:"#68988a",sign:"#e1c993",ink:"#345a49",awning:"#c77341"},{id:"noodles",name:"\u5C0F\u73B2\u7C73\u7EBF",kind:"noodles",x:-6.1,z:5.1,w:4.8,d:4.5,levels:1,angle:.48,color:"#c9aa82",base:"#9b5745",sign:"#d8ad61",ink:"#8e3c2c",awning:"#c99c45"},{id:"bakery",name:"\u9762 \u5305 \u574A",kind:"bakery",x:7.9,z:9.6,w:3.8,d:3.8,levels:1,angle:-.44,color:"#c3a68a",base:"#bd867f",sign:"#e1caa0",ink:"#8b4734",awning:"#b47775"},{id:"shop",name:"\u7EA2\u661F\u5C0F\u5356\u90E8",kind:"shop",x:-8.6,z:-13,w:4.4,d:3.8,levels:1,angle:.18,color:"#b5aa8a",base:"#7b8170",sign:"#a34e3c",awning:"#a75a43"},{id:"barber",name:"\u9752 \u6625 \u7406 \u53D1",kind:"barber",x:7.1,z:15.1,w:4.5,d:4.4,levels:1,angle:-.64,color:"#9cae9c",base:"#437971",sign:"#396f69",awning:"#73948a"},{id:"fashion",name:"\u706B \u661F \u5730 \u5E26",kind:"fashion",x:-6.7,z:10.9,w:4.7,d:4.4,levels:1,angle:.62,color:"#b5b880",base:"#858355",sign:"#75547e",awning:"#9a85a0"},{id:"mianpi",name:"\u6C49\u4E2D\u64C0\u9762\u76AE",kind:"mianpi",x:8.6,z:-13,w:4.7,d:3.9,levels:1,angle:-.18,color:"#c7bc9f",base:"#7c8e79",sign:"#8e4938",awning:"#b69460"}],Gt={bookshop:[8.1,-3.2,-1.4],cyber:[-8.1,-2.5,1.4],tea:[7.8,4.5,-1.48],noodles:[-7.9,5.2,1.45],bakery:[7.5,10.3,-1.42],barber:[7.9,16.2,-1.48],fashion:[-7.8,12,1.45],shop:[-7.9,-12.8,.85],mianpi:[7.9,-12.8,-.85]};for(let h of lt)[h.x,h.z,h.angle]=Gt[h.id];function cn(h,y,S){let b=new Wn;return b.moveTo(-h/2+S,-y/2),b.lineTo(h/2-S,-y/2),b.quadraticCurveTo(h/2,-y/2,h/2,-y/2+S),b.lineTo(h/2,y/2-S),b.quadraticCurveTo(h/2,y/2,h/2-S,y/2),b.lineTo(-h/2+S,y/2),b.quadraticCurveTo(-h/2,y/2,-h/2,y/2-S),b.lineTo(-h/2,-y/2+S),b.quadraticCurveTo(-h/2,-y/2,-h/2+S,-y/2),b}let Vt=$(f,new Ei(cn(26,40,2.2),{depth:.7,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:.16,bevelThickness:.12,curveSegments:12}),K("#383645"));Vt.rotation.x=-Math.PI/2,Vt.position.set(0,-.9,3);let bn=$(f,new Ro(cn(25.9,39.9,2.2),20),Ne);bn.rotation.x=-Math.PI/2,bn.position.set(0,.02,3);let Rt=O(o,600,.1,600,new Xt({color:"#69617a"}),0,-1.02,0);Rt.castShadow=!1,Rt.receiveShadow=!1;let st=new Qi([[0,0,22.6],[1.1,0,17],[-1,0,10],[.7,0,4],[-.6,0,-1],[.8,0,-6],[0,0,-11.7]].map(h=>new L(...h))),Vo=He($e((h,y)=>{h.fillStyle="#756e65",h.fillRect(0,0,y,y);for(let S=0;S<8;S++)for(let b=0;b<8;b++){let w=130+Math.floor(z()*32);h.fillStyle="rgb("+w+","+(w-8)+","+(w-22)+")",h.fillRect(b*64+2,S*64+2,60,60);for(let N=0;N<30;N++)h.fillStyle=N%2?"#ffffff09":"#00000012",h.fillRect(b*64+z()*60,S*64+z()*60,z()*4+1,z()*3+1)}},512),.2),Et=new Xe({map:Me("PavingStones036","Color"),normalMap:Me("PavingStones036","NormalGL"),roughnessMap:Me("PavingStones036","Roughness"),color:"#e1d8c8",roughness:.92,normalScale:new ce(.55,.55)});P.push(zo(Et,.76));for(let h of[Et.map,Et.normalMap,Et.roughnessMap])h.repeat.set(.4,.4);for(let h of[-1,1]){let y=[];for(let b=0;b<=80;b++){let w=st.getPointAt(b/80),N=st.getTangentAt(b/80),k=new L(N.z,0,-N.x);y.push(new ce(w.x+k.x*h*3.12,-(w.z+k.z*h*3.12)))}y.push(new ce(-h*12.15,14.9),new ce(-h*12.15,-21.5));let S=$(f,new Ro(new Wn(y)),Et);S.rotation.x=-Math.PI/2,S.position.y=.1}for(let h of[-1,1])for(let y=0;y<78;y++){let S=st.getPointAt(y/78),b=st.getTangentAt(y/78),w=new L(b.z,0,-b.x),N=de(f,S.x+w.x*h*3,.08,S.z+w.z*h*3,Math.atan2(b.x,b.z));O(N,.18,.22,.43,et,0,0,0)}let Zn=de(f);for(let h of[-1,1]){for(let y=0;y<13;y++){let S=h*(3.25+y*.41);O(Zn,.37,.025,1.3,Et,S,.122,-10.35+Math.sin(y*.72)*.035)}O(Zn,5.35,.055,.11,K("#aaa08d"),h*5.9,.13,-11.08),O(Zn,5.35,.055,.11,K("#aaa08d"),h*5.9,.13,-9.65)}for(let h=0;h<lt.length;h++)ut(lt[h]),n&&await s("\u6B63\u5728\u521B\u5EFA\u5E97\u94FA "+(h+1)+" / "+lt.length+"\u2026");let ii=[],Ii=[],Di=null,Ct=null,si=new L,Wr="varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",Sn=`uniform sampler2D reflection;uniform vec2 pixel;varying vec2 vUv;
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
}`;function Bs(){if(Di)return;let h=M.get("barber").floors[0].inside;h.traverse(y=>{y.name==="barber-reflection-surface"&&ii.push(y)}),ii.length&&(Di=ii[0],Ct=h.getObjectByName("barber-student-reflection")||null,ii.forEach((y,S)=>{let b=new ln(192,224,{minFilter:Yt,magFilter:Yt}),w=new jt(72,192/224,.1,20);w.position.set(S===0?-1:.85,1.97,-M.get("barber").d/2+.34),w.rotation.set(-.16,Math.PI,0),M.get("barber").floors[0].inside.add(w),y.material=new Jt({uniforms:{reflection:{value:b.texture},pixel:{value:new ce(1/192,1/224)}},vertexShader:Wr,fragmentShader:Sn,side:vt}),Ii.push({target:b,camera:w})}))}Bs();let ks=!1,Ho=new zr;function um(h){let y=new Map;h.traverse(S=>{if(!S.isMesh||Array.isArray(S.material))return;let b=S.material,w=b.name||"";if(!y.has(b.uuid)){let N=b.clone();/钢|铝|黑铁/.test(w)?(Object.assign(N,_e),N.normalScale.set(.22,.22)):/木/.test(w)?(Object.assign(N,Ie),N.color.set("#c9b08a"),N.userData.metersPerTile=2):/瓷砖/.test(w)&&(N.map=Fe.map,N.normalMap=Fe.normalMap,N.roughnessMap=Fe.roughnessMap,N.normalScale.set(.35,.35),N.userData.metersPerTile=1.8),y.set(b.uuid,N)}if(S.material=y.get(b.uuid),S.material.userData.metersPerTile){S.geometry=S.geometry.clone();let N=S.geometry.attributes.position,k=S.geometry.attributes.normal,q=S.geometry.attributes.uv,ae=S.material.userData.metersPerTile;if(q)for(let be=0;be<N.count;be++){let Ue=Math.abs(k.getX(be)),Ve=Math.abs(k.getY(be));q.setXY(be,(Ue>.5?N.getZ(be)*S.scale.z:N.getX(be)*S.scale.x)/ae,(Ve>.5?N.getZ(be)*S.scale.z:N.getY(be)*S.scale.y)/ae)}}})}function Wo(h,y){let S=M.get(h);!S||S.interiorModelRequested||(S.interiorModelRequested=!0,Ho.load("./blender_assets/"+y+"?v=48-shop-details",b=>{let w=b.scene;um(w),w.rotation.y=Math.PI,w.traverse(N=>{N.isMesh&&(N.castShadow=!0,N.receiveShadow=!0)}),S.floors[0].inside.add(w),i(w),Oi(w),Fi(),document.querySelector("#scene").dataset[h+"Model"]="ready"},void 0,b=>{console.error("\u5E97\u94FA\u6A21\u578B\u52A0\u8F7D\u5931\u8D25",h,b),Mn(S.name+"\u8BBE\u5907\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u5237\u65B0\u91CD\u8BD5")}))}n||(Wo("tea","seven_cups_tea_v2.glb"),Wo("noodles","xiaoling_noodles.glb"));function hm(h,y){let S=de(f,h,0,y,h>0?Math.PI:0);pe(S,.075,4.1,W,0,2.05,0,.12),pe(S,.16,.3,W,0,.15,0),Ke(S,[[0,3.5,0],[0,4.25,0],[.55,4.25,0],[.65,3.95,0]],.04),yt(S,.65,3.94,0,"#ffd18d",16,"street")}for(let h of[[-3.6,9.2],[3.5,7.2],[-3.5,1.5],[3.3,-6.8]])hm(...h);function fm(h,y,S=1.2){let b=de(f,h,.1,y),w=Se.clone();w.color.set("#605344"),w.roughness=1,pe(b,.11,2.5,w,0,1.25,0,.22,14);for(let N=0;N<9;N++){let k=N*2.4,q=[Math.cos(k)*S*.75,2.9+N%3*.3,Math.sin(k)*S*.75];we(b,[0,1.3+N*.08,0],q,.035,w);for(let ae=0;ae<4;ae++){let be=k+ae*.7;we(b,q,[q[0]+Math.cos(be)*.5,q[1]+.35+ae*.08,q[2]+Math.sin(be)*.5],.011,w)}}for(let N=0;N<(n?150:580);N++){let k=z()*6.28,q=z()*2-1,ae=Math.sqrt(1-q*q)*Math.sqrt(z())*S,be=pt(b,Math.cos(k)*ae,3.4+q*1.15,Math.sin(k)*ae,N,.7+z()*.7);be.userData.deciduous=!0,A.push(be)}return b}for(let h of[[-11.25,-16,1],[11.25,-16,1],[-11,6,1.2],[11,3,1],[-10,12,1.2]])fm(...h);function zl(h,y){let S=de(f,h,0,y);pe(S,.09,6.5,K("#797766"),0,3.25,0,.14),O(S,1.6,.1,.12,ee,0,5.9,0);for(let b=0;b<4;b++)pe(S,.06,.22,ge,-.6+b*.4,6.08,0);for(let b=0;b<3;b++)O(S,.15,.035,.17,W,0,3+b*.5,0);return S}zl(-10.6,9),zl(-10,-6),zl(10.4,-6);for(let h=0;h<3;h++)Ke(f,[[-10.6+h*.3,6,9],[-10.4+h*.3,5.4,1],[-10+h*.3,6,-6]],.014),Ke(f,[[-10+h*.3,6,-6],[0,5.1,-6.8],[10.4+h*.2,6,-6]],.014);let fs=de(f,0,.12,-12.4),Xo=Te("#beb59e");Xo.userData.metersPerTile=2;for(let h of[-2.1,2.1])O(fs,.55,3.2,.65,Xo,h,1.6,0),yt(fs,h,3.4,0,"#ffdb9a",9,"street");O(fs,4.8,.65,.65,Xo,0,3.02,0),Q(fs,"\u7B2C\u4E00\u4E2D\u5B66",3.3,.55,"#bfb092","#504638",105).position.set(0,3.03,.34);for(let h=0;h<18;h++)we(fs,[-1.9+h*.22,.1,0],[-1.9+h*.22,2.7,0],.025);for(let h of[.4,1.6,2.5])we(fs,[-1.9,h,0],[1.9,h,0],.035);for(let h of[-1,1])O(fs,3,1.4,.3,Xo,h*3.9,.7,0);function dm(h,y){let S=new Xe({color:"#a5b0af",emissive:"#ffd59d",emissiveIntensity:0,roughness:.32});return J.push({material:S,power:(y+h*3)%4===0?.06:.65+y*7%3*.15}),S}let Xr=de(f,0,0,-15.3);O(Xr,9,5.7,1.6,Te("#9a9993"),0,2.9,-.5);for(let h=0;h<3;h++)for(let y=0;y<8;y++)O(Xr,.67,.95,.03,K("#b7a17a"),-3.6+y*1.03,1.1+h*1.7,.32),O(Xr,.58,.83,.035,dm(h,y),-3.6+y*1.03,1.1+h*1.7,.35),O(Xr,.04,.9,.04,ee,-3.6+y*1.03,1.1+h*1.7,.38),O(Xr,.62,.04,.04,ee,-3.6+y*1.03,1.1+h*1.7,.38);let qr=[["\u8BFB\u8005","\u5FC3\u7075\u4E0E\u751F\u6D3B",0,0,"#a66535"],["\u9752\u5E74\u6587\u6458","\u9752\u6625\u9605\u8BFB \xB7 \u7EA2\u7248",0,1,"#ae433b"],["\u6545\u4E8B\u4F1A","\u6C11\u95F4\u6545\u4E8B",0,2,"#af4132"],["\u840C\u82BD","\u9752\u6625\u6587\u5B66",0,3,"#315e64"],["\u79D1\u5E7B\u4E16\u754C","\u5E7B\u60F3\u6587\u5B66",0,4,"#326080"],["\u4ECA\u53E4\u4F20\u5947","\u6B66\u4FA0\u7248",0,5,"#8e4439"],["\u770B\u7535\u5F71","\u5F71\u8FF7\u8BFB\u672C",1,0,"#2c4265"],["\u6F2B\u53CB","\u6F2B\u753B 100",1,1,"#b54e70"],["\u6211\u7231\u6447\u6EDA\u4E50","\u97F3\u4E50\u4E0E\u9752\u5E74",1,2,"#8d2f2f"],["\u9752\u5E74\u89C6\u89C9","VISION",1,3,"#74495a"],["\u5965\u79D8","\u63A2\u7D22\u672A\u77E5",1,4,"#386b5d"],["\u4E2D\u56FD\u65F6\u88C5","Harper\u2019s BAZAAR",1,5,"#7e3d42"],["ELLE","\u4E16\u754C\u65F6\u88C5\u4E4B\u82D1",1,3,"#2d3337"],["\u65F6\u5C1A\u82AD\u838E","Harper\u2019s BAZAAR",1,5,"#843d47"]],Uh=["literature","culture"].map(h=>ti("./textures/fast/newsstand-"+h+"-art-atlas.webp")),Nh=[];function pm(h){let[y,S,b,w,N]=qr[h],k=document.createElement("canvas");k.width=384,k.height=560;let q=k.getContext("2d"),ae=new Ot(k);ae.colorSpace=qe,ae.anisotropy=8;let be=()=>{q.fillStyle="#e8dfcb",q.fillRect(0,0,384,560);let Ue=Uh[b];if(Ue.complete&&Ue.naturalWidth){let Ve=Ue.width/3,mt=Ue.height/2,Ht=w%3*Ve,At=Math.floor(w/3)*mt;q.drawImage(Ue,Ht+3,At+20,Ve-6,Math.min(mt-34,520),0,0,384,560)}q.fillStyle=N,q.fillRect(0,0,384,106),q.fillStyle="#f5efdb",q.textAlign="center",q.textBaseline="middle",q.font=(y.length>4?"bold 56px":"bold 72px")+' "Songti SC","PingFang SC",serif',q.fillText(y,192,51,368),q.font='bold 22px "PingFang SC",sans-serif',q.fillText(S,192,90,364),q.fillStyle="rgba(20,22,24,.68)",q.fillRect(0,516,384,44),q.textAlign="left",q.fillStyle="#fff1d3",q.font="19px sans-serif",q.fillText(h===11?"2003 \xB7 08":"2005 \xB7 "+String(3+h%5).padStart(2,"0"),14,544),q.textAlign="right",q.fillText("\u653E\u5B66\u540E\u7684\u9605\u8BFB",372,544),q.strokeStyle="rgba(255,248,224,.65)",q.lineWidth=3,q.strokeRect(5,5,374,550),ae.needsUpdate=!0};return Nh.push(be),be(),new Xe({map:ae,roughness:.9,side:vt})}let mm=qr.map((h,y)=>pm(y));Uh.forEach(h=>h.addEventListener("load",()=>Nh.forEach(y=>y())));function Oh(h,y=!1){let[S,b,,,w]=qr[h],N=document.createElement("canvas");N.width=y?128:384,N.height=560;let k=N.getContext("2d");if(k.fillStyle=w,k.fillRect(0,0,N.width,N.height),k.fillStyle="#e7dece",k.fillRect(10,13,N.width-20,N.height-26),k.fillStyle=w,y)k.fillRect(10,13,N.width-20,70),k.save(),k.translate(67,515),k.rotate(-Math.PI/2),k.font='bold 42px "Songti SC",serif',k.textAlign="center",k.fillText(S,245,0,430),k.restore();else{k.textAlign="center",k.font='bold 36px "Songti SC",serif',k.fillText(S,192,74,345),k.font='22px "Songti SC",serif',k.fillText(b,192,111,340),k.textAlign="left";for(let ae=0;ae<12;ae++)k.fillStyle=ae%3?"#887f708f":"#b7aa96",k.fillRect(35,160+ae*22,306-ae%4*31,4);k.fillStyle="#faf4e8",k.fillRect(215,425,128,78);for(let ae=0;ae<35;ae++)k.fillStyle="#2b2927",k.fillRect(226+ae*3,433,ae%5===0?3:1,48-ae%4*3);k.font="18px sans-serif",k.fillStyle=w,k.fillText("2005 \xB7 \u8857\u8FB9\u8BFB\u7269",35,518)}let q=new Ot(N);return q.colorSpace=qe,q.anisotropy=8,new Xe({map:q,roughness:.89})}let gm=qr.map((h,y)=>Oh(y)),Fh=qr.map((h,y)=>Oh(y,!0));function Bh(h,y,S,b,w,N=.36,k=.5,q=0){let ae=de(h,y,S,b,q);return O(ae,N,k,.025,[Fh[w],Fh[w],Le,Le,mm[w],gm[w]],0,0,0),ae}function xm(h,y,S,b=0){let w=de(h,y,.11,S,b);for(let k=0;k<5;k++)O(w,.62,.008,.43,K(k%2?"#d7d0ba":"#e2dbc8"),0,k*.009,0);let N=Q(w,"\u665A \u62A5",.55,.16,"#e1dbc8","#373b3b",100);return N.rotation.x=-Math.PI/2,N.position.set(0,.055,.1),O(w,.012,.055,.47,K("#a38a60"),0,.04,0),w}let Ft=de(f,6.1,.12,21,-.35),_m=K("#718577",.75,.25),Ui=K("#405951",.63,.4),ym=new Xe({color:"#c7d7cc",metalness:.05,roughness:.16,transparent:!0,opacity:.21,depthWrite:!1});O(Ft,2.5,2.18,1.58,_m,0,1.09,0),O(Ft,2.72,.18,1.8,Ui,0,2.28,-.04);for(let h=0;h<11;h++)O(Ft,2.65,.018,.024,K(h%2?"#8ca091":"#567063"),0,2.39,-.75+h*.15);O(Ft,2.18,1.28,.035,ym,0,1.46,.81);for(let h of[-1.1,0,1.1])O(Ft,.035,1.38,.06,Ui,h,1.45,.84);for(let h of[.81,1.48,2.15])O(Ft,2.25,.035,.06,Ui,0,h,.84);O(Ft,2.58,.12,.78,K("#b9aa87",.55,.25),0,.87,1.03),O(Ft,2.55,.03,.85,Ui,0,.8,1.04),O(Ft,.1,1.55,1.3,Ui,1.29,1.32,0),O(Ft,.1,1.55,1.3,Ui,-1.29,1.32,0),Q(Ft,"\u62A5 \u520A \u4EAD",2.25,.34,"#d9d2af","#344d46",124).position.set(0,2.58,.9),Q(Ft,"\u62A5\u7EB8 \xB7 \u6742\u5FD7 \xB7 \u753B\u62A5",1.7,.19,"#526b5d","#e4dac0",86).position.set(0,.64,1.29);for(let h=0;h<2;h++){let y=O(Ft,2.22,.035,.14,Ui,0,1.18+h*.58,1.02);for(let S=0;S<5;S++){let b=h*5+S;Bh(Ft,-.84+S*.42,1.42+h*.58,1.11+S%2*.008,b,.34,.48,(S-2)*.017)}}let kh=de(Ft,-1.36,0,.08,-Math.PI/2);for(let h=0;h<5;h++){let y=h<3,S=y?h:h-3,b=y?-.5+S*.5:-.25+S*.5,w=y?1.8:1.15;O(kh,.39,.035,.12,Ui,b,w-.3,.02),Bh(kh,b,w,.095,9+h,.35,.48)}for(let h=0;h<3;h++)xm(Ft,-.72+h*.53,1.08+h*.02,-.05+h*.05);O(Ft,.2,.045,.18,ye,.82,.95,.94),yt(Ft,0,2.03,.58,"#ffe0ad",5,"street");function cb(h,y,S){let b=de(f,h,.1,y,-.12);O(b,1.8,.8,.85,K(S),0,.67,0),O(b,1.9,.08,.95,K("#aaa598",.35,.5),0,1.1,0),Q(b,"\u70ED \u70E4 \u4E32  \xB7  \u51C9 \u9762",1.65,.48,S,"#efdbb4",72).position.set(0,.65,.44);for(let w of[-.65,.65]){let N=$(b,new qt(.22,.05,6,16),W,w,.25,.35)}for(let w of[-.8,.8])for(let N of[-.35,.35])we(b,[w,1.1,N],[w,2.05,N],.026);for(let w=0;w<10;w++)O(b,.2,.055,1.3,K(w%2?S:"#c9b797"),-.9+w*.2,2.1,0);for(let w of[-.48,.28])pe(b,.22,.25,K("#a3a9a5",.3,.8),w,1.27,0),pe(b,.19,.01,K("#7a5131"),w,1.4,0);for(let w=0;w<8;w++)we(b,[-.65+w*.13,1.17,.25],[-.65+w*.13,1.17,.57],.008,ee),ke(b,.04,K("#bd7041"),-.65+w*.13,1.19,.36);return yt(b,0,1.96,0,"#ffd491",9),V(b,1.3,.3),b}let vm=Ge.stall(f,-5.7,16.4,"soup"),bm=Ge.stall(f,-8.8,18.5,"fried"),En=de(f);for(let h of[-1,1])for(let y=0;y<42;y++){let S=st.getPointAt(y/42),b=st.getTangentAt(y/42),w=new L(b.z,0,-b.x),N=de(En,S.x+w.x*h*2.82,.04,S.z+w.z*h*2.82,Math.atan2(b.x,b.z));if(O(N,.15,.025,.7,K("#645f57"),0,0,0),y%7===0)for(let k=0;k<7;k++)O(N,.18,.018,.022,W,0,.025,-.26+k*.08)}function Gl(h,y,S=0){let b=de(En,h,.1,y,S);for(let w=0;w<4;w++)O(b,1.65,.06,.1,Se,0,.48,-.18+w*.12);for(let w=0;w<3;w++)O(b,1.65,.1,.045,Se,0,.75+w*.13,-.25);for(let w of[-.62,.62])we(b,[w,0,-.2],[w,.98,-.25],.035,W),we(b,[w,.45,.2],[w,0,.25],.035,W);return b}Gl(-4.1,-7.9,.3),Gl(4.1,-7.9,-.3),Gl(-4,20.2,-.22);for(let[h,y]of[[-4,14.6],[-10,16.5],[3.7,18.6]]){let S=de(En,h,.1,y);O(S,.52,.8,.5,K("#526459"),0,.4,0),O(S,.57,.08,.54,W,0,.83,0),O(S,.37,.14,.025,Sm(),0,.66,.26)}function Sm(){return K("#303d38")}for(let h of[-1,1])for(let y=0;y<18;y++){let S=-12+y*1.7;O(En,.25,.52,1.65,K(y%3?"#8b7664":"#9a856e"),h*11.8,.35,S),O(En,.34,.08,1.69,et,h*11.8,.65,S),y%3===0&&rn(En,h*11.2,.12,S,.75)}for(let h of[-4.25,4.25]){for(let y=0;y<6;y++)we(En,[h,.2,16+y*.65],[h,.85,16+y*.65],.028,W);we(En,[h,.85,16],[h,.85,19.25],.035,W)}let ub=O(En,5.7,.06,3,et,0,.12,-10.5);for(let h=0;h<8;h++)O(En,.025,.012,2.9,K("#7b776e"),-2.5+h*.7,.16,-10.5);for(let[h,y]of[[-1,"\u2190 \u5C0F\u5356\u90E8"],[1,"\u64C0\u9762\u76AE \u2192"]]){let S=de(En,h*3.34,.15,-10.55);we(S,[0,0,0],[0,1.55,0],.028,W),Q(S,y,1.35,.25,"#667b68","#f4e9c8",80).position.set(h*.2,1.47,.04)}let qo=document.createElement("canvas");qo.width=600,qo.height=400;let Ni=qo.getContext("2d");Ni.fillStyle="#de2910",Ni.fillRect(0,0,600,400);function zh(h,y,S,b){Ni.beginPath();for(let w=0;w<10;w++){let N=b+w*Math.PI/5,k=w%2?S*.382:S,q=h+Math.cos(N)*k,ae=y+Math.sin(N)*k;w?Ni.lineTo(q,ae):Ni.moveTo(q,ae)}Ni.closePath(),Ni.fill()}Ni.fillStyle="#ffde00",zh(100,100,60,-Math.PI/2);for(let[h,y]of[[200,40],[240,80],[240,140],[200,180]])zh(h,y,20,Math.atan2(100-y,100-h));let Vl=new Ot(qo);Vl.colorSpace=qe,Vl.anisotropy=8,O(En,4.05,.035,2.5,et,0,.065,-13.75);let Hl=de(En,0,.1,-13.9);we(Hl,[0,0,0],[0,4.85,0],.034,Mm());let Wl=$(Hl,new zt(1.08,.72,8,4),new Xe({map:Vl,roughness:.95,side:vt}),.54,4.35,0),Yo=Wl.geometry.attributes.position;for(let h=0;h<Yo.count;h++){let y=Yo.getX(h),S=Yo.getY(h);Yo.setZ(h,.018*Math.sin(y*7+S*4)*(y+.54))}Wl.geometry.computeVertexNormals(),Wl.castShadow=!0,pe(Hl,.28,.13,et,0,.07,0);function Mm(){return K("#9ba5a2",.35,.65)}let Xl=de(f);for(let h=0;h<16;h++){let y=st.getPointAt((h+.5)/17),S=$(Xl,new es(.24+z()*.35,14),new Xe({color:"#829398",metalness:.35,roughness:.13,transparent:!0,opacity:.48}),y.x+(h%2?2.1:-2.1),.055,y.z);S.rotation.x=-Math.PI/2,S.scale.y=.4}let ql=de(f);for(let h=0;h<150;h++){let y=st.getPointAt(z());$(ql,new es(.035+z()*.025,5),K(["#ad7442","#c39755","#9f5a35"][h%3]),y.x+(h%2?1:-1)*(2.7+z()*.4),.065,y.z).rotation.set(-Math.PI/2,0,z()*6.28)}for(let h of[[-3.6,8],[3,2],[-3,-5]]){let y=de(f,h[0],0,h[1]);pe(y,.1,.8,K("#bfab7b"),0,.4,0);for(let S=0;S<3;S++)pe(y,.105,.12,K("#4b4c43"),0,.17+S*.24,0)}let Gh=de(f,1,.06,9.2);pe(Gh,.46,.025,W,0,0,0,.46,32);for(let h=-3;h<=3;h++)O(Gh,.65,.012,.025,K("#74726a"),0,.022,h*.09);for(let h of[[-3.7,3],[3.2,8]]){let y=de(f,h[0],.08,h[1]);O(y,.45,.03,.8,W);for(let S=0;S<7;S++)O(y,.38,.02,.035,K("#807b6d"),0,.025,-.32+S*.1)}function Oi(h){h.updateWorldMatrix(!0,!0);let y=h.matrixWorld.clone().invert(),S=new Map,b=[];h.traverse(w=>{if(!w.isMesh||w.isInstancedMesh||w.userData.dynamic||Array.isArray(w.material))return;let N=w.material.uuid;S.has(N)||S.set(N,{material:w.material,geos:[]});let k=w.geometry.index?w.geometry.toNonIndexed():w.geometry.clone();k.applyMatrix4(new ft().multiplyMatrices(y,w.matrixWorld)),S.get(N).geos.push(k),b.push(w)});for(let w of b)w.removeFromParent();for(let w of S.values()){let N=Np(w.geos,!1);if(N){let k=$(h,N,w.material);k.userData.batched=!0}for(let k of w.geos)k.dispose()}}await s("\u6B63\u5728\u6574\u7406\u8857\u9053\u4E0E\u6821\u95E8\u2026");let Vh=de(f),Hh=[],Zo=new Map;f.updateMatrixWorld(!0);for(let h of A){let y=h.material.uuid+h.geometry.uuid;Zo.has(y)||Zo.set(y,[]),Zo.get(y).push(h)}for(let h of Zo.values()){let y=new Cr(h[0].geometry,h[0].material.clone(),h.length);h.forEach((S,b)=>{y.setMatrixAt(b,S.matrixWorld),S.removeFromParent()}),y.userData.deciduous=!!h[0].userData.deciduous,y.castShadow=!0,y.receiveShadow=!0,Vh.add(y),Hh.push(y)}for(let h of M.values()){for(let y of h.floors)Oi(y.shell),Oi(y.front),n||(Oi(y.inside),y.insideBatched=!0),Oi(y.roof);Oi(h.outside),n&&await s("\u6B63\u5728\u6574\u7406 "+h.name+"\u2026")}for(let h of f.children)h.isGroup&&!h.userData.id&&h!==Vh&&h!==Xl&&h!==ql&&Oi(h);let zs=800,un=new Float32Array(zs*3);for(let h=0;h<zs;h++)un[h*3]=(z()-.5)*28,un[h*3+1]=z()*15,un[h*3+2]=(z()-.5)*40+3;let Tm=$e((h,y)=>{h.clearRect(0,0,y,y);let S=h.createRadialGradient(y/2,y/2,0,y/2,y/2,y*.47);S.addColorStop(0,"#ffffff"),S.addColorStop(.28,"#fffffff0"),S.addColorStop(.65,"#ffffff80"),S.addColorStop(1,"#ffffff00"),h.fillStyle=S,h.fillRect(0,0,y,y)},64),Ko=new Lt;Ko.setAttribute("position",new Bt(un,3));let jo=new Float32Array(zs);for(let h=0;h<zs;h++)jo[h]=.45+z()*1.1;Ko.setAttribute("flakeSize",new Bt(jo,1));let Jo=new Is({map:Tm,color:"#f2f4f7",size:.11,sizeAttenuation:!0,transparent:!0,opacity:.9,alphaTest:.035,depthWrite:!1});Jo.onBeforeCompile=h=>{h.vertexShader=`attribute float flakeSize;
`+h.vertexShader,h.vertexShader=h.vertexShader.replace("gl_PointSize = size;","gl_PointSize = size * flakeSize;")};let $o=new Ir(Ko,Jo);o.add($o);let Wh=new Float32Array(zs*6),Yl=new Lt;Yl.setAttribute("position",new Bt(Wh,3));let Zl=new Lr(Yl,new Ls({color:"#b8d0db",transparent:!0,opacity:.35,depthWrite:!1}));o.add(Zl);function Kl(){Xl.visible=x.weather==="rain"&&!x.open,ql.visible=x.season==="autumn"&&!x.open,Zl.visible=x.weather==="rain"&&!x.open}let Qo=document.createElement("canvas");Qo.width=32,Qo.height=512;let jl=new Ot(Qo);jl.colorSpace=qe,o.background=jl;function Fi(){let h=Lh(x.time,x.weather),{day:y,dusk:S,night:b}=h;e.dataset.sunIntensity=h.sun.toFixed(3),e.dataset.ambientIntensity=h.ambient.toFixed(3),e.dataset.weather=x.weather;let w=(Ve,mt,Ht)=>new Ye(Ve).multiplyScalar(y).add(new Ye(mt).multiplyScalar(S)).add(new Ye(Ht).multiplyScalar(b)),N=w("#8daac1","#595178","#050b1b"),k=w("#d9e0df","#d9a08b","#162139"),q={mint:"#6e9f9d",film:"#ba9b7c",violet:"#827aab"}[x.palette];q&&(N.lerp(new Ye(q).multiplyScalar(1-b*.9),.16),k.lerp(new Ye(q).multiplyScalar(1-b*.87),.14)),h.overcast&&(N.lerp(new Ye("#73808b").multiplyScalar(1-b*.96),.58),k.lerp(new Ye("#a4adb3").multiplyScalar(1-b*.94),.6));let ae=Qo.getContext("2d"),be=ae.createLinearGradient(0,0,0,512);be.addColorStop(0,N.getStyle()),be.addColorStop(1,k.getStyle()),ae.fillStyle=be,ae.fillRect(0,0,32,512),jl.needsUpdate=!0,o.fog=new $a(k,h.overcast?35:55,h.overcast?85:125),Rt.material.color.copy(N).multiplyScalar(.5),d.intensity=h.ambient,d.color.set(b>.5?"#93a9d5":"#b7c8df"),d.groundColor.set(b>.5?"#242c43":"#716b66"),p.intensity=h.sun,p.color.set(y>.5?"#fff0dc":"#ffc89b"),p.position.set(-18,10+y*20,8+y*6),p.castShadow=b<.95,_.intensity=h.fill,_.color.set("#91a9dd"),r.toneMappingExposure=h.exposure,u&&(u.strength=h.bloom);for(let Ve of v){let mt=Ve.type==="street"?x.street:x.lights;Ve.light.intensity=mt?Ve.power*h.lamps:0,Ve.bulb.visible=mt,Ve.halo.visible=mt,Ve.halo.material.opacity=mt?.04*y+.22*S+.32*b:0}for(let Ve of J)Ve.material.emissiveIntensity=x.lights?h.windowGlow*Ve.power:0,Ve.material.color.set(b>.5?"#253043":"#a8b1ab");for(let Ve of R)Ve.material.emissiveIntensity=x.lights?Ve.power*(.08*y+.8*S+1.4*b):0,Ve.light&&(Ve.light.intensity=x.lights?3*h.lamps:0);for(let Ve of P)Ve(x.weather);let Ue=new Set;o.traverse(Ve=>{if(Ve.isMesh)for(let mt of Array.isArray(Ve.material)?Ve.material:[Ve.material])Ue.has(mt)||(Ue.add(mt),mt.isMeshStandardMaterial&&(mt.envMapIntensity=.5*y+.14*S+.035*b))}),$o.visible=x.weather==="snow"&&!x.open,Jo.color.set(b>.5?"#8193b5":"#f0f5ff"),Jo.opacity=b>.5?.68:.9,Kl(),document.querySelector("#timeValue").textContent=h.label,!x.store&&!Rn&&document.querySelector("#sceneName").textContent==="\u653E\u5B66\u540E\u7684\u6821\u95E8\u53E3"&&(document.querySelector("#sceneEyebrow").textContent="2005 \xB7 "+h.label),document.querySelectorAll("#timeCtrl button").forEach(Ve=>Ve.classList.toggle("selected",Ve.dataset.value===(y>.5?"day":b>.5?"night":"dusk"))),document.querySelector("#weatherReadout").textContent={clear:"\u6674\u5929",cloudy:"\u9634\u5929",rain:"\u4E0B\u96E8",snow:"\u4E0B\u96EA"}[x.weather]+" \xB7 "+(y>.5?"\u767D\u5929":b>.5?"\u591C\u665A":"\u9EC4\u660F"),ks=!1,m()}function Xh(){let h={spring:["#587748","#77905b","#8d9b61"],summer:["#3f6547","#547447","#6b814f"],autumn:["#a8733e","#b3904c","#9c5e3c"],winter:["#718077","#89928a","#a0a99e"]}[x.season];Hh.forEach((y,S)=>{y.material.color.set(h[S%3]),y.visible=x.season!=="winter"||!y.userData.deciduous}),Kl(),document.querySelector("#seasonValue").textContent={spring:"\u6625 \xB7 \u65B0\u82BD",summer:"\u590F \xB7 \u6D53\u836B",autumn:"\u79CB \xB7 \u91D1\u53F6",winter:"\u51AC \xB7 \u679D\u5BD2"}[x.season],m()}let wm=f.children.filter(h=>!h.userData.id&&h!==Vt&&h!==bn);function Jl(){Vt.visible=bn.visible=Rt.visible=!x.open;for(let h of wm)h.visible=!x.open;for(let h of M.values()){let y=h.id===x.store;h.root.visible=!x.open||y,h.outside.visible=!x.open;for(let S=0;S<h.floors.length;S++){let b=h.floors[S];b.floor.visible=!x.open||S===x.floor,b.front.visible=!x.open,b.roof.visible=!x.open}}for(let h of ii)h.visible=x.open&&x.store==="barber"&&x.floor===0;Ct&&(Ct.visible=!1,Ct.material.opacity=0),ks=!1;for(let h of v){let y=!0,S=h.light;for(;S;){if(!S.visible){y=!1;break}S=S.parent}h.light.castShadow=x.open&&y&&h.type==="room",h.light.castShadow&&(h.light.shadow.mapSize.set(512,512),h.light.shadow.bias=-.001,h.light.shadow.normalBias=.025)}$o.visible=x.weather==="snow"&&!x.open,Kl(),m()}function ri(h,y){l.enableDamping=!1,a.position.copy(h),l.target.copy(y),l.update(),l.enableDamping=!0}let Rn=!1;function $l(){zi.clear(),document.querySelector('#viewCtrl [data-value="front"]').textContent="\u5230\u5E97\u95E8\u53E3",l.enabled=!0,a.fov=39,a.updateProjectionMatrix(),document.querySelector("#walkCtrl").hidden=!0,document.querySelector("#lookCtrl").hidden=!0}function Cn(){Rn=!1,x.open=!1,x.store=null,x.floor=0,$l(),l.minDistance=13,l.maxDistance=70,l.maxPolarAngle=1.45,Jl(),ri(new L(8,34,50),new L(0,2,3)),document.querySelector("#sceneName").textContent="\u653E\u5B66\u540E\u7684\u6821\u95E8\u53E3",document.querySelector("#sceneEyebrow").textContent="2005 \xB7 "+Lh(x.time,x.weather).label,document.querySelector("#sceneCaption").textContent="\u62D6\u52A8\u65CB\u8F6C \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u70B9\u51FB\u5E97\u94FA",Ql()}function qh(h){let y=M.get(h);if(!y)return;Rn=!1,x.open=!1,x.store=h,x.floor=0,$l(),l.minDistance=1.7,l.maxDistance=45,l.maxPolarAngle=1.48,Jl();let S=new L(0,1.65,y.d/2+.15),b=new L(.3,4.1,y.d/2+6);y.root.updateMatrixWorld(!0),y.root.localToWorld(S),y.root.localToWorld(b),ri(b,S),document.querySelector("#sceneName").textContent=y.name.replace("\u2606 ",""),document.querySelector("#sceneEyebrow").textContent="\u5E97\u524D\u8857\u666F \xB7 \u53EF\u6CBF\u4EBA\u884C\u9053\u9760\u8FD1",document.querySelector("#sceneCaption").textContent="\u62D6\u52A8\u770B\u5E97\u95E8 \xB7 \u70B9\u51FB\u300C\u4E00\u5C42\u300D\u8FDB\u5165\u5BA4\u5185",Ql()}function Gs(h,y=0){let S=M.get(h);if(!S)return;if(Rn=!1,x.store=h,x.floor=Math.min(y,S.levels-1),n){let k=S.floors[x.floor];k.insideBuilt||(rt(k.inside,S,x.floor),k.insideBuilt=!0,i(k.inside),h==="barber"&&x.floor===0&&Bs(),Fi()),k.insideBatched||(Oi(k.inside),k.insideBatched=!0)}n&&h==="tea"&&Wo(h,"seven_cups_tea_v2.glb"),n&&h==="noodles"&&Wo(h,"xiaoling_noodles.glb"),x.open=!0,$l(),l.minDistance=3,l.maxDistance=25,l.maxPolarAngle=1.46,Jl();let b=x.floor*3.3,w=new L(.7,b+4.6,S.d/2+6.3),N=new L(0,b+1.35,-.2);S.root.updateMatrixWorld(!0),S.root.localToWorld(w),S.root.localToWorld(N),ri(w,N),document.querySelector("#sceneName").textContent=S.name.replace("\u2606 ",""),document.querySelector("#sceneEyebrow").textContent="\u4E34\u8857\u7ACB\u9762\u5C55\u5F00 \xB7 "+(y?"\u4E8C\u5C42":"\u4E00\u5C42"),document.querySelector("#sceneCaption").textContent="\u5899\u9762\u3001\u95E8\u7A97\u3001\u96E8\u68DA\u3001\u5C4B\u9876\u5DF2\u79FB\u5F00 \xB7 \u70B9\u51FB\u5C4F\u5E55\u6362\u53F0",Ql(),g.playEffect("door")}function Yh(){Cn(),l.minDistance=1.3,l.maxDistance=35,Ft.updateWorldMatrix(!0,!1),ri(Ft.localToWorld(new L(.5,2.5,5)),Ft.localToWorld(new L(0,1.5,.5))),document.querySelector("#sceneName").textContent="\u8857\u53E3\u62A5\u520A\u4EAD",document.querySelector("#sceneEyebrow").textContent="2003\u20132005 \xB7 \u8857\u8FB9\u62A5\u520A",document.querySelector("#sceneCaption").textContent="\u8857\u53E3\u4E70\u4E00\u672C\u6742\u5FD7\uFF0C\u518D\u6162\u6162\u8D70\u5411\u5B66\u6821"}function Am(){Cn(),l.minDistance=1.3,l.maxDistance=35,Ft.updateWorldMatrix(!0,!1),ri(Ft.localToWorld(new L(-5,2.3,1)),Ft.localToWorld(new L(-1.2,1.5,0))),document.querySelector("#sceneName").textContent="\u62A5\u520A\u4EAD\u4FA7\u67B6",document.querySelector("#sceneEyebrow").textContent="2003\u20132005 \xB7 \u6742\u5FD7\u4FA7\u67B6",document.querySelector("#sceneCaption").textContent="\u9752\u5E74\u89C6\u89C9 \xB7 \u5965\u79D8 \xB7 ELLE \xB7 \u4E2D\u56FD\u65F6\u88C5 / \u65F6\u5C1A\u82AD\u838E"}function Zh(h,y){Cn(),l.minDistance=1.1,l.maxDistance=25,h.updateWorldMatrix(!0,!1),ri(h.localToWorld(new L(1.25,2.25,3.6)),h.localToWorld(new L(0,1.16,0))),document.querySelector("#sceneName").textContent=y,document.querySelector("#sceneEyebrow").textContent="\u8857\u8FB9\u5C0F\u644A \xB7 \u8FD1\u770B\u98DF\u6750",document.querySelector("#sceneCaption").textContent="\u62D6\u52A8\u65CB\u8F6C \xB7 \u89C2\u5BDF\u6258\u76D8\u4E0E\u72EC\u7ACB\u98DF\u6750\u6A21\u578B"}function Ql(){document.querySelector("#openBuilding").checked=x.open,document.querySelector("#floorValue").textContent=x.open?x.floor?"\u4E8C\u5C42\u5BA4\u5185":"\u4E00\u5C42\u5BA4\u5185":"\u8857\u533A\u603B\u89C8",document.querySelector('#viewCtrl [data-value="near"]').textContent=x.store==="fashion"?"\u8FD1\u770B\u978B\u67B6":"\u8FD1\u770B\u7EC6\u8282",document.querySelectorAll("#floorCtrl button").forEach(h=>{h.classList.toggle("selected",h.dataset.value===(x.open?x.floor?"upper":"ground":"outside")),h.disabled=h.dataset.value==="upper"&&x.open&&M.get(x.store).levels<2}),document.querySelectorAll(".scene-tab").forEach(h=>h.classList.toggle("active",h.dataset.scene===(x.store||"block")))}function Mn(h){let y=document.querySelector("#toast");y.textContent=h,y.classList.add("show"),clearTimeout(Mn.timer),Mn.timer=setTimeout(()=>y.classList.remove("show"),2200)}function Vs(h,y){document.querySelectorAll("#"+h+" button").forEach(S=>S.onclick=()=>{document.querySelectorAll("#"+h+" button").forEach(b=>{b.classList.remove("selected","active")}),S.classList.add(h==="paletteCtrl"?"active":"selected"),y(S.dataset.value)})}Vs("viewCtrl",h=>{if(h==="next"){let N=lt.map(k=>k.id);Gs(N[(N.indexOf(x.store)+1)%N.length]);return}if(h==="front"){if(Rn){Kh(4);return}x.store?qh(x.store):(Cn(),l.minDistance=2,ri(new L(0,27,-4),new L(0,0,-12)),document.querySelector("#sceneName").textContent="\u6821\u95E8\u540E\u8857",document.querySelector("#sceneCaption").textContent="\u4E24\u4FA7\u6B65\u9053\u901A\u5F80\u5C0F\u5356\u90E8\u4E0E\u6C49\u4E2D\u64C0\u9762\u76AE");return}if(!x.store){h==="above"?Cn():(Cn(),l.minDistance=1.5,ri(new L(0,2.1,20),new L(0,1.8,-8)));return}let y=M.get(x.store),S=x.floor*3.3;if(x.store==="fashion"&&h==="near"){l.minDistance=.75;let N=new L(1.1,S+1.85,1.63),k=new L(y.w/2-.2,S+1.12,.08);y.root.localToWorld(N),y.root.localToWorld(k),ri(N,k),document.querySelector("#sceneCaption").textContent="\u53F3\u4FA7\u978B\u67B6 \xB7 \u62D6\u52A8\u6216\u6EDA\u8F6E\u7EC6\u770B Blender \u5E06\u5E03\u978B";return}let b=h==="above"?new L(.2,S+9.5,2.2):new L(.7,S+2.7,y.d/2+3.8),w=new L(0,S+1.25,-.35);y.root.localToWorld(b),y.root.localToWorld(w),ri(b,w)});let hb=0,Tn=0,Bi=0,Yr=0,ki=0,zi=new Set,ds=.9,Zr=st.getLength();function Em(h="gate"){Tn=Bi=ds;let y=st.getPointAt(Tn);y.y=1.8;let S=new L(0,2.2,-12.4);if(h==="shop"||h==="mianpi"){let w=M.get(h);S=w.root.localToWorld(new L(0,1.68,w.d/2+.3))}let b=st.getTangentAt(Tn);Yr=Math.atan2(S.x-y.x,S.z-y.z)-Math.atan2(b.x,b.z),ki=Math.atan2(S.y-y.y,Math.hypot(S.x-y.x,S.z-y.z)),document.querySelectorAll("#lookCtrl button").forEach(w=>w.classList.toggle("selected",w.dataset.look===h)),ec(0)}function Kh(h=0){Rn||(Cn(),Rn=!0,Tn=Bi=0,Yr=ki=0),document.querySelector('#viewCtrl [data-value="front"]').textContent="\u8D70\u5230\u6821\u95E8",l.enabled=!1,a.fov=65,a.updateProjectionMatrix(),h===4&&(Bi=ds),document.querySelector("#walkCtrl").hidden=!1,document.querySelector("#sceneEyebrow").textContent="\u6B65\u884C \xB7 \u62D6\u52A8\u73AF\u987E",document.querySelector("#sceneCaption").textContent=n?"\u5728\u4E0B\u65B9\u70B9\u524D\u8FDB/\u540E\u9000 \xB7 \u62D6\u52A8\u753B\u9762\u770B\u56DB\u5468":"W/S \u6216 \u2191/\u2193 \u884C\u8D70 \xB7 \u62D6\u52A8\u770B\u56DB\u5468 \xB7 \u6309 Esc \u8FD4\u56DE\u9E1F\u77B0",document.querySelectorAll(".scene-tab").forEach(y=>y.classList.toggle("active",y.dataset.scene==="street")),matchMedia("(max-width:680px)").matches&&document.querySelector(".panel").scrollTo({top:0,behavior:"smooth"}),ec(0)}function ec(h){if(!Rn)return;let y=(zi.has("w")||zi.has("ArrowUp")?1:0)-(zi.has("s")||zi.has("ArrowDown")?1:0);y&&(Bi=rs.clamp(Tn+y*2.2*h/Zr,0,ds));let S=Bi-Tn;Math.abs(S)>1e-4&&Tn>ds-.03&&(ki=.06),Tn+=Math.sign(S)*Math.min(Math.abs(S),2.2*h/Zr);let b=st.getPointAt(Tn),w=st.getTangentAt(Tn),N=Math.atan2(w.x,w.z)+Yr;a.position.set(b.x,1.8,b.z);let k=new L(b.x+Math.sin(N)*Math.cos(ki),1.8+Math.sin(ki),b.z+Math.cos(N)*Math.cos(ki));a.lookAt(k),l.target.copy(k);let q=Tn>ds-.006,ae=q?78:65;a.fov!==ae&&(a.fov=ae,a.updateProjectionMatrix()),document.querySelector("#sceneName").textContent=q?"\u6821\u95E8\u524D":"\u6CBF\u8857\u6D4F\u89C8",document.querySelector("#walkStep").textContent=q?"\u5DF2\u5230\u6821\u95E8\u524D":"\u8DDD\u6821\u95E8 "+Math.round((ds-Tn)*Zr)+" \u7C73",document.querySelector("#walkBack").disabled=Tn<=0,document.querySelector("#walkForward").disabled=q,document.querySelector("#lookCtrl").hidden=!q}document.querySelector("#walkBack").onclick=()=>{Bi=Math.max(0,Tn-4/Zr)},document.querySelector("#walkForward").onclick=()=>{Bi=Math.min(ds,Bi+4/Zr)},window.addEventListener("keydown",h=>{Rn&&["w","s","ArrowUp","ArrowDown"].includes(h.key)&&!["INPUT","TEXTAREA"].includes(h.target.tagName)&&(h.preventDefault(),zi.add(h.key))}),window.addEventListener("keyup",h=>zi.delete(h.key)),window.addEventListener("blur",()=>zi.clear());let ps=null;e.addEventListener("pointerdown",h=>{Rn&&(ps=[h.clientX,h.clientY,Yr,ki])}),e.addEventListener("pointermove",h=>{Rn&&ps&&h.buttons&&(Yr=ps[2]-(h.clientX-ps[0])*.004,ki=rs.clamp(ps[3]-(h.clientY-ps[1])*.004,-.85,.85))}),window.addEventListener("pointerup",()=>ps=null),document.querySelectorAll("#lookCtrl button").forEach(h=>h.onclick=()=>h.dataset.look==="newsstand"?Yh():Em(h.dataset.look)),document.querySelector("#newsstandBtn").onclick=Yh,document.querySelector("#newsstandSideBtn").onclick=Am,document.querySelector("#soupStallBtn").onclick=()=>Zh(vm,"\u9EBB\u8FA3\u70EB\u644A"),document.querySelector("#friedStallBtn").onclick=()=>Zh(bm,"\u70B8\u4E32\u644A"),document.querySelectorAll(".scene-tab").forEach(h=>h.onclick=()=>{h.dataset.scene==="block"?Cn():h.dataset.scene==="street"?Kh(0):Rn?qh(h.dataset.scene):Gs(h.dataset.scene)}),Vs("seasonCtrl",h=>{x.season=h,Xh()}),Vs("weatherCtrl",h=>{x.weather=h,document.querySelector("#weatherValue").textContent={clear:"\u6674\u5929",cloudy:"\u9634\u5929",rain:"\u4E0B\u96E8",snow:"\u4E0B\u96EA"}[h],Fi()}),Vs("timeCtrl",h=>{x.time={day:15,dusk:58,night:95}[h],document.querySelector("#timeSlider").value=x.time,Fi()}),Vs("floorCtrl",h=>{h==="outside"?Cn():x.store?Gs(x.store,h==="upper"?1:0):Gs("bookshop",h==="upper"?1:0)}),Vs("paletteCtrl",h=>{x.palette=h,document.querySelector("#app").dataset.palette=h,document.querySelector("#paletteValue").textContent={dream:"\u68A6\u6838\u9EC4\u660F",mint:"\u8584\u8377\u84DD\u8C03",film:"\u80F6\u7247\u6696\u9EC4",violet:"\u51AC\u591C\u7D2B"}[h],Fi()}),document.querySelector("#timeSlider").oninput=h=>{x.time=+h.target.value,Fi()},document.querySelector("#openBuilding").onchange=h=>h.target.checked?Gs(x.store||"bookshop",x.floor):Cn();for(let[h,y]of[["lightsToggle","lights"],["screensToggle","screens"],["streetToggle","street"]])document.querySelector("#"+h).onchange=S=>{if(x[y]=S.target.checked,y==="screens")for(let b of ai.tv)b.tagName==="VIDEO"&&(x.screens?b.play().catch(()=>{}):b.pause());Fi(),ms(performance.now())};document.querySelector("#resetBtn").onclick=()=>{Object.assign(x,{season:"spring",time:58,weather:"clear",palette:"dream",lights:!0,screens:!0,street:!0});for(let h of["lightsToggle","screensToggle","streetToggle"])document.querySelector("#"+h).checked=!0;document.querySelector('#seasonCtrl button[data-value="spring"]').click(),document.querySelector('#weatherCtrl button[data-value="clear"]').click(),document.querySelector('#timeCtrl button[data-value="dusk"]').click(),document.querySelector('#paletteCtrl button[data-value="dream"]').click(),Cn()};let ea=document.querySelector("#audioStartBtn"),tc=document.querySelector("#audioStatus");function Rm(){let h=g.isPlaying();ea.textContent=h?"\u266B \u6682\u505C\u58F0\u97F3":"\u266A \u5F00\u542F\u58F0\u97F3",ea.classList.toggle("playing",h),tc.textContent=h?"\u6B63\u5728\u64AD\u653E":"\u70B9\u51FB\u5F00\u542F\u58F0\u97F3"}g.available||(ea.disabled=!0,tc.textContent="\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u58F0\u97F3"),ea.onclick=async()=>{if(g.isPlaying())await g.pause();else if(!await g.start()){tc.textContent="\u65E0\u6CD5\u64AD\u653E\uFF0C\u8BF7\u68C0\u67E5\u6D4F\u89C8\u5668\u58F0\u97F3\u6743\u9650";return}Rm()};for(let[h,y,S]of[["musicToggle","musicVolume","music"],["ambienceToggle","ambienceVolume","ambience"],["effectsToggle","effectsVolume","effects"]])document.querySelector("#"+h).onchange=b=>g.setOptions({[S]:b.target.checked}),document.querySelector("#"+y).oninput=b=>g.setOptions({[S+"Volume"]:+b.target.value/100});document.querySelectorAll("#seasonCtrl button,#weatherCtrl button,#timeCtrl button,#viewCtrl button,.scene-tab").forEach(h=>h.addEventListener("click",()=>g.playEffect("tap")));let jh=(h,y)=>{let S=URL.createObjectURL(h),b=document.createElement("a");b.href=S,b.download=y,b.click(),setTimeout(()=>URL.revokeObjectURL(S),1e4)};document.querySelector("#shotBtn").onclick=()=>{g.playEffect("shutter"),r.render(o,a),e.toBlob(h=>jh(h,"\u653E\u5B66\u4EE5\u540E_\u6A21\u578B\u622A\u56FE.webp")),Mn("\u573A\u666F\u622A\u56FE\u5DF2\u5BFC\u51FA")};let oi=null,Kr=null,jr=null;document.querySelector("#recordBtn").onclick=()=>{if(oi&&oi.state==="recording"){oi.stop();return}if(!e.captureStream||!window.MediaRecorder){Mn("\u6B64\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u5F55\u5C4F");return}jr=e.captureStream(30);let h=g.getRecordStream();Kr=new MediaStream([...jr.getVideoTracks(),...h?h.getAudioTracks():[]]);let b=(!!h?["video/webm;codecs=vp9,opus","video/webm;codecs=vp8,opus","video/webm","video/mp4"]:["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"]).find(k=>MediaRecorder.isTypeSupported(k));try{oi=new MediaRecorder(Kr,b?{mimeType:b}:{})}catch{Kr=jr;let k=["video/webm;codecs=vp8","video/webm","video/mp4"].find(q=>MediaRecorder.isTypeSupported(q));try{oi=new MediaRecorder(Kr,k?{mimeType:k}:{})}catch{jr.getTracks().forEach(q=>q.stop()),Mn("\u6B64\u6D4F\u89C8\u5668\u65E0\u6CD5\u542F\u52A8\u5F55\u5C4F");return}}let w=Kr.getAudioTracks().length>0,N=[];oi.ondataavailable=k=>{k.data.size&&N.push(k.data)},oi.onstop=()=>{jh(new Blob(N,{type:oi.mimeType}),"\u653E\u5B66\u4EE5\u540E_\u573A\u666F\u5F55\u5C4F."+(oi.mimeType.includes("mp4")?"mp4":"webm")),jr.getTracks().forEach(k=>k.stop()),document.querySelector("#recordLabel").textContent="\u5F55\u5C4F",document.querySelector("#recordBtn").classList.remove("recording"),Mn("\u5F55\u5C4F\u5DF2\u5BFC\u51FA"+(w?"\uFF08\u542B\u573A\u666F\u58F0\u97F3\uFF09":""))},oi.start(),g.playEffect("tap"),document.querySelector("#recordLabel").textContent="\u505C\u6B62",document.querySelector("#recordBtn").classList.add("recording")};for(let h of["closeHelp","gotIt"])document.querySelector("#"+h).onclick=()=>document.querySelector("#helpModal").classList.add("hidden");document.querySelector("#helpBtn").onclick=()=>document.querySelector("#helpModal").classList.remove("hidden");let Cm=ti("./textures/fast/fictional-cyber-screens-v1.webp"),Pm=ti("./textures/fast/fictional-tv-stills-v1.webp"),ai={tv:[],game:[]},Hs={tv:[],game:[]},Jh={mp4:"video/mp4",m4v:"video/mp4",mov:"video/quicktime",webm:"video/webm",ogv:"video/ogg"},Lm=/\.(avif|bmp|gif|jpe?g|png|webp)$/i;function Im(h){let y=(h.name.split(".").pop()||"").toLowerCase();return h.type.startsWith("video/")?{kind:"video",mime:h.type}:Jh[y]?{kind:"video",mime:Jh[y]}:h.type.startsWith("image/")||Lm.test(h.name)?{kind:"image",mime:h.type}:null}for(let[h,y,S,b]of[["tv","importTvVideoBtn","tvVideoFiles","video"],["tv","importTvImageBtn","tvImageFiles","image"],["game","importGameBtn","gameFiles","image"]])document.querySelector("#"+y).onclick=()=>document.querySelector("#"+S).click(),document.querySelector("#"+S).onchange=w=>{let N=[],k=[];ai[h].forEach((Ve,mt)=>{let Ht=Ve.tagName==="VIDEO"?"video":"image";h==="tv"&&Ht!==b?(N.push(Ve),k.push(Hs[h][mt])):(Ve.tagName==="VIDEO"&&Ve.pause(),URL.revokeObjectURL(Hs[h][mt]))}),ai[h]=N,Hs[h]=k;let q=[...w.target.files],ae=[];if(!q.length){w.target.value="";return}let be=0,Ue=0;for(let Ve of q.slice(0,8)){if(h==="tv"&&Ve.size>10*1024*1024){ae.push(Ve.name+" \u8D85\u8FC7 10 MB");continue}let mt=Im(Ve),Ht=h==="tv"&&mt?.kind==="video";if(!mt||mt.kind!==b){ae.push(Ve.name+" \u683C\u5F0F\u4E0D\u652F\u6301");continue}let At=Ht?document.createElement("video"):new Image,pi=URL.createObjectURL(Ve);Hs[h].push(pi),ai[h].push(At),be++;let Ws=()=>{Ue++,ms(performance.now()),Ue===be&&Mn(h==="tv"?"\u7535\u89C6\u7D20\u6750\u5DF2\u663E\u793A\uFF0C\u53EF\u4EE5\u70B9\u51FB\u5C4F\u5E55\u5207\u6362":"\u7F51\u5427\u5C4F\u5E55\u56FE\u7247\u5DF2\u663E\u793A")};Ht?(At.muted=!0,At.loop=!0,At.playsInline=!0,At.preload="auto",At.setAttribute("playsinline",""),At.addEventListener("loadeddata",()=>{Ws(),x.screens&&At.play().catch(()=>Mn("\u89C6\u9891\u5DF2\u663E\u793A\uFF1B\u82E5\u672A\u64AD\u653E\uFF0C\u8BF7\u70B9\u4E00\u4E0B\u7535\u89C6\u5C4F\u5E55"))},{once:!0}),At.addEventListener("playing",()=>ms(performance.now())),At.addEventListener("error",()=>{let sc=ai[h].indexOf(At);sc>=0&&ai[h].splice(sc,1);let On=Hs[h].indexOf(pi);On>=0&&Hs[h].splice(On,1),URL.revokeObjectURL(pi),ms(performance.now()),Mn(Ve.name+" \u65E0\u6CD5\u89E3\u7801\uFF1B\u8BF7\u7528 MP4\uFF08H.264\uFF09\u6216 WebM \u91CD\u8BD5")},{once:!0})):(At.dataset.animated=String(mt.mime==="image/gif"||Ve.name.toLowerCase().endsWith(".gif")),At.onload=Ws,At.onerror=()=>Mn(Ve.name+" \u56FE\u7247\u52A0\u8F7D\u5931\u8D25")),At.src=pi,Ht&&At.load()}q.length>8&&ae.push("\u4E00\u6B21\u6700\u591A\u5BFC\u5165 8 \u4E2A\u6587\u4EF6"),w.target.value="",ms(performance.now()),Mn((Ue<be?"\u6B63\u5728\u8BFB\u53D6\u7D20\u6750\u2026 ":"\u5DF2\u9009\u62E9 ")+ai[h].length+" \u4E2A"+(h==="tv"?"\u7535\u89C6":"\u6E38\u620F")+"\u7D20\u6750"+(ae.length?"\uFF1B"+ae[0]:""))};document.querySelector("#importPosterBtn").onclick=()=>document.querySelector("#posterFiles").click(),document.querySelector("#posterFiles").onchange=h=>Mn("\u5DF2\u5728\u672C\u673A\u66FF\u6362 "+nm(h.target.files)+" \u5F20\u6388\u6743\u6D77\u62A5\u56FE\u7247");function ms(h){for(let y of U){let S=y.canvas.getContext("2d");if(S.fillStyle="#020709",S.fillRect(0,0,320,240),x.screens){let b=ai[y.tv?"tv":"game"],w=b.length?b[y.page%b.length]:y.tv?Pm:Cm,N=w.tagName==="VIDEO";if(N?w.readyState>=2:w.complete&&w.naturalWidth)if(b.length)S.drawImage(w,0,0,N?w.videoWidth:w.width,N?w.videoHeight:w.height,0,0,320,240);else{let q=y.page%4,ae=q%2*w.width/2,be=Math.floor(q/2)*w.height/2;S.drawImage(w,ae,be,w.width/2,w.height/2,0,0,320,240)}else S.fillStyle=y.tv?"#6b637b":"#345c77",S.fillRect(5,5,310,230),S.fillStyle="#d8d5ca",S.font='17px "Songti SC",serif',S.fillText(y.tv?"\u539F\u521B\u7535\u89C6\u5267\u753B\u9762 \xB7 \u52A0\u8F7D\u4E2D":"\u661F\u5149\u7F51\u5427 \xB7 \u52A0\u8F7D\u4E2D",20,37);S.fillStyle="#07101a22";for(let q=0;q<240;q+=3)S.fillRect(0,q,320,1)}y.texture.needsUpdate=!0}}let nc=new _l,ta;e.onpointerdown=h=>ta=[h.clientX,h.clientY],e.onpointerup=h=>{if(!ta||Math.hypot(h.clientX-ta[0],h.clientY-ta[1])>5)return;let y=e.getBoundingClientRect();if(nc.setFromCamera(new ce((h.clientX-y.left)/y.width*2-1,-(h.clientY-y.top)/y.height*2+1),a),x.open){let S=nc.intersectObjects(U.filter(b=>b.mesh.parent&&b.mesh.parent.parent).map(b=>b.mesh),!1).find(b=>{let w=b.object;for(;w;){if(!w.visible)return!1;w=w.parent}return!0});if(S){let b=U.find(N=>N.mesh===S.object),w=ai[b.tv?"tv":"game"].length||4;b.page=(b.page+1)%w,ms(performance.now()),g.playEffect("screen"),Mn("\u5DF2\u5207\u6362\u5C4F\u5E55\u5185\u5BB9")}}else{let S=nc.intersectObjects(D,!0).find(b=>b.object.visible);if(S){let b=S.object;for(;b&&!b.userData.id;)b=b.parent;b&&Gs(b.userData.id)}}},window.onkeydown=h=>{h.key==="Escape"&&Cn()};function Dm(){let h=r.getRenderTarget();for(let w of ii)w.visible=!1;Ct&&(Ct.visible=!1);let y=M.get("barber").floors[0],S=y.front.visible,b=y.roof.visible;y.front.visible=!0,y.roof.visible=!0;for(let{target:w,camera:N}of Ii)r.setRenderTarget(w),r.clear(),r.render(o,N);r.setRenderTarget(h),y.front.visible=S,y.roof.visible=b;for(let w of ii)w.visible=!0;ks=!0}let $h=performance.now(),Qh=0,ef=!1;function tf(h){requestAnimationFrame(tf);let y=(h-$h)/1e3,S=Math.min(.05,y);if($h=h,Rn?ec(Math.min(1,y)):l.update(),Di?.visible&&Ct){ks||Dm(),Di.getWorldPosition(si);let w=a.position.distanceTo(si),N=rs.clamp((10.1-w)/2.3,0,1),k=.34*N*N*(3-2*N);Ct.material.opacity+=(k-Ct.material.opacity)*(1-Math.exp(-S*2.5)),Ct.visible=Ct.material.opacity>.005}if($o.visible||Zl.visible){for(let w=0;w<zs;w++)un[w*3+1]-=S*(x.weather==="rain"?16+jo[w]*4:.55+jo[w]*.55),un[w*3]+=S*(x.weather==="rain"?.5:Math.sin(h/1300+w)*.18),un[w*3+1]<.1&&(un[w*3+1]=15,un[w*3]=(z()-.5)*28,un[w*3+2]=(z()-.5)*40+3),Wh.set([un[w*3],un[w*3+1],un[w*3+2],un[w*3]-.05,un[w*3+1]+.35,un[w*3+2]],w*6);Ko.attributes.position.needsUpdate=!0,Yl.attributes.position.needsUpdate=!0}let b=ai.tv.some(w=>w.tagName==="VIDEO"||w.dataset?.animated==="true");h-Qh>(b&&x.screens?40:250)&&(ms(h),Qh=h),n?r.render(o,a):c.render(),!ef&&r.info.render.calls>0&&(ef=!0,window.sceneBoot?.ready(),document.querySelector("#loading")?.remove(),Cp())}function ic(){let h=e.getBoundingClientRect();r.setSize(h.width,h.height,!1),n||c.setSize(h.width,h.height),a.aspect=h.width/h.height,a.updateProjectionMatrix()}typeof ResizeObserver=="function"?new ResizeObserver(ic).observe(e):window.addEventListener("resize",ic,{passive:!0}),i(o),ic(),Xh(),Fi(),Cn(),document.querySelector("#status").textContent="9 \u5BB6\u53EF\u8FDB\u5165\u5E97\u94FA \xB7 \u9EBB\u8FA3\u70EB / \u70B8\u4E32\u644A",requestAnimationFrame(tf),window.sceneQA=()=>({textures:wl(),contextLost:r.getContext().isContextLost(),gpuTextures:r.info.memory.textures,state:{...x},audio:g.debugState(),stores:[...M.values()].map(h=>({id:h.id,visible:h.root.visible,levels:h.floors.map(y=>({visible:y.floor.visible,front:y.front.visible,roof:y.roof.visible}))})),drawCalls:r.info.render.calls,triangles:r.info.render.triangles,screenCount:U.length,roomLights:v.filter(h=>h.type==="room").length,canvas:[e.width,e.height]})}lb().catch(s=>{window.sceneBoot?.fail(s.message||String(s)),console.error(s)});})();
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
