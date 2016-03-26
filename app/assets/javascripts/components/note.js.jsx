var Note = React.createClass({
  getInitialState: function() {
    return {
      record: this.props.data,
      editing: false
    };
  },
  getDefaultProps: function() {
    return {
      null
    };
  },
  renderNote: function() {
    return (
     <div className='note'>
       <span className='buttons'>
         <a onClick={ this.edit } className='edit'><i className='fa fa-pencil'></i></a>
         <a onClick={ this.remove } className='delete'><i className="fa fa-times"></i></a>
       </span>
       { this.state.record.body }
     </div>
    );
  },
  renderForm: function() {
    return (
      <div className='note'>
        <span className='buttons'>
          <a onClick={ this.save } className='save'><i className='fa fa-floppy-o'></i></a>
        </span>
        <textarea defaultValue={this.state.record.body}></textarea>
      </div>
    );
  },
  edit: function(e) {
    //e.preventDefault();
    this.setState({editing: true});
  },
  save: function(e) {
    this.setState({editing: false});

  },
  remove: function() {
    alert('Removing Note');
  },
  render: function() {
    if (this.state.editing) {
      return this.renderForm();
    } else {
      return this.renderNote();
    }
  }
});
