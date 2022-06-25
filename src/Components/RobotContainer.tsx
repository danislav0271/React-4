import React, { FunctionComponent } from 'react'
import Robot from '../classes/robot'


interface RobotContainerProps {
  robot: Robot
}

const RobotContainer: FunctionComponent<RobotContainerProps> = ({
  robot
}) => {

  let classes: string[] = [];
  if (robot.Blink) {
    classes.push('can-blink');
  }
  if (robot.Talk) {
    classes.push('can-talk');
  }
  if (robot.Jump) {
    classes.push('can-jump');
  }

  return (
    <div className={`robot-container ${robot.Type.toLowerCase()} ${classes.join(' ')}`}>
        <div className='head'>
            <div className='left-eye'></div>
            <div className='right-eye'></div>
            <div className='mouth'></div>
        </div>
        <div className='left-hand'></div>
        <div className='right-hand'></div>
        <div className='left-leg'></div>
        <div className='right-leg'></div>
        <div className='body' style={{backgroundColor: `${robot.Color}`}}></div>
        <p className='robot-name'>{robot.Name}</p>
        {robot.Talk && <div className='bubble bubble-bottom-left'>{robot.Phrase}</div>}
    </div>
  )
}

export default React.memo(RobotContainer)