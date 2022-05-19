<template>
  {{ counter }}
  <br />
  {{ obj }}
  <br />
  {{ hubState }}
  <br />
  <button @click="onClickCounter">Counter ++</button>
</template>


<script setup>
import { ref, onMounted, reactive, toRefs, watchEffect } from "vue";
import { useCustomState } from '../composables/useCustomState'

const state = useCustomState()
const { init } = state
const { hubState } = toRefs(state)

const counter = ref(0)
const obj = reactive({})

const onClickCounter = () => {
  counter.value += 1
}

watchEffect(()=>{
  console.log(counter.value)
  console.log(hubState.value)
})

onClickCounter()

onMounted(async () => {
  const data = await init()
  console.log('counter', data)
})

</script>