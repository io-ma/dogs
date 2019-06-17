<template>
  <div class="app-inspiration">
    <atoms-inspiration-header></atoms-inspiration-header>
    <organisms-inspiration-main></organisms-inspiration-main>
  </div>
</template>

<script>
  import AtomsInspirationHeader from "@/components/atoms/inspiration/header"
  import OrganismsInspirationMain from "@/components/organisms/inspiration/main"
  export default {
    name: 'app-inspiration',
    components: {
      AtomsInspirationHeader, OrganismsInspirationMain
    }
  }
</script>

<style scoped lang="sass">
  .app-inspiration
    @apply flex flex-col
</style>
