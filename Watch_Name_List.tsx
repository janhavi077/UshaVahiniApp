import React from "react";
import { Box, Button, Image, NativeBaseProvider, Text, View } from "native-base";
import { Pressable, StyleSheet, TouchableOpacity} from "react-native";

import { ComponentConstants } from "../constants/componentConstants";


 export default class Watch_Name_List extends React.Component<any, any>{
    render(){
        const{brand, price,  productImage,id}=this.props.watchList
        return(
                <NativeBaseProvider >
                    {/* <TouchableOpacity  onPress={() => this.props.navigation.navigate(ComponentConstants.WATCH_DETAILS,
                 {watchList:this.props.prop.data})}> */}
                 <TouchableOpacity onPress={()=> this.props.navigation.navigate(ComponentConstants.WATCH_DETAILS)}>
                  <Box style={styles.box}>
                    <Image style={styles.image} source={{uri:productImage}} />
                    <Text style={{textAlign:'center',fontWeight:'bold'}}>Brand:{brand}</Text>
                    <Text>Price:{price}</Text>
                  </Box>
                </TouchableOpacity>
                </NativeBaseProvider>
             
        );
    }

}
const styles=StyleSheet.create({
         box:{
             top:12,
             width:'95%',
             alignItems:'center',
             marginLeft:6,
             marginTop:20,
             paddingTop:0.12,
             paddingBottom:9,
             backgroundColor:'white',
             borderRadius:28,
             shadowOpacity:1,
             shadowColor:'gray',
             shadowOffset:{
                width:3,
                height:6,
            },
             
         },
        image:{
            width:175, 
            height:165 , 
            top:-8,
            borderRadius:28,

            shadowOpacity:1,
             shadowColor:'gray',
             shadowOffset:{
                width:3,
                height:6,
            },
            
         },
     })




    /*******************Animated Screen with horizontal motion *****************/

    /***************************** FOURTH SCREEN ********************************/


    /*******************************USING FUNCTION ******************************/


// import { Box, FlatList,  HStack,  NativeBaseProvider, Row, ScrollView, Text,  } from "native-base";
// import React from "react";
// import { Animated, Dimensions, StyleSheet,  Image,  } from "react-native";

// const {  View  } = Animated;
// const {width, height} = Dimensions.get('screen');

// const ITEM_WIDTH= width;
// const ITEM_HEIGHT= height * .35;

// const Images=[
//     'https://www.topgear.com/sites/default/files/2022/01/schuey1.jpg?w=892&h=502',
//     'https://www.topgear.com/sites/default/files/2022/01/schuey4.jpg?w=892&h=502',
//     'https://www.topgear.com/sites/default/files/2022/01/schuey3.jpg?w=892&h=502',
//     'https://www.topgear.com/sites/default/files/2022/01/schuey2.jpg?w=892&h=502',
//     'https://www.topgear.com/sites/default/files/2022/01/schuey8.jpg?w=892&h=502',
//     'https://www.topgear.com/sites/default/files/2022/01/schuey7.jpg?w=892&h=502',
//     'https://www.topgear.com/sites/default/files/2022/01/schuey6.jpg?w=892&h=502',




// ];

// const product ={
//     price:' R 16900',
//     description: [
//         'Vehicle Details ',
//     ],

// }


// const DOT_SIZE =10;

// const DOT_SPACING =10;

// // const DOT_INDICATOR_SIZE =DOT_SIZE + DOT_SPACING;

// const DOT_INDICATOR_SIZE =DOT_SIZE ;


// export default  () =>{
//     const scrollX= React.useRef(new Animated.Value(0)).current;
//     return <NativeBaseProvider>
//         <ScrollView>
//         <View>
//              <View style={{height: ITEM_WIDTH, overflow:'hidden'}}>
//                     <Animated.FlatList
//                            data={Images}
//                            keyExtractor={(,index) => index.toString()}
//                            snapToInterval={ITEM_WIDTH}
//                            decelerationRate="fast"
//                            horizontal
//                            showsHorizontalScrollIndicator={false}
//                            bounces={false}

