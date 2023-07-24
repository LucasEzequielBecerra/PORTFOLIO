import { useEffect, useState } from "react"


const BackToTopButton = () => {
  
    const [backToTopButton, setBackToTopButton] = useState(false)

useEffect(()=>{
    window.addEventListener('scroll', ()=>{
if(window.scrollY > 350){
    setBackToTopButton(true)
} else{
    setBackToTopButton(false)
}
});
},[])

    const scrollUp = () =>{
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })
    }


    return( 
    <div>
        {backToTopButton && (
            <button onClick={scrollUp}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'fixed',
                bottom: '1rem',
                right: '2rem',
                width: '3rem',
                height: '3rem',
                borderRadius: '2rem',
                fontSize:'2rem',
                border: '1px solid #000',
                textAlign: 'revert-layer',
                background: 'linear-gradient(-45deg,#ee7752,#e73c7e,#23a6d5, #23d5ab)',
                color:'white',
                cursor: 'pointer'
            }}>
             <svg xmlns="http://www.w3.org/2000/svg"    width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="6 15 12 9 18 15"></polyline></svg>
            </button>
        )}
    </div>)
}

export default BackToTopButton