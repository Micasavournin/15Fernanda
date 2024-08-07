import { useRef, useState } from 'react';
import { RiPlayFill, RiPauseFill } from 'react-icons/ri'; // Importa los íconos de react-icons


const Playlist = () => {

    const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };
    return (
        <div >
            <div className="botonMusica" style={{ position: 'absolute', top: '6%', left: '89%', transform: 'translate(-50%, -50%)' }}>

                <audio
        src="https://firebasestorage.googleapis.com/v0/b/tarjeta-invitacion-2f4f0.appspot.com/o/Y2meta.app%20-%20Imagine%20Dragons%20-%20On%20Top%20Of%20The%20World%20(Lyric%20Video)%20(128%20kbps)%20(1).mp3?alt=media&token=9beac87c-4316-4cda-ab37-d27a017a1b9c"
        ref={audioRef}
        preload="metadata"
      />
      <button 
  className={`botonMusica ${isPlaying ? 'playing' : ''}`}
  onClick={handlePlayPause}
>
  <span className="icon-background">
    {isPlaying ? <RiPauseFill className='icon' /> : <RiPlayFill className='icon' />}
  </span>
  {isPlaying ? '' : ''}
</button>
    </div>

    {/* <h3 className='play' style={{ position: 'absolute', top: '6%', left: '89%',  }}>Dale */}
   {/* Play!</h3> */}
        </div>
        )
    }


export default Playlist