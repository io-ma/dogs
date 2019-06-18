<template>
  <section class="title" role="region">
    <h3 role+"heading">Title:</h3>
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
