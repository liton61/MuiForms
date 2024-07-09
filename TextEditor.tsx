import React, { useRef, useState, useMemo } from 'react';
import JoditEditor from 'jodit-react';

const TextEditor = ({ initialValue = '', placeholder = 'Start typing...' }) => {
    const editor = useRef(null);
    const [content, setContent] = useState(initialValue);

    const config = useMemo(() => ({
        readonly: false,
        placeholder: placeholder,
    }), [placeholder]);

    return (
        <JoditEditor
            ref={editor}
            value={content}
            config={config}
            tabIndex={1}
            onBlur={newContent => setContent(newContent)}
            onChange={newContent => setContent(newContent)}
        />
    );
};

export default TextEditor;
