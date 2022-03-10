import PortfolioCard from './Card'
import './portfolio.css'
import gamejunkee from './img/gamejunkee-screenshot.png'
import muvd from './img/muvd-screenshot.png'
import planner from './img/day-planner-screenshot.png'
import weather from './img/weather-app-screenshot.png'


export default function Portfolio() {

    return (
        <div className='portfolio-container'>
            <div className="section-header">
                <h2>Portfolio</h2>
            </div>
            <div className='flex-boxes'>
                <PortfolioCard
                    title={"GameJunkee"}
                    description={'A site for sharing and talking about your favorite video games.'}
                    image={gamejunkee}
                    deployed={'https://gamejunkee.herokuapp.com/'}
                    github={'https://github.com/Project-2-BJMS/GameJunkee'}
                />
                <PortfolioCard
                    title={"Muvd"}
                    description={'Movie info, reviews, and suggestions based on your mood.'}
                    image={muvd}
                    deployed={"https://coding-p1-g1.github.io/muvd/"}
                    github={'https://github.com/coding-p1-g1/muvd'}
                />
                <PortfolioCard
                    title={"Tech Blog"}
                    description={'A blog website using MongoDB.'}
                    // image={}
                    deployed={'https://miles-tech-blog.herokuapp.com/'}
                    github={'https://github.com/monstermiles/tech-blog'}
                />
                <PortfolioCard
                    title={"Day Planner"}
                    description={'Just a basic planner app.'}
                    image={planner}
                    deployed={"https://monstermiles.github.io/day-planner/"}
                    github={'https://github.com/monstermiles/day-planner'}
                />
                <PortfolioCard
                    title={"Weather App"}
                    description={'Weather forecasts from the OpenWeather API'}
                    image={weather}
                    deployed={'https://monstermiles.github.io/weather-app/'}
                    github={'https://github.com/monstermiles/weather-app'}
                />
            </div>
        </div>
    )
}

