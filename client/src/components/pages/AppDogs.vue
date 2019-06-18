<template>
  <div class="dogs">
    <label for="next" class="dogs__label">SHOW DOGS</label>
    <button @click="loadDogs" name="next" class="dogs__button" role="button">NEXT</button>
    <molecules-dog :item="dogs">
    </molecules-dog>
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
    box-sizing: border-box
    &__label
      @apply self-center
      @apply m-4
      @apply text-xl font-bold
    &__button
      @apply self-center
      @apply m-8 px-8 py-4
      @apply bg-grey-light
      @apply border border-grey-darker rounded-sm
</style>
