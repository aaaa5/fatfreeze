import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import featureImage from "../../static/images/bg.jpg";
import thumbnailEvent from "../../static/images/feature-event.png"
import thumbnailBoard from "../../static/images/feature-board.png"
import thumbnailNews from "../../static/images/feature-news.png"
import thumbnailTeams from "../../static/images/feature-team.png"
import thumbnailStaff from "../../static/images/feature-user.png"
import thumbnailStaff2 from "../../static/images/feature-user2.png"
import coolDevice from "../../static/images/coolDevice.png"
import DummyForm from "../components/dummyForm"

const IndexPage = () => (
    <Layout>
        <SEO title="Make your Staff and Workspace Happy"/>

        <div className={"page-header home"}>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-6"}>
                        <img alt={"Dashboard"} className={"mobile"} src={coolDevice}/>
                        <h1>CoolSculpting</h1>
                        <h2>Discount of 20% <br/> on purchase of 2 areas</h2>
                        <h3>COOLSCULPTING – A REVOLUTIONARY WAY TO WAVE GOODBYE TO UNWANTED FAT!</h3>                            
                    </div>
                    <div className={"col-6"}>
                    <div className={"formа"}>
                        <DummyForm/>
                    </div>
                    </div>
                </div>    
            </div>
                        
            
        </div>
        <img className={"tab"} alt={"Dashboard"} className="featureImage" src={featureImage}/>
        <div className={"container"}>
            <div className={"features"}>
                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first desktop"}>
                            <div className={"thumbnail"}>
                                <img alt={"Event"} src={thumbnailEvent}/>
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <p>Here at Trifecta Med Spa in Manhattan New York, we now offer the revolutionary and popular CoolSculpting treatment. CoolSculpting helps to minimize belly fat or lose your love handles without surgery.
CoolSculpting – A non-surgical and natural way to minimize stubborn fat. CoolSculpting is a fat freezing form of technology, FDA cleared, and used as a safe and effective alternative to liposuction. Using CoolSculpting, unwanted fat is effectively frozen, killing the cells. No surgeon’s knife needed! The result? A slimmer-looking you!</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>THE ADVANTAGES OF COOLSCULPTING</h2>
                                <ul>
                                    <li>- Higher Fat reduction for suitable candidates.</li>
                                    <li>- No surgeon’s knife</li>
                                    <li>- No anesthesia required</li>
                                    <li>- No discomfort</li>
                                    <li>- No downtime</li>
                                    <li>- No scarring</li>
                                </ul>
                            </div>
                        </div>

                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Board"} src={thumbnailBoard}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"News"} src={thumbnailNews}/>
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>WHICH AREAS WORK BEST WITH COOLSCULPTING</h2>
                                <p>CoolSculpting is recommended to treat bulges in the belly, love handles, upper and lower back, and male breasts (gynecomastia treatment).</p>
                                
                                <h3>WHO CAN BENEFIT FROM COOLSCULPTING?</h3>
                                <p>If you are within 15-20 pounds of your ideal weight, healthy, and have small pockets of diet and exercise resistant fat which you want to minimizes, this is potentially a treatment for you.</p>
                                <h3>COST OF COOLSCULPTING AT TRIFECTA MED SPA IN NYC</h3>
                                <p>The cost of treatment corresponds directly to the amount of treatment desired. Trifecta Med Spa NYC complimentary CoolSculpting consultation comes with a customized treatment plan. Treatments are charged based on the number of applicator placements. Most applicators cost $750 per placement, and are on the body for one hour of computer-controlled cooling, followed by a two-minute massage.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>TRIFECTA MED SPA IS OFFERING DUAL-SCULPTING IN MANHATTAN NY!</h2>
                                <p>TWICE as COOL at ½ the time!! Introducing the Dual Sculpting at Trifecta Med Spa! The old saying- “two is better than one” has a brand new meaning at Trifecta Med Spa and assures this statement comes true with the addition of a second CoolSculpting machine. We are now one of a few practices in the United States and New York to offer our customers not just one CoolSculpting machine, but two for Dual-COOL treatments! Until now, if you were looking to minimizes unwanted fat on the flanks, you would have to get treatment one side at a time. Now we can treat both sides at once to reduce your total treatment time. By performing DualSculpting procedures, we can deliver shorter procedure times for each patient and a much more flexible treatment schedule. Call Today (800) 757-4026 to schedule your complimentary CoolSculpting consultation and ask about CoolSculpting deals.</p>
                            </div>
                        </div>

                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Team"} src={thumbnailTeams}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Users"} src={thumbnailStaff}/>
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>TRIFECTA MED SPA IS NOW OFFERING NEW TREATMENT TO MINIMIZE YOUR DOUBLE CHIN!</h2>
                                <p>Love what you see with our new non-invasive Coolsculpting treatment to reduce fat under the chin and contour the neck. The #1 non invasive fat reduction treatment can now treat under the chin Requires no needles, surgery or downtime The CoolSculpting procedure minimizes stubborn fat safely and effectively, without surgery or downtime. This fat reduction treatment is the only FDA-cleared procedure to use controlled cooling. It is safely targeted to minimizes diet and exercise-resistant fat</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>WHAT RESULTS CAN I EXPECT?</h2>
                                <p>Love what you see with our new non-invasive Coolsculpting treatment to reduce fat under the chin and contour the neck. The #1 non invasive fat reduction treatment can now treat under the chin Requires no needles, surgery or downtime The CoolSculpting procedure minimizes stubborn fat safely and effectively, without surgery or downtime. This fat reduction treatment is the only FDA-cleared procedure to use controlled cooling. It is safely targeted to minimizes diet and exercise-resistant fat</p>
                            </div>
                        </div>

                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Users"} src={thumbnailStaff2}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={"call-to-action"}>
            <div className={"container"}>
                <div className={"call-to-action__content"}>
                    <h3>"The mission of Trifecta Med Spa is to offer the highest quality service to our clients by our professionals, through state of the art cosmetic treatments and technology."
                        <span>- Dr. Edward Fruitman, M.D.</span>
                    </h3>
                   
                </div>

                <div className={"button"}>
                    <a href="https://app.histaff.io" target={"_blank"}>MAKE AN APPOINTMENT</a>
                </div>
            </div>
        </div>
        <div className={"swipeView"}>
            <div className={"carousel"}>
                <p>
                    Very professional in how they manage customers and look after them. Even if there's a slight mishap they are quick to fix the problem and their professionalism is superb.
                </p>
            </div>
            <div className={"carousel"}>
                <p>
                    Very professional in how they manage customers and look after them. Even if there's a slight mishap they are quick to fix the problem and their professionalism is superb.
                </p>
            </div>
        </div>

        
    </Layout>
)

export default IndexPage
