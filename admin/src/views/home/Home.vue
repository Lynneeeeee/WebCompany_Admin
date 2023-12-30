<template>
    <div>
        home
    </div>
</template>

<script setup>
import axios from 'axios'

axios.get("/adminapi/user/home").then(res=>{
    console.log("print test: /home ",res.data)
})
</script>