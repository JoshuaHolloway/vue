app.component('product-display', {
  props: {
    premium: {// expected a 'premium' prop
      // prop-validation
      type: Boolean,
      required: true
    }
  },
  template: 
  /* html */
  ` 
  <div class="product-display">

    <div style="border: solid lightseagreen 5px;">
      <button :disabled="!inStock" :class="{ disabledClass: !inStock }" @click="addToCart">Add To Cart</button>
    </div>
 
    <p style="color: red;">shipping: (( shipping ))</p>

    <!-- Computed Property: -->
    <h1>(( title ))</h1>
    <p v-text="description"></p>

    <!-- v-bind dynamically binds an attribute to an expression -->
    <img v-bind:src="image" height=50>
    <img       :src="image" height=50>
    <a         :href="url">Google</a>
    <div       :class="isActive"></div>
    <span      :style="isActive"></span>
    <span      :disabled="isDisabled"></span>

    <div style="border: solid black 5px;">
      <p v-if="inStock">In Stock</p>
      <p v-else>Out of Stock</p>
    </div>

    <ul style="border: solid lightgreen 5px;">
      <li v-for="(variant, idx) in variants" 
          :key="variant.id" 
          @mouseover="updateVariant(idx)"
          :style="{ backgroundColor: variant.color }"
      >
        ((variant.id)) ((variant.color))
      </li>
      <div :style="(( josh_style ))">Style Binding: Objects</div>
    </ul>
      
    <review v-if="reviews.length > 0" :reviews="reviews"></review>
    
    <review-form @review-submitted="addReview"></review-form>



  </div>
  `,
    // <ul>
    //   <li v-for="(review, idx) in reviews" :key="idx">
    //     <p>((review))</p>
    //   </li>
    // </ul>
  data: function() {;
    return {
      reviews: [],
      brand: 'Brand',
      product: 'Socks',
      description: 'This is description...',
      // image: './assets/img/socks.png',
      url: 'https://www.google.com',
      currentVariant: 0,
      // inStock: false,
      // inventory: 5,
      details: ['a', 'b', 'c'],
      variants: [
                                       // path relative to index.html
        {id: 1, color: 'green', image: './assets/img/socks-green.png', inventory: 15}, 
        {id: 2, color: 'blue',  image: './assets/img/socks-blue.png', inventory: 0}
      ],
      cart: 0,
      josh_style: {
        color: 'red',
        fontSize: '14px'
      }
    };
  },
  methods: {
    addToCart() {
      console.log('ProductDisplay.js :: addToCart(),  this.variants[this.selectedVariant]: ', this.variants, ', this.currentVariant: ', this.currentVariant);
      this.$emit('add-to-cart', this.variants[this.currentVariant].id) 
      // emit an event called 'add-to-cart'
      // second parameter (id) is the payload of the event we are emitting
    },
    updateVariant(idx) {
      this.currentVariant = idx;
    },

    // review is generated in event-emmiter in ReviewForm.js and passed to addReview call upon addReview event in ProductDisplay.js template
    addReview(review) {
      console.log('review: ', review);

      // add review to ProductDisplay component
      this.reviews = [...this.reviews, review];
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product;
    },
    image() {
      return this.variants[this.currentVariant].image; 
    },
    inStock() {
      const qty = this.variants[this.currentVariant].inventory;
      if (qty > 0)
        return true;
      else
        return false;
    },
    shipping() {
      if (this.premium) {
        return 'Free';
      } else {
        return 'Not Premium!';
      }
    }
  },
  delimiters: ["((", "))"]
});