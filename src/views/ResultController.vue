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
        <div class="container form-input-test">
          <h4>API Selection</h4>

          <form @submit.prevent="handleSelectionForm">
            <div class="mb-3">
              <input class="form-control" type="text" v-model="querySelector.id">
            </div>
            <div class="mb-3">
              <input class="btn btn-secondary" value="Serach" type="submit"> 
            </div>
          </form>
        </div>
        <div>
          <h5>{{ dataSelection }}</h5>
        </div>
        <!-- upload image -->
        <div class="container">
          <div class="large-12 medium-12 small-12 cell">
                <label>File
                    <input type="file" id="file" ref="file" v-on:change="handleFileUpload"/>
                </label>
              <button v-on:click="submitFile">Submit</button>
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
      dataSelection: [],
      querySelector:{
        id: "",
      },
      fromData:{
        email: "",
        desc: ""
      },
      file: ""
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
      },

      handleSelectionForm(){
        axios.get("http://localhost:5000/selection",
        {
          params:
          {id: this.querySelector.id
          }
        }
        ).then((res) => this.dataSelection = res.data.data)
        .catch(err => console.log(err.message));
      },

      // function handle upload image 
      submitFile(){
        let formData = new FormData();
        formData.append('file', this.file); // append image file name as file in variable formData

        axios.post('http://localhost:5000/single-file', 
        formData,
          {
          headers: {'Content-Type': 'multipart/form-data'}
          }
        )
        // .then(function(){console.log('SUCCESS!!');}).catch(function(){console.log('FAILURE!!');
        // });
      },

      // Storge image into data name is file
      handleFileUpload(){
        this.file = this.$refs.file.files[0];
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