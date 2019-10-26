import React,{Component} from 'react';
import { Table } from 'antd';
import axios from 'axios'

const columns = [
    {
        title: '编号',
        dataIndex: 'num',
    },
    {
        title: '名称',
        dataIndex: 'name',
    },
    {
        title: '公司',
        dataIndex: 'job',
    },
    {
        title: '省份',
        dataIndex: 'province',
    },
    {
        title: '作者',
        dataIndex: 'author',
    },{
        title: '创建时间',
        dataIndex: 'create_time',
    },
    {
        title: '浏览',
        dataIndex: 'see',
    }
  ];

class App extends Component{
    state = {
        pagenum:1,
        limit:2,
        data:[],
        total:0
    }
    componentDidMount(){
        let {pagenum,limit} = this.state;
        // axios.get(`/api/list?pagenum=${pagenum}&limit=${limit}`).then(res => {})
       this.getList(pagenum,limit);
    }

    getList = (pagenum,limit) => {
        axios.get('/api/list',{params:{pagenum,limit}}).then(res => {
            console.log(res)
            if(res.data.code === 1){
                this.setState({
                    data:res.data.data,
                    total:res.data.total
                })
            }
        })
    }
    render(){
        let {data,total} = this.state;
        return (
            <div className="App">
                <Table columns={columns} dataSource={data} size="small" 
                pagination={
                    {
                        showSizeChanger:true,
                        total,
                        pageSizeOptions:['2','4','6'],
                        defaultPageSize:2,
                        onChange:this.change,
                        onShowSizeChange:this.showSizeChange
                    }
                } />
            </div>
        )
    }

    showSizeChange = (current,size) => {
        console.log(current,size)
        this.setState({
            limit:size
        })
        this.getList(current,size);
    }

    change = (page) => {
        let {limit} = this.state;
        this.setState({
            pagenum:page
        })
        this.getList(page,limit);
    }
}

export default App;


//react的生命周期

//创建阶段  

//construtor(){}  接受props 初始化state  触发一次

//componentWillMount(){}  组件即将创建  触发一次

//render(){}  渲染中  触发多次

//componentDidMount(){}  渲染完成  触发一次

//更新阶段

//1.state

// shouldComponentUpdate(){return true/false} 是否要更新？  

// componentWillUpdate()  组件将要更新

// render(){}      更新中

// componentDidUpdate()  更新完毕

//2.props

//componentWillReceviceProps(){}

// shouldComponentUpdate(){return true/false} 是否要更新？  

// componentWillUpdate()  组件将要更新

// render(){}      更新中

// componentDidUpdate()  更新完毕

//卸载阶段

// componentWillUnMount(){}  组件即将卸载

 