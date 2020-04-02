<template>
  <mu-drawer :open="sidebar.open"
             :docked="sidebar.docked"
             @close="showSidebar()">
    <div class="content">
      <div class="top">
        <mu-avatar :size="96"
                   @click="showPersonindex_x" >
          <img :src="self.avatar">
        </mu-avatar>
        <span class="name">{{self.name}}</span>
      </div>
      <div class="bottom">
        <span>{{self.explain}}</span>
      </div>
    </div>
    <mu-list>
      <mu-list-item button :ripple="false">
        <mu-list-item-action>
          <mu-icon value="inbox"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>影集</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button :ripple="false">
        <mu-list-item-action>
          <mu-icon value="grade"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>收藏夹</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button :ripple="false">
        <mu-list-item-action>
          <mu-icon value="send"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>钱包</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button :ripple="false">
        <mu-list-item-action>
          <mu-icon value="drafts"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>文件</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button :ripple="false" @click.native="showSidebar">
        <mu-list-item-action>
          <mu-icon value="close"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>关闭</mu-list-item-title>
      </mu-list-item>
    </mu-list>
  </mu-drawer>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';
  export default {
    name: "sidebar",
    computed:mapState({
      sidebar: 'sidebar',
      self: state => state.data.self
    }),
    methods: {
      ...mapMutations(['showSidebar', 'showPersonindex']),
      showPersonindex_x() {
        this.showSidebar();
        this.showPersonindex();
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../common/stylus/mixin.styl'
  .mu-drawer
    color: color-b
    .content
      position: relative
      height: 30vh
      padding-top: 1px
      margin-bottom: 50px
      .top
        padding: 20px
        .name
          position: absolute
          display: inline-block
          top: 5vh/*偏移*/
          left: 56% /*偏移*/
          font-size: 1.8em
          color color-d
      .bottom
        padding: 20px
        padding-left: 40px
        color color-c
</style>
