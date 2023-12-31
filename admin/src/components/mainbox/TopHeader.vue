<template>
    <el-header>
        <!-- <button @click = "handleCollapse">Hide sidebar</button> -->
        <div class="left">
            <el-icon @click="handleCollapse"><Menu  /></el-icon>
            <span style="margin-left: 10px;">Web Company Management System</span>
        </div>
        <div class="right">
            <span style="margin-right: 10px;" color="white">
                    Welcom! {{ $store.state.userInfo.username }}
            </span>
            <el-dropdown>
                <el-icon :size="25" color="white">
                    <Avatar />
                </el-icon>
                <template #dropdown>
                <el-dropdown-menu color="black">
                    <el-dropdown-item @click="handleCenter">Your Account</el-dropdown-item>
                    <el-dropdown-item @click="handleLogOut">Log Out</el-dropdown-item>
                </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </el-header>
</template>


<script setup>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { Menu,Avatar } from '@element-plus/icons-vue'

const store = useStore()
const router = useRouter()

const handleCollapse = () => {
    store.commit("changeCollapsed")
}

const handleCenter = () => {
    router.push("/center")
}

const handleLogOut = () => {
    localStorage.removeItem("token")
    store.commit("clearUserInfo")
    router.push("/login")
}

</script>


<style lang="scss">
.el-header{
    background-color: #1C1C1C;
    color: white;
    width: 100%;
    height: 60px;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.left, .right{
    display: flex;
    // justify-content: space-between;
    // align-items: center;
}

.left{
    .el-icon{
        margin: auto;
        cursor: pointer;
    }
}

.right{
    .el-icon{
        margin: auto;
        cursor: pointer;
    }
}
</style>