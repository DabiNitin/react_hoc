import React, { useState } from 'react';

/*
Higher Order functional Component 'higherOrderComponent'
Taking 'ChildComponent' child component as a parameter
*/
const higherOrderComponent = (ChildComponent: Function) => {
    /*
    return new component
    */
    return () => {
        return <ChildComponent />
    }
}

/*
Child functional Component 'ChildMouseHoverComponent'
Returning text with mouse over, leave and click effects
*/
function ChildMouseHoverComponent() {
    const [isHover, setIsHover] = useState<boolean>(false);
    const [textColor, setTextColor] = useState<string>('black');
    let onTextClickFun = () => {
        const color = textColor === 'red' ? 'black' : 'red';
        setTextColor(color);
    }
    return (
        <div>
            <h2
                style={{ color: textColor, cursor: 'pointer' }}
                onMouseOver={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                onClick={() => onTextClickFun()}
                title='Change color on click'

            >Mouse {isHover ? 'Over' : 'Leave'}</h2>
        </div>
    )
}

/*
Export HOC component 'higherOrderComponent'
Pass 'ChildMouseHoverComponent' component in 'higherOrderComponent' as a argument
*/
export default higherOrderComponent(ChildMouseHoverComponent);