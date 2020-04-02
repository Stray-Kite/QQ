<template>
  <div class="search">
    <mu-appbar :zDepth="0">
      <mu-button flat small @click="showSearch" slot="left">
        <mu-icon value="arrow_back"></mu-icon>
      </mu-button>
      <mu-text-field class="appbar-search-field"
                     slot="default"
                     placeholder="好友姓名..."
                     v-model="value" />
      <mu-button flat small slot="right" @click="input">
        <mu-icon value="search"></mu-icon>
      </mu-button>
    </mu-appbar>
    <mu-list>
      <mu-sub-header>在输入框中，输入好友的名字</mu-sub-header>
      <div v-for="item of friend">
        <mu-list-item>
          <mu-list-item-action @click="showPersonindex_x(item._id)">
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
  import { mapState, mapMutations } from 'vuex';
  export default {
    name: "search",
    data() {
      return {
        value: '',
        friend: []
      }
    },
    computed: {
      ...mapState({
        friends: state => state.data.friends
      })
    },
    methods: {
      ...mapMutations(['showSearch', 'showPersonindex', 'getActiveId']),
      // 点击展示个人主页
      showPersonindex_x(id) {
        this.showSearch();
        this.getActiveId({activeId: id});
        this.showPersonindex();
      },
      //点击搜索图标进行的操作
      input(val) {
        // 判断输入的值是否为空串
        if (this.value === '') {
          alert('不能为空哦');
          this.friend = [];
        } else if (isNaN(val)) {
          //筛选符合你搜索条件的好友
          this.friend = this.friends.filter(x => x.name === this.value)
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../common/stylus/mixin.styl'
  .search
    position: absolute
    z-index: 102
    top: 0
    left: 0
    width: 100%
    height: 100vh
    background: color-g
    .mu-appbar
      height: 10vh
      color: #000
      background: color-w
</style>
