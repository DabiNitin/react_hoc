import React, { useState } from 'react';

/*
Higher Order functional Component 'HigherOrderComponent'
Taking 'ChildMouseHoverComponent' child component as a parameter
*/
const HigherOrderComponent = (ChildComponent: Function) => {
    const WithEffect = () => {
        const [isHover, setIsHover] = useState<boolean>(false);
        const [textColor, setTextColor] = useState<string>('black');
        let onTextClickFun = () => {
            const color = textColor === 'red' ? 'black' : 'red';
            setTextColor(color);
        }

        /*
        Pass required properties as props in 'ChildComponent' component
        */
        return <ChildComponent
            textColor={textColor}
            isHover={isHover}
            onMouseOver={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            onClick={() => onTextClickFun()} />
    }

    /*
    return new component 'WithEffect'
    */
    return WithEffect;
}

/*
Higher order component
*/
export default HigherOrderComponent;