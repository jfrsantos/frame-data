<template>
  <tr>
    <td>{{ move.input }}</td>
    <td>{{ move.startup }}</td>
    <td>{{ move.active }}</td>
    <td>{{ move.recovery }}</td>
    <td>{{ move.cancel_adv }}</td>
    <td>{{ move.hit }}</td>
    <td>{{ move.block }}</td>
    <td>{{ move.fblock }}</td>
    <td>{{ move.type }}</td>
    <td class="move-description">{{ move.description }}</td>
  </tr>
</template>

<script>
export default {
  name: 'move',
  props: {
    move: Object
  }
}
</script>