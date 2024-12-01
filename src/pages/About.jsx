import homeSvg from '../assets/home.svg'
import { FaJava } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { SiCplusplus } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiExpress } from 'react-icons/si';
import { SiHtml5, SiCss3, SiMongodb, SiTailwindcss, SiReact, SiNextdotjs, SiMysql,SiCodechef, SiGeeksforgeeks, SiCodeforces, SiLeetcode } from 'react-icons/si'; 
import { useEffect, useState } from 'react';

const About = ()=>{

    const Skills = [
        {
            title:'Java',
            icon:<FaJava/>
        },
        {
            title:'C++',
            icon: <SiCplusplus/>
        },
        {
            title:'Javascript',
            icon: <IoLogoJavascript/>
        },
        {
            title:'Node.js',
            icon:<FaNode/>
        },
        {
            title:'Express.js',
            icon: <SiExpress/>
        },
        {
            title:'HTML',
            icon: <SiHtml5/>
        },
        {
            title:'CSS',
            icon:<SiCss3/>
        },
        {
            title:'MongoDb',
            icon: <SiMongodb/>
        },
        {
            title:'Tailwind Css',
            icon: <SiTailwindcss/>
        },
        {
            title:'React',
            icon:<SiReact/>
        },
        {
            title:'Next.js',
            icon: <SiNextdotjs/>
        },
        {
            title: 'MySql',
            icon: <SiMysql/>
        }
    ]
    const CodingPlatforms = [
        {
            title:'Leetcode',
            url:'https://leetcode.com/u/SUYASH26/',
            icon: <SiLeetcode/>
        },
        {
            title: 'Geeks for Geeks',
            icon: <SiGeeksforgeeks/>,
            url:'https://www.geeksforgeeks.org/user/suyashjaiswal2001/'
        },
        {
            title: 'Codeforces',
            icon: <SiCodeforces/>,
            url: 'https://codeforces.com/profile/5uyash'
        },
        {
            title: 'Codechef',
            icon: <SiCodechef/>,
            url:''
        }
    ]
    const [availableHeight,setAvailableHeight] = useState(0)
    useEffect(() => {
        const updateHeight = () => {
            const navbar = document.getElementById('navbar');
            if (navbar) {
                setAvailableHeight(window.innerHeight - navbar.offsetHeight);
            }
        };
    
        window.addEventListener('resize', updateHeight);
        updateHeight();
    
        return () => {
            window.removeEventListener('resize', updateHeight);
        };
    }, []);
    return (
        <>
            <div className="bg-black flex flex-col text-white w-full">
                <div style={{ minHeight: `${availableHeight}px` }} className="flex justify-center items-center">
                    <div className='flex w-5/6 h-5/6 justify-center items-center'>
                        <div className='flex flex-[3] flex-col gap-4'> 
                            <h1 className='text-3xl text-purple-300' >Person Behind the Screen</h1>
                            <p className='text-lg'>
                                Hii there, it's Suyash Jaiswal .I am currently a final year student pursuing 
                                B.E. at Institute of Engineering & Technology, DAVV, Indore,(M.P) in 
                                department of Computer Engineering. A tech enthusiast with a strong interest
                                in web development and coding. I am highly interested in algorithmic problem 
                                solving and have a firm grasp in data structure and algorithms. Looking forward 
                                for opportunities to work in a challenging environment to diversify and utilize 
                                my knowledge in the growth of the organization and to improve my skills in
                                real-life environment.
                            </p>
                        </div>
                        {/* about page logo  */}
                        <div className='flex-[2]'>
                            <img className='h-full w-full' src={homeSvg} alt="img"/>
                        </div>
                    </div>
                </div>
                <div className='min-h-screen flex flex-col justify-center items-center'>
                    <div className='flex w-5/6 flex-col gap-10 items-center'>
                        <div className='flex-[1]' >
                             <h1 className='text-4xl '>Professional Skillset</h1>
                        </div>
                        <div className='flex justify-center flex-auto gap-5 flex-wrap '>
                            {
                                Skills.map((skill)=>{
                                    return (
                                        <>
                                            <div className='h-24 relative w-40 border-2 flex items-center justify-center border-purple-300 rounded-md transform duration-1000 hover:scale-110 hover:opacity-100 hover:border-4 hover:shadow-[0_0_15px_5px_rgba(128,90,213,0.5)] group'>
                                                <span className='text-7xl'>{skill.icon}</span>
                                                <span className='opacity-0 group-hover:opacity-100 transform group-hover:translate-y-2 transition duration-500 absolute bg-black text-white z-10 right-2 bottom-2 '>{skill.title}</span>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className='min-h-screen flex flex-col justify-center items-center'>
                    <div className='flex w-5/6 flex-col gap-12 items-center'>
                        <div className='flex-[1]' >
                             <h1 className='text-4xl '>My Coding Journey</h1>
                        </div>
                        <div className='flex justify-center flex-auto gap-5 flex-wrap '>
                            {
                                CodingPlatforms.map((platform)=>{
                                    return (
                                        <>
                                            <a href={platform.url} target='_blank' className='h-44 relative w-44 border-2 flex flex-col gap-1 items-center justify-center border-purple-300 rounded-md transform duration-1000 hover:border-4 hover:shadow-[0_0_15px_5px_rgba(128,90,213,0.5)] group cursor-pointer '>
                                                <span className='text-7xl'>{platform.icon}</span>
                                                <span>{platform.title}</span>
                                            </a>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About