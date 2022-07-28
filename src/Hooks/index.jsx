import React, {useState, useEffect } from 'react';

function Practice() {
 const [name, setName] = useState('React')



 return (
     <div>
         {name}
         <button onClick={() => setName('Angular')}>Click</button>
     </div>
 )
}

export default Practice;