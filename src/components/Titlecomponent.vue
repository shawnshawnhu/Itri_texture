<template>
  <div>
    <span class="title">{{ msg }}</span>
    <img src="../assets/itri_logo.png" width=300 alt="itri_logo">
    <span class="subtitle" >{{ msg2 }}</span>
    <span class="hint_link"> {{ msg3 }}</span>
  </div>    
  
</template>

<script>
export default {
  name: "Titlecomponent",
  props: {
    msg: String,
    msg2: String,
    msg3: String
  }
};
</script>
<style scoped lang="scss">

img {
  position:absolute;
  width:30%;
  right:20px;
}
span.title {
  position:absolute;
  left:20px;
  font-size: 60px;
  font-weight: bold;
}
span.subtitle {
  position: relative;;
  top:180px;
  left:270px;
  font-size: 30px;
  font-weight: bold;
  color: red;
  
}

span.hint_link {
  position: relative;
  top:215px;
  right:45px;
  font-size: 20px;
  font-weight: bold;
  color: black;
}


</style>