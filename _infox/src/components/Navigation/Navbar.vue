<template>
  <nav class="navbar navbar-dark justify-content-start" :class="{ 'navbar-admin': isAdmin }">
    <SidebarToggle @toggle="$emit('sidenavToggle')" />

    <div class="brand">
      <nuxt-link to="/" class="navbar-brand my-2">{{ eventName }}</nuxt-link>
    </div>

    <div class="navigation-items">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <nuxt-link to="/network" class="nav-link">Network</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/questions" class="nav-link">Questions</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/polls" class="nav-link">Polls</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/feedback" class="nav-link">Feedback</nuxt-link>
        </li>
      </ul>
    </div>

    <div class="ml-auto profile-dropdown">
      <b-dropdown size="lg" variant="link" toggle-class="text-decoration-none" no-caret>
        <div slot="button-content" class="fas fa-user profile card rounded-circle"></div>
        <b-dropdown-item @click="$router.push('/profile')">Profile</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item @click="$store.dispatch('event/switchEvent')">Switch Event</b-dropdown-item>
        <b-dropdown-item v-if="signedIn" @click="$store.dispatch('logout')">Logout</b-dropdown-item>
      </b-dropdown>
      <!-- <nuxt-link to="/profile" tag="div" class="profile card rounded-circle"></nuxt-link> -->
    </div>
  </nav>
</template>

<script>
import SidebarToggle from "./SidebarToggle";

export default {
  name: "TheNavbar",
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  },
  components: {
    SidebarToggle
  },
};
</script>

<style scoped>
.navbar {
  background: black;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  padding: 0 3px;
  text-align: left;
  transition: background 1200ms ease-out;
}
.navbar-admin {
  background: linear-gradient(180deg, #311905 0%, #722714 100%);
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
}
.brand {
  max-width: 190px;
  font-size: 0.5em;
  padding-right: 5px;
  padding-left: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.nav-item {
  width: fit-content;
  /* border: 1px solid white; */
  border-radius: var(--radius);
  margin: 0 5px;
}
.nav-link {
  color: white;
  padding: 12px 25px;
  border-radius: 0;
  transition: background-color 200ms ease-out;
}
.nav-link.nuxt-link-active {
  font-weight: bold;
  border-bottom: 5px solid white;
  /* background-color: #591CAF; */
}

.profile-dropdown {
  position: absolute;
  right: 0;
}
.profile {
  color: grey;
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 3;
}
.fa-user {
  padding-top: 20%;
}

.navigation-items {
  display: none;
}

@media (min-width: 768px) {
  .navigation-items {
    display: block;
  }
}
</style>