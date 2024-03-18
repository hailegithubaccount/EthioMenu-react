import React from 'react'
import './Grid.css';
import food from '../../images/foods.jpg';
import kitfo from '../../images/kitfo.jpg';
import beynat from '../../images/beynat.jpg';
import kurte from '../../images/kurte.jpg';
import terSega from '../../images/terSega.jpg';
import tibse from '../../images/tibse.jpg';

export default function Grid() {
  return (
    <div>
      <div className='main'>
        <div className='first'>
            <div className='imager'>
            <img src={kitfo} alt=''/>
            </div>         
            <div className='text'>
            <h3>KITFO</h3>
            <p className='p'>ingridents:raw meat </p>
             <p className='pp'>$256</p>
             <button className='btn'>+add</button>
             </div>
        </div>


        <div className='first'>
            <div className='imager'>
            <img src={beynat} alt=''/>
            </div>         
            <div className='text'>
            <h3>BEYNAT</h3>
            <p className='p'>ingridents:different cookies</p>
             <p className='pp'>$266</p>
             <button className='btn'>+add</button>
             </div>
        </div>



        <div className='first'>
            <div className='imager'>
            <img src={kurte} alt=''/>
            </div>         
            <div className='text'>
            <h3>KURTE</h3>
            <p className='p'>ingridents:raw meat</p>
             <p className='pp'>$323</p>
             <button className='btn'>+add</button>
             </div>
        </div>




        <div className='first'>
            <div className='imager'>
            <img src={terSega} alt=''/>
            </div>         
            <div className='text'>
            <h3>TER SEGA</h3>
            <p className='p'>ingridents:raw meat</p>
             <p className='pp'>$200</p>
             <button className='btn'>+add</button>
             </div>
        </div>



        <div className='first'>
            <div className='imager'>
            <img src={tibse} alt=''/>
            </div>         
            <div className='text'>
            <h3>TIBSE</h3>
            <p className='p'>classNameingridents:meat</p>
             <p className='pp'>$257</p>
             <button className='btn'>+add</button>
             </div>
        </div>



        <div className='first'>
            <div className='imager'>
            <img src={food} alt=''/>
            </div>         
            <div className='text'>
            <h3>dor wete</h3>
            <p className='p'>dor wet is the ethiopia </p>
             <p className='pp'>$323</p>
             <button className='btn'>+add</button>
             </div>
        </div>



       












      </div>

    </div>
  )
}
