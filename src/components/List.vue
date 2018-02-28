<template>
  <div :class="{ 'active': palette, 'palette': true }">

    <ul class="shortlist">
      <li 
        class="shortlist__item"
        v-for="(item, index) in shortlists"
        :key="index"
        :class="{ active: isActiveShortlist(item.name)}"
        :style="`backgroundColor: ${item.color}`"
        @click="filterGradients(item.name)"
        >
        <a 
          href="#"
          class="shortlist__link"
          v-if="currentFilter === item.name"
          @click.prevent.stop="clearFilter()"
          >
          clear
        </a>
      </li>
    </ul>

    <ul class="palette__list">
      <li
        class="palette__item"
        v-for="(gradient, index) in filteredGradients"
        :key="index"
        >
        <Palette
          :gradient="gradient"
          :direction="direction"
          :updateGradient="changeGradient"
          />
      </li>
    </ul>
  </div>
</template>

<script>
import Palette from './Palette';
import detect from '../services/colorDetector';

export default {
  name: 'list',
  props: ['gradients', 'palette', 'direction', 'updateGradient'],
  components: {
    Palette,
  },
  data() {
    return {
      currentFilter: false,
      shortlists: [
        { name: 'reds', color: '#cb2d3e' },
        { name: 'oranges', color: '#d76b26' },
        { name: 'yellows', color: '#ffd200' },
        { name: 'greens', color: '#159957' },
        { name: 'cyans', color: '#1cb5e0' },
        { name: 'blues', color: '#155799' },
        { name: 'magentas', color: '#ef32d9' },
        { name: 'whites', color: '#eaeaea' },
        { name: 'grays', color: '#c0c0cb' },
        { name: 'blacks', color: '#333333' },
      ],
    };
  },
  methods: {
    isActiveShortlist(color) {
      return (this.currentFilter === color);
    },
    changeGradient(name) {
      this.updateGradient(name);
    },
    clearFilter() {
      this.filterGradients(false);
    },
    filterGradients(name) {
      this.$ga.event('filter gradients', 'click', name);
      this.currentFilter = name;
    },
  },
  computed: {
    filteredGradients() {
      if (this.currentFilter) {
        switch (this.currentFilter) {
          case 'reds':
            return this.redPalettes;
          case 'oranges':
            return this.orangePalettes;
          case 'yellows':
            return this.yellowPalettes;
          case 'greens':
            return this.greenPalettes;
          case 'cyans':
            return this.cyanPalettes;
          case 'blues':
            return this.bluePalettes;
          case 'magentas':
            return this.magentaPalettes;
          case 'whites':
            return this.whitePalettes;
          case 'grays':
            return this.greyPalettes;
          case 'blacks':
            return this.blackPalettes;
          default:
            break;
        }
      }
      return this.classifiedColors;
    },
    // Identitifies a color range for each color in gradient
    classifiedColors() {
      const { gradients } = this;
      gradients.forEach((gradient) => {
        const tags = [];
        gradient.colors.forEach(color => tags.push(detect(color)));
        /* eslint-disable no-param-reassign */
        gradient.palletes = tags;
      });
      return gradients;
    },
    filterPalettes() {
      return color => this.classifiedColors.filter(gradient => gradient.palletes.includes(color));
    },
    cyanPalettes() {
      return this.filterPalettes('Cyans');
    },
    redPalettes() {
      return this.filterPalettes('Reds');
    },
    orangePalettes() {
      return this.filterPalettes('Oranges');
    },
    yellowPalettes() {
      return this.filterPalettes('Yellows');
    },
    greenPalettes() {
      return this.filterPalettes('Greens');
    },
    bluePalettes() {
      return this.filterPalettes('Blues');
    },
    magentaPalettes() {
      return this.filterPalettes('Magentas');
    },
    blackPalettes() {
      return this.filterPalettes('Blacks');
    },
    whitePalettes() {
      return this.filterPalettes('Whites');
    },
    greyPalettes() {
      return this.filterPalettes('Grays');
    },
  },
};
</script>
