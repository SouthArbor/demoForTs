<template>
  <h1> this is index page</h1>
  <div class="goods-view">
    <div v-for="item in goodsList" class="goods-item">
      <div>{{ item.name }}</div>
      <button @click="buy(item)" style="height: 2em;">添加购物车</button>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { useCartStore } from "../store/cart.js";
import { ref, reactive } from "vue";
const cartStore = useCartStore();
const goodsList = reactive([
  { name: '电脑', id: 1 },
  { name: '手机', id: 2 },
  { name: '桌子', id: 3 },
])

const buy = (goods) => { 
  cartStore.addCartNum(goods)
}
// cartStore.addCartNum({name:'电脑',id:1})

</script>

<style>
.goods-view{
  display: flex;
  width: 800px;
  justify-content: space-around;
}
.goods-item{
  display: flex;
  width: 200px;
  height: 60px;
  border: 1px solid #ccc;
  border-radius: 5px;

  justify-content: space-around;
  align-items: center;
}
</style>