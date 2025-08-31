window.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
  
  const splash = document.querySelector('.prntAppPic');
  const nav = document.querySelector('.nav');
  const mainBody = document.querySelector('.mainBody');
  
  setTimeout(() => {
    splash.style.display = 'none';
    nav.style.display = 'flex'; 
    mainBody.style.display = 'flex';
  }, 1200);
});