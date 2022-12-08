<template>
  <section class="workspace">
    <h1>Services</h1>
    <main class="grid">
      <article>
        <div class="card-img">
          <i class="material-icons">language</i>
        </div>
        <div class="text">
          <h3>Web Development</h3>
          <p>Building design, code by code, with precision until vision comes to life.</p>
        </div>
      </article>
      <article>
        <div class="card-img">
          <i class="material-icons">assessment</i>
        </div>
        <div class="text">
          <h3>Data Visualization & Charts</h3>
          <p>Wide range of tools integration and over 150 chart types and over 7,000 custom maps</p>
        </div>
      </article>
      <article>
        <div class="card-img">
          <i class="material-icons">adb</i>
        </div>
        <div class="text">
          <h3>AI & ML</h3>
          <p>Build intelligence by utilizing programs and algorithms to mimic the actions and thought processes
            of humans.</p>
        </div>
      </article>
      <article>
        <div class="card-img">
          <i class="material-icons">domain</i>
        </div>
        <div class="text">
          <h3>Hosting & Deployment</h3>
          <p>AWS, Azure, Rackspace, Oracle Cloud (Life time free), Google Cloud</p>
        </div>
      </article>
      <article>
        <div class="card-img">
          <i class="material-icons">accessibility</i>
        </div>
        <div class="text">
          <h3>Accessibility</h3>
          <p>Follows all the industry standards, guideline, properly designed and coded, people with disabilities can
            use them</p>
        </div>
      </article>
      <article>
        <div class="card-img">
          <i class="material-icons">gpp_good</i>
        </div>
        <div class="text">
          <h3>Security & Performance</h3>
          <p>Building Application with no vulnerabilities and faster user experience</p>
        </div>
      </article>
    </main>
  </section>
</template>
<style>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  align-items: stretch;

}

.grid > article {
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
  margin-right: 20px;
}

.grid > article img {
  max-width: 100%;
}

.text {
  padding: 0 20px 20px;
}

.text > button {
  background: gray;
  border: 0;
  color: white;
  padding: 10px;
  width: 100%;
}

.card-img i {
  font-size: 3em;
  padding-top: 15px;
  color: var(--primary);
}

@media screen and (max-width: 759px) {
  .grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}
</style>
