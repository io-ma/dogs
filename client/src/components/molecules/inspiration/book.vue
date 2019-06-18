<template>
  <section class="book" role="region">
    <atoms-title :item="item"></atoms-title>
    <atoms-author :item="item"></atoms-author>
    <atoms-idea :item="item"></atoms-idea>
  </section>
</template>

<script>
  import AtomsTitle from '@/components/atoms/inspiration/title'
  import AtomsAuthor from '@/components/atoms/inspiration/author'
  import AtomsIdea from '@/components/atoms/inspiration/idea'
  export default {
    name: 'molecules-book',
    components: {
      AtomsTitle, AtomsAuthor, AtomsIdea
    },
    props: ['item']
  }
</script>

<style scoped lang="sass">
  .book
    @apply flex flex-col
    @apply p-8
</style>
