<template>
  <div class="character-list d-flex flex-column bd-highlight mr-3 ml-5">
    <CharacterListItem :key="index" v-for="(character, index) in characters" :character="character" />
  </div>
</template>

<script>
// @ is an alias to /src
import CharacterListItem from '@/components/CharacterListItem.vue'

export default {
  name: 'character-list',
  components: {
    CharacterListItem
  },
  props: {
    characters: Array
  }
}
</script>