import React,{Component} from 'react';
import { connect } from 'dva';
import { List, InputItem, WhiteSpace, Button ,DatePicker, CustomChildren } from 'antd-mobile/lib';
import { createForm } from 'rc-form';
import moment from 'moment';
import 'moment/locale/zh-cn';
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';

const styles = {
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: '0px',
    top: '0px',
    backgroundColor: '#ededed',
    textAlign: 'center'
  },
  inputGroup:{
    margin:"1rem 0"
  },
  btn:{
    margin:"1rem .5rem 3rem .5rem",
    background:"#dcb93c",
    color:'#fff',
  },
  vcodeBox:{
    position:"relative",
    vcode:{position:"absolute",right:"0",top:"0",
    borderRadius:"0",background:"#dcb93c",color:"#fff"},
  }
};

const codeIcon = require('../assets/message.png');
const phoneIcon=require('../assets/phone.png');
const pwIcon=require('../assets/password.png');
const pw_display=require('../assets/pw_display.png');
const pw_hide=require('../assets/pw_hide.png');
const timeIcon=require('../assets/time.png');

const zhNow = moment().locale('zh-cn').utcOffset(8);
const maxDate = moment('2016-12-03 +0800', 'YYYY-MM-DD Z').utcOffset(8);
const minDate = moment('2015-08-06 +0800', 'YYYY-MM-DD Z').utcOffset(8);

class AddUserPage extends Component {
    constructor(props){
        super(props)
        this.state={
            date: zhNow,
            dpValue: null,
            visible: false,
            bt:null,
            et:null,
        }
    }
    onChange1 = (bt) => {
        // console.log('onChange', date);
        this.setState({
        bt,
        });
    }
     onChange2 = (et) => {
        // console.log('onChange', date);
        this.setState({
        et,
        });
    }
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div style={styles.container}>
        <div style={styles.content}>
          <List style={styles.inputGroup}>
            <InputItem
            {...getFieldProps('phone')}
            placeholder="手机号码"
            type="phone"
            autoFocus
            >
            <div style={{ backgroundImage: 'url('+phoneIcon+')', backgroundSize: 'cover', height: '0.44rem', width: '0.44rem' }} />
            </InputItem>
            
            <DatePicker className="forss"
                mode="datetime"
                onChange={this.onChange1}
                value={this.state.bt}
                >
                <List.Item thumb={timeIcon}>入住</List.Item>
            </DatePicker>

            <DatePicker className="forss"
                mode="datetime"
                onChange={this.onChange2}
                value={this.state.et}
                >
                <List.Item thumb={timeIcon}>离开</List.Item>
            </DatePicker>
          </List>
          <Button style={styles.btn} className="btn" onClick={()=>location.href='/#/success'}>确定</Button>
        </div>
      </div>
    );
  }
}

AddUserPage.propTypes = {
};

const AddUserForm = createForm()(AddUserPage);

export default connect()(AddUserForm);
