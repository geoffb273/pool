import { Text, View, Button } from 'react-native';

import { GameView } from '../components/GameView';

export const GamePage = ({navigation}) => {
    

    return ( 
    <View>
        <View>
            <Button onPress={()=>{navigation.navigate("Home")}} title="Back"/>
        </View>
        <View>
            <GameView style={{background: "black"}}><Text>Howdy</Text></GameView>
        </View>
    </View>)

}