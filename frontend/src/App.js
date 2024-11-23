import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/signup/SignUp';
import SignIn from './components/signin/SignIn';
import CreateCourse from './components/createcourse/CreateCourse';
import CourseList from './components/courselist/CourseList';
import Navbar from './components/navbar/Navbar';
import Accueil from './components/home/Accueil';
import Contact from './components/contact/Contact';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Accueil/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/create-course" element={<CreateCourse />} />
        <Route path="/course-list" element={<CourseList />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
