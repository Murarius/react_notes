this.Notes = React.createClass({
  getInitialState: function() {
    return {
      records: this.props.data
    };
  },
  getDefaultProps: function() {
    return {
      records: []
    };
  },
  render: function() {
    return (
    <div className="notes">
      <h2 className="title"> Notes: </h2>

    </div>
    );
  }
});
