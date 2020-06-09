import React, { useState,useEffect } from 'react';

import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';

import image from './images/image.png';
import fullImage from './images/stay_home_bg.jpg';

const App = ()=> {
  const [data,setData] = useState({})
  const [country,setCountry] = useState('')

  useEffect(() => {
    const fetchMyAPI = async () => {
      const initData = await fetchData();
      setData(initData);
    };
    fetchMyAPI()
  }, []);


  const handleCountryChange = async (country) => {
    const data = await fetchData(country);
    setData(data);
    setCountry(country);
  }


  return(
      <>
        {/* <img className={styles.fullImage} src={fullImage} alt="COVID-19" /> */}
        <div className={styles.container}>
          <img className={styles.image} src={image} alt="COVID-19" />
          <div className={styles.ContentContainer}>
            <Cards data={data} />
            <div className={styles.ChartContainer}>
              <CountryPicker handleCountryChange={handleCountryChange} />
              <Chart data={data} country={country} /> 
            </div>
          </div>

        </div>
      </>
  )
}

export default App;