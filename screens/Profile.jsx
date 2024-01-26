import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { getUser } from "../UserContext";
import { colors } from "../utils/theme";
import validateEmail from "../utils/validateEmail";
import validatePhone from "../utils/validatePhone";

export default function Profile() {
  const { userData, logOutUser, modifyUser } = getUser();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function discardChanges() {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    Alert.alert(
      "Changes discarded",
      "Changes discarded. User data has been kept unchanged."
    );
  }

  function submitForm() {
    if (!firstName && !lastName && !email && !phone) {
      Alert.alert("There´s nothing to change!");
      return;
    }

    const newUserData = { ...userData };

    if (firstName) {
      newUserData.firstName = firstName;
    }

    if (lastName) {
      newUserData.lastName = lastName;
    }

    if (email) {
      if (validateEmail(email)) {
        newUserData.email = email;
      } else {
        Alert.alert(
          "Invalid Email",
          "The email is incorrect. Please correct it or leave it blank to keep it unchanged."
        );

        return;
      }
    }

    if (phone) {
      if (validatePhone(phone)) {
        newUserData.phone = phone;
      } else {
        Alert.alert(
          "Invalid Phone",
          "The phone is incorrect. Please correct it or leave it blank to keep it unchanged."
        );

        return;
      }
    }

    modifyUser(newUserData);
    Alert.alert("Profile updated!", "The changes were done succesfully.");
  }

  const Buttons = () => (
    <View style={styles.buttonsContainer}>
      <View style={styles.buttonsSubcontainer}>
        <Pressable onPress={discardChanges}>
          <View style={styles.discardBtn}>
            <Text style={styles.discardText}>Discard changes</Text>
          </View>
        </Pressable>

        <Pressable onPress={submitForm}>
          <View style={styles.saveBtn}>
            <Text style={styles.saveText}>Save changes</Text>
          </View>
        </Pressable>
      </View>

      <View style={styles.logoutContainer}>
        <Pressable onPress={logOutUser}>
          <View style={styles.logoutBtn}>
            <Text style={styles.logoutText}>Logout</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Text style={styles.headerText}>Personal information</Text>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.labelName}>First Name</Text>
          <TextInput
            style={styles.formInput}
            onChangeText={setFirstName}
            placeholder={userData.firstName}
            value={firstName}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.labelName}>Last Name</Text>
          <TextInput
            style={styles.formInput}
            onChangeText={setLastName}
            placeholder={userData.lastName}
            value={lastName}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.labelName}>Email</Text>
          <TextInput
            style={styles.formInput}
            onChangeText={setEmail}
            placeholder={userData.email}
            value={email}
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.labelName}>Phone number</Text>
          <TextInput
            style={styles.formInput}
            onChangeText={setPhone}
            placeholder={userData.phone}
            value={phone}
            keyboardType="numeric"
          />
        </View>
      </View>

      <Buttons />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
  },
  buttonsContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
    flex: 0.3,
  },
  logoutContainer: {
    width: "100%",
    paddingHorizontal: 10,
  },
  logoutBtn: {
    paddingVertical: 15,
    backgroundColor: colors.yellow,
    borderColor: colors.orange,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  logoutText: {
    color: colors.dark,
    textAlign: "center",
    fontWeight: "bold",
  },
  buttonsSubcontainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
  },
  discardBtn: {
    paddingVertical: 15,
    borderColor: colors.green,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  discardText: {
    color: colors.green,
    textAlign: "center",
  },
  saveBtn: {
    paddingVertical: 15,
    backgroundColor: colors.green,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  saveText: {
    color: colors.light,
    textAlign: "center",
  },
  formContainer: {
    flex: 0.7,
  },
  inputContainer: {
    paddingHorizontal: 15,
  },
  labelName: {
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: 16,
  },
  formInput: {
    borderWidth: 1,
    padding: 5,
    width: "100%",
    borderRadius: 8,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 10,
  },
});
