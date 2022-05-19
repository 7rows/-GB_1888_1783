<template>
 <input
     v-if="username"
     type="text"
     :value="username"
     @input="$emit('update:username', $event.target.value)"
 >
 <input
     type="text"
     :value="role"
     @input="$emit('update:role', $event.target.value)"
 >
</template>

<script>
export default {
 name: 'LoginForm',
 props: ['username', 'role'],
}
</script>
