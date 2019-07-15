<template>
  <div>
  <form action=./#/send method=Get>
  <table border="1" rule=hidden>
　<tr>
  　<td class="item">{{ text_1 }}</td>
    <td class="form">
      <select name="material">
    　<option value="disabled selected hidden">----------------請選擇----------------</option>
      <option>{{ material_1 }}</option>
    　<option>{{ material_2 }}</option>
    　<option>{{ material_3 }}</option>
      </select>
    </td>
　</tr>
  <tr>
  　<td class="item">{{ text_2 }}</td>
    <td class="form">
    <select name="process">
      <option value="disabled selected hidden">----------------請選擇----------------</option>
    　<option>{{ process_1 }}</option>
    　<option>{{ process_2 }}</option>
    　<option>{{ process_3 }}</option>
      </select>
    </td>
　</tr>
  <tr>
　<td class="item">{{ text_3 }}</td>
  <td class="form">
    <select name="strain">
      <option value="disabled selected hidden">----------------請選擇----------------</option>
    　<option>{{ strain_1 }}</option>
    　<option>{{ strain_2 }}</option>
    　<option>{{ strain_3 }}</option>
      <option>{{ strain_4 }}</option>
      <option>{{ strain_5 }}</option>
      <option>{{ strain_6 }}</option>
      <option>{{ strain_7 }}</option>
      <option>{{ strain_8 }}</option>
      </select>
    </td>
　</tr>
  <tr>
　<td class="item">{{ text_4 }}</td>
  <td class="form">
    <select name="strain_rate">
      <option value="disabled selected hidden">----------------請選擇----------------</option>
    　<option>{{ strainrate_1 }}</option>
    　<option>{{ strainrate_2 }}</option>
    　<option>{{ strainrate_3 }}</option>
      <option>{{ strainrate_4 }}</option>
      <option>{{ strainrate_5 }}</option>
      <option>{{ strainrate_6 }}</option>
      </select>
      
<div></div>
    </td>
　</tr>
</table>
  <input class="botton" type="reset" value="Reset">
  <input class="botton" type="submit" value="Send">

</form>
</div>
</template>

<script>
export default {
  props: {
    text_1: String,
    text_2: String,
    text_3: String,
    text_4: String,
    material_1:String,
    material_2:String,
    material_3:String,
    process_1:String,
    process_2:String,
    process_3:String,
    strain_1:String,
    strain_2:String,
    strain_3:String,
    strain_4:String,
    strain_5:String,
    strain_6:String,
    strain_7:String,
    strain_8:String,
    strainrate_1:String,
    strainrate_2:String,
    strainrate_3:String,
    strainrate_4:String,
    strainrate_5:String,
    strainrate_6:String,
  }
};
</script>
<style scoped lang="scss">
table {
  position: relative;
  border-collapse: collapse;
  width:25%;
  margin-left:auto; 
  margin-right:auto;
  top:250px;
}
table, th, td {
  border: 1px solid black;
  height:50px;
}
td.item {
  font-size:25px;
  width:120px;
}
td.form {
  background-color:rgba(218, 203, 203, 0.767)
}
select {
  width:200px;
  height:30px;
  border-radius: 3px;
  background-color: white;
}
input[type="reset"]{
position: relative;
height:45px;
width:100px;
top:280px;
right:50px;
color:Black;
background-color: rgba(8, 250, 218, 0.918);
font-size:20px;
box-shadow: 0 8px 10px 0 rgba(0,0,0,0.2), 0 6px 5px 0 rgba(0,0,0,0.19);
border:none;
border-radius:5px;
cursor: pointer;
}
input[type="submit"]{
position: relative;
height:45px;
width:100px;
top:280px;
left:50px;
color:Black;
background-color: rgba(8, 250, 218, 0.918);
font-size:20px;
box-shadow: 0 8px 10px 0 rgba(0,0,0,0.2), 0 6px 5px 0 rgba(0,0,0,0.19);
border:none;
border-radius:5px;
cursor: pointer
}
input:hover{
  color:black;
  background-color:#fff;
  border:2px rgba(8, 250, 218, 0.918)
}
</style>

