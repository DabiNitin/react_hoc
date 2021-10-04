import React from 'react';
import HigherOrderComponent from './HigherOrderComponent';

interface PropTypes {
    isHover: boolean,
    textColor: string,
}

/*
Child functional Component 'ChildMouseHoverComponent'
Returning text with mouse over, leave and click effects
*/
function ChildMouseHoverComponent(props: PropTypes) {
    const { textColor, isHover, ...prevProps } = props;
    return (
        <div>
            <h2
             {...prevProps}
             style={{ color: textColor, cursor: 'pointer' }}>
             Mouse {isHover ? 'Over' : 'Leave'}
            </h2>
        </div>
    )
}

/*
Export HOC component 'HigherOrderComponent'
Pass 'ChildMouseHoverComponent' component in 'HigherOrderComponent' as a argument
*/
export default HigherOrderComponent(ChildMouseHoverComponent);