import React, { useCallback, useState } from 'react'

export default function UseCallbackHook() {
    const arr = [];

    const [inp, setInp] = useState('');
    const [str, setStr] = useState(arr);

    const HeandleSubmit = useCallback(() => {
        if (inp) {
            setStr((e) => [...e, inp]);

            console.table(str);
        }
    }, [inp,str])
    return (
        <div>
            <input type="text" name="" id="" value={inp} onChange={(e) => setInp(e.target.value)} />
            <button onClick={HeandleSubmit}>Submit</button>
        </div>
    )
}
