<template>
    <div>
        home
    </div>
</template>

<script setup>
import axios from 'axios'
import { useStore } from 'vuex'
const store = useStore() 
console.log(store.state)

// axios.get("/adminapi/user/home").then(res=>{
//     console.log("print test: /home ",res.data)
// })
</script>