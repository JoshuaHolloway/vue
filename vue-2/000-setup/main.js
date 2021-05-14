const data = {
  message: 'Hello World!',
};

document.querySelector('#input1').value = data.message;

new Vue({
  el: '#root',  // surface area
  data: data, 
});