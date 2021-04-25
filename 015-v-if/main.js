const app = new Vue({
  
  // mount Vue here:
  el: '#root',  // surface area

  // data-binding:
  data: {

    tasks: [

      { 
        description: 'Go to the store',
        completed: true
      },

      { 
        description: 'Take shower',
        completed: false
      },

    ],
  },

});