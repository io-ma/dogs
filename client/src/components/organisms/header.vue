<template>
  <header class="header">
    <div class="header__brand">
      <app-logo></app-logo>
      <app-heading></app-heading>
    </div>
    <atoms-nav></atoms-nav>
  </header>
</template>

<script>
  import AppLogo from '@/components/atoms/logo'
  import AppHeading from '@/components/atoms/heading'
  import AtomsNav from '@/components/atoms/nav'
  export default {
    name: 'organisms-header',
    components: {
      AppLogo, AppHeading, AtomsNav
    }
  }
</script>

<style scoped lang="sass">
  .header
    @apply mb-8
    @apply w-full
    &__brand
      @apply flex
</style>
