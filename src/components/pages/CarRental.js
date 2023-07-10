import React from 'react';
import '../ProjectDescription.css';
import CarRentalPic from '../assets/car-rental.jpg';


function CarRental() {
    return (
        <div className='ProjectDescriptionWrapper'>
            <h1>Content Strategy: Blog articles about car rental in Brazil</h1>
            <h2>The What:</h2>
            <p>The client was Localiza Car Rental. The company’s website had a transactional approach and after studies about the market, we did understand that we needed to enhance the informational content about car rental in their website, so the brand could be present in the first stages of the customer journey.

                <br /><br />These were the content creation pillars:<br />
                ● Touristic places that can be visited using a rented car.<br />
                ● The benefits of renting a car.<br />
                ● How to rent a car.<br />
                ● Technical aspects about rental cars.<br />
            </p>

            <h2>The How:</h2>
            <p>Every week, four articles were produced. I developed a guideline so the content writers could have the SEO best practices in mind while writing the articles. The guideline elements were: main keyword, side keywords, meta title, meta description and internal links*.

                <br /><br />*Links to related content or product pages in the website.
            </p>

            <img className='CarRentalProjectImage' src={CarRentalPic} alt='car-rental-jaqueline' />


            <h2>The Impact</h2>
            <p>● The company started to appear in the top 5 results for informational queries on Google results page.<br />
                ● Increased visits in sub-categories because of the hyperlinks added in the blog articles, improving navigation depth.<br />
                ● This process of content production helped the Link Building team to find more opportunities with portals and digital magazines.<br />
            </p>
        </div>
    )
}
export default CarRental