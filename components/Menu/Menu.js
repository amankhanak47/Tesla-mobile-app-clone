import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import mstyle from "./menustyle.js";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMusic, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import items from "./items.js";

const Menu = () => {
  return (
    <View style={mstyle.menuitem}>
      {items.map((i) => (
        <TouchableOpacity key={i.id}>
          <View style={mstyle.menurow}>
            <FontAwesomeIcon style={mstyle.icon} size={24} icon={i.icon} />
            <View style={mstyle.menutextbox}>
              <Text style={mstyle.menutext}>{i.title}</Text>
              {i.subTitle && (
                <Text style={mstyle.submenutext}>{i.subTitle}</Text>
              )}
            </View>
            <FontAwesomeIcon
              style={mstyle.arricon}
              size={24}
              icon={faChevronRight}
            />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Menu;
