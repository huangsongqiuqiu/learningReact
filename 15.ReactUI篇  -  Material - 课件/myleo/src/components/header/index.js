import React ,{Component}from 'react';
import AppBar from 'material-ui/AppBar';

import DrawerUndockedExample from './Drawer'

console.log(DrawerUndockedExample)

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */

class AppBarExampleIcon extends Component{
	titleClick(){
		alert(1)
	}
	leftClick(){
		this.refs.Drawer.handleToggle()
	}
	render(){
		return (<div>
				<AppBar
				    title={this.props.Msg}
				    onLeftIconButtonClick={this.leftClick.bind(this)}
				    titleStyle={{textAlign:'center'}}
				    iconClassNameRight="muidocs-icon-navigation-expand-more"
				  />
				  <DrawerUndockedExample ref='Drawer'/>
				</div>)
	}
}


export default AppBarExampleIcon;