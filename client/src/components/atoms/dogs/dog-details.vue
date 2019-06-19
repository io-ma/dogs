<template>
  <div class="dog-details">
    <img :src="url" class="dog-details__image" alt="dog"/>
  </div>
</template>

<script>
  export default {
    name: 'atoms-dog-details',
    props: ['item'],
    computed: {
      url() {
        if (typeof this.item === 'object') {
          return "img/dog-logo.6e13b6c4.png"
        }else {
          return this.item
        }

      }
    }
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
