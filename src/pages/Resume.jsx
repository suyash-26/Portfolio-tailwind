import PdfContainer from "../components/PdfContainer/PdfContainer"
// import resumePdf from '../../public/suyash_copy.pdf'

const Resume = ()=>{
    return (
        <>
            <div className="mt-5 w-full h-full flex flex-col justify-center items-center">
                <PdfContainer styles={{height:"auto",width:'500px'}}/>
            </div>
           
        </>
    )
}

export default Resume