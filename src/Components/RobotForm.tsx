import React, {FunctionComponent, useState} from 'react';
import Robot from '../classes/robot';

interface RobotFormProps {
    createRobot(robot: Robot): void
}

const RobotForm: FunctionComponent<RobotFormProps> = ({
    createRobot,
}) => {
    const [nameError, setNameError] = useState<boolean>(false);
    const [typeError, setTypeError] = useState<boolean>(false);
    const [phraseError, setPhraseError] = useState<boolean>(false);
    const [disabled, setDisabled] = useState<boolean>(true);
    

    const onNameChange = (e: any): void => {
        let currentName: string = e.target.value;
    
        currentName ? setNameError(false) : setNameError(true);        
    }

    const onTypeChange = (e: any): void => {
        let currentType: string = e.target.value;

        currentType ? setTypeError(false) : setTypeError(true);        
    }

    const onPhraseChange = (e: any): void => {
        let currentPhrase: string = e.target.value;
        
        currentPhrase ? setPhraseError(false) : setPhraseError(true);        
    }

    const onTalkChange = (e: any): void => {        
        let isChecked: boolean = e.target.checked;
        
        if (isChecked) {
            setDisabled(false);
        } else {
            setDisabled(true);
            setPhraseError(false);
        }        
    }

    const onFormSubmit = (e: any) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { name, type, color, jump, talk, blink, phrase} = Object.fromEntries(formData);
        
        if ( name && type && color && (!Boolean(talk) || (Boolean(talk) && phrase))) {            
            let robot = new Robot(name.toString(), type.toString(), color.toString(), phrase?.toString(), Boolean(jump), Boolean(talk), Boolean(blink));
            createRobot(robot);

            e.target.reset();
        } else {
            if (!name) {
                setNameError(true);
            }
            if (!type) {
                setTypeError(true);
            }
            if (Boolean(talk) && !phrase) {
                setPhraseError(true);
            }
        }        
    }

    return (
        <form action="#" className="create-robot" onSubmit={onFormSubmit}>
            <p className="heading">Create Robot</p>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name='name' id="name" className="name" placeholder="Robot name" onChange={onNameChange} />
                {nameError && <div className="error-name">Please enter name</div>}
            </div>
            <div>
                <label htmlFor="select-type">Select type</label>
                <select name="type" id="select-type" className="select-type" onChange={onTypeChange} defaultValue=''>
                    <option defaultValue=""></option>
                    <option defaultValue="Male">Male</option>
                    <option defaultValue="Female">Female</option>
                </select>
                {typeError && <div className="error-type">Please enter type</div>}
            </div>
            <div>
                <label htmlFor="color-picker">Select Color</label>
                <input
                type="color"
                name='color'
                id="color-picker"
                className="color-picker"
                defaultValue="#e96126"
                />
            </div>
            <div>
                <label>Select Options</label>
                <label htmlFor="jump">
                    <input type="checkbox" id="jump" className="jump" name="jump" />
                    can jump
                </label>
                <label htmlFor="talk">
                    <input
                        type="checkbox"
                        id="talk"
                        className="talk"
                        name="talk"
                        defaultChecked={!disabled}
                        onChange={onTalkChange}
                    />
                    can talk
                </label>
                <label htmlFor="blink">
                    <input type="checkbox" id="blink" className="blink" name="blink" />
                    can blink
                </label>
            </div>
            <div>
                <label htmlFor="phrase">Phrase</label>
                <textarea
                name="phrase"
                id="phrase"
                cols={20}
                rows={5}
                placeholder="Phrase"
                onChange={onPhraseChange}
                disabled={disabled}
                ></textarea>
                {phraseError && <div className="error-phrase">Please enter phrase</div>}
            </div>
            <button>Create</button>
            <button>Show Created Robots</button>
            <button>Clear Robots</button>
            <hr />
            <div className="robot-table">
                <p className="robots-found"></p>
            </div>
        </form>
    );
}

export default RobotForm