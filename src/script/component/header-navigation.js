class HeaderNavigation extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>
            .navbar {
                position: relative;
                padding: 15px 80px 15px 80px;
                background: #fafafa !important;
            }

            .navbar .logo {
                font-size: 32px;
                font-weight: 700;
            }

            .navbar .logo span {
                color: #0047b1;
            }

            .navbar .menu li a {
                font-size: 18px;
                color: #152c5b !important;
                font-weight: 500;
                margin-left: 30px;
            }

            .navbar .menu li a:hover {
                color: #0047b1 !important;
                font-weight: 500;
            }

            @media (max-width: 1200px) {
            .navbar .menu li a {
                margin-left: 15px;
                }
            }

            @media (max-width: 450px) {
            .navbar {
                padding: 15px 60px 15px 60px;
                }
            }

        </style>
        <nav
            class="navbar navbar-expand-lg navbar-light bg-light fixed-top navbar-fixed-top"
            data-aos="zoom-out"
      >
        <div class="container-fluid">
          <a href="#" class="navbar-brand logo">Hy<span>Foods</span></a>
          <button
            type="button"
            class="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarResponsive"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto menu">
              <li class="nav-item">
                <a href="#hero" class="nav-link">Home</a>
              </li>
              <li class="nav-item">
                <a href="#gallery" class="nav-link">Gallery</a>
              </li>
              <li class="nav-itemr">
                <a href="#various" class="nav-link">Various Foods</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">Review User</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      `;
  }
}

customElements.define("header-navigation", HeaderNavigation);
