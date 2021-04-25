const app = new Vue({
  el: '#root',  // surface area
  data: {
    message: 'Hello World!',
    coordinates: ['x', 'y', 'z']
  }
});

const button = document.querySelector('button');
button.addEventListener('click', () => {
  console.log('clicked');

  let name = document.querySelector('#input').value;
  app.coordinates.push(name);
});