const db = require('./server/db/database')
const Post = require('./server/db/posts')

const firstPost = 
    {
        title: 'First Post!',
        content: 'This is the first post welcome to my page. Enjoy the view',
        image: './pics/header.JPG'
    };

const seed = async () => {
    try{
        await Post.create(firstPost);
    }catch(err){
        console.log(err);
    }
};
    
  const main = () => {
    console.log('Syncing db...');
    db.sync({ force: true })
      .then(() => {
        console.log('Seeding databse...');
        return seed();
      })
      .catch(err => {
        console.log('Error while seeding');
        console.log(err.stack);
      })
      .then(() => {
        db.close();
        return null;
      });
  };
  
  main();



