'use strict';

const Service = require('egg').Service;

class SchoolService extends Service {
    //添加教室号
    async room(room_num) {
        return await this.app.mysql.query(`insert into room_list (room_num) values (?)`,[room_num]);
    }
    //查询教室号是否存在
    async selectRoom(room_num){
        return await this.app.mysql.query('select * from room_list where room_num=?',[room_num]);
    }

    //查询教室号
    async queryRoom(){
        return await this.app.mysql.query('select * from room_list');
    }

    //查询所有班级
    async queryClass(){
        return await this.app.mysql.query('select * from class_list');
    }

    //查询所有学生
    async queryStudent(querys,pagenum,limit){
        //查询条件为空的，查询所有
        //select * from studentl_list where name=? and room_num=? ... limit startIndex,limit

        let sql = 'select * from student_list';

        //根据查询的参数，拼接查询条件
        for(let k in querys){
            if(querys[k]){
                if(sql.includes('where')){
                    //其余拼接条件
                    sql += ` and ${k}='${querys[k]}'`;
                }else{
                    //第一次拼接条件
                    sql += ` where ${k}='${querys[k]}'`;
                }
            }
        }

        let startIndex = (pagenum - 1)*limit;
        sql += ` limit ${startIndex},${limit}`;

        return await this.app.mysql.query(sql);
    }

    //查询学生总数

    async studentCount(){
        return await this.app.mysql.query('select count(*) from student_list');
    }

    //查询班级
    async queryClass(){
        return await this.app.mysql.query('select * from class_list');
    }

    //查询班级是否存在
    async selectClass(class_name){
        return await this.app.mysql.query('select * from class_list where class_name=?',[class_name]);
         
    }
    //添加班级
    async classRoom(class_name,room_num,course){
        return await this.app.mysql.query('insert into class_list (class_name,room_num,course) values (?,?,?)',[class_name,room_num,course]);
    }

    //查询学生是否存在
    async selectStudent(student_num){
        return await this.app.mysql.query('select * from student_list where student_num=?',[student_num]);
    }

    //添加学生
    async addStudent(info){
        let {name,class_name,student_num,room_num,password} = info;
        return await this.app.mysql.query('insert into student_list (name,class_name,student_num,room_num,password) values (?,?,?,?,?)',[name,class_name,student_num,room_num,password]);
    }

    //删除教室号
    async deleteRoom(id){
        return await this.app.mysql.query('delete from room_list where id=?',[id]);
    }
    //删除班级
    async deleteClass(idStr){
        //delete from class_list where id in (1,2,3)
        // return await this.app.mysql.query('delete from class_list where id=?',[id]);
        return await this.app.mysql.query(`delete from class_list where id in (${idStr})`);
    }

    //修改班级

    async editClass(class_name,room_num,course,id){
        return await this.app.mysql.query('update class_list c set c.class_name=?,c.room_num=?,c.course=? where id=?',[class_name,room_num,course,id])
    }
}

module.exports = SchoolService;
