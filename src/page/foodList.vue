<template>
    <div class="fillcontain">
        <head-top></head-top>
        <div class="table_container">
            <el-table
                :data="tableData"
                @expand='expand'
                :expand-row-keys='expendRow'
                :row-key="row => row.index"
                style="width: 100%">
                <el-table-column type="expand">
                  <template slot-scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
                      <el-form-item label="文章详情">
                        <span>{{ props.row.content }}</span>
                      </el-form-item>
                    </el-form>
                  </template>
                </el-table-column>
                <el-table-column
                  label="文章标题"
                  prop="title">
                </el-table-column>
                <el-table-column
                  label="文章简述"
                  prop="subtitle">
                </el-table-column>
               
                <el-table-column label="操作" width="160">
                  <template slot-scope="scope">
                    <el-button
                      size="small"
                      @click="handleEdit(scope.row)">编辑</el-button>
                    <el-button
                      size="small"
                      type="danger"
                      @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                  </template>
                </el-table-column>
            </el-table>
            <div class="Pagination">
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-size="10"
                  layout="total, prev, pager, next"
                  :total="count">
                </el-pagination>
            </div>
            <el-dialog title="修改食品信息" v-model="dialogFormVisible">
                <el-form :model="selectTable">
                    <el-form-item label="文章名称" label-width="100px">
                        <el-input v-model="selectTable.title" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="文章简述" label-width="100px">
                        <el-input v-model="selectTable.subtitle"></el-input>
                    </el-form-item>
                    <el-form-item label="分类" label-width="100px">
						<el-select v-model="selectIndex" :placeholder="selectMenu.label" @change="handleSelect" style="width:100%;">
							<el-option
								v-for="item in menuOptions"
								:key="item.value"
                                :label="item.label"
                                :value="item.index">
							</el-option>
						</el-select>
					</el-form-item>
                    <el-form-item label="" label-width="100px">
                        <el-upload
                          class="avatar-uploader"
                          :action="baseUrl + '/upload/brandPic'"
                          :show-file-list="false"
                          :on-success="handleServiceAvatarScucess"
                          :before-upload="beforeAvatarUpload">
                          <img v-if="selectTable.item_pic_url" :src="selectTable.item_pic_url" class="avatar">
                          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="详情">
						<quill-editor v-model="selectTable.content"
							ref="myQuillEditor"
							class="editer"
							:options="editorOption"
							@ready="onEditorReady($event)">
						</quill-editor>
					</el-form-item>
                    
                   
                </el-form>
              <div slot="footer" class="dialog-footer" style="margin-top:40px;">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="addFood">确 定</el-button>
              </div>
            </el-dialog>


            
        </div>
    </div>
</template>

<script>
    import headTop from '../components/headTop'
    import {baseUrl, baseImgPath} from '@/config/env'

