import { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

function GoalInput({ onAddGoal }) {
  const [textInput, setTextInput] = useState(''); // from React

  const goalInputHandler = (enteredText) => {
    // console.log(enteredText);
    setTextInput(enteredText);
  };

  const addGoalHandler = () => {
    onAddGoal(textInput.trim());
    setTextInput('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Input your goal!"
        style={styles.textInput}
        onChangeText={goalInputHandler} // a prop exclusively from React Native which wants a function as a value // if we pass the function like functionName(), the function will be execute as soon as the code/component is render, which is too soon.
        // onChangeText gives you just the string as the argument for the callback.
        // onChange gives you the synthetic event as the argument.
        value={textInput} // so the value will be change depends on the input state
      />
      <Button
        title="Add Goal"
        onPress={addGoalHandler}
        // in React Native, there're no onClick prop as same as React, but we have onPress.
      />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    width: '70%',
    borderRadius: 12,
    marginRight: 8,
    padding: 14,
  },
});
