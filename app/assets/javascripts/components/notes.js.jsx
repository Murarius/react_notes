this.Notes = React.createClass({
  getInitialState: function() {
    return {
      notes: this.props.data
    };
  },
  getDefaultProps: function() {
    return {
      notes: []
    };
  },
  addRecord: function(note) {
    var notes = this.state.notes.slice();
    notes.push(note);
    this.setState({notes: notes});
  },
  updateRecord: function(note, newNote) {
    var notes = this.state.notes.slice();
    var index = notes.indexOf(note);
    notes[index]=newNote;
    //notes.splice(index, 1, note);
    this.replaceState({notes: notes});
  },
  removeRecord: function(note) {
    var notes = this.state.notes.slice();
    var index = notes.indexOf(note);
    notes.splice(index, 1);
    this.replaceState({notes: notes});
  },
  render: function() {
    var correct_this = this;
    return (
    <div className="notes">
      <h2 className="title"> Notes: </h2>

      <AddNote handleNewRecord={this.addRecord}></AddNote>
      {this.state.notes.map(function(note) {
        return (<Note key={note.id} note={note} handleRemove={correct_this.removeRecord} handleUpdate={correct_this.updateRecord}></Note>);
      })}
    </div>
    );
  }
});
