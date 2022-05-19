<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ChildComponent @custom-event-1="firstEvent" @custom-event-2="secondEvent" />
    <button @click="showMsg = !showMsg">Show/Hide</button>
    <teleport to='.my-div'>
      <p v-if="showMsg">From HelloWorld component</p>
    </teleport>

    <button @click="toggleModal">Show modal</button>
    <teleport to="#modal">
      <ModalWindow v-if="showModal">
        <p>From HelloWorld component</p>
        <button @click="toggleModal">Hide</button>
      </ModalWindow>
    </teleport>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue'
import ModalWindow from './ModalWindow.vue'
export default {
  name: 'HelloWorld',
  components: {
    ChildComponent,
    ModalWindow
  },
  props: {
    msg: String
  },
  data() {
    return {
      showModal: false,
      showMsg: false
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
    firstEvent(data) {
      console.log('firstEvent', data)
    },
    secondEvent(data) {
      console.log('secondEvent', data)
    }
  },
  mounted() {
    console.log(this.value)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
