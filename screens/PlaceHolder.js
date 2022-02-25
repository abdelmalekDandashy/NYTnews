import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ContentLoader, {Rect} from 'react-content-loader/native';
const PlaceHolder = () => {
    return (
        <View style={{padding:0}}>
          <ContentLoader
            speed={0.5}
            width={'100%'}
            height={'100%'}
            backgroundColor="#f3f3f3"
           foregroundColor="gray"
            >
            <Rect x="0" y="0" rx="8" ry="8" width="40%" height="30" />
            <Rect x="0" y="40" rx="8" ry="8" width="80%" height="20" />
            <Rect x="0" y="80" rx="8" ry="8" width="100%" height={250} />
  
            <Rect x="0" y={350} rx="8" ry="8" width="110" height={80} />
            <Rect x="120" y={360} rx="8" ry="8" width="30%" height={10} />
            <Rect x="120" y={380} rx="8" ry="8" width="60%" height={15} />
            <Rect x="120" y={410} rx="8" ry="8" width="40%" height={10} />
  
            <Rect x="0" y={440} rx="8" ry="8" width="110" height={80} />
            <Rect x="120" y={450} rx="8" ry="8" width="30%" height={10} />
            <Rect x="120" y={470} rx="8" ry="8" width="60%" height={15} />
            <Rect x="120" y={495} rx="8" ry="8" width="40%" height={10} />
  
            <Rect x="0" y={530} rx="8" ry="8" width="110" height={80} />
            <Rect x="120" y={540} rx="8" ry="8" width="30%" height={10} />
            <Rect x="120" y={560} rx="8" ry="8" width="60%" height={15} />
            <Rect x="120" y={585} rx="8" ry="8" width="40%" height={10} />
  
            <Rect x="0" y={630} rx="8" ry="8" width="50%" height={160} />
            <Rect x="53%" y={630} rx="8" ry="8" width="50%" height={160} />
          </ContentLoader>
        </View>
      );
}

export default PlaceHolder

const styles = StyleSheet.create({})