/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StatusBar, View, Button, SafeAreaView, Text} from 'react-native';
import {createOvermind} from 'overmind';
import {Provider} from 'overmind-react';

import {config, useOvermind} from './store';

const overmindConfig = createOvermind(config, {
  devtools: true,
});

const Container = () => {
  const {state, actions} = useOvermind();

  return (
    <SafeAreaView>
      <Button
        title="Turn on loading"
        onPress={() => {
          actions.toggleLoading(true);
        }}
      />
      <Button
        title="Turn off loading"
        onPress={() => {
          actions.toggleLoading(false);
        }}
      />
      {state.loading && <Text>Loading...</Text>}
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <Provider value={overmindConfig}>
      <Container />
    </Provider>
  );
};

export default App;
