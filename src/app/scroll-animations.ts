// Scroll Animation Utilities
export class ScrollAnimations {
  private static observer: IntersectionObserver | null = null;

  static initialize() {
    // Create intersection observer for scroll animations
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    // Observe all elements with animation classes
    this.observeElements();
  }

  static observeElements() {
    if (!this.observer) return;

    const animatedElements = document.querySelectorAll(
      '.fade-in-up, .fade-in-left, .fade-in-right, .scale-in, .slide-in-left, .slide-in-right, .stagger-children'
    );

    animatedElements.forEach((el) => {
      this.observer!.observe(el);
    });
  }

  static refresh() {
    // Disconnect and reinitialize to catch new elements
    if (this.observer) {
      this.observer.disconnect();
    }
    this.initialize();
  }
}
