// import React, { useState } from 'react';
// import { ImageBackground, Alert, View, Text, StyleSheet,TouchableOpacity, TextInput, Platform } from 'react-native';
// import {Calendar, Agenda} from 'react-native-calendars';
// import testIDs from '../testID';

// const CalendarView = ({navigation} : {navigation:any}) => {
//     const state = {
//         items: {}
//       };
//     const [isError, setIsError] = useState(false);
//     const [message, setMessage] = useState('');
//     //내가 푼 문제들만 calendar에 나타내면 성공
//     //내 색깔을 calendar에 표시해야하고, calendar 밑 view에는 내가 푼 문제들 번호 나타내기

//     const [date, setDate] = useState('2021-11-11');
//     const getMessage = () => {
//         const status = isError ? `Error: ` : `Success: `;
//         return status + message;
//     }

//     const user1 = {key: 'user1', color: 'red', selectedDotColor: 'blue'};
//     const user2 = {key: 'user2', color: 'blue', selectedDotColor: 'blue'};
//     const user3 = {key: 'user3', color: 'green'};

//     return (
//         <View>
//             <Calendar
//           style={styleCalendar.calendar}
//           current={date}
//           markingType={'multi-dot'}
//           markedDates={{
//             '2021-11-13': {
//               selected: true,
//               dots: [
//                 {key: 'vacation', color: 'blue', selectedDotColor: 'red'},
//                 {key: 'massage', color: 'red', selectedDotColor: 'white'}
//               ]
//             },
//             '2021-11-11': {
//               disabled: true,
//               dots: [
//                 {key: 'vacation', color: 'green', selectedDotColor: 'red'},
//                 {key: 'massage', color: 'red', selectedDotColor: 'green'}
//               ]
//             }
//           }}
//           theme={{
//             calendarBackground: '#333248',
//             textSectionTitleColor: 'white',
//             textSectionTitleDisabledColor: 'gray',
//             dayTextColor: 'red',
//             todayTextColor: 'white',
//             selectedDayTextColor: 'white',
//             monthTextColor: 'white',
//             indicatorColor: 'white',
//             selectedDayBackgroundColor: '#333248',
//             arrowColor: 'white',
//             // textDisabledColor: 'red';
//           }}
//         />
//          <Agenda
//         testID={testIDs.agenda.CONTAINER}
//         items={state.items}
//         loadItemsForMonth={loadItems.bind(this)}
//         renderItem={renderItem.bind(this)}
//         renderEmptyDate={renderEmptyDate.bind(this)}
//         rowHasChanged={rowHasChanged.bind(this)}
//         showClosingKnob={true}/>
//         </View>


//     );
// }

// const loadItems = (day) => {
//     setTimeout(() => {
//       for (let i = -15; i < 85; i++) {
//         const time = day.timestamp + i * 24 * 60 * 60 * 1000;
//         const strTime = timeToString(time);
//         if (!this.state.items[strTime]) {
//           state.items[strTime] = [];
//           const numItems = Math.floor(Math.random() * 3 + 1);
//           for (let j = 0; j < numItems; j++) {
//             state.items[strTime].push({
//               name: 'Item for ' + strTime + ' #' + j,
//               height: Math.max(50, Math.floor(Math.random() * 150))
//             });
//           }
//         }
//       }
//       const newItems = {};
//       Object.keys(state.items).forEach(key => {
//         newItems[key] = state.items[key];
//       });
//       this.setState({
//         items: newItems
//       });
//     }, 1000);
//   }

//   const renderItem = (item) => {
//     return (
//       <TouchableOpacity
//         testID={testIDs.agenda.ITEM}
//         style={[styles.item, {height: item.height}]}
//         onPress={() => Alert.alert(item.name)}
//       >
//         <Text>{item.name}</Text>
//       </TouchableOpacity>
//     );
//   }

//   const renderEmptyDate = () => {
//     return (
//       <View style={styles.emptyDate}>
//         <Text>This is empty date!</Text>
//       </View>
//     );
//   }

//   const rowHasChanged = (r1, r2) => {
//     return r1.name !== r2.name;
//   }

//   const timeToString = (time) => {
//     const date = new Date(time);
//     return date.toISOString().split('T')[0];
//   }

// const styles = StyleSheet.create({
//   item: {
//     backgroundColor: 'white',
//     flex: 1,
//     borderRadius: 5,
//     padding: 10,
//     marginRight: 10,
//     marginTop: 17
//   },
//   emptyDate: {
//     height: 15,
//     flex: 1,
//     paddingTop: 30
//   }
// });

// const styleCalendar = StyleSheet.create({
//     calendar: {
//       marginBottom: 10
//     },
//     switchContainer: {
//       flexDirection: 'row',
//       margin: 10,
//       alignItems: 'center'
//     },
//     switchText: {
//       margin: 10,
//       fontSize: 16
//     },
//     text: {
//       textAlign: 'center',
//       padding: 10,
//       backgroundColor: 'lightgrey',
//       fontSize: 16
//     },
//     disabledText: {
//       color: 'grey'
//     },
//     defaultText: {
//       color: 'purple'
//     },
//     customCalendar: {
//       height: 250,
//       borderBottomWidth: 1,
//       borderBottomColor: 'lightgrey'
//     },
//     customDay: {
//       textAlign: 'center'
//     },
//     customHeader: {
//       backgroundColor: '#FCC',
//       flexDirection: 'row',
//       justifyContent: 'space-around',
//       marginHorizontal: -4,
//       padding: 8
//     }
//   });

// export default CalendarView;