import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RoundButton} from '../components/RoundButton';

export const Timing = ({onChangeTime}) => {
  return (
    <React.Fragment>
      <View style={styles.timingButton}>
        <RoundButton title="10" size={75} onPress={() => onChangeTime(10)} />
      </View>
      <View style={styles.timingButton}>
        <RoundButton title="15" size={75} onPress={() => onChangeTime(15)} />
      </View>
      <View style={styles.timingButton}>
        <RoundButton title="20" size={75} onPress={() => onChangeTime(20)} />
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center',
  },
});
