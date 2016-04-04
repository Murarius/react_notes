var NotesCount = React.createClass({
  render: function() {
    return (
      <h2 className="title">
        Notes count:
        <span className='notes-count'>
          {this.props.children}
        </span>
      </h2>
    );
  }
});
