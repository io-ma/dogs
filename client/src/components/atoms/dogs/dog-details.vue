<template>
  <div class="dog-details">
    <img :src="item" class="dog-details__image"/>
  </div>
</template>

<script>
  export default {
    name: 'atoms-dog-details',
    props: ['item']
  }
</script>

<style scoped lang="sass">
  .dog-details
    @apply mx-auto my-4
    @apply flex flex-col
    box-sizing: border-box
    &__image
      max-width: 100%
      max-height: 300px
      box-sizing: border-box
</style>
