<template lang="pug">
  .container
    router-view
</template>

<script>
import todo from './components/todo'

export default {
  name: 'app',
  components: {
    todo
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">

  body {
    font-family: "Helvetica Neue", Helvetica, sans-serif;
    font-size: 16px;
    line-height: 1.42;
    -webkit-font-smoothing: antialiased;
    font-weight: 300;
    background: #f5f5f5;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  * {
    box-sizing: border-box;
  }
  .container {
    max-width: 50%;
    display: flex;
    margin: 0 auto;
  }

</style>
