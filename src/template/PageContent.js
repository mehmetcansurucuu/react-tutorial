import React from 'react'
import Project from './content/Project'
import Contact from './content/Contact'
import Aboutus from './content/Aboutus'
import Image from './content/Image'
function PageContent() {
  return (
    <>
        <div className="w3-content w3-padding" style={{maxWidth: '1564px'}}>
            <Project />
            <Aboutus />
            <Contact />
            <Image />
        </div>
    </>
  )
}

export default PageContent