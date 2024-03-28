export function moveRecordsThumbLine(activeSlideIndex) {
  const activeSlide = document.querySelectorAll('.records-swiper-navigation .swiper-slide')[activeSlideIndex]

  if (!activeSlide) return

  const line = document.querySelector('.records-line');

  const activeButtonRect = activeSlide.getBoundingClientRect();
  const containerRect = activeSlide.parentNode.getBoundingClientRect();
  const offsetLeft = activeButtonRect.left - containerRect.left;

  line.style.transform = 'translateX(' + offsetLeft + 'px)';
  line.style.width = `${activeButtonRect.width}px`
}

export function initializeRecordsThumbsLine() {
  const activeTab = document.querySelector('.records-swiper-navigation .swiper-slide-active')

  if (!activeTab) return

  const line = document.querySelector('.records-line');
  const activeButtonRect = activeTab.getBoundingClientRect();
  line.style.width = `${activeButtonRect.right - activeButtonRect.left}px`
}