//                            onScroll={Animated.event(
//                                [{nativeEvent: {contentOffset:{x: scrollX}}}],
//                                {useNativeDriver: true}
//                            )}
//                            renderItem={({item}) => {
//                              return <View>
//                                        <Image source={{uri: item}} style={styles.image}/>
//                                     </View>
//                              }}

//                         />

//                          <View style={styles.pagination}>
//                              {Images.map((,index)=>{
//                                 return<View
//                                 key={index}
//                                 style={[styles.dot]}
//                                 />
//                                })}




//                                 <Animated.View
//                                 style={[styles.dotIndicator,{
//                                     transform: [{
//                                         translateX: Animated.divide(scrollX,ITEM_WIDTH).interpolate({
//                                             inputRange:[0,1],
//                                             outputRange:[0,DOT_INDICATOR_SIZE]
//                                         })
//                                     }]
//                                 }]}
//                                 />



//                         </View>

//              </View>


//              <Text style={styles.price}>{product.price}</Text>

//                           {product.description.map((text,index) =>{
//                             return<Text style={styles.vehical_Details}
//                             key={index}>{text}</Text>
//                        })}

//                         {/* <Text style={styles.price}>{product.price}</Text>
//  */}

//                         <View >

//                               <Box
//                                 backgroundColor="#f5f5f4"
//                                 alignSelf="center"
//                                 width="90%"
//                                 height="35"
//                                 >
//                                   <HStack justifyContent="space-between">
//                                    <Text fontSize="18" color="">Make </Text>
//                                    <Text fontSize="18">Opel </Text>
//                                   </HStack>
//                               </Box>

//                               <Box
//                                 backgroundColor="white"
//                                 alignSelf="center"
//                                 width="90%"
//                                 height="35"
//                                 >
//                                   <HStack justifyContent="space-between" >
//                                    <Text fontSize="18">Model </Text>
//                                    <Text fontSize="18">Kadett</Text>
//                                   </HStack>
//                               </Box>


//                               <Box
//                                 backgroundColor="#f5f5f4"
//                                 alignSelf="center"
//                                 width="90%"
//                                 height="35">
//                                   <HStack justifyContent="space-between" >
//                                    <Text fontSize="18">Variant</Text>
//                                    <Text fontSize="18">200i S</Text>
//                                   </HStack>
//                               </Box>


//                               <Box
//                                 backgroundColor="white"
//                                 alignSelf="center"
//                                 width="90%"
//                                 height="35">
//                                   <HStack  justifyContent="space-between">
//                                    <Text fontSize="18">Year</Text>
//                                    <Text fontSize="18">1996</Text>
//                                   </HStack>
//                               </Box>

//                               <Box
//                                 backgroundColor="#f5f5f4"
//                                 alignSelf="center"
//                                 width="90%"
//                                 height="35">
//                                   <HStack  justifyContent="space-between" >
//                                    <Text fontSize="18">Mileage</Text>
//                                    <Text fontSize="18">323 443Km </Text>
//                                   </HStack>
//                               </Box>


//                               <Box
//                                 backgroundColor="white"
//                                 alignSelf="center"
//                                 width="90%"
//                                 height="35">
//                                   <HStack  justifyContent="space-between" >
//                                    <Text fontSize="18">Body Type</Text>
//                                    <Text fontSize="18">Hatchback</Text>
//                                   </HStack>
//                               </Box>

//                               <Box
//                                 backgroundColor="#f5f5f4"
//                                 alignSelf="center"
//                                 width="90%"
//                                 height="35">
//                                   <HStack  justifyContent="space-between" >
//                                    <Text fontSize="18">Colour</Text>
//                                    <Text fontSize="18">White</Text>
//                                   </HStack>
//                               </Box>

//                               <Box
//                                 backgroundColor="white"
//                                 alignSelf="center"
//                                 width="90%"
//                                 height="35">
//                                   <HStack  justifyContent="space-between">
//                                    <Text fontSize="18">Fule Type</Text>
//                                    <Text fontSize="18">Petrol</Text>
//                                   </HStack>
//                               </Box>

