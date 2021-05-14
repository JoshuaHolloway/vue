const options_obj = {
  data() {
    return {
      product: 'Socks',
      description: 'This is description...'
    };
  }
};

// Create Vue instance
const app = Vue.createApp(options_obj);