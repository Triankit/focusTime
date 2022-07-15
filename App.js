import React, {useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import app from './src/styles/app';
import Focus from './src/features/Focus';
import {colors} from './src/utils/colors';
import {Timer} from './src/features/Timer';
import FocusHistory from './src/features/FocusHistory';

const App = () => {
  const [currentSubject, setCurrentSubject] = useState(null);
  const [history, setHistory] = useState([]);

  return (
    <SafeAreaView style={app.viewContainer}>
      {!currentSubject ? (
        <>
          <Focus addSubject={setCurrentSubject} />
          <FocusHistory history={history} />
        </>
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={subject => {
            setHistory([...history, subject]);
          }}
          clearSubject={() => setCurrentSubject('')}></Timer>
      )}
    </SafeAreaView>
  );
};

export default App;
