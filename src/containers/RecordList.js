import React,{Component, PropTypes} from 'react';
import { connect } from 'dva';
import { List } from 'antd-mobile/lib';

const Item = List.Item;
const Brief = Item.Brief;

const styles = {
  container: {
    width: '100%',
    // height: '100%',
    backgroundColor: '#ededed',
    textAlign: 'center'
  }
};
const lockOpen=require("../assets/rlist_lockopen.png");
const lockClose=require("../assets/rlist_lockclose.png");
const empower=require("../assets/rlist_empower.png");
const remove=require("../assets/rlist_empower_remove.png");

class RecordList extends Component {
  
  componentDidMount() {
     const {dispatch} = this.props;
     dispatch({
      type: 'recordList/loadData',
      payload: {}
    });
  }
  render() {
    const {recordList}=this.props;
    return (
      <List style={{marginBottom:"200px"}}>
         {
            recordList.records.map((item,index)=>{
                var img=lockOpen;
                switch(item.action) {
                case 0: {
                  img = lockOpen;
                  break;
                }
                case 1: {
                  img = lockClose;
                  break;
                }
                case 2: {
                  img = empower;
                  break;
                }
                case 3: {
                  img = remove;
                  break;
                }
              };

              return (
                <Item key={index} style={styles.item}
                  thumb={img}
                  multipleLine
                  onClick={() => {}}
                >
                {item.msg}
                <Brief>
                  {item.time}
                </Brief>
                </Item>
              )
            })
          }
      </List>
    );
  }
}

RecordList.propTypes = {
  records:PropTypes.array
};
RecordList.defaultProps = {
  onClick: () => {},
  records: [
    {msg:"钥匙盒子打开",action:0,time:"2017-5-9"},
    {msg:"钥匙盒子关闭",action:1,time:"2017-5-9"},
    {msg:"您为cai授权",action:2,time:"2017-5-9"},
    {msg:"您解除了cai的权限",action:3,time:"2017-5-9"},
  ],
};
function mapStateToProps(state) {
  return {
    recordList: state.recordList
  };
}
export default connect(mapStateToProps)(RecordList);
