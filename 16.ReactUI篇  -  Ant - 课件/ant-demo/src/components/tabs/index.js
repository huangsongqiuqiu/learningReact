import React, { Component } from 'react';
import { Tabs } from 'antd';
import About from './aboutme'
import Mysteps from './Steps'
import Grid from './Grid'
import Tables from './../table/table'
const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

class Tab extends Component{
	render(){
		return (<Tabs defaultActiveKey="1" onChange={callback}>
		    <TabPane tab="我的简介" key="1">
		    	<About/>
		    </TabPane>
		    <TabPane tab="Tab 2" key="2">
		    	<Mysteps/>
		    </TabPane>
		    <TabPane tab="Tab 3" key="3">
		    	<Grid/>
		    </TabPane>
		    <TabPane tab="Tab 4" key="4"><Tables/></TabPane>
		  </Tabs>)
	};
}

export default Tab;