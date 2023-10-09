<template>
  <div class="div" @mousemove="move">
    <slot name="one"></slot>
    <slot name="two"></slot>
  </div>
</template>

<script setup lang='ts'>
import { useSlots } from 'vue';
function move(event:any) {
  console.log(event.clientX);
}
console.log(useSlots().one,useSlots().two); // 可以用来监测插槽是否被使用

</script>

<style>
.div{
  background-color: red;
  width: 500px;
  height: 500px;
}
</style>