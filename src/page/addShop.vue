<template>
  <div class="addshop">
      添加  

      <el-row style="margin-top: 20px;">
        <el-col :span="12" :offset="4">
          <el-form :model="formData" :rules="rules" ref="formData" label-width="110px" class="demo-formData">
					  <el-form-item label="店铺名称：" prop="name">
             <el-input placeholder="请输入内容" v-model="formData.name"  clearable ></el-input>
           </el-form-item>

           <el-form-item label="联系电话：" prop="cash">
             <el-input  v-model="formData.cash" placeholder="请输入手机号码" clearable>
             </el-input>
           </el-form-item>
            
            <el-form-item label="详细地址" prop="type">
						<el-autocomplete
						  v-model="formData.type"
						  :fetch-suggestions="querySearchAsync"
						  placeholder="请输入地址"
						  style="width: 100%;"
						  @select="addressSelect"
						></el-autocomplete>
						<span>当前城市：{{name}}</span>
					</el-form-item>

             <el-form-item label="店铺分类：" prop=""> 
               <el-cascader 
                v-model="selectedCategory"
                :options="options"
               
                clearable
                >
               </el-cascader>
             </el-form-item>
           
             <el-form-item label="店铺特点：" style="white-space: nowrap;">
               <span>品牌保证</span> 
               <el-switch  on-text="" off-text="" v-model="formData.ping_mode"></el-switch>
               <span>新店开张</span> 
               <el-switch  on-text="" off-text="" v-model="formData.xdkz"></el-switch>
               <span>蜂鸟专送</span> 
               <el-switch  on-text="" off-text="" v-model="formData.fnzs"></el-switch>
             </el-form-item>
            <el-form-item label="配送费：">
             <el-input-number  v-model="formData.num" @change="handleccc" :min="0" :max="10" ></el-input-number>
            </el-form-item>

          <el-form-item label="起送价：">
             <el-input-number  v-model="formData.sob" @change="handleccc" :min="0" :max="30" ></el-input-number>
            </el-form-item>

            <el-form-item label="营业时间：">
              <el-time-select  placeholder="营业时间" v-model=" formData.soTime" :picker-options="{start: '05:30', step:'00:15',end:'23:30'}">
              </el-time-select>
              <el-time-select  placeholder="结束时间" v-model=" formData.endTime" :picker-options="{start: '05:30', step:'00:15',end:'23:30',minTime: soTime}">
              </el-time-select>
            </el-form-item>

            <el-form-item label="上传照片">
              <!-- <el-upload class="avatar-uploader" 
              :show-file-list="false"
               action="https://jsonplaceholder.typicode.com/posts/"
               :on-success="handleShopAvatarScucess"
                :before-upload="beforeAvatarUpload" >
                <img v-if="fromData.image_path" :src="baseImgPath + formData.image_path" class="avatar">
  
              </el-upload> -->
            </el-form-item>


          <el-form-item label="备注：">
             <el-input type="textarea" v-model="formData.remark">
             </el-input>
           </el-form-item>
          </el-form>
        </el-col>
      </el-row>
            <el-form 
      ref="form" 
      :model="formData"
      :rules="form_rules"
      label-width="120px"
      style="marign:10px;width:auto;"
      
      >

      </el-form>

  </div>
</template>

<script>
export default {
  data(){
    return{
      input: '',
      formData:{
         name:'',
         type:'',
         describe:'',
         remark:'',
         cash:'',
         ping_mode:true,
         fnzs:true,
         xdkz:true,

         num:1,
         sob:15,

         soTime:'',
         endTime:'',
         
         },
          categoryOptions: [],
			    selectedCategory: ['快餐便当', '简餐'],

      rules:{
        name: [
						{ required: true, message: '请填写店铺名称', trigger: 'blur'},
          ],
        cash: [
            { required: true, message: '请填写手机号码',trigger: 'blur'},
          ],
        type:[
            { required: true, message: '请填写地址',trigger: 'blur'},
          ],


      },
      methods: {
        handccc(value){
          console.log(value)
        }
      },
      
         options: [{
          value: 'yiguoliaoli',
          label: '异国料理',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'tianpinyinpin',
          label: '甜品饮品',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }],
    }

  }

}
</script>

<style>

</style>