export default class ScrollSuave {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.option = { behavior: 'smooth', block: 'start' };
    } else {
      this.options = options;
    }

    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
  }

  // Método que add os eventos.
  addLinkEvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener('click', this.scrollToSection);
    });
  }

  // Método de iniciar na classe.
  init() {
    if (this.linksInternos.length) {
      this.addLinkEvent();
    }
    return this;
  }
}
