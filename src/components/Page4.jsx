
const Page4 = () => {
    const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScN0LXtNBbH5gvm5PbqduyjFp_4oJbZvjPV9t67_ZboNYWk7Q/viewform?usp=pp_url';
    return (
        <div className="contenedor">
            <img  src="https://firebasestorage.googleapis.com/v0/b/tarjeta-invitacion-2f4f0.appspot.com/o/tarjeta%203%20(15)-04.jpg?alt=media&token=fa3ffdcd-eff9-42f5-a9e5-cdd14c21770e" alt="" style={{ maxWidth: '100%', maxHeight: '100%' }} />

            <a 
            style={{ position: 'absolute', top: '80%', left: '50%', transform: 'translate(-50%, -50%)'}}
        href={googleFormUrl} 
        target="_blank" rel="noopener noreferrer" 
        className=""
      >
        <button className="botonRecordar">
        Confirmar
            </button>
      </a>
        </div>
        )
    }


export default Page4