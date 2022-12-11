<template>
  <div class="workspace">
    <h1>Project Gallery</h1>
    <main class="grid">
      <article v-for="(project, index) in buildCardObject()" :key="index">
        <RandomImage :imageURL="project.imageURL"
                     :altName="project.tag"
                     :projectTitle="project.title"
                     :projectDetail="project.detail">

        </RandomImage>
      </article>
    </main>
  </div>
</template>

<script lang="ts">
import RandomImage from '@/components/RandomImage.vue';

export default {
  components: {
    RandomImage
  },
  data: () => {
    return {
      projects: [{
        title: 'Car Pool',
        detail: 'Carpooling is the sharing of car journeys so that more than one person travels in a car',
        tag: 'car'
      }, {
        title: 'Home Vaastu',
        detail: 'Maximise the Home enery by analysing the directions',
        tag: 'house'

      }, {
        title: 'Book-e-nova',
        detail: 'Provide the context, and you will get suggestion which book to read',
        tag: 'book'
      }, {
        title: 'Pizza-ma-la',
        detail: 'Find nearest Pizza store',
        tag: 'pizza'
      }, {
        title: 'Trending Games',
        detail: 'Find the latest trending online games',
        tag: 'game'
      }, {
        title: 'Movie Critic',
        detail: 'Get the latest movie Critics',
        tag: 'movie'
      }]
    };
  },
  methods: {
    getImage(tag: string) {
      return `https://api.lorem.space/image/${tag}?w=300&h=220&a${Math.random()}`;
    },
    shuffle(array: any) {
      let currentIndex = array.length, randomIndex;

      while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }

      return array;
    },

    buildCardObject() {
      const cardObject = [];
      for (let eachProject of this.projects) {
        eachProject.imageURL = this.getImage(eachProject.tag);
        cardObject.push(eachProject);
      }
      return this.shuffle(cardObject);
    }
  }
};
</script>
