import React, {useState} from "react";
import { View, Text, StyleSheet, Button, TextInput} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5'
import { TouchableHighlight, State } from "react-native-gesture-handler";

var berat

const styles = StyleSheet.create({
    container: {
    },
    logo:{
        alignSelf: 'center',
        color: '#167380',
        top: 80,
    },
    appName:{
        fontWeight: 'bold',
        fontSize: 35,
        alignSelf: 'center',
        top: 100,
        color: '#149FA8'
    }, 
    button:{
        flexDirection: 'column',
        alignItems: 'center',
        top: 120,
    },
    aboutBox:{
        height: 380,
        width: 365,
        backgroundColor: '#38CACA',
        opacity: 1,
        borderRadius: 10,
        alignSelf: 'center',
        top: 20,
        opacity: 0.39
    },
    about:{
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'normal'
    },
    email:{
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    bestRegards:{
        fontSize: 20,
        color: 'black',
        textAlign: 'right',
        fontWeight: 'normal',
    },
    aboutBack:{
        marginTop: 50,
        alignSelf: 'center'
    },
   bmiInputLabel:{
       fontSize: 20,
       color: 'black',
       alignSelf: 'center'
   },
   input: {
       top: 90,
   },
   bmiButtons:{
       top: 140,
       alignSelf: 'center',
   },
   details:{
       top: 20
   },
   hwDetails:{
    fontSize: 20,
    color: 'black',
    alignSelf: 'center'
   },
   hwdetailBox:{
    height: 40, 
    width: 180, 
    backgroundColor: '#38CACA', 
    borderRadius: 10, 
    opacity: 0.5,  
    alignSelf: 'center'
   },
   bc:{
       marginTop: 20
   },
   bcDetails:{
    fontSize: 20,
    color: 'black',
    alignSelf: 'center'
   },
   bcdetailBox:{
    height: 40, 
    width: 180, 
    backgroundColor: '#38CACA', 
    borderRadius: 10,   
    alignSelf: 'center'
   },
   dbutton:{ 
        alignSelf: 'center',
        marginTop: 30
   }


});

export const FirstPage = ({navigation})=>(
    <View style={styles.container}>
        <Icon style={styles.logo} name='weight' size={125}/>
        <Text style={styles.appName}>BMI Calculator</Text>
        <View style={styles.button}>
            <Button title='Start Calculating BMI' color='#38CACA' onPress={()=>navigation.navigate('BMI Calculation')}/>
            <Button title='About App' color='#38CACA' onPress={()=>navigation.navigate('About App')}/>
        </View>
    </View>
)

export const AboutApp = ({navigation})=>(
    
    <View style={styles.container}>
        <View style={styles.aboutBox}>
            <Text style={styles.about}>Hy, my name is Saskia. The one who create this app. This simple app aims to calculate your body mass index (BMI).</Text>
            <Text style={styles.about}>{" "}</Text> 
            <Text style={styles.about}>If you have any complains or constructive advices, kindly send an email to: </Text>
            <Text style={styles.email}>sdwiulfah@gmail.com</Text>
            <Text style={styles.about}>{" "}</Text>   
            <Text style={styles.about}>{" "}</Text> 
            <Text style={styles.bestRegards}>Best Regards, </Text>
            <Text style={styles.about}>{" "}</Text>
            <Text style={styles.about}>{" "}</Text>
            <Text style={styles.bestRegards}>Saskia Dwi Ulfah</Text>
        </View>
        <View style={styles.aboutBack}>
            <Button title='Back' color='#38CACA' onPress={()=>navigation.goBack()}/>
        </View>
    </View>
)

export const CalculateBMI =({navigation})=>{
    var [height, setHeight] = useState(0)
    var [weight, setWeight] = useState(0)

    return(
        <View style={styles.container}>
            <View style={styles.input}>
                <Text style={styles.bmiInputLabel}>Your Height(cm)</Text>
                <TextInput 
                style={{height: 35, width: 253, backgroundColor: '#38CACA', borderRadius: 15, opacity: 0.39, fontSize: 20, textAlign: 'center', alignSelf: 'center'}}
                onChangeText={height=>setHeight(height)}
                />
                <Text style={styles.bmiInputLabel}>Your Weight(kg)</Text>
                <TextInput 
                style={{height: 35, width: 253, backgroundColor: '#38CACA', borderRadius: 15, opacity: 0.39, fontSize: 20,  textAlign: 'center', alignSelf: 'center'}}
                onChangeText={weight=>setWeight(weight)}
                />
            </View>
            <View style={styles.bmiButtons}>
                <Button 
                title='Calculate BMI' 
                color='#38CACA'
                onPress={()=>navigation.navigate('BMI Details', {hg: height, wg: weight})}/>
                <Button title='Back' color='#38CACA' onPress={()=>navigation.goBack()}/>
            </View>  
        </View>
    )
}

export const BMIDetails =({route, navigation})=>{
    const{hg} = route.params
    const {wg} = route.params
    return(
        <View style={styles.container}>
            <View style={styles.details}>
                <Text style={styles.hwDetails}>Your Height</Text>
                <View style={styles.hwdetailBox}>
                    <Text style={{textAlign:'center', color:'black', fontSize: 20, fontWeight:'bold', paddingTop: 4}}>{hg}</Text>
                </View>
                <Text style={styles.hwDetails}>Your Weight</Text>
                <View style={styles.hwdetailBox}>
                    <Text style={{textAlign:'center', color:'black', fontSize: 20, fontWeight:'bold', paddingTop: 4}}>{wg}</Text>
                </View>
                <View style={styles.bc}>
                    <Text style={styles.bcDetails}>Your BMI</Text>
                    <View style={styles.bcdetailBox}>
                        <Text style={{textAlign:'center', color:'white', fontWeight:'bold', fontSize: 20, paddingTop: 4}}>{calculateBMI(hg,wg)}</Text>
                    </View>
                    <Text style={styles.bcDetails}>Your BMI Category</Text>
                    <View style={styles.bcdetailBox}>
                        <Text style={{textAlign:'center', color:'white', fontWeight:'bold', fontSize: 20, paddingTop: 4}}>{BMICategory(calculateBMI(hg,wg))}</Text>
                    </View>
                </View>  

                <View style={styles.dbutton}>
                    <Button title='Back' color='#38CACA' onPress={()=>navigation.goBack()}/>
                    <Button title='Home' color='#38CACA' onPress={()=>navigation.popToTop()}/>
                </View>        
            </View>            
        </View>
    )
} 
    
function calculateBMI(h, w){
    var H = h/100
    var W = w
    var BMI = W/(H*H)
    return BMI.toFixed(2)
}

function BMICategory(BMI){
    var category
    if(BMI<18.50) {category='Underweight'} else
    if(BMI>=18.50 && BMI<=24.99){category= 'Normal'} else
    if(BMI>=25.00 && BMI<=30.00){category='Overweight'}else
    if(BMI>30){category='Obesity'}
    return category
}