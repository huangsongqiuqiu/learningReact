import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';


/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
export default class DialogExampleSimple extends React.Component {
  state = {
    open: false,
    index:0
  };

  handleOpen = (v) => {
    this.state.index = v;
    this.setState({open: true});
  };

  handleClose = (v) => {
    if(v == '确定'){
      this.props.setMsg(this.state.index);
    }
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="取消"
        primary={true}
        onClick={this.handleClose.bind(this,'取消')}
      />,
      <FlatButton
        label="确定"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose.bind(this,'确定')}
      />,
    ];

    return (
      <div>
        
        <Dialog
          title="确认删除该图片么?"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          点击确认删除该图片,如果点击取消则取消删除.
        </Dialog>
      </div>
    );
  }
}