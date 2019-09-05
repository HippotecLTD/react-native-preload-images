import React from 'react';
import { ImageBackground } from 'react-native';
import RNFetchBlob from 'react-native-fetch-blob';

export default class extends React.Component {
  render () {
    return (
      <ImageBackground
        {...this.props}
        source={{
          isStatic: true,
          uri: `file://${RNFetchBlob.fs.dirs.CacheDir}/images/${this.props.name}`
        }}/>
    );
  }
}
