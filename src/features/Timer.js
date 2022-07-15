import React, {useState} from 'react';
import {View, Text, StyleSheet, Vibration} from 'react-native';
import {ProgressBar, Colors} from 'react-native-paper';
import {Countdown} from '../components/CountDown';
import {RoundButton} from '../components/RoundButton';
import {colors} from '../utils/colors';
import {spacing} from '../utils/sizes';
import {Timing} from './Timing';

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  2 * ONE_SECOND_IN_MS,
  3 * ONE_SECOND_IN_MS,
];

export const Timer = ({focusSubject, onTimerEnd, clearSubject}) => {
  const [isStarted, setStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  const onEnd = reset => {
    Vibration.vibrate(PATTERN);
    setStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countDown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={onEnd}
        />
        <View style={{paddingTop: spacing.xxl}}>
          <Text style={styles.title}>Focusing On:</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      <View>
        <ProgressBar
          color={colors.progressBar}
          progress={progress}
          style={{height: spacing.sm}}
        />
      </View>
      <View style={styles.timmingWraper}>
        <Timing onChangeTime={setMinutes} />
      </View>

      <View style={styles.ButtonWrapper}>
        {!isStarted && (
          <RoundButton title="start" onPress={() => setStarted(true)} />
        )}
        {isStarted && (
          <RoundButton title="pause" onPress={() => setStarted(false)} />
        )}
      </View>
      <View style={styles.clearSetWraper}>
        <RoundButton title="reset" size={60} onPress={clearSubject} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countDown: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timmingWraper: {
    flex: 0.1,
    flexDirection: 'row',
    margin: spacing.xl,
  },

  ButtonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  clearSetWraper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  task: {
    color: colors.white,
    textAlign: 'center',
  },
});
