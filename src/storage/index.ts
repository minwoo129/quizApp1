import {getStorageDataType, setStorageDataType} from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const setStorageData: setStorageDataType = async args => {
  const {key} = args;
  try {
    const jsonValue = JSON.stringify(args);
    await AsyncStorage.mergeItem(key, jsonValue);
  } catch (e) {
    console.log(e);
  }
};

export const getStorageData: getStorageDataType = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    if (!jsonValue) return null;
    return JSON.parse(jsonValue);
  } catch (e) {
    return null;
  }
};
