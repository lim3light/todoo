import React from "react";
import "./about.css";


const About = () => {
    return (
        <div className="about d-flex justify-content-center align-items-center">
        
        <div className="container">
        <div className="d-flex">  
        <h1> About Us </h1>
        </div>
        <p>
            Welcome to Todoo – your personal space for organizing your tasks and achieving your goals. At Todoo, we provide a simple and secure platform where you can create and manage your to-do lists effortlessly. With Todoo, you can sign up, log in, and keep track of your tasks from anywhere, ensuring that you stay organized and productive. <br/>
            <br className="color-white"/>Our user-friendly interface makes it easy for you to add, edit, and delete tasks, helping you stay on top of your daily responsibilities. Whether you’re managing work projects, personal errands, or long-term goals, Todoo is here to help you stay focused and efficient.
            Join Todoo today and take control of your tasks with ease. Let's make every day a productive one!
        </p>


        </div>
        </div>




    );
};

export default About;