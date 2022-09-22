import React, { useState } from 'react'
import {projectsData} from '../data/projects'

function Project() {
  const [projects,setProjects]= useState(projectsData);
  return (
    <>
        <div className="w3-container w3-padding-32" id="projects">
            <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Projects</h3>
        </div>

        <div>
          <div className="w3-row-padding">
            {
              projects && projects.map((item,index) =>{
                return (
                  <>
                    <div key={index} className="w3-col l3 m6 w3-margin-bottom">
                      <div className="w3-display-container">
                        <div className="w3-display-topleft w3-black w3-padding">
                          {item.name}
                        </div>
                        <img src="https://www.w3schools.com/w3images/house3.jpg" alt="{item.SeoTag}" style={{width: '100%'}} />
                      </div>
                    </div>
                  </>
                )                
              })
            }
          </div>
        </div>
    </>
  )
}

export default Project