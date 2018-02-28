<template>
  <section class="actionbar">
    <div class="actionbar__section">
        <a href="#" :class="{ 'burger': true, 'actionbar__burger': true, 'menu': true , 'is-active': palette}" @click.prevent="togglePalette()">
            <span class="menu__icon"></span>
            Show all gradients
        </a>
    </div>

    <div class="actionbar__section actionbar__section--swatch tac">
      <div 
        v-for="(color, index) in gradient.colors" 
        :key="index"
      >
        <Swatch
          :color="color"
          :gradient="gradient"
          :class="{'last' : index === (gradient.colors.length - 1)}"
          />
        <span class="hex__arrow">→&nbsp;</span>
      </div>
    </div>

    <div class="actionbar__section tar">
      <ul class="actionbar__nav">
        <li class="actionbar__nav-item">
          <a
            href="#changeGradientDirection"
            class="actionbar__nav-link"
            id="js-direction"
            @click.prevent="changeDirection()"
            data-tooltip="Rotate gradient">
            <Rotate class="actionbar__nav-icon actionbar__nav-icon--rotate" />
          </a>
        </li>
        <li class="actionbar__nav-item">
          <a
          href="#openCodeModal"
          class="actionbar__nav-link"
          id="js-code"
          @click.prevent="openModal('code')"
          data-tooltip="Get css">
            <Brackets class="actionbar__nav-icon actionbar__nav-icon--code" />
          </a>
        </li>
        <li class="actionbar__nav-item">
          <a
            href="#OpenGradientModal"
            class="actionbar__nav-link"
            id="js-gradient"
            @click.prevent="openModal('gradient')"
            data-tooltip="Add gradient">
            <Add class="actionbar__nav-icon actionbar__nav-icon--add" />
          </a>
        </li>
        <li class="actionbar__nav-item">
          <a
            href="#downloadGradient"
            class="actionbar__nav-link"
            id="js-download"
            @click.prevent="download()"
            data-tooltip="Get .jpg">
            <Download class="actionbar__nav-icon actionbar__nav-icon--download" />
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>


<script>
import Swatch from './Swatch';

import Add from '../assets/add.svg';
import Brackets from '../assets/code.svg';
import Rotate from '../assets/rotate.svg';
import Help from '../assets/help.svg';
import Download from '../assets/download.svg';

export default {
  name: 'actionbar',
  props: ['gradient', 'palette', 'showModal', 'updateDirection', 'downloadGradient'],
  components: {
    Rotate, Add, Brackets, Swatch, Help, Download,
  },
  methods: {
    togglePalette() {
      this.$ga.event('toggle gradient palette', 'click');
      this.$emit('togglePalette');
    },
    openModal(type) {
      if (type === 'gradient') this.$ga.event('add modal display', 'click');
      if (type === 'code') this.$ga.event('css modal display', 'click');
      this.showModal(type);
    },
    changeDirection() {
      this.$ga.event('gradient rotation', 'click', 'to-right');
      this.updateDirection('down');
    },
    download() {
      this.$ga.event('download gradient image', 'click');
      this.downloadGradient();
    },
  },
};
</script>
