import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const WysiwygField = ({ name, value, onChange }) => {
    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
            ['link', { color: [] }]
        ],
        clipboard: {
            matchVisual: false
        }
    };

    const formats = [
        'header',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'indent',
        'link',
        'color'
    ];

    return (
        <ReactQuill
            theme="snow"
            modules={modules}
            formats={formats}
            placeholder="Write something here..."
            name={name}
            value={value}
            onChange={onChange}
        />
    );
};

export default WysiwygField;
