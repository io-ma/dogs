<template>
  <section class="song" role="region">
    <atoms-title :item="item"></atoms-title>
    <atoms-artist :item="item"></atoms-artist>
  </section>
</template>

<script>
  import AtomsTitle from '@/components/atoms/inspiration/title'
  import AtomsArtist from '@/components/atoms/inspiration/artist'
  export default {
    name: 'molecules-song',
    components: {
      AtomsTitle, AtomsArtist
    },
    props: ['item']
  }
</script>

<style scoped lang="sass">
  .song
    @apply flex flex-col
    @apply p-8
</style>
