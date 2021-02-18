class ReviewUser extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>
            .buttton {
              padding: 15px 32px;
              border-radius: 8px;
              box-shadow: 0px 4px 15px #638ee6;
            }
            #review {
                margin-top: 70px;
            }
            #review h2{
              font-weight: 600;
              color: #152c5b;
              margin-bottom: 30px;
            }
            .content-review {
              margin-top: 20px;
            }
            .review-user {
              box-shadow: 4px 8px 5px 0 rgba(32, 31, 31, 0.2);
              transition: 0.3s;
              margin-right: 70px;
              border-radius: 10px;
            }

            .review-user img {
              width: 100%;
            }

            #review a {
              width: 400px;
              display: block;
              text-align: center;
              margin: 40px auto 0px auto
            }

            .review-user .product-title {
              text-align: center;
              color: #152c5b;
              font-size: 20px;
              font-weight:600;
            }

            .review-user .product-subtitle {
              margin: 10px 20px 20px 20px;
              text-align: justify;
              color: #b4b4b4;
              font-size: 14px;
              font-weight:500;
            }
            @media screen and (max-width: 1200px) {
               .content-review {
                 margin-top: 20px;
                }
                .buttton {
                padding: 15px 18px;
                border-radius: 8px;
                  box-shadow: 0px 4px 15px #638ee6;
                }
                .review-user {
                margin: 30px 20px 10px 0px;
                }

                #review a {
                width: 150px;
                }
            }
        </style>
         <article id="review" data-aos="fade-down">
          <h2>Review User</h2>
          <div class="container-fluid">
            <div class="content-review">
              <div class="row">
                <div class="col-lg-3 col-md-4 col-sm-6">
                  <div class="review-user">
                    <img src="https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzh8fHVzZXJ8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    <p class="product-title">Alex Suprun</p>
                    <p class="product-subtitle">
                      Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard dummy
                      text ever since the 1500s,
                    </p>
                  </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                  <div class="review-user">
                    <img src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="" />
                      <p class="product-title">Austin Distel</p>
                      <p class="product-subtitle">
                          Lorem Ipsum is simply dummy text of the printing and typesetting
                          industry. Lorem Ipsum has been the industry's standard dummy
                          text ever since the 1500s,
                      </p>
                  </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                  <div class="review-user">
                    <img src="https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzV8fHVzZXJ8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                      <p class="product-title">Austin Distel</p>
                      <p class="product-subtitle">
                          Lorem Ipsum is simply dummy text of the printing and typesetting
                          industry. Lorem Ipsum has been the industry's standard dummy
                          text ever since the 1500s,
                      </p>
                  </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                  <div class="review-user">
                      <img src="https://images.unsplash.com/photo-1550082849-c4603c163b37?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDR8fHVzZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                      <p class="product-title">Ventures</p>
                      <p class="product-subtitle">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy
                        text ever since the 1500s,
                      </p>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <a href="#" class="btn btn-primary buttton">View all Review</a>
        </article>
        `;
  }
}

customElements.define("review-user", ReviewUser);
