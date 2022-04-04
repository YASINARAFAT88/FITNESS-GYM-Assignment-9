// import React, { createContext, useEffect, useState } from 'react';
// import Reviews from '../Reviews/Reviews';

// export const HooksContext = createContext()

// const Hooks = () => {
//     const [hooks, setHooks] = useState([]);
//     useEffect(() => {
//         fetch('data.json')
//         .then(res => res.json())
//         .then(data => setHooks(data))
//     },[])
//     return (
//        <Hooks.Provider value={hooks}>
//             <div>
//             {
//                 hooks.map(hook => <Reviews
//                 key={hook.id}
//                 hook={hook}
//                 ></Reviews>)
//             }
//         </div>
//        </Hooks.Provider>
//     );
// };

// export default Hooks;