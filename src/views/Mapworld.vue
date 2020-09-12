<template>
  <div class="mapworld">
      <h1>Discover and enjoy</h1>
      <div class="city-tera">
          <img @click="levelChoose(1)"
          :style="{marginLeft:'-12%',marginTop:'10%',height:'75px',position:'absolute'}" 
          src="../assets/images/terab.png">
      </div>
      <div class="map-background" >
          <img :style="{width:'-webkit-fill-available'}"
          src="../assets/images/mapfon.png">
      </div>
      <div class="city-wayback">
          <img @click="levelChoose(2)"
          :style="{marginLeft:'12%',marginTop:'-27.5%',height:'75px',position:'absolute'}" 
          src="../assets/images/wayway.png">    
      </div>
  </div>
</template>

<script>
      export default {
       methods: {
           levelChoose: function(levelNum) {
             switch(levelNum) {
             case 1:
                 window.location.href="http://localhost:8080/#/about";
                 break

             case 2:
                 window.location.href="http://localhost:8080/#/";
                 break

             default:
                 break
            }
          }
        }
      }
</script>
