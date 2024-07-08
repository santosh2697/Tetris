import { Splash } from "./components/Splash";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionSpecs,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { Login } from "./components/Login";
import { Game } from "./components/Game";

// //Default functions
// const MyTransition = {
//   cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
// };

//custom
// const MyTransition = {
//   transitionSpec: {
//     open: TransitionSpecs.TransitionIOSSpec,
//     close: TransitionSpecs.TransitionIOSSpec,
//   },
//   cardStyleInterpolator: ({ current, next, layouts }) => {
//     return {
//       cardStyle: {
//         transform: [
//           {
//             translateX: current.progress.interpolate({
//               inputRange: [0, 1],
//               outputRange: [layouts.screen.height, 0],
//             }),
//           },
//           // {
//           //   rotate: current.progress.interpolate({
//           //     inputRange: [0, 1],
//           //     outputRange: ["90deg", "360deg"],
//           //   }),
//           // },
//           {
//             translateX: current.progress.interpolate({
//               inputRange: [0, 1],
//               outputRange: [layouts.screen.height, 0],
//             }),
//           },
//           {
//             scale: next
//               ? next.progress.interpolate({
//                   inputRange: [0, 1],
//                   outputRange: [1, 0.9],
//                 })
//               : 1,
//           },
//         ],
//       },
//       overlayStyle: {
//         opacity: current.progress.interpolate({
//           inputRange: [0, 1],
//           outputRange: [0, 0.5],
//         }),
//       },
//     };
//   },
// };

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Game: undefined;
};

const App = () => {
  const [fontsLoaded] = useFonts({
    Dancing: require("./assets/fonts/static/DancingScript-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  const Stack = createStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardOverlayEnabled: true,
          gestureEnabled: true,
          //Using custom transition animation here to avoid typescript errors
          gestureDirection: "horizontal",
          transitionSpec: {
            open: TransitionSpecs.TransitionIOSSpec,
            close: TransitionSpecs.TransitionIOSSpec,
          },
          cardStyleInterpolator: ({ current, next, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.height, 0],
                    }),
                  },
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.height, 0],
                    }),
                  },
                  {
                    scale: next
                      ? next.progress.interpolate({
                          inputRange: [0, 1],
                          outputRange: [1, 0.9],
                        })
                      : 1,
                  },
                ],
              },
              overlayStyle: {
                opacity: current.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 0.5],
                }),
              },
            };
          },
        }}
      >
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Game"
          component={Game}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
