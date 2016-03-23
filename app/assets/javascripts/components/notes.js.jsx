// js
//this.Notes = React.createClass({
//  render: function() {
//    return React.DOM.div({ className: 'notes' },
//           React.DOM.h2({ className: 'title' }, 'Notes'));
//  }
//});



// jsx
this.Notes = React.createClass({
  render: function() {
    return <div className="notes">
      <h2 className="title"> Notes </h2>
    </div>;
  }
});
