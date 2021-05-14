app.component('review', {
  props: {
    reviews: {
      type: Array,
      required: true
    }
  },
  template:
  /*html*/
  `
  <div>
    Reviews:
    <ul>
      <li v-for="(review, idx) in reviews" :key="idx">
        <p>((review))</p>
      </li>
    </ul>
  </div>
  `,
  delimiters: ["((", "))"]
});