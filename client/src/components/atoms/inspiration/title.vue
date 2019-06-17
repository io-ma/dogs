<template>
  <section class="title">
    <h3>Title:</h3>
    <p>{{ item.title }}</p>
  </section>
</template>

<script>
  export default {
    name: 'atoms-title',
    props: ['item']
  }
</script>

<style scoped lang="sass">
</style>
