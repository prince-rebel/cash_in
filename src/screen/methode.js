import React , { useState }from 'react'
import { View,SafeAreaView,Text,ScrollView ,Image,TouchableOpacity} from 'react-native'
import { Appbar,RadioButton,Button  } from 'react-native-paper';
import Styles from '../style/methodeStyle'

 const Methode=()=> {
       const [checked, setChecked] = useState('first');
       const [clik, setClik] = useState(checked?'envoyer':'');
       
       
    return (
               <>
                    <Appbar.Header style={Styles.Appbar}>
                        <Appbar.BackAction icon="magnify"  onPress={() =>null}/>
                        <Appbar.Content title='Choisissez la methode  de transaction'titleStyle={{fontSize:15}}/>
                    </Appbar.Header>
                   
                    <View style={Styles.container}>
                        <View style={Styles.Choix}>
                            
                            <View style={Styles.Radio}>
                            <RadioButton
                                value="first"
                                status={ checked === 'first' ? 'checked' : 'unchecked' }
                                onPress={() => setChecked('first')}/>
                            </View>

                            <View style={Styles.Content}>
                              <Image source={require('../assets/individu.png')} style={{width:50,height:50}}/>
                                <Text style={Styles.ContentText}> Individu/{"\n"}Agence mobile</Text>
                            </View>
                        </View>


                        <View style={Styles.Choix}>
                            
                            <View style={Styles.Radio}>
                            <RadioButton
                                value="second"
                                status={ checked === 'second' ? 'checked' : 'unchecked' }
                                onPress={() => setChecked('second')}/>
                            </View>

                            <View style={Styles.Content}>
                              <Image source={require('../assets/banque.png')} style={{width:50,height:50}}/>
                                <Text style={Styles.ContentText}> Agence fixe /{"\n"} Banques/ Autres</Text>
                            </View>
                        </View>


                        <View style={Styles.Choix}>
                            
                            <View style={Styles.Radio}>
                            <RadioButton
                                value="last"
                                status={ checked === 'last' ? 'checked' : 'unchecked' }
                                onPress={() => setChecked('last')}/>
                            </View>

                            <View style={Styles.Content}>
                              <Image source={require('../assets/porte.png')} style={{width:50,height:50}}/>
                                <Text style={Styles.ContentText}> Door to door {"\n"} (porte à porte) </Text>
                                
                            </View>
                        </View>

                        

                        <View style={Styles.button}>                           
                            <View style={Styles.btnView}>
                                <TouchableOpacity style={clik==='annuler'? Styles.btnSelected:Styles.btnAction}onPress={()=>setClik('annuler')} >
                                    <Text style={clik==='annuler'? Styles.btnTextSelected:Styles.btnText}>Annuler</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={clik==='envoyer'? Styles.btnSelected:Styles.btnAction} onPress={()=>setClik('envoyer')}>
                                    <Text style={clik==='envoyer'? Styles.btnTextSelected:Styles.btnText}>valider</Text>
                                </TouchableOpacity>   
                                                                    
                            </View>
                        </View>
                    </View>
        </>
              
     
    )
}
export default Methode;
