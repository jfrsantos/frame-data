<template>
  <div 
    class="character-item p-4 bd-highlight border bg-dark" 
    @click="selectCharacter(character.key)"
  >
    {{ character.name }}
  </div>
</template>

<script>
export default {
  name: 'CharacterListItem',
  props: {
    character: Object
  },
  methods: {
      selectCharacter(key) {
          this.$router.push({name: "character-frame-data", params: {character: key} });
      }
  }
}
</script>