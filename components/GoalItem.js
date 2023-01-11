import { StyleSheet, Text } from 'react-native';

function GoalItem({ goals }) {
  return <Text style={styles.goalItem}>{goals.text}</Text>;
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
