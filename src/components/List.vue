<template>
  <div :class="{ 'active': palette, 'palette': true }">

    <ul class="shortlist">
      <template v-for="item in shortlists">
        <li class="shortlist__item" :style="`backgroundColor: ${item.color}`" @click="filterGradients(item.name)" :class="{ active: isActiveShortlist(item.name)}">
          <a href="#" class="shortlist__link" v-if="currentFilter === item.name" @click.prevent.stop="clearFilter()">
            clear
          </a>
        </li>
      </template>
    </ul>

    <ul class="palette__list">

      <li class="palette__item" v-for="gradient in filteredGradients" :key="gradient.name">
        <Palette
          :gradient="gradient"
          :direction="direction"
          :updateGradient="changeGradient" />
      </li>

    </ul>
  </div>
</template>

<script>
import Palette from '@/components/Palette';
import detect from '@/services/colorDetector';

export default {
  name: 'list',
  props: ['gradients', 'palette', 'direction', 'updateGradient'],
  components: {
    Palette,
  },
  data() {
    return {
      currentFilter: false,
      classifiedGradients: [],
      groupedPaletteMap: {},
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
  watch: {
    gradients: {
      immediate: true,
      handler(gradients) {
        const classified = gradients.map(gradient => ({
          ...gradient,
          palletes: gradient.colors.map(color => detect(color)),
        }));
        this.classifiedGradients = classified;

        const grouped = {};
        classified.forEach((gradient) => {
          new Set(gradient.palletes).forEach((palette) => {
            if (!grouped[palette]) grouped[palette] = [];
            grouped[palette].push(gradient);
          });
        });
        this.groupedPaletteMap = grouped;
      },
    },
  },
  computed: {
    filteredGradients() {
      if (this.currentFilter) {
        const key = this.currentFilter.charAt(0).toUpperCase() + this.currentFilter.slice(1);
        return this.groupedPaletteMap[key] || this.classifiedGradients;
      }
      return this.classifiedGradients;
    },
  },
};
</script>
