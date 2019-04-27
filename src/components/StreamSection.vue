<template lang="pug">
  .stream-section
    twitch-player(
      :channel="channel"
      height="720"
      width="1280")
</template>

<script>
import TwitchPlayer from 'vue-twitch-player'
export default {
  components: {
    TwitchPlayer
  },
  data() {
    return{
      channel: 'ColumbusGlitchbus'
    }
  }
}
</script>

<style lang="scss" scoped>
  .stream-section{
    padding: 3rem
  }
</style>
