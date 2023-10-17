<template>
  <div class="menu-content">
    <div class="menu-item" v-for="item in menuArr">
      <router-link :to="item.path">{{ item.name }}</router-link>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from "vue"

type menuType = {
  path: string,
  name:string
}
let menuArrTemp:menuType[] = [
  {
    path: '/',
    name:'首页'
  },
  {
    path: '/cart',
    name:'购物车'
  },
  {
    path: '/login',
    name:'登录'
  },
]
let menuArr = reactive(menuArrTemp)

</script>

<style scoped>
.menu-content{
  display: flex;
  border: 1px solid blue;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  justify-content: space-around;
  align-items: center;
}
.menu-item{
  /* flex:1; */
}
</style>