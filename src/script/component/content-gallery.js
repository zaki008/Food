class ContentGallery extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>
            #gallery {
                margin-top: 70px;
            }

            #gallery h2 {
                font-weight: 600;
                color: #152c5b;
                margin-bottom: 30px;
            }

            #gallery .carousel .card:hover {
                transform: scale(1.04);
            }

            #gallery .carousel .card {
                width: 100%;
                height: 300px;
                border-radius: 20px;
                overflow: hidden;
            }

            #gallery .carousel .card img {
                width: 100%;
                height: 100%;
                transition: all 0.3s ease;
            }
            .owl-dots {
                text-align: center;
                margin-top: 20px;
            }
            .owl-dot {
                height: 15px;
                width: 15px;
                margin: 0 5px;
                border-radius: 50%;
                border: 2px solid #0047b1 !important;
                transition: all 0.3s ease;
            }
            .owl-dot.active {
                width: 35px;
                border-radius: 14px;
            }
            .owl-dot.active,
            .owl-dot:hover {
                background: #0047b1 !important;
            }

            @media (max-width: 450px) {
              #gallery .carousel .card {
                height: 150px;
              }
            }
        </style>
        <article id="gallery" data-aos="fade-up">
          <div class="container-fluid">
            <div class="row">
              <h2>Indonesian Food Gallery</h2>
              <div class="col-lg-12">
                <div class="carousel owl-carousel">
                  <div class="card">
                    <img
                      src="https://cdn-2.tstatic.net/tribunnewswiki/foto/bank/images/soto-betawi.jpg"
                      alt=""
                    />
                  </div>
                  <div class="card">
                    <img
                      src="https://cdn0-production-images-kly.akamaized.net/1xL8_m9gwNXrxnelV5LQnWklJPY=/1x112:1000x675/375x208/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3245094/original/043061400_1600750232-shutterstock_1786027046.jpg"
                      alt=""
                    />
                  </div>
                  <div class="card">
                    <img
                      src="https://img-global.cpcdn.com/recipes/4276359bfeb9d838/751x532cq70/gado-gado-betawi-foto-resep-utama.jpg"
                      alt=""
                    />
                  </div>
                  <div class="card">
                    <img
                      src="https://img.okezone.com/content/2017/09/29/298/1785683/okezone-week-end-menilik-sejarah-dan-keistimewaan-sate-madura-fxAFpHqWnw.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      `;
  }
}

customElements.define("content-gallery", ContentGallery);
