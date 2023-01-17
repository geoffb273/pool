import React, { PureComponent } from "react";
import { StyleSheet, View, Text } from "react-native";
 
const RADIUS = 20;
 
class GameObject extends PureComponent {
    
    constructor() {
        super()
    }
    render() {
        const x = this.props.position[0] - RADIUS / 2;
        
        const y = this.props.position[1] - RADIUS / 2;
        console.log(this.props)
        const text = this.props.text ? this.props.text : "Bye"
        return (
        <View style={[{ left: x, top: y }]} >
           <Text>{text}</Text>
        </View>
        );
    }
}
 
export { GameObject };