import { quillEditor } from 'vue-quill-editor';
    import {getCategoryList,getTopic, getTopicCount, getMenu, addFood, deletetTopic, topicInfo, topicCategoryInfo} from '@/api/getData'
    export default {
        data(){
            return {
                baseUrl,
                baseImgPath,
                restaurant_id: null,
                city: {},
                offset: 0,
                limit: 10,
                count: 0,
                tableData: [],
                currentPage: 1,
                selectTable: {},
                dialogFormVisible: false,
                menuOptions: [],
                selectMenu: {},
                selectIndex: null,
                specsForm: {
		          	specs: '',
		          	packing_fee: 0,
		          	price: 20,
		        },
		        specsFormVisible: false,
                expendRow: [],
            }
        },
        created(){
            //debugger;
        	//this.restaurant_id = this.$route.query.restaurant_id;
            this.initData();
        },
        computed: {
        	specs: function (){
        		let specs = [];
        		if (this.selectTable.specfoods) {
	        		this.selectTable.specfoods.forEach(item => {
	        			specs.push({
	        				specs: item.specs_name,
	        				packing_fee: item.packing_fee,
	        				price: item.price,
	        			})
	        		})
        		}
        		return specs
        	}
        },
    	components: {
            headTop,
            quillEditor
    	},
        methods: {
            async initData(){
                 //this.getTopic();
                try{
                    const countData = await getTopicCount();
                    if (countData.errno == 0) {
                        this.count = countData.data;
                    }else{
                        throw new Error('获取数据失败');
                    }
                     this.getTopic();
                }catch(err){
                    console.log('获取数据失败', err);
                }
            },
            async getMenu(){
                //debugger;
            	this.menuOptions = [];
                try{
                    const menu = await getCategoryList();
                    menu.data.data.forEach((item, index) => {
                        this.menuOptions.push({
                        	label: item.title,
                        	value: item.id,
                        	index,
                        })
                    })
                }catch(err){
                    console.log('获取食品种类失败', err);
                }
            },
            async getTopic(){
                const result = await getTopic({page: this.offset, size: this.limit, restaurant_id: this.restaurant_id});
                this.count =result.data.count;
                this.tableData = [];
                result.data.data.forEach((item, index) => {
                    const tableData = {};
                    tableData.title = item.title;
                    tableData.subtitle = item.subtitle;
                    tableData.content = item.content;
                    tableData.item_id = item.id;
                    tableData.index = index;
                    tableData.category_id = item.topic_category_id;
                    this.tableData.push(tableData);
                })
            },
            tableRowClassName(row, index) {
		        if (index === 1) {
		        	return 'info-row';
		        } else if (index === 3) {
		        	return 'positive-row';
		        }
		        return '';
		    },
		    addspecs(){
				this.specs.push({...this.specsForm});
				this.specsForm.specs = '';
				this.specsForm.packing_fee = 0;
				this.specsForm.price = 20;
				this.specsFormVisible = false;
			},
			deleteSpecs(index){
				this.specs.splice(index, 1);
			},
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                this.offset = (val - 1)*this.limit;
                this.getTopic()
            },
            expand(row, status){
            	if (status) {
            		this.getSelectItemData(row)
            	}else{
                    const index = this.expendRow.indexOf(row.index);
                    this.expendRow.splice(index, 1)
                }
            },
            handleEdit(row) {
            	this.getSelectItemData(row, 'edit')
                this.dialogFormVisible = true;
            },
            async getSelectItemData(row, type){
              
                const restaurant = await topicInfo({id:row.item_id});
                //debugger;
            	const category = await topicCategoryInfo({id:row.category_id});
                this.selectTable = {...row, ...{title: restaurant.data.title, subtitle: restaurant.data.subtitle,
                content:restaurant.data.content, category_name: category.data.title,item_pic_url:restaurant.data.item_pic_url}};

                this.selectMenu = {label: category.name, value: row.category_id}
                this.tableData.splice(row.index, 1, {...this.selectTable});
                
                this.$nextTick(() => {
                    this.expendRow.push(row.index);
                })
                if (type == 'edit') {
                	this.getMenu();
                }
            },
            handleSelect(index){
            	this.selectIndex = index;
            	this.selectMenu = this.menuOptions[index];
            },
            async handleDelete(index, row) {
                try{
                    const res = await deletetTopic({ id: row.item_id});
                    if (res.errno == 0) {
                        this.$message({
                            type: 'success',
                            message: '删除成功'
                        });
                        this.tableData.splice(index, 1);
                    }else{
                        throw new Error(res.message)
                    }
                }catch(err){
                    this.$message({
                        type: 'error',
                        message: err.message
                    });
                    console.log('删除食品失败')
                }
            },
            handleServiceAvatarScucess(res, file) {
                if (res.errno == 0) {
                    this.selectTable.image_path = res.data.fileUrl;
                }else{
                    this.$message.error('上传图片失败！');
                }
            },
            beforeAvatarUpload(file) {
                const isRightType = (file.type === 'image/jpeg') || (file.type === 'image/png');
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isRightType) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isRightType && isLt2M;
            },
            async addFood(){
                this.dialogFormVisible = false;
                try{
                    //const subData = {topic_category_id: this.selectMenu.value};
                    const postData={
                        title:this.selectTable.title,
                        subtitle:this.selectTable.subtitle,
                        item_pic_url:this.selectTable.item_pic_url,
                        content:this.selectTable.content,
                        topic_category_id: this.selectMenu.value
                    }
                    //const postData = {...this.selectTable, ...subData};
                    debugger;
                    const res = await addFood(postData)
                    if (res.errno == 0) {
                        this.$message({
                            type: 'success',
                            message: '更新信息成功'
                        });
                        this.getTopic();
                    }else{
                        this.$message({
                            type: 'error',
                            message: res.message
                        });
                    }
                }catch(err){
                    console.log('更新信息失败', err);
                }
            },
        },
    }
</script>

<style lang="less">
    @import '../style/mixin';
    .el-dialog--small{width: 80%;}
    .demo-table-expand {
        font-size: 0;
    }
    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }
    .table_container{
        padding: 20px;
    }
    .Pagination{
        display: flex;
        justify-content: flex-start;
        margin-top: 8px;
    }
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #20a0ff;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 120px;
        height: 120px;
        line-height: 120px;
        text-align: center;
    }
    .avatar {
        width: 120px;
        height: 120px;
        display: block;
    }
     .ql-container .ql-snow
    {
        height: 240px;
    }
    .cell {
    text-align: center;
}
    .edit_container{
		padding: 40px;
		margin-bottom: 40px;
    }
   
	.editer{
		 height: 280px;
	}
</style>
