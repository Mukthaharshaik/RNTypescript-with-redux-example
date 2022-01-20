import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {TodosModel} from '../../models/todos';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../App';
import styles from './styles';

type Props = NativeStackScreenProps<RootStackParams, 'Details'>;

const Details = (props: Props) => {
  console.log('uuuuuuu :', props.route.params.item);
  let result = props?.route?.params?.item;
  let {title, completed, id, userId} = result;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>id: {id}</Text>
      <Text style={styles.title}>userId: {userId}</Text>
      <Text style={styles.title}>title: {title}</Text>
      <Text style={styles.title}>completed: {completed}</Text>
    </View>
  );
};

export default Details;
