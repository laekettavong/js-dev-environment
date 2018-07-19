import './index.css';
import numeral from 'numeral';

const amount = numeral(1000).format('$0,0.00');

/* eslint-disable no-console */
console.log(`Sure I can use ${amount}`);
