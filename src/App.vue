<template>
  <div class="nav-tab" id="nav">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <img class="logo-brand" src="./assets/img/furesign_icon.png">
        </router-link> 

        <!-- this span class logo-nav-link nav-link need to update to img logo -->
         <span class="logo-nav-link nav-link"><h5 class="nav-menu">FuResign</h5></span>
         <!-- ----------------------------------------------- ----------------- -->

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        
        <div class="navbar-nav sidebar-menu">
          <router-link class="nav-link" to="/home"><h5 @click="selectionUnderline" class="nav-menu" id="nav-menu">HOME</h5></router-link>
          <router-link  class="nav-link" to="/marketplace"><h5 @click="selectionUnderline" class="nav-menu1" id="nav-menu1">MARKETPLACE</h5></router-link>
         <!-- <router-link class="nav-link" to="/result"><h5 @click="selectionUnderline" class="nav-menu2" id="nav-menu2">API test</h5></router-link> -->
        </div>
      </div>
    </div>
    </nav>
 
  </div>
  <router-view/>
</template>


<script>
export default {
  name: 'nav-tab',
  methods:{
    selectionUnderline: function(e){

      let navMenu = navMenu = e.target.classList.value;

      if (navMenu === "nav-menu"){
        e.target.classList.toggle("activeunderline");
        document.getElementById("nav-menu1").className="nav-menu1";
        document.getElementById("nav-menu2").className="nav-menu2";
 

      }
      else if(navMenu === "nav-menu1"){
        e.target.classList.toggle("activeunderline");
        document.getElementById("nav-menu").className="nav-menu";
        document.getElementById("nav-menu2").className="nav-menu2";
 
      }
      else if(navMenu === "nav-menu2"){
        e.target.classList.toggle("activeunderline");
        document.getElementById("nav-menu").className="nav-menu";
        document.getElementById("nav-menu1").className="nav-menu1";
 
      }
    }
  }
}
</script>


<style>


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.logo-brand{
  height:60px;
  width: 100%;
}

.navbar{
  background-color: rgb(224, 211, 190) !important;
}

.nav-menu, .nav-menu1, .nav-menu2{
  font-weight: bold;
}

.sidebar-menu{
  margin-left: 73% !important;
}

.activeunderline{
  text-decoration: underline solid 5px !important;
  text-decoration-color: rgba(197, 92, 92, 0.877)  !important;
 
}
</style>
