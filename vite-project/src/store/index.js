import { defineStore } from "pinia";


export const indexStore = defineStore("main", {
  state: () => ({
    username: "nullPlayer",
    className: "nullClass",

    shoppingCart: [],
    movieItems: [],
    resultOptions: [],
  }),
  getters: {},
  actions: {
    setUser(name, className) {
      this.username = name;
      this.className = className;
    },
    addItem(id) {
      this.shoppingCart.push(id);
      console.log(this.shoppingCart);
    },
    addMovieItem(movieObject) {
      this.movieItems.push(movieObject);
    },
    removeMovieItem(arraySlot) {
      this.movieItems.splice(arraySlot, 1);
    },
    addResultOption(id, posterPath) {
      this.resultOptions.push({
        id,
        posterPath: "https://image.tmdb.org/t/p/w500/" + posterPath,
      });
      console.log(id);
      console.log(this.resultOptions);
    },
  },
});

// Methods can also be async
// Learn getters - modify state variables without actually changing them
