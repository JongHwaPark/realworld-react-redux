import {useState} from 'react';

const useInput = (init) => {
    const [value, setValue] = useState(init);
    const onChange = (e) => {
        const {
            target:{value}
        } = e;
        setValue(value);
    };
    return { value, onChange }
};

export default useInput;
