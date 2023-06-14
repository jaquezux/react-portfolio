import React from 'react';
import '../ProjectDescription.css';


function InternalSearchEngine() {
    return (
        <div className='ProjectDescriptionWrapper'>
            <h1>Renner: Internal Search Engine Analysis and Insights Delivering</h1>
            <h2>The What:</h2>
            <p>Renner is a fashion e-commerce website with more than 19 million visits per month in Brazil. The marketing and sales teams wanted to analyze the customer’s journey within the website, from the moment they land at the homepage, to the moment they make a purchase.<br/><br/>This was a 6 months project and I worked on it for 1 month. I analyzed specifically the internal search engine, and my job was to find improvements related to product description and details based on the user’s needs.
            </p>

            <h2>The How:</h2>
            <p>I used the search log provided by the company to collect the search queries used by the customers and start a keyword analysis. Google Analytics were used to understand if people were succeeding after searching for a product.<br/><br/>I noticed that many queries didn’t result in an existent page, indicative of a bad user experience and it had to be corrected by adding more keywords into the internal search settings or creating new pages.
            </p>

            <h2>The final recommendations were:</h2>
            <p>● Optimization of the pages that were used to respond to the search queries:<br/>
            - standardize titles and descriptions<br/>
            - technical adjustments to improve the page speed<br/>
            - addition of internal links, to give options for the user to navigate into other pages in the website if they didn’t find the product they were looking for.<br/>
            ● Adding more keywords into the internal search settings, considering synonyms and misspelled words using regex patterns.<br/>
            ● Optimization of product names, pictures and descriptions adding more details and keywords.<br/>
            </p>
            
            <h2>The Impact</h2>
            <p>● Bounce Rate decreasing from 60% to 47% after changes in the results page.<br/>
            ● Pages per visit increased from 3,6 to 5 after optimization in the internal links.<br/>
            ● <i>Conversion Rate increasing from 1.2% to 2%.</i><br/>

            </p>
        </div>
    )
}
export default InternalSearchEngine