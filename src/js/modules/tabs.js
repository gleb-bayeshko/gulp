function moveLine(e) {
  const button = e.currentTarget
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabPages = document.querySelectorAll('.tab-content-page')
  const line = document.querySelector('.line');

  tabButtons.forEach(function(tabButton) {
    tabButton.classList.remove('active');
  });

  button.classList.add('active');

  tabButtons.forEach(function(tabButton, i) {
    if (tabButton.classList.contains('active')) {
      tabPages.forEach(curr => curr.classList.add('tab-content-page_disabled'))
      tabPages[i].classList.remove('tab-content-page_disabled')
    }
  });

  const activeButtonRect = button.getBoundingClientRect();
  const containerRect = button.parentNode.getBoundingClientRect();
  const offsetLeft = activeButtonRect.left - containerRect.left;

  line.style.transform = 'translateX(' + offsetLeft + 'px)';
  line.style.width = `${activeButtonRect.width}px`
}

function addTabsListeners() {
  const tabs = document.querySelectorAll('.tab-button')

  if (tabs?.length === 0 || !tabs) return

  const activeTab = document.querySelector('.tab-button.active')
  const line = document.querySelector('.line');
  const activeButtonRect = activeTab.getBoundingClientRect();
  line.style.width = `${activeButtonRect.right - activeButtonRect.left}px`


  tabs.forEach(curr => {
    curr.addEventListener('click', moveLine)
  })
}

export default addTabsListeners
