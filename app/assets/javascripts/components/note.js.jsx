var Note = React.createClass({
  getInitialState: function() {
    return {
      editing: false,
      newBodyValue: this.props.note.body,
      dragging: false
    };
  },
  random: function(min, max) {
    return (min + Math.ceil(Math.random() * max));
  },
  notePosition: function() {
    this.state.position = {
      left: this.random(0, 90) + '%',
      top: this.random(5, 70) + '%',
      transform: 'rotate(' + this.random(-10, 30) + 'deg)'
    };
  },
  pinPosition: function() {

  },
  pxToPercent: function(x, y) {
    var width = $('.notes').width();
    var height = $('.notes').height();
    var percentPosition = {x: Math.ceil(x/width*100), y: Math.ceil(y/height*100)};
    return percentPosition;
  },
  onMouseDown: function (e) {
    // exit when click on button
    if ($(e.target).parent().hasClass('edit') || $(e.target).hasClass('edit')) { return }
    // only left mouse button
    if (e.button !== 0) return;
    var pos = $(ReactDOM.findDOMNode(this)).position();
    this.setState({
      dragging: true,
      rel: {
        x: e.pageX - pos.left,
        y: e.pageY - pos.top
      }
    });
    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onMouseUp);
    e.stopPropagation();
    e.preventDefault();
  },
  onMouseUp: function (e) {
    var moveX = e.pageX - this.state.rel.x;
    var moveY = e.pageY - this.state.rel.y;
    var percentageDestination = this.pxToPercent(moveX, moveY);

    this.setState({
      dragging: false,
      position: {
        left: percentageDestination.x.toString()+'%',
        top: percentageDestination.y.toString()+'%',
        transform: this.state.noteRotation
      }
    });
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
    e.stopPropagation();
    e.preventDefault();
   },
   onMouseMove: function (e) {
     if (!this.state.dragging) return;
     this.setState({
        position: {
          left: (e.pageX - this.state.rel.x).toString()+'px',
          top: (e.pageY - this.state.rel.y).toString()+'px',
        }
     });
      e.stopPropagation();
      e.preventDefault();
   },
  componentWillMount: function() {
    this.notePosition();
    this.state.noteRotation = this.state.position.transform;
  },
  validate: function() {
    var newBodyValue=this.refs.newBody.value;
    if (newBodyValue.length<=21) {
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
    } else {
      this.setState({editing: false});
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
     <div className='note' style={this.state.position} onMouseDown={this.onMouseDown} >

       <div className='pin'></div>
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
      <div className='note' style={this.state.position}>
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
