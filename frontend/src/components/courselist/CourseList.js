import React, { useEffect, useState } from 'react';
import './CourseList.css'

function CourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch('http://localhost:5000/courses');
      const data = await response.json();
      setCourses(data);
    };

    fetchCourses();
  }, []);

  return (
    <div className="course-list-container">
      <h2 className="course-list-title">Course List</h2>
      {courses.length === 0 ? (
        <p>No courses available.</p>
      ) : (
        <ul>
          {courses.map((course) => (
            <li className="course-item" key={course.id}>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <p>
                <strong>Teacher:</strong> {course.teacher}
              </p>
              <p>
                <strong>Date:</strong> {new Date(course.date).toLocaleDateString()}
              </p>
              <p>
                <strong>Class:</strong> {course.className}
              </p>
              {course.pdfUrl && (
                <a href={course.pdfUrl} target="_blank" rel="noopener noreferrer">
                  View PDF
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CourseList;
