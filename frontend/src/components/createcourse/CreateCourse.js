import React, { useState } from 'react';
import axios from 'axios';
import './CreateCourse.css';

const CreateCourse = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        course_date: '',
        teacher: '',  // Change teacher_name to teacher for consistency
        className: ''
    });
    const [file, setFile] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('title', formData.title);
        data.append('description', formData.description);
        data.append('course_date', formData.course_date);
        data.append('teacher', formData.teacher); // Updated to teacher
        data.append('className', formData.className);
        data.append('pdf', file);

        try {
            const response = await axios.post('http://localhost:5000/courses', data, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            alert(response.data.message);
        } catch (err) {
            console.error(err);
            alert('Error creating course');
        }
    };

    return (
        <div className="create-course-container">
            <h2 className="create-course-title">Create Course</h2>
            <form className="create-course-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Course Title</label>
                    <input
                        className="create-course-input"
                        type="text"
                        name="title"
                        placeholder="Course Title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Course Description</label>
                    <textarea
                        className="create-course-textarea"
                        name="description"
                        placeholder="Course Description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="course_date">Course Date</label>
                    <input
                        className="create-course-input"
                        type="date"
                        name="course_date"
                        value={formData.course_date}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="teacher">Teacher's Name</label> {/* Updated to teacher */}
                    <input
                        className="create-course-input"
                        type="text"
                        name="teacher"
                        placeholder="Teacher's Name"
                        value={formData.teacher}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="className">Class</label>
                    <input
                        className="create-course-input"
                        type="text"
                        name="className"
                        placeholder="Class"
                        value={formData.className}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="pdf">Upload PDF</label>
                    <input
                        className="create-course-input"
                        type="file"
                        onChange={handleFileChange}
                        required
                    />
                </div>
                <button className="create-course-button" type="submit">
                    Create Course
                </button>
            </form>
        </div>
    );
};

export default CreateCourse;
