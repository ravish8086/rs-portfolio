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
        icon: 'ion-ios-home'
      },
      {
        text: 'Services',
        path: `${ROOT}/services`,
        icon: 'ion-ios-construct'
      },
      {
        text: 'About',
        path: `${ROOT}/about`,
        icon: 'ion-ios-information-circle'
      },
      {
        text: 'Resume',
        path: `${ROOT}/resume`,
        icon: 'ion-ios-document'
      },
      {
        text: 'Work',
        path: `${ROOT}/mywork`,
        icon: 'ion-ios-briefcase'
      },
      {
        text: 'Interests',
        path: `${ROOT}/interests`,
        icon: 'ion-ios-happy'
      },
      {
        text: 'Contact',
        path: `${ROOT}/contact`,
        icon: 'ion-ios-mail'
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
