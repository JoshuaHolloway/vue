const options_obj = {
  data() {
    return {
      cart: [],
      premium: true,
    };
  },
  methods: {
    updateCart(id) {
      console.log('updateCart(): ', id);
      // this.cart += 1;
      this.cart.push(id)
    },
  },
  delimiters: ["((", "))"]
};

// Create Vue instance
const app = Vue.createApp(options_obj);