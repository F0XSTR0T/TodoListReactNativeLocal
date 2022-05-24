import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';
import { useState } from 'react';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText); 
        setEnteredGoalText('');
    }
    
  return (
    <Modal visible={props.visible} animationType="slide" >
    <View style={styles.inputContainer}>
        <TextInput style={styles.TextInput} 
        placeholder='Your course goal' 
        onChangeText={goalInputHandler}
        value={enteredGoalText }
        />
        <View style={styles.ButtonContainer}>
        <View style={styles.button}>
        <Button title='Add Goal' onPress={addGoalHandler}/>
        </View>
        <View style={styles.button}>
        <Button title='Cancel' onPress={props.onCancel}/>
        </View>
        </View>
    </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create ({
    inputContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
      },
      TextInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '90%',
        padding: 8
      }, 
      ButtonContainer: {
        flexDirection: 'row',
        marginTop: 16,
      },
      button:{
          width: '60%',
          marginHorizontal: 8
      },
      image: {
          width: 100,
          height: 100,
          margin: 20
      }
});