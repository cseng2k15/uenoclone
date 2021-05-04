import { LocationOnOutlined } from '@material-ui/icons'
import React from 'react'
import '../css/JoinUs.css'

function JoinUs() {
    return (
        <div className="join-us">
            <div className="join-us-video">
                <video autoPlay>
                    <source src="https://ueno.co/static/interview-white-17edfff518080c24e6248ae5e6b232dc.mp4" type="video/mp4"/>
                </video>
            </div>
            <div className="join-us-headings">
                <h1 className="one" id="one">Join us</h1>
                <h1 className="two">Open positions</h1>
            </div>
            <div className="join-us-locations">
                <div className="join-us-location">
                    <div className="join-us-locations-names">
                        <b>San Francisco</b>
                        <p>No open positions</p>
                    </div>
                    <div className="join-us-locations-logo">
                    <div className="join-us-locations-logo-line">
                            <span>____</span>
                        </div>
                        <div className="join-us-locations-logo-symbol">
                            <LocationOnOutlined/>
                        </div>
                    </div>
                </div>
                <div className="join-us-location">
                    <div className="join-us-locations-names">
                        <b>New York</b>
                        <p>No open positions</p>
                    </div>
                    <div className="join-us-locations-logo">
                    <div className="join-us-locations-logo-line">
                            <span>____</span>
                        </div>
                        <div className="join-us-locations-logo-symbol">
                            <LocationOnOutlined/>
                        </div>
                    </div>
                </div>
                <div className="join-us-location">
                    <div className="join-us-locations-names">
                        <b>Reykjavík</b>
                        <p>No open positions</p>
                    </div>
                    <div className="join-us-locations-logo">
                        <div className="join-us-locations-logo-line">
                            <span>____</span>
                        </div>
                        <div className="join-us-locations-logo-symbol">
                            <LocationOnOutlined/>
                        </div>
                    </div>
                </div>
                <div className="join-us-location">
                    <div className="join-us-locations-names">
                        <b>Los Angeles</b>
                        <p>No open positions</p>
                    </div>
                    <div className="join-us-locations-logo">
                    <div className="join-us-locations-logo-line">
                            <span className="span-line">____</span>
                        </div>
                        <div className="join-us-locations-logo-symbol">
                            <LocationOnOutlined/>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default JoinUs
