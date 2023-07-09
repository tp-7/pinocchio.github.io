document.addEventListener('DOMContentLoaded', function () {
  const galleryContainer = document.querySelector('.gallery');

  fetch('https://api.github.com/repos/tp-7/Gallery/contents')
    .then(response => response.json())
    .then(data => {
      data.forEach(item => {
        if (item.type === 'file' && item.name.match(/\.(png|jpe?g|gif)$/)) {
          const imgElement = document.createElement('img');
          imgElement.src = item.download_url;
          imgElement.alt = 'Artwork';
          
          const galleryItem = document.createElement('div');
          galleryItem.className = 'gallery-item';
          galleryItem.appendChild(imgElement);
          
          galleryContainer.appendChild(galleryItem);
        }
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
});
