<template lang="pug">
  .section(:id="id")
    .section-header(v-if="header")
      glow-bar
      .section-title {{ id | prettyMono}}
      glow-bar
    .section-body
      .section-text
        slot
</template>

<script>
import GlowBar from '@/components/layout/GlowBar'

export default {
  name: "AppSection",
  components: {
    GlowBar
  },
  props: {
    id: {
      type: String,
      required: true
    },
    header :{
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  color: $stark;
  height: 100vh;
  width: 100vw;
}

.section-header {
  filter: brightness(2) blur(1.6px);
  pointer-events: none;
  font-size: 40px;
  font-family: $mono-font;
  text-align: center;
  color: $stark;
  font-weight: bold;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  text-shadow: 0 0 5px $stark, 0 0 10px $jewel, 0 0 15px $fuschia,
    0 0 20px $stark, 0 0 35px $jewel, 0 0 40px $fuschia;
}

.section-body {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;
  height: 100%;
}

.section-text {
  color: $stark;
  text-align: center;
  font-family: $primary-font;
  font-size: 1.5em;
  padding-left: 10em;
  padding-right: 10em;
  line-height: 1.5em;
}
</style>
