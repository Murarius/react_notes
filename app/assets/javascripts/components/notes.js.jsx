this.Notes = React.createClass({
  getInitialState: function() {
    return {
      notes: this.props.data,
      notesCount: this.props.data.length
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
    this.replaceState({notes: notes, notesCount: notes.length});
  },
  updateRecord: function(note, newNote) {
    var notes = this.state.notes.slice();
    var index = notes.indexOf(note);
    notes[index]=newNote;
    this.replaceState({notes: notes, notesCount: notes.length});
  },
  removeRecord: function(note) {
    var notes = this.state.notes.slice();
    var index = notes.indexOf(note);
    notes.splice(index, 1);
    this.replaceState({notes: notes, notesCount: notes.length});

  },
  render: function() {
    var correct_this = this;
    return (
    <div className="notes">
      <NotesCount>{this.state.notesCount}</NotesCount>

      <AddNote handleNewRecord={this.addRecord}></AddNote>
      {this.state.notes.map(function(note) {
        return (<Note key={note.id} note={note} handleRemove={correct_this.removeRecord} handleUpdate={correct_this.updateRecord}></Note>);
      })}
    </div>
    );
  }
});
