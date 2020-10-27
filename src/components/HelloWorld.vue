<template>
  <div class="hello">
 
  <Home-Header></Home-Header>
  <Home-Navbar></Home-Navbar>

  <div class="rightContainer">

<router-view></router-view>

</div>

</div>



</template>



<script>

import HomeNavbar from "./HomeNavbar"
import HomeHeader from "./HomeHeader"

export default {
  components: { HomeNavbar,HomeHeader, }
};
</script>


<style scoped>

.rightContainer {
  position: relative;
  top: 0;
  left: 180px;
  width: calc(100% - 180%);
  height: calc(100% - 71px);
  overflow: auto;

}
</style>
