Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function () {
  this.render('home', {
    to:"main"
  });
});

Router.route('/news', function () {
  this.render('header', {
    to:"navbar"
  });
  this.render('news', {
    to:"main"
  });
});

Router.route('/kids', function () {
  this.render('header', {
    to:"navbar"
  });
  this.render('kids', {
    to:"main"
  });
});

Router.route('/blog', function () {
  this.render('header', {
    to:"navbar"
  });
  this.render('myBlogIndexTemplate', {
    to:"main"
  });
});






