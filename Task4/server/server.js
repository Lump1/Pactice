import express from 'express';
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { Low } from 'lowdb';
import { JSONFilePreset } from 'lowdb/node';
import cors from 'cors';
import { searchByName, sortByType } from './helper.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, 'db.json')

const app = express();
const defaultData = { posts: [] };
const db = await JSONFilePreset(file, defaultData);

app.use(express.json());
app.use(cors());

(async () => {
    await db.read();
    db.data ||= { posts: [] }; 
    await db.write();
})();


app.get('/posts/tags', async (req, res) => {
    await db.read();
    const returnable = db.data.posts.map(post => post.craft);

    res.json([...new Set(returnable)]);
});

app.get('/posts/pageCount', async (req, res) => {
    await db.read();
    res.json({ pagesCount: Math.ceil(db.data.posts.length / 8) });
});

app.get('/posts', async (req, res) => {
    await db.read();
    res.json(db.data.posts);
});

app.get('/posts/:pageId/filters', async (req, res) => {
    await db.read();

    const { theme, sortType, searchValue } = req.query;
    
    let returnable = db.data.posts.filter(post => {
        return(
            !theme || post.craft.toLowerCase().includes(theme.toLowerCase())
        )
    })

    if(sortType) {
        returnable = sortByType(returnable, sortType);
    }

    if(searchValue) {
        returnable = searchByName(searchValue, returnable, 0.6);
    }

    const pageId = Number(req.params.pageId);
    returnable = returnable.filter((post, index) => index >= 8 * pageId && index < (8 * pageId) + 8);

    res.json(returnable);
});

app.get('/posts/:pageId', async (req, res) => {
    await db.read();
    const returnable = db.data.posts.filter((post, index) => index >= 8 * req.pageId && index < (8 * req.pageId) + 8);

    res.json(returnable);
});


app.post('/posts', async (req, res) => {
    const newPost = req.body;
    db.data.posts.push(newPost);
    await db.write();
    res.json(newPost);
});


var listener = app.listen(3001, () => {
    console.log('Listening on port ' + listener.address().port);
})