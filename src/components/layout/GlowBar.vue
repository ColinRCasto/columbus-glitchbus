<template lang="pug">
  .bar
</template>

<script>
export default {
  name: 'GlowBar'
}
</script>

<style lang="scss" scoped>
.bar {
  filter: brightness(2) blur(1.6px);
  pointer-events: none;
  width: 1em;
  height: 0.1em;
  background-color: $stark;
  flex-grow: 1;
  margin: 1em;
  box-shadow: 0 0 5px $jewel, 0 0 10px $fuschia, 0 0 15px $jewel,
    0 0 20px $fuschia;
}
</style>
