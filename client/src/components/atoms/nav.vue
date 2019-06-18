<template>
<nav class="atoms-nav" role="navigation">
  <ul class="atoms-nav__list" role="list">
    <router-link tag="li" class="atoms-nav__link" to="/" role="listitem"><a>HOME</a></router-link>
    <router-link tag="li" class="atoms-nav__link" to="/inspiration" role="listitem"><a>INSPIRATION</a></router-link>
    <router-link v-if="isAuthenticated" tag="li" class="atoms-nav__link" to="/dogs" role="listitem"><a>DOGS</a></router-link>
    <li class="atoms-nav__link" v-if="!isAuthenticated" role="listitem">
      <a href="#" @click.prevent="login">LOGIN</a>
    </li>
    <li class="atoms-nav__link" v-if="isAuthenticated" role="listitem">
      <a href="#" @click.prevent="logout">LOG OUT</a>
    </li>
  </ul>
</nav>
</template>

<script>
  export default {
    name: "atoms-nav",
		data() {
			return {
				isAuthenticated: false
			};
		},
		async created() {
			try {
				await this.$auth.renewTokens();
			} catch (e) {
				console.log(e); // eslint-disable-line no-console

			}
		},
		methods: {
			login() {
				this.$auth.login();
			},
			logout() {
				this.$auth.logOut();
			},
			handleLoginEvent(data) {
				this.isAuthenticated = data.loggedIn;
				this.profile = data.profile;
			}
		}
  };
</script>

<style scoped lang="sass">
  .atoms-nav
    @apply flex flex-wrap justify-center
    @apply p-8
    @apply font-bold
    &__list
      @apply flex flex-wrap
      list-style-type: none
    &__link a
      @apply text-grey-dark
      @apply mr-4
      @apply no-underline
    &__link a:visited
      @apply text-grey-dark
    &__link a:hover
      @apply text-black
      @apply cursor-pointer
      transition: all .3s ease-in-out
</style>
