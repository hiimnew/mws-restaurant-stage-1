(() => {
  if (!navigator.serviceWorker) {
    return;
  }
  console.log('Browser supports service worker');
  navigator.serviceWorker.register('./sw.js');
})();