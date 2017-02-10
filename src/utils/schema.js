import { normalize, schema } from 'normalizr';
import originalData from '../dummy_blogs.json';

// Defines a user schema
const author = new schema.Entity('authors');

// Defines a comment schema
const comment = new schema.Entity('comments');

// Defines a viewer schema
const viewer = new schema.Entity('viewers', {
  comments: comment
});

// Defines a blog schema
const blog = new schema.Entity('blogs', {
  author: author,
  viewers: viewer
});

const blogs = new schema.Array(blog);

export const normalizedBlogList = normalize(originalData, blogs);
console.log('Normalized blogs list: ', normalizedBlogList);
