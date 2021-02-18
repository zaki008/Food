import "./food-item.js";

class FoodList extends HTMLElement {
  set foods(foods) {
    this._food = foods;
    this.render();
  }

  render() {
    this.innerHTML = "";
    this.className = "row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4";
    this._food.forEach((food) => {
      const foodItemElement = document.createElement("food-item");
      foodItemElement.food = food;
      this.appendChild(foodItemElement);
    });
  }

  renderError(message) {
    this.innerHTML = `
        <style>
             .placeholder {
                   font-weight: lighter;
                   color: rgba(0,0,0,0.5);
                   -webkit-user-select: none;
                   -moz-user-select: none;
                   -ms-user-select: none;
                   user-select: none;
               }
           </style>`;
    this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define("food-list", FoodList);
