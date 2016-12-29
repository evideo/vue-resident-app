<template>
  <div class="vux-demo">
    <flexbox class="vux-1px-tb" :gutter="0">
      <flexbox-item class="vux-1px-r">
        <a class="item item1" href="/gz/326/0-0/0-0-0-0-0" mon="position=1&content=美食">
          <div class="img meishi"></div>
          <div class="text">声波开锁</div>
        </a>
      </flexbox-item>
      <flexbox-item class="vux-1px-r">
        <a class="item item2" href="/gz/326/0-0/0-0-0-0-0" mon="position=1&content=美食">
          <div class="img dianying"></div>
          <div class="text">到家提醒</div>
        </a>
      </flexbox-item>
      <flexbox-item class="vux-1px-r">
        <a class="item item3" href="/gz/326/0-0/0-0-0-0-0" mon="position=1&content=美食">
          <div class="img jiudian"></div>
          <div class="text">访客记录</div>
        </a>
      </flexbox-item>
      <flexbox-item>
        <a class="item item4" href="/gz/326/0-0/0-0-0-0-0" mon="position=1&content=美食">
          <div class="img yule"></div>
          <div class="text">报警记录</div>
        </a>
      </flexbox-item>
    </flexbox>
    <flexbox class="vux-1px-b" :gutter="0">
      <flexbox-item class="vux-1px-r">
        <a class="item item5" href="/gz/326/0-0/0-0-0-0-0" mon="position=1&content=美食">
          <div class="img huoguo"></div>
          <div class="text">声波邀请</div>
        </a>
      </flexbox-item>
      <flexbox-item class="vux-1px-r">
        <a class="item item6" href="/gz/326/0-0/0-0-0-0-0" mon="position=1&content=美食">
          <div class="img lvyou"></div>
          <div class="text">防区设置</div>
        </a>
      </flexbox-item>
      <flexbox-item class="vux-1px-r">
        <a class="item item7" href="/gz/326/0-0/0-0-0-0-0" mon="position=1&content=美食">
          <div class="img daijinquan"></div>
          <div class="text"></div>
        </a>
      </flexbox-item>
      <flexbox-item>
        <a class="item item8" href="/gz/326/0-0/0-0-0-0-0" mon="position=1&content=美食">
          <div class="img ktv"></div>
          <div class="text"></div>
        </a>
      </flexbox-item>
    </flexbox>
    <br/>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem } from '../components/flexbox'
export default {
  components: {
    Flexbox,
    FlexboxItem
  }
}
</script>

<style scoped lang="less">
@import '../common/styles/1px.less';

.vux-demo .test{
  height:50px;
  text-align:center;
  line-height: 50px;
}

.vux-demo .vux-flexbox {
  background-color: #fff;
}

.item {
  display: block;
  box-sizing: border-box;
  font-size: 12px;
  color: #303030;
  position: relative;
  margin-bottom: 10px;
}


.img {
  width: 40px;
  height: 40px;
  margin: 8px auto 5px;
  background-repeat: no-repeat;
  background-size: 40px auto!important;
  background-position: center;
}

.text {
  font-size: 13px;
  text-align: center;
  line-height: 1em;
}


.meishi {
  background: url(http://7xkjke.com1.z0.glb.clouddn.com/maintiendrai/icon_record_elevator_2.png) no-repeat
}

.dianying {
  background: url(http://7xkjke.com1.z0.glb.clouddn.com/maintiendrai/icon_record_arrived_2.png) no-repeat
}

.jiudian {
  background: url(http://7xkjke.com1.z0.glb.clouddn.com/maintiendrai/icon_record_visit_2.png) no-repeat
}

.yule {
  background: url(http://7xkjke.com1.z0.glb.clouddn.com/maintiendrai/icon_record_alarm_2.png) no-repeat
}

.huoguo {
  background: url(http://7xkjke.com1.z0.glb.clouddn.com/maintiendrai/icon_record_invite_2.png) no-repeat
}

.lvyou {
  background: url(http://7xkjke.com1.z0.glb.clouddn.com/maintiendrai/icon_record_galary_2.png) no-repeat
}

</style>
