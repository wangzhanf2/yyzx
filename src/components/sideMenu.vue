<template>
    <h1>东软颐养中心</h1>
    <el-image style="width: 150px; height: 150px" src="/image/logo.png"></el-image>

    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu default-active="1-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
        :collapse="isCollapse">
        <el-sub-menu index="1">
            <template #title>
                <el-icon><MessageBox /></el-icon>
                <span>床位管理</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="1-1"><router-link to="/layout/bed">床位示意图</router-link></el-menu-item>
                <el-menu-item index="1-2">床位管理</el-menu-item>
            </el-menu-item-group>


        </el-sub-menu>
        <el-sub-menu index="2">
            <template #title>
                <el-icon>
                    <User />
                </el-icon>
                <span>客户管理</span>
            </template>
            <el-menu-item-group>
                <router-link to="/layout/user"><el-menu-item index="2-1">用户管理</el-menu-item></router-link>
                <el-menu-item index="2-2">入住登记</el-menu-item>
                <el-menu-item index="2-3">外出登记</el-menu-item>
                <el-menu-item index="2-4">退住登记</el-menu-item>
            </el-menu-item-group>


        </el-sub-menu>
    </el-menu>
</template>

<script>
export default {
    name: 'SideMenu',
    data() {
        return {
            isCollapse: false,
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath)
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath)
        },
    },
}
</script>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>