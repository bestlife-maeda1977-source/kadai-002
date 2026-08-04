class GlobalHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="global-header container-fluid">
        <div class="row">
          <div class="col gx-0 gx-xl-4">
            <h1 class="ci container-fluid">
              <img
                src="/src/assets/ci.svg"
                width="260"
                height="41"
                loading="lazy"
                decoding="async"
                alt="ANATOMICA"
                class="img-fluid"
              />
              <span>Clothing and shoes that fit a wide variety of human bodies</span>
            </h1>
          </div>
        </div>
        <div class="row">
          <nav class="col gx-0 gx-xl-4">
            <ul class="font-sans">
              <li><a href="about">ABOUT</a></li>
              <li><a href="#collection">COLLECTION</a></li>
              <li><a href="masterpiece">MASTERPIECE</a></li>
              <li><a href="stockist">STOCKIST</a></li>
              <li>
                <a class="blank" href="https://store.anatomica.jp/" target="_blank" rel="noopener noreferrer">
                  <span>ONLINE STORE</span>
                </a>
              </li>
              <li>
                <a class="blank" href="https://store.anatomica.jp/pages/contact" target="_blank" rel="noopener noreferrer">
                  <span>CONTACT</span>
                </a>
              </li>
              <li class="d-none d-lg-block language">
                <ul>
                  <li data-language="is-active">JP</li>
                  <li>EN</li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    `;
  }
}
customElements.define('global-header', GlobalHeader);