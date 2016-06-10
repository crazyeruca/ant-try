import React from 'react';
import ReactDOM from 'react-dom';

import 'antd/dist/antd.css';
import { Row, Col, Menu, Icon, Breadcrumb, Table } from 'antd';

const SubMenu = Menu.SubMenu;

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
  render: (text) => <a href="#">{text}</a>,
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '住址',
  dataIndex: 'address',
  key: 'address',
}, {
  title: '操作',
  key: 'operation',
  render: (text, record) => (
    <span>
      <a href="#">修改</a>
      <span className="ant-divider"></span>
      <a href="#">删除</a>
    </span>
  ),
}];

const data = [{
  key: '1',
  name: '胡彦斌',
  age: 32,
  address: '西湖区湖底公园1号',
}, {
  key: '2',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号',
}, {
  key: '3',
  name: '李大zui',
  age: 32,
  address: '西湖区湖底公园1号',
}];

const App = React.createClass({
  getInitialState() {
    return {
      theme: 'light'
    };
  },

  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key
    });
  },

  render() {
    return (
        <Row gutter={16}>
            <Col span={6}>
                <Menu theme={this.state.theme}
                onClick={this.handleClick}
                defaultOpenKeys={['sub1']}
                selectedKeys={[this.state.current]}
                mode="inline"
                >
                    <SubMenu key="sub1" title={<span><Icon type="mail" /><span>导航一</span></span>}>
                        <Menu.Item key="1">选项1</Menu.Item>
                        <Menu.Item key="2">选项2</Menu.Item>
                        <Menu.Item key="3">选项3</Menu.Item>
                        <Menu.Item key="4">选项4</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>导航二</span></span>}>
                        <Menu.Item key="5">选项5</Menu.Item>
                        <Menu.Item key="6">选项6</Menu.Item>
                        <SubMenu key="sub3" title="三级导航">
                        <Menu.Item key="7">选项7</Menu.Item>
                        <Menu.Item key="8">选项8</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span><Icon type="setting" /><span>导航三</span></span>}>
                        <Menu.Item key="9">选项9</Menu.Item>
                        <Menu.Item key="10">选项10</Menu.Item>
                        <Menu.Item key="11">选项11</Menu.Item>
                        <Menu.Item key="12">选项12</Menu.Item>
                    </SubMenu>
                </Menu>
            </Col>
            <Col span={18}>
                <Breadcrumb>
                    <Breadcrumb.Item>首页</Breadcrumb.Item>
                    <Breadcrumb.Item><a href="">应用中心</a></Breadcrumb.Item>
                    <Breadcrumb.Item><a href="">应用列表</a></Breadcrumb.Item>
                    <Breadcrumb.Item>某应用</Breadcrumb.Item>
                </Breadcrumb>
                <Table columns={columns} dataSource={data} />
            </Col>
        </Row>
    );
  }
});

const app = document.createElement('div');
document.body.appendChild(app);

ReactDOM.render(<App />, app);