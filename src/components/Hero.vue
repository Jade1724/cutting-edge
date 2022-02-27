<template>
  <div class="hero flex justify-content-center align-items-center px-2">
      <div class="slogan-wrapper">
          <div class="slogan">We'll Design You <span class="one-word">A Cutting Edge</span> Kitchen</div>
          <div>
              <Button class="mr-4" label="Contact Us"></Button>
              <Button label="Learn More"></Button>
          </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'Hero',
}
</script>

<style scoped>
.hero {
    height: 700px;
    background-image: url('../assets/hero-image.jpg');
    background-position: center bottom;
}

.slogan {
    font-size: 54px;
    color: white;
    font-weight: bold;
}
.one-word {
    white-space: nowrap;
}
</style>