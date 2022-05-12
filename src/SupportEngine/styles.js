export const styles = {
    chatWithMeButton: {
        cursor: 'pointer',
        boxShadow: '0px 0px 16px 6px rgba(0, 0, 0, 0.33)',
        // Border
        borderRadius: '50%',
        // Background 
        backgroundImage: `url(https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1662727587524614~c5_720x720.jpeg?x-expires=1650560400&x-signature=J%2BvG0N5rqwOLshhAmVOaHw72iV8%3D)`, 
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '84px',
        // zIndex: '1000',
        // Size
        width: '84px',
        height: '84px',
    },
    avatarHello: { 
        // Position
        position: 'absolute', 
        left: 'calc(-100% - 44px - 28px)', 
        top: 'calc(50% - 24px)', 
        // Layering
        // zIndex: '10000',
        boxShadow: '0px 0px 16px 6px rgba(0, 0, 0, 0.33)',
        // Border
        padding: '12px 12px 12px 16px',
        borderRadius: '24px', 
        // Color
        backgroundColor: '#f9f0ff',
        color: 'black',

    },
    supportWindow: {
        // Position
        position: 'fixed',
        // bottom: '116px',
        bottom: '20px',
        // right: '24px',
        right: '140px',
        zIndex: '10000',
        // Size
        width: '420px',
        height: '440px',
        maxWidth: 'calc(100% - 48px)',
        maxHeight: 'calc(100% - 48px)',
        backgroundColor: 'white',
        // Border
        borderRadius: '12px',
        border: `2px solid #7a39e0`,
        overflow: 'hidden',

        // Shadow
        boxShadow: '0px 0px 16px 6px rgba(0, 0, 0, 0.33)',
    },
    emailFormWindow: { 
        width: '100%',  
        zIndex: '1000',
        overflow: 'hidden',
        transition: "all 0.5s ease",
        WebkitTransition: "all 0.5s ease",
        MozTransition: "all 0.5s ease",
        backgroundImage: 'url(https://img.freepik.com/foto-gratis/mesa-madera-vacia-humo-flotando-sobre-fondo-oscuro_68495-135.jpg)',

    },
    stripe: {
        position: 'relative',
        top: '-75px',
        width: '100%',
        height: '330px',
        backgroundColor: '#7a39e0',
        backgroundImage: 'url(https://img.freepik.com/foto-gratis/mesa-madera-vacia-humo-flotando-sobre-fondo-oscuro_68495-135.jpg)',
        // transform: 'skewY(-12deg)',
    },
    topText: { 
        position: 'relative',
        width: '100%', 
        top: '15%', 
        color: 'white', 
        fontSize: '24px', 
        fontWeight: '600',

    },
    emailInput: { 
        width: '66%',
        textAlign: 'center',
        outline: 'none',
        padding: '12px',
        borderRadius: '12px',
        border: '2px solid #7a39e0',
    },
    bottomText: { 
        position: 'absolute', 
        width: '100%', 
        top: '70%', 
        color: '#FFF', 
        fontSize: '24px', 
        fontWeight: '600' ,
        zIndex: '1000',

    },
    loadingDiv: { 
        position: 'absolute', 
        height: '100%', 
        width: '100%', 
        textAlign: 'center', 
        backgroundColor: 'white',
    },
    loadingIcon: { 
        color: '#7a39e0', 
        position: 'absolute', 
        top: 'calc(50% - 51px)', 
        left: 'calc(50% - 51px)',  
        fontWeight: '600',
    },
    chatEngineWindow: {
        width: '100%',  
        backgroundColor: '#fff',
    }
}