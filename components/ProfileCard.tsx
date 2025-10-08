import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface ProfileCardProps {
  name: string;
  jobTitle: string;
  imageUrl: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, jobTitle, imageUrl }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.image} />

      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    flexDirection: "row",
    alignItems: "center",

    // Ombres pour iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    // Ombres pour Android
    elevation: 3,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  textContainer: {
    marginLeft: 16,
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  jobTitle: {
    fontSize: 14,
    color: "gray",
    marginTop: 4,
  },
});

export default ProfileCard;