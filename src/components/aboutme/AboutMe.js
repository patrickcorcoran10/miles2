import './aboutme.css'

export default function AboutMe() {
    const img = require('./it_me.jpg')
    return (
        <div>
            <div className="section-header">
                <h2>About Me</h2>
            </div>
            <div>
                <p> I’m a coding school student looking to use my new skills in web development and continue learning in
                    a professional setting.

                    I'm detail-oriented, organized, and determined with a passion for creating and problem-solving.

                    So far, I'm familiar with HTML5, CSS, JavaScript, JQuery, Bootstrap, Foundation, Node.js, Express.js, and SQL. I know I
                    still have so much to learn and I'm excited to keep exploring.
                </p>
                <img src = {img} alt = 'it me.' className='miles_img'/>
            </div>
        </div>
    )
}