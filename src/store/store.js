import { configureStore } from '@reduxjs/toolkit';

import photoSlice from './reducers/photoSlice';

export default configureStore({
	reducer: {
		photos: photoSlice,
	},
});
