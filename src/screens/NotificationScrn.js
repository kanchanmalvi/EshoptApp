import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Tab, Text, TabView} from '@rneui/themed';
import {Card} from 'react-native-elements';

const NotificationScrn = () => {
  const [index, setIndex] = React.useState(0);

  const data = [
    {
      title:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      image:
        'https://cdn.pixabay.com/photo/2019/02/16/14/19/shopping-4000414__340.jpg',
    },
    {
      title:
        'Lady with a red umbrella Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy',
      image:
        'https://cdn.pixabay.com/photo/2016/11/22/19/08/hangers-1850082__340.jpg',
    },
    {
      title:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy',
      image:
        'https://media.istockphoto.com/photos/young-adult-asian-woman-with-shopping-bags-at-department-store-picture-id1320434979?b=1&k=20&m=1320434979&s=170667a&w=0&h=PS1O6G-C6OQ0p4W4aMrPZXuYe-p6WU4E8ag7cXlRXJc=',
    },
  ];

  return (
    <>
      <Text
        style={{
          textAlign: 'center',
          backgroundColor: '#008AD8',
          padding: 10,
          color: 'white',
          fontSize: 20,
        }}>
        Notifications
      </Text>
      <Tab
        value={index}
        onChange={e => setIndex(e)}
        indicatorStyle={{
          backgroundColor: 'grey',
          height: 3,
        }}
        variant="primary">
        <Tab.Item
          title="Recent"
          titleStyle={{fontSize: 12}}
          icon={{name: 'timer', type: 'ionicon', color: 'white'}}
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item>
          <View>
            {data.map((item, id) => {
              return (
                <View key={id} style={styles.cardflex}>
                  <Image
                    source={{uri: item.image}}
                    style={{margin: 5, width: 50, height: 50, borderRadius: 10}}
                  />
                  <Text style={{margin: 5, width: 250}}>{item.title}</Text>
                </View>
              );
            })}
          </View>
        </TabView.Item>
        <TabView.Item>
          <View>
            <Card>
              <Text h4>Recent</Text>
            </Card>
          </View>
        </TabView.Item>
        <TabView.Item>
          <View></View>
        </TabView.Item>
      </TabView>
    </>
  );
};

const styles = StyleSheet.create({
  cardflex: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-evenly',
    width: 390,
    padding: 10,
    borderColor: 'grey',
    borderBottomWidth: 1,
  },
});
export default NotificationScrn;
