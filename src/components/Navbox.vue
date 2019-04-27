<template lang="pug">
  .navbox
    .nav-container
      .nav-button(@click="IdScroll('livestream')") {{'livestream' | prettyMono}}
      .nav-button(@click="IdScroll('about')") {{'about' | prettyMono}}
      .nav-button(@click="IdScroll('schedule')") {{'schedule' | prettyMono}}
      .nav-button(@click="IdScroll('venue')") {{'venue' | prettyMono}}
      .nav-button(@click="IdScroll('donating')") {{'donating' | prettyMono}}
</template>

<script>
export default {
  name: 'Navbox',
  methods: {
    IdScroll(anchor) {
      document
        .getElementById(anchor)
        .scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
}
</script>

<style lang="scss" scoped>
.navbox {
  position: fixed;
  top: 35vh;
  display: flex;
  justify-content: center;
  transition: all 0.2s;
  width: 10vw
}

.nav-container {
  position: sticky;
  bottom: -8em;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: flex-end;
}

.nav-button {
  background: $stark;
  color: $void;
  display: inline;
  cursor: pointer;
  padding: 0.2em;
  border: 0.1em solid $void;
  text-align: center;
  transition: all 0.2s;
  border-radius: 0.25em;
  flex-grow: 2;
  user-select: none;
  font-family: $mono-font;

  &:hover {
    background: $void;
    color: $stark;
    border-color: $stark;
  }
}
</style>
