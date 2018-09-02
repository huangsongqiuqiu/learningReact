import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';

import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';

export default class DrawerUndockedExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
       
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <List >
            <ListItem primaryText="Leo的首页" leftIcon={<ContentInbox />}/>
            <Divider />
            <ListItem primaryText="关于我" leftIcon={<ActionGrade />} />
            <ListItem primaryText="我的邮件" leftIcon={<ContentSend />} onClick={this.handleClose} />
            <ListItem primaryText="我的消息" leftIcon={<ContentDrafts />} />
          </List>
        </Drawer>
      </div>
    );
  }
}