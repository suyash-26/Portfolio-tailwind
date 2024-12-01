import { FaHome } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { IoPersonSharp } from "react-icons/io5";
import { BsFillLaptopFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useLocation, useNavigate} from "react-router-dom";
import Footer from "../Footer/Footer";

const Navbar = ({children,className})=>{
    const Tabs = [
        {
            title:'Home',
            icon: <FaHome/>,
            path: '/'
        },
        {
            title:'About',
            icon: <IoPersonSharp/>,
            path: '/about'
        },
        {
            title:'Resume',
            icon: <HiDocumentText/>,
            path: '/resume'
        },
        {
            title:'Projects',
            icon: <BsFillLaptopFill/>,
            path: '/projects'
        }
    ]
    const [activeTab,setActiveTab] = useState('Home')
    const navigate = useNavigate()
    const location = useLocation();
    console.log('l',location)
    const handleTabClick = (tab)=>{
        navigate(tab.path)
    }
    const [navbarHeight, setNavbarHeight] = useState(0);

    useEffect(() => {
        const navbar = document.getElementById('navbar');
        if (navbar) {
            setNavbarHeight(navbar.offsetHeight);
        }
    }, []);
    return (
        <>
            <div id='navbar' className="flex justify-between sticky top-0 z-10 w-full p-2 pl-10 pr-20 bg-black text-white ">
                <div>
                    <p className="text-lg" >Logo</p>
                </div>
                <div className="flex flex-1 justify-center gap-8">
                    {
                        Tabs.map((item)=>{
                            return(
                                <>
                                    <div onClick={()=>{handleTabClick(item)}} className="group">
                                        <div className="flex justify-center items-center gap-1">  
                                            <span>{item.icon}</span>
                                            <p className="cursor-pointer text-lg">{item.title}</p>
                                        </div>
                                        <div style={{borderRadius:'10px'}} className={`h-1 w-full bg-purple-300 ${item.path===location.pathname?'':'scale-x-0 group-hover:scale-x-100  transition-transform transform duration-300'}`} />
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
            <div className="bg-black">
                {children}
            </div>
            <Footer/>
        </>
    )
}

export default Navbar