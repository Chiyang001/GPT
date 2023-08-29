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
  button.addEventListener('click', async () => {
    const content = button.parentNode.textContent.trim();
    try {
      await navigator.clipboard.writeText(content);
      console.log('内容已成功复制到剪贴板');
    } catch (error) {
      console.error('复制到剪贴板时出错:', error);
    }
  });
});
