class ContentHero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>
            #hero-left {
                margin-right: 80px;
            }

            #hero .left h1 {
                color: #152c5b;
                font-size: 42px;
                font-weight: 700;
            }

            #hero .left h1 span {
                color: #0047b1;
            }

            #hero .left p {
                margin-top: 20px;
                font-size: 18px;
                font-weight: 400;
                color: #b0b0b0;
                text-align: justify;
            }

            #hero .left a {
                margin-top: 40px;
                font-size: 24px;
                padding: 12px 36px;
                box-shadow: 0px 4px 15px #638ee6;
                border-radius: 8px;
            }

            #hero .right img {
                width: 100%;
                border-radius: 6px;
            }

            @media (max-width: 1400px) {
              #hero .left h1 {
                font-size: 28px;
            }
            #hero .left p {
                margin-top: 4px;
                font-size: 12px;
            }
            #hero .left a {
                font-size: 18px;
                margin-top: 8px;
                padding: 8px 16px;
              }
            }

            @media (max-width: 992px) {
              #hero .right img {
                display: none;
            }
            #hero-left {
                width: 100%;
              }
            }

            @media (max-width: 500px) {
              #hero .left a {
                font-size: 16px;
              }
            }

        </style>
        <article id="hero" data-aos="fade-up">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-5 left">
                <h1>
                  Discover a Various of Your
                  <span class="typing"></span>
                </h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quae, excepturi voluptates aliquam perspiciatis veniam ab!
                  Quae officia odit iste reprehenderit quasi nobis odio magni
                  facere praesentium harum, nam excepturi incidunt!
                </p>
                <a href="#various" class="btn btn-primary">Various Food</a>
              </div>
              <div class="col-lg-1"></div>
              <div class="col-lg-6 right">
                <img
                  src="https://asset.kompas.com/crops/a29yE_hzxM0nJBIId_Lh6aeDkok=/0x3:977x654/780x390/data/photo/2020/06/30/5efaf91e0ec2c.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </article>
      `;
  }
}

customElements.define("content-hero", ContentHero);
