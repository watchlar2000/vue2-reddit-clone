<template>
  <a-collapse>
    <a-collapse-panel key="1" header="r/Memes the original since 2008">
      <a-row type="flex" justify="center">
        <a-col :md="16">
          <p>
            Memes! A way of describing cultural information being shared. An
            element of a culture or system of behavior that may be considered to
            be passed from one individual to another by nongenetic means,
            especially imitation.
          </p>
          <a-row class="mt-1" type="flex" justify="space-between">
            <a-col :xs="6" :md="5">
              <a-statistic title="Refugees" :value="`23.8m`"> </a-statistic>
            </a-col>
            <a-col :xs="6" :md="5">
              <a-statistic
                title="Memists Online"
                :value="`28.3k`"
                class="demo-class"
              >
              </a-statistic>
            </a-col>
            <a-col :xs="6" :md="5">
              <a-statistic
                title="Ranked by Size"
                :value="`#10`"
                class="demo-class"
              >
              </a-statistic>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </a-collapse-panel>
  </a-collapse>
</template>

<script>
export default {
  name: "HeaderDescription",
};
</script>
