const options_obj = {
  data() {
    return {
      product: 'Socks',
      description: 'This is description...',
      image: './assets/img/socks.png',
      url: 'https://www.google.com',
      inStock: true,
      inventory: 5,
      details: ['a', 'b', 'c'],
      variants: [
        {id: 1, color: 'green', image: './assets/img/socks-green.png'}, 
        {id: 2, color: 'blue',  image: './assets/img/socks-blue.png'}
      ],
      cart: 0,
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateImage(variant) {
      this.image = variant.image;
    }
  },
  delimiters: ["((", "))"]
};

// Create Vue instance
const app = Vue.createApp(options_obj);