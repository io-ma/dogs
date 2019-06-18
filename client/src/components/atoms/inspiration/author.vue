<template>
  <section class="title" role="region">
    <h3 role="heading">Author:</h3>
    <p>{{ item.author }}</p>
  </section>
</template>

<script>
  export default {
    name: 'atoms-author',
    props: ['item']
  }
</script>

<style scoped lang="sass">
</style>
