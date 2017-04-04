<template>
  <Modal :show.sync="show" :on-close="closeModals">

      <h3 class="modal__title">
        Add New Gradient
      </h3>

      <p class="modal__text">
        Adding a gradient is easy. All gradients are read from a gradients.json file which is available in this project's repo. Simply add your gradient details to it and submit a pull request.
      </p>

      <a class="btn" href="https://github.com/Ghosh/uiGradients#contributing" target="_blank">
          Tell me more
      </a>

  </Modal>
</template>


<script>
import Modal from '../Modal';

export default {
  name: 'gradientmodal',
  props: ['show', 'closeModals'],
  components: {
    Modal,
  },
};
</script>
