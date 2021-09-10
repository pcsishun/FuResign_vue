<template>

  <section class="cover">
        <div class="container">
          <div class ="form-input-test">
            <form @submit.prevent="handleSubmitForm">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email</label>
                <input v-model="fromData.email"  type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                <input v-model="fromData.desc"  class="form-control" id="exampleFormControlTextarea1" rows="3"> 
              </div>
              <div class="mb-3">
                <button class="btn btn-secondary">Submit</button>
              </div>
            </form>
        </div>
    </div>
    <div class="container">
      <div class="result" >
        <h1>API Result</h1>
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
      dataList:[],
      fromData:{
        email: "",
        desc: ""
      }
    }
  },
  created(){
    axios.get("http://localhost:5000/testnodeapi") // get from flask
    .then(data => this.dataList = data.data.data)
    .catch(err => console.log(err.message))
  },
  computed: {
    addList: function(){
      let self = this
      self.dataList
    }
  },
  methods: {
      handleSubmitForm(){
        axios
          .post("http://localhost:5000/add", this.fromData)
          .then((res) => console.log(res))
          .catch((err) => console.log(err.message))
      }
  }
 
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
  padding-left: 5%;
  padding-top: 5%;
  text-align: left;
  width: 50%;
}

.form-input-test{
  padding-right: 25%;
}
</style>