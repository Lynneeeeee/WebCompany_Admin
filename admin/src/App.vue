<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> 
  root component-->
  
  <router-view/>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0
}

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


</style>
