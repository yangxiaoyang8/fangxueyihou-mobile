(() => {
  const loading = document.querySelector('#loading');
  if (!loading) return;

  let reported = false;
  const showStartupProblem = (detail = '') => {
    if (reported || !loading.isConnected) return;
    reported = true;
    loading.classList.add('load-failed');
    const spinner = loading.querySelector('.loader');
    if (spinner) spinner.hidden = true;
    const message = loading.querySelector('span');
    if (message) message.textContent = '街区没有成功启动';

    const details = document.createElement('small');
    details.textContent = detail
      ? `诊断信息：${String(detail).slice(0, 180)}。请复制链接到最新版 Safari / Chrome 打开后重试。`
      : '可能是浏览器不支持 WebGL、网络资源加载失败，或加载时间过长。请检查网络后重试。';
    loading.append(details);

    const retry = document.createElement('button');
    retry.type = 'button';
    retry.textContent = '重新加载';
    retry.addEventListener('click', () => location.reload());
    loading.append(retry);
  };

  window.addEventListener('error', event => {
    const target = event.target;
    const scriptError = target === window || (target && target.tagName === 'SCRIPT') || typeof event.message === 'string';
    if (scriptError) showStartupProblem(event.message || target?.src || '脚本加载失败');
  }, true);
  window.addEventListener('unhandledrejection', event => {
    showStartupProblem(event.reason?.message || event.reason || '3D 初始化失败');
  });
  window.setTimeout(() => showStartupProblem('加载超过 45 秒'), 45000);
})();
