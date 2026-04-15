<template>
    <el-row>
        <el-col :span="20">
            <el-image style="height: 50px" src="/image/welcome.png"></el-image>
        </el-col>
        <el-col :span="4">
            <el-select v-model="value" placeholder="请选择" @change="handlerChange">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
        </el-col>
    </el-row>
</template>
<script>
export default {
    name: 'HeadBanner',
    data() {
        return {
            value: 'admin',
            options: [
                {
                    value: 'admin',
                    label: 'admin'
                },
                {
                    value: 'setting',
                    label: '设置'
                },
                {
                    value: 'logout',
                    label: '退出'
                }
            ]
        }
    },
    methods: {
        handlerChange(value) {
            if (value === 'logout') {
                // 处理退出逻辑，例如清除用户信息、跳转到登录页等
                localStorage.removeItem('userInfo'); // 清除用户信息
                this.$router.push('/'); // 跳转到登录页
            } else if (value === 'setting') {
                // 处理设置逻辑，例如跳转到设置页面等
                this.$router.push('/settings'); // 假设有一个设置页面
            }
        }   
    }
}
</script>