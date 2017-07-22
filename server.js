
const express = require('express');
const app = express();
const formidable = require('express-formidable');
const fs = require('fs');

app.use(express.static("public"));
app.use(formidable());

app.post('/create-post', function (req, res) {
    //console.log('am a student!');
    const filepath = __dirname + '/data/posts.json';
    const postContent = fs.readFileSync(filepath);
    // console.log(postContent);
    const posts = JSON.parse(postContent);
    //console.log(posts);
    posts[Date.now()] = req.fields.blogpost;

    fs.writeFileSync(filepath, JSON.stringify(posts));
    console.log(req.fields.blogpost);
    res.send(200, posts);
});

app.listen(3000, function () {
    console.log('Server is listening on port 3000. Ready to accept requests!');
});
