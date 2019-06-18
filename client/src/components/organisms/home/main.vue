<template>
  <main class="main">
    <div class="main__card">
      <h2 class="main__title">First title</h2>
      <section class="main__section">
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </section>
    </div>
    <div class="main__card">
      <h2 class="main__title">Second title</h2>
      <section class="main__section">
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </section>
    </div>
  </main>
</template>

<script>
  export default {
    name: 'organisms-home-main',
};
</script>

<style scoped lang="sass">
  .main
    @apply flex flex-col
    @apply w-3/4
    @apply p-12 mx-auto my-8
    @apply bg-grey-lightest
    box-sizing: border-box
    &__title
      @apply m-8 ml-0
    &__card
      @apply p-8 
      @apply flex flex-col
      box-sizing: border-box
</style>
