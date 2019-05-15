import React from 'react'
import PropTypes from "prop-types";
import { StyleSheet, Text, View, ImageBackground, Button, Alert, Form, Input } from 'react-native';

function NewHighScoreForm(props){

  let _name = null;

  function handleNewHighScoreFormSubmission(event) {
      event.preventDefault();
      props.onNewHighScoreCreation({name: _name.value});
      _name.value = '';

    }

  return (
    <View>
      <Form>
        <Input
          type='text'
          id='name'
          placeholder='Your Name'
          ref={(input) => {_name = input;}}/>

        <Button color="#333333"
          title= ""
          onPress={handleNewHighScoreFormSubmission} />
      </Form>
    </View>
  )
}

NewHighScoreForm.propTypes = {
  onNewHighScoreCreation: PropTypes.func
};

export default NewHighScoreForm;
