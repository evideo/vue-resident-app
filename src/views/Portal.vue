<template>
  <div id="grid">
    <ul  class="mui-table-view mui-grid-view">
      <li  class="mui-table-view-cell mui-media" ng-repeat="class in topClass"
           v-for="(item, index) in items">
        <a id="tab-cell-a" class="table-cell-size">
          <img :src="item.url" alt="" class="mui-media-object circle" />
        </a>
        <div id="body-text" class="mui-media-body">{{ item.message }}</div>
      </li>
    </ul>
</template>

<script>

export default {
  data () {
      return {
      items: [
            {message: '声波开锁' , url:'http://7xkjke.com1.z0.glb.clouddn.com/maintiendrai/icon_record_elevator_2.png'},
            {message: '到家提醒' , url:'http://7xkjke.com1.z0.glb.clouddn.com/maintiendrai/icon_record_arrived_2.png'},
            {message: '访客记录' , url:'http://7xkjke.com1.z0.glb.clouddn.com/maintiendrai/icon_record_visit_2.png'},
            {message: '报警记录' , url:'http://7xkjke.com1.z0.glb.clouddn.com/maintiendrai/icon_record_alarm_2.png'},
            {message: '声波邀请' , url:'http://7xkjke.com1.z0.glb.clouddn.com/maintiendrai/icon_record_invite_2.png'}
        ],
        classObj: {}
      }
  }
}

</script>

<style lang="less" scoped>

  @import '../assets/css/mui.css';

body{font-size: 12px;height: 100%;background: #ffffff;}
#grid{
  .mui-table-view-cell{borer: 1px solid #fcfcfc;}
  .mui-table-view:after{content: none;}
  ul.mui-grid-view{padding:0;}
  li.mui-table-view-cell{width: 25%;font-size: 12px;}
  .mui-media-body{margin-top: 0px;font-size: 12px;}
  a.table-cell-size{background: transparent !important;border-radius: 50%;margin: 0;padding: 0;height: 3.6rem;width: 3.6rem;
    display: inherit;POSITION: RELATIVE;
    img{max-width: 3rem;position: absolute;top: 50%;margin-top: -1.5rem;left: 50%;margin-left: -1.5rem;}}
}

</style>
