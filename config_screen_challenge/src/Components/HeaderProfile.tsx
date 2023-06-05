import React from "react";
import { View, Text, Image } from "react-native";

type Props = {
    name: string,
    email: string,
    img: string,
}
const HeaderProfile = () => {
    return (
        <View className="flex flex-row">
            <View>
                <Image
                    className="h-[48px] w-[48px] rounded-xl m-2"
                    source={require('../Assets/astronaut.png')} />
            </View>
            <View className="space-y-1 mt-1">
                <Text className="text-gray-800 text-xl font-bold">
                    Marvin McKinney
                </Text>
                <Text className="text-xs font-light">
                    marvin.mckinney@example.com
                </Text>
            </View>
        </View>
        
    );
}

export default HeaderProfile;