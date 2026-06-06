import './cards.css'
import { useState } from 'react'
export default function cards({title, text}){
    const [flipped, setFlipped] = useState(false)
    
    return(
        <>
        <div className={`cart ${flipped?'flipped':''}`} onClick={()=>{setFlipped(!flipped)}}>
                <div className="front">
                    <h2>{title}</h2>
                </div>
                <div className="back">
                    <div className="cards_title">
                        <h2>{title}</h2>
                    </div>
                    <div className="cards_text">
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </>
    )
}