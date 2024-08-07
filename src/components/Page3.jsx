
const Page3 = () => {
    const locationUrl2 = "https://maps.app.goo.gl/6BE6KyJsViL8JNmf8?g_st=com.google.maps.preview.copy";
    return (
        <div className="contenedor">
            <img className="imagen marcoMarti" src="https://firebasestorage.googleapis.com/v0/b/tarjeta-invitacion-2f4f0.appspot.com/o/tarjeta%203%20(15)-03.jpg?alt=media&token=be55fab4-ba8e-4924-9ef5-f79647257613" alt="" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            
            <a
            style={{ position: 'absolute', top: '86%', left: '50%', transform: 'translate(-50%, -50%)'}}
          href={locationUrl2}
          target="_blank"
          rel="noopener noreferrer"
        >
        <button className="botonLlegar">

          Cómo llegar?
        </button>

        </a>
            
        </div>
        )
    }


export default Page3