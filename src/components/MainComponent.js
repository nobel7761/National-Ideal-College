import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Pages/Home/Home';
import AboutUs from './Pages/AboutUs/AboutUs';
import Admission from './Pages/Admission/Admission';
import AllCourses from './Pages/AllCourses/AllCourses';
import AllPages from './Pages/AllPages/AllPages';
import Events from './Pages/Events/Events';
import Student from './Pages/Student/Student';
import Contact from './Pages/Contact/Contact';
import Footer from './Footer/Footer';

const MainComponent = () => {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/about' element={<AboutUs></AboutUs>}></Route>
                <Route path='/admission' element={<Admission></Admission>}></Route>
                <Route path='/courses' element={<AllCourses></AllCourses>}></Route>
                <Route path='/pages' element={<AllPages></AllPages>}></Route>
                <Route path='/events' element={<Events></Events>}></Route>
                <Route path='/student' element={<Student></Student>}></Route>
                <Route path='/contact' element={<Contact></Contact>}></Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
};

export default MainComponent;