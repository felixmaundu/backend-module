// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, FlatList } from 'react-native';
// import axios from 'axios';

// const Home = () => {
//   const [matches, setMatches] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await axios.get('https://api-football-v1.p.rapidapi.com/v2/fixtures/live', {
//         headers: {
//           "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
//           "x-rapidapi-key": "YOUR_API_KEY"
//         }
//       });
//       setMatches(response.data.api.fixtures);
//     };
//     fetchData();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Live Matches</Text>
//       <FlatList
//         data={matches}
//         keyExtractor={item => item.fixture_id}
//         renderItem={({ item }) => (
//           <View style={styles.matchContainer}>
//             <Text style={styles.match}>{item.homeTeam.team_name}</Text>
//             <Text style={styles.match}>{item.awayTeam.team_name}</Text>
//             <Text style={styles.match}>{item.status}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#f0f0f0'
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10
//   },
//   matchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     backgroundColor: 'white',
//     padding: 10,
//     marginVertical: 10,
//     borderRadius: 5,
//     width: '95%'
//   },
//   match: {
//     fontSize: 16
//   }
// });

// export default Home;

// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
// import axios from 'axios';

// const Home = () => {
//   const [dates, setDates] = useState([]);
//   const [selectedDate, setSelectedDate] = useState('');
//   const [fixtures, setFixtures] = useState([]);

//   useEffect(() => {
//     const fetchDates = async () => {
//       const response = await axios.get('https://api-football-v1.p.rapidapi.com/v2/fixtures/date/2022-01-01', {
//         headers: {
//           "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
//           "x-rapidapi-key": "YOUR_API_KEY"
//         }
//       });
//       setDates(response.data.api.fixtures.map(fixture => fixture.event_date.slice(0, 10)));
//     };
//     fetchDates();
//   }, []);

//   useEffect(() => {
//     if (selectedDate) {
//       const fetchFixtures = async () => {
//         const response = await axios.get(`https://api-football-v1.p.rapidapi.com/v2/fixtures/date/${selectedDate}`, {
//           headers: {
//             "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
//             "x-rapidapi-key": "YOUR_API_KEY"
//           }
//         });
//         setFixtures(response.data.api.fixtures);
//       };
//       fetchFixtures();
//     }
//   }, [selectedDate]);

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={dates}
//         horizontal={true}
//         keyExtractor={item => item}
//         renderItem={({ item }) => (
//           <TouchableOpacity style={styles.dateContainer} onPress={() => setSelectedDate(item)}>
//             <Text style={styles.date}>{item}</Text>
//           </TouchableOpacity>
//         )}
//       />
//       <Text style={styles.title}>Fixtures for {selectedDate}</Text>
//       <FlatList
//         data={fixtures}
//         keyExtractor={item => item.fixture_id}
//         renderItem={({ item }) => (
// <FlatList
//     data={fixtures}
//     keyExtractor={item => item.fixture_id}
//     renderItem={({ item }) => (
//       <View style={styles.fixtureContainer}>
//         <Text style={styles.fixture}>{item.homeTeam.team_name}</Text>
//         <Text style={styles.fixture}>{item.awayTeam.team_name}</Text>
//         <Text style={styles.fixture}>{item.status}</Text>
//         <Text style={styles.fixture}>{item.event_date}</Text>
//       </View>
//     )}
//   />
// const possession = 60;
// const attempts = 30;
// const shots = 20;

// return (
//   <View style={styles.container}>
//     <View style={[styles.bar, {width: `${possession}%`}]} />
//     <View style={[styles.bar, {width: `${attempts}%`}]} />
//     <View style={[styles.bar, {width: `${shots}%`}]} />
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between'
//   },
//   bar: {
//     height: 20,
//     backgroundColor: 'blue'
//   }
// });
// import { View, StyleSheet, Animated } from 'react-native';

// const possession = 60;
// const attempts = 30;
// const shots = 20;

// const possessionWidth = new Animated.Value(possession);
// const attemptsWidth = new Animated.Value(attempts);
// const shotsWidth = new Animated.Value(shots);

// return (
//   <View style={styles.container}>
//     <Animated.View style={[styles.bar, {width: possessionWidth}]} />
//     <Animated.View style={[styles.bar, {width: attemptsWidth}]} />
//     <Animated.View style={[styles.bar, {width: shotsWidth}]} />
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between'
//   },
//   bar: {
//     height: 20,
//     backgroundColor: 'blue'
//   }
// });
//#######################################################
// import React from 'react';
// import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const MatchFixture = ({fixture}) => {
//   return (
//     <View style={styles.matchFixtureContainer}>
//       <Text style={styles.matchFixture}>{fixture.homeTeam.team_name}</Text>
//       <Text style={styles.matchFixture}>{fixture.awayTeam.team_name}</Text>
//       <Text style={styles.matchFixture}>{fixture.status}</Text>
//     </View>
//   );
// }

// const Summary = () => {
//   return (
//     <View style={styles.tabContainer}>
//       <Text>Summary</Text>
//     </View>
//   );
// }

// const Stats = () => {
//   return (
//     <View style={styles.tabContainer}>
//       <Text>Stats</Text>
//     </View>
//   );
// }

// const Lineups = () => {
//   return (
//     <View style={styles.tabContainer}>
//       <Text>Lineups</Text>
//     </View>
//   );
// }

// const Odds = () => {
//   return (
//     <View style={styles.tabContainer}>
//       <Text>Odds</Text>
//     </View>
//   );
// }

// const Tab = createBottomTabNavigator();

// const Match = ({fixture}) => {
//   return (
//     <View style={styles.container}>
//       <MatchFixture fixture={fixture} />
//       <Tab.Navigator>
//         <Tab.Screen name="Summary" component={Summary} />
//         <Tab.Screen name="Stats" component={Stats} />
//         <Tab.Screen name="Lineups" component={Lineups} />
//         <Tab.Screen name="Odds" component={Odds} />
//       </Tab.Navigator>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f0f0f0'
//   },
//   matchFixtureContainer: {
//     padding: 10,
//     backgroundColor: 'white',
//     borderRadius: 5,
//     marginBottom: 10
//   },
//   matchFixture: {
//     fontSize: 16
//   },
//   tabContainer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#f0f0f0'
//   }
// });

// export default Match;
// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
// import axios from 'axios';

// const Lineups = ({matchId}) => {
//   const [players, setPlayers] = useState([]);

//   useEffect(() => {
//     const fetchLineups = async () => {
//       const response = await axios.get(`https://api-football-v1.p.rapidapi.com/v2/lineups/${matchId}`, {
//         headers: {
//           "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
//           "x-rapidapi-key": "YOUR_API_KEY"
//         }
//       });
//       setPlayers(response.data.api.lineups);
//     };
//     fetchLineups();
//   }, [matchId]);

//   const renderPlayer = ({ item }) => (
//     <View style={styles.playerContainer}>
//       <Image source={{ uri: item.player_image }} style={}/>
//       </View>
// const renderPlayer = ({ item }) => (
//     <View style={styles.playerContainer}>
//       <Image source={{ uri: item.player_image }} style={styles.playerImage} />
//       <View style={styles.playerInfo}>
//         <Text style={styles.playerName}>{item.player_name}</Text>
//         <Text style={styles.playerPosition}>{item.player_position}</Text>
//         <Text style={styles.playerNumber}>{item.player_number}</Text>
//       </View>
//     </View>
//   );
