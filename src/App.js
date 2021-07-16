import React from 'react'
import Navbar from './components/Navbar'
import MainContainer from './components/MainContainer'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Resume from './pages/Resume'
import Blog from './pages/Blog'
import Knowledge from './pages/Knowledge'
import Story from './pages/Story'
import Projects from './pages/Projects'
import ProjectPage from './pages/ProjectPage';
import NotFound from './pages/NotFound';
import Footer from './components/Footer'
import BlogPostPage from './pages/BlogPostPage';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <MainContainer>


          <Switch>

            <Route path='/' exact>
              <Resume />
            </Route>

            <Route path='/blog' exact>
              <Blog />
            </Route>

            <Route path='/blog/:blogpost' render={routeProps => {
              return <BlogPostPage />
            }} />


            {/* </Route> */}

            <Route path='/story' exact>
              <Story />
            </Route>

            <Route path='/projects' exact>
              <Projects />
            </Route>

            <Route path='/projects/:project'>
              <ProjectPage />
            </Route>

            <Route path='/knowledge' exact>
              <Knowledge />
            </Route>

            <Route component={NotFound} />


          </Switch>


        </MainContainer>
        <Footer />
      </Router>
    </>
  );
}

export default App;
