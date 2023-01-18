import React, { PureComponent } from "react";
import { StyleSheet, View, Text } from "react-native";
 
const RADIUS = 20;
 
class GameObject extends PureComponent {
    
    constructor() {
        super()
    }

    render() {
        const x = this.props.position[0] - RADIUS;
        
        const y = this.props.position[1] - RADIUS;
        
        let num = <></>
        if (this.props.number) {
            num = <Text>{this.props.number}</Text>
        }
        return (
        <View style={[this.props.style, { left: x, top: y }]} >
            {num}
        </View>
        );
    }
}

export { GameObject };