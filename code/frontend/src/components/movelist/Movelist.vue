<template>
  <div id="movelist">
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a 
          class="nav-link active"
          id="basic-tab"
          data-toggle="tab"
          href="#basic"
          role="tab"
          aria-controls="basic"
          aria-selected="true"
        >
          Basic Attacks
        </a>
      </li>
      <li class="nav-item">
        <a 
          class="nav-link" 
          id="kombo-tab"
          data-toggle="tab"
          href="#kombo"
          role="tab"
          aria-controls="kombo"
          aria-selected="true"
          >
            Kombo Attacks
        </a>
      </li>
      <li class="nav-item">
        <a 
          class="nav-link" 
          id="special-tab"
          data-toggle="tab"
          href="#special"
          role="tab"
          aria-controls="special"
          aria-selected="true"
          >
            Special Moves
        </a>
      </li>
      <li class="nav-item">
        <a 
          class="nav-link" 
          id="finisher-tab"
          data-toggle="tab"
          href="#finisher"
          role="tab"
          aria-controls="finisher"
          aria-selected="true"
        >
            Finishers
        </a>
      </li>
    </ul>

    <div class="tab-content">
      <div class="tab-pane fade show active" id="basic" role="tabpanel" aria-labelledby="basic-tab">
        <MovelistTab :movelist="movelist.basic_attacks" />
        </div>
      <div class="tab-pane fade" id="kombo" role="tabpanel" aria-labelledby="kombo-tab">
      <MovelistTab :movelist="movelist.kombo_attacks" />
      </div>
      <div class="tab-pane fade" id="special" role="tabpanel" aria-labelledby="special-tab">
        {{ movelist.special_attacks }}
      </div>
      <div class="tab-pane fade" id="finisher" role="tabpanel" aria-labelledby="finisher-tab">
        {{ movelist.finishers }}
      </div>
    </div>
  </div>
</template>

<script>
import MovelistTab from '@/components/movelist/MovelistTab.vue'

export default {
  name: 'movelist',
  components: {
    MovelistTab
  },
  props: {
    movelist: Object
  }
}
</script>