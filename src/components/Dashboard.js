import React from 'react'
import '../css/Dashboard.css'

function Dashboard() {
    return (
        <div className="dashboard">
            <div className="dashboard-content" style={{width: "48%", justifyContent: "center", paddingTop: "50px", paddingLeft: "60px"}}>
                <p><a>Featured Project</a></p>
                <h1 className="one" style={{fontSize: "70px", paddingTop: "20px"}}>Slack</h1>
                <h1 className="two" >Let work overflow</h1>
                <p style={{paddingTop: "40px"}}><a>More projects</a></p>
            </div>
            <div className="dashboard-image" style={{width: "52%"}}>
                <video autoPlay style={{width: "600px", height: "500px",objectFit: "contain"}}>
                    <source src="https://prismic-io.s3.amazonaws.com/ueno-www/6387500f-b78d-4f4e-80a9-5558924c3b0c_slack-hero-sm.mp4" type="video/mp4"/>
                </video>
            </div>
        </div>
    )
}

export default Dashboard
