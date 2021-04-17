import React, { Component } from 'react';
import {ScrollView, View, Text, ImageBackground, StyleSheet} from 'react-native';
import {Card} from 'react-native-elements';


class Schedule extends Component {
    render(){
        return(
            <ImageBackground style={styles.imageBackground}
            source={require('./0572.jpg')}>

            
            <ScrollView>
                <Card>
                    <Card.Title>Craft Beer Night</Card.Title>
                    <Card.Image>

                        
                    </Card.Image>
                    <Text>9pm-12am Every Monday night. $3 for a select craft beer. $9 cover includes all you can bowl</Text>

                    
                </Card>
                
                <Card>
                    <Card.Title>College Night</Card.Title>
                    <Card.Image>

                        
                    </Card.Image>
                    <Text>9pm-12am Every Tuesday night.  .50 cent games and $2.00 PBR drafts.</Text>

                    
                </Card>

                <Card>
                    <Card.Title>Rock n' Bowl</Card.Title>
                    <Card.Image>

                        
                    </Card.Image>
                    <Text>9pm-12am Every Wednesday night. Live bands on the lanes.  $9 all you can bowl.</Text>

                    
                </Card>
                <Card>
                    <Card.Title>80s/90s Night</Card.Title>
                    <Card.Image>

                        
                    </Card.Image>
                    <Text>9pm-12am Every Thursday night. WRCT's DJ Mockster plays only music from the 80s and 90s.  $9 all you can bowl.</Text>

                    
                </Card>
            </ScrollView>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    imageBackground: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        flex: 1,
        alignItems: 'center',
    justifyContent: 'center'
    },
}
)

export default Schedule