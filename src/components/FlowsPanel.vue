<script setup>
import Flow from './Flow.js';
import FlowCard from './FlowCard.vue';
import { ref } from 'vue';

const Flow1 = new Flow('Grind', '20m');
const Flow2 = new Flow('Growth', '10m');
const Flow3 = new Flow('Grind', '15m');
const Flow4 = new Flow('Grind', '9m');
const Flow5 = new Flow('Growth', '10m');
const Flow6 = new Flow('Work', '7m');
let Flows = ref([Flow1, Flow2, Flow3, Flow4, Flow5, Flow6]);

let size = ref(Flows.value.length);
let expanded = ref(true);

function expand() {
  expanded = !expanded;
}
</script>

<template>
  <div class="panel">
    <FlowCard
      v-for="(item, index) in Flows"
      :key="item.type"
      :type="item.type"
      :duration="item.duration"
      :color="item.color"
      :index="size - index"
      :expand="expanded"
      @click="expand"
    />
  </div>
</template>

<style>
.panel {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  margin: 3rem;
}
</style>
