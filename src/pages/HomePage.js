import { Text, View, Button } from 'react-native';


export const HomePage = ({navigation}) => {
    

    return ( 
    <View>
        <View>
            <Button onPress={()=>{navigation.navigate("Game")}} title="Play"/>
        </View>
    </View>)

}