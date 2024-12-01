import homeSvg from '../assets/home.svg'
import Typewriter from '../components/Typewriter/Typewrtier'
const Home = ()=>{
    return (
        <>
            <div className="flex justify-center items-center h-screen w-full bg-black text-white" >
                <div className="flex w-4/5 h-5/6 justify-center items-center ">
                    <div className="flex-[3] flex flex-col justify-center ">
                        <h1 className='font-mono text-5xl mb-5'>
                            Hi There !
                        </h1>
                        <h1 className='text-4xl'>
                            I'm <span className='text-purple-400'>Suyash Jaiswal</span>
                        </h1>
                        <Typewriter className='text-3xl mt-[80px] text-purple-400' contentArray={['MERN DEVELOPER','PROGRAMMER']}/>
                    </div>
                    <div className="flex-[2] w-full h-full">
                        <img className='h-full w-full' src={homeSvg} alt="img"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home