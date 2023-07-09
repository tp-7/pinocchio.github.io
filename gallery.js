// gallery.js

document.addEventListener('DOMContentLoaded', function () {
  const galleryContainer = document.querySelector('.gallery');

  fetch('https://api.github.com/repos/tp-7/Gallery/contents/')
    .then(response => response.json())
    .then(data => {
      data.forEach(item => {
        if (item.type === 'file' && item.name.endsWith('.jpg')) {
          const imgElement = document.createElement('img');
          imgElement.src = item.download_url;
          imgElement.alt = 'Artwork';
          galleryContainer.appendChild(imgElement);
        }
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
});
