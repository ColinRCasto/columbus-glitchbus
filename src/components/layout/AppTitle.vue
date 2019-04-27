<template lang="pug">
  .app-title
    .text.top
      glow-bar.lad.left
      p {{ 'columbus' | prettyMono}}
      glow-bar.lad.right
    img.bus(src='@/assets/bus-logo.png')
    .text.bottom
      glow-bar.lad.left
      p {{ 'glitchbus' | prettyMono}}
      glow-bar.lad.right
    .footnote
      p An Ohio speedrun marathon, beniffitting Child's Play
</template>

<script>
import GlowBar from '@/components/layout/GlowBar'

export default {
  name: 'AppTitle',
  components: {
    GlowBar
  }
}
</script>

<style lang="scss" scoped>
.app-title{
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  background-image: url('../../assets/ohio.png');
  background-repeat: no-repeat;
  background-position: center;
}

.text{
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  font-size: 15rem;
  font-family: $mono-font;
  font-weight: 900;

  p{
    text-shadow: 0 0 5px $stark, 0 0 10px $jewel, 0 0 15px $fuschia,
      0 0 20px $stark, 0 0 35px $jewel, 0 0 40px $fuschia;
    filter: brightness(1) blur(1.6px);
  }
}

.top{
  width: 105vw
}

.bottom{
  width: 90vw
}

.lad{
  border-radius: 2rem;
}

.left{
  margin-right: -0.5vw
}

.right{
  margin-left: -0.5vw
}

.bus{
  height: 40vh;
  margin-top: -10vh;
  margin-bottom: -10vh;
  img {
    height: 100%;
    width: auto;
  }
}

.footnote{
  font-family: $primary-font
}
</style>