//                               <Box
//                                 backgroundColor="#f5f5f4"
//                                 alignSelf="center"
//                                 width="90%"
//                                 height="35">
//                                   <HStack  justifyContent="space-between" >
//                                    <Text fontSize="18">Transmission</Text>
//                                    <Text fontSize="18">Manual</Text>
//                                   </HStack>
//                               </Box>


//                         </View>
//          </View>
//          </ScrollView>
//          </NativeBaseProvider>


// }

// const styles=StyleSheet.create({
//     image:{
//         width:ITEM_WIDTH,
//         height:ITEM_HEIGHT,
//         resizeMode:'cover',
//         top:40,
//     },
//     pagination:{
//         bottom:30,
//         flexDirection:'row',

//        width:ITEM_WIDTH /2,
//        left: 120,
//        position:'absolute',
//        alignSelf:'center',


//     },
//     dot:{
//         width: DOT_SIZE,
//         height: DOT_SIZE,
//         borderRadius: DOT_SIZE,
//         backgroundColor: '#a1a1aa',

//         marginRight:DOT_SPACING,

//     },
//     dotIndicator:{
//         width: DOT_INDICATOR_SIZE,
//         height: DOT_INDICATOR_SIZE,
//         borderRadius: DOT_INDICATOR_SIZE,
//         borderWidth:1,
//         borderColor:'#dc2626',
//         backgroundColor:'#fee2e2',
//         position:'absolute',
//         marginRight:DOT_SPACING,

//         top:-DOT_SIZE/2,
//         // left:-DOT_SIZE/2
//     },
//     price:{
//         fontSize:22,
//         marginLeft:12,
//         color:'#9d174d',
//     },
//     vehical_Details:{
//         alignSelf:'center',
//         fontSize:18,
//         color:'black',
//         },

//     // price:{
//     //     fontSize:16,
//     //     alignSelf:'center',
//     // },

// })
    
    
   

/******************************** FIFTH SCREEN BUSINESS NAME *********************/
      
    

// import { Box, Divider, HStack, Image, NativeBaseProvider, ScrollView, FlatList, Text, VStack, Spacer, Badge } from "native-base";
// import React, { PureComponent } from "react";
// import { Animated, Dimensions, StyleSheet } from "react-native";
// import { Business_Name_List } from "./src/components/Business_Name_List";





// const { View } = Animated;
// const { width, height } = Dimensions.get('screen');

// const ITEM_WIDTH = width;
// const ITEM_HEIGHT = height * .35;


// export default class Business_Name extends PureComponent<any, any>{
//   constructor(props: Readonly<any>) {
//     super(props);
//     this.state =
//     {
//       Review_Description:" Banzai has been a motoring journalist for almost two decades.He started off as a freelancer, covering and photographing club level events.This quickly evolved into supplying feature stories, both for international and local titles. This quickly evolved into supplying feature stories, both for international and local titles.",
//       business_descriprtion: "This is the information pulled through from the Business Bio section. This is the information pulled throught from the Business Bio section. This is the information pulled through from the Business Bio section. This is the information pulled throught from the Business Bio section. This is the information pulled through from the Business Bio section.",
//       item:
//         [
//           {
//             imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_jpFQ934XAec6pbC3S1uBv4sORosYK-LEbzO6tGX3-n5VQjJunAaJHpJTIzOmMGGeSnI&usqp=CAU",
//             Name: "Janhavi",
            
//           },

//           {
//             imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRha8EnnNOFdDxtaoIcz5c14UcACjI_d6nnlUElvUzaYZV8ZVb2_1LBkIrl_sZBkeckN00&usqp=CAU",
//             Name: "Ankita",
           
//           },


//           {
//             imageUrl: "https://www.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2017/03/28/Local-Politics/Images/Supreme_Court_Gorsuch_Moments_22084-70c71-0668.jpg?t=20170517",
//            Name: "Bhakti",
    
//           },
//           {
//             imageUrl: "https://www.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2017/03/28/Local-Politics/Images/Supreme_Court_Gorsuch_Moments_22084-70c71-0668.jpg?t=20170517",
//             Name: "abc",
            
