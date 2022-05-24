import { useState } from 'react/cjs/react.development';
import { StyleSheet, View,  FlatList, Button, Pressable } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]); 

  function startAtGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText ) {
     setCourseGoals(currentCourseGoal => [...currentCourseGoal, {text : enteredGoalText, key: Math.random().toString()},]);
     endAddGoalHandler();
  };

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoal => {
      return currentCourseGoal.filter((goal) => goal.id !== id );
    });
  }

  return (
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color="#5e0acc" onPress={startAtGoalHandler}/>
      <GoalInput visible={modalIsVisible} 
      onAddGoal={addGoalHandler} 
      onCancel={endAddGoalHandler}/>
      <View style={styles.goalsContainer}>
      <FlatList data={courseGoals} renderItem={(itemData) => {
        return <GoalItem text={itemData.item.text} 
          id={itemData.item.id}
          onDeleteItem={deleteGoalHandler}/>;
      }} 
      keyExtractor={(item, index) => {
        return item.id;
      }}
      alwaysBounceVertical={false} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 5,
  },
});
