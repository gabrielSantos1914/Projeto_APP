import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BoasVindas from "../pages/boasVindas";
import Login from "../pages/login";
import Cadastro1 from "../pages/cadastro1";
import Cadastro2 from "../pages/cadastro2";


const Stack = createNativeStackNavigator();
export default function Routes(){
return(
<Stack.Navigator>


<Stack.Screen
name="BoasVindas"
component={BoasVindas}
options={{headerShown: false}}
/>

<Stack.Screen
name="Login"
component={Login}
options={{headerShown: false}}
/>

<Stack.Screen
name="Cadastro1"
component={Cadastro1}
options={{headerShown: false}}
/>
<Stack.Screen
name="Cadastro2"
component={Cadastro2}
options={{headerShown: false}}
/>




</Stack.Navigator>


)

}