//           },
//           {
//             imageUrl: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//             Name: "xyz",
            
//           },
//         ],
//       cars:
//         [
//           {
//             imageUrl: "https://media.istockphoto.com/photos/red-generic-sedan-car-isolated-on-white-background-3d-illustration-picture-id1189903200?k=20&m=1189903200&s=612x612&w=0&h=L2bus_XVwK5_yXI08X6RaprdFKF1U9YjpN_pVYPgS0o=",
//             Name: "Cars",


//           },
//           {
//             imageUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/carbon-fiber-shelby-mustang-1600685276.jpg?crop=0.9988636363636364xw:1xh;center,top&resize=480:*",
//             Name: "Cars",


//           },

//           {
//             imageUrl: "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//             Name: "Cars",


//           },

//           {
//             imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6bBBnT6tOP_zQL1psC-3u7KoDkuI5TnA0Pw&usqp=CAU",
//             Name: "Cars",


//           },
//           {
//             imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWE6uC5MFBZ9WTc-vD_h80nUZsCztV56ImVQ&usqp=CAU",
//             Name: "Cars",


//           },

//         ],
//       cars_sales:[
//         {
//           imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6bBBnT6tOP_zQL1psC-3u7KoDkuI5TnA0Pw&usqp=CAU",
//           Name: "Cars",


//         },
//         {
//           imageUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/carbon-fiber-shelby-mustang-1600685276.jpg?crop=0.9988636363636364xw:1xh;center,top&resize=480:*",
//           Name: "Cars",


//         },

//         {
//           imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWE6uC5MFBZ9WTc-vD_h80nUZsCztV56ImVQ&usqp=CAU",
//           Name: "Cars",


//         },

//         {
//           imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWE6uC5MFBZ9WTc-vD_h80nUZsCztV56ImVQ&usqp=CAU",
//           Name: "Cars",


//         },
//         {
//           imageUrl: "https://media.istockphoto.com/photos/red-generic-sedan-car-isolated-on-white-background-3d-illustration-picture-id1189903200?k=20&m=1189903200&s=612x612&w=0&h=L2bus_XVwK5_yXI08X6RaprdFKF1U9YjpN_pVYPgS0o=",
//           Name: "Cars",


//         },
//       ],
      
//     }
//   }







//   render(): React.ReactNode {
//     return (
//       <NativeBaseProvider>
//         <View>
//           <ScrollView height="100%" >
//             <VStack>
//               <View>
//                 <Image
//                   source={{ uri: 'https://www.teahub.io/photos/full/193-1935317_red-car-dark-background.jpg' }}
//                   style={styles.Image1}
//                 />
//               </View>
//               <Text color="white" bold fontSize="lg" top="4" marginLeft="4">
//                 Business Name
//               </Text>

//               <Text color="black" fontSize="18" top="6" marginLeft="4" >
//                 Business Address
//               </Text>

//               <Text color="black" fontSize="16" top="9" marginLeft="4">
//                 Business Bio
//               </Text>
//               <Text fontSize="10" top="10" marginLeft="4" justifySelf="left">

//                 {this.state.business_descriprtion}
//               </Text>
              
//               <View >
//                 <Divider my="2" top="16" width="90%" alignSelf="center" color="black" position="absolute" />
//                 <Box bgColor="white" position="absolute" alignSelf="center" width="145" height="25" bottom="309">
//                   <Text alignSelf="center" fontSize="18" bold color="#44403c" > Meet the Team</Text>
//                 </Box>

//                 <HStack marginLeft="4" justifySelf="spacebetween">
//                   <View style={{ height: ITEM_WIDTH ,top:84,borderRadius:50, overflow: 'hidden' }}>
//                     <FlatList

//                       keyExtractor={(item, index) => index.toString()}
//                       data={this.state.item}
//                       snapToInterval={ITEM_WIDTH}
//                       showsHorizontalScrollIndicator={false}
//                       horizontal

