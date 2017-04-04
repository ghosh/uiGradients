<template>
  <li class="hex mono">
    <span 
      class="hex__block"
      :id="colorID"
      :style="{ background: color }" 
      @click="copy"
      >
        <transition name="fadeup">
          <span v-if="copied" class="hex__copied">copied</span>
        </transition>
    </span>
    <span class="hex__name">{{color | lowercase}}</span>
    <span class="hex__arrow">→&nbsp;</span>
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
      this.$ga.trackEvent('copy hex', 'click', this.gradient.name);
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
