import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import CheckBox from "expo-checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";

export const TaskItem = (props) => {
  return (
    <View style={styles.item}>
      <CheckBox
        style={styles.checkbox}
        color={"gray"}
        value={props.checked}
        onValueChange={(newValue) => {
          if (newValue) props.checkTask(props.index);
          else props.unCheckTask(props.index);
        }}
      />
      <Text style={props.checked ? styles.checkedTask : styles.unCheckedTask}>
        {props.task}
      </Text>
      <TouchableOpacity
        onPress={() => {
          props.removeTask(props.index);
        }}
      >
        <FontAwesomeIcon icon={faTrash} style={styles.icon} size={28} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: "row",
    height: "auto",
    marginVertical: "1%",
    paddingVertical: "1%",
    backgroundColor: "#f733",
    borderRadius: 5,
  },
  checkbox: {
    // flex: 1,
    width: "7%",
    height: "45%",
    color: "#gray",
    marginHorizontal: "1%",
    marginVertical: "4%",
  },
  unCheckedTask: {
    flex: 3,
    color: "#000",
    fontSize: 20,
    paddingHorizontal: "3%",
    paddingVertical: "4%",
  },
  checkedTask: {
    flex: 3,
    color: "#b3b3ba",
    fontSize: 22,
    paddingHorizontal: "3%",
    paddingVertical: "4%",
    textDecorationLine: "line-through",
  },
  icon: {
    flex: 1,
    color: "tomato",
    marginVertical: "55%",
    marginHorizontal: "0.7%",
  },
});
