<script setup>
import HelloWorld from './components/HelloWorld.vue'
import test from './components/test.tsx'
import test1 from './components/test1.tsx'
import { provide,ref} from 'vue'
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
</script>

<template>
  <HelloWorld toSetupSon ="a" @setupSon="setupSon"/>
  <test toTsxSon ="b" @tsxSon="tsxSon"/>
  <test1 toSetupTsxSon = "c" @setuoTsxSon="setuoTsxSon"/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
