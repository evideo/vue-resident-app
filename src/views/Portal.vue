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
  name: 'grid',
  data () {
      return {
      items: [
            {message: '门禁' , url:'https://img1.qdingnet.com/image-5502c70f-85bd-4f02-9e7c-498de3aaa23b.png'},
            {message: '房屋' , url:'https://img1.qdingnet.com/image-c2ec6da9-ee56-4b17-95ff-9003353dbb01.png'},
            {message: '接受' , url:'https://img1.qdingnet.com/image-601b1d40-73c6-46b5-aabc-67e0e1cd18bb.png'},
            {message: '更换' , url:'https://img1.qdingnet.com/image-b56ab00e-33ba-4ea2-8b6b-de88509dd1ae.png'},
            {message: '门禁' , url:'https://img1.qdingnet.com/image-5502c70f-85bd-4f02-9e7c-498de3aaa23b.png'},
            {message: '租售' , url:'https://img1.qdingnet.com/image-c2ec6da9-ee56-4b17-95ff-9003353dbb01.png'},
            {message: '邀请' , url:'https://img1.qdingnet.com/image-601b1d40-73c6-46b5-aabc-67e0e1cd18bb.png'},
            {message: '软管' , url:'https://img1.qdingnet.com/image-b56ab00e-33ba-4ea2-8b6b-de88509dd1ae.png'},
            {message: '软管' , url:'https://img1.qdingnet.com/image-b56ab00e-33ba-4ea2-8b6b-de88509dd1ae.png'},
            {message: '门禁' , url:'https://img1.qdingnet.com/image-5502c70f-85bd-4f02-9e7c-498de3aaa23b.png'}
        ],
        classObj: {}
      }
  },

  components: {
  }
}

</script>

<style lang="less" scoped>

  @import '../assets/css/mui.css';

body{font-size: 14px;height: 100%;background: #ffffff;}
#grid{
  .mui-table-view:after{content: none;}
  ul.mui-grid-view{padding:0;}
  li.mui-table-view-cell{width: 20%;font-size: 14px;}
  .mui-media-body{margin-top: 0px;}
  a.table-cell-size{background: transparent !important;border-radius: 50%;margin: 0;padding: 0;height: 3.6rem;width: 3.6rem;
    display: inherit;POSITION: RELATIVE;
    img{max-width: 3rem;position: absolute;top: 50%;margin-top: -1.5rem;left: 50%;margin-left: -1.5rem;}}
}

</style>
