import React, { useState } from 'react';
import Calendar from 'react-calendar';  
import 'react-calendar/dist/Calendar.css'; 
import { Link } from 'react-router-dom';  
import './Accueil.css';
import video1 from '../assets/4873106-hd_1080_1920_25fps.mp4'
import video2 from '../assets/7969484-uhd_2160_3840_30fps.mp4'
const Accueil = () => {
    const [date, setDate] = useState(new Date());

    const onChange = (newDate) => {
        setDate(newDate);
    };

    return (
        <div className="home-container">
            {/* Bandes vidéo gauche et droite */}
            <div className="video-band left">
             <video autoPlay loop muted>
               <source src={video1} type="video/mp4" />
             </video>
            </div>
            <div className="video-band right">
              <video autoPlay loop muted>
               <source src={video2} type="video/mp4" />
              </video>
            </div>

            <h1 className="home-title">Bienvenue</h1>
            <p className="home-description">
                Créez et gérez vos cours facilement. Notre plateforme permet aux enseignants d'enregistrer des cours, de gérer le contenu et d'interagir efficacement avec les étudiants.
            </p>
        
            <div className="home-features">
                <div className="feature-card"> 
                    <h3 className="feature-title">Gestion facile des cours</h3>
                    <p className="feature-text">
                        Ajoutez, mettez à jour et supprimez des cours avec une interface facile à utiliser.
                    </p>
                </div>
                <div className="feature-card">
                    <h3 className="feature-title">Interagissez avec les étudiants</h3>
                    <p className="feature-text">
                        Favorisez la communication et la collaboration entre les enseignants et les étudiants.
                    </p>
                </div>
                <div className="feature-card">
                    <h3 className="feature-title">Suivez les progrès</h3>
                    <p className="feature-text">
                        Surveillez facilement les performances des cours et les mesures d'engagement des étudiants.
                    </p>
                </div>
            </div>
        
            {/* Cours et Calendrier côte à côte */}
            <div className="courses-calendar-container">
                <div className="home-courses">
                    <h2 className="section-title">Les Formations Disponibles</h2>
                    <ul className="course-list">
                        <li className="course-item"><Link to="/signin">l'Intelligence Artificielle</Link></li>
                        <li className="course-item"><Link to="/signin">Comptabilité Générale</Link></li>
                        <li className="course-item"><Link to="/signin">Marketing Digital</Link></li>
                        <li className="course-item"><Link to="/signin">Gestion de Projet</Link></li>
                    </ul>
                </div>
        
                <div className="home-calendar">
                    <h2 className="section-title">Calendrier</h2>
                    <Calendar 
                        onChange={onChange} 
                        value={date} 
                        className="calendar-component"
                    />
                </div>
            </div>
        </div>
    );
};

export default Accueil;
