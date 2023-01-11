import { Pressable, StyleSheet, Text } from 'react-native';

function GoalItem({ goals, onDeleteItem }) {
  return (
    <Pressable onPress={onDeleteItem.bind(this, goals.id)}>
      {/* bind method - allows you pre-configure a function got future execution */}
      {/* the second value, the second argument you pass to bind will be the first parameter received by the to-be-called function */}
      <Text style={styles.goalItem}>{goals.text}</Text>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    padding: 18,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 12,
    marginBottom: 8,
  },
}); // we can also send the styles as a prop, but this a best practice to keep the style closes to the component file.
