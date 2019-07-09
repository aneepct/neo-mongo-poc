module.exports = function (uri, mongoose){
  // connection settings for mongoose
  mongoose.connect(uri);

  var db = mongoose.connection;

  db.on('error',function(err){
    console.log('During the connection the following error occurred ', err);
  });

  db.on('open',function(){
    console.log('Open Connection');
  });

  db.on('connected',function(){
    console.log('We are connected');
  });

  db.on('disconnect',function(err){
    console.log('You have been logged out', err);
  });

  db.on('disconnect',function(err){
    console.log('You have been logged out', err);
  });

  process.on('SIGINT', function() {
    mongoose.connection.close(function () {
      console.log('Your application has been closed and unplugged');
      process.exit(0);
    });
  });

  return mongoose;
}
