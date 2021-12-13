import React, { useState } from 'react';
import { StyleSheet, Text, Button, TouchableOpacity } from 'react-native';

export default class TodoItem extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const todoItem = this.props.todoItem;
    const [text, setText] = useState('');
    return (
      <TouchableOpacity
        style={styles.todoItem}
        onPress={() => this.props.toggleDone()}
      >
        <Text style={(todoItem.done) ? { color: '#AAAAAA' } : { color: '#313131' }}>
          { todoItem.title }
        </Text>
        <TextInput style={styles.input} onChangeText={text => setText(text)} value={text} />
        <Button
          title="Rate"
          color={(todoItem.done) ? 'rgba(39, 245, 54, 0.8)' : 'rgba(80, 245, 54, 1)' }
          onPress={() => this.props.removeTodo()}
        />
        <Button
          title="Remove"
          color={(todoItem.done) ? 'rgba(200, 0, 0, 0.5)' : 'rgba(255, 0, 0, 1)' }
          onPress={() => this.props.removeTodo()}
        />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  todoItem: {
    width: '100%',
    height: 40,
    borderBottomColor: '#DDD',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15
  },
})