import React, {FunctionComponent} from 'react';

interface SliderButtonsProps {
    prevSlide: () => void,
    nextSlide: () => void,
}

const SliderButtons: FunctionComponent<SliderButtonsProps> = ({
    prevSlide,
    nextSlide
}) => {
    return (
      <div className='buttons'>
        <button className='prev' onClick={prevSlide}>&lt; Previous</button>
        <button className='next' onClick={nextSlide}>Next &gt;</button>
      </div>  
    )
}

export default SliderButtons