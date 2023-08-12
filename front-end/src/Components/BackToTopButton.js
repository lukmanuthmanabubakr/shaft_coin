import React from 'react'
import { useEffect, useState } from 'react'

const BackToTopButton = () => {
    const [backToTopBtn, setBackToTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                setBackToTopBtn(true)
            }else {
                setBackToTopBtn(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
  return (
    <div>
        { backToTopBtn && (
            <button style={{
                position: "fixed",
                bottom: "50px",
                right: "30px",
                height: "30px",
                width: "30px",
                fontSize: "30px",
                background: "black",
                color: "#ffbf00",
                borderRadius: "5px",
                cursor: "pointer"
            }}
            
            onClick={scrollUp}
            
            >^</button>
        )}
    </div>
  )
}

export default BackToTopButton