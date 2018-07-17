import React from 'react';

const InputComponent = props => {
    return (
        <div>
            <label htmlFor={props.id}>{props.label}
            </label>
            <input
                type={props.type}
                id={props.id}
                name={props.id}
                required={props.isRequired}
                placeholder={props.placeHolder}
                value={props.value}
                //add onChange from Register.js
                onChange={props.onChange}
            />
        </div>
    );
};

export default InputComponent;