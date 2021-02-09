import React, { useState } from 'react';
// import ReactQuill from 'react-quill';
import WysiwygField from './WysiwygField';

const RequirementInput = props => {
    const [quillValue, setQuillValue] = useState(props.quillValue);
    const [name, setName] = useState(props.name);

    const onChange = newHTML => {
        setQuillValue(newHTML);
        if (props.onUpdate) {
            props.onUpdate(props.index, {
                name,
                requirement: quillValue
            });
        }
    };

    const onNameChange = event => {
        setName(event.target.value);
        if (props.onUpdate) {
            props.onUpdate(props.index, {
                name,
                requirement: quillValue
            });
        }
    };

    const handleAdd = () => {
        const newRequirement = {
            name,
            requirement: quillValue
        };

        props.onAdd(newRequirement);

        setName('');
        setQuillValue('');
    };

    return (
        <div style={{ backgroundColor: '#eee', padding: '3em', margin: '1em 0' }}>
            {props.canDelete && (
                <button
                    type="button"
                    onClick={() => props.onDelete(props.index)}
                    style={{
                        backgroundColor: 'red',
                        borderRadius: 50,
                        display: 'inline',
                        color: 'white',
                        fontFamily: 'sans-serif',
                        padding: 6,
                        cursor: 'pointer',
                        userSelect: 'none'
                    }}>
                    x
                </button>
            )}
            <br />
            <br />
            <label htmlFor="name">
                name
                <input type="text" value={name} onChange={onNameChange} />
            </label>

            <p>Requirement</p>

            {/* <ReactQuill
                theme="snow"
                value={quillValue}
                onChange={onChange}
                defaultValue={props.quillValue}
            /> */}

            <WysiwygField value={quillValue} onChange={onChange} defaultValue={props.quillValue} />
            {props.onAdd && (
                <button type="submit" onClick={() => handleAdd()}>
                    + Add another requirement
                </button>
            )}
        </div>
    );
};

export default RequirementInput;
