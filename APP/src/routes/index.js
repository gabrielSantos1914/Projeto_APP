import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BoasVindas from "../pages/boasVindas";
import Login from "../pages/login";
import Cadastro1 from "../pages/cadastro1";
import Cadastro2 from "../pages/cadastro2";
import Recuperar from "../pages/recuperar";
import EditarPerfil from "../pages/editarPerfil";
import Principal from "../pages/principal";
import Footer from "../components/footer";
import Skates from "../pages/skates";
import Produtos from "../pages/produtos";


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
<Stack.Screen
name="Recuperar"
component={Recuperar}
options={{headerShown: false}}
/>

<Stack.Screen

name="EditarPerfil"
component={EditarPerfil}
options={{headerShown: false}}
/>
<Stack.Screen
name="Principal"
component={Principal}
options={{headerShown: false}}
/>
<Stack.Screen
name="Skates"
component={Skates}
options={{headerShown: false}}
/>
<Stack.Screen
name="Footer"
component={Footer}
options={{headerShown: false}}
/>
<Stack.Screen
name="Produtos"
component={Produtos}
options={{headerShown: false}}
/>



</Stack.Navigator>


)

}