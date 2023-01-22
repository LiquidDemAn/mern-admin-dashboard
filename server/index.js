import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import clientRoutes from './routes/client.js';
import generalRoutes from './routes/general.js';
import managementRoutes from './routes/management.js';
import salesRoutes from './routes/sales.js';

/* IMPORT MOCK DATA */
import User from './models/User.js';
import Product from './models/Product.js';
import ProductStat from './models/ProductStat.js';

import { dataUser, dataProduct, dataProductStat } from './data/index.js';

/* CONFIGURATION */

dotenv.config();

const app = express();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.use('/client', clientRoutes);
app.use('/general', generalRoutes);
app.use('/management', managementRoutes);
app.use('/sales', salesRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 5000;

mongoose.set('strictQuery', false);
mongoose
	.connect(process.env.MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('DB Connected');

		app.listen(PORT, (error) => {
			if (error) {
				console.log(`Server Error: ${error}`);
			}

			console.log(`Server Started On Port: ${PORT}`);
		});
		/* ONLY ADD DATA ONE TIME */
		// User.insertMany(dataUser);
		// Product.insertMany(dataProduct);
		// ProductStat.insertMany(dataProductStat);
	})
	.catch((error) => console.log('DB Error', error));
