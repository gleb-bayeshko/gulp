export function setFraction(currentIndex, slides) {
  const fraction = document.querySelector('.venue-swiper-controls .venue-swiper-fraction')
  fraction.innerHTML = `${currentIndex + 1}/${slides.length}`
}
