<template>
    <div class="shpper">主区 
   <div class="qwer"> 
      <el-form :inline="true" ref="add_data">
      <el-form-item class="btnRight">
        <el-button type="primary" size="small" icon="view" @click="handleAdd()"  >添加
          
        </el-button>
        
      </el-form-item>
      
    </el-form>
    
   </div>
    <el-divider></el-divider>
<el-table 
    :data="tableData"
    style="width: 100%">
    

      <el-table-column
       label="日期"
       width="180">
       <template slot-scope="scope">
         <i class="el-icon-time"></i>
         <span style="margin-left: 10px">{{ scope.row.date }}</span>
       </template>
      </el-table-column>
    <el-table-column
      label="姓名"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="操作"
   
    > 
      <!-- prop="operation"  
    align="center"
    fixed="right" -->
      <template slot-scope="scope">
        <el-button 
          type="warning"
          size="small"
          icon="edit"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          
          size="small"
          type="danger"
          icon="delete"
          @click="open">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  
  
  <Dialog :dialog.sync="dialog"></Dialog>
 
  </div>

    
</template>

<script>

import Dialog from '../components/Dialog'

export default {
  name:'shpper',
  data(){
   return{
     dialog:{
       show:false
     },
       tableData:[{

          date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'

       }]

       }; 

     },
     created(){
      //  this.getPorflie();
     },
     methods:{
        open() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
    //    getPorflie(){
    //    this.$axios.get(" ").then(res =>{
    //      console.log()
    //    })
    //    .catch(err => console.log(err)) ;
    //  },
     handleAdd(){
        this.dialog.show = true;
      // console.log(1231);
     },
     handleEdit(index,row){
      //  console.log(1234);
     },
     headleDelete(index,row){

     }
     },
      components:{
      Dialog 
      }
};
</script>

<style scoped>
.btnRight{

  float:right;
}
 .paper{
   
    background-color:slategray
 }
</style>