//                       renderItem={({ item, index }) => <Business_Name_List prop={{ data: item }} {...this.props} />}
//                     />
//                   </View>
//                 </HStack>
//               </View>

//               <View>
//                 <Divider my="2" bottom="549" width="90%" alignSelf="center" color="black" position="absolute"/>
//                 <Box bgColor="white" position="absolute" alignSelf="center" width="95" height="25" bottom="549">
//                   <Text alignSelf="center" fontSize="18" bold position="absolute" color="#44403c" > Our cars </Text>
//                 </Box>
//                 <HStack marginLeft="4" justifySelf="spacebetween">
//                   <View   style={{ height: ITEM_WIDTH,bottom:152,borderRadius:50,  overflow: 'hidden' }}>
//                     <FlatList

//                       keyExtractor={(item, index) => index.toString()}
//                       data={this.state.cars}
//                       snapToInterval={ITEM_WIDTH}
//                       showsHorizontalScrollIndicator={false}
//                       horizontal
                      

//                       renderItem={({ item, index }) => <Business_Name_List prop={{ data: item }} {...this.props} />}
//                     />
//                   </View>
//                 </HStack>
//               </View>

//               <View >
//                 <Divider my="2" bottom="418" width="90%" alignSelf="center" color="black" />
//                 <Box bgColor="white" position="absolute" alignSelf="center"bottom="807" width="172" height="25">
//                   <Text alignSelf="center" fontSize="18" bold color="#44403c"> Used Cars for Sale</Text>
//                 </Box>
//                 <HStack justifyContent="center" space={2}>
//                 <VStack>
//                   <View   style={{ height: ITEM_WIDTH,bottom:408,borderRadius:50,  overflow: 'hidden' }}>
                    
//                     <FlatList

//                       keyExtractor={(item, index) => index.toString()}
//                       data={this.state.cars_sales}
//                       snapToInterval={ITEM_WIDTH}
//                       showsHorizontalScrollIndicator={false}
//                       horizontal

//                       renderItem={({ item, index }) => <Business_Name_List prop={{ data: item }} {...this.props} />}
//                     />
                    
//                   </View>
//                   </VStack>
//                 </HStack>
//               </View>

             




//              <View>
//                <Box>
//                  <View >
//                    <HStack  space={2} top="-630">
//                    <FlatList 
//                    keyExtractor={(item, index) => index.toString()}
//                    data={[...Array(2).keys()]}
//                    snapToInterval={ITEM_WIDTH}
//                       showsHorizontalScrollIndicator={false}
//                    horizontal
//                    renderItem={({item})=>{
//                         return(
//                           <View >
//                             <VStack>
//                               <HStack>
//                                <Badge backgroundColor="red.300"  color="white" marginLeft="5" paddingBottom="2" width="60" height="25" borderRadius="12">Review</Badge>
//                                <Text fontSize="12" paddingBottom="1" >[Model Name]</Text>
//                               </HStack>
//                               <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWE6uC5MFBZ9WTc-vD_h80nUZsCztV56ImVQ&usqp=CAU'}}
//                               width="165"  marginLeft="5"  marginTop="2 " height="115"></Image>
//                               <Text fontSize="10" width="165" marginLeft="5" height="165">{this.state.Review_Description}</Text>
//                             </VStack>
//                           </View>  
//                          )
//                      }}
//                      />
//                      </HStack>
//                   </View>
//                 </Box>
               
//             </View>


             


   
//               <Box
//                 height="265"
//                 width="90%"
//                 alignSelf="center"
//                 borderRadius="10"
//                 top="-600"
//                 bgColor="#fde047">
//                 <HStack space={1}>
//                   <Text fontSize="8xl" color="white" textAlign="left" top="-18" height="32" >❝</Text>
//                   <Text color="white" bold fontSize="4xl" top="6"> REVIEW CARD</Text>
//                 </HStack>
//                 <HStack space={1}>
//                   <Box width="75%">
//                     <Text margin="3" top="-40" fontSize="10">
//                       Banzai has been a motoring journalist for almost two decades.
//                       He started off as a freelancer, covering and photographing club level events.
//                       This quickly evolved into supplying feature stories, both for international and local titles.
//                       This quickly evolved into supplying feature stories, both for international and local titles.
//                     </Text>
//                   </Box>

