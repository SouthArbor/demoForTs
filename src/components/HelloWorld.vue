<!-- <script lang="ts">
import { ref,reactive,defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const num = ref(1) 
    const obj = ref({ a: 100, b: 32 })

    const arr = reactive([1, 2, 3])
    const obj2 = reactive({c:333,d:777})

    console.log(num);
    console.log(obj2);

    setTimeout(() => {
      num.value = 999
      obj.value.a = 444
    }, 1000);
    return {num,obj,arr}
  }
})


// const num = ref(1) 
// const obj = ref({ a: 100, b: 32 })

// const arr = reactive([1, 2, 3])
// const obj2 = reactive({c:333,d:777})

// console.log(num);
// console.log(obj2);

// setTimeout(() => {
//   num.value = 999
//   obj.value.a = 444
// }, 1000);
</script> -->
<!-- 生命周期 test -->
<!-- <script setup lang="ts">
import { ref, reactive, onMounted, onUpdated } from 'vue'

const num = ref(2)
const num2 = ref(99)

// let result = reactive({ data: {} })

// axios.get("req_url").then((res: { data: any }) => { 
//   // result = res 会丢失响应式
//   result.data = res.data
// })

onMounted(() => { 
  console.log("mounted");
})
console.log("created");
onUpdated(() => { 
  console.log('updated');
})
setTimeout(() => {
  num.value = 999
}, 1000);
setTimeout(() => {
  num2.value = 888 // 不会触发updated
}, 1000);
</script> -->
<!-- 监听 -->
<!-- <script setup lang="ts">
import { ref, reactive, watch, watchEffect } from 'vue'

let num1 = ref(1)
let num2 = ref(2)

let stop = watch([num1, num2], (newValue) => { // 只有当监听的值发生改变的时候,才会被调用
  console.log(num1.value, num2.value);
  if(num1.value > 3) stop() // 终止监听
}, {
  flush: "pre",//控制回调函数的执行时机,pre:在dom更新之前触发,post:在dom更新之后触发;默认为pre
  // onTrack,开始监听的时候触发
  // onTrigger 数据变化的时候触发
})
// 追踪依赖 根据使用的内容,自动地触发相关数据的监听
let stop2 = watchEffect(() => { // 在最开始的时候 会调用一次
  console.log(num2.value);
 if(num1.value > 3) stop2() // 终止监听
})

setInterval(() => {
  num1.value++
  num2.value++
}, 500);
</script> -->
<!-- 计算 -->
<!-- <script setup lang="ts">
import { ref, reactive, computed} from 'vue'

let num1 = ref(1)
let num2 = ref(2)

function f1() {
  return num1.value+1
}
let num1AddTwo = computed(() => { 
  return num1.value + 2
})
</script> -->
<!-- 父子组件传值 -->
<!-- <script setup lang="ts">
import {defineProps,defineEmits } from 'vue'
import HelloWorldSon from './HelloWorldSon.vue';
defineProps({
  toSetupSon:String
})

const emit = defineEmits(["setupSon"])
emit("setupSon","i am setupSon")
</script> -->
<!-- 获取真实dom -->
<!-- <script setup lang="ts">
import { ref ,onMounted,nextTick} from 'vue'
const num = ref(1);
const h1Dom = ref(<HTMLElement>{})
function getInner() {
  console.log(h1Dom.value.innerHTML);
}
onMounted(() => { 
  getInner()
})
setTimeout(() => {
  num.value = 999;
  nextTick(() => {
    getInner()
  })
}, 1000);
</script> -->
<!-- mixin -->
<!-- <script setup lang="ts">
// import { ref ,onMounted} from 'vue'
import { onMounted } from 'vue';
import { globalMixin, popStateChange, popState } from '../mixin/globalMixin'
globalMixin()
onMounted(() => {
  console.log(1);
  
})
</script> -->
<!-- slot -->
<!-- <script setup lang="ts">
// import { ref ,onMounted} from 'vue'
import pointDiv from './pointDiv.vue'
</script> -->
<!-- 一些杂项 defineExpose 响应式语法糖(响应式转换) -->
<script setup lang="ts">
import { ref,watch } from 'vue'
import { $ref, $$, $ } from 'vue/macros' // 嫌响应式语法糖报错,可以导入vue宏,或者写一个声明文件

// !! 响应式语法糖(响应式转换) 该功能将从vue3.4核心中删除，除非使用 Vue 宏，否则该功能将不再起作用

// toRef -> $toRef
// shallowRef -> $shallowRef
let a = $ref(1)
// let a = ref(1)
function f1() {
  console.log(a); //此时可以看到打印出来的f1的内容为 console.log(a.value); 也就是编译阶段后,自动给 a 加上了 .value
}
// $$ 不写$$,相当于监听的是a.value,监听是不成功的
watch([$$(a)], () => { 

})

function f2() { 
  return {
    x: ref(5),
    y: ref(6)
  }
}

const { x, y } = $(f2()) //这样写解构出的x,y,直接就是x.value,y.value
// 模版中就可以直接写 <p>{{x}}</p>,无需<p>{{x.value}}</p>

// vue3中子组件中的变量需要暴露出去,父组建才能通过ref访问
defineExpose({
  a,
  f1
})
</script>

<template>
  <!-- slot -->
  <!-- <pointDiv>
    <template #one>
      <h1>hello</h1>
    </template>
  </pointDiv> -->

  <!-- mixin -->
  <!-- <button @click="popStateChange">{{ popState?'隐藏弹窗':'显示弹窗' }}</button>
  <div v-if="popState">这是一个弹窗</div> -->

  <!-- <HelloWorldSon/> -->

  <!-- <h1>{{ toSetupSon }}</h1> -->
  <!-- 不推荐这么写,当页面其他元素改变而导致页面重绘的时候,f1()会被动调用一次,当f1()的计算量比较大的时候,会造成比较大的性能开销 -->
   <!-- <h1>{{ f1() }}</h1>

   <h1>{{ num1AddTwo }}</h1> -->

   <!-- <h1 ref="h1Dom">{{ num }}</h1> -->
  <!--<h1>{{ obj.a }}</h1>
  <li v-for="(item,index) in arr" :key="index">{{ item }}</li> -->

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
