import React, { FunctionComponent } from 'react';
import RobotContainer from './RobotContainer';
import Content from './Content';
import Robot from '../classes/robot';

interface RobotSectionProps {
  robot: Robot,
  id: number
}

const RobotSection: FunctionComponent<RobotSectionProps> = ({
  robot,
  id
}) => {
  return (
    <div className='factory-section slide' id={`slide-${id}`}>
        <h2>{robot.Type}</h2>
        <div className='content-wrapper'>
            <RobotContainer robot={robot}/>
            <Content />
        </div>
    </div>
  )
}

export default React.memo(RobotSection)