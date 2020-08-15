<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Greeting msg="Soon you will be able to learn English here!"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Greeting from '@/components/Greeting.vue'

export default {
  name: 'Home',
  components: {
    Greeting
  }
}
</script>
