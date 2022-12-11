<template>
  <div class="workspace">
    <h1>Interests</h1>
    <section class="accordion arrows">
      <input type="radio" name="accordion" id="cb1"/>
      <section class="box">
        <label class="box-title" for="cb1">Coding</label>
        <label class="box-close" for="acc-close"></label>
        <div class="box-content">
          <img src="https://www.computersciencedegreehub.com/wp-content/uploads/2016/02/what-is-coding-1024x683.jpg"
               alt="Coding Picture"/>
          <p>I love to code and build new application. Learning new technology and implementing it is my passion.</p>
        </div>
      </section>
      <input type="radio" name="accordion" id="cb2"/>
      <section class="box">
        <label class="box-title" for="cb2">Traveling</label>
        <label class="box-close" for="acc-close"></label>
        <div class="box-content">
          <img src="https://ceblog.s3.amazonaws.com/wp-content/uploads/2012/05/20172622/ce-travel.jpg"
               alt="Travel Picture"/>
          <p>I keep on traveling. As of now I have traveled more than 26 states in the USA </p>
        </div>
      </section>
      <input type="radio" name="accordion" id="cb3"/>
      <section class="box">
        <label class="box-title" for="cb3">Cooking</label>
        <label class="box-close" for="acc-close"></label>
        <div class="box-content">
          <img src="https://t4.ftcdn.net/jpg/03/32/75/39/360_F_332753934_tBacXEgxnVplFBRyKbCif49jh0Wz89ns.jpg"
               alt="Cooking Picture"/>
          <p>I can cook Indian and Indo-Chinese. Being a vegetarian I enjoy cooking vegetables and Paneer recipe. </p>
        </div>
      </section>
      <input type="radio" name="accordion" id="cb4"/>
      <section class="box">
        <label class="box-title" for="cb4">Meditation & Yoga</label>
        <label class="box-close" for="acc-close"></label>
        <div class="box-content">
          <img src="https://www.yogapoint.com/images-new/img-chakra-course.jpg"
               alt="Yoga Picture"/>
          <p>I have a daily practice to meditate at least for 10 min before going to bed. It gives me good sleep and
            reduces stress.</p>
        </div>
      </section>
      <input type="radio" name="accordion" id="cb5"/>
      <section class="box">
        <label class="box-title" for="cb5">Geopolitics & Current Affairs</label>
        <label class="box-close" for="acc-close"></label>
        <div class="box-content">
          <img src="https://thesecondangle.com/wp-content/uploads/2022/01/shutterstock_1009265824.jpg"
               alt="Geopolitics Picture"/>
          <p>I like to be updated with the latest world affairs. I read various news papers and n=watch news
            channels. </p>
        </div>
      </section>
      <input type="radio" name="accordion" id="cb6"/>
      <section class="box">
        <label class="box-title" for="cb6">Playing & Watching Chess</label>
        <label class="box-close" for="acc-close"></label>
        <div class="box-content">
          <img
              src="https://post.healthline.com/wp-content/uploads/2020/09/Three-African-American-men-playing-chess-732x549-thumbnail.jpg"
              alt="Chess Picture"/>
          <p>Though I am an average Chess player, but I like to watch GM's game and learn their strategy. My favorite
            players are Nakamura, Carlson, Nihal Sarin, Anand, Tal, Kasparov, Ivanchuk and Prag</p>
        </div>
      </section>

      <input type="radio" name="accordion" id="acc-close"/>
    </section>
  </div>
</template>
<style>
.accordion {
  margin: auto;
}

.accordion input {
  display: none;
}

.box {
  position: relative;
  background: var(--primary);
  color: white;
  height: 60px;
  transition: all .15s ease-in-out;
}

.box::before {
  content: '';
  position: absolute;
  display: block;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: none;
  box-shadow: 0 -1px 0 #e5e5e5, 0 0 2px rgba(0, 0, 0, .12), 0 2px 4px rgba(0, 0, 0, .24);
}

.box-title {
  height: 64px;
  line-height: 64px;
  padding: 0 20px;
  display: inline-block;
  cursor: pointer;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.box-content {
  width: calc(100% - 40px);
  padding: 30px 20px;
  font-size: 11pt;
  color: white;
  display: none;
}

.box-content img {
  width: 300px;
  height: 220px;
}

.box-close {
  position: absolute;
  height: 64px;
  width: 100%;
  top: 0;
  left: 0;
  cursor: pointer;
  display: none;
}

input:checked + .box {
  height: auto;
  margin: 16px 0;
  box-shadow: 0 0 6px rgba(0, 0, 0, .16), 0 6px 12px rgba(0, 0, 0, .32);
}

input:checked + .box .box-title {
  border-bottom: 1px solid rgba(0, 0, 0, .18);
}

input:checked + .box .box-content,
input:checked + .box .box-close {
  display: inline-block;
}

.arrows section .box-title {
  padding-left: 44px;
  width: calc(100% - 64px);
}

.arrows section .box-title:before {
  position: absolute;
  display: block;
  content: '\203a';
  font-size: 18pt;
  left: 20px;
  top: -2px;
  transition: transform .15s ease-in-out;
  color: white;
}

input:checked + section.box .box-title:before {
  transform: rotate(90deg);
}

@media screen and (max-width: 759px) {
  .box-content img {
    width: 9em;
    height: 7em;
  }
  .accordion {
    margin-right: 20px;
  }
}
</style>
