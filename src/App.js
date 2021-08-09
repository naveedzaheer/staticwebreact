import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      fetch(`/api/SayHello`)
            .then(res => res.json())
            .then((txtData) => {
                console.log('Function Data:' + JSON.stringify(txtData));
                setData(txtData.message);
              })
            .catch('Exception' + console.log)
    })();
  });

  return <div>{data}</div>;
}

export default App;