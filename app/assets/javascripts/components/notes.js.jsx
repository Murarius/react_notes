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
  render: function() {
    return (
    <div className="notes">
      <h2 className="title"> Notes: </h2>
      {this.state.notes.map(function(note) {
        return <Note key={note.id} data={note}></Note>
      })}
    </div>
    );
  }
});
