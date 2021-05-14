const app = new Vue({
  el: '#root',  // surface area

  data: {
    message: 'Hello World!',
    coordinates: ['x', 'y', 'z'],
    newName: '', 
  },

  mounted() {
  },

  methods: {
    f_onClick() {
      console.log('button pressed');

      app.coordinates.push(this.newName);
    },
  },

});