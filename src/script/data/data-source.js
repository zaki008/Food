class DataSource {
  static searchFood(keyword) {
    return fetch(
      `https://api.spoonacular.com/recipes/search?apiKey=13a38ba464614721ba87fdb0652ea0eb&query=${keyword}`
    )
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.results.length > 0) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}

export default DataSource;
