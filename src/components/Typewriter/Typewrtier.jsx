import { useEffect, useState } from "react"

const Typewriter = ({contentArray=['Hello'],typeSpeed=100,deleteSpeed=100,style={},className})=>{
    const [displayText,setDisplayText] = useState('|');
    const [typeState,setTypeState] = useState('TYPE');
    const [content,setContent] = useState(contentArray[0]);
    const [contentIndex,setContentIndex] = useState(0);
    const [index,setIndex] = useState(0);
    useEffect(()=>{
        if(index>=0 && index < content.length && typeState==='TYPE'){
            const timer1 = setTimeout(()=>{
                setDisplayText((prev)=>{
                    let pre = prev.substring(0,index)
                    return pre + content[index] + '|'
                })
                setIndex((prev)=>prev+1);
            },typeSpeed)
            return ()=>{
                if(timer1){clearTimeout(timer1)};
            }
        }
        if(index===content.length && typeState==="TYPE"){
            setTypeState('DELETE')
        }
        if(index>=0 && index <= content.length && typeState==='DELETE'){
            const timer2 = setTimeout(()=>{
                setDisplayText((prev)=>{
                    prev = content.substring(0,index)
                    return prev + '|'
                })
                setIndex((prev)=>prev-1);
            },deleteSpeed)
            return ()=>{
                if(timer2){clearTimeout(timer2)};
            }
        }
        if(index<0 && typeState==="DELETE"){
            setIndex(0)
            setTypeState("TYPE")
            setContent(contentArray[(contentIndex+1)%(contentArray.length)]);
            setContentIndex((prev)=>{
                return ((prev+1)%(contentArray.length))
            });
        }
    },[index,typeState,content,contentIndex])
    return (
        <>
            <h1 className={className} style={style} >{displayText}</h1>
        </>
    )
}

export default Typewriter