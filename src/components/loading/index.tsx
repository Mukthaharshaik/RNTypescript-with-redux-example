import React from 'react';
import {ActivityIndicator, Modal, View} from 'react-native';
import styles from './styles';

export type LoadingProps = {
  loading: boolean;
};

const Loader = ({loading}: LoadingProps) => {
  return (
    <Modal
      visible={loading}
      transparent={true}
      style={styles.container}
      onRequestClose={() => {}}>
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    </Modal>
  );
};

export default Loader;

Loader.defaultProps = {
  loading: false,
};
