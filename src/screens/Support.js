import { connect } from 'react-redux';
import React,{Component} from 'react';
import {Platform,Linking,
    Text,Image,TouchableOpacity,
    View,
  } from 'react-native';
import { Icon } from "react-native-elements";
import { Toolbar } from "../components";
import { navigateBack } from "../helpers";
import screenstyles from "../styles/screenStyles";

class Support extends Component{
    constructor(props){
        super(props);
        this.state = {
          data:[]
        }
    }

      sendAnEmail=()=>{
        const url='mailto:?to=enquiries@eurogarages.com&subject=Feedback&body='
        Linking.canOpenURL(url).then(supported => {
            if (!supported) {
              console.log('Can\'t handle url: ' + url);
            } else {

              return Linking.openURL(url);
            }
          }).catch(err => console.error('An error occurred', err));
      }

      makeACall=()=>{
        const url = 'tel:01254582111';
        Linking.canOpenURL(url)
            .then((supported) => {
                if (!supported) {
                    console.error('Can\'t handle url: ' + url);
                } else {
                    return Linking.openURL(url)
                        .then((data) => console.error("then", data))
                        .catch((err) => { throw err; });
                }
            })
            .catch((err) => console.error('An error occurred', err));
      }

      getTypedIcon = () => {
          return Platform.OS === "ios" ? "chevron-left" : "arrow-left";
      };

      getSizeIcon = () => {
          return Platform.OS === "ios" ? 38 : 24;
      };

      getColorIcon = () => {
          return Platform.OS === "ios" ? "rgb(15, 113, 184)" : "rgb(0, 0, 0)";
      };

    render(){
        return (
             <View style={screenstyles.supportContainer}>
                <Toolbar
                    style={[screenstyles.noBorderToolbar,{backgroundColor: "#f5f5f5"}]}
                    onClickLeftIcon={navigateBack}
                    iconName="back-arrow"
                    title="Support"
                    rightIconName="plus"
                    onRightIconPress={this.logoutFunction} />
                <View style={screenstyles.supportView}>
                    <Text style={screenstyles.SupportTitleText}>EMAIL US ON</Text>
                </View>
                <View style={screenstyles.emailSupportDetailView}>
                    <View style={screenstyles.supportleftIconView}>
                       <Image source={require('./../assets/images/settings/Support.png')} style={screenstyles.settingIcons}></Image>
                    </View>
                    <View style={screenstyles.contactView}>
                        <TouchableOpacity onPress={this.sendAnEmail}>
                             <Text style={screenstyles.preferredStationDetails}>enquiries@eurogarages.com</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={screenstyles.supportView}>
                    <Text style={screenstyles.SupportTitleText}>CALL US ON</Text>
                </View>
                <View style={screenstyles.emailSupportDetailView}>
                    <View style={screenstyles.supportleftIconView}>
                       <Image source={require('./../assets/images/settings/Support.png')} style={screenstyles.settingIcons}></Image>
                    </View>
                    <View style={screenstyles.contactView}>
                       <TouchableOpacity onPress={this.makeACall}>
                            <Text style={screenstyles.preferredStationDetails}>01254 582111</Text>
                       </TouchableOpacity>
                    </View>
                </View>
             </View>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Support);
