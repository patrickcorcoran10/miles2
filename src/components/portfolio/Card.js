import './portfolio.css'
import { Card } from 'antd';

export default function PortfolioCard({ title, description, image, deployed, github}) {

    return (
        <>
            <Card size="small" className='portfolio-card' style={{ backgroundImage: `url(${ image })` }}>
                {/* <Card size="small"  style={{ width: 300 }} className = 'portfolio-card'> */}
                {/* <div> */}
                <div >
                    <div>
                        <h3>{title}</h3>
                        <h4>{description}</h4>
                        <a href= {deployed} target = "_blank" >Deployed App</a>
                        <a href = {github} target = "_blank">Github</a>
                    </div>
                </div>
            </Card>
        </>
    )
}

