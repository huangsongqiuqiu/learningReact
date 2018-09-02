import React, { Component } from 'react';
import { Modal,Button,notification } from 'antd';
import Mysteps from './Steps'
import { Row, Col } from 'antd';

const openNotification = () => {
  notification.open({
    message: '恭喜您',
    description: '您成功点击了确认',
  });
};

class Grid extends Component {
  state = { visible: false }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {

    //console.log(e,1);
    openNotification();
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  render(){
    return (<div>
      <Row>
        <Col className='r' span={12}>col-12</Col>
        <Col className='b' span={12}>col-12</Col>
      </Row>
      <Row>
        <Col className='r' span={8}>col-8</Col>
        <Col className='b' span={4} offset={4}>col-8</Col>
        <Col className='r' span={8}>col-8</Col>
      </Row>
      <Row>
        <Col span={6}><Button type="primary" onClick={this.showModal}>Primary</Button></Col>
        <Col span={6}><Button type="danger">Danger</Button></Col>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
      </Row>
      <Modal title="Basic Modal" visible={this.state.visible}
        onOk={this.handleOk} onCancel={this.handleCancel}
      >
       <Mysteps/> 
      </Modal>
    </div>)
  }
};

export default Grid;