<template>
  <div class="card-img">
    <img :src="imageURL" :alt="altName">
  </div>
  <div class="text">
    <h3>{{ projectTitle }}</h3>
    <p>{{ projectDetail }}</p>
  </div>
</template>
<script>
export default {
  props: {
    imageURL: String,
    altName: String,
    projectTitle: String,
    projectDetail: String,
  }
};
</script>
