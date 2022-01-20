import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {TodosModel} from '../../models/todos';
import styles from './styles';
const axios = require('axios');
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../App';
import {Loader} from '../../components';
import RootReducers from '../../store';
import {getUsersListAction} from './actions';

type Props = NativeStackScreenProps<RootStackParams, 'Home'>;

export type RootState = ReturnType<typeof RootReducers>;

const Home = (props: Props) => {
  const {
    data: {data},
    loading,
    error,
  } = useSelector((state: RootState) => state.userReducers);
  const dispatch = useDispatch();

  const [result, setResult] = useState<TodosModel[]>([]);
  const [loadingscreen, setLoadingscreen] = useState<boolean>(false);

  //Normal API call to pass data as props to other screen
  const getTodos = async () => {
    try {
      setLoadingscreen(true);
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos',
      );
      console.log(response);
      setResult(response.data);
      setLoadingscreen(false);
    } catch (error) {
      console.error(error);
    }
  };

  const navigateTo = () => {
    props.navigation.navigate('TodosList', {result});
  };

  //Action dispatch to store and retrive data in redux
  const getUsersList = () => {
    dispatch(getUsersListAction());
  };
  console.log('response data :', loading, data, error);
  return (
    <View style={styles.container}>
      <Loader loading={loadingscreen || loading} />

      {result.length > 1 && (
        <TouchableOpacity style={styles.button} onPress={navigateTo}>
          <Text style={styles.label}>VIEW RESPONSE</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.button} onPress={getTodos}>
        <Text style={styles.label}>GET TODOS</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={getUsersList}>
        <Text style={styles.label}>GET Users (redux action)</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
