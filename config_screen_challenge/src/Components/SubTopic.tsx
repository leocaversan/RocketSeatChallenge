import React from "react";
import { View, Text, Image } from "react-native";


interface Props {
    description: string,
    topic1: string,
    topic2: string,
    img1: string,
    img2: string,
}

export default function SubTopic(props: Props) {

    return (
        <View className="mt-5">
            <View>
                <View className="space-y-3">
                    <Text className="font-light text-gray-500">
                        {props.description}
                    </Text>
                    <View className="flex flex-row justify-between">
                        <View className="flex flex-row">
                            <View>
                                <Image
                                    className="w-5 h-5 rounded-full"
                                    //'../Assets/imgKey.jpeg'

                                    source={props.img1}
                                />
                            </View>
                            <View className="ml-2">
                                <Text>
                                    {props.topic1}
                                </Text>
                            </View>
                        </View>
                        <View className="my-auto">
                            <Image
                                className="w-3 h-3"
                                source={require('../Assets/imgRight.png')} />
                        </View>
                    </View>

                    <View className="flex flex-row justify-between">
                        <View className="flex flex-row">
                            <View>
                                <Image
                                    className="w-5 h-5 rounded-full"
                                    //'../Assets/imgKey.jpeg'

                                    source={props.img2}
                                />
                            </View>
                            <View className="ml-2">
                                <Text>
                                    {props.topic2}
                                </Text>
                            </View>
                        </View>
                        <View className="my-auto">
                            <Image
                                className="w-3 h-3"
                                source={require('../Assets/imgRight.png')} />
                        </View>
                    </View>


                </View>
            </View>

            <View className="mt-5 border-b border-gray-300" />
        </View>
    );
}