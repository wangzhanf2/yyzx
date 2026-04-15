<template>
    <el-row>
        <el-col :xs="{ span: 24, offset: 0 }" :sm="{ span: 12, offset: 6 }">
            <el-form :model="formData" ref="formData">
                <el-form-item label="">
                    <el-input @input="validateForm" placeholder="请输入用户名" clearable prefix-icon="User"
                        v-model="formData.username"></el-input>
                </el-form-item>
                <el-form-item label="">
                    <el-input @input="validateForm" placeholder="请输入密码" show-password prefix-icon="Key"
                        v-model="formData.password"></el-input>
                </el-form-item>
                <el-form-item label="">
                    <el-select @select="validateForm" v-model="formData.usertype" placeholder="请选择">
                        <el-option v-for="item in userTypeList" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="">
                    <el-button :disabled="formData.checkNoPass" type="success" style="width: 100%;"
                        @click="handleLogin"><el-icon>
                            <Lock />
                        </el-icon> 登 录 </el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>
<script>
import { ElMessage } from 'element-plus'

export default {
    name: 'UserLogin',
    data() {
        return {
            formData: {
                username: '',
                password: '',
                usertype:0,
                checkNoPass: true
            },
            userTypeList: [
                {
                    value: 0,
                    label: '管理员'
                },
                {
                    value: 1,
                    label: '健康管家'
                }
            ],
            bindData: [{
                username: 'admin',
                password: 'admin',
                usertype: 0
            }, {
                username: 'admin1',
                password: 'admin1',
                usertype: 0
            }, {
                username: 'admin2',
                password: 'admin2',
                usertype: 0
            }, {
                username: 'user1',
                password: 'user1',
                usertype: 1
            }]
        }
    },
    methods: {
        validateForm() {
            this.formData.checkNoPass = (this.formData.username === '' || this.formData.password === '' || this.formData.usertype === '');
        },
        handleLogin() {
            console.log(this.formData);
            let flag = false;
            for (let index = 0; index < this.bindData.length; index++) {
                if (this.bindData[index].username === this.formData.username && this.bindData[index].password === this.formData.password && this.bindData[index].usertype === this.formData.usertype) {
                    flag = true;
                }
            }

            if (flag) {
                ElMessage.success({
                    message: '恭喜你，登录成功',
                    type: 'success',
                })
                //将用户登录信息记录到  localStorge
                localStorage.setItem('userInfo', JSON.stringify(this.formData))   
                this.$router.push('/layout') // 编程式路由跳转  登录成功后跳转到布局页面
            } else {
                ElMessage.error({
                    message: '登录失败，请检查用户名、密码和用户类型是否正确',
                    type: 'error',
                })
            }
        }
    }
}
</script>