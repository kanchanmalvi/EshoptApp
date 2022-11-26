import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {Button} from 'react-native-elements';

const About = ({navigation}) => {
  return (
    <ScrollView>
      <View style={{padding:10}}>
        <Text style={{textAlign:"center", fontSize:25,color:"#66cdaa"}}>About Us</Text>
      </View>

      <View>
        <Text h4>(1) How to Write an About Us Page</Text>
        <Text>
          Us page accurately represents who you are as a brand. Use the
          following steps to craft a narrative for business: Set the stage:
          Describe the industry problem that caused you to act. Tackle the
          obstacle: Convey how you set out to address the issue and the
          challenges you faced along the way. Introduce the solution: Mention
          how your company is pursuing its objectives and the pain points you
          intend to address. Share the bigger picture: Share details of your
          future objectives or state your aims and mission.
        </Text>
      </View>
      <View>
        <Text>(2.) How to Write an About Us Page</Text>
        <Text>
          Us page accurately represents who you are as a brand. Use the
          following steps to craft a narrative for business: Set the stage:
          Describe the industry problem that caused you to act. Tackle the
          obstacle: Convey how you set out to address the issue and the
          challenges you faced along the way. Introduce the solution: Mention
          how your company is pursuing its objectives and the pain points you
          intend to address. Share the bigger picture: Share details of your
          future objectives or state your aims and mission.
        </Text>
      </View>

      <View>
        <Text>(3.) How to Write an About Us Page</Text>
        <Text>
          Us page accurately represents who you are as a brand. Use the
          following steps to craft a narrative for business: Set the stage:
          Describe the industry problem that caused you to act. Tackle the
          obstacle: Convey how you set out to address the issue and the
          challenges you faced along the way. Introduce the solution: Mention
          how your company is pursuing its objectives and the pain points you
          intend to address. Share the bigger picture: Share details of your
          future objectives or state your aims and mission.
        </Text>
      </View>

      <View>
        <Text>(4.) How to Write an About Us Page</Text>
        <Text>
          Us page accurately represents who you are as a brand. Use the
          following steps to craft a narrative for business: Set the stage:
          Describe the industry problem that caused you to act. Tackle the
          obstacle: Convey how you set out to address the issue and the
          challenges you faced along the way. Introduce the solution: Mention
          how your company is pursuing its objectives and the pain points you
          intend to address. Share the bigger picture: Share details of your
          future objectives or state your aims and mission.
        </Text>
      </View>

      <View>
        <Button
          title="EXPLORE NOW"
          onPress={() => navigation.navigate('allproducts')}
        />
      </View>
    </ScrollView>
  );
};

export default About;

const styles = StyleSheet.create({});
