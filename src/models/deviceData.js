export default {

  namespace: 'deviceData',

  state: {
    lockState: 1
  },

  effects: {
  },

  reducers: {
    sendCmd(state, action) {
      console.log({...state, ...action.payload});
      return {...state, ...action.payload};
    }
  },

};
