<script setup lang="ts">
/*import HelloWorld from './components/HelloWorld.vue'
import test from './components/test'
import test1 from './components/test1'
import { provide, ref,Component, onMounted } from 'vue'

function setupSon(msg){
  console.log(msg);
}
function tsxSon(msg){
  console.log(msg);
}
function setuoTsxSon(msg){
  console.log(msg);
}

//依赖注入
const hello = ref('hello HelloWorldSon')
provide('hello',hello)
// provide('myData',{data1,data2}) // 传多个

const hellWorldRef = ref(<Component>{})
onMounted(() => { 
  console.log(hellWorldRef.value.a);
  console.log(hellWorldRef.value.f1);
})*/
import Menu from './components/menu.vue'

</script>

<template>
  <Menu/>
  <router-view></router-view>

  <!-- <HelloWorld ref="hellWorldRef"/> -->
  <!-- <test/> -->
  <!-- <HelloWorld toSetupSon ="a" @setupSon="setupSon"/> -->
  <!-- <test toTsxSon ="b" @tsxSon="tsxSon"/>
  <test1 toSetupTsxSon = "c" @setuoTsxSon="setuoTsxSon"/> -->
</template>

<style scoped>
</style>
