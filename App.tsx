import React, {useEffect, useState} from 'react';
import {Button, FlatList, SafeAreaView, Text} from 'react-native';

import {Network} from '~/constants/network';
import {apiCall} from '~/store/apiService';
import {commonStyles} from '~/utils/commonStyle';

const App = () => {
  const [data, setData] = useState();
  useEffect(() => {
    // Make API call when the component mounts
    makeAPICall();
  }, []);
  // const counter = useIncrementListener();
  const makeAPICall = async () => {
    try {
      const res = await apiCall(Network.baseUrl);
      setData(res?.data);
      console.log('🚀 ~ makeAPICall ~ res:', res.data);
    } catch (error) {
      console.log('🚀 ~ makeAPICall ~ error:', error);
    }
  };

  const renderItem = ({item}: {item: any}) => {
    return <Text>{item?.name}</Text>;
  };

  return (
    <>
      <SafeAreaView style={commonStyles.container}>
        {/* <AppScreen />
        <Text>Count: {counter}</Text>
        <Button title="increment" onPress={emitIncrement} />
        <Button title="decrement" onPress={emitDecrement} />

      <Text>BASE_URL :{Config.API_URL}</Text> */}
        <FlatList data={data} renderItem={renderItem} />
        <Button title="Call API" onPress={makeAPICall} />
      </SafeAreaView>
    </>
  );
};

export default App;
