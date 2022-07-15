import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {colors} from '../utils/colors';
import {fontSizes, spacing} from '../utils/sizes';

export default FocusHistory = ({history}) => {
  if (!history || !history.length) {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.title}>We have'nt focused on anything yet!</Text>
      </View>
    );
  }
  const renderItem = ({item, index}) => {
    return (
      <Text key={index} style={styles.text}>
        - {item}
      </Text>
    );
  };
  return (
    <View style={styles.viewContainer}>
      <Text style={styles.title}>Thing's we have focused on</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    paddingLeft: spacing.xxl,
  },
  text: {
    color: colors.white,
    fontSize: fontSizes.md,
    marginTop: spacing.sm,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,

    fontWeight: 'bold',
  },
});
