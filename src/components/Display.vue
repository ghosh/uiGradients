<template>
  <main class="display" :style="backgroundStyle">
    <div class="display__gradientname">
      <p class="noselect">{{gradient.name}}</p>
    </div>

    <ul class="nav" id="nav">
      <li class="nav__item" id="nav--prev" @click.prevent="updateIndex('down')">
        <a href="#"><LeftArrow class="nav__arrow nav__arrow--left"/></a>
      </li>
      <li class="nav__item" id="nav--next" @click.prevent="updateIndex('up')">
        <a href="#"><RightArrow class="nav__arrow nav__arrow--right"/></a>
      </li>
    </ul>

    <div class="display__footer">
      <p class="display__byline noselect">
        Built for the community by <a href="https://twitter.com/_ighosh" target="_blank" @click="trackTwitter">@_ighosh</a>
      </p>
    </div>

  </main>
</template>

<script>
import LeftArrow from '../assets/leftchev.svg';
import RightArrow from '../assets/rightchev.svg';

export default {
  name: 'display',
  props: ['gradient', 'direction', 'closeModals', 'updateDirection', 'showModal'],
  components: {
    LeftArrow, RightArrow,
  },
  computed: {
    backgroundStyle() {
      const colors = [...this.gradient.colors].join(', ');
      const direction = this.direction;
      return {
        background: `linear-gradient(${direction}, ${colors})`,
      };
    },
  },
  methods: {
    updateIndex(dir) {
      if (dir === 'up') this.$ga.trackEvent('gradient navigation', 'click', 'next');
      if (dir === 'down') this.$ga.trackEvent('gradient navigation', 'click', 'prev');
      this.$emit('updatedIndex', dir);
    },
    togglePalette() {
      this.$emit('togglePalette');
    },
    closePalette() {
      this.$emit('closePalette');
    },
    handleKeyboardEvents(event) {
      switch (event.which) {
        case 37: // left
          this.$ga.trackEvent('gradient navigation', 'keypress', 'next');
          this.updateIndex('down');
          break;
        case 39: // right
          this.$ga.trackEvent('gradient navigation', 'keypress', 'prev');
          this.updateIndex('up');
          break;
        case 38: // up
          this.$ga.trackEvent('gradient rotation', 'keypress', 'to-left');
          this.updateDirection('up');
          break;
        case 40: // down
          this.$ga.trackEvent('gradient rotation', 'keypress', 'to-right');
          this.updateDirection('down');
          break;
        case 16: // shift
          event.preventDefault();
          this.closeModals();
          this.$ga.trackEvent('toggle gradient palette', 'keypress');
          this.togglePalette();
          break;
        case 13: // enter
          this.closeModals();
          this.$ga.trackEvent('css modal display', 'keypress');
          this.showModal('code');
          break;
        case 32: // space
          this.closeModals();
          this.$ga.trackEvent('add modal display', 'keypress');
          this.showModal('gradient');
          break;
        case 27: // escape
          event.preventDefault();
          this.closePalette();
          this.closeModals();
          break;
        default:
      }
    },
    trackTwitter() {
      this.$ga.trackEvent('social', 'click', 'twitter');
    },
  },
  created() {
    window.addEventListener('keyup', this.handleKeyboardEvents);
  },
};
</script>
