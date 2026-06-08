import './addcards.css'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../../firebase'
import { use, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function addcards(){
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    async function addcard(){
        if(!title || !text) return        
        try{
            const docRef = await addDoc(collection(db, 'cards'), {
                title,
                text,
                createdAt: serverTimestamp()
            })
            alert("Raxmat sizning tabrikingiz yuborildi")
            navigate('/home')
        } catch(error){
            console.error(error)
        }
    }
    return(
        <>
        <div className="bg">
            <h2 className="form_title">
    ✨ Yangi tilak
</h2>
        <div className="card">
            <div className="field">
            <label>Ismingiz</label>
            <input className='input' type="text" placeholder='Ismingizni Yozing' value={title} onChange={(e)=>setTitle(e.target.value)} required/>
            </div>
            <div className="field">
            <label>Tilagingiz</label>
            <textarea className='textarea' placeholder='Tilagingizni yozing' value={text} onChange={(e)=>setText(e.target.value)} required></textarea>
            </div>
            <div className="addCards_buttons">
            <button className="addcard" onClick={addcard}>Tilakni yuborish</button>
            <button className='addCards_backBtn' onClick={()=>{navigate('/home')}}>Qaytish</button>
            </div>
        </div>
        </div>
        </>
    )
}