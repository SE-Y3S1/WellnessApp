import { View, Text, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router'

import { icons } from '../../constants';

const TabIcon = ({ icon, color }) => {
    return (
        <View className="items-center justify-center gap-2">
            <Image
                source={icon}
                resizedMode="contain"
                tintColor={color}
                className="w-8 h-8"
            />
        </View>
    )
}
const TabsLayout = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: "#FFA001",
                    tabBarInactiveTintColor: "#A8A8A8",
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: "#FFFFFF",
                        borderTopColor: "transparent",
                        height: 84,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 10 },
                        shadowOpacity: 0.2,
                        shadowRadius: 15,
                        elevation: 5,
                    },
                }}
            >
                <Tabs.Screen
                    name="home"
                    options={{
                        title: 'Home',
                        headershown: false,
                        tabBarIcon: ({ color }) => (
                            <TabIcon
                                icon={icons.home}
                                color={color} />
                        ),
                    }}
                />

                <Tabs.Screen
                    name="calendar"
                    options={{
                        title: 'Calendar',
                        headershown: false,
                        tabBarIcon: ({ color }) => (
                            <TabIcon
                                icon={icons.calendar}
                                color={color} />
                        ),
                    }}
                />

                <Tabs.Screen
                    name="notification"
                    options={{
                        title: 'Notification',
                        headershown: false,
                        tabBarIcon: ({ color }) => (
                            <TabIcon
                                icon={icons.bell}
                                color={color} />
                        ),
                    }}
                />

                <Tabs.Screen
                    name="profile"
                    options={{
                        title: 'Profile',
                        headershown: false,
                        tabBarIcon: ({ color }) => (
                            <TabIcon
                                icon={icons.profile}
                                color={color} />
                        ),
                    }}
                />
                

            </Tabs>
        </>
    )
}

export default TabsLayout