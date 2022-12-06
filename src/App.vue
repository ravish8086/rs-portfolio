<template>
  <div id="app">
    <Navigation :nav-links="navLinks"/>
    <router-view/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'

export default {
  components: {
    Navigation
  },
  data: () => ({
    navLinks: [
      {
        text: 'Home',
        path: '/',
        icon: 'ion-ios-home'
      },
      {
        text: 'Services',
        path: '/services',
        icon: 'ion-ios-construct'
      },
      {
        text: 'About',
        path: '/about',
        icon: 'ion-ios-information-circle'
      },
      {
        text: 'Resume',
        path: '/resume',
        icon: 'ion-ios-document'
      },
      {
        text: 'My Work',
        path: '/mywork',
        icon: 'ion-ios-briefcase'
      },
      {
        text: 'Interests',
        path: '/interests',
        icon: 'ion-ios-happy'
      },
      {
        text: 'Contact',
        path: '/contact',
        icon: 'ion-ios-mail'
      },
    ]
  })
}
</script>

<style>
@import 'https://unpkg.com/ionicons@4.2.2/dist/css/ionicons.min.css';

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