//                   <Image
//                     style={styles.ImageRC}
//                     source={{ uri: 'https://raajratna.com/wp-content/uploads/2019/01/person2.jpg' }}

//                   />
//                 </HStack>
//               </Box>
             
//             </VStack>
//           </ScrollView>
//         </View>
//       </NativeBaseProvider>
//     );
//   }
// }



// const styles = StyleSheet.create({
//   Image1: {
//     resizeMode: 'cover',
//     width: ITEM_WIDTH,
//     height: ITEM_HEIGHT,
//     top: 40,
//     flex: 1,


//   },
//   ImageRC: {
//     height: 75,
//     width: 75,
//     borderRadius: 17,

//     top: 10,
//   },



// })
    
    
    
    
    /*************************** Profile Screen *************************/
     import { Avatar, Box, Button, HStack, Image, NativeBaseProvider, Text, VStack } from "native-base";
import sizes from "native-base/lib/typescript/theme/base/sizes";
import React, { Component } from "react";
import { StyleSheet } from "react-native";
import  Icon  from "react-native-vector-icons/AntDesign";


export default class ProfileScreen extends Component<any,any>{
    render(){
        return(
            <NativeBaseProvider>
                 <Image  style={styles.Image} source={{uri:'https://i.pinimg.com/originals/c9/4e/c8/c94ec8295d677ad20c26ef2d56c1f111.jpg'}}/>
                
                    <Box height="50%" width="90%"  top="-295" bgColor="white" alignSelf="center">
                    
                       <Avatar borderColor="white" borderWidth="8" top="-48" marginLeft="3" size="2xl" source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvUe2wip36hXI-6JXAFHpn1XbQ1Pgu5IJNAg&usqp=CAU"}}/>
                       <Text top="-45" marginLeft="2" fontSize="3xl"> Neel Litoriya</Text>
                       <HStack space={32} top="-26" marginLeft="2" >
                           <VStack marginLeft="2" >
                               <HStack space={1}>
                                   <Icon color="warmGray.300" name="camera" size={15}/>
                                   <Text>Photographer</Text>
                                </HStack>

                                <HStack space={1}>
                                  <Icon color="warmGray.300" name="location-pin" size={15}/> 
                                  <Text>Indore,India</Text>
                               </HStack>
                           </VStack>
                               <Button 
                                  width="24%" 
                                  bgColor="black" 
                                  leftIcon={
                                  <Icon color="white" name="plus" size={20}/>}>
                                   Add</Button>
                           </HStack>
                           <HStack space={16} marginLeft="4">
                                <VStack>
                                    <HStack space={1}>
                                        <Icon name="eye" size={15}/>
                                        <Text color="warmGray.600">View</Text>
                                    </HStack>
                                    <Text marginLeft="3" fontSize="2xl">624</Text>
                                </VStack>
                                <VStack>
                                    <HStack space={1}>
                                        <Icon name="users" size={15}/>
                                        <Text color="warmGray.600">Followers</Text>
                                    </HStack>
                                   <Text marginLeft="7" fontSize="2xl">142</Text>
                               </VStack>
                               <VStack>
                                   <HStack space={1}>
                                       <Icon name="heart-outlined" size={15}/>
                                   <Text color="warmGray.600">Likes</Text>
                                   </HStack>
                                   <Text marginLeft="3" fontSize="2xl">104</Text>
                               </VStack>
                           </HStack>
                    </Box>
              
            </NativeBaseProvider>
        );
    }
}
const styles=StyleSheet.create({
    Image:{
      width:'100%',
      height:'100%',
      resizeMode:'cover',
     
    },
    
})





                            //fixed home screen 
     
     import { FlatList } from "native-base";
     import React, { PureComponent } from "react";
     import Watch_Name_List from "./Watch_Name_List";
     
      
     const watchList = [
         {
         productImage:'data:image/jpeg;base64,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',
         brand:'Rolex',
         price:'2000',
         id:'2022021',
         },
         {
          productImage:'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          brand:'Titan',
          price:'4000',
          id:'2022022',
         },
         {
         productImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbf6lRnOEBd0g6ptPx1AtOTM_oAamsbYbTOA&usqp=CAU',
         brand:'Titan',
         price:'16000',
         id:'2022023',
         },
         {
         productImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfEbau3NFLiFNkXB5lOv1jVUuYQC2uloP7VQ&usqp=CAU',
         brand:'Rolex',
         price:'20000',
         id:'2022024',
         },
         {
         productImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYj9NYrCUR_qw7IJKBdrR-BA3ciOCZQh6zeg&usqp=CAU',
         brand:'Titan',
         price:'22000',
         id:'2022025',
         },
         {
         productImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKKgpMmvZl2drsFiIA3RnJHPjIVR5dnbwrsy9GJEBQETnDTpO2LwzHScOLszWwOG0jhic&usqp=CAU',
         brand:'Titan',
         price:'23000',
         id:'2022026',
         },
     ];
     export default class MainScreen extends PureComponent{
         render(){
             return(
                 <FlatList 
                 numColumns={2}
                 data={watchList}
                 keyExtractor={(item) =>item.id}
                 // keyExtractor={(item,index)=>index.toString() }
                 renderItem={({item}) => <Watch_Name_List watchList={item} {...this.props}/>}>
                 </FlatList>
             );
         }
     }




























