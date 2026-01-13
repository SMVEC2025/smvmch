// Css 
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'react-multi-carousel/lib/styles.css';
import 'react-toastify/dist/ReactToastify.css';
import './assets/css/main.css'
import './assets/css/responsive.css'

// BootStrap JS Bundle
import 'bootstrap/dist/js/bootstrap.bundle';

// Components 
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

import Home1 from './pages/Home1';
import Home2 from './pages/Home2';
import Home3 from './pages/Home3';
import Home4 from './pages/Home4';
import Home5 from './pages/Home5';
import Home6 from './pages/Home6';
import Research from './pages/Research';
import ResearchDetails from './components/ResearchDetails';
import Course from './pages/Course';
import CourseIsotop from './pages/CourseIsotop';
import CourseSlider from './pages/CourseSlider';
import CourseDetails from './pages/CourseDetails';
import Events from './pages/Events';
import EventWithSidebar from './pages/EventWithSidebar';
import Event3Column from './pages/Event3Column';
import About from './pages/About';
import AcademicCalendar from './pages/AcademicCalendar';
import Gallery from './pages/Gallery';
import Instructors from './pages/Instructors';
import Faq from './pages/Faq';
import Error404 from './pages/Error404';
import Blog from './pages/Blog';
import Blog2Column from './pages/Blog2Column';
import Blog3Column from './pages/Blog3Column';
import BlogLeftSideBar from './pages/BlogLeftSideBar';
import BlogList from './pages/BlogList';
import BlogDetails from './pages/BlogDetails';
import Contact from './pages/Contact';
import ScrollUpBtn from './components/ScrollUpBtn';
import PreLoader from './components/PreLoader';

// Components 

function App() {

  //  Preloader 
  let [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, [])

  return (
    <>
      {isLoading ? <PreLoader /> :
        <div>
          <Helmet>
            <title>LearaPress - Education & Courses React Template</title>
            <link rel="shortcut icon" href="favicon.ico"></link>
          </Helmet>

          <Routes>
            <Route path='/' element={<Home1 />}> </Route>
            <Route path='/home-2' element={<Home2 />}> </Route>
            <Route path='/home-3' element={<Home3 />}> </Route>
            <Route path='/home-4' element={<Home4 />}> </Route>
            <Route path='/home-5' element={<Home5 />}> </Route>
            <Route path='/home-6' element={<Home6 />}> </Route>
            <Route path='/research' element={<Research />}> </Route>
            <Route path='/research-details' element={<ResearchDetails />}> </Route>
            <Route path='/course' element={<Course />}> </Route>
            <Route path='/course-isotop' element={<CourseIsotop />}> </Route>
            <Route path='/course-slider' element={<CourseSlider />}> </Route>
            <Route path='/course-details' element={<CourseDetails />}> </Route>
            <Route path='/events' element={<Events />}> </Route>
            <Route path='/event-with-sidebar' element={<EventWithSidebar />}> </Route>
            <Route path='/event-3-column' element={<Event3Column />}> </Route>
            <Route path='/about' element={<About />}> </Route>
            <Route path='/academics/calendar' element={<AcademicCalendar />}> </Route>
            <Route path='/gallery' element={<Gallery />}> </Route>
            <Route path='/instructors' element={<Instructors />}> </Route>
            <Route path='/faq' element={<Faq />}> </Route>
            <Route path='/error' element={<Error404 />}> </Route>
            <Route path='/blog' element={<Blog />}> </Route>
            <Route path='/blog-2-column' element={<Blog2Column />}> </Route>
            <Route path='/blog-3-column' element={<Blog3Column />}> </Route>
            <Route path='/blog-left-sidebar' element={<BlogLeftSideBar />}> </Route>
            <Route path='/blog-list' element={<BlogList />}> </Route>
            <Route path='/blog-details' element={<BlogDetails />}> </Route>
            <Route path='/contact' element={<Contact />}> </Route>
            <Route path='*' element={<Error404 />}> </Route>
          </Routes>
          <ScrollUpBtn />
          <ToastContainer />
        </div>
      }
    </>
  )
}

export default App
