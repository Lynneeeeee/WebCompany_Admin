<!-- The main scene after login -->
<template>
    <el-container  class = "screen" direction = "vertical">
        <TopHeader/>
        <el-container direction = "horizontal">
            <SideMenu/>
            <el-main>
                <router-view>

                </router-view>
            </el-main>
        </el-container>
    </el-container>
</template>


<script setup >
import SideMenu from '@/components/mainbox/SideMenu.vue';
import TopHeader from '@/components/mainbox/TopHeader.vue';
</script>

<style lang = "scss" scoped>
.screen{
    height: 100vh;
}
 </style>