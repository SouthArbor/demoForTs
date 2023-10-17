<template>
  <h1> this is cart page</h1>
  <div>总数:{{ cartStore.allNum }}</div>
  <div v-for="item in cartStore.cartList" class="goods-row">
    <div>{{ item.name }}</div>
    <div>
      <span class="button" @click="minus(item.id)">-</span>
      <span>{{item.num}}</span>
      <span class="button" @click="add(item)">+</span>
    </div>
  </div>
</template>

<script setup lang='ts'>

import { useCartStore } from "../store/cart.js";

const cartStore = useCartStore();

const add = (goods) => {
  cartStore.addCartNum(goods)
}

const minus = (id) => {
  cartStore.minusCartNum(id)
}
</script>

<style>
.button{
  padding: 0px 5px;
  border: 1px solid brown;
  border-radius: 5px;
  cursor: pointer;
}
.goods-row{
  display: flex;
  width: 100px;
  justify-content: space-around;
  margin: 10px 0px;
}
</style>