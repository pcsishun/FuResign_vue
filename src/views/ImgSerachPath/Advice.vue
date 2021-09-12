<template>

  <section class="cover">
    <div class="container">
      <div class="advice" >
        <h1 class="test-css">advice</h1>
      </div>
    </div>
 </section>

</template>



<script>
 
export default {
  name: 'advice',
}
</script>



<style :scoped >
.cover{
  position: relative;
  overflow: hidden;
  max-height: 900px;
  background-image: url('../../assets/img/furesign_cover_2.jpg');
  background-size: cover;
  background-position: bottom;
  width: 100%;
  height: 100vh;
}

.cover .container {
  float: left;
  padding-left: 5%;
  padding-top: 5%;
  text-align: left;
  width: 50%;
}

.form-input-test{
  padding-right: 25%;
}
</style>