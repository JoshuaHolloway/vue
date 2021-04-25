const app = new Vue({
  el: '#root',  // surface area

  data: {
    message: 'Hello World!',
    coordinates: ['x', 'y', 'z']
  },

  mounted() {
  },

  methods: {
    f_onClick() {
      console.log('button pressed');

      let name = document.querySelector('#input').value;
      app.coordinates.push(name);
    },
  },

});