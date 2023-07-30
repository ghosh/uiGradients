<template>
  <li class="hex mono" @click="copy" :id="colorID" v-clipboard="copycolor">
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
import Clipboard from 'clipboard';

export default {
  name: 'swatch',
  props: ['color', 'gradient'],
  data() {
    let c = this.color;
    c = c.substring(1);
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
  computed: {
    copycolor() {
      return this.color;
    },
  },
  methods: {
    uncopy() {
      this.copied = false;
    },
    copy() {
      this.$ga.event('copy hex', 'click', this.gradient.name);
      this.copied = true;
      setTimeout(this.uncopy, 10);
    },
  },
  /**
   * Changes instance of clipboard to force
   * re-evaluation of text to copy
   */
  updated() {
    let c = this.color;
    c = c.substring(1);
    /* eslint-disable no-new */
    new Clipboard(`#c-${c}`, {
      text() {
        return `#${c}`;
      },
    });
  },
};
</script>
