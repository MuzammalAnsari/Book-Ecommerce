import React, { useState } from "react";

const Button = (props) => {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };


    const buttonStyles = {
        width: '200px',
        borderRadius: '5px',
        backgroundColor: '#FF0000',
        backgroundImage: 'linear-gradient(to bottom, #fff 0%, #FFCCCC 100%)',
        backgroundSize: '300px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: hovered ? '-200%' : '0%',
        transition: 'background 300ms ease-in-out',
        cursor: 'pointer',
    };


    return (
        <button className="py-4"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={buttonStyles}
        >
            {props.text}
        </button>
    );
};

export default Button;
