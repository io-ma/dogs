<template>
  <div id="app">
    <organisms-header></organisms-header>
    <main class="app-main">
      <div class="server-status" :class="{active: serverActive, deactive: !serverActive}">
        {{serverInformation}}
      </div>
      <router-view></router-view>
    </main>
    <organisms-footer></organisms-footer>
  </div>
</template>

<script>
  import axios from 'axios'
  import OrganismsHeader from '@/components/organisms/header'
  import OrganismsFooter from '@/components/organisms/footer'
  export default {
    name: 'app',
    components: {
      OrganismsHeader, OrganismsFooter
    },
    data() {
      return {
        serverActive: false,
        serverInformation: '',
      }
    },
    mounted() {
      axios.get('http://127.0.0.1:3000/')
        .then((response) => {
          this.serverInformation = response.data.message
          this.serverActive = true
        }) 
        .catch(() => {
          this.serverInformation = 'The server does not appear to be running. Please start the server and refresh the page!'
          this.serverActive = false
        })
    }
  }
</script>

<style lang="sass">
  #app 
    @apply flex flex-col items-center
    @apply text-grey-darkest
    @apply min-h-screen
    @apply w-full
    @apply  mx-auto my-0
  body 
    @apply m-0
    @apply font-sans antialiased
    font-size: 18px
    line-height: 1.7
  .app-main
    @apply flex flex-col
    max-width: 95% 
    flex: 1
  .server-status 
    @apply mx-auto my-10 p-3
    @apply border border-solid rounded-sm
    @apply text-base text-center
 
  .server-status.deactive 
    @apply bg-red-lightest
    @apply border-red-lighter
    @apply text-red-darkest
      
  .server-status.active
    @apply bg-green-lightest
    @apply border-green-lighter
    @apply text-green-darkest
</style>
