<template>
  <section class="cover">
    <div class="container backg">
      <div class="imgserach" >
        <h1>This is an Find page</h1>
      </div>
    </div>
 </section>

</template>


<script>
 
export default {
  name: 'imgserach',
}
</script>


<style :scoped >
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
</style>
