import { useState, useEffect } from 'react';
import sampleImage from '../assets/sample.jpg';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home() {
    const [blogs, setBlogs] = useState([]);

    // Fetch blogs from the API when the component mounts
    async function fetchBlogs() {
        await axios.get("http://localhost:3000/api/blogs")
            .then(res => {
                setBlogs(res.data.data);
                console.log("Blogs fetched successfully:", res.data);
            })
            .catch(err => {
                console.error("Error fetching blogs:", err);
            });
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    console.log("Blogs in Home component:", blogs   );
    
    return (
        <>
            <div id="hero">
                <h1>Welcome to Techpidea</h1>
            </div>

            <main>
                <section className="category-section">
                    <h2>Categories</h2>
                    <ul className="category-list">
                        <li><Link to="/category/technology">Technology</Link></li>
                        <li><Link to="/category/lifestyle">Lifestyle</Link></li>
                        <li><Link to="/category/health">Health</Link></li>
                        <li><Link to="/category/travel">Travel</Link></li>
                        <li><Link to="/category/food">Food</Link></li>
                    </ul>
                </section>

                <section className="blog-listing">
                    {blogs.map(blog => (
                        <div className="blog-item" key={blog._id}>
                            <span className={`category-tag ${blog.category ? blog.category.toLowerCase() : ''}`}>{blog.category || 'Uncategorized'}</span>
                            <div className="blog-image">
                                <img src={sampleImage} alt={blog.title || 'Blog Image'} />
                            </div>
                            <div className="blog-content">
                                <h3 className="blog-title">{blog.title || 'Untitled'}</h3>
                                <p className="blog-description">{blog.content ? blog.content.slice(0, 100) : ''}...</p>
                                <p className="blog-author">{blog.author || 'Unknown Author'}</p>
                                <Link to={`/blog/${blog._id}`} className="read-more">Read More</Link>
                            </div>
                        </div>
                    ))}
                </section>
            </main>
        </>
    );
}

export default Home;
