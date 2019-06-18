<template>
  <main class="main" role="main">
    <article class="main__article" role="presentation">
      <section class="main__item" role="region">
        <div class="main__card">
          <h2 class="main__title" role="heading">List of books</h2>
            <molecules-book v-for="book in books" :item="book" :key="book.id"></molecules-book>
        </div>
      </section>
      <section class="main__item" role="region">
        <div class="main__card">
          <h2 class="main__title" role="heading">List of songs</h2>
            <molecules-song v-for="song in songs" :item="song" :key="song.id"></molecules-song>
        </div>
      </section>
    </article>
  </main>
</template>

<script>
  import { mapGetters } from 'vuex';
  import MoleculesBook from '@/components/molecules/inspiration/book'
  import MoleculesSong from '@/components/molecules/inspiration/song'
  export default {
    name: 'organisms-inspiration-main',
    computed: {
      ...mapGetters(['books', 'songs'])
    },
    components: {
      MoleculesBook, MoleculesSong
    },
    props: ['item']
};
</script>

<style scoped lang="sass">
  .main
    @apply flex flex-wrap
    @apply w-full
    @apply p-8 mb-8
    box-sizing: border-box
    &__title
      @apply m-8
      @apply text-center
    &__article
      @apply flex flex-wrap
      @apply w-full
      @apply p-0
    &__item
      @apply w-1/2
      @apply p-0
      @apply flex flex-col
    &__card
      @apply p-8 
      @apply flex flex-col
      box-sizing: border-box
</style>
