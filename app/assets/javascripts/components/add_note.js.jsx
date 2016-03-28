this.AddNote = React.createClass({
  handleAdd: function(e) {
    var correct_this = this;
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: 'notes',
      data: { note: { body: ' New Note...' } },
      dataType: 'JSON',
      success: function(note) {
        correct_this.props.handleNewRecord(note);
      }
    });
  },
  render: function() {
    return (
    <div className='add-note'>
      <a href='#' onClick={this.handleAdd}>Add Note <i className="fa fa-plus"></i></a>
    </div>
    );
  }
});
