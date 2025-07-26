import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type:String,
        required: true
    },
    tags: [String],
    status: {
        type:String,
        enum: ['draft', 'published'],
        default: 'draft'
    },
},
     {timestamps: true}
);

const Blog = mongoose.model('Blog', blogSchema);

export default Blog;