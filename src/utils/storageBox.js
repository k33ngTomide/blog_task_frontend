import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveToken = async (token) => {
  try {
    await AsyncStorage.setItem('cptkn', token);
  } catch (error) {
    console.error('Error saving token', error);
  }
};

export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('cptkn');
    return token !== null ? token : null;
  } catch (error) {
    console.error('Error getting token', error);
  }
};
