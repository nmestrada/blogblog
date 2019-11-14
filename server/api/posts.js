const router = require('express').Router();
const Post = require('../db/posts');

// matches GET requests to /api/posts/
router.get('/', async(req, res, next) =>
 { 
     try{
        const data = await Post.findAll();
        res.json(data);
     }catch(err){
         next(err);
     }
 });

 router.post('/', async function (req, res, next) { 
    const {title, content} = req.body;
    try{
        const newPost = await Post.create({title,content});
        res.json(newPost)
    }catch (err){
        next(err);
    }
});

//fetch single post
router.get('/:postId', async(req,res,next) => {
    const postId = req.params.postId;
    try{
        const post = await Post.findByPk(postId);
        res.send(post);
    }catch(err){
        next(err);
    }
})

router.put('/:postId', function (req, res, next) { /* etc */});

router.delete('/:postId', function (req, res, next) { /* etc */});

module.exports = router;