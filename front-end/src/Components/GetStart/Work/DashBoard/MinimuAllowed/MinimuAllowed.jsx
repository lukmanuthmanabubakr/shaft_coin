// import axios from 'axios';
// import React, { useEffect, useState } from 'react'

// const MinimuAllowed = () => {
//   const [minimumAllowed, setMinimumAllowed] = useState(null);

//     useEffect(() => {
//         axios.get('http://localhost:5000/payment/user/currency/minimum-allowed', {
//           withCredentials: true, // Send cookies along with the request (since you're using credentials in your server)
//         })
//         .then(response => {
//           setMinimumAllowed(response.data.data);
//           console.log(response.data.data);
//         })
//         .catch(error => {
//           console.error('Error fetching minimum allowed currency:', error);
//         });
//       }, []);

//   //     const rateEntries = Object.entries(minimumAllowed);

//   // // Use forEach to loop through the array
//   // rateEntries.forEach(([currency, data]) => {
//   //   // console.log(currency, data);
    
//   // });
//   return (
//    <div>
//      {/* <p className="amount">{minimumAllowed[0]}</p> */}
//    </div>
//   )
// }

// export default MinimuAllowed

import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MinimumAllowed = () => {
  const [minimumAllowed, setMinimumAllowed] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/payment/user/currency/minimum-allowed', {
      withCredentials: true,
    })
      .then(response => {
        setMinimumAllowed(response.data.data);
        console.log(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching minimum allowed currency:', error);
      });
  }, []);

  return (
    <div>
      {minimumAllowed && (
        <ul>
          {Object.entries(minimumAllowed).forEach(([currency, data]) => {
            console.log(currency, data); // Perform any operations you want with currency and data
          })}
        </ul>
      )}
    </div>
  );
};

export default MinimumAllowed;
