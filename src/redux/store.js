import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer,FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import {contactsReducer} from './contacts/slice';
import filterReducer from './filter/slice';
import { authReducer } from './auth/slice';

const persistConfig = {
 key: 'auth',
  storage,
  whitelist: ['token'],
}
const persisteAuthReducer = persistReducer(persistConfig, authReducer)
export const store = configureStore({
    reducer: {
      auth: persisteAuthReducer,  
      contacts:contactsReducer,  
      filter: filterReducer,  
  },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
})
export const persistor = persistStore(store);