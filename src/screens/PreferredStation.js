import { connect } from 'react-redux';
import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,DrawerLayoutAndroid,
    FlatList,Platform,TouchableOpacity
  } from 'react-native';
import { Icon } from "react-native-elements";
import { Toolbar } from "../components";
import Sidebar from "../components/Sidebar/Sidebar";
import { navigateBack } from "../helpers";
import { navigateTo } from "../helpers";
import styles from "../styles/screenStyles";

class PreferredStation extends Component{
    constructor(props){
        super(props);
        this.state={
          data:[
              {id:'1',stationName:'Esso', address:'Basement, Building No. 29, Seshadri Road, ', storeOpensAt:'07:00 AM',storeClosesAt:'11:00 PM', distanceOfTheStore:'1 Km',storeStatus:'Open', rightIconName:require('./../assets/images/settings/ArrowRight.png'), Scence:'preferredStation'},
              {id:'2',stationName:'Kfc',address:'Hospital, KBR Mall 88 NH 44 Opposite to VIMS,', storeOpensAt:'07:00 AM',storeClosesAt:'11:00 PM', distanceOfTheStore:'2 Km',storeStatus:'Closed', rightIconName:require('./../assets/images/settings/ArrowRight.png'), Scence:'preferredStation'},
              {id:'3',stationName:'Subway',address:'Basement, Building No. 29, Seshadri Road, ',  storeOpensAt:'07:00 AM',storeClosesAt:'11:00 PM', distanceOfTheStore:'18 Km',storeStatus:'Open',rightIconName:require('./../assets/images/settings/ArrowRight.png'), Scence:'preferredStation'},
          ]
        }
      }

    render(){
        const navigationView = (<Sidebar/>);
        return (

             <View style={styles.preferredStationContainer}>
                  <Toolbar
                      style={styles.noBorderToolbar}
                      onClickLeftIcon={navigateBack}
                      iconName="back-arrow"
                      title={this.props.title} />
                  <View style={styles.PreferredStationTitleView}>
                      <Text style={styles.preferredStationText}>PREFERRED STATIONS</Text>
                  </View>
                  <View style={styles.stationList}>
                        <FlatList
                            data={ this.state.data }
                            renderItem={({item}) =>
                             <TouchableOpacity onPress={()=>alert('link to station finder')}>
                            {/* navigateTo(item.Scence) */}
                                <View style={styles.ListContainer}>
                                    <View style={styles.preferredStationView}>
                                        <Text style={styles.stationNameText}>{item.stationName}</Text>
                                        <Text style={styles.addressText}>{item.address}</Text>
                                        <View style={styles.statusAndDistanceView}>
                                            <View style={styles.storeStatusView}>
                                               <Text style={styles.stausText}>{item.storeStatus}</Text>
                                            </View>
                                            <View style={styles.storeDistance}>
                                              <Text style={styles.distanceText}>{item.distanceOfTheStore}</Text>
                                            </View>
                                        </View>

                                        <Text style={styles.hourText}>Todays hours: {item.storeOpensAt} - {item.storeClosesAt}</Text>
                                    </View>
                                    <View style={[styles.rightIconView,{ alignSelf:'center',marginTop:10}]}>
                                         <Image source={item.rightIconName} style={styles.settingIcons}  onPress={navigateBack}></Image>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            }
                            keyExtractor={(item) => item.id}
                        />
                  </View>

             </View>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PreferredStation);
