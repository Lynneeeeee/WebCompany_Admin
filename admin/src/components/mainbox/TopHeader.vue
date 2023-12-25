<template>
    <el-header>
        <button @click = "handleCollapse">
            Hide sidebar
        </button>
        Header
    </el-header>
</template>

<script setup>
import { useStore } from 'vuex';
const store = useStore()

const handleCollapse = () => {
    store.commit("changeCollapsed")
}
</script>