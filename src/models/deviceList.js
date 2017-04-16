export default {

  namespace: 'deviceList',

  state: {
    //假数据
    data: [],
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
    },
    //initial data
    loadData(state,action){
      let data=[
        {id:0,name:"my-device1","status":false},
        {id:1,name:"my-device2","status":true},
        {id:2,name:"my-device3","status":true}
      ];
      return {...state,data};
    },
    //unbind device
    unbind(state, action) {
      let id=action.payload.id;
      const data=state.data.filter(item=>item.id!==id);
      return {...state,data}
    },
    //rename device
    rename(state, action) {
      let data=state.data;
      let id=action.payload.id;
      let item=null;
      // let _old=data[id];
      // _old.name=action.payload.value;
      let i=0;
      item=state.data.filter((item,index)=>{
        if(item.id==id){
          i=index;
        }
        return item.id!==id
      });
      console.log(i+" ggg");
      // data.splice(id,1,_old);
      data[i].name=action.payload.value;
      return {...state,data}
    },
  },

};
