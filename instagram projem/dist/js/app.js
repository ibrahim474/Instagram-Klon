// ----------Bottom Area Of The Side Bar-----------
//bottom.innerHTML = `© ${new Date().getFullYear()} INSTAGRAM FROM META`


const storiesContent = document.querySelector('.stories__content');
const storiesLeftButton = document.querySelector('.stories__left-button');
const storiesRightButton = document.querySelector('.stories__right-button');

// STORIES SCROLL BUTTONS
// Scrolling stories content
storiesLeftButton.addEventListener('click', () => {
    storiesContent.scrollLeft -= 320;
  });
  storiesRightButton.addEventListener('click', () => {
    storiesContent.scrollLeft += 320;
  });
  
  // Checking if screen has minimun size of 1024px
  if (window.matchMedia('(min-width: 1024px)').matches) {
    // Observer to hide buttons when necessary
    const storiesObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach((entry) => {
          if (entry.target === document.querySelector('.story:first-child')) {
            storiesLeftButton.style.display = entry.isIntersecting
              ? 'none'
              : 'unset';
          } else if (
            entry.target === document.querySelector('.story:last-child')
          ) {
            storiesRightButton.style.display = entry.isIntersecting
              ? 'none'
              : 'unset';
          }
        });
      },
      { root: storiesContent, threshold: 1 }
    );
  
    // Calling the observer with the first and last stories
    storiesObserver.observe(document.querySelector('.story:first-child'));
    storiesObserver.observe(document.querySelector('.story:last-child'));
  }

pa