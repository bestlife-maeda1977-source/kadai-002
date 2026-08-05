class MasterpieceContent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <main class="main-masterpiece">
        <section class="container-xl container-masterpiece">
          <div class="row">
            <h2 class="font-EBGaramond">MASTERPIECE</h2>
          </div>
        </section>
      </main>
    `;
  }
}
customElements.define('masterpiece-content', MasterpieceContent);