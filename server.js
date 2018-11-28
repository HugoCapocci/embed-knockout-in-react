const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const open = require('opn');

const app = express();

// view engine setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.all('/', function(req, res){
	res.sendFile(path.join(__dirname,'public/index.html'));
});

app.all('/react', function(req, res){
	res.sendFile(path.join(__dirname,'public/react.html'));
});

app.all('/ko', function(req, res){
	res.sendFile(path.join(__dirname,'public/ko.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
	    res.send(err);
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
	res.send(err);
});

const server = app.listen(5000, 'localhost', () => {
    open(`http://${server.address().address}:${server.address().port}`);
});
