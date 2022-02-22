<script setup>
const props = defineProps(['duration', 'type', 'color', 'index', 'expand']);

let styles = '';

styles = {
  background: props.color,
  position: 'relative',
  margin: '0rem',
};

if (!props.expand) {
  styles = {
    background: props.color,
    'z-index': props.index,
    'margin-right': props.index * 15 + 'px',
    position: 'absolute',
  };
}
</script>

<template>
  <div class="flow" :style="styles">
    <p>{{ expand ? duration : '' }}</p>
  </div>
</template>

<style>
.flow {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 40px;
  height: 40px;
  border-radius: 13%;
  padding: 1rem;
  color: white;
  transform: perspective(400px) rotateY(-30deg);
}
</style>
