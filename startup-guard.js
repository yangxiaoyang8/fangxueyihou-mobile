(() => {
  const loading=document.querySelector('#loading');
  if(!loading)return;
  loading.style.position='fixed';loading.style.zIndex='100';
  if(matchMedia('(max-width:680px)').matches)document.querySelector('#controlPanel')?.classList.add('is-collapsed');
  const label=loading.querySelector('span');
  let lastProgress=Date.now(),reported=false,ticker;
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
  const ready=()=>{state.ready=true;state.stage='ready';state.elapsed=Date.now()-state.started;clearInterval(ticker);loading.remove();};
  window.sceneBoot={phase,fail,ready,state,deferTextures:true};
  if(label)label.textContent=state.message;
  window.addEventListener('error',event=>{
    if(event.target?.tagName==='SCRIPT')fail('三维程序未下载成功，请点击下方重试。');
    else if(event.target===window&&event.message)fail(event.message);
  },true);
  window.addEventListener('unhandledrejection',event=>fail(event.reason?.message||event.reason||'初始化失败'));
  ticker=setInterval(()=>{if(Date.now()-lastProgress>25000)fail('等待超过 25 秒，请点击下方重试。');},500);
})();
