const options_obj = {
  data() {
    return {
      brand: 'Brand',
      product: 'Socks',
      description: 'This is description...',
      // image: './assets/img/socks.png',
      url: 'https://www.google.com',
      currentVariant: 0,
      // inStock: false,
      // inventory: 5,
      details: ['a', 'b', 'c'],
      variants: [
        {id: 1, color: 'green', image: './assets/img/socks-green.png', inventory: 15}, 
        {id: 2, color: 'blue',  image: './assets/img/socks-blue.png', inventory: 0}
      ],
      cart: 0,
      josh_style: {
        color: 'red',
        fontSize: '14px'
      }
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateVariant(idx) {
      this.currentVariant = idx;
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product;
    },
    image() {
      return this.variants[this.currentVariant].image; 
    },
    inStock() {
      const qty = this.variants[this.currentVariant].inventory;
      if (qty > 0)
        return true;
      else
        return false;
    }
  },
  delimiters: ["((", "))"]
};

// Create Vue instance
const app = Vue.createApp(options_obj);