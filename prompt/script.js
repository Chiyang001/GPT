const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
  const title = tab.querySelector('.tab-title');
  
  title.addEventListener('click', () => {
    tab.classList.toggle('active');
  });
});


// 获取所有的复制按钮
const copyButtons = document.querySelectorAll('.copy-button');

// 遍历复制按钮，为每个按钮添加点击事件
copyButtons.forEach(button => {
  button.addEventListener('click', () => {
    const content = button.parentNode.textContent; // 获取父元素的文本内容
    copyToClipboard(content.trim()); // 复制文本内容到剪贴板
  });
});

// 复制文本到剪贴板的函数
function copyToClipboard(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}
