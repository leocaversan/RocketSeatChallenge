import { View, Text, Image } from "react-native";


interface Props {
    img1: string,
    img2: string,
}

export default function Footer(props: Props) {
    return (
        <View className="flex flex-col mt-4 space-y-3">
            <View className="flex flex-row">
                <View>
                    <Image
                        className="w-5 h-5 rounded-full"

                        source={props.img1}
                    />
                </View>
                <View className="ml-2">
                    <Text>
                        Central de ajuda.
                    </Text>
                </View>
            </View>
            <View className="flex flex-row">
                <View>
                    <Image
                        className="w-5 h-5 rounded-full"

                        source={props.img2}
                    />
                </View>
                <View className="ml-2">
                    <Text className="text-red-500">
                        Sair
                    </Text>
                </View>
            </View>

        </View>

    );
}

