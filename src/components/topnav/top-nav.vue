<template>
  <div class="top-wrap">
    <mu-appbar class="top-nav"
               :zDepth="0">
      <!--等待添加弹出层按钮-->
      <!--头部左边头像-->
      <mu-avatar slot="left"
                 :size="30"
                 @click="showSidebar_x(true)"  style="width: 50px;height: 50px;">
          <img :src="avatar">
      </mu-avatar>

      <!--头部中间标题-->
      <div slot="default" class="title">
        <div class="title-item">{{headerTitle}}</div>
      </div>

      <!--头部右侧搜索图标-->
      <mu-icon slot="right"
               value="search"
               color="#2e2c6b"
               @click="showSearch" />
    </mu-appbar>
  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex';
  export default {
    name: "topNav",
    computed: mapState({
      avatar: state => state.data.self.avatar,
      headerTitle: 'headerTitle'
    }),
    methods: {
      ...mapMutations(['showSidebar', 'showSearch']),
      showSidebar_x(flag) {
        this.showSidebar({ flag });
      }
    },
    // created() {
    //   console.log(this.$store.state.sidebar)
    // }
  }
</script>

<style scoped lang="stylus">
  @import "../../common/stylus/mixin.styl";
  .mu-appbar
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: color-w
    .mu-avatar
      margin-left:12px
    .title
      padding-right: 12px
      .title-item
        margin: 0 auto
        width: 48%
        height: 34px
        line-height: 30px
        text-align: center
        border: 1px solid color-b
        border-radius: 4px
        font-weight: 500
        background: color-b
        color: color-w
</style>
