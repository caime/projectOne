export default {

  namespace: 'userList',

  state: {
    users: [
    ],
  },

  effects: {
  },

  reducers: {
    loadData(state,action){
      let users=[
        {id:1,phone:"123898333"},
        {id:2,phone:"124598333"},
        {id:3,phone:"123398333"},
      ];
      return {...state,users}
    },
    remove(state,action){
      let users=state.users.filter(item=>item.id!=action.payload.id)
      return {...state,users}
    }
  },

};
