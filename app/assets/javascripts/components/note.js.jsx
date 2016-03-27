var Note = React.createClass({
  getInitialState: function() {
    return {
      note: this.props.data,
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
         <a href='#' onClick={ this.edit } className='edit'><i className='fa fa-pencil'></i></a>
         <a href='#' onClick={ this.remove } className='delete'><i className="fa fa-times"></i></a>
       </span>
       { this.state.note.body }
     </div>
    );
  },
  renderForm: function() {
    return (
      <div className='note'>
        <span className='buttons'>
          <a href='#' onClick={ this.save } className='save'><i className='fa fa-floppy-o'></i></a>
        </span>
        <textarea defaultValue={this.state.note.body}></textarea>
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
