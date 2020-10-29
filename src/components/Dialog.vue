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
    
 
   
     <el-input 
     placeholder="请输入内容"
     v-model="formData.name"
     clearable prop="describe">
     </el-input>
 


</el-card>

      <el-form 
      ref="form"
      :model="formData"
      :rules="form_rules"
      label-width="120px"
      style="marign:10px;width:auto;"

      
      >

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
        input: '',
                options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',

       formData:{
         name:'',
         type:'',
         describe:'',
         income:'',
         expend:'',
         cash:'',
         remark:'',
         id:''

       },
       
       format_type_list : [
        "提现",
        "手续费",
        "充值",
        "优惠卡",
        '礼品',
        '转账' 
        
],
form_rules:{
  describe:[
    {
      required:true,message: '不能为空', tringger: 'blur'}
  ],
  name: [
						{ required: true, message: '请输入店铺名称', trigger: 'blur' },
					],
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