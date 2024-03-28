export function scrollFunction() {
  const topButton = document.querySelector(".top-btn");

  if (!topButton) return

  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    topButton.style.visibility = "visible";
  } else {
    topButton.style.visibility = "hidden";
  }
}


export function addTopBtnListener() {
  const topButton = document.querySelector(".top-btn");

  if (!topButton) return

  topButton.addEventListener('click', topFunction)
}

function topFunction() {
  const el = document.querySelector('#header')
  el.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}
