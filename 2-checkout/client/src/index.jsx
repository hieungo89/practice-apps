import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Homepage from "./components/Homepage.jsx";
import FormAccount from "./components/FormAccount.jsx";
import FormAddress from "./components/FormAddress.jsx";
import FormPayment from "./components/FormPayment.jsx";
import Confirmation from "./components/Confirmation.jsx";
import axios from "axios";

const App = (prop) => {
  const customerInfo = {
    session_id: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipcode: '',
    phone: '',
    cardName: '',
    cardNumber: '',
    expireDate: '',
    cvv: '',
    billing: ''
  }

  customerInfo.session_id = document.cookie;
  const [currentPage, setCurrentPage] = useState([])
  const [entry, setEntry] = useState(customerInfo);

  const handleNextPage = (e) => {
    if (customerInfo.session_id !== document.cookie) {
      alert('Cannot Proceed. Please reload the page.')
    } else if (e.target.className === 'checkout') {
      setCurrentPage(formAccountLoadout);
    } else if (e.target.className === 'account') {
      if (e.target.innerText === 'Previous') {
        setCurrentPage(homepageLoadout)
      } else if (e.target.innerText === 'Next!') {
        setCurrentPage(formAddressLoadout);
      }
    } else if (e.target.className === 'address') {
      if (e.target.innerText === 'Previous') {
        setCurrentPage(formAccountLoadout)
      } else if (e.target.innerText === 'Next!') {
        setCurrentPage(formPaymentLoadout);
      }
    } else if (e.target.className === 'payment') {
      if (e.target.innerText === 'Previous') {
        setCurrentPage(formAddressLoadout)
      } else if (e.target.innerText === 'Next!') {
        setCurrentPage(confirmationLoadout);
      }
    } else if (e.target.className === 'confirmation') {
      if (e.target.innerText === 'Previous') {
        setCurrentPage(formPaymentLoadout)
      } else if (e.target.innerText === 'Purchase') {
        handleCompletePayment();
      }
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEntry(customerInfo[name] = value);
  }

  const handleCompletePayment = () => {
    axios.post('http://localhost:3000/checkout', customerInfo)
      .then(data => console.log(data))
      .then(() => handlePageReset())
  }

  const handlePageReset = () => {
    for (let key in customerInfo) {
      customerInfo[key] = '';
    }
    customerInfo.session_id = document.cookie;
    setEntry(customerInfo);
    setCurrentPage(homepageLoadout);
  }

  const homepageLoadout = <Homepage next={handleNextPage} />
  const formAccountLoadout = <FormAccount next={handleNextPage} input={handleInputChange} entry={entry}/>
  const formAddressLoadout = <FormAddress next={handleNextPage} input={handleInputChange} />
  const formPaymentLoadout = <FormPayment next={handleNextPage} input={handleInputChange} />
  const confirmationLoadout = <Confirmation next={handleNextPage} entry={entry} completion={handleCompletePayment} />

  useEffect(() => setCurrentPage(homepageLoadout), [])

  return (
    <div>
      <div>
        {currentPage}
      </div>
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));