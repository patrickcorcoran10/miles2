import './footer.css'
import { Button, Tooltip } from 'antd';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons'

export default function Footer() {
    return (
        <div className="footer-container">
            <div className='links-container'>
                {/* <a href="https://github.com/monstermiles" target="_blank" className='link' >GitHub</a>
                <a href="https://www.linkedin.com/in/miles-moss-087a961a1/" target="_blank" className='link'>LinkedIn</a> */}
                {/* <Tooltip 
                title = 'Github'
                placement='top'
                triger='hover'> */}
                    
                    <Button
                        type='link'
                        href='https://github.com/monstermiles'
                        target="_blank"
                        className='button'
                        icon={<GithubOutlined />}
                    ></Button>
                    <Button
                        type='link'
                        href="https://www.linkedin.com/in/miles-moss-087a961a1/"
                        target="_blank"
                        className='button'
                        icon={<LinkedinOutlined />}
                    ></Button>
                {/* </Tooltip> */}
            </div>
        </div>
    )
}