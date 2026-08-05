class StockistContent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <main class="main-stockist">
        <section class="container-xl container-stockist">
          <div class="row">
            <h2 class="font-EBGaramond">STOCKIST</h2>
          </div>
        </section>
      </main>
    `;
  }
}
customElements.define('stockist-content', StockistContent);