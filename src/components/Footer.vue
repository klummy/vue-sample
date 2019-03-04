<template>
  <footer :class="$style.footer">
    <div :class="$style.footerContainer">
      <div :class="$style.footerGroup">
        <h3 :class="$style.footerTitle" class="bold uppercase">Paysmosmo</h3>
        <p
          :class="$style.footerText"
        >Help give out inventory loans to cooperative members with ease.</p>
      </div>

      <div :class="$style.footerGroup">
        <h3 :class="$style.footerTitle">Contact</h3>
        <p :class="$style.footerText">Registration</p>
        <p :class="$style.footerText">About Us</p>
        <p :class="$style.footerText">Contact Us</p>
      </div>

      <div :class="$style.footerGroup">
        <h3 :class="$style.footerTitle">Help</h3>
        <p :class="$style.footerText">Privacy Policy</p>
        <p :class="$style.footerText">How it works</p>
        <p :class="$style.footerText">Terms &amp; Conditions</p>
      </div>

      <div :class="$style.footerGroup">
        <h3 :class="$style.footerTitle">Contact</h3>
        <p :class="$style.footerText">Registration</p>
        <p :class="$style.footerText">About Us</p>
        <p :class="$style.footerText">Contact Us</p>
      </div>
    </div>

    <div :class="$style.footerCopyright">&copy; {{currentYear}} Paysmosmo</div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
  private currentYear = new Date().getFullYear();
}
</script>


<style lang="scss" module>
.footer {
  background-color: #373a3c;
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
  margin-top: 70px;
}

.footerContainer {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: var(--page-width);
  padding: 50px 10px;
}

.footerText {
  width: 320px;
}

.footerCopyright {
  background-color: #2b2f31;
  padding: 30px 10px;
  text-align: center;
}
</style>
