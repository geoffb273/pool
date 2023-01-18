import { GameEngine } from "react-native-game-engine"
import React, { PureComponent } from "react";
import { GameObject } from "./GameObject";
import { Text, StyleSheet } from "react-native";

const RADIUS = 20
const styles = StyleSheet.create({
    solid: {
        borderColor: "#000000",
        borderWidth: 2,
        borderRadius: RADIUS * 2,
        width: RADIUS * 2,
        height: RADIUS * 2,
        backgroundColor: "blue",
        position: "absolute"
    },
    cueball: {
        borderColor: "#000000",
        borderWidth: 2,
        borderRadius: RADIUS * 2,
        width: RADIUS * 2,
        height: RADIUS * 2,
        backgroundColor: "white",
        position: "absolute"
    },
    striped: {
        borderColor: "#000000",
        borderWidth: 2,
        borderRadius: RADIUS * 2,
        width: RADIUS * 2,
        height: RADIUS * 2,
        backgroundColor: "red",
        position: "absolute"
    }
});

function collision(obj1, obj2) {
    const x = obj1.position[0]
    const y = obj1.position[1]
    const otherX = obj2.position[0]
    const otherY = obj2.position[1]
    
    return ((x - otherX) ** 2 + (y - otherY) ** 2) ** (1/2) <= 2 * RADIUS
}

function collisions(objects) {
    let i = 0
    while (i in objects) {
        let obj1 = objects[i]
        let j = i + 1
        while (j in objects) {
            let obj2 = objects[j]
            if (collision(obj1, obj2)) {
                
                const x = obj1.position[0]
                const y = obj1.position[1]
                const otherX = obj2.position[0]
                const otherY = obj2.position[1]
                const vx = obj1.velocity[0]
                const vy = obj1.velocity[1]
                const otherVx = obj2.velocity[0]
                const otherVy = obj2.velocity[1]

                const m1 = ((vx - otherVx) * (x - otherX) +  (vy - otherVy) * (y - otherY)) / ((x - otherX) ** 2 + (y - otherY) ** 2)
                const m2 = ((otherVx - vx) * (otherX - x) +  (otherVy - vy) * (otherY - y)) / ((x - otherX) ** 2 + (y - otherY) ** 2)
                
                const m1x = m1 * (x - otherX)
                const m1y = m1 * (y - otherY)

                const m2x = m2 * (otherX - x)
                const m2y = m2 * (otherY - y)

                obj1.velocity[0] -= m1x
                obj1.velocity[1] -= m1y

                obj2.velocity[0] -= m2x
                obj2.velocity[1] -= m2y

                /*while(collision(obj1, obj2)) {
                    console.log("Still")
                    obj1.position[0] -= Math.abs(vx) / vx
                    obj1.position[1] -= Math.abs(vy) / vy
                    obj2.position[0] -= Math.abs(vx) / vx
                    obj2.position[1] -= Math.abs(vy) / vy
                }*/
                
                /*obj1.velocity[0] = vx
                obj1.velocity[1] = vy

                obj2.velocity[0] = otherVx
                obj2.velocity[1] = otherVy*/
            }
            j +=1
        }
        i += 1
    }
    return objects
}

function action(objects) {
    let i = 0
    while (i in objects) {
        let obj = objects[i]
        if (obj.position[0] + obj.velocity[0] < 0 || obj.position[0] + obj.velocity[0] > 1300) {
            obj.velocity[0] *= -1
        }
        if (obj.position[1] + obj.velocity[1] < 0 || obj.position[1] + obj.velocity[1] > 500) {
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
        systems={[action, collisions]}
        entities={{
            0: { style: styles.cueball, velocity: [2, -1], position: [300,  100], renderer: <GameObject/>},
            1: { style: styles.solid, velocity: [-1, 2], position: [40,  200], renderer: <GameObject/>},
            2: { style: styles.solid, velocity: [0, 0], position: [40,  400], renderer: <GameObject />},
            3: { style: styles.solid, velocity: [0, 0], position: [90,  90], renderer: <GameObject />},
            4: { style: styles.solid, velocity: [0, 0], position: [400,  100], renderer: <GameObject />},
            5: { style: styles.solid, velocity: [0, 0], position: [100,  300], renderer: <GameObject />},
            6: { style: styles.solid, velocity: [0, 0], position: [200,  400], renderer: <GameObject />},
            7: { style: styles.solid, velocity: [0, 0], position: [40,  100], renderer: <GameObject />},
            8: { style: [styles.solid, {backgroundColor: "black"}], velocity: [10, 0], position: [500,  200], renderer: <GameObject />},
            /*9: { style: styles.striped, velocity: [0, 0], position: [90,  50], renderer: <GameObject />},
            //10: { style: styles.striped, velocity: [1, 0.5], position: [240,  50], renderer: <GameObject />}
            11: { style: styles.striped, velocity: [0, 0], position: [240,  50], renderer: <GameObject />},
            12: { style: styles.striped, velocity: [0, 0], position: [340,  50], renderer: <GameObject />},
            13: { style: styles.striped, velocity: [0, 0], position: [300,  50], renderer: <GameObject />},
            14: { style: styles.striped, velocity: [0, 0], position: [600,  50], renderer: <GameObject />},
            15: { style: styles.striped, velocity: [0, 0], position: [600,  500], renderer: <GameObject />}*/
        }}>
        
        
 
      </GameEngine>
    );
}

GameView.prototype.constructor = PureComponent

export { GameView }
