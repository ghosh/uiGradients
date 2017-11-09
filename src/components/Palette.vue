<template>
  <div class="palette__gradient" :style="backgroundStyle" @click.prevent="changeGradient(gradient.name)">
      <p class="palette__name">{{ gradient.name }}</p>
  </div>
</template>

<script>
export default {
  name: 'palette',
  props: ['gradient', 'direction', 'updateGradient'],
  computed: {
    backgroundStyle() {
      const colors = [...this.gradient.colors];
      const { direction } = this;
      return {
        background: `linear-gradient(${direction}, ${colors})`,
      };
    },
  },
  methods: {
    changeGradient(name) {
      this.updateGradient(name);
    },
  },
};
</script>
