import React, { useEffect, useState } from "react";

import { styles } from './styles'
import { getAuth } from "firebase/auth";
const Avatar = props => {
    const [user, setUser] = useState('Adam');

    useEffect(() => {
    const user = getAuth().currentUser.displayName;
    setUser(user);
    }, [])
    
    const [hovered, setHovered] = useState(false)

    return (
        <div style={props.style}>
            <div 
                className='transition-3'
                style={{
                    ...styles.avatarHello,
                    ...{ 
                        opacity: hovered ? '1' : '0',
                        left: hovered ? 'calc(-100% - 232px - 28px)' : 'calc(-100% - 114px - 28px)'
                    }
                }}
            >
                Hola { user } 🤙
            </div>

            <div 
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={() => props.onClick && props.onClick()}
                className='transition-3'
                style={{
                    ...styles.chatWithMeButton,
                    ...{ border: hovered ? '1px solid #f9f0ff' : '4px solid #7a39e0' }
                }}
            />
        </div>
    )
}

export default Avatar;