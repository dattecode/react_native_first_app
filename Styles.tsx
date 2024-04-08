import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 25,
    color: '#6f6f6f',
    marginTop: 20,
    alignItems: 'center',
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: '#6f6f6f',
  },
  textDone: {
    fontSize: 16,
    color: '#6f6f6f',
    textDecorationLine: 'line-through',
  },
  whiteText: {
    fontSize: 16,
    color: '#fff',
  },
  inputContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    borderColor: '#6f6f6f',
    borderWidth: 1,
    flex: 0.66,
    borderRadius: 10,
    paddingLeft: 15,
    color: "#6f6f6f"
  },
  addButton: {
    flex: 0.3,
    backgroundColor: '#5897fb',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  scrollContainer: {
    marginTop:20
  },
  itemContainer: {
    paddingVertical: 20,
    borderBottomColor: '#e4e4e4',
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  removeBtn: {
    backgroundColor: '#f33d3d',
    justifyContent:"center",
    alignItems: "center",
    borderRadius:10,
    paddingHorizontal: 15
  },
});

export default styles