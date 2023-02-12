import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  ScrollView,
  Button,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons/faPlusSquare";
import { useState } from "react";

import { TaskItem } from "./components/taskItem";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [inputTxt, setInputText] = useState("");

  const addTask = () => {
    if (!inputTxt)
      ToastAndroid.show("Can't add an empty task", ToastAndroid.SHORT);
    else setTasks([...tasks, { title: inputTxt, checked: false }]);
    setInputText("");
  };
  const removeTask = (_index) => {
    setTasks(
      tasks.filter((task, index) => {
        if (index != _index) return task;
      })
    );
  };
  const checkTask = (_index) => {
    let checked;
    setTasks(
      tasks.map((task, index) => {
        if (index == _index) {
          checked = true;
        } else {
          checked = task.checked;
        }
        return {
          title: task.title,
          checked,
        };
      })
    );
  };
  const unCheckTask = (_index) => {
    let checked;
    setTasks(
      tasks.map((task, index) => {
        if (index == _index) {
          checked = false;
        } else {
          checked = task.checked;
        }
        return {
          title: task.title,
          checked,
        };
      })
    );
  };
  const clearAllTasks = () => {
    setTasks([]);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.row_top}>
        <TextInput
          placeholder="List To Do"
          value={inputTxt}
          style={styles.textInput}
          onChangeText={(input) => {
            setInputText(input);
          }}
        ></TextInput>
        <TouchableOpacity onPress={addTask}>
          <FontAwesomeIcon icon={faPlusSquare} style={styles.icon} size={38} />
        </TouchableOpacity>
      </View>
      <View style={styles.list}>
        <ScrollView>
          {tasks.map((task, index) => {
            return (
              <TaskItem
                index={index}
                task={task.title}
                checked={task.checked}
                checkTask={checkTask}
                unCheckTask={unCheckTask}
                removeTask={removeTask}
                key={index}
              />
            );
          })}
        </ScrollView>
      </View>

      <View style={styles.row_bottom}>
        <View style={styles.button}>
          <Button
            title="Clear All"
            color={"#601921"}
            onPress={clearAllTasks}
            disabled={tasks.length ? false : true}
          ></Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7ff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: "1%",
    paddingVertical: "1%",
  },
  row_top: {
    flex: 1,
    flexDirection: "row",
    marginTop: "12%",
    marginBottom: "1%",
    alignItems: "flex-start",
    justifyContent: "space-around",
  },
  textInput: {
    flex: 3,
    width: "70%",
    backgroundColor: "#f7f7ff",
    color: "#000",
    fontSize: 18,
    marginHorizontal: "2%",

    paddingHorizontal: "1%",
    paddingVertical: "2%",
    borderRadius: 5,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: "#192160",
  },
  icon: {
    flex: 1,
    paddingHorizontal: "2%",
    backgroundColor: "#f7f7ff",
    color: "#ff0322",
    borderColor: "#192160",
    borderWidth: 1,
  },
  list: {
    flex: 10,
    width: "100%",
    flexDirection: "column",
  },
  row_bottom: {
    flex: 1,
    flexDirection: "row",
    marginVertical: "3%",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    backgroundColor: "#601921",
    borderRadius: 10,
    padding: "1%",
    margin: "2%",
  },
});
