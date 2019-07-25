<template lang='pug'>
  div
    h1 Компонент просмотра задания
    h2 {{$route.params.todo}}
    router-link(
      tag="button"
      to="/"
     ).back-btn Назад
</template>

<script>

</script>

<style lang='scss' scoped>
  .back-btn {
    cursor: pointer;
  }
</style>