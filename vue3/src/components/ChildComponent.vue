<template>
  {{ user }}
  <br />
  <button @click="addLink">Add Link</button>
  <button @click="removeLink">Remove Link</button>
  <br />
      {{user}}
  <LoginForm v-model:username="user.name" v-model:role="user.role"/>
  <br />
  <button @click="clickHandler">Test custom events</button>
</template>
<script>
import LoginForm from './LoginForm.vue'
export default {
  name: "ChildComponent",
  components: {
    LoginForm
  },
  emits: {
    'custom-event-1': null,
    'custom-event-2'(payload) {
      return !!(payload.name && payload.role)
    }
  },
  data() {
    return {
      user: {
        name: "Vasya",
        role: "Admin"
      }
    }
  },
  methods: {
    addLink() {
      this.user.link = 'https://some.com';
    },
    removeLink() {
      delete this.user.link;
    },
    clickHandler() {
      this.$emit('custom-event-1', 'data 1');
      this.$emit('custom-event-2', {
        name: "Vasya",
        role: "Admin"
      });
    }
  }
}
</script>