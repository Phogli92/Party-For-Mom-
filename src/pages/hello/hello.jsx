import './hello.css'
import { useNavigate } from 'react-router-dom'
export default function hello(){
    const navigate = useNavigate()
    return(
        <>
        <div className="main">
        <div className="hello_text"
        onClick={()=>{navigate('/home')}}>
            <h1>Здраствуйте</h1>
            <h1>Assalo alaykum</h1>
        </div>
        </div>
        </>
    )
}