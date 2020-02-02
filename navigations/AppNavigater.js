import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {
  createBottomTabNavigator,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import List from '../src/Components/List';

class GiftScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#615BFF',
    },
    headerTitleStyle: {
      color: 'white',
    },
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Gift Screen</Text>
      </View>
    );
  }
}
class CartScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#615BFF',
    },
    headerTitleStyle: {
      color: 'white',
    },
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Cart Screen</Text>
      </View>
    );
  }
}
class ProfileScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#615BFF',
    },
    headerTitleStyle: {
      color: 'white',
    },
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Profile Screen</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const ListStack = createStackNavigator({
  Shop: {
    screen: List,
  },
});
const GiftStack = createStackNavigator({
  Gift: {
    screen: GiftScreen,
  },
});
const CartStack = createStackNavigator({
  Cart: {
    screen: CartScreen,
  },
});
const ProfileStack = createStackNavigator({
  Profile: {
    screen: ProfileScreen,
  },
});

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Shop: {
      screen: ListStack,
      navigationOptions: {
        tabBarLabel: 'Shop',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icons style={[{color: tintColor}]} size={25} name={'store'} />
          </View>
        ),
      },
    },
    Gift: {
      screen: GiftStack,
      navigationOptions: {
        tabBarLabel: 'Gift',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icons style={[{color: tintColor}]} size={25} name={'redeem'} />
          </View>
        ),
      },
    },
    Cart: {
      screen: CartStack,
      navigationOptions: {
        tabBarLabel: 'Cart',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-cart'} />
          </View>
        ),
      },
    },

    Profile: {
      screen: ProfileStack,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-person'} />
          </View>
        ),
      },
    },
  },
  {
    initialRouteName: 'Shop',
    activeColor: '#f0edf6',
    inactiveColor: '#f0edf6',
    barStyle: {backgroundColor: '#FF6781'},
  },
);

export default createAppContainer(TabNavigator);
