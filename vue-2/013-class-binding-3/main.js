const app = new Vue({
  
  // mount Vue here:
  el: '#root',  // surface area

  // data-binding:
  data: {
    className: 'color-red',
    isLoading: false
  },
  methods: {
    f_click() {
      this.isLoading = !this.isLoading;
    }
  }

});