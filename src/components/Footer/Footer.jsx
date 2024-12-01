import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
const Contacts = [
    {
        title: 'Instagram',
        icon: <FaInstagram/>,
        url:'https://www.instagram.com/suyashjais26/profilecard/?igsh=MXhqc3J0bjF6ZjViYg=='
    },
    {
        title:'Github',
        icon: <FaGithub/>,
        url:'https://github.com/suyash-26'
    },
    {
        title: 'Linkedin',
        icon: <FaLinkedin/>,
        url:'https://www.linkedin.com/in/suyash-jaiswal-a5793b211/'
    }
]
const Footer = ()=>{
    return (
        <>
            <div className='flex justify-center gap-10 items-center pt-5 pb-5 sticky w-full bottom-0 bg-gray-900 text-white' >
                <p>Contact Me:</p>
                {
                    Contacts.map((contact)=>{
                        return(
                            <>
                                <a target='_blank' href={contact.url} className='hover:text-purple-300 text-xl' >
                                    {contact.icon}
                                </a>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Footer