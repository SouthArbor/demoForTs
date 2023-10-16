<template>
  <h1> this is cart page</h1>
  <div>总数:{{ cartStore.allNum }}</div>
  <div v-for="item in cartStore.cartList">{{ item.name }}</div>
</template>

<script setup lang='ts'>

import { useCartStore } from "../store/cart.js";

const cartStore = useCartStore();
</script>

<style>

</style>