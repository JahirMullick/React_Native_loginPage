
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable, ScrollView } from 'react-native';

const ChooseTemplate = () => {

    // State to keep track of selected card
    const [selectedCard, setSelectedCard] = useState(null);

    // Function to handle card selection
    const handleSelectCard = (cardName) => {
        setSelectedCard(cardName);
    };

    const imageUrl = '';

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Choose Our Pre-Define Dataset.</Text>

            {/* Adding ScrollView to enable scrolling */}
            <ScrollView contentContainerStyle={styles.cardContainer} showsVerticalScrollIndicator={false}>
                <Pressable
                    style={[
                        styles.productCard,
                        selectedCard === 'Restaurant' && styles.selectedCard,
                    ]}
                    onPress={() => handleSelectCard('Restaurant')}
                >
                    {/* <Image style={styles.image} source={{ uri: imageUrl || 'https://i.ibb.co/RBk2XZs/two.png' }} /> */}
                    <Image style={styles.image} source={{ uri: imageUrl || 'https://i.ibb.co/RBk2XZs/two.png' }} />
                    <Text style={styles.productText}>Restaurant</Text>
                </Pressable>

                <Pressable
                    style={[
                        styles.productCard,
                        selectedCard === 'Store' && styles.selectedCard,
                    ]}
                    onPress={() => handleSelectCard('Store')}
                >
                    <Image style={styles.image} source={{ uri: imageUrl || 'https://i.ibb.co/RBk2XZs/two.png' }} />
                    <Text style={styles.productText}>Store</Text>
                </Pressable>

                <Pressable
                    style={[
                        styles.productCard,
                        selectedCard === 'Bakery' && styles.selectedCard,
                    ]}
                    onPress={() => handleSelectCard('Bakery')}
                >
                    <Image style={styles.image} source={{ uri: imageUrl || 'https://i.ibb.co/RBk2XZs/two.png' }} />
                    <Text style={styles.productText}>Bakery</Text>
                </Pressable>


                <View style={styles.productCard}>
                    <Image style={styles.image} source={{ uri: imageUrl || 'https://i.ibb.co/RBk2XZs/two.png' }} />
                    <Text style={styles.productText}>Bakery</Text>
                </View>
                <View style={styles.productCard}>
                    <Image style={styles.image} source={{ uri: imageUrl || 'https://i.ibb.co/RBk2XZs/two.png' }} />
                    <Text style={styles.productText}>Bakery</Text>
                </View>
                <View style={styles.productCard}>
                    <Image style={styles.image} source={{ uri: imageUrl || 'https://i.ibb.co/RBk2XZs/two.png' }} />
                    <Text style={styles.productText}>Bakery</Text>
                </View>
                <View style={styles.productCard}>
                    <Image style={styles.image} source={{ uri: imageUrl || 'https://i.ibb.co/RBk2XZs/two.png' }} />
                    <Text style={styles.productText}>Bakery</Text>
                </View>

                <View style={styles.productCard}>
                    <Image style={styles.image} source={{ uri: imageUrl || 'https://i.ibb.co/RBk2XZs/two.png' }} />
                    <Text style={styles.productText}>Bakery</Text>
                </View>
                <View style={styles.productCard}>
                    <Image style={styles.image} source={{ uri: imageUrl || 'https://i.ibb.co/RBk2XZs/two.png' }} />
                    <Text style={styles.productText}>Bakery</Text>
                </View>
                <View style={styles.productCard}>
                    <Image style={styles.image} source={{ uri: imageUrl || 'https://i.ibb.co/RBk2XZs/two.png' }} />
                    <Text style={styles.productText}>Bakery</Text>
                </View>
                <View style={styles.productCard}>
                    <Image style={styles.image} source={{ uri: imageUrl || 'https://i.ibb.co/RBk2XZs/two.png' }} />
                    <Text style={styles.productText}>Bakery</Text>
                </View>
                <View style={styles.productCard}>
                    <Image style={styles.image} source={{ uri: imageUrl || 'https://i.ibb.co/RBk2XZs/two.png' }} />
                    <Text style={styles.productText}>Bakery</Text>
                </View>
                <View style={styles.productCard}>
                    <Image style={styles.image} source={{ uri: imageUrl || 'https://i.ibb.co/RBk2XZs/two.png' }} />
                    <Text style={styles.productText}>Bakery</Text>
                </View>

                {/* Additional items if needed */}
                {/* You can add more product cards here */}
            </ScrollView>

            <View style={styles.buttonContainer}>
                <Pressable style={styles.backbutton}>
                    <Text style={styles.backbuttonText}>Without</Text>
                </Pressable>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Next</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    cardContainer: {
        // backgroundColor: '#fff',
        borderRadius: 14,
        padding: 10,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 1 },
        // shadowOpacity: 0.2,
        // shadowRadius: 1.5,
        elevation: 3,
        marginBottom: 20,
        // Adjusting contentContainerStyle for ScrollView
        paddingBottom: 20,
    },
    productCard: {
        flexDirection: 'row',
        height: 80, // Fixed height for product cards
        alignItems: 'center',
        padding: 10,
        borderRadius: 14,
        backgroundColor: '#e0f0e3',
        marginVertical: 8,
    },
    image: {
        borderRadius: 10,
        width: '30%',
        height: '100%',
        marginRight: '6%',
    },
    productText: {
        fontSize: 18,
        fontWeight: '600',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    backbutton: {
        borderWidth: 1,
        width: '34%',
        borderColor: 'green',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backbuttonText: {
        color: 'green',
        fontSize: 16,
        fontWeight: '500',
    },
    button: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#0c6a47',
        marginRight: 0,
        marginHorizontal: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default ChooseTemplate;


// import React from 'react';
// import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

// const ChooseTemplate = () => {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Choose Our Pre-Define Dataset.</Text>

//             <View style={styles.cardContainer}>
//                 <View style={styles.productCard}>
//                     <Image style={styles.image} source={{ uri: imageUrl || 'https://i.ibb.co/RBk2XZs/two.png' }} />
//                     <Text style={styles.productText}>Restaurant</Text>
//                 </View>

//                 <View style={styles.productCard}>
//                     <Image style={styles.image} source={{ uri: imageUrl || 'https://i.ibb.co/RBk2XZs/two.png' }} />
//                     <Text style={styles.productText}>Store</Text>
//                 </View>

//                 <View style={styles.productCard}>
//                     <Image style={styles.image} source={{ uri: imageUrl || 'https://i.ibb.co/RBk2XZs/two.png' }} />
//                     <Text style={styles.productText}>Bakery</Text>
//                 </View>
//             </View>

//             <View style={styles.buttonContainer}>
//                 {/* <Pressable style={styles.button}>
//                     <Text style={styles.buttonText}>Back</Text>
//                 </Pressable> */}
//                 <Pressable style={styles.backbutton}>
//                     <Text style={styles.backbuttonText}>Back</Text>
//                 </Pressable>
//                 <Pressable style={styles.button}>
//                     <Text style={styles.buttonText}>Next</Text>
//                 </Pressable>
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#f5f5f5',
//         padding: 20,
//         justifyContent: 'center',
//     },
//     title: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         textAlign: 'center',
//         marginBottom: 20,
//     },
//     cardContainer: {
//         backgroundColor: '#fff',
//         height: '80%',
//         borderRadius: 14,
//         padding: 10,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 1 },
//         shadowOpacity: 0.2,
//         shadowRadius: 1.5,
//         elevation: 3,
//         marginBottom: 20,
//     },
//     productCard: {
//         flexDirection: 'row',
//         height: '15%',
//         alignItems: 'center',
//         padding: 10,
//         borderRadius: 14,
//         backgroundColor: '#e0f0e3',
//         marginVertical: 8,
//     },
//     image: {
//         // width: 50,
//         // height: 50,
//         borderRadius: '10px',
//         width: '30%',
//         height: '90%',
//         marginRight: '6%',
//     },
//     productText: {
//         fontSize: 18,
//         fontWeight: '600',
//     },
//     buttonContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         marginTop: 10,
//     },
//     backbutton: {
//         borderWidth: 1,
//         width: '34%',
//         borderColor: 'green', // Border color
//         borderRadius: 8, // Rounded corners
//         paddingVertical: 10,
//         paddingHorizontal: 20,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     backbuttonText: {
//         color: 'green', // Text color
//         fontSize: 16,
//         fontWeight: '500',
//     },
//     button: {
//         flex: 1,
//         alignItems: 'center',
//         padding: 10,
//         borderRadius: 8,
//         backgroundColor: '#0c6a47',
//         marginRight: 0,
//         marginHorizontal: 10,
//     },
//     buttonText: {
//         color: '#fff',
//         fontSize: 16,
//     },
// });

// export default ChooseTemplate;

