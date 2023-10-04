import { ref } from "vue"

function createByTsx() {
  let mes = ref("hello");
  return <div>
    <h1>{{mes}}</h1>
  </div>
}