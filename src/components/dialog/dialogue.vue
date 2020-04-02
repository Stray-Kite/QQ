<template>
  <mu-list>
    <div class="dialogue"
         v-for="item of messageList_x">
      <!--这里本来可以用动态类的，但是MUSE UI真的是很令人无语，定位都改不了，所以就用了条件渲染-->
      <template v-if="item._id === 0">
        <mu-list-item :ripple="false">
          <mu-list-item-title />

          <span class="content self" style="color: rgba(0, 0, 0, .8)">{{item.message}}</span>&nbsp;&nbsp;

          <mu-list-item-action>
            <mu-avatar>
              <img :src="userData.self.avatar" >
            </mu-avatar>
          </mu-list-item-action>
        </mu-list-item>
      </template>
      <template v-else>
        <mu-list-item :ripple="false">
          <mu-list-item-action>
            <mu-avatar>
              <img :src="userData.friend.avatar" >
            </mu-avatar>
          </mu-list-item-action>

          <mu-list-item-action>
          <span>
            <span class="content" style="color: rgba(0, 0, 0, .8)">{{item.message}}</span>
          </span>
          </mu-list-item-action>
        </mu-list-item>
      </template>
    </div>
  </mu-list>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    name: "",
    props: ['userData'],
    computed: {
      ...mapGetters(['nowMessageList']),
      // 获取到当前的聊天记录
      messageList_x() {
        // 筛选信息
        let message = this.nowMessageList.filter(x => x._id === this.userData.friend._id)[0]
        return message.list
      }
    },
    updated() {
      this.$emit('scrollC');
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../common/stylus/mixin.styl'
  .dialogue
    margin-top: 10px
    font-size: 16px
    background: color-g
    .content
      display: inline-block
      padding: 1.5vh
      background: #fff
      border-radius 4px
  .self
    background-color limegreen !important
    //人类迷惑行为
    white-space:nowrap
</style>
