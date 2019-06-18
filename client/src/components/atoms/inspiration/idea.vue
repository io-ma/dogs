<template>
  <section class="title" role="region">
    <h3 role="heading">Idea:</h3>
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
