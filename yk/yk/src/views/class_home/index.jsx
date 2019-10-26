import React, { Component } from 'react'

import ClassList from './class_list';
import RoomList from './room_list';
import StudentList from './student_list';

import {Switch,Route,Redirect} from 'react-router-dom'

import { Layout,Menu } from 'antd';

const { SubMenu } = Menu;

const { Header, Sider, Content } = Layout;

let menuArr = [
    {
        path:'/classlist',
        name:'班级管理'
    },
    {
        path:'/roomlist',
        name:'教室管理'
    },
    {
        path:'/studentlist',
        name:'学生管理'
    }
];

export default class ClassHome extends Component {
    state = {
        collapsed:false
    }
    render() {
        return (
            <Layout>
              <Header>Header</Header>
              <Layout>
                <Sider>
                    <Menu
                    defaultSelectedKeys={['0']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    onClick = {this.goPage}
                    >
                    <SubMenu
                        key="sub1"
                        title={
                        <span>
                            <span>班级管理</span>
                        </span>
                        }
                    >
                        {
                            menuArr.map((item,index) => <Menu.Item key={index}>{item.name}</Menu.Item>)
                        }
                    </SubMenu>
                    </Menu>
                </Sider>
                <Content>
                    <Switch>
                        <Route path="/classlist" component={ClassList}></Route>
                        <Route path="/roomlist" component={RoomList}></Route>
                        <Route path="/studentlist" component={StudentList}></Route>
                        <Redirect from="/" to="/classlist"></Redirect>
                    </Switch>
                </Content>
              </Layout>
            </Layout>
        )
    }

    goPage = ({ item, key, keyPath, domEvent }) => {
        console.log(item,key)
        this.props.history.push(menuArr[key].path);
    }
}