// import { Box, Image, Text, View } from "native-base";
// import { ItemClick } from "native-base/lib/typescript/components/composites/Typeahead/useTypeahead/types";
// import React from "react";
// import { StyleSheet } from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";

//  export default class Product extends React.Component{
//     render(){
//         const{brand, price,  productImage }=this.props.watchList
//         return(
//             <View>
//                 {watchList.map((item) =>{
//                     return(
//                         <TouchableOpacity key={item.id} onPress={() =>{}}>
//                             <Box style={styles.box}>
//                                <Image style={styles.image} source={{uri:productImage}} />
//                                <Text style={{textAlign:'center',fontWeight:'bold'}}>Brand:{brand}</Text>
//                                <Text>Price:{price}</Text>
                 
//                             </Box>
//                         </TouchableOpacity>
//                     )
//                 })}
            
//              </View>
//         );
//     }

// }
// const styles=StyleSheet.create({
//          box:{
//              width:'48%',
//              alignItems:'center',
//              margin:'1%',
//              marginTop:3,
//              paddingTop:6,
//              paddingBottom:9,
//              backgroundColor:'white',
//              borderRadius:12,
//          },
//         image:{
//             width:175, 
//             height:150 , 
//             borderRadius:12,
//             shadowOpacity:0.5,
//             shadowOffset:{
//                 width:0,
//                 height:2,
//             },
//          },
//      })
    







    




// import { Box, HStack, Image, NativeBaseProvider, VStack } from "native-base";
// import React, { PureComponent } from "react";
// import { StyleSheet } from "react-native";

// export class Watch_Name_List extends PureComponent<any, any>{
//     constructor(props: Readonly<any>) { super(props); }
//     render(): React.ReactNode{
//         return(
//             <NativeBaseProvider>
               
//                     <Box>
//                         <HStack>
//                         <Box style={styles.box} >
//                          <Image style={styles.image} source={{uri:this.props.prop.data.imageUrl1}}/>
//                         </Box>
//                        </HStack>
//                     </Box>
               
//         </NativeBaseProvider>
//         );
//     }

// }
// const styles=StyleSheet.create({
//     image:{
//           height:115,
//           width:147,
//           borderRadius:18,
//           resizeMode:'cover',
//           alignSelf:'flex-start',
//           marginLeft:20,
//           marginTop:6,
//     },
//     box:{
//         width:187,
//          height:210, 
//          backgroundColor:'white',
//           paddingTop:10, 
//           borderRadius:20,
//           marginTop:30,
//           marginLeft:20,
        
//     },
// })