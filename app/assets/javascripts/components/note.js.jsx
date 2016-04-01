var Note = React.createClass({
  getInitialState: function() {
    return {
      //note: this.props.note,
      editing: false,
      newBodyValue: this.props.note.body
    };
  },
  //getDefaultProps: function() {
  //  return {
  //    null
  //  };
  //},
  validate: function() {
    var newBodyValue=this.refs.newBody.value;
    if (newBodyValue.length<=16) {
      this.setState({newBodyValue: newBodyValue});
    } else {
      this.refs.newBody.value = this.state.newBodyValue;
    }
  },
  edit: function(e) {
    this.setState({editing: true});
  },
  save: function(e) {
    if (this.state.newBodyValue!=this.props.note.body) {
      var correct_this = this;
      var note = this.props.note;
      $.ajax({
        type: "PATCH",
        url: 'notes/' + correct_this.props.note.id,
        data: { note: { body: this.state.newBodyValue } },
        dataType: 'JSON',
        success: function(newNote) {
          correct_this.props.handleUpdate(note, newNote);
          correct_this.setState({editing: false});
        }
      });
    }
  },
  remove: function(e) {
    var correct_this = this;
    e.preventDefault();
    $.ajax({
      type: "DELETE",
      url: 'notes/' + correct_this.props.note.id,
      dataType: 'JSON',
      success: function(note) {
        correct_this.props.handleRemove(correct_this.props.note);
      }
    });
  },
  renderNote: function() {
    return (
     <div className='note'>
       <span className='buttons'>
         <a href='#' onClick={ this.edit } className='edit'><i className='fa fa-pencil'></i></a>
         <a href='#' onClick={ this.remove } className='delete'><i className="fa fa-times"></i></a>
       </span>
       { this.props.note.body }
     </div>
    );
  },
  renderForm: function() {
    return (
      <div className='note'>
        <span className='buttons'>
          <a href='#' onClick={ this.save } className='save'><i className='fa fa-floppy-o'></i></a>
        </span>
        <textarea ref='newBody' onChange={this.validate} defaultValue={this.props.note.body}></textarea>
      </div>
    );
  },
  render: function() {
    if (this.state.editing) {
      return this.renderForm();
    } else {
      return this.renderNote();
    }
  }
});
