import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';

import GoalItem from './components/GoalItem';

export default function App() {
  const [goals, setGoals] = useState([]);

  const addGoalHandler = (enteredGoalText) => {
    // setGoals([...goals, textInput]) // this is not the best way to update state that needs the previous state. Hence, the best way to do it is to pass a function (which the function will be called automatically by React)
    setGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      // textInput
      { text: enteredGoalText, id: Math.random().toString() },
    ]); // best practice
  };

  const deleteGoalHandler = (id) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((item) => item.id !== id);
    });
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />

      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                goals={itemData.item}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtarctor={(item, index) => {
            // return item.id
            return index;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 60,
    paddingHorizontal: 15,
    flex: 1, // === height: '100%'
  },
  goalsContainer: {
    flex: 12,
  },
});
