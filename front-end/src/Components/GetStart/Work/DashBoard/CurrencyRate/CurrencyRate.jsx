import axios from "axios";
import React, { useEffect, useState } from "react";

const CurrencyRate = () => {
  const [currencyRates, setCurrencyRates] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/payment/user/currency/rate")
      .then((response) => {
        const rates = response.data.data;
        setCurrencyRates(rates);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (currencyRates === null) {
    return <div>Loading...</div>;
  }

  const rateEntries = Object.entries(currencyRates);

  // Use forEach to loop through the array
  rateEntries.forEach(([currency, data]) => {
    // console.log(currency, data);
    
  });

  return (
    <div></div>
  );
};

export default CurrencyRate;

// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const CurrencyRate = () => {
//   const [currencyRates, setCurrencyRates] = useState(null);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/payment/user/currency/rate")
//       .then((response) => {
//         const rates = response.data.data;
//         setCurrencyRates(rates);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

//   if (currencyRates === null) {
//     return <div>Loading...</div>;
//   }

//   const rateEntries = Object.entries(currencyRates);

//   // Use forEach to loop through the array
//   rateEntries.forEach(([currency, data]) => {
//     // console.log(currency, data);
    
//   });

//   return (
//     <div></div>
//   );
// };

// export default CurrencyRate;

