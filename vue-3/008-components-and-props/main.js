const options_obj = {
  data() {
    return {
      premium: false,
    };
  },
  methods: {},
  delimiters: ["((", "))"]
};

// Create Vue instance
const app = Vue.createApp(options_obj);