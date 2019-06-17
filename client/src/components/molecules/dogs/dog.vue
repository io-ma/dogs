<template>
  <li class="dog" :item="item">
    <h4 class="dog__title">Dogs</h4>
    <atoms-dog-details :item="item">
    </atoms-dog-details>
</li>
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
  .dog
    @apply mx-4
    @apply flex flex-col
    list-style-type: none 
</style>
