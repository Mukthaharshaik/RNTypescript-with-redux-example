import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {TodosModel} from '../../models/todos';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../App';
import styles from './styles';

type Props = NativeStackScreenProps<RootStackParams, 'TodosList'>;

const TodosList = (props: Props) => {
  const navigateTo = (item: TodosModel) => {
    props.navigation.navigate('Details', {item});
  };

  let result = props?.route?.params?.result;
  return (
    <View>
      <ScrollView>
        {result.map((item, index) => {
          return (
            <TouchableOpacity
              style={styles.title}
              key={index}
              onPress={() => navigateTo(item)}>
              <Text>{item.title}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default TodosList;
