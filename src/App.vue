<template>
  <section>
    <div id="app">
      <transition
        name="slide"
        :enter-active-class="enterActiveClass"
      >
        <keep-alive>
          <router-view class="view"></router-view>
        </keep-alive>
      </transition>
    </div>
    <community></community>
  </section>
</template>

<script>
//import Advertisement from './views/Advertisement'
import Portal from './views/Portal'
import Community from './views/Community'

export default {
  name: 'app',
  data () {
      return {
        enterActiveClass: 'animated fadeInRight',
        classObj: {}
      }
  },
  components: {
//    Advertisement,
//    Portal
      Community
  }
}


</script>

<style>
  @import './assets/css/carousel.css';
  @import './assets/css/zhihu.css';

  #app {
    max-width: 800px;
    margin: 0 auto;
    margin-top: 0px;
    margin-right: auto;
    margin-bottom: 0px;
    margin-left: auto;
    /* position: relative; */
  }


</style>
