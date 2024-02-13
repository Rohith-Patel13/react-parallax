import { Parallax } from 'react-parallax';
import milkywayGalaxy from '../../images/milkywayGalaxy.jpg'
import '../../../src/App.css'

const ImageOne=()=>(
    <Parallax className='image' bgImage={milkywayGalaxy} strength={800}>
        <div className='text'>
            <p className='textPara'>Milky Way Galaxy</p>
        </div>
    </Parallax>
) 
  
export default ImageOne
