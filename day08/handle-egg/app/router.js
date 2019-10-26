module.exports = app =>{
    const {router,controller,middleware} = app;
    router.get('/',controller.home.index);
    router.get('user','/userlist/:name',middleware.uppercase(),controller.user.user.userlist);
    router.get('/search',controller.search.index);
    router.post('/add',controller.user.user.add);
    router.redirect('/test','/search',302);
}