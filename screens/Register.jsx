import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import React, { useState } from "react";
import { getUser } from "../UserContext";
import { colors } from "../utils/theme";
import validateEmail from "../utils/validateEmail";
import validatePhone from "../utils/validatePhone";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [next, setNext] = useState(false);
  const { setUser } = getUser();


  function registerUser() {
    const newUser = {
      firstName,
      lastName,
      email,
      phone,
    };
    setUser(newUser);
  }

  return (
    <View style={styles.container}>
      {!next ? (
        <View style={styles.form}>
          <Text style={styles.formText}>Let us get to know you</Text>

          <View style={styles.inputLabel}>
            <Text style={styles.labelText}>First Name</Text>
            <TextInput
              style={styles.formInput}
              onChangeText={setFirstName}
              value={firstName}
            />
          </View>

          <View style={styles.inputLabel}>
            <Text style={styles.labelText}>Last Name</Text>
            <TextInput
              style={styles.formInput}
              onChangeText={setLastName}
              value={lastName}
            />
          </View>

          <Pressable
            onPress={() => setNext(true)}
            disabled={!firstName || !lastName}
          >
            <View
              style={
                firstName && lastName ? styles.enabledBtn : styles.disabledBtn
              }
            >
              <Text
                style={
                  firstName && lastName
                    ? styles.enabledBtnText
                    : styles.disabledBtnText
                }
              >
                Next
              </Text>
            </View>
          </Pressable>
        </View>
      ) : (
        <View style={styles.form}>
          <Text style={styles.formText}>Let us know a little more...</Text>

          <View style={styles.inputLabel}>
            <Text style={styles.labelText}>Email</Text>
            <TextInput
              style={styles.formInput}
              onChangeText={setEmail}
              value={email}
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputLabel}>
            <Text style={styles.labelText}>Phone Number</Text>
            <TextInput
              style={styles.formInput}
              onChangeText={setPhone}
              value={phone}
              keyboardType="phone-pad"
            />
          </View>

          <Pressable
            onPress={registerUser}
            disabled={!email || !validatePhone(phone)}
          >
            <View
              style={
                validateEmail(email) && validatePhone(phone)
                  ? styles.enabledBtn
                  : styles.disabledBtn
              }
            >
              <Text
                style={
                  validateEmail(email) && validatePhone(phone)
                    ? styles.enabledBtnText
                    : styles.disabledBtnText
                }
              >
                Next
              </Text>
            </View>
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.yellow,
    justifyContent: "center",
  },
  form: {
    flex: 1 / 2,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  formText: {
    fontSize: 25,
  },
  formInput: {
    padding: 10,
    backgroundColor: colors.yellow,
    borderColor: colors.dark,
    borderWidth: 3,
    color: colors.dark,
    borderRadius: 16,
    width: 200,
  },
  inputLabel: { gap: 10, alignItems: "center" },
  labelText: { fontWeight: "bold", fontSize: 20 },
  enabledBtn: {
    paddingVertical: 15,
    paddingHorizontal: 70,
    backgroundColor: colors.green,
    borderRadius: 16,
    borderWidth: 2,
  },
  disabledBtn: {
    paddingVertical: 15,
    paddingHorizontal: 70,
    backgroundColor: colors.light,
    borderWidth: 2,
    borderRadius: 16,
  },
  enabledBtnText: {
    color: colors.light,
    fontSize: 20,
  },
  disabledBtnText: {
    fontSize: 20,
  },
});
