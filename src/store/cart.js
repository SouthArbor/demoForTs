import { defineStore } from "pinia";

//选项式写法
/*export const useCartStore = defineStore("cart", {
  state: () => {
    return {
      cartList:[]
    }
  },
  getters: {
    allNum() { 
      let _allNum = 0;
      this.cartList.forEach(item => _allNum += item.num)
      return _allNum;
    }
  },
  actions: {
    addCartNum(goods) {
      const index = this.cartList.findIndex(item => item.id == goods.id);
      if (index != -1) {
        this.cartList[index].num++;
      } else {
        goods.num = 1;
        this.cartList.push(goods);
      }
    },
    minusCartNum(id) { 
      const index = this.cartList.findIndex(item => item.id === id);
      if (index !== -1) {
        this.cartList[index].num--;
        if (this.cartList[index].num <= 0) {
          this.cartList.splice(index, 1);
        }
      }
    }
  }
})*/
// 组合式
import { computed,reactive } from 'vue'
export const useCartStore = defineStore("cart", () => { 
  let cartList = reactive([]);
  function addCartNum(goods) {//添加购物车商品
      const index = cartList.findIndex(item => item.id == goods.id);
      if (index != -1) {
        cartList[index].num++;
      } else {
        goods.num = 1;
        cartList.push(goods);
      }
  }
  function minusCartNum(id) {//减少购物车商品数
      const index = cartList.findIndex(item => item.id === id);
      if (index !== -1) {
        cartList[index].num--;
        if (cartList[index].num <= 0) {
          cartList.splice(index, 1);
        }
      }
  }
  
  let allNum = computed(() => { //计算购物车商品总数
    let _allNum = 0;
    cartList.forEach(item => _allNum += item.num)
    return _allNum;
  })

  return {
    cartList,
    addCartNum,
    minusCartNum,
    allNum
  }
})