<template>
    <div>
        <head-top></head-top>
        <el-row style="margin-top: 20px;">
  			<el-col :span="12" :offset="4">
		        <el-form :model="formData" :rules="rules" ref="formData" label-width="110px" class="demo-formData">
					<el-form-item label="栏目名称" prop="title">
						<el-input v-model="formData.title"></el-input>
					</el-form-item>
					

					<el-form-item label="栏目背景图">
						<el-upload
						  class="avatar-uploader"
						  :headers="req=111"
						  :action="baseUrl + '/upload/brandPic'"
						  :show-file-list="false"
						  :on-success="handleShopAvatarScucess"
						  :data="req=11"
						  :before-upload="beforeAvatarUpload">
						  <img v-if="formData.pic_url" :src="formData.pic_url" class="avatar">
						  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
						</el-upload>
					</el-form-item>
					
					
					<el-form-item class="button_submit">
						<el-button type="primary" @click="submitForm('formData')">立即创建</el-button>
					</el-form-item>
					<el-table
					    :data="tableData"
					    style="width: 600px;margin-bottom: 20px;"
						align="cneter"
					    :row-class-name="tableRowClassName">
					    <el-table-column
					      prop="title"
					      label="栏目名称"
					      align="cneter"
					      width="120">
					    </el-table-column>
					    <el-table-column
					      prop="title"
					      label="栏目名称"
					      align="cneter"
					      width="120">
					    </el-table-column>
						
					    <el-table-column
					    	label="操作"
					    	width="120">
					    <template slot-scope="scope">
					        <el-button
					          size="small"
					          type="danger"
					          @click="handleDelete(scope.$index)">删除</el-button>
					    </template>
					    </el-table-column>
					</el-table>
				</el-form>
  			</el-col>
  		</el-row>
		  
    </div>
</template>

<script>
import headTop from "@/components/headTop";
import {
    cityGuess,
    addTopicCategory,
    searchplace,
    getCategoryList
} from "@/api/getData";
import { baseUrl, baseImgPath } from "@/config/env";

export default {
    data() {
        return {
            city: {},
            formData: {
                title: "", //店铺名称
                pic_url: ""
            },
            rules: {
                title: [
                    {
                        required: true,
                        message: "请输入栏目名称",
                        trigger: "blur"
                    }
                ]
            },
            baseUrl,
			baseImgPath,
			tableData:[]
        };
    },
    components: {
        headTop
    },
    mounted() {
        this.initData();
    },
    methods: {
        async initData() {
            try {
				const res = await getCategoryList();
				
                if (res.errno == 0) {
                    this.tableData = [];
                    res.data.data.forEach(item => {
                        const tableItem = {
                            title: item.title
                        };
                        this.tableData.push(tableItem);
                    });
                } else {
                    throw new Error(res.message);
                }
            } catch (err) {
                console.log(err);
            }
        },
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        async querySearchAsync(queryString, cb) {
            if (queryString) {
                try {
                    const cityList = await searchplace(
                        this.city.id,
                        queryString
                    );
                    if (cityList instanceof Array) {
                        cityList.map(item => {
                            item.value = item.address;
                            return item;
                        });
                        cb(cityList);
                    }
                } catch (err) {
                    console.log(err);
                }
            }
        },
        handleShopAvatarScucess(res, file) {
            if (res.errno == 0) {
                this.formData.pic_url = res.data.fileUrl;
            } else {
                this.$message.error("上传图片失败！");
            }
        },
        handleBusinessAvatarScucess(res, file) {
            if (res.errno == 0) {
                this.formData.business_license_image = res.data.fileUrl;
            } else {
                this.$message.error("上传图片失败！");
            }
        },
        handleServiceAvatarScucess(res, file) {
            if (res.errno == 0) {
                this.formData.catering_service_license_image = res.data.fileUrl;
            } else {
                this.$message.error("上传图片失败！");
            }
        },
        beforeAvatarUpload(file) {
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
        tableRowClassName(row, index) {
            if (index === 1) {
                return "info-row";
            } else if (index === 3) {
                return "positive-row";
            }
            return "";
        },
        handleDelete(index) {
            this.activities.splice(index, 1);
        },
        submitForm(formName) {
            this.$refs[formName].validate(async valid => {
                if (valid) {
                    Object.assign(this.formData, {
                        activities: this.activities
                    });
                    try {
                        let result = await addTopicCategory(this.formData);
                        if (result.status == 1) {
                            this.$message({
                                type: "success",
                                message: "添加成功"
                            });
                            this.formData = {
                                title: "", //店铺名称
                                pic_url: ""
                            };
                        } else {
                            this.$message({
                                type: "error",
                                message: result.message
                            });
                        }
                        console.log(result);
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
<style>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.avatar-uploader .el-upload:hover {
    border-color: #409eff;
}
.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}
.avatar {
    width: 178px;
    height: 178px;
    display: block;
}
</style>
<style lang="less">
@import "../style/mixin";
.button_submit {
    text-align: center;
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
.el-table .info-row {
    background: #c9e5f5;
}

.el-table .positive-row {
    background: #e2f0e4;
}
</style>
