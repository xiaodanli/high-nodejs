'use strict';

const Controller = require('egg').Controller;

class SchoolController extends Controller {
    //添加教室号
    async room() {
        let {ctx,service} = this;  
        let {room_num} = ctx.params;
        console.log("====");
        //查看教室号是否存在
        let data = await service.school.selectRoom(room_num);

        if(data.length){
            //已经存在
            ctx.body = {
                code:2,
                msg:'此教室号已存在'
            }
        }else{
            try{
                await service.school.room(room_num);
                ctx.body = {
                    code:1,
                    msg:'添加成功'
                }
            }catch(e){
                ctx.body = {
                    code:0,
                    data:e.message
                }
            }
        } 
    }

    //查询教室号
    async queryRoom(){
        console.log("查询教室号开始")
        let {ctx,service} = this;
        try{
            let result = await service.school.queryRoom();
            ctx.body = {
                code:1,
                data:result
            }
        }catch(e){
            ctx.body = {
                code:0,
                msg:e.message
            }
        }
        console.log("查询教室号结束")
    }

    //查询所有班级
    async queryClass(){
        let {ctx,service} = this;
        try{
            let result = await service.school.queryClass();
            ctx.body = {
                code:1,
                data:result
            }
        }catch(e){
            ctx.body = {
                code:0,
                msg:e.message
            }
        }
    }

    //查询所有学生
    async queryStudent(){
        let {ctx,service} = this;

        let {name,room_num,class_name,student_num,pagenum,limit} = ctx.params;

        let querys = {
            name,
            room_num,
            class_name,
            student_num
        };

        let data = await service.school.studentCount();

        console.log(data[0]['count(*)']);

        try{
            let result = await service.school.queryStudent(querys,pagenum,limit);
            ctx.body = {
                code:1,
                data:result,
                total:data[0]['count(*)']
            }
        }catch(e){
            ctx.body = {
                code:0,
                msg:'查询失败'
            }
        }
        
    }

    //添加班级
    async classRoom(){
        let {ctx,service} = this;
        let {class_name,room_num,course} = ctx.params;
        //查询班级是否存在
        let data = await service.school.selectClass(class_name);

        if(data.length){
            ctx.body = {
                code:2,
                msg:'此班级已经存在'
            }
        }else{
            try{
                await service.school.classRoom(class_name,room_num,course);
                ctx.body = {
                    code:1,
                    msg:'添加成功'
                }
            }catch(e){
                ctx.body = {
                    code:0,
                    data:e.message
                }
            }
        }
    } 

    //添加学生
    async addStudent(){
        let {ctx} = this;
        let {student_num} = ctx.params;
        let data = await this.service.school.selectStudent(student_num);
        if(data.length){
            ctx.body = {
                code:2,
                msg:'此学生已存在'
            }
        }else{
            try{
                await this.service.school.addStudent(ctx.params);
                ctx.body = {
                    code:1,
                    msg:'添加成功'
                }
            }catch(e){
                ctx.body = {
                    code:0,
                    data:e.message
                }
            }
        }
    
    }

    //删除教室号
    async deleteRoom(){
        let {ctx} = this;
        let {id} = ctx.params;
        try{
            await this.service.school.deleteRoom(id);
            ctx.body = {
                code:1,
                msg:'删除成功'
            }
        }catch(e){
            ctx.body = {
                code:0,
                data:e.message
            }
        }
    }

    //删除班级
    async deleteClass(){
        let {ctx} = this;
        let {idStr} = ctx.params; //id 1 2 3    [1,2,3,4]
        try{
            await this.service.school.deleteClass(idStr);
            ctx.body = {
                code:1,
                msg:'删除成功'
            }
        }catch(e){
            ctx.body = {
                code:0,
                data:e.message
            }
        }
    }

    //修改班级
    async editClass(){
        let {ctx,service} = this;
        let {class_name,room_num,course,id} = ctx.params;
        try{
            await service.school.editClass(class_name,room_num,course,id);
            ctx.body = {
                code:1,
                msg:'修改成功'
            }
        }catch(e){
            ctx.body = {
                code:0,
                data:e.message
            }
        }
    }

}

module.exports = SchoolController;
