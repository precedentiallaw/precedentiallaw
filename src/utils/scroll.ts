
import LocomotiveScroll from 'locomotive-scroll';

let scroll: LocomotiveScroll | null = null;

export const initializeScroll = () => {
  const scrollContainer = document.querySelector('[data-scroll-container]');
  
  if (scrollContainer) {
    scroll = new LocomotiveScroll({
      el: scrollContainer as HTMLElement,
      smooth: true,
      multiplier: 1,
      class: 'is-revealed',
      smartphone: {
        smooth: true
      },
      tablet: {
        smooth: true
      }
    });

    // Update scroll on window resize
    window.addEventListener('resize', () => {
      if (scroll) {
        scroll.update();
      }
    });

    return scroll;
  }
  
  return null;
};

export const destroyScroll = () => {
  if (scroll) {
    scroll.destroy();
    scroll = null;
  }
};

export const updateScroll = () => {
  if (scroll) {
    scroll.update();
  }
};

export const getScrollInstance = () => scroll;
