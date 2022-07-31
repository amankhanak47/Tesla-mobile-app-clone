import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "gray",
    // justifyContent: 'center',
  },
  header: {
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom:10
  },
  headertittle: {
    color: "white",
    fontSize: 16,
    fontWeight: "Bold",
    justifyContent: "center",
  },
  icon: {
    color: "white",
  },
  bgImage: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    position: "absolute",
    },
    batterysection: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems:"center"
  },
    battery: {
        height: 26,
        width: 70,
        marginRight: 12,
        marginBottom:2
    },
    bat_text: {
        color: "white",
        fontSize: 35,
        fontWeight:"bold"
    },
    status: {
        alignItems:"center"
    },
    statustext: {
        fontSize: 20,
        color: "white",
        fontWeight:"bold"
    },
    controls: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop:175
    },
    controlbtn: {
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 500,
        padding:18,
        marginLeft: 20,
    }

    
});

export default styles;
