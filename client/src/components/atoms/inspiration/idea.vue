<template>
  <section class="title">
    <h3>Idea:</h3>
    <p>{{ item.main_idea }}</p>
  </section>
</template>

<script>
  export default {
    name: 'atoms-idea',
    props: ['item']
  }
</script>

<style scoped lang="sass">
</style>
