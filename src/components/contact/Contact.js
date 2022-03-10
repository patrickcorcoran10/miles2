// export default function Contact() {

//     return (
//         <div>
//             <h2>Contact</h2>
//             <div>
//                 <address>
//                     <a href="mailto:miles.emmitt.moss@gmail.com">Email</a>
//                     <a href="tel:+1555-555-5555">555-555-5555</a>
//                     <a href="https://github.com/monstermiles" target = "_blank" >GitHub</a>
//                     <a href="https://www.linkedin.com/in/miles-moss-087a961a1/" target = "_blank" >LinkedIn</a>
//                     <a href="assets/miles-moss-resume.pdf" target = "_blank" >Resume</a>    
//                 </address>
//             </div>
//         </div>
//     )
// }

import './contact.css'

export default function Contact(props) {

    const { name, handleChangeName, email, handleChangeEmail, message, handleChangeMessage, handleSubmit } = props
    return (
        <div>
            <div className='section-header'>
                <h2>Contact</h2>
            </div>
            <div className = 'form-container'>
                <form>
                    <input
                        className='name'
                        placeholder='Name'
                        value={name}
                        onChange={handleChangeName}
                    />

                    <input
                        className='email'
                        placeholder='Email'
                        value={email}
                        onChange={handleChangeEmail}
                    />

                    <input
                        className='message'
                        placeholder='Message'
                        value={message}
                        onChange={handleChangeMessage}
                    />


                    <input
                        type='submit'
                        value='Submit'
                        onClick={handleSubmit}
                    />
                </form>
            </div>

        </div>
    )
}