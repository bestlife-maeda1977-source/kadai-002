class AboutContent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <main class="main-about">
        <section class="container-xl container-about">
          <div class="row">
            <h2 class="font-EBGaramond">ABOUT</h2>
          </div>
        </section>
      </main>
    `;
  }
}
customElements.define('about-content', AboutContent);