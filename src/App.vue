<template>
  <main id="app">
    <transition name="fade">
      <template v-if="preloading">
        <Preload />
      </template>
    </transition>
    
    <Topbar />
    <Actionbar
      :gradient="currentGradient"
      :palette="showingPalette"
      :showModal="showModal"
      :closeModals="closeModals"
      :downloadGradient="downloadGradient"
      :updateDirection="updateDirection"
      @togglePalette="togglePalette" />
    <List
      :gradients="gradients"
      :direction="currentDirection"
      :palette="showingPalette"
      :updateGradient="updateGradient" />
    <Display
      :gradient="currentGradient"
      :direction="currentDirection"
      :closeModals="closeModals"
      :updateDirection="updateDirection"
      :showModal="showModal"
      @updatedIndex="updateIndex"
      @closePalette="closePalette"
      @togglePalette="togglePalette" />
    <GradientModal
      :show="showingGradientModal"
      :closeModals="closeModals" />
    <CodeModal
      :gradient="currentGradient"
      :direction="currentDirection"
      :show="showingCodeModal"
      :closeModals="closeModals" />
  </main>
</template>

<script>
import Preload from './components/Preload';
import Topbar from './components/Topbar';
import Actionbar from './components/Actionbar';
import Display from './components/Display';
import List from './components/List';
import GradientModal from './components/modals/GradientModal';
import CodeModal from './components/modals/CodeModal';

import Download from './services/gradientDownloader';

import Gradients from '../gradients.json';

export default {
  name: 'app',
  data() {
    return {
      index: {},
      preloading: true,
      directionIndex: 2,
      currentDirection: 'to right',
      directions: ['to left', 'to bottom', 'to right', 'to top'],
      currentGradient: {
        name: null,
        colors: ['#ffffff', '#ffffff'],
      },
      gradients: [],
      showingPalette: false,
      showingGradientModal: false,
      showingCodeModal: false,
    };
  },
  components: {
    Preload,
    Topbar,
    Display,
    Actionbar,
    List,
    GradientModal,
    CodeModal,
  },

  methods: {
    showModal(type) {
      if (type === 'gradient') this.showingGradientModal = true;
      if (type === 'code') this.showingCodeModal = true;
    },

    closeModals() {
      this.showingGradientModal = false;
      this.showingCodeModal = false;
    },

    updateGradient(name) {
      const id = this.gradients.findIndex(gradient => gradient.name.replace(/\s/g, '') === name.replace(/\s/g, ''));
      this.index = id;
      if (this.showingPalette) this.showingPalette = false;
    },

    closePalette() {
      this.showingPalette = false;
    },

    togglePalette() {
      this.showingPalette = !this.showingPalette;
    },

    updateIndex(direction) {
      if (direction === 'up') {
        const updatedIndex = this.index + 1;
        this.index = (updatedIndex > this.gradients.length - 1) ? 0 : updatedIndex;
      } else if (direction === 'down') {
        const updatedIndex = this.index - 1;
        this.index = (updatedIndex < 0) ? this.gradients.length - 1 : updatedIndex;
      }
      this.showingPalette = false;
    },

    updateDirection(dir) {
      /* eslint-disable max-len  */
      const currentIndex = this.directionIndex;

      if (dir === 'up') {
        let newIndex = currentIndex + 1;
        newIndex = (newIndex >= this.directions.length) ? 0 : newIndex;
        this.directionIndex = newIndex;
      } else if (dir === 'down') {
        let newIndex = currentIndex - 1;
        newIndex = (newIndex < 0) ? this.directions.length - 1 : newIndex;
        this.directionIndex = newIndex;
      }
    },

    downloadGradient() {
      Download(
        this.currentDirection,
        this.currentGradient.name,
        ...this.currentGradient.colors,
      );
    },

    fetchGradients() {
      this.gradients = Gradients.reverse();
    },

    setCurrentGradient() {
      if (window.location.hash) {
        const gradientName = window.location.hash.substring(1);
        this.updateGradient(gradientName);
      } else {
        const randomId = Math.floor(Math.random() * this.gradients.length);
        this.index = randomId;
      }
    },

    fadePreloader() {
      const app = this;
      setTimeout(() => {
        app.preloading = false;
      }, 2000);
    },

    boot() {
      this.fetchGradients();
      this.setCurrentGradient();
      this.fadePreloader();
    },
  },
  watch: {
    index(val) {
      this.currentGradient = this.gradients[val];
      window.location.hash = this.currentGradient.name.replace(/\s/g, '');
    },
    directionIndex(id) {
      this.currentDirection = this.directions[id];
    },
  },
  mounted() {
    this.boot();
  },
};
</script>
