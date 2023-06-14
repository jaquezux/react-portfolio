import React from 'react';
import Projects from '../Projects';
import '../ProjectsPage.css';


function ProjectsPage() {
  return (
    <div>
      <div className='project-list-wrapper'>
        <h2 className='my-projects-wrapper-title'>At agencies, I could work on different projects, here are some featured jobs:</h2>
        <h4><a href='/projects/lead-generation'>⌨️ Lead Generation for SUV pre-order</a><br /></h4>
        <h4><a href='/projects/internal-search-engine-analysis'>⌨️ Internal Search Engine Analysis and Insights Delivering</a></h4>
      </div>
      <div>
        <Projects />

      </div>
    </div>
  )
}

export default ProjectsPage