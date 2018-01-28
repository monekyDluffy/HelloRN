/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Image,
  Image
} from 'react-native';

export default class App extends Component<> {
  render()
  {
    return (

            <Image resource={{uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}} style={{width:100,height:200}}></Image>
    );
  }
}
