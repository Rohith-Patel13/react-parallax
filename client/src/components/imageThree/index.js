import { Parallax } from 'react-parallax';
import space from '../../images/spacePlanets.jpg'
import '../../../src/App.css'

const ImageThree=()=>(
    <Parallax className='image' bgImage={space} strength={800}>
        <div className='text'>
            <p className='textPara'>Space</p>
        </div>
    </Parallax>
) 
  

export default ImageThree
