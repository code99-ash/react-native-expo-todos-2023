import { StyleSheet, TextInput, View, Button } from 'react-native';
import { useState, useRef } from 'react';

export default function TodoForm({ submitHandler }) {
    const [text, setText] = useState('')

    const changeHandler = (val) => setText(val)
    const textData = useRef('')

    const submitForm = () => {
        submitHandler(text);
        // setText('')
        textData.current.clear()
    }


    return (
        <View>
            <TextInput 
                placeholder='New todo...'
                onChangeText={changeHandler}
                style={styles.input}
                ref={textData}
            />
            <Button 
                title='Add todo' 
                color='coral' 
                onPress={submitForm}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    input: {
        height: 38,
        paddingHorizontal: 2,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
})