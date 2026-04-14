<template>
    <el-row>
        <el-col :span="20">
            <el-image style="height: 50px" :src="require('@/assets/image/welcome.png')"></el-image>
        </el-col>
        <el-col :span="4">
            <el-select v-model="value" placeholder="请选择">
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

    }
}
</script>