import { StyleSheet } from "react-native";
const mstyle = StyleSheet.create({
    menuitem: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        
    },
    icon:{
        color:"white"
    },
    arricon: {
        color:"#4D4D4E"
    },
    menutext:{
        color: "white",
        fontSize: 19,
        fontWeight: "bold",
        marginLeft: 15,

        textTransform:"uppercase"
    },
    submenutext: {
        color: "gray",  
         fontSize: 14.5,
        fontWeight: "bold",
        marginLeft: 17,

        textTransform:"uppercase"
    },
   menurow: {
       flexDirection: "row",
       alignItems: "center",
       marginBottom: 15,
       marginTop:15
    },
    menutextbox: {
       flexGrow:1
   }

})
export default mstyle;