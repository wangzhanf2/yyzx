<template>
    <el-container>
        <el-aside width="200px">
            <SideMenu></SideMenu>
        </el-aside>
        <el-container>
            <el-header>
                <HeadBanner></HeadBanner>
            </el-header>
            <el-main><router-view></router-view></el-main>
            <el-footer>
                <FooterInfo></FooterInfo>
            </el-footer>
        </el-container>
    </el-container>


</template>

<script>
import FooterInfo from '@/components/footerInfo.vue';
import HeadBanner from '@/components/headBanner.vue';
import SideMenu from '@/components/sideMenu.vue';

export default {
    name: 'FullLayout',
    components: {
        SideMenu,
        HeadBanner,
        FooterInfo
    },
    data() {
        return {
            // 这里可以定义一些全局的数据
        }
    },
    methods: {
        // 这里可以定义一些全局的方法   
    }
}
</script>