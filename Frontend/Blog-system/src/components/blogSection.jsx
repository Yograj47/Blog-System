import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BlogCard from './blogCard';

function BlogSection() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await axios.get("http://localhost:3000/api/blogs/latest");
                setBlogs(res.data.data);
                console.log("Blogs fetched successfully:", res.data);
            } catch (err) {
                console.error("Error fetching blogs:", err);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <section className="blog__box">
            <h1 className="heading">Latest Blog</h1>
            <ul className="blog__listing">
                {blogs.map(blog => (
                    <BlogCard key={blog._id} blog={blog} />
                ))}
            </ul>
            <div className="more__post_btn">
                <Link to="/blogs">More Posts</Link>
            </div>
        </section>
    );
}

export default BlogSection;
