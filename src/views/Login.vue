<template>
    <el-row>
        <el-col :xs="{ span: 24, offset: 0 }" :sm="{ span: 12, offset: 6 }">
            <el-form :model="formData" ref="formData">
                <el-form-item label="">
                    <el-input @input="validateForm" placeholder="请输入用户名" clearable prefix-icon="User" v-model="formData.username"></el-input>
                </el-form-item>
                <el-form-item label="">
                    <el-input @input="validateForm" placeholder="请输入密码" show-password prefix-icon="Key"
                        v-model="formData.password"></el-input>
                </el-form-item>
                <el-form-item label="">
                    <el-select @change="validateForm" v-model="formData.usertype" placeholder="请选择">
                        <el-option v-for="item in formData.usertype" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>


                <el-form-item label="">
                    <el-button :disabled="formData.checkNoPass" type="success" style="width: 100%;" @click="handleLogin"><el-icon>
                            <Lock />
                        </el-icon> 登 录 </el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>
<script>

export default {
    name: 'UserLogin',
    data() {
        return {
            formData: {
                username: '',
                password: '',
                usertype: [{
                    value: 0,
                    label: '系统管理员'
                }, {
                    value: 1,
                    label: '护工'
                }],
                checkNoPass:true
            },
            bindData: [{
                username: 'admin',
                password: 'admin',
                usertype: '0'
            }, {
                username: 'admin1',
                password: 'admin1',
                usertype: '0'
            }, {
                username: 'admin2',
                password: 'admin2',
                usertype: '0'
            }]
        }
    },
    methods: {
        validateForm() {
            this.formData.checkNoPass = (this.formData.username==='' || this.formData.password==='' || (this.formData.usertype.value!==0 && this.formData.usertype.value!==1))
        },
        handleLogin() {
            console.log(this.formData);
            
        }
    }   
}
</script>