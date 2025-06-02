document.addEventListener('DOMContentLoaded', () => {
  const closeBtn = document.getElementById('close-video');
  const openBtn = document.getElementById('open-video');
  const section = document.getElementById('section-Video');

  closeBtn.addEventListener('click', () => {
    section.classList.add('closed');
  });

  openBtn.addEventListener('click', () => {
    section.classList.remove('closed');
  });
});