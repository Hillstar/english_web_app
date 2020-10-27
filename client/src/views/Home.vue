<template>
  <div class="home">
  <header class="showcase">
    <div class="content">
      <div class="title">
        Welcome To Journey
      </div>
      <div class="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, vel.
      </div>
    </div>
  </header>

  <!-- About -->
  <section class="about bg-light">
    <div class="container">
      <div>
        <h3>About it</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae rutrum felis. Integer vitae urna commodo, consequat lorem in, interdum tellus. Nunc aliquet sit amet eros ac rhoncus. Curabitur facilisis vehicula justo id vestibulum. Nullam suscipit tellus eu mi molestie, at lacinia dolor rutrum. Nullam a sollicitudin mi. Vivamus ipsum felis, ornare a ipsum eget, imperdiet fringilla augue. Aliquam eget imperdiet ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam erat volutpat. Fusce quis velit non mauris blandit sollicitudin.</p>
        <p>Proin sit amet laoreet leo. Nunc consectetur lobortis neque, a dictum justo porttitor ut. Ut hendrerit ornare mauris quis ultricies. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam sed nibh at ex pellentesque semper. Sed justo velit, porta sed justo sit amet, faucibus blandit ipsum. Duis neque ex, dapibus in elementum tempor, efficitur sit amet sem. Vestibulum pharetra massa quis erat ultricies aliquam.</p>
        <p>Etiam gravida, ligula vitae auctor hendrerit, eros purus tristique diam, a mattis dolor metus eget orci. Suspendisse non ex luctus, dignissim massa eu, aliquet nisi. Vivamus mollis aliquam ipsum non vestibulum. Aliquam erat volutpat. Morbi euismod vehicula nisl, vitae maximus libero accumsan at. Nam arcu velit, placerat sed mauris quis, scelerisque placerat lacus. Curabitur dictum neque quis lectus fermentum congue. Morbi fermentum, ex nec pellentesque cursus, odio nisl imperdiet nunc, id condimentum tellus ex a nunc.</p>
      </div>
    </div>
  </section>

  <!-- Services -->
  <section class="services">
    <div class="container grid-2 center">
      <div>
        <h3>Ipsum</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, reiciendis!</p>
      </div>
      <div>
        <h3>Dolor</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, reiciendis!</p>
      </div>
      <div>
        <h3>Nihils</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, reiciendis!</p>
      </div>
    </div>
  </section>

  <footer class="center bg-dark">
    <p>V&K &copy; 2020</p>
  </footer>
  </div>
</template>

<script>
// @ is an alias to /src
//import Greeting from '@/components/Greeting.vue'

export default {
  name: 'Home',
  components: {
    //Greeting
  }
}
</script>

<style scoped>
  body {
    background: rgba(0, 0, 0, 0.9);
    margin: 0;
    color: #F28888;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .showcase::after {
    content: '';
    height: 90vh;
    width: 100%;
    background-image: url('../assets/images/wwb.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: block;
    filter: blur(10px);
    -webkit-filter: blur(10px);
    transition: all 1000ms;
  }

  .showcase:hover::after {
    filter: blur(0px);
    -webkit-filter: blur(0px);
  }

  .showcase:hover .content {
    filter: blur(2px);
    -webkit-filter: blur(2px);
  }

  .content {
    position: absolute;
    z-index: 1;
    top: 10%;
    left: 50%;
    margin-top: 105px;
    margin-left: -145px;
    width: 300px;
    height: 350px;
    text-align: center;
    transition: all 1000ms;
  }

  .content .title {
    font-size: 3.3rem;
    margin-top: 10rem;
    color: #F2DAC4;
  }

  .content .text {
    line-height: 1.7;
    margin-top: 1rem;
    color: #F2DAC4;
  }

  .container {
    max-width: 960px;
    margin: auto;
    overflow: hidden;
    padding: 4rem 1rem;
  }

  .grid-2 {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(3, 1fr);
  }

  .center {
    text-align: center;
    margin: auto;
  }

  .bg-light {
    background: #F2DAC4;
    color: #184059;
  }

  .bg-dark {
    background: #184059;
    color: #F2DAC4;
  }

  footer {
    padding: 2.2rem;
  }

  footer p {
    margin: 0;
  }
</style>