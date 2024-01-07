import morgan from 'morgan';
import express from "express";

const app = express();
const port = 3000

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

class post {
    constructor(user, title, postBody) {
        this.user = user
        this.title = title
        this.postBody = postBody
    }
}

let posts = []

app.get("/create", (req, res) => {
    res.render("create.ejs");
});

app.post("/create", (req, res) => {
    const postVar = new post(req.body.user, req.body.title, req.body.postBody)
    posts.push(postVar)
    res.send(posts)
})


app.get("/view", (req, res) => {
    if (posts.length > 0) {
        res.render("posts.ejs", {posts: posts});
    } else {
        res.render("noViews.ejs")
    }
});


app.get('/', (req, res) => {
    res.render("index.ejs")
})



app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})