var Note = React.createClass({
  getInitialState: function() {
    return {
      record: this.props.data
    };
  },
  getDefaultProps: function() {
    return {
      null
    };
  },
  render: function() {
    return (
  //    <div className='note'>{ this.props.record.body}</div>
   <div className='note'>{ this.state.record.body }</div>
    );
  }
});
