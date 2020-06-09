import React from 'react';
// import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
// import cx from 'classnames';

import styles from './Cards.module.css';

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }

  return (
    <div className={styles.container}>
      <div  justify="center">
        <div  className={styles.infected}>
          <div>
            <div className={styles.cardTitleInfected} color="textSecondary" gutterBottom>
              Infected
            </div>
            <div variant="h5" component="h2">
              <CountUp start={0} end={confirmed.value} duration={2.75} separator="," />
            </div>
            <div color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </div>
            <div variant="body2" component="p">
              Number of active cases of COVID-19.
            </div>
          </div>
        </div>
        <div className={styles.recovered}  >
          <div>
            <div className={styles.cardTitleRecovered} color="textSecondary" gutterBottom>
              Recovered
            </div>
            <div variant="h5" component="h2">
              <CountUp start={0} end={recovered.value} duration={2.75} separator="," />
            </div>
            <div color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </div>
            <div variant="body2" component="p">
              Number of recoveries from COVID-19.
            </div>
          </div>
        </div>
        <div className={styles.deaths} >
          <div>
            <div className={styles.cardTitleDeaths}  color="textSecondary" gutterBottom>
              Deaths
            </div>
            <div variant="h5" component="h2">
              <CountUp start={0} end={deaths.value} duration={2.75} separator="," />
            </div>
            <div color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </div>
            <div variant="body2" component="p">
              Number of deaths caused by COVID-19.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Info;
