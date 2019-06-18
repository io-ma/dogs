<template>
  <atoms-dog-details :item="item">
  </atoms-dog-details>
</template>

<script>
  import AtomsDogDetails from '@/components/atoms/dogs/dog-details';
  export default {
    name: 'molecules-dog',
    props: ['item'],
    components: {
      AtomsDogDetails
    }
  }
</script>

<style scoped lang="sass">
</style>
