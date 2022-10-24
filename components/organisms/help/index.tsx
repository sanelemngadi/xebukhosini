import React from 'react'

const WhatsappHelp = () => {
    return (
        <div className='gototop' style={{
            width: "3rem",
            height: "3rem",
            border: "1px solid #9da6d3",
            position: "fixed",
            bottom: "8rem",
            right: "2rem",
            backgroundColor: "#BCC4ED",
            zIndex: 10,
        }}>
            <a href="#" style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
                fontSize: "32px"
            }}>&#9650;</a>
        </div>
    )
}

export default WhatsappHelp;