import React, { useState } from "react"

import { styles } from "../styles"

import axios from 'axios'

// import { LoadingOutlined } from '@ant-design/icons'

import Avatar from '../Avatar'

const EmailForm = props => {    
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)

    function getOrCreateUser(callback) {
        axios.put(
            'https://api.chatengine.io/users/',
            {username: email, email: email, secret: email},
            {headers: {"Private-Key":process.env.REACT_APP_CE_PRIVATE_KEY}}
        )
        .then(r => {
            console.log(r.data);
            callback(r.data) 
        })
        .catch(e => console.log('Get or create user error', e))
    }

    console.log('project',process.env.REACT_APP_CE_PROJECT_ID);
    console.log(process.env.REACT_APP_CE_PRIVATE_KEY);


    function getOrCreateChat(callback) {
        axios.put(
            'https://api.chatengine.io/chats/',
            {usernames: ['cbum',email], is_direct_chat: true},
            {headers: {
                // "Private-Key":process.env.REACT_APP_CE_PRIVATE_KEY,
                "Private-Key":'6bd1c2d7-e58b-4cdb-8283-d8fc75ffcf6a',
                "User-Name": email,
                "User-Secret": email,
            }}
        )
        .then(r => {
            console.log(r.data, 'Chat');
            callback(r.data);
        })
        .catch(e => console.log('Get or create chat error', e))
    }

    function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);

        console.log('Sending Email', email)
        
        getOrCreateUser(
            user => {
                props.setUser && props.setUser(user)
                getOrCreateChat(chat => {
                    console.log('Success in the chat', chat)
                    setLoading(false)
                    props.setChat && props.setChat(chat)
                })
            }
        )
    }

    return (
        <div 
            style={{
                ...styles.emailFormWindow,
                ...{ 
                    height: props.visible ? '100%' : '0px',
                    opacity: props.visible ? '1' : '0'
                }
            }}
        >
            <div style={{ height: '0px' }}>
                <div style={styles.stripe} />
            </div>

            <div 
                className='transition-5'
                style={{
                    ...styles.loadingDiv,
                    ...{ 
                        zIndex: loading ? '10' : '-1',
                        opacity: loading ? '0.33' : '0',
                    }
                }}
            />
            {/* <LoadingOutlined
                className='transition-5'
                style={{
                    ...styles.loadingIcon,
                    ...{ 
                        zIndex: loading ? '10' : '-1',
                        opacity: loading ? '1' : '0',
                        fontSize: '82px',
                        top: 'calc(50% - 41px)', 
                        left: 'calc(50% - 41px)',  
                    }
                }}
            /> */}

            <div style={{ position: 'absolute', height: '100%', width: '100%', textAlign: 'center' }}>
                <Avatar 
                    style={{ 
                        position: 'relative',
                        left: 'calc(50% - 44px)',
                        top: '10%',
                    }}
                />

                <div style={styles.topText}>
                    Bienvenido a nuestro chat de <br /> Soporte 👋
                </div>

                <form 
                    onSubmit={e => handleSubmit(e)}
                    style={{ position: 'relative', width: '100%', top: '19.75%' }}
                >
                    <input 
                        placeholder='Your Email'
                        onChange={e => setEmail(e.target.value)}
                        style={styles.emailInput}
                    />
                </form>
               
            </div>
        </div>
    )
}

export default EmailForm;