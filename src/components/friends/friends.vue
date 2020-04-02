<template>
    <div class="friend">
      <div class="title-1">
        <mu-icon value="assignment_ind" />
        <span class="text">同步电话联系</span>
        <mu-button small flat color="white" class="btn">
          <mu-icon value="chevron_right"></mu-icon>
        </mu-button>
      </div>
      <div class="tab">
        <mu-tabs center full-width>
          <mu-tab value="tab1"
                  iconClass="i-1"
                  titleClass="t-1"
                  disabled>
            <mu-icon value="person_add" right></mu-icon>新朋友
          </mu-tab>
          <mu-tab value="tab2"
                  iconClass="i-2"
                  titleClass="t-1"
                  disabled>
            <mu-icon value="people" right></mu-icon>群组
          </mu-tab>
          <mu-tab value="tab3"
                  iconClass="i-3"
                  titleClass="t-1"
                  disabled>
            <mu-icon value="person" right></mu-icon>可能认识的人
          </mu-tab>
        </mu-tabs>
      </div>
      <div class="title-2">
        <span style="color: rgba(0, 0, 0, .8)">我的动态</span>
      </div>
      <div class="mac">
        <mu-list>
          <mu-list-item avatar button :ripple="false">
            <mu-list-item-action>
              <mu-icon value="folder"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-title>
              <span slot="describe">
                  <span style="color: rgba(0, 0, 0, .5)">努力改变自己</span>
              </span>
            </mu-list-item-title>

            <mu-list-item-action>
              <span class="time">2019.10.1</span>
            </mu-list-item-action>
          </mu-list-item>
        </mu-list>
      </div>
      <div class="title-3">
        <span style="color: rgba(0, 0, 0, .8)">我的朋友</span>
      </div>
      <mu-list>
        <!--好友列表渲染-->
        <div v-for="item of friends" class="item">
          <mu-list-item avatar button :ripple="false"
                        @click="showPersonindex(item._id)">
            <mu-list-item-action>
              <mu-avatar>
                <img :src="item.avatar">
              </mu-avatar>
            </mu-list-item-action>

            <mu-list-item-title>{{item.name}}</mu-list-item-title>

            <mu-list-item-action>
              <mu-icon value="chat_bubble"></mu-icon>
            </mu-list-item-action>
          </mu-list-item>
        </div>
      </mu-list>
    </div>
</template>

<script>
  export default {
    name: "friends",
    computed: {
      // 获取全部好友
      friends() {
        return this.$store.state.data.friends
      }
    },
    methods: {
      // 点击展示个人主页
      showPersonindex(e) {
        this.$store.commit('getActiveId', { activeId: e });
        this.$store.commit('showPersonindex');
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../common/stylus/mixin.styl'
  .friend
    .item
      background color-w
    .title-1
      position:relative
      height: 8vh
      line-height: 8vh
      text-align:center
      .mu-icon
        position: absolute;
        top:50%;
        left: 10%;
        transform:translate(-50%, -50%);
        color: color-b
      .btn
        position: absolute;
        top:50%;
        left: 100%;
        transform:translate(-50%, -50%);
        color: color-b
      .text
        display: inline-block
        vertical-align: top
        font-size: 1.2em
    .tab
      height: 12vh
      overflow:hidden
      background: color-w
      .mu-tabs
        background:color-w
        color:color-b
    .title-2
      padding-left:4vw
      height: 6vh
      line-height: 6vh
    .mac
      position:relative
      height: 10vh
      background: color-w
    .title-3
      padding-left:4vw
      height: 4vh
      line-height: 5vh
</style>
