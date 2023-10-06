<!-- 父子组件传值 - 依赖注入 -->
<script setup lang="ts">
import { inject } from 'vue'

console.log(inject('hello'));
// const { data1,data2} = inject('myData')
</script>
<template>
  <h1>i am helloWorldSon</h1>
</template>

<style scoped>
</style>
