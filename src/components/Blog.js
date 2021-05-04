import React from 'react'
import '../css/Blog.css'

function Blog() {
    return (
        <div className="blog">
            <div className="blog-heading">
                <h1 className="one">What's New?</h1>
                <h1 className="two">Our blog and news</h1>
            </div>
            <div className="blog-blogs">
                <div className="blog-blogs-blog">
                    <div className="blog-blogs-blog-content">
                        <div className="blog-blogs-blog-time-category">
                            <div className="blog-blogs-blog-time">Jan 06</div>
                            <span>|</span>
                            <div className="blog-blogs-blog-category">Blog</div>
                        </div>
                        <div className="blog-blogs-blog-title">
                            <h1>24,895 hours later</h1>
                        </div>
                        <div className="blog-blogs-blog-read"><a>Read!</a></div>
                    </div>
                    <div className="blog-blogs-blog-border">

                    </div>
                </div>
                <div className="blog-blogs-blog">
                    <div className="blog-blogs-blog-content">
                        <div className="blog-blogs-blog-time-category">
                            <div className="blog-blogs-blog-time">Oct 19</div>
                            <span>|</span>
                            <div className="blog-blogs-blog-category">News</div>
                        </div>
                        <div className="blog-blogs-blog-title">
                            <h1>Figma wanted our CEO's insights for some reason</h1>
                        </div>
                        <div className="blog-blogs-blog-read"><a>Read!</a></div>
                    </div>
                    <div className="blog-blogs-blog-border">

                    </div>
                </div>
                <div className="blog-blogs-blog">
                    <div className="blog-blogs-blog-content">
                        <div className="blog-blogs-blog-time-category">
                            <div className="blog-blogs-blog-time">Oct 12</div>
                            <span>|</span>
                            <div className="blog-blogs-blog-category">News</div>
                        </div>
                        <div className="blog-blogs-blog-title">
                            <h1>This guy really won't shut up</h1>
                        </div>
                        <div className="blog-blogs-blog-read"><a>Read!</a></div>
                    </div>
                    <div className="blog-blogs-blog-border">

                    </div>
                </div>
            </div>
        </div>        
    )
}

export default Blog
