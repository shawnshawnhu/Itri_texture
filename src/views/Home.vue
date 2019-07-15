<template lang='pug'>
  .home
    Titlecomponent(msg="金屬材料織構預測" )
    //- msg2="Search" msg3="(For more information on search see the hints and tips)")
    Form(
    text_1="材料:" 
    text_2="製程:" 
    text_3="應變量:" 
    text_4="應變率:"
    material_1="鐵" 
    material_2="鉬" 
    material_3="鋁" 
    process_1="拉伸"
    process_2="壓縮"
    process_3="軋延"
    strain_1="5%"
    strain_2="10%"
    strain_3="15%"
    strain_4="20%"
    strain_5="25%"
    strain_6="30%"
    strain_7="35%"
    strain_8="40%"
    strainrate_1="0.01/s"
    strainrate_2="0.1/s"
    strainrate_3="1/s"
    strainrate_4="10/s"
    strainrate_5="100/s"
    strainrate_6="500/s"
    )
    Botton()
 </template>

<script>
// @ is an alias to /src
import Titlecomponent from "@/components/Titlecomponent.vue";
import Form from "@/components/Form.vue";
export default {
  name: "home",
  components: {
    Titlecomponent,
    Form,
  }
};
</script>
<style lang="scss" scoped>
</style>

