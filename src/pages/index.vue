<template>
  <h1> this is index page</h1>
</template>

<script setup lang='ts'>
import { useCartStore } from "../store/cart.js";

const cartStore = useCartStore();

cartStore.addCartNum({name:'电脑',id:1})

</script>

<style>

</style>