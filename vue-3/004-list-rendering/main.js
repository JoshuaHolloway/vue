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
        {id: 1, color: 'green'}, 
        {id: 2, color: 'blue'}
      ]
    };
  },
  delimiters: ["((", "))"]
};

// Create Vue instance
const app = Vue.createApp(options_obj);