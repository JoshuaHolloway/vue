const options_obj = {
  data() {
    return {
      product: 'Socks',
      description: 'This is description...',
      image: './assets/img/socks.png',
      url: 'https://www.google.com'
    };
  },
  delimiters: ["((", "))"]
};

// Create Vue instance
const app = Vue.createApp(options_obj);