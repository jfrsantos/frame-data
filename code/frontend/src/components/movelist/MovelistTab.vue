<template>
  <div class="table-responsive">
    <table class="movelist-table table table-sm table-bordered table-dark bg-transparent table-hover">
      <thead>
        <th>Input</th>
        <th>Startup</th>
        <th>Active</th>
        <th>Recovery</th>
        <th>Cancel Advantage</th>
        <th>Hit</th>
        <th>Block</th>
        <th>Flawless Block</th>
        <th>Type</th>
        <th>Description</th>
      </thead>
      <tbody>
        <Move :key="index" v-for="(move, index) in movelist" :move="move" />
      </tbody>
    </table>
  </div>
</template>


<script>
import Move from '@/components/movelist/Move.vue'

export default {
  name: 'movelist-tab',
  components: {
    Move
  },
  props: {
    movelist: Array
  }
}
</script>