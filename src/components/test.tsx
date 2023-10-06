import { ref,reactive } from "vue"

// function createByTsx() {
//   const num = ref(1)
//     const obj = ref({ a: 100, b: 32 })

//     const arr = reactive([1, 2, 3])
//     const obj2 = reactive({c:333,d:777})

//     console.log(num);
//     console.log(obj2);

//     // setTimeout(() => {
//     //   num.value = 999
//     //   obj.value.a = 444
//     // }, 1000);
//   return <div>
//     <h1>{ num.value }</h1>
//     <h1>{ obj.value.a }</h1>
//     {/* <li v-for="(item,index) in arr" :key="index">{{ item }}</li> */
//       arr.map((item) => {
//         return <li>{item}</li>
//       })
//     }
//   </div>
// }

// export default createByTsx

// 父子传值
type propsType = {
  toTsxSon:string
}
function propTest(prap: propsType, context: any) {
  context.emit("tsxSon","i am tsxSon")
  return <div>
    <h1>{ prap.toTsxSon}</h1>
  </div>
}

export default propTest