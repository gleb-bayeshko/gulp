function initializeRecordsSlider() {
  const playButtons = document.querySelectorAll('.video-overlay__button')

   playButtons.forEach(button => {
     button.addEventListener('click', handlePlayButtonClick)
   })
}

function handlePlayButtonClick(e) {
  e.preventDefault();
  const button = e.currentTarget

  const overlay = button.closest('.video-overlay')
  const slide = button.closest('.swiper-slide')
  const iframe = slide.querySelector('.videoIframe')

  const src = iframe.dataset.src

  overlay.classList.add('video-overlay_hidden')
  iframe.setAttribute('src', src)
}

export default initializeRecordsSlider
