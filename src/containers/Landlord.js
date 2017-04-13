import React,{Component, PropTypes} from 'react';
import { connect } from 'dva';

const bg=require("../assets/user_bg.png");
const userIcon=require("../assets/user_img_original.png");
const phone=require("../assets/phone.png");

const styles = {
  container: {
    width: '100%',
    // height: '100%',
    // backgroundColor: '#ededed',
    background: "url("+bg+") 100%",
    textAlign: 'center'
  },
  user:{
    lineHeight:"1.3rem"
  },
  iconIma:{
    marginTop:".6rem",
    maxWidth:"2rem"
  },
  text:{
    color:"#dcb93c",
    verticalAlign: "middle",
  }
};

class Landlord extends Component {
  render() {
    return(
      <div style={styles.container}>
         <img src={userIcon} alt="" style={styles.iconIma}/>
          <div style={styles.user}>
            <img src={phone} alt="" style={{verticalAlign: "middle"}}/>
            <span style={styles.text}>188999999</span>
          </div>
      </div>
    )
  }
}

Landlord.propTypes = {
};
Landlord.defaultProps = {
};
function mapStateToProps(state) {
  return {
    recordData: state.recordData
  };
}
export default connect(mapStateToProps)(Landlord);
