import { StyleSheet, Text, View, ScrollView, SafeAreaView, Platform, Pressable, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import ProductItem from '../components/ProductItem'
import axios from 'axios'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const MenCloScreen = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://fakestoreapi.com/products");

                setProduct(response.data);
            } catch (error) {
                console.log("error message", error);
            }
        }
        fetchData()
    }
        , [])


    return (
        <SafeAreaView
        style={{
            paddingTop: Platform.OS === "android" ? 40 : 0,
            flex: 1,
            backgroundColor: "white",

        }}
    >
        <ScrollView>
            <View
                style={{
                    backgroundColor: "#00CED1",
                    padding: 10,
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <Pressable
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginHorizontal: 7,
                        gap: 10,
                        backgroundColor: "white",
                        borderRadius: 3,
                        height: 38,
                        flex: 1,
                    }}
                >
                    <AntDesign
                        style={{ paddingLeft: 10 }}
                        name="search1"
                        size={22}
                        color="black"
                    />
                    <TextInput placeholder="Search " />
                </Pressable>

                <Feather name="mic" size={24} color="black" />
            </View>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    flexWrap: "wrap",
                }}
            >
                {product
                    ?.filter((item) => item.category === "men's clothing")
                    .map((item, index) => (
                        <ProductItem item={item} key={index} />
                    ))}
            </View>
        </ScrollView>
    </SafeAreaView>
    )
}

export default MenCloScreen

const styles = StyleSheet.create({})