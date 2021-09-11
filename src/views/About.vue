<template>

  <section class="cover">
    <div class="container">
      <div class="about" >
        <h1 class="test-css">About us</h1>
      </div>
    </div>
 </section>

</template>



<script>
 
export default {
  name: 'about',
}
</script>



<style :scoped>
.cover{
  position: relative;
  overflow: hidden;
  max-height: 900px;
  background-image: url('../assets/img/furesign_cover_2.jpg');
  background-size: cover;
  background-position: bottom;
  width: 100%;
  height: 100vh;
}

.cover .container {
  float: left;
  padding-left: 20%;
  padding-top: 15%;
  text-align: left;
  width: 50%;
}

.test-css{
  text-decoration: underline;
  text-decoration-color: brown;
 
}
</style>