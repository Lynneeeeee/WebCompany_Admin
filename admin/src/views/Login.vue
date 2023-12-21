<!-- Login scene -->

<template>
    <div>
        login
    </div>
    <button @click ="handleLogin" >login</button>
</template>

<script setup>
const handleLogin = () => {
    localStorage.setItem("token", "ManualToken")
}
</script>