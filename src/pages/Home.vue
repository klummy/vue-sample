<template>
  <div>
    <Nav/>

    <main :class="$style.pageWrapper">
      <header :class="$style.homeHeader"></header>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import Nav from '@/components/Nav.vue';

@Component({
  components: {
    Nav,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" module>
.pageWrapper {
  margin: 0 auto;
  max-width: var(--page-width);
  padding: 10px;
  width: 100%;
}

.homeHeader {
}
</style>
