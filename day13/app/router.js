'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  //添加教室号
  router.post('/api/addRoom',controller.school.room);

  //删除教室号
  router.get('/api/deleteRoom',controller.school.deleteRoom);

  //添加班级
  router.post('/api/class',controller.school.classRoom);

  //删除班级
//   router.get('/api/deleteClass',app.middleware.middle(),controller.school.deleteClass);
    router.get('/api/deleteClass',controller.school.deleteClass);

  //修改班级
  router.post('/api/editClass',controller.school.editClass);

  //添加学生
  router.post('/api/addStudent',controller.school.addStudent);

  //查询教室号
  router.get('/api/queryRoom',controller.school.queryRoom);

  //查询班级
  router.get('/api/queryClass',controller.school.queryClass);

  //查询学生
  router.get('/api/queryStudent',controller.school.queryStudent);

};
