import React, {Component} from 'react';

class List extends Component {
  render() {
    const {title} = this.props;
    return (
      <div>
        {title}
      </div>
    );
  }
}

List.propTypes = {
};

export default List;
