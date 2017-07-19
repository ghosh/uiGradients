<template>
  <transition name="modal">
    <div class="modal__mask" @click="close" v-show="show">
        <div class="modal__container" @click.stop>
            <slot></slot>
        </div>
    </div>
</transition>
</template>


<script>
export default {
  name: 'modal',
  props: ['show', 'onClose'],
  methods: {
    close() {
      this.onClose();
    },
  },
};
</script>
