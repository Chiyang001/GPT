const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
  const title = tab.querySelector('.tab-title');
  
  title.addEventListener('click', () => {
    tab.classList.toggle('active');
  });
});


const clipboard = new ClipboardJS('.copy-button');

clipboard.on('success', function(event) {
  console.log('内容已成功复制到剪贴板');
  event.clearSelection();
});

clipboard.on('error', function(event) {
  console.error('复制到剪贴板时出错:', event.action);
});
