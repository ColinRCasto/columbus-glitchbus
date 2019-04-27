<template lang="pug">
  img.cp-logo(src='@/assets/cp-center-white-background.png')
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .cp-logo {
    filter: blur(0.6px);
    box-shadow: 0 0 5px $jewel, 0 0 10px $fuschia, 0 0 15px $jewel,
      0 0 20px $fuschia;
    border-radius: 50%;
    margin-bottom: 5vh;
    margin-left: auto;
    margin-right: auto;
  }
</style>
