<template>
  <header class="header" v-once>
    <Logo class="header__logo" />
    <ul class="social header__social">
      <li>
        <a
          href="#" class="button button--twitter" @click.prevent="shareOnTwitter()">
          <Twitter class="button__icon" />
          <span>Share on Twitter</span>
        </a>
      </li>
      <li class="ml10">
        <a href="#" class="button button--facebook" @click.prevent="shareOnFacebook()">
          <Facebook class="button__icon" />
          <span>Share on Facebook</span>
        </a>
      </li>
      <li class="ml10">
        <a href="https://github.com/Ghosh/uiGradients" target="_blank" @click="goToGithub()">
          <Github class="header__github" />
        </a>
      </li>
    </ul>
  </header>
</template>

<script>
import Logo from '../assets/logo.svg';
import Facebook from '../assets/facebook.svg';
import Twitter from '../assets/twitter.svg';
import Github from '../assets/github.svg';

export default {
  name: 'topbar',
  components: {
    Logo,
    Facebook,
    Twitter,
    Github,
  },
  methods: {
    goToGithub() {
      this.$ga.event('social', 'click', 'github');
    },
    shareOnTwitter() {
      this.$ga.social('twitter', 'share', 'http://uigradients.com/');
      window.open(
        'http://twitter.com/share?url=https://uigradients.com&amp;text=Beautiful%20color%20gradients%20for%20designers%20and%20developers&amp;via=_ighosh',
        'twitter-share',
        'width=700,height=300');
    },
    shareOnFacebook() {
      this.$ga.social('facebook', 'share', 'http://uigradients.com/');
      window.open(
        'http://www.facebook.com/sharer.php?u=https://uigradients.com',
        'facebook-share',
        'width=700,height=400');
    },
  },
};
</script>
