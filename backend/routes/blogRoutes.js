import express from 'express';
import Blog from '../models/Blog.js';

const router = express.Router();

// Save or Update Draft

router.post('/save-draft', async (req, res) => {
    const {id, title, content, tags} = req.body;

    try{
        let blog;
        if(id){
            blog = await Blog.findByIdAndUpdate(id, {title, content, tags, status: 'draft'}, {new: true });
        }else{
            blog = new Blog ({title, content, tags, status: 'draft' });
            await blog.save();
        }
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ message: 'Error saving draft', error});
    }
});

//Publish Blog

router.post('/publish', async (req, res) => {
    const {id, title, content, tags} = req.body;

    try{
        let blog;
        if(id){
            blog = await Blog.findByIdAndUpdate(id, {title, content, tags, status: 'published'}, {new: true });
        }else{
            blog = new Blog ({title, content, tags, status: 'published' });
            await blog.save();
        }
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ message: 'Error publishing blog', error});
    }
});

// Get All Blogs

router.get('/', async (req, res) => {
      try{
        const blogs = await
        Blog.find().sort({updatedAt: -1 });
        res.status(200).json(blogs);
      } catch (error) {
        res.status(500).json({ message: 'Error fetching blogs', error});
      }
});


// Get Blog by ID

router.get('/:id', async (req, res) => {
      try{
        const blog = await
        Blog.findById(req.params.id);
        res.status(200).json(blog);
      } catch (error) {
        res.status(500).json({ message: 'Error fetching blog', error});
      }
});

// DELETE a blog by ID

router.delete('/:id', async (req, res) => {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.json({ message : 'Blog deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

export default router;
