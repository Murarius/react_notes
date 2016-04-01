var Note = React.createClass({
  getInitialState: function() {
    return {
      note: this.props.note,
      editing: false
    };
  },
  //getDefaultProps: function() {
  //  return {
  //    null
  //  };
  //},
  validate: function() {
    var bodyValue=this.refs.newBody.value;
    if (bodyValue.length<=16) {
      this.setState({tmpBody: bodyValue});
    } else {
      this.refs.newBody.value = this.state.tmpBody;
    }
  },
  edit: function(e) {
    this.setState({editing: true});
  },
  save: function(e) {
    this.setState({editing: false});
  },
  remove: function(e) {
    var correct_this = this;
    e.preventDefault();
    $.ajax({
      type: "DELETE",
      url: 'notes/' + correct_this.state.note.id,
      dataType: 'JSON',
      success: function(note) {
        correct_this.props.handleRemove(correct_this.state.note);
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
        <textarea ref='newBody' onChange={this.validate} defaultValue={this.state.note.body}></textarea>
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
