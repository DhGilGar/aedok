document.addEventListener('DOMContentLoaded', () => {
  const closeBtn = document.getElementById('close-video');
  const openBtn = document.getElementById('open-video');
  const videoSection = document.getElementById('section-Video');

  closeBtn.addEventListener('click', () => {
    videoSection.classList.add('closed');
  });

  openBtn.addEventListener('click', () => {
    videoSection.classList.remove('closed');
  });
});
