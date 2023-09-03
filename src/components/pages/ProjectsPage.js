import React from 'react';
import '../ProjectsPage.css';


function ProjectsPage() {
  return (
    <div className='projects-wrapper-general'>

      <div className='projects-titles-wrapper' id='projects'>
        <h2 className='my-projects-wrapper-title'>Featured Projects</h2>
      </div>

      <div className='projects-container'>
        <h3>Personal projects that I use to learn Python:</h3>
        <h4><a href='https://www.kaggle.com/code/jaquelinebianco/venda-de-jogos-de-shooter-no-playstation'>📖 Data Analysis | Video Games Sales Exploratory Analysis</a><br /></h4>
        <h4><a href='https://github.com/jaquezux/hellacopters-scraping'>📖 Data Scraping | The Hellacopters Discography</a></h4>
        <h4><a href='https://github.com/jaquezux/pokemon'>📖 API Consulting | Consuming data from PokeAPI</a></h4>
      </div>

      <div className='projects-container'>
        <h3>Data Visualization:</h3>
        <h4><a href='https://lookerstudio.google.com/u/0/reporting/c51539b6-7e37-47b6-b2b5-225f5ccdb905/page/2ftED'>📊 Looker Studio | Traffic Overview</a><br /></h4>
        <h4><a href='https://public.tableau.com/app/profile/jaqueline.bianco/viz/JaquelinesGoodreadsStats/goodreads-stats-viz'>📊 Tableau Public | My Goodreads Stats</a></h4>
        <h4><a href='https://public.tableau.com/app/profile/jaqueline.bianco/viz/HellacoptersDiscography/Dashboard1'>📊 Tableau Public | Hellacopters Discography</a></h4>
      </div>

      <div className='projects-container'>
        <h3>Some featured projects I worked on:</h3>
        <h4><a href='/projects/lead-generation'>⌨️ Lead Generation for SUV pre-order</a><br /></h4>
        <h4><a href='/projects/internal-search-engine-analysis'>⌨️ Internal Search Engine Analysis and Insights Delivering</a></h4>
        <h4><a href='/projects/car-rental'>⌨️ Content Strategy: Car Rental in Brazil</a></h4>
      </div>


    </div>
  )
}

export default ProjectsPage