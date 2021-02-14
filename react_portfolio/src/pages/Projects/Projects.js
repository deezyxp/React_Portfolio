import React from 'react'

function Projects() {
    return (
        <>
            <div className ="row">
                <div className = "col-12 col-sm-6 col-md-6" id="github">
                    <a className = "mx-auto" href="https://lionhatt.github.io/project-WeatherWear/">WeatherWear</a>
                    <img src="assets/image/weather-wear-screenshot-1.png" alt="WWscreenshot" className="weatherwear"></img>
                    <a className="mx-auto" href="https://github.com/lionhatt/project-WeatherWear">Github Repository</a>
                </div>

                <div className="col-12 col-sm-6 col-md-6" id="github">
                    <a className="mx-auto" href="https://deezyxp.github.io/Weather_Dashboard.io/">Weather Dashboard</a>
                    <img src="assets/image/weatherdashboard.PNG" alt="WDscreenshot" className="weatherdashboard"></img>
                    <a className="mx-auto" href="https://github.com/deezyxp/Weather_Dashboard.io">Github Repository</a>
                </div>

                <div className="col-12 col-sm-6 col-md-6" id="github">
                    <a className="mx-auto" href="https://deezyxp.github.io/Code_Quiz.io/">Code Quiz</a>
                    <img src="assets/image/Quiz_Picture.PNG" alt="CQscreenshot" className="codequiz"></img>
                    <a className="mx-auto" href="https://github.com/deezyxp/Code_Quiz.io">Github Repository</a>
                </div>

                <div className="col-12 col-sm-6 col-md-6" id="github">
                    <a className="mx-auto" href="https://deezyxp.github.io/Day_Planner.io/">Day Planner</a>
                    <img src="assets/image/DayPlanner.PNG" alt="DPscreenshot" className="dayplanner"></img>
                    <a className="mx-auto" href="https://github.com/deezyxp/Day_Planner.io">Github Repository</a>
                </div>
            </div>
        </>
    )
}

export default Projects
