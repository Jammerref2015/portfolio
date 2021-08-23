import React from 'react';
import allBlogs from '../components/allBlogs';
import Title from '../components/Title'

function BlogsPage() {
    return (
        <div>
            <div className="b-title">
                <Title title= {'Recent Blogs'} span={'Recent Blogs'} />
            </div>
            <div className="BlogsPage">
            {/* {
                allBlogs.map((blog)=> {
                    return <div className="blog" key={blog.id}>
                        <div className="blog-content">
                            <img src={blog.image} alt=""/>
                            <a href={blog.link} className="blog-link" target="_blank" rel="noreferrer">
                                {blog.title}
                            </a>
                        </div> 
                    </div>
                })
            } */}
            <h1>Coming soon</h1>
            </div>
        </div>
    )
};

export default BlogsPage;