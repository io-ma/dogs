<template>
  <div class="dogs">
    <h3 class="dogs__title">Show dogs</h3>
    <button @click="loadDogs" class="dogs__button">NEXT</button>
    <ul class="dogs__ul">
      <molecules-dog :item="dogs">
      </molecules-dog>
    </ul>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex' 
  import { mapActions } from 'vuex'
  import MoleculesDog from '@/components/molecules/dogs/dog'
  export default {
    name: 'app-dogs',
    computed: {
      ...mapGetters(['dogs']),
      },
    props: ['item'],
    methods: {
      ...mapActions(['loadDogs'])
    },
    components: {
      MoleculesDog
    }
   };
</script>

<style scoped lang="sass">
  .dogs
    @apply flex flex-col
    @apply w-full
    @apply p-4 mx-auto my-4
    @apply bg-grey-lightest
    box-sizing: border-box
    &__title
      @apply self-center
      @apply m-4
    &__button
      @apply self-center
      @apply m-8 p-4
      @apply bg-grey-light
      @apply border border-grey-darker rounded-sm
      @apply w-1/5
    &__ul
      @apply mx-4
      @apply flex flex-col
      list-style-type: none 
</style>
