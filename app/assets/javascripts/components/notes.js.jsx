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
    var notes;
    notes = this.state.notes.slice();
    notes.push(note);
    this.setState({notes: notes});
  },
  render: function() {
    return (
    <div className="notes">
      <h2 className="title"> Notes: </h2>

      <AddNote handleNewRecord={this.addRecord}></AddNote>
      {this.state.notes.map(function(note) {
        return <Note key={note.id} data={note}></Note>
      })}
    </div>
    );
  }
});
