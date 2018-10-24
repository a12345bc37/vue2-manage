<template>
    <div>
     	<head-top></head-top>
        <el-row style="margin-top: 20px;">
  			<el-col :span="14" :offset="4">
	  			<header class="form_header">添加文章</header>
	  			<el-form :model="foodForm" :rules="foodrules" ref="foodForm" label-width="110px" class="form food_form">
	  				<el-form-item label="文章标题" prop="title">
						<el-input v-model="foodForm.title"></el-input>
					</el-form-item>
					<el-form-item label="文章简述" prop="subtitle">
						<el-input v-model="foodForm.subtitle"></el-input>
					</el-form-item>
					<!-- <el-form-item label="文章详情" prop="content">
						<el-input v-model="foodForm.content"></el-input>
					</el-form-item> -->
					<el-form-item label="上传LOGO图片">
						<el-upload
						  class="avatar-uploader"
						  :action="baseUrl + '/upload/brandPic'"
						  :show-file-list="false"
						  :on-success="uploadImg"
						  :before-upload="beforeImgUpload">
						  <img v-if="foodForm.item_pic_url" :src="foodForm.item_pic_url" class="avatar">
						  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
						</el-upload>
					</el-form-item>
					<el-form-item label="详情">
						<quill-editor v-model="foodForm.content"
							ref="myQuillEditor"
							class="editer"
							:options="editorOption"
							@ready="onEditorReady($event)">
						</quill-editor>
					</el-form-item>
					<el-form-item label="分类" style="margin-top:130px;">
						<el-select v-model="categoryForm.categorySelect" :placeholder="selectValue.label" style="width:100%;">
							<el-option
								v-for="item in categoryForm.categoryList"
								:key="item.value"
								:label="item.label"
								:value="item.value">
							</el-option>
						</el-select>
					</el-form-item>
					
					<el-form-item>
						<el-button type="primary" @click="addFood('foodForm')">确认添加食品</el-button>
					</el-form-item>
	  			</el-form>
	  			<el-dialog title="添加规格" v-model="dialogFormVisible">
				  	<el-form :rules="specsFormrules" :model="specsForm">
					    <el-form-item label="规格" label-width="100px" prop="specs">
					     	<el-input v-model="specsForm.specs" auto-complete="off"></el-input>
					    </el-form-item>
					    <el-form-item label="包装费" label-width="100px">
							<el-input-number v-model="specsForm.packing_fee" :min="0" :max="100"></el-input-number>
						</el-form-item>
						<el-form-item label="价格" label-width="100px">
							<el-input-number v-model="specsForm.price" :min="0" :max="10000"></el-input-number>
						</el-form-item>
				  	</el-form>
				  <div slot="footer" class="dialog-footer">
				    <el-button @click="dialogFormVisible = false">取 消</el-button>
				    <el-button type="primary" @click="addspecs">确 定</el-button>
				  </div>
				</el-dialog>
  			</el-col>
  		</el-row>
    </div>
</template>

