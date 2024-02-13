import { Parallax } from 'react-parallax';
import planets from '../../images/planets.jpg'
import '../../../src/App.css'

const ImageTwo=()=> (
    <Parallax className='image' bgImage={planets} strength={800}>
        <div className='text'>
            <p className='textPara'>Planets</p>
        </div>
    </Parallax>
) 
  
  
export default ImageTwo