<template>
  <div class="frame-data d-flex flex-column">
    <h1>{{ selectedCharacter.name }}</h1>
    <div id="character-page" class="d-flex flex-row bd-highlight">
      <CharacterList :characters="characters" />
      <Character :character="selectedCharacter" />
    </div>
  </div>
</template>

<script>
import CharacterList from '@/components/CharacterList.vue'
import Character from '@/components/Character.vue'

export default {
  name: 'frame-data',
  components: {
    CharacterList,
    Character
  },
  data: function() {
    return {
      characters: [
        {
          key: 'scorpion',
          name: 'Scorpion'
        }, 
        {
          key: 'sub-zero',
          name: 'Sub Zero'
        }, 
        {
          key: 'noob-saibot',
          name: 'Noob Saibot'
        }, 
        {
          key: 'shang-tsung',
          name: 'Shang Tsung'
        }],
      selectedCharacter: {
        key: 'scorpion',
        name: "Scorpion"
      }
    }
  },
  created() {
    if (this.$route.params.character) {
      this.updateSelectedCharacter(this.$route.params.character);
    }
  },
  watch: {
    '$route' (to) {
      if (to.params.character) {
        this.updateSelectedCharacter(to.params.character);
      }
    }
  },
  methods: {
    updateSelectedCharacter(key) {
      this.selectedCharacter.key = key;
      this.selectedCharacter.name = this.getCharacterName(key);
    },
    getCharacterName(key) {
      for(let i = 0; i < this.characters.length; i++) {
        if(this.characters[i].key == key)
          return this.characters[i].name;
      }
    }
  }
}
</script>