<script>
import headTop from "@/components/headTop";
import { getCategoryList, addCategory, addFood } from "@/api/getData";
import { baseUrl, baseImgPath } from "@/config/env";
import { quillEditor } from 'vue-quill-editor';
export default {
    data() {
        return {
            baseUrl,
            baseImgPath,
            restaurant_id: 1,
            categoryForm: {
                categoryList: [],
                categorySelect: "",
                name: "",
                description: ""
            },
            foodForm: {
                title: "",
                subtitle: "",
                item_pic_url: "",
                content: ""
            },
            foodrules: {
                name: [
                    {
                        required: true,
                        message: "请输入食品名称",
                        trigger: "blur"
                    }
                ]
            },
            attributes: [
                {
                    value: "新",
                    label: "新品"
                },
                {
                    value: "招牌",
                    label: "招牌"
                }
            ],
            showAddCategory: false,
            foodSpecs: "one",
            dialogFormVisible: false,
            specsForm: {
                specs: "",
                packing_fee: 0,
                price: 20
            },
            specsFormrules: {
                specs: [
                    { required: true, message: "请输入规格", trigger: "blur" }
                ]
            }
        };
    },
    components: {
        headTop,
    	quillEditor
    },
    created() {
        this.initData();
    },
    computed: {
        selectValue: function() {
            return (
                this.categoryForm.categoryList[
                    this.categoryForm.categorySelect
                ] || {}
            );
		},
		editor() {
	        	return this.$refs.myQuillEditor.quill
	      	}
    },
    methods: {
        async initData() {
            try {
                const result = await getCategoryList();
                //debugger;
                if (result.errno == 0) {
                    result.data.data.map((item, index) => {
                        item.value = item.id;
                        item.label = item.title;
                    });
                    this.categoryForm.categoryList = result.data.data;
                } else {
                    console.log(result);
                }
            } catch (err) {
                console.log(err);
            }
        },
        addCategoryFun() {
            this.showAddCategory = !this.showAddCategory;
        },
        submitcategoryForm(categoryForm) {
            this.$refs[categoryForm].validate(async valid => {
                if (valid) {
                    const params = {
                        name: this.categoryForm.name,
                        description: this.categoryForm.description,
                        restaurant_id: this.restaurant_id
                    };
                    try {
                        const result = await addCategory(params);
                        if (result.status == 1) {
                            this.initData();
                            this.categoryForm.name = "";
                            this.categoryForm.description = "";
                            this.showAddCategory = false;
                            this.$message({
                                type: "success",
                                message: "添加成功"
                            });
                        }
                    } catch (err) {
                        console.log(err);
                    }
                } else {
                    this.$notify.error({
                        title: "错误",
                        message: "请检查输入是否正确",
                        offset: 100
                    });
                    return false;
                }
            });
        },
        uploadImg(res, file) {
            if (res.errno == 0) {
                this.foodForm.item_pic_url = res.data.fileUrl;
            } else {
                this.$message.error("上传图片失败！");
            }
        },
        beforeImgUpload(file) {
            const isRightType =
                file.type === "image/jpeg" || file.type === "image/png";
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isRightType) {
                this.$message.error("上传头像图片只能是 JPG 格式!");
            }
            if (!isLt2M) {
                this.$message.error("上传头像图片大小不能超过 2MB!");
            }
            return isRightType && isLt2M;
        },
        addspecs() {
            this.foodForm.specs.push({ ...this.specsForm });
            this.specsForm.specs = "";
            this.specsForm.packing_fee = 0;
            this.specsForm.price = 20;
            this.dialogFormVisible = false;
        },
        handleDelete(index) {
            this.foodForm.specs.splice(index, 1);
        },
        tableRowClassName(row, index) {
            if (index === 1) {
                return "info-row";
            } else if (index === 3) {
                return "positive-row";
            }
            return "";
        },
        addFood(foodForm) {
            this.$refs[foodForm].validate(async valid => {
                if (valid) {
                    const params = {
                        ...this.foodForm,
                        topic_category_id: this.selectValue.id
                    };
                    try {
                        const result = await addFood(params);
                        if (result.errno == 0) {
                            console.log(result);
                            this.$message({
                                type: "success",
                                message: "添加成功"
                            });
                            this.foodForm = {
                                title: "",
                                subtitle: "",
                                item_pic_url: "",
                                content: ""
							};
							this.$router.push({ path: 'foodlist'})
                        } else {
                            this.$message({
                                type: "error",
                                message: result.message
                            });
                        }
                    } catch (err) {
                        console.log(err);
                    }
                } else {
                    this.$notify.error({
                        title: "错误",
                        message: "请检查输入是否正确",
                        offset: 100
                    });
                    return false;
                }
            });
        }
    }
};
</script>

<style lang="less">
@import "../style/mixin";
.form {
    min-width: 400px;
    margin-bottom: 30px;
    &:hover {
        box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
            0 2px 4px 0 rgba(232, 237, 250, 0.5);
        border-radius: 6px;
        transition: all 400ms;
    }
}
.food_form {
	height: 800px;
    border: 1px solid #eaeefb;
    padding: 10px 10px 0;
}
.form_header {
    text-align: center;
    margin-bottom: 10px;
}
.category_select {
    border: 1px solid #eaeefb;
    padding: 10px 30px 10px 10px;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
}
.add_category_row {
    height: 0;
    overflow: hidden;
    transition: all 400ms;
    background: #f9fafc;
}
.showEdit {
    height: 185px;
}
.add_category {
    background: #f9fafc;
    padding: 10px 30px 0px 10px;
    border: 1px solid #eaeefb;
    border-top: none;
}
.add_category_button {
    text-align: center;
    line-height: 40px;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
    border: 1px solid #eaeefb;
    border-top: none;
    transition: all 400ms;
    &:hover {
        background: #f9fafc;
        span,
        .edit_icon {
            color: #20a0ff;
        }
    }
    span {
        .sc(14px, #999);
        transition: all 400ms;
    }
    .edit_icon {
        color: #ccc;
        transition: all 400ms;
    }
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
