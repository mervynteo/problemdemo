FlowRouter.route('/', { 
      name: 'home',
      action: function (){
        BlazeLayout.render('layout', {main: 'postsList', footer: 'footer'});
      }
   });


