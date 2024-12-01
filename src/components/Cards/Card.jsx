import './card.css'
import homeeSvg from "../../assets/home.svg"

const Card = ({img,title,description})=>{
    return (
        <>
            <div>
                <div class="container">
                    <div class="cta">
                        <img src={img || homeeSvg} alt=""/>
                        <div class="text">
                            <h2>{title}</h2>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card