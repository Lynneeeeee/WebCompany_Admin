<template>
    <el-aside :width="$store.state.isCollapsed?'64px':'230px'">
        <el-menu 
        active-text-color="#00FFFF"
        background-color="#1C1C1C"
        text-color="#DCDCDC"
        :collapse="$store.state.isCollapsed" 
        :collapse-transition = "false" 
        :router = "true"
        :default-active="route.fullPath"
        class="el-menu-vertical-demo"
        default-active="2">
        <!-- router: open vue-router mode, will navigate to index as path -->

            <el-menu-item index="/index">
            <el-icon><HomeFilled/></el-icon>
            <span>Home</span>
            </el-menu-item>

            <el-menu-item index="/center">
            <el-icon><Avatar /></el-icon>
            <span>Your Account</span>
            </el-menu-item>

            <el-sub-menu index="/user-manage">
            <template #title>
                <el-icon><User /></el-icon>
                <span>User Management</span>
            </template>
            <el-menu-item-group title="user-manage">
                <el-menu-item index="/user-manage/adduser">Add User</el-menu-item>
                <el-menu-item index="/user-manage/listuser">Users List</el-menu-item>
            </el-menu-item-group>
            </el-sub-menu>
        
            <el-sub-menu index="/news-manage">
            <template #title>
                <el-icon><MessageBox/></el-icon>
                <span>News Management</span>
            </template>
            <el-menu-item-group title="news-manage">
                <el-menu-item index="/news-manage/addnews">Add News</el-menu-item>
                <el-menu-item index="/news-manage/listnews">News List</el-menu-item>
            </el-menu-item-group>
            </el-sub-menu>

            <el-sub-menu index="/prod-manage">
            <template #title>
                <el-icon><Reading /></el-icon>
                <span>Product Management</span>
            </template>
            <el-menu-item-group title="/prod-manage">
                <el-menu-item index="/prod-manage/addprod">Add product</el-menu-item>
                <el-menu-item index="/prod-manage/listprod">Products List</el-menu-item>
            </el-menu-item-group>
            </el-sub-menu>

            <el-sub-menu index="/prod-manage">
            <template #title>
                <el-icon><Reading /></el-icon>
                <span>Product Management</span>
            </template>
            <el-menu-item-group title="/prod-manage">
                <el-menu-item index="/prod-manage/addprod">Add product</el-menu-item>
                <el-menu-item index="/prod-manage/listprod">Products List</el-menu-item>
            </el-menu-item-group>
            </el-sub-menu>

            <el-sub-menu index="/prod-manage">
            <template #title>
                <el-icon><Reading /></el-icon>
                <span>Product Management</span>
            </template>
            <el-menu-item-group title="/prod-manage">
                <el-menu-item index="/prod-manage/addprod">Add product</el-menu-item>
                <el-menu-item index="/prod-manage/listprod">Products List</el-menu-item>
            </el-menu-item-group>
            </el-sub-menu>

        </el-menu>
    </el-aside>
</template>

<script setup>
import { HomeFilled,Avatar,User,MessageBox,Reading,Pointer } from '@element-plus/icons-vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style lang = "scss" scoped>
::-webkit-scrollbar{
    width: 10px;
    position: absolute
}

::-webkit-scrollbar-thumb{
    height: 50px;
    background-image: -webkit-linear-gradient(90deg, #eaf979, #8aed71, #4fbef6);
    -webkit-border-radius: 4px;
    outline: 2px solid #fff;
    outline-offset: -2px;
    border: 2px solid #fff;
}
// make the sidebar fill the height of screen
.el-menu{
    height: 100vh;
    // background-color: black;
    // color: var(--text-color) !important;
}
</style>