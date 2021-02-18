class FooterFood extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const footerElement = document.createElement("footer");
    this.innerHTML = `
      <style>
          footer {
            background: #fafafa;
            margin-top: 70px;
            text-align: center;
          }
          .footer-content {
            padding: 30px 80px 30px 80px;
          }
          .footer-content h1 {
            margin-bottom: 30px;
            font-weight: 700;
          }
          .footer-content p {
            color: #b0b0b0;
            font-weight: 400;
            font-size: 20px;
          }
          .footer-content span {
            color: #0047b1;
          }
          .footer-content h2 {
            margin-bottom: 30px;
            font-weight: 700;
          }

          .footer-content i {
            font-size: 20px;
            margin-bottom: 15px;
          }
      </style>
      <footer data-aos="fade-up">
        <div class="container-fluid py-3 mt-5">
            <div class="row footer-content">
              <div class="col-lg-3 col-12 mb-4">
                  <h1>Hy<span>Foods</span></h1>
                  <p>
                      Website penyedia berbagai macam  informasi variasi makanan di Indonesia maupun Mancanegara
                  </p>
              </div>
              <div class="col-lg-1"></div>
              <div class="col-lg-4 col-12 mb-4">
                  <h2>Contact Info</h2>
                  <ul class="list-unstyled mb-0">
                    <li>
                      <h4 class="d-inline"><strong> Address: </strong></h4>
                      <i class="fas fa-map-marker-alt"> Jl.Pacoran Raya no 31</i>
                    </li>
                    <li>
                      <h4 class="d-inline"><strong> Phone: </strong></h4>
                      <i class="fas fa-phone"> (+62) 8573152823</i>
                    </li>
                    <li>
                      <h4 class="d-inline"><strong> E-mail: </strong></h4>
                      <i class="far fa-envelope"> admin@shop.test</i>
                    </li>
                  </ul>
              </div>
              <div class="col-lg-4 col-12 mb-4">
                  <h2>Account Social Media</h2>

                  <ul class="list-unstyled">
                    <li>
                      <h4 class="d-inline"><strong> Instagram : </strong></h4>
                      <i class="fab fa-instagram"> @Hy_Jesey_Football</i>
                    </li>
                    <li>
                      <h4 class="d-inline"><strong> Facebook: </strong></h4>
                      <i class="fab fa-facebook"> Hy_Jersey_Official</i>
                    </li>
                    <li>
                      <h4 class="d-inline"><strong> Twitter: </strong></h4>
                      <i class="fab fa-twitter"> @Hy_Jersey_Official</i>
                    </li>
                  </ul>
              </div>
            </div>
        </div>
      </footer>
    `;
    footerElement.appendChild(footerElement);
  }
}

customElements.define("footer-food", FooterFood);
