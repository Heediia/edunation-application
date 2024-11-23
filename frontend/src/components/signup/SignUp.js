import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css'

function SignUp() {
  const [formData, setFormData] = useState({ email: '', password: '', role: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData,[e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),  
    });
    if (response.ok) {
      navigate('/signin');
    }
  };
  
  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          onChange={handleChange}
          required
        />
        <select name="role" onChange={handleChange} required>
          <option value="">Selectionner Role</option>
          <option value="professor">Professeur</option>
          <option value="student">Etudiant</option>
        </select>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
