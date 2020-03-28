<template>
  <div class="character-profile d-flex flex-column mr-2 ml-2">
    
      <div class="d-flex flex-row flex-wrap mb-5">
        <div class="character-details d-flex flex-column mw-100">
          <div class="mb-3">{{ characterInfo.description }}</div>
          <h2>Tutorial</h2>
          <div class="video-container">
            <iframe 
              id="character-video"
              class="rounded-lg shadow mx-auto" 
              width="560"
              height="315"
              :src="characterInfo.video"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
          </div>
        </div>
        <img :src="characterInfo.icon" class="character-profile-pic" />
      </div>

      <div class="d-flex flex-column">
        <h2>Movelist</h2>
        <Movelist :movelist="characterInfo.movelist"/>
      </div>

  </div>
</template>

<script>
import characterJson from '@/assets/character.json'
import Movelist from '@/components/movelist/Movelist.vue'
export default {
  name: 'character-profile',
  components: {
    Movelist
  },
  props: {
    character: Object
  },
  data() {
    return {
      characterInfo: characterJson
    }
  }
}
</script>