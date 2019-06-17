<template>
  <ul class="dog-details" :item="item">
    <img :src="item"/>
  </ul>

</template>

<script>
  export default {
    name: 'atoms-dog-details',
    props: ['item']
  }
</script>

<style scoped lang="sass">
  .dog-details
    @apply mx-4
    @apply flex flex-col
    list-style-type: none 
</style>
