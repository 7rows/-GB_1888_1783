<template>
  {{ counter }}
  <br/>
  {{obj}}
  <br/>
  <button @click="onClickCounter">Counter ++</button>
</template>
<script>
import { ref, onMounted, unref, reactive } from "vue";
import {useCustomState} from '../composables/useCustomState'

export default {
  setup () {
    const {run} = useCustomState()
    const counter = ref(0)
    const obj = reactive({})
    const onClickCounter = ()=> {
      counter.value += 1
    }

    function init() {
      Object.assign(obj, {
        title: "tile",
        date: "Today",
        role: "Admin"
        })
    }

    init()

    onMounted(() => {
        run()
         console.log('counter', unref(counter))
    })
    return {
      counter,
      obj,
      onClickCounter
    }
  }
}
</script>