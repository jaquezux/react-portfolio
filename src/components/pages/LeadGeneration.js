import React from 'react';
import '../ProjectDescription.css';
import LeadGenerationPic from '../assets/lead-generation.jpg';


function LeadGeneration() {
    return (
        <div className='ProjectDescriptionWrapper'>
            <h1>Lead Generation for the new CAOA Cherry’s SUV</h1>
            <h2>The What:</h2>
            <p>CAOA Cherry’s Sales and Marketing teams wanted to impact potential customers for the new SUV Tiggo pre-sale and generate leads through the website.

            The technologies behind the car were a key argument for the brand. Many of the features weren’t popular in Brazil yet, so I had to work in content planning focusing on showing the new features to create interest in the customers.
            </p>

            <h2>The How:</h2>
            <p>I used information provided by the company and connected them with actual users' necessities and google queries related to car technologies. I used SEMRush and Keyword Planner to find the most googled terms around car features and created a roadmap with the requirements for the content creation. This roadmap was shared with the Content Writers team.
            </p>
            <img className='ProjectImage' src={LeadGenerationPic} alt='lead-generation-jaqueline' />

            <h2>The Impact</h2>
            <p>● Weekly average of 20 leads that filled the form provided in the website created for this pre-launch.<br/>
            ●  The website ranking in the top 5 organic positions on Google SERP for search terms related to car features. Top 3 for “7-sits SUV” and “cargo space suv”.
            </p>

            <h3><i>Internal Impact</i></h3>
            <p><i>Integration of teams in the agency. Almost 30 people were working on this project and different areas could get to know each other: SEO, Paid Ads and Business Intelligence, Developers, Designers and Content Writers, Photographers and Video Makers.
            </i></p>
        </div>
    )
}
export default LeadGeneration