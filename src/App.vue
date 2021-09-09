<template>
  <div class="nav-tab" id="nav">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/"><img class="logo-brand" src="./assets/img/furesign_icon.png"  ></router-link> 
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link" aria-current="page" href="/"><h5 class="nav-menu">Home</h5></a>
          <router-link class="nav-link" to="/ImgSerach"><h5 class="nav-menu">Find</h5></router-link>
          <router-link class="nav-link" to="/about"><h5 class="nav-menu">About</h5></router-link>
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

.nav-menu{
  font-weight: bold;
}

 
 
</style>
