import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './pages/AboutUs'
import WebDevelopmentServicePage from './components/Services/WebDevelopmentServicePage'
import GraphicDesignServicePage from './components/Services/GraphicDesignServicePage'
import MobileAppService from './components/Services/MobileAppService'
import SoftwareDevelopmentPage from './components/Services/SoftwareDevelopmentPage'
import DigitalMarketingPage from './components/Services/DigitalMarketingPage'
import DomainHostingPage from './components/Services/DomainHostingPage'
import ErpCrmPage from './components/Services/ErpCrmPage'
import ProjectPage from './pages/ProjectPage'
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/about-us' element={<AboutUs/> } />
        <Route path='/web-development' element={<WebDevelopmentServicePage/>}/>
        <Route path='/graphic-design' element={ <GraphicDesignServicePage /> } />
        <Route path='/mobile-app-development' element={<MobileAppService/>}/>
        <Route path='/software-development' element={ <SoftwareDevelopmentPage /> } />
        <Route path='/digital-marketing' element={ <DigitalMarketingPage /> } />
        <Route path='/domain-hosting' element={ <DomainHostingPage /> } />
        <Route path='/ERP-CRM-sytem' element={ <ErpCrmPage /> } />
        <Route path='/our-projects' element={<ProjectPage/>}/>
      </Routes>
   </>
  )
}

export default App