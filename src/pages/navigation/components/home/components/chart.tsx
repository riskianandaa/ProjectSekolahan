import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import { LineChart } from 'react-native-chart-kit'

function Chart(){
    return(
        <View>
            <LineChart
                data={{
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Des"],
                datasets: [
                    {
                    data: [
                       1, 9, 3, 8, 5, 2, 3, 7, 4, 6,12, 11
                    ]
                    }
                ]
                }}
                width={Dimensions.get("window").width * 90/105} 
                height={220}
                yAxisLabel=""
                yAxisSuffix=""
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                backgroundColor: "#93e5fa",
                backgroundGradientFrom: "white",
                backgroundGradientTo: "white",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `#93e5fa`,
                labelColor: (opacity = 1) => `black`,
                style: {
                    borderRadius: 16
                },
                propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#289FFF"
                }
                }}
                bezier
                style={{
                marginVertical: 8,
                borderRadius: 16
                }}
            />
        </View>
    )
}
export default Chart
