import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView
} from "react-native";
import styles from "./Styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCog, faToolbox, faFan,faKey,faLock,faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import Menu from "../Menu/Menu";
const CarItem = () => {

  const [lock, setLock] = useState(true)
  const handlelock = () => {
    if (lock) {
      setLock(false)
    }
    else {
      setLock(true)
    }
  }

  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/background.png")}
        style={styles.bgImage}
      />
      {/* <Header/> */}
      <View style={styles.header}>
        <TouchableOpacity>
          <FontAwesomeIcon style={styles.icon} size={24} icon={faCog} />
        </TouchableOpacity>
        <Text style={styles.headertittle}>Model X</Text>
        <TouchableOpacity>
          <FontAwesomeIcon style={styles.icon} size={24} icon={faToolbox} />
        </TouchableOpacity>
      </View>
      <View style={styles.batterysection}>
        <ImageBackground
          source={require("../../assets/battery.png")}
          style={styles.battery}
        />
        <Text style={styles.bat_text}>150 mi</Text>
      </View>
      <View style={styles.status}>
        <Text style={styles.statustext}>Parked</Text>
      </View>

      {/* control icons */}
      <ScrollView>
      <View style={styles.controls}>
          <TouchableOpacity>
        <View style={styles.controlbtn}>
            <FontAwesomeIcon style={styles.icon} size={24} icon={faFan} />
        </View>
          </TouchableOpacity>
          <TouchableOpacity>
        <View style={styles.controlbtn}>
            <FontAwesomeIcon style={styles.icon} size={24} icon={faKey} />
        </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlelock}>
        <View style={styles.controlbtn}>
            <FontAwesomeIcon style={styles.icon} size={24} icon={lock?faLock:faUnlockAlt} />
        </View>
          </TouchableOpacity>
      </View>
        <Menu />
        </ScrollView>
    </View>
  );
};

export default CarItem;
