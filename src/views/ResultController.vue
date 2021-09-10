<template>

  <section class="cover">
    <div class="container">
      <div class="result" >
        <h1>API pages</h1>
        {{ dataList }}
 
      </div>
    </div>
 </section>

</template>



<script>
import axios from "axios";

export default {
  name: 'result',
  data(){
    return{
      dataList:[]
    }
  },
  created(){
    axios.get("http://localhost:5000/testnodeapi")
    .then(data => this.dataList = data.data.data)
    .catch(err => console.log(err.message))
  }
 
}

</script>


<style >
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