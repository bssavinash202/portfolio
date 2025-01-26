import React from 'react'
import './About.css';
import theme from'../../assets/theme_pattern.svg';
import profile from '../../assets/avip.png';
const About = () => {
  return (
    <div className='about' id='about'>
      <div className='about-title'>
        <h1>About me</h1>
        <img src={theme} alt='theme'/>
      </div>
      <div className='about-section'>
        <div className='about-left'>
        <img src={profile} alt='profile'/>
        </div>
        <div className='about-right'>
            <div className='about-para'>
                <p>I am a Java Full Stack Trainee currently expanding my knowledge in frontend and backend development. At Codegnan, I am learning Java, HTML, CSS, and JavaScript, and gaining hands-on experience with Spring Framework and RESTful web services. I am also developing my skills in SQL for effective database management.
                </p>
                <p>I hold a Master's degree in Power Electronics and a Bachelor's degree in Electrical and Electronics Engineering. My previous role as a Junior Software Engineer involved developing user-friendly web applications using React.js and collaborating with teams to deliver quality projects.</p>

              <p>I am passionate about continuous learning and eager to connect with professionals in the tech industry to explore opportunities for growth and collaboration.</p>
                </div>
            <div className='about-skills'>
                <div className='about-skill'><p>HTML & CSS</p><hr style={{width:'70%'}}/></div>
                <div className='about-skill'><p>React</p><hr style={{width:'70%'}}/></div>
                <div className='about-skill'><p>JavaScript</p><hr style={{width:'60%'}}/></div>
                <div className='about-skill'><p>JAVA</p><hr style={{width:'50%'}}/></div>
                <div className='about-skill'><p>MySQL</p><hr style={{width:'80%'}}/></div>
            </div>
        </div>
      </div>
      <div className='about-achievements'>
        <div className='about-achievement'>
            <h1>1+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div><hr />
        <div className='about-achievement'>
            <h1>10+</h1>
            <p>PROJECTS COMPLETED</p>
        </div><hr />
        <div className='about-achievement'>
            <h1>15+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
