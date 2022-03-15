import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootParamList} from 'navigation/interfaces';
import {memo} from 'react';
import {Button, View} from 'react-native';

const BootScreen = () => {
  const {navigate} = useNavigation<NativeStackNavigationProp<RootParamList>>();
  return (
    <View>
      <Button
        title="Navegar para o feed"
        onPress={() => {
          navigate('FeedScreen');
        }}
      />
    </View>
  );
};

export default memo(BootScreen);
