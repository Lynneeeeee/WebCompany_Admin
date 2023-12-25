<template>
    <el-aside :width=auto>
        <el-menu :collapse="$store.state.isCollapsed" :collapse-transition = "true">

            <el-menu-item index="/home">
            <el-icon><HomeFilled/></el-icon>
            <span>Home</span>
            </el-menu-item>

            <el-menu-item index="/center">
            <el-icon><Avatar /></el-icon>
            <span>Profile</span>
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
                <el-menu-item index="news-manage/addnews">Add News</el-menu-item>
                <el-menu-item index="news-manage/listnews">News List</el-menu-item>
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
import {HomeFilled,Avatar,User,MessageBox,Reading,Pointer} from '@element-plus/icons-vue'
</script>