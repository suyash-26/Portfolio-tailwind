import Card from '../components/Cards/Card'

const projects = [
    {
        title:"The Title",
        img: undefined ,
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit accusamus temporibus voluptates exercitationem, ipsa officiis a animi esse explicabo repudiandae in, blanditiis cum quam magni? Voluptates illum earum praesentium veniam."
    },
    {
        title:"The Title",
        img: "" ,
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit accusamus temporibus voluptates exercitationem, ipsa officiis a animi esse explicabo repudiandae in, blanditiis cum quam magni? Voluptates illum earum praesentium veniam."
    },
    {
        title:"The Title",
        img: "https://tse3.mm.bing.net/th?id=OIP.0B8FoaGmIdKyEQwRSy26ngHaEK&pid=Api&P=0&h=180" ,
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit accusamus temporibus voluptates exercitationem, ipsa officiis a animi esse explicabo repudiandae in, blanditiis cum quam magni? Voluptates illum earum praesentium veniam."
    },
    {
        title:"The Title",
        img: "" ,
        description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit accusamus temporibus voluptates exercitationem, ipsa officiis a animi esse explicabo repudiandae in, blanditiis cum quam magni? Voluptates illum earum praesentium veniam.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit accusamus temporibus volu
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit accusamus temporibus volu
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit accusamus temporibus volu`
    },
    {
        title:"The Title",
        img: "" ,
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit accusamus temporibus voluptates exercitationem, ipsa officiis a animi esse explicabo repudiandae in, blanditiis cum quam magni? Voluptates illum earum praesentium veniam."
    },
    {
        title:"The Title",
        img: "" ,
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit accusamus temporibus voluptates exercitationem, ipsa officiis a animi esse explicabo repudiandae in, blanditiis cum quam magni? Voluptates illum earum praesentium veniam."
    }
]
const Projects = ()=>{
    return (
        <>
            <div className='flex flex-col items-center justify-center p-10 '>
                <div className='w-5/7 flex flex-row flex-wrap gap-10 justify-center items-center'>
                    {
                        projects.map((project)=>{
                            return (
                                <Card title={project.title} img={project.img} description={project.description}/>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Projects