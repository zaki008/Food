class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector("#searchElement").value;
  }

  render() {
    this.innerHTML = `
      <style>
        #various {
          margin-top: 70px;
        }

        #various h2 {
          font-weight: 600;
          color: #152c5b;
          margin-bottom: 30px;
        }

        @media (max-width: 600px) {
          #various h2 {
            font-size: 24px;
            margin-bottom: 10px;
          }
        }
   
        .search-container {
          width: 100%;
          max-width: 800px;
          margin: 32px auto;
        }

        .search-container input {
            width: 70%;
            padding: 14px;
            border: 1px solid #152c5b;
            font-weight: 500;
          }

          .search-container input:hover {
            border: 2px solid #0047b1;
          }

          .search-container input::placeholder {
            color: #152c5b;
            font-weight: 400;
          }
          .search-container button
           {
            width: 100px;
            cursor: pointer;
            padding: 14px;
            background-color: #152c5b;
            color: white;
          }
          
          @media (max-width: 500px) {
            .search-container{
              margin-left: -5px !important;
            }
            .search-container input {
              width: 180px;
            }
            .search-container button{
              margin-top: 10px;
            }
          }

      </style>
      <h2>Various Food</h2>
       <div class="search-container">
           <input placeholder="Search..." id="searchElement" type="search">
           <button id="searchButtonElement" type="submit">Search</button>
       </div>
       `;

    this.querySelector("#searchButtonElement").addEventListener(
      "click",
      this._clickEvent
    );
  }
}

customElements.define("search-bar", SearchBar);
