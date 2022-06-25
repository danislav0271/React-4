import React, { useState } from 'react';
import './App.css';
import RobotForm from './Components/RobotForm';
import RobotSection from './Components/RobotSection';
import Header from './Components/Header';
import Robot from './classes/robot';
import SliderButtons from './Components/SliderButtons';

function App() {
  const [robots, setRobots] = useState<Robot[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const createRobot = (robot: Robot): void => {
    setRobots([...robots, robot]);
    setActiveIndex(robots.length);
  }

  const nextSlide = () => {
    if (activeIndex+1 >= robots.length) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex+1);
    }
  }

  const prevSlide = () => {
    if (activeIndex-1 < 0) {
      setActiveIndex(robots.length-1);
    } else {
      setActiveIndex(activeIndex-1);
    }
  }

  return (
    <div className="App">
      <Header />
      
      {robots && robots.filter(robot => robot == robots[activeIndex])
        .map((robot) => 
        <RobotSection key={robots.indexOf(robot)} id={robots.indexOf(robot)} robot={robot}/>
        )
      }

      {robots.length != 0 && <SliderButtons prevSlide={prevSlide} nextSlide={nextSlide}/>}

      <RobotForm createRobot={createRobot}/>
    </div>
  );
}

export default App;
