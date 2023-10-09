import { ref, onMounted } from "vue"

export let popState = ref(false);

export function popClose() {
  popState.value = false;
}
export function popShow() {
  popState.value = true;
}
export function popStateChange() {
  popState.value = !popState.value;
}
export function globalMixin() {
  onMounted(() => { 
    console.log("请求了");
  })
}
