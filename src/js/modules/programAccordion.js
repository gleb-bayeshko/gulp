export function initializeProgramAccordion() {
  const arrows = document.querySelectorAll('.tab-content__topic-icon-down')

  arrows.forEach(arrow => {
    arrow.addEventListener('click', handleArrowClick)
  })
}

function handleArrowClick(e) {
  const container = e.currentTarget.closest('.tab-content__item').querySelector('.tab-content__speakers')

  container.style.maxHeight = container.style.maxHeight
    ? null
    : container.scrollHeight + 'px'
}
