<template>
  <section class="workspace">
    <div class="hero-area">
      <div class="leftPanel">
        <div class="hero-caption"><span class="subheading">Hey! I am</span>
          <h1>RaVi ShAnKaR !</h1>
          <div>
            <TypeWriter></TypeWriter>
          </div>
        </div>
      </div>
      <div class="rightPanel">
        <Hero></Hero>
      </div>
    </div>
  </section>
</template>

<script>
import TypeWriter from "@/components/TypeWriter.vue";
import Hero from "@/components/Hero.vue";

export default {
  components: {
    TypeWriter, Hero
  },
}
</script>

<style>
@import "@/assets/css/home.css";
</style>
