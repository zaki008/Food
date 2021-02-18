class FoodItem extends HTMLElement {
  set food(food) {
    this._food = food;
    this.render();
  }

  render() {
    this.innerHTML = `
           <style>
                .food{
                    margin-top: 40px;
                    margin-right: 40px;
                }

                .food a{
                    text-decoration: none;
                }

               .box-various {
                    margin-bottom: 40px;
                }

                .box-various .products-thumbnail {
                    width: 100%;
                    height: 200px;
                    border-radius: 12px;
                    overflow: hidden;
                    position: relative;
                    z-index: 1;
                }

                .box-various .products-thumbnail .food-image {
                    width: 100%;
                    height: 100%;

                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                    transition: all 0.5s ease;
                }

                .box-various .products-thumbnail:hover .food-image {
                    transform: scale(1.04);
                }

                .box-various .products-title {
                    margin-top: 12px;
                    font-size: 18px;
                    font-weight: 500;
                    color: #30475e;
                }

                .box-various .products-subtitle {
                    margin-top: 2px;
                    font-weight: normal;
                    color: #b0b0b0;
                    font-size: 15px;
                }

                @media (max-width: 1400px) {
                    .box-various .products-thumbnail {
                        height: 150px;
                    }
                }

                @media (max-width: 1200px) {
                    .box-various .products-thumbnail {
                        height: 120px;
                    }
                }

           </style>
           <div class="food" data-aos="zoom-in">
                <a href="#" class="box-various">
                  <div class="products-thumbnail">
                    <div
                      class="food-image"
                      style="
                        background-image: url('https://spoonacular.com/recipeImages/${this._food.image}');
                      "
                    ></div>
                  </div>
                  <div class="products-title">${this._food.title}</div>
                </a>
           </div> 
           `;
  }
}

customElements.define("food-item", FoodItem);
