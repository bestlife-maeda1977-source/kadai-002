class GlobalFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="global-footer container-fluid">
        <div class="row">
          <nav class="col gx-0 gx-xl-4 mb-3">
            <ul class="font-serif">
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
            </ul>
          </nav>
        </div>
        <div class="row">
          <div class="col text-center">
            <div class="img">
              <img
                src="/src/assets/bg-001.svg"
                class="img-fluid"
                loading="lazy"
                decoding="async"
                alt=""
                width="188"
                height="106"
              />
            </div>
            <small class="copyright font-serif">Copyright &copy;35summers co., ltd. All Rights Reserved.</small>
          </div>
        </div>
      </footer>
    `;
  }
}
customElements.define('global-footer', GlobalFooter);