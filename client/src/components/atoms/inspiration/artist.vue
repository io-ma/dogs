<template>
  <section class="artist" role="region">
    <h3 role="heading">Artist:</h3>
    <p>{{ item.artist }}</p>
  </section>
</template>

<script>
  export default {
    name: 'atoms-artist',
    props: ['item']
  }
</script>

<style scoped lang="sass">
</style>
