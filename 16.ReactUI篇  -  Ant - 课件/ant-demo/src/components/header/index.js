import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Header extends React.Component {
  state = {
    current: 'mail',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="mail">
          <Icon type="smile" />关于我
        </Menu.Item>
        <Menu.Item key="app">
          <Icon type="api" />我的作品集
        </Menu.Item>
        <SubMenu title={<span><Icon type="setting" />网站设置</span>}>
          <MenuItemGroup title="色调设定">
            <Menu.Item key="setting:1">颜色调整</Menu.Item>
            <Menu.Item key="setting:2">亮度调整</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="登陆设置">
            <Menu.Item key="setting:3">记录设定</Menu.Item>
            <Menu.Item key="setting:4">我的设定</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">

          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          <Icon type="global" />友情网站链接</a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Header;