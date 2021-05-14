const options_obj = {
  data() {
    return {
      cart: 0,
      premium: true,
    };
  },
  methods: {
    updateCart() {
      this.cart += 1;
    },
  },
  delimiters: ["((", "))"]
};

// Create Vue instance
const app = Vue.createApp(options_obj);