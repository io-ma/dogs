<template>
  <footer class="footer" role="contentinfo">
    <span class="footer__copyright">&copy; Dogs</span>
  </footer>
</template>

<script>
  export default {
    name: 'organisms-footer'
  }
</script>

<style scoped lang="sass">
  .footer
    @apply w-full
    @apply p-8
    @apply bg-grey-light
    @apply text-center text-grey-darker
    height: 15vh
    box-sizing: border-box
</style>
