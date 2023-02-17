// app.use() and middleware can be used for "before" and a combination of the 'close' and 'finish' events can be used for "after."

app.use(function (req, res, next) {
    function afterResponse() {
        res.removeListener('finish', afterResponse);
        res.removeListener('close', afterResponse);

        // action after response
    }

    res.on('finish', afterResponse);
    res.on('close', afterResponse);

    // action before request
    // eventually calling `next()`
});

app.use(app.router);
