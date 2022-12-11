<template>
  <div class="card-img flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img :src="imageURL" :alt="altName">
        <div class="text">
          <h3>{{ projectTitle }}</h3>
          <p>{{ projectDetail }}</p>
        </div>
      </div>
      <div class="flip-card-back">
        <h3>Technology</h3>
        <ul v-for="(tech, index) in technology" :key="index">
          <li>{{tech}}</li>
        </ul>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  props: {
    imageURL: String,
    altName: String,
    projectTitle: String,
    projectDetail: String,
    technology: []
  }
};
</script>
<style>
.flip-card {
  background-color: transparent;
  perspective: 1000px;
  height: 350px
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 var(--shade);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  color: black;
}

.flip-card-back {
  background-color: var(--primary);
  color: white;
  transform: rotateY(180deg);
}

.flip-card-back ul li {
  text-align: left;
}
</style>
