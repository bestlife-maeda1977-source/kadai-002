class StockistContent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <main class="main-stockist">
        <section class="container-xl container-stockist">
          <div class="row">
            <div class="col">
              <div class="d-flex space-between">
                <div class="flex-block">
                  <h2 class="font-EBGaramond">618 ORIGINAL</h2>
                  <h3 class="font-serif">黄金比（1:1.618）のように美しいシルエット</h3>
                  <div id="carousel-1" class="carousel slide">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src="/src/assets/stockist/img-stockist-1-1.webp" class="img-fluid" alt="..." loading="lazy" decoding="async" />
                      </div>
                      <div class="carousel-item">
                        <img src="/src/assets/stockist/img-stockist-1-2.webp" class="img-fluid" alt="..." loading="lazy" decoding="async" />
                      </div>
                      <div class="carousel-item">
                        <img src="/src/assets/stockist/img-stockist-1-3.webp" class="img-fluid" alt="..." loading="lazy" decoding="async" />
                      </div>
                      <div class="carousel-item">
                        <img src="/src/assets/stockist/img-stockist-1-4.webp" class="img-fluid" alt="..." loading="lazy" decoding="async" />
                      </div>
                      <div class="carousel-item">
                        <img src="/src/assets/stockist/img-stockist-1-5.webp" class="img-fluid" alt="..." loading="lazy" decoding="async" />
                      </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carousel-1" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carousel-1" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
                <div class="flex-block">
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    `;
  }
}
customElements.define('stockist-content', StockistContent);