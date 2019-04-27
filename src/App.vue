<template lang="pug">
  #app
    navbox
    app-section#landing(:header="false")
      app-title
    app-section#livestream(:header="false")
      stream-section
    app-section#about
      | The Columbus Glitchbus is a speedrun marathon hosted live on Twitch.tv, showcasing runners from all around Ohio
    // app-section#submit
    app-section#schedule
      | The schedule can currently be found here on
      a(style="color:#A239CA" href="https://horaro.org/cbusglitchbus/schedule1") Horaro
    app-section#venue
    app-section#donating
      cp-logo
      | All of the money raised from your generous donations over the course of the marathon will go directly to our cause, Child's Play!
</template>

<script>
import StreamSection from '@/components/StreamSection'
import AppSection from '@/components/AppSection'
import Navbox from '@/components/Navbox'
import CpLogo from '@/components/layout/CpLogo'
import AppTitle from '@/components/layout/AppTitle'
import axios from 'axios'

export default {
  name: 'app',
  components: {
    AppSection,
    Navbox,
    StreamSection,
    CpLogo,
    AppTitle
  },
  mounted() {
    const url = 'https://horaro.org/-/api/v1/schedules/3511b1e4rbb7ye7a9f'
    axios.get(url)
    .then(data=> {console.log(data)})
  }
}
</script>

<style lang="scss">
  @import '@/scss/base.scss';

  #app {
    background: linear-gradient(to bottom, $void 40%, $jewel 75%, $fuschia);
    overflow-x: hidden;
  }
</style>
