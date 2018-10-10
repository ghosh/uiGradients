<template>
  <Modal :show.sync="show" :on-close="closeModal">

  <h3 class="modal__title">
    Copy CSS code
  </h3>

  <div class="modal__content">

    <div class="modal__success" v-if="copied">
      <p>{{this.showSuccessMessage()}}</p>
    </div>

<pre class="codeblock" v-else><code>
  <span class="codeblock__property">background</span>: <span class="codeblock__spec">{{ this.gradient.colors[0] | lowercase }}</span>; <span class="codeblock__comment">/* fallback for old browsers */</span>
  <span class="codeblock__property">background</span>: -webkit-linear-gradient({{ this.directionWebkit }}, <span class="codeblock__spec">{{ [...this.gradient.colors].join(', ') | lowercase }}</span>); <span class="codeblock__comment">/* Chrome 10-25, Safari 5.1-6 */</span>
  <span class="codeblock__property">background</span>: linear-gradient({{ this.direction }}, <span class="codeblock__spec">{{ [...this.gradient.colors].join(', ') | lowercase }}</span>); <span class="codeblock__comment">/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */</span>
</code></pre>

</div>

      <button
        class="btn"
        id="js-copy"
        v-clipboard="copyData"
        @success="handleSuccess"
      >
          Click to copy
      </button>

  </Modal>
</template>


<script>
import Modal from '../Modal';

export default {
  name: 'codemodal',
  props: ['show', 'gradient', 'direction', 'directionWebkit', 'closeModals'],
  components: {
    Modal,
  },
  data() {
    return {
      copied: false,
    };
  },
  filters: {
    lowercase(value) {
      return (!value) ? '' : value.toString().toLowerCase();
    },
  },
  computed: {
    copyData() {
      return `background: ${this.gradient.colors[0]};  /* fallback for old browsers */
background: -webkit-linear-gradient(${this.directionWebkit}, ${[...this.gradient.colors].reverse().join(', ')});  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(${this.direction}, ${[...this.gradient.colors].reverse().join(', ')}); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;
    },
  },
  methods: {
    closeModal() {
      this.closeModals();
      this.copied = false;
    },
    showSuccessMessage() {
      const messages = [
        '👊 You got it! Go make something awesome.',
        '👌 Excellent Choice! It\'ll look amazing.',
        '🙌 Very well, master.',
        '👍 Done. Go for it.',
        '✌️ Nice one! You have good taste.',
      ];
      const { length } = messages;
      const randomMessage = Math.round(Math.random() * (length - 1));
      return messages[randomMessage];
    },
    handleSuccess() {
      const self = this;
      this.$ga.event('copy css', 'click', this.gradient.name);
      this.copied = true;
      setTimeout(() => { self.copied = false; }, 1000);
    },
  },
};
</script>
