<template>
  <div id="app">
    <a-layout type="flex" justify="center">
      <a-layout-header>
        <h1 class="header-title">
          <span class="icon">
            <a-icon type="reddit" />
          </span>
          Reddit Clone
        </h1>
        <a-affix :offset-top="0">
          <h2 class="subreddit-title">R/MEMES</h2>
        </a-affix>
        <a-collapse>
          <a-collapse-panel key="1" header="/r/Memes the original since 2008">
            <p>
              Memes! A way of describing cultural information being shared. An
              element of a culture or system of behavior that may be considered
              to be passed from one individual to another by nongenetic means,
              especially imitation.
            </p>
            <a-row style="margin-top: 1rem" type="flex" justify="space-between">
              <a-col :xs="6" :md="4">
                <a-statistic
                  title="Refugees"
                  :value="`23.8m`"
                  style="margin-right: 50px"
                >
                </a-statistic>
              </a-col>
              <a-col :xs="6" :md="4">
                <a-statistic
                  title="Memists Online"
                  :value="`28.3k`"
                  class="demo-class"
                >
                </a-statistic>
              </a-col>
              <a-col :xs="6">
                <a-statistic
                  title="Ranked by Size"
                  :value="`#10`"
                  class="demo-class"
                >
                </a-statistic>
              </a-col>
            </a-row>
          </a-collapse-panel>
        </a-collapse>
      </a-layout-header>
      <a-layout-content style="padding: 1rem">
        <router-view />
      </a-layout-content>
    </a-layout>
  </div>
</template>

<style lang="scss">
@import url("./styles/styles.scss");

.ant-layout-header {
  background-color: #fbfeff !important;
  height: min-content !important;
  padding: 0 !important;
}

.subreddit-title {
  padding: 2.5rem 0;
  font-size: 3.5rem;
  color: #fff;
  text-shadow: 2px 4px 1px #231f1e;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("./assets/background_image.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
}

.header-title,
.subreddit-subtitle {
  padding: 0 1.5rem;
}

.ant-collapse-header {
  font-size: 1.25rem;
  font-weight: 600;
}

.header-title {
  display: flex;
  height: 100%;
  font-size: 1.2rem;
  align-items: center;
  gap: 0.75rem;

  .icon {
    color: rgb(245, 245, 245);
    font-size: 1.5rem;
    width: 40px;
    height: 40px;
    background: rgb(255, 69, 0);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.ant-page-header-content {
  padding: 2rem 0 !important;
  margin: 0;
  font-size: 3rem;
  font-weight: 600;
  color: #fff;
}
</style>
