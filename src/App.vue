<template>
  <div id="app">
    <a-layout type="flex" justify="center">
      <a-layout-header>
        <h1 class="title">
          <a-icon type="reddit" style="font-size: 2rem" /> Reddit Clone
        </h1>
      </a-layout-header>
      <a-page-header>R/MEME</a-page-header>
      <a-layout-content style="padding: 1rem">
        <router-view />
      </a-layout-content>
    </a-layout>
  </div>
</template>

<style land="scss">
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
@import url("./styles/styles.scss");

.ant-layout-header {
  background-color: #7dbcea !important;
}

.title {
  display: flex;
  height: 100%;
  font-size: 1.2rem;
  align-items: center;
  gap: 0.75rem;
}

.ant-page-header {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("./assets/background_image.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
}

.ant-page-header-content {
  padding: 2rem 0 !important;
  margin: 0;
  font-size: 3rem;
  font-weight: 600;
  color: #fff;
}
</style>
