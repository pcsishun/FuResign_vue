<template>


<div class="imgserach">
    <section class="cover">
    <br>
      <h3 class="title-h3">ทำไม? ต้องซื้อเฟอร์นิเจอร์ของตกแต่งผ่าน <span class="color-brand-furesign">Furesign</span> </h3>
      <div class= "nav-sub-menu">
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link link1" id="easy-serach" aria-current="page"  href="#"  @click="selectionMenu">ค้นหาสินค้าง่าย</a>
          </li>
          <li class="nav-item">
            <a class="nav-link link2" id="item-show" href="#" @click="selectionMenu">รวบรวมไอเดียหลากหลาย</a>
          </li>
          <li class="nav-item">
            <a class="nav-link link3" id="advice-product"  href="#" @click="selectionMenu">แนะนำสินค้าที่ตรงกับไอเดีย</a>
          </li>
        </ul>

      <div class="container mb-3">
        <div class="side-imges-exsample">
          <img src='../assets/img/exsample.png' height="350" width="350">
        </div>
        <div class="contant-exsample">
          <div class="title -easy-serach">
            <h3>ค้นหาสินค้าได้ง่ายผ่านคำและรูปภาพ</h3>
          </div>
          
        </div>
      </div>

    </div>
 </section>
</div>

</template>


<script>
 
export default {
  name: 'imgserach',
  methods:{
    selectionMenu: function(e){
      let menuSelector = e.target.classList.value;
      console.log(menuSelector);

      if (menuSelector === "nav-link link1"){

        e.target.classList.toggle("activeunderline");
        document.getElementById("item-show").className="nav-link link2";
        document.getElementById("advice-product").className="nav-link link3";
      }
      else if(menuSelector === "nav-link link2"){
        
        e.target.classList.toggle("activeunderline");
        document.getElementById("easy-serach").className="nav-link link1";
        document.getElementById("advice-product").className="nav-link link3";    
      }
      else if(menuSelector === "nav-link link3"){
        
        e.target.classList.toggle("activeunderline");
        document.getElementById("easy-serach").className="nav-link link1";
        document.getElementById("item-show").className="nav-link link3";    
      }    
 
    }
  }
}
</script>


<style :scoped >

.title-h3{
  text-align: center;
}

.nav-link{
  color:rgb(167, 130, 89) !important;
}

.nav-sub-menu{
  margin-left: 30%;
  color:aliceblue;
}
.cover{
  position: relative;
  /* overflow: hidden; */
  /* max-height: 900px; */
  background-image: url('../assets/img/furesign_cover_2.jpg');
  /* background-size: cover; */
  /* background-position: bottom; */
  width: 100%;
  height: 100vhs;
}

.container grouping-title-menu{
  margin-left: 120%;
  justify-content: center;
}

.activeunderline{
  text-decoration: underline solid 5px !important;
  text-decoration-color: rgba(219, 160, 160, 0.877)  !important;
}


.color-brand-furesign{
  color:rgb(195, 158, 109);
  font-weight: bold;

}
</style>
