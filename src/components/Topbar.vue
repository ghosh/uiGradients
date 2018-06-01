<template>
  <header class="header" v-once>
    <div class="header__branding">
      <Logo class="header__logo"/>
      <a href="https://skillshare.evyy.net/c/488940/298081/4650" target="_blank" class="sponsor" @click="goToSkillshare()">
        <Plus class="sponsor__add"/>
        <Skillshare class="sponsor__logo"/>
        <div class="sponsor__cta">
          <p class="sponsor__byline">Get 2 months free</p>
          <Arrow class="sponsor__arrow"/>
        </div>
      </a>
    </div>

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
import Plus from '../assets/plus.svg';
import Arrow from '../assets/arrow.svg';
import Logo from '../assets/logo.svg';
import Facebook from '../assets/facebook.svg';
import Twitter from '../assets/twitter.svg';
import Github from '../assets/github.svg';
import Skillshare from '../assets/skillshare.svg';

export default {
  name: 'topbar',
  components: {
    Arrow,
    Plus,
    Logo,
    Facebook,
    Twitter,
    Github,
    Skillshare,
  },
  methods: {
    goToSkillshare() {
      this.$ga.event('sponsor', 'click', 'Skillshare');
    },
    goToGithub() {
      this.$ga.event('social', 'click', 'github');
    },
    shareOnTwitter() {
      this.$ga.social('twitter', 'share', 'http://uigradients.com/');
      window.open(
        'http://twitter.com/share?url=https://uigradients.com&amp;text=Beautiful%20color%20gradients%20for%20designers%20and%20developers&amp;via=_ighosh',
        'twitter-share',
        'width=700,height=300',
      );
    },
    shareOnFacebook() {
      this.$ga.social('facebook', 'share', 'http://uigradients.com/');
      window.open(
        'http://www.facebook.com/sharer.php?u=https://uigradients.com',
        'facebook-share',
        'width=700,height=400',
      );
    },
  },
};
</script>
