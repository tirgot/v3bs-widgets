<template>
  <div className="container-xl">
    <h1 class="app-page-title">{{ msg }}</h1>
    <button @click="count++">count is: {{ count }}</button>
    <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
    <div>{{ headername }} / {{ cookiename }}</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0,
      headername: this.$http.defaults.xsrfHeaderName,
      cookiename: this.$http.defaults.xsrfCookieName
    }
  }
}
</script>
