<template>
  <div class="app-home">
    <atoms-home-header></atoms-home-header>
    <organisms-home-main></organisms-home-main>
  </div>
</template>

<script>
  import AtomsHomeHeader from '@/components/atoms/home/header'
  import OrganismsHomeMain from '@/components/organisms/home/main'
  export default {
    name: "app-home",
    components: {
      AtomsHomeHeader, OrganismsHomeMain
    }
  }
</script>

<style scoped lang="sass">
</style>
