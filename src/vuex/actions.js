import axios from 'axios';
const actions = {
  // 异步获取基础数据
  getAllData: async ({commit}) => {
    let self = {};
    let friends = [];
    await axios.get('../../static/mockdata.json').then(response => {
      self = response.data.self;
      friends = response.data.friend;
      console.log(response.data);
    }, response => {
      console.log("error");
    });
    commit('getData', {
      self, friends
    })
  },
  // 点击发送的响应函数，用了ES6的异步async
  sendValue: async ({commit}, {_id, message}) => {
    // 声明一个变量用来储存等下ajax获取的数据
    let reply = '',
        code = '';
    // 处理输入的内容，设置self为true，作为一个标记
    // （好让我们的渲染组件把这条消息添加到右边，也就是我们自己发的消息在右边）。
    commit('changeList', {self: true, _id, message});
    let data = {
      "reqType":0,
      "perception": {
        "inputText": {
          "text": message
        }
      },
      "userInfo": {
        "apiKey": "b5cfe638dcad41a5bd36236a9f48d7ab",
        "userId": "4e212e6d514fb0be"
      }
    };
    await axios.post('/api/v2', data).then(res => {
      //得到的回复
      reply = res.data.results[0].values;
      //恢复的状态码
      code = res.data.intent.code;
    });
    commit('changeList', {_id, message: reply.text});
    // 判断获取到的数据类型，在进行对应操作,读者们可以自行添加
    // if (code === 100000) {
    //   commit('changeList', { _id, message: reply.text })
    // } else if (code === 200000) {
    //   let data = reply.text + reply.url;
    //   commit('changeList', { _id, message: data })
    // } else if (code === 302000) {
    //   commit('changeList', { _id, message: '暂不支持此类对话' })
    // } else {
    //   commit('changeList', { _id, message: '暂不支持此类对话' })
    // }
  }
};

export default actions;
