import { useState } from "react";
import { Text, View, Button, TextInput, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import AsyncStorage from "@react-native-async-storage/async-storage";

 function Recherche({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const [websiteInput, setWebsiteInput] = useState("");

  const dateArray = date.toISOString().split("T"); // split the ISO format to seperate date and time in an array

  // Set the date picker //

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  // handling the user's input //

  const handleWebsiteInput = (e) => {
    setWebsiteInput(e);
  };

  // fetching the wayback API to get the website url with the user's choices

  const getWebsite = async () => {
    console.log(websiteInput);
    const timestamp =
      dateArray[0].split("-").join("") +
      "" +
      dateArray[1].substring(0, 5).replace(":", ""); // define timestamp to be understable by the APi with the YYYYMMYYHHMM format

    return fetch(
      `http://archive.org/wayback/available?url=${websiteInput}&timestamp=${timestamp}`
    )
      .then((response) => response.json())
      .then(async (responseObject) => {
        await AsyncStorage.setItem(
          "url",
          responseObject.archived_snapshots.closest.url
        );

        let answeredUrl = await AsyncStorage.getItem("url");

        navigation.navigate("Site", {
          url: answeredUrl,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View>
      <TextInput  style={{ color: "white", fontWeight: "bold", textAlign: "center",backgroundColor: "orange", marginVertical: 20,marginHorizontal: 50,}}
        placeholder="Recherche Site"
        onChangeText={handleWebsiteInput}
      />
      <View>
        <TouchableOpacity
          onPress={showDatepicker}
          style={{
            backgroundColor: "orange",
            padding: 20,
            borderRadius: 20,
            marginVertical: 20,
            marginHorizontal: 50,
          }}
        >
          <Text
            style={{ color: "white", fontWeight: "bold", textAlign: "center" }}
          >
            Date
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={showTimepicker}
          style={{
            backgroundColor: "orange",
            padding: 20,
            borderRadius: 20,
            marginVertical: 20,
            marginHorizontal: 50,
          }}
        >
          <Text
            style={{ color: "white", fontWeight: "bold", textAlign: "center" }}
          >
            Heure
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{ color: "black", fontWeight: "bold", textAlign: "center" }} >Date : {date.toLocaleDateString("fr-FR")}</Text>
        <Text style={{ color: "black", fontWeight: "bold", textAlign: "center", marginVertical:20 }}>Heure : {date.toLocaleTimeString("fr-FR")}</Text>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
      

      <TouchableOpacity
          onPress={getWebsite}
          style={{
            backgroundColor: "orange",
            padding: 20,
            borderRadius: 20,
            marginVertical: 20,
            marginHorizontal: 50,
          }}
        >
          <Text
            style={{ color: "white", fontWeight: "bold", textAlign: "center" }}
          >
            Valider
          </Text>
        </TouchableOpacity>
    </View>
  );
}

export default Recherche;