import React, {useState} from 'react';

export function States() {

    // Zustandsänderungen müssen immer über React erfolgen!
    const [count, setCount] = useState(0);


    return (
        <React.Fragment>
            <p>Du hast mich {count} mal geklickt</p>
            <button onClick={() => setCount(count +1)}>COUNT</button>
        </React.Fragment>
    )
}