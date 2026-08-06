class StockistContent extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
      <main class="main-stockist">
        <section class="container-xl container-stockist">
          <div class="row">
            <div class="col">
              <h1 class="font-EBGaramond">FLAGSHIP STORE</h1>
            </div>
          </div>
        </section>
      </main>
    `;
	}
}
customElements.define("stockist-content", StockistContent);
