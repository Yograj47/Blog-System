import { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/blog.css';
import BlogCard from '../components/blogCard';
import Pagination from '../utils/Pagination';

function Blog() {
    const [blogs, setBlogs] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [currPage, setCurrPage] = useState(2);
    const [postPerPage, setPostPerPage] = useState(8);

    const fetchBlogs = async (category) => {
        const url =
            category && category !== 'All'
                ? `http://localhost:3000/api/blogs?category=${category}`
                : `http://localhost:3000/api/blogs/`;

        try {
            const res = await axios.get(url);
            setBlogs(res.data.data);
        } catch (err) {
            console.error('Error fetching blogs:', err);
        }
    };

    const lastPostIndex = currPage * postPerPage
    const firstPostIndex = lastPostIndex - postPerPage
    const currPost = blogs.slice(firstPostIndex, lastPostIndex)

    useEffect(() => {
        fetchBlogs(selectedCategory);
    }, [selectedCategory]);

    const categories = ['All', 'Technology', 'Health', 'Food', 'Lifestyle', 'Travel', 'Other'];

    return (
        <>
            <main className="blog">
                <div className="blog__main">
                    <div className="blog__filter">
                        <ul className="blog__filter-list">
                            {categories.map((cat) => (
                                <li
                                    key={cat}
                                    className={`blog__filter-item ${selectedCategory === cat ? 'active' : ''}`}
                                    onClick={() => setSelectedCategory(cat)}
                                >
                                    {cat}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="blog__grid">
                        <ul className="blog_page__list" id={selectedCategory}>
                            {currPost.map((blog) => (
                                <BlogCard key={blog._id} blog={blog} />
                            ))}
                        </ul>
                    </div>
                </div>

                <aside className="blog__sidebar">
                    <div className="blog__trending">
                        <h3 className="blog__sidebar-heading">🔥 Trending Blogs</h3>
                        {/* Add trending cards later */}
                    </div>
                    <div className="blog__editor-choice">
                        <h3 className="blog__sidebar-heading">✍️ Editor's Picks</h3>
                        {/* Add editor's pick cards later */}
                    </div>
                </aside>
                <Pagination totalPost={blogs.length} postPerPage={postPerPage} setCurrPage={setCurrPage} currPage={currPage} />
            </main>
        </>
    );
}

export default Blog;
