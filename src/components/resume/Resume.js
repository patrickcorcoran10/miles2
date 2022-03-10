import './resume.css'
import resumePDF from './miles-moss-resume.pdf'

export default function Resume() {

    return (
        <div>
            <div className='section-header'>
                <h2>Resume</h2>
            </div>
            <div className = 'resume-container' >
                <a href={resumePDF} target="_blank" className='resume-link'>Click here to view or download my resume.</a>
            </div>
        </div>
    )
}