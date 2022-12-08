<template>
  <div id="app">
    <Navigation :nav-links="navLinks"/>
    <router-view/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'

const ROOT = '/rs-portfolio'
export default {
  components: {
    Navigation
  },
  data: () => ({
    ROOT : '/rs-portfolio',
    navLinks: [
      {
        text: 'Home',
        path: `${ROOT}/home`,
        icon: 'home'
      },
      {
        text: 'About',
        path: `${ROOT}/about`,
        icon: 'engineering'
      },
      {
        text: 'Services',
        path: `${ROOT}/services`,
        icon: 'design_services'
      },
      {
        text: 'Resume',
        path: `${ROOT}/resume`,
        icon: 'contact_page'
      },
      {
        text: 'Work',
        path: `${ROOT}/mywork`,
        icon: 'work'
      },
      {
        text: 'Interests',
        path: `${ROOT}/interests`,
        icon: 'interests'
      },
      {
        text: 'Contact',
        path: `${ROOT}/contact`,
        icon: 'contact_mail'
      },
    ]
  })
}
</script>

<style>
figure {
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 10px;
  margin-inline-end: 0;
}

body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
