<template>
  <div class="login-view">
    <h1> this is login page</h1>
    <div>
      <label>账号</label>
      <input type="text" v-model="account">
    </div>
    <div>
      <label>密码</label>
      <input type="password" v-model="password">
    </div>
    <div>
      <button @click="loginIn">登陆</button>
    </div>
  </div>
</template>

<script setup lang='ts'>
import router from '../router'
import { ref} from 'vue'
let account = ref('admin')
let password = ref('123456')

function loginIn() {
  if (account.value == 'admin' && password.value == '123456') { 
    router.push("/")
  }else{ 
    alert("登录失败")
  }
}
</script>

<style>
.login-view{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>