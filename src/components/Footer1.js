import React from 'react'
import '../css/Footer1.css'

function Footer1() {
    return (
        <div className="footer1" style={{paddingBottom: "50px"}}>
            <div className="footer1-border" style={{borderTop: "4px solid", margin: "0 0 30px 0"}} >

            </div>
            <div className="footer1-content">
                <div className="footer1-content-left">
                    <h1 className="one">Got a project?</h1>
                    <h1 className="two">Let's Talk!</h1>
                    <p>Tell us everything</p>
                </div>
                <div className="footer1-content-right">
                    <div className="footer1-content-right-list1">
                        <ul>
                            <li><a>Clients</a></li>
                            <li><a>About</a></li>
                            <li><a>News</a></li>
                            <li><a>Contact</a></li>
                            <li><a>Careers</a></li>
                            <li><a>Press</a></li>
                        </ul>
                    </div>
                    <div className="footer1-content-right-list2">
                        <ul>
                            <li><a>San Fransicso</a></li>
                            <li><a>New York</a></li>
                            <li><a>Los Angeles</a></li>
                            <li><a>Reykjavík</a></li>
                        </ul>
                    </div>
                    <div className="footer1-content-right-list3">
                        <ul>
                            <li><a>Newsletter</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Bueno.co</a></li>
                            <li><a>Ueno.store</a></li>
                            <li><a>Ueno.design</a></li>
                            <li><a>Ueno.events</a></li>
                            <li><a>Ueno.land</a></li>
                            <li><a>Playground</a></li>
                            <li><a>The Interview</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer1
