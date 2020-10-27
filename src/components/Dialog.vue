<template>
  <div class="dialog">
      <el-dialog
      title="添加食物"
      :visible.sync="dialog.show"
      :close-on-click-modal="false"
      :close-on-press-escape ="false" 
      :modal-append-to-body="false"
      >
      <div class="from"> 
       <el-card class="box-card">

  <div slot="header" class=" clearfix">
    <span>卡片名称</span>
  </div>
  <!-- <div v-for="o in 3" :key="o" class="text item">
    {{'列表内容 ' + o }}
  </div> -->
<el-form-item prop="describe" label="q:">
  <el-input type="describe" v-model="formData.describe">

  </el-input>
</el-form-item>


</el-card>

      <el-form 
      ref="form"
      :model="formData"
      :rules="form_rules"
      label-width="120px"
      style="marign:10px;width:auto;"

      
      >
<!-- <el-form-item lable="类型:">
  <el-select v-model="forData.type" placeholder="类型">
     <el-option v-for="(formtype,index) in format_type_list" key="index"
        :label="formtype" :value="formtype"></el-option>
</el-select>
</el-form-item> -->
      </el-form>

      </div>
      <el-button @click="dialog.show = false">取消</el-button>
      <el-button type="primary" @click="onSubmit('form')">提交</el-button>
      </el-dialog>
  </div>


</template>

<script>
export default {
 name: 'dialog',
    data(){
     return{
       formData:{
         type:'',
         income:'',
         expend:'',
         cash:'',
         remark:'',
         id:''

       },
       format_type_list : [
        'q',
        'wwww',
        'eee',
        'e2ee',
        'e3ee',
        'eee4' 
        
],
form_rules:{
  describe:[
    {
      required:true,message:"不能为空",tringger:blur}
  ]
}
       
     }



   },
 props:{
     dialog:Object
 },
 methods:{
   onSubmit(from){
     this.$refs[form].validate(valid =>{
       if (valid) {
         this.$axios.post('',this.formData)
         .then(res => {
           //添加成功
           this.$message({
             message: '数据添加成功',
             type:'success'
           });

           //隐藏dialog
           this.dialog.show = false;
           this.$
         }
         )}
     })
   }
 }
};
</script>

<style scoped>

</style>