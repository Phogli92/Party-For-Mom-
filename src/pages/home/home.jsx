import './home.css'
import Cards from './cards/cards'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase'

export default  function home(){
    const [cards, setCards] = useState([])
    const navigate = useNavigate()
    const [index, setIndex] = useState(0)
    const[direction, setDirection] = useState(0)
    const [information, setInformation] = useState(false)

    useEffect(()=>{
        async function fetchCards(){
            const querySnapshot = await getDocs(collection(db, "cards"));

            const data = querySnapshot.docs.map(doc=>({
                id:doc.id,
                ...doc.data()
            }));

            setCards(data);
        }
        fetchCards()
    },[])

    function nextCard(){
        if(index < cards.length - 1){
            setDirection(1)
            setIndex(index + 1)
        }
    }
    function prevCard(){
        if(index > 0){
            setDirection(-1)
            setIndex(index - 1)
        }
    }
    
    return(
        <>
        <div className="home_main">
            <div className="bag">
                <div className="infor">
                    <button onClick={()=>{setInformation(!information)}}>Malumot</button>
                    <button onClick={()=>{navigate('/addCard')}} className='home_addCardBtn'>Tilak qoldirish</button>
                </div>
                <div className={`information ${information ? 'vision' : ''}`}>
                    <h1>Malumot</h1>
                    <p>Bu web-sayt Gulnozahonning tugilgan kuni uchun tilak bildirmoqchi bolgan insonlarga
                        Tilak qoldirish tugamsini bosib ismingiz va tilagingizni qoldirsangiz boladi😁
                    </p>
                </div>
                <div className="cards_line">
                    {cards.length > 0 && (
                        <div className={`card_wrapper dir-${direction}`} key={index + direction}>
                            <Cards
                                key={cards[index].id}
                                title={cards[index].title}
                                text={cards[index].text}
                            />
                        </div>
                        )}
                    
                </div>
                <div className="buttons">
                    <button className="left" onClick={prevCard} disabled={index === 0}>←</button>
                    <button className="right" onClick={nextCard} disabled={index === cards.length - 1}>→</button>
                </div>
            </div>
        </div>
        </>
    )
}