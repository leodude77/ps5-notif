import cron from 'node-cron';
import {retailerParams, Retailers} from './defaults'
import _ from 'lodash';
import { findStock } from './findStock';
 

// const app = express();

_.forEach(Retailers, (retailer) => {
    cron.schedule('*/5 * * * * *', () => { findStock(retailerParams[retailer]) })
    // findStock(retailerParams[retailer]);
})
