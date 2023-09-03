import React from 'react';
import './Experience.css';



function Experience() {
    return (
        <div className='experience-wrapper-general'>
            <img className='divisor' alt="Cloud gif" src="https://i.pinimg.com/originals/f1/e1/39/f1e13922f700ec3a41e469f7412416ba.gif"></img>
            <h2 className='my-experience' id='experience'>My experience</h2>

            <p className='skills-introduction'>● 6 years of experience at advertising agencies, working with multidisciplinary teams, attending accounts from different industries.</p>
            <p className='skills-introduction'><strong>● DATA ANALYSIS:</strong> At the agency side, I was the Data Analyst for one of the biggest fashion brands in Brazil, called Arezzo. They have 3.8 million visits per month to their e-commerce. My job was to analyze performance, build reports and dashboards, manipulate data using SQL in Big Query, participate in meetings with Marketing Analysts, Managers and Data Engineers on the client side.</p>
            <p className='skills-introduction'><strong>● PRODUCT ANALYSIS:</strong> I could deliver different types of products such as dashboards and campaign reports. As a product data analyst, I had to define KPIs together with the stakeholders, define the softwares we were going to use, the product layout and translate the final user needs into the product.</p>

            <div className='skills-introduction'>
                <h3>Skills</h3>
                <ul>
                    <li>• Data Analysis</li>
                    <li>• Reporting</li>
                    <li>• Data Visualization</li>
                    <li>• Dashboard</li>
                    <li>• Querying data with SQL</li>
                    <li>• Monitoring</li>
                    <li>• Translating technical content to non-technical stakeholders</li>
                </ul>

                <h3>Softwares</h3>
                <ul>
                    <li>• Google Analytics</li>
                    <li>• Looker Studio & Tableau</li>
                    <li>• Big Query</li>
                    <li>• Google Workspace</li>
                    <li>• Microsoft Office</li>
                </ul>

                <h3>Scrum Agile Methodology</h3>
                <ul>
                    <li>• Backlog Prioritization</li>
                    <li>• Atlassian Jira</li>
                    <li>• Trello</li>
                    <li>• Scrum Events</li>
                    <li>• Task Management</li>
                </ul>
            </div>
            <p className='my-experience-subtitle'>Visit my <a href='https://www.linkedin.com/in/jaquelinebianco/'>LinkedIn</a> profile to see more details.</p>


        </div>
    )
}

export default Experience