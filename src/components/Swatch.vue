<template>
  <li class="hex mono" @click="copy" :id="colorID">
    <span
      class="hex__block"
      :style="{ background: color }"
      >
    </span>
    <span class="hex__name">{{color | lowercase}}</span>

    <transition name="fadeup">
      <span v-if="copied" class="hex__copied">copied</span>
    </transition>
  </li>
</template>


<script>
export default {
  name: 'swatch',
  props: ['color', 'gradient'],
  data() {
    const c = this.color.substring(1);
    return {
      copied: false,
      colorID: `c-${c}`,
    };
  },
  filters: {
    lowercase(value) {
      return (!value) ? '' : value.toString().toLowerCase();
    },
  },
  methods: {
    uncopy() {
      this.copied = false;
    },
    copy() {
      this.$ga.event('copy hex', 'click', this.gradient.name);
      navigator.clipboard.writeText(this.color);
      this.copied = true;
      setTimeout(this.uncopy, 10);
    },
  },
};
</script>
