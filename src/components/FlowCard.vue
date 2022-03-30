<script setup>
import { reactive, ref } from 'vue';

const props = defineProps([
  'duration',
  'type',
  'color',
  'index',
  'expand',
  'length',
  'scale',
]);

const state = reactive({
  multiplier: ref(1),
});

function translatePixels(index, length, translation) {
  if (!props.expand) {
    state.multiplier = 1;
  }

  if (length % 2 === 1) {
    const middle = Math.round(length / 2);
    if (index < middle) {
      return props.scale * (translation * (middle - index)) - 10 * props.scale;
    }
    if (index === middle) {
      return -(40 * props.scale);
    }
    if (index > middle) {
      return props.scale * (-translation * (index - middle)) - 10 * props.scale;
    }
  } else {
    const middle = length / 2;
    const middleLeft = middle;
    const middleRight = middle + 1;
    if (index == middleLeft) {
      return (props.scale * translation) / 2 - 10 * props.scale;
    }
    if (index == middleRight) {
      return (props.scale * -translation) / 2 - 10 * props.scale;
    }
    if (index < middleLeft) {
      return (
        props.scale * (translation / 2 + translation * (middleLeft - index)) -
        10 * props.scale
      );
    }
    if (index > middleRight) {
      return (
        props.scale * (-translation / 2 - translation * (index - middleRight)) -
        10 * props.scale
      );
    }
  }
}

function ExpandedStyles() {
  if (!props.expand) {
    state.multiplier = 1;
  }
  return {
    '-webkit-transform':
      'translate(' + translatePixels(props.index, props.length, 20) + 'px, 0)',
    'z-index': props.index,
  };
}

function notExpandedStyles() {
  if (!props.expand) {
    state.multiplier = 1;
  }
  return {
    'z-index': props.index,
    '-webkit-transform':
      'translate(' + translatePixels(props.index, props.length, 6) + 'px, 0)',
  };
}

function flowStyles() {
  if (!props.expand) {
    state.multiplier = 1;
  }
  return {
    background: props.color,
    width: 17.5 * props.scale * state.multiplier + 'px',
    height: 20 * props.scale * state.multiplier + 'px',
    'border-radius': 3 * props.scale * state.multiplier + 'px',
    'box-shadow':
      3.5 * props.scale * state.multiplier +
      'px ' +
      props.scale * state.multiplier * 3.5 +
      'px 10px rgba(0, 0, 0, 0.22)',
    transition: '0.5s cubic-bezier(0.25,0.1,0,2.25)',
  };
}

function durationStyles() {
  if (!props.expand) {
    state.multiplier = 1;
  }
  return {
    right: -5 * props.scale * state.multiplier + 'px',
    bottom: -10 * props.scale * state.multiplier + 'px',
    'font-size': 4 * props.scale * state.multiplier + 'px',
    transform:
      'translate3d(0, 0,' + 15 * props.scale * state.multiplier + 'px)',
    'text-shadow':
      props.scale * state.multiplier * 1 +
      'px ' +
      props.scale * state.multiplier * 1 +
      'px 6px rgba(0, 0, 0, 0.3)',
    transition: '0.5s cubic-bezier(0.25,0.1,0,2.25)',
  };
}

function scaleUp() {
  if (props.expand) {
    state.multiplier = 1.2;
  }
}

function scaleDown() {
  if (props.expand) {
    state.multiplier = 1;
  }
}
</script>

<template>
  <div
    class="flowContainer"
    :style="[expand ? ExpandedStyles() : notExpandedStyles()]"
    @mouseover="scaleUp"
    @mouseleave="scaleDown"
  >
    <div class="flow" :style="flowStyles()"></div>
    <p class="duration" :style="durationStyles()">
      {{ props.expand ? duration : '' }}
    </p>
  </div>
</template>

<style>
.flow {
  display: flex;
  position: absolute;
  transform: perspective(400px) rotateY(-30deg);
}

.duration {
  color: white;
  position: relative;
  width: 0px;
  height: 0px;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
}

.flowContainer {
  transition: transform 0.5s;
  transition-timing-function: cubic-bezier(0.07, 0.83, 0.29, 0.94);
  position: relative;
  display: flex;
}
</style>
