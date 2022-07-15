import React, {useState} from 'react';
import {View, Text} from 'react-native';
import app from '../styles/app';
import {TextInput} from 'react-native-paper';
import {RoundButton} from '../components/RoundButton';

export default Focus = ({addSubject}) => {
  const [subject, setSubject] = useState(null);

  return (
    <View style={app.flexContainer}>
      <View style={app.focusContainer}>
        <TextInput
          style={app.viewText}
          label="What you want to focus on?"
          onChangeText={setSubject}
        />
        <RoundButton title="+" size={50} onPress={() => addSubject(subject)} />
      </View>
    </View>
  );
};
