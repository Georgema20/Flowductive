<script setup>
import Flow from './Flow.js';
import FlowCard from './FlowCard.vue';
import { reactive, ref } from 'vue';

const props = defineProps(['scale']);

const Flow1 = new Flow('Grind', '20m', 'a');
const Flow2 = new Flow('Growth', '10m', 'b');
const Flow3 = new Flow('Grind', '15m', 'c');
const Flow4 = new Flow('Grind', '9m', 'd');
const Flow5 = new Flow('Growth', '10m', 'e');
const Flow6 = new Flow('Work', '7m', 'f');

const state = reactive({
  Flows: ref([Flow1, Flow2, Flow3, Flow4, Flow5, Flow6]),
  expanded: ref(false),
});

function expand() {
  state.expanded = !state.expanded;
}
</script>

<template>
  <div class="panel" @click="expand">
    <FlowCard
      v-for="(item, index) in state.Flows"
      :key="item.id"
      :type="item.type"
      :duration="item.duration"
      :color="item.color"
      :index="state.Flows.length - index"
      :expand="state.expanded"
      :length="state.Flows.length"
      :scale="props.scale"
    />
  </div>
</template>

<style>
.panel {
  display: flex;
  position: relative;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  margin: 3rem;
  transition: transform 0.5s;
  transition-timing-function: cubic-bezier(0.07, 0.83, 0.29, 0.94);
}
</style>
