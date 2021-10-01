import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import AboutStack from './AboutStack';



const Tab=createBottomTabNavigator();



export default function Navigation(){
return(
<Tab.Navigator>
 <Tab.Screen name="Gatos" component={HomeStack} />
 <Tab.Screen name="Perros" component={AboutStack}/>
 </Tab.Navigator>
);
}