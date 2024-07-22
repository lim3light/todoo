// import React from 'react'
// import "./home.css";



// const Home = () => {
//     return (
//         <div className="home d-flex justify-content-center align-items-center">
//         <div className="container d-flex justify-content-center align-items-center"> 
//             <h1 className="text-center"> 
//                 Organize your <br/>
//                 work and life. 
//             </h1> 
//             <br/>
//             <p> Maintain a to-list of your daily goals <br/> and make handling tasks simpler.</p>

//             <button class="home-btn p-2"> Make todo list </button>
        
        
//         </div>
//         </div>
//     );
// };

// export default Home;

import React from 'react';
import "./home.css";

const Home = () => {
    return (
        <div className="home d-flex justify-content-center align-items-center">
            <div className="container d-flex flex-column justify-content-center align-items-center"> 
                <h1 className="text-center"> 
                    Organize your <br/>
                    work and life. 
                </h1> 
                <p> 
                    Maintain a to-do list of your daily goals <br/> and make handling tasks simpler.
                </p>
                <button className="home-btn p-2"> Make todo list </button>
            </div>
        </div>
    );
};

export default Home;
