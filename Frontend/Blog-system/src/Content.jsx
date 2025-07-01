import { useState, useEffect } from 'react';
import sampleImage from './assets/sample.jpg'; // Assuming you have a sample image

function Content() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/blogs")
            .then(response => response.json())
            .then(data => {
                setData(data.data);
                console.log("Blogs data:", data);
            })
            .catch(error => {
                console.error("Error fetching blogs:", error);
            });
    }, []);
    return (
        <>
            <div id="hero">
                Hello Bro
            </div>
            <main className="blog-listing">
                <div className="trending-blog">
                    <h2 className="heading">Trending Blog</h2>
                    <ul className="blog-listing">
                        {
                            data.map((blog) => {
                                return (
                                    <li key={blog._id} className="blog-item">
                                        <span className={`category ${blog.category}`}>{blog.category}</span>
                                        <div className="blog-image">
                                            <img src={sampleImage} alt={blog.title} height={200} />
                                        </div>
                                        <div className="blog-content">
                                            <h3 className="blog-title">{blog.title}</h3>
                                            <p className="blog-description">{blog.content}</p>
                                            <p className="blog-author">{blog.author}</p>
                                            <a href={`/blogs/${blog._id}`} className="read-more">Read More</a>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </main>
        </>
    )
}

export default Content;