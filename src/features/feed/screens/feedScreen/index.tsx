import {memo} from 'react';
import {Text, View} from 'react-native';
import {Card} from 'components';

const FeedScreen = () => {
  return (
    <View>
      <Card>
        <Text>This is card in FeedScreen</Text>
      </Card>
    </View>
  );
};

export default memo(FeedScreen);
