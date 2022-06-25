import React, { FunctionComponent } from 'react';
import img from '../images/good-luck.jpg';

const Content: FunctionComponent = () => {
  return (
    <div className="content">
        <div>
            <p className="first">
                <b>P</b>aragraph text here. Text-align on left, 3% space from
                right border. Text is only 2 lines and ends with three dots ...
                because it too long. On hover full text is shown as tooltip. First
                letter is bold.
            </p>
            </div>
        <div>
            <p className="second">
                <i>Paragraph</i> text here. Text is justified, 6% space from right
                border. Text is only 2 lines and ends with three dots ... because
                it too long. On hover full text is shown. First word is
                <i>italic</i>
            </p>
            </div>
        <div>
            <img src={img} alt="good luck" className="third"/>
            <p className="third">
                Paragraph text here. Text-align on left, 9% from right border.
                Image on left side.
            </p>
        </div>
    </div>  )
}

export default Content