import React, { Component } from 'react'
import {Button,Table,Modal,Input } from 'antd'
import axios from 'axios'


export default class ClassList extends Component {
    state = {
        data:[],
        visible:false,
        class_name:'',
        room_num:'',
        course:'',
        id:'',
        selectedRowKeys:[]
    }

    componentDidMount(){
        this.getClassList();
    }
    render() {
        let {data,class_name,room_num,course,selectedRowKeys} = this.state;
        const columns = [
            {
              title: '班级名',
              dataIndex: 'class_name',
            },
            {
              title: '课程名',
              dataIndex: 'course',
            },
            {
              title: '教室号',
              dataIndex: 'room_num',
            },
            {
                title: '操作',
                render:(text, record, index) => <div>
                    <a onClick={() => {
                        this.edit(text);
                    }}>修改</a>&nbsp;&nbsp;
                    <a onClick={() => {
                        this.del(text.id);
                    }}>删除</a>
                </div>,
            }
          ];
          const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
          };
        return (
            <div className="con">
                <Button type="primary" onClick={this.delMore}>批量删除</Button>
                <Button type="primary" onClick={this.showModal}>添加班级</Button>
                <Table rowSelection={rowSelection} rowKey="id" columns={columns} dataSource={data} size="small" />
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    >
                    <Input placeholder="班级名" name="class_name" value={class_name} onChange={this.iptChange}></Input>
                    <Input placeholder="教室号" name="room_num" value={room_num} onChange={this.iptChange}></Input>
                    <Input placeholder="课程名" name="course" value={course} onChange={this.iptChange}></Input>
                </Modal>
            </div>
        )
    }

    delMore = () => {
        let {selectedRowKeys} = this.state;

        let idStr = selectedRowKeys.join(',');
        //删除接口
        axios.get('/api/deleteClass',{params:{idStr}}).then(res => {
            console.log(res);
            if(res.data.code === 1){
                this.getClassList();
            }
        })
    }

    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
      };
    

    //修改班级
    edit = (curData) => {
        let {class_name,room_num,course,id} = curData;
        this.setState({
            class_name,
            room_num,
            course,
            id
        })
        this.showModal();
    }

    //删除班级

    del = (idStr) => {
        axios.get('/api/deleteClass',{params:{idStr}}).then(res => {
            if(res.data.code === 1){
                alert(res.data.msg)
                this.getClassList();
            }else{
                alert(res.data.msg)
            }
        })
    }

    //表单改变
    iptChange = (e) => {
        console.log(e.target.name,e.target.value)
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    showModal = () => {
        this.setState({
            visible:true
        })
    }

    resetForm = () => {
        this.setState({
            class_name:'',
            room_num:'',
            course:'',
            id:''
        })
    }

    handleOk = () => {
        //确认添加接口
        let {class_name,room_num,course,id} = this.state;

        let url = '';
        
        if(id){
            //修改接口
            url = '/api/editClass';
        }else{
            //添加接口 
            url = '/api/class'
        }
        axios.post(url,{class_name,room_num,course,id}).then(res => {
            alert(res.data.msg);
            this.setState({
                visible:false
            })
            this.getClassList();
        })
        this.resetForm();
       
    }

    handleCancel = () => {
        this.setState({
            visible:false
        })
        this.resetForm();
    }

    getClassList = () => {
        axios.get('/api/queryClass').then(res => {
            if(res.data.code === 1){
                this.setState({
                    data:res.data.data
                })
            }else{
                alert(res.data.msg)
            }
        })
    }
}
