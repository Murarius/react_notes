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
  edit: function() {
    alert('Editing Note');
  },
  remove: function() {
    alert('Removing Note');
  },
  render: function() {
    return (
     // <div className='note'>{ this.props.record.body}</div>
     <div className='note'>
       <span className='buttons'>
         <a onClick={ this.edit } className='edit'><i className='fa fa-pencil'></i></a>
         <a onClick={ this.remove } className='delete'><i className="fa fa-times"></i></a>
       </span>
       { this.state.record.body }
     </div>
    );
  }
});
