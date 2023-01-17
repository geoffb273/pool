import { GameEngine } from "react-native-game-engine"
import React, { PureComponent } from "react";
import { GameObject } from "./GameObject";
import { Text } from "react-native";
 
function action(objects) {
    console.log(objects[0])
    let i = 0
    while (i in objects) {
        let obj = objects[i]
        if (obj.position[0] + obj.velocity[0] < 0 || obj.position[0] + obj.velocity[0] > 1300) {
            obj.velocity[0] *= -1
        }
        if (obj.position[1] + obj.velocity[1] < 0 || obj.position[1] + obj.velocity[1] > 700) {
            obj.velocity[1] *= -1
        }
        obj.position = [obj.position[0] + obj.velocity[0], obj.position[1] + obj.velocity[1]]
        i += 1
    }
    return objects
}

const GameView = ({props}) => {
    return (
      <GameEngine
        style={[]}
        systems={[action]}
        entities={{
            0: { velocity: [10, 10], position: [1000,  100], renderer: <GameObject />},
            1: { velocity: [0, 0], position: [40,  200], renderer: <GameObject />},
            2: { velocity: [0, 0], position: [40,  80], renderer: <GameObject />},
            3: { velocity: [0, 0], position: [40,  90], renderer: <GameObject />},
            4: { velocity: [0, 0], position: [40,  10], renderer: <GameObject />},
            5: { velocity: [0, 0], position: [40,  30], renderer: <GameObject />},
            6: { velocity: [0, 0], position: [40,  40], renderer: <GameObject />},
            7: { velocity: [0, 0], position: [40,  100], renderer: <GameObject />},
            8: { velocity: [0, 0], position: [100,  50], renderer: <GameObject />},
            9: { velocity: [0, 0], position: [90,  50], renderer: <GameObject />},
            10: { velocity: [0, 0], position: [140,  50], renderer: <GameObject />},
            11: { velocity: [0, 0], position: [240,  50], renderer: <GameObject />},
            12: { velocity: [0, 0], position: [340,  50], renderer: <GameObject />},
            13: { velocity: [0, 0], position: [70,  50], renderer: <GameObject />},
            14: { velocity: [0, 0], position: [45,  50], renderer: <GameObject />},
            15: { velocity: [0, 0], position: [20,  50], renderer: <GameObject />}
        }}>
        
        
 
      </GameEngine>
    );
}

GameView.prototype.constructor = PureComponent

export { GameView }
