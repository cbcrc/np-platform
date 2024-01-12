import registerRootComponent from 'expo/build/launch/registerRootComponent';

import React from 'react';
import { Text } from 'react-native';
import { useLiveUrl } from './organizer/url';
import { getScreenStackForUrl, gotoInstance, makeUrl } from './util/navigate';
import { ScreenStack, useStandardFonts } from './util/instance';

console.log('Demo.js starting');

function App() {
  useStandardFonts();
  const url = useLiveUrl();
  const {structureKey, instanceKey, screenStack} = getScreenStackForUrl(url);

  if (!structureKey) {
    // const newUrl = makeUrl(['componentdemo', 'demo']);
    gotoInstance({structureKey: 'componentdemo', instanceKey: 'demo'});
    return null;
    // return <AppForUrl url={newUrl} />
  } else if (structureKey && instanceKey) {
      return <ScreenStack url={url} screenStack={screenStack} structureKey={structureKey} instanceKey={instanceKey} />
  } else {
    return <Text>You need a valid space URL to see a space</Text>
  }
}

registerRootComponent(App);
console.log('registered root component');
