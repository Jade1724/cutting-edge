<template>
  <div class="home">
    <hero />
    <product-carousel />
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '../components/Hero.vue'
import ProductCarousel from '../components/ProductCarousel.vue'

export default {
  name: 'Home',
  components: {
    Hero,
    ProductCarousel
  }
}
</script>
