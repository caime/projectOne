export default {

  namespace: 'deviceList',

  state: {
    data: [
        {id:0,name:"my-device1","status":false},
        {id:1,name:"my-device2","status":true},
        {id:2,name:"my-device3","status":true}
        ],
  },

  effects: {
  },

  reducers: {
    sendCmd(state, action) {
      console.log({...state, ...action.payload});
      return {...state, ...action.payload};
    },
    test(state, action) {
      console.log("test");
      return state;
    }
  },

};
