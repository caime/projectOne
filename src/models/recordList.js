export default {

  namespace: 'recordList',

  state: {
    records: [
        {msg:"您解除了cai的权限",action:3,time:"2017-5-9"},
        {msg:"钥匙盒子打开",action:0,time:"2017-5-9"},
        {msg:"钥匙盒子关闭",action:1,time:"2017-5-9"},
        {msg:"您为cai授权",action:2,time:"2017-5-9"},
        {msg:"您解除了cai的权限",action:3,time:"2017-5-9"},
        {msg:"钥匙盒子打开",action:0,time:"2017-5-9"},
        {msg:"钥匙盒子关闭",action:1,time:"2017-5-9"},
        {msg:"您为cai授权",action:2,time:"2017-5-9"},
        {msg:"您解除了cai的权限",action:3,time:"2017-5-9"},
    ],
  },

  effects: {
  },

  reducers: {
    test(state, action) {
      console.log("tepst");
      var newItem={msg:"您为cai授权",action:2,time:"2017-5-9"};
      var records=state.records;
      records.push(newItem);
      return {...state,records};
    }
  },

};
