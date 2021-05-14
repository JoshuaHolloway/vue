const app = new Vue({
  
  // mount Vue here:
  el: '#root',  // surface area

  // data-binding:
  data: {
    message: 'hello world',
  },

  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('');
    }
  }

});