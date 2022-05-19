<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div class="my-div" style="border: 1px solid #000; min-height: 50px; margin: 10px 0;"></div>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <CompositionComp />
  <br/>
  <ScriptSetupComp />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CompositionComp from './components/CompositionComp.vue'
import ScriptSetupComp from './components/ScriptSetupComp.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    CompositionComp,
    ScriptSetupComp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
