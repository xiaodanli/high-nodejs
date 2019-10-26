import React, { Component } from 'react'
import {Input,Select,Button,Table } from 'antd'
import axios from 'axios'

const { Option } = Select;

const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '学号',
      dataIndex: 'student_num',
    },
    {
      title: '班级',
      dataIndex: 'class_name',
    },
    {
        title: '教室号',
        dataIndex: 'room_num',
    },
    {
        title: '密码',
        dataIndex: 'password',
    },
    {
        title:'操作',
        render: () => <div>删除</div>
    }
  ];


export default class StudentList extends Component {

    state = {
        roomList:[],
        classList:[],
        studentList:[],
        pagenum:1,
        limit:5,
        class_name:'',
        room_num:'',
        name:'',
        student_num:'',
        total:0
    }

    componentDidMount(){
        //获取教室号
        //获取班级号
        //获取学生列表
        this.getRoomList();
        this.getClassList();   
        this.getStudentList();
    }
    //获取教室号
    getRoomList = () => {
        axios.get('/api/queryRoom').then(res => {
            if(res.data.code === 1){
                this.setState({
                    roomList:res.data.data
                })
            }else{
                alert(res.data.msg)
            }
        })
    }
    //获取班级号
    getClassList = () => {
        axios.get('/api/queryClass').then(res => {
            if(res.data.code === 1){
                this.setState({
                    classList:res.data.data
                })
            }else{
                alert(res.data.msg)
            }
        })
    }

    //获取学生
    getStudentList = () => {
        let {
            class_name,
            room_num,
            name,
            student_num,
            pagenum,
            limit
        } = this.state;
        axios.get('/api/queryStudent',{
            params:{
                class_name,
                room_num,
                name,
                student_num,
                pagenum,
                limit
            }
        }).then(res => {
            if(res.data.code === 1){
                this.setState({
                    studentList:res.data.data,
                    total:res.data.total
                })
            }else{
                alert(res.data.msg)
            }
        })
    }

    //搜索
    search = () => {
        this.getStudentList();
    }

    render() {
        let {roomList,classList,studentList,
            name,
            student_num,total} = this.state;
        console.log(roomList,classList)
        return (
            <div className="wrap">
                <div className="search">
                    <Input placeholder="输入姓名" className="w-200" value={name} name="name" onChange={this.iptChange}></Input>
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="请输入教室号"
                        optionFilterProp="children"
                        onChange={this.onChangeRoom}
                        // onFocus={onFocus}
                        // onBlur={onBlur}
                        // onSearch={onSearch}
                        filterOption={(input, option) =>
                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        {roomList.map((item,ind) =>  <Option key={ind} value={item.room_num}>{item.room_num}</Option>)}
                    </Select>
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="请输入班级号"
                        optionFilterProp="children"
                        onChange={this.onChangeClass}
                        filterOption={(input, option) =>
                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        {classList.map((item,ind) => <Option key={ind} value={item.class_name}>{item.class_name}</Option>)}
                    </Select>
                    <Input placeholder="输入学生号" className="w-200" name="student_num" value={student_num} onChange={this.iptChange}></Input>
                    <Button type="primary" onClick={this.search}>搜索</Button>
                </div>
                <Table  columns={columns} dataSource={studentList} size="small" pagination={{
                    total,
                    onChange:this.pageChange
                }}/>
            </div>
        )
    }

    pageChange = (page) =>{
        this.setState({
            pagenum:page
        })
        this.getStudentList();
    }

    onChangeRoom = (value) =>{
        this.setState({
            room_num:value
        })
    }

    onChangeClass = (value) => {
        this.setState({
            class_name:value
        })
    }

    iptChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
}