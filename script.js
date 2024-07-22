function showMessage() {
    const message = document.querySelector('.message');
    message.style.display = 'block';
}
document.addEventListener('DOMContentLoaded', () => {
    const texts = document.querySelectorAll('.text-container div');
    const images = document.querySelectorAll('.image-container img');
    let index = 0;
  
    function showTextAndImage() {
      texts.forEach((text, i) => {
        text.classList.remove('show');
      });
      images.forEach((image, i) => {
        image.classList.remove('show');
      });
  
      if (index < texts.length) {
        texts[index].classList.add('show');
        if (index < 2) {
          images[index].classList.add('show');
        } else {
          images[2].classList.add('show');
        }
        index++;
      } else {
        index = 0;
        texts[index].classList.add('show');
        images[index].classList.add('show');
        index++;
      }
    }
  
    showTextAndImage();
    setInterval(showTextAndImage, 5000); // Change text and image every 5 seconds
  });
  