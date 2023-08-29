const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
  const title = tab.querySelector('.tab-title');
  
  title.addEventListener('click', () => {
    tab.classList.toggle('active');
  });
});


