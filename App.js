import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Alertclass from './Alertclass'
import Alertfuncao from './Alertfuncao';

      /*function ManterContato() {
     return (

<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
<Text>Manter contato</Text>
</View>
    );
}*/

    function ChamarAlertFuncao() {
return (

      <Alertfuncao/>
     
);
}

      function ChamarAlertClasse() {
 return(

    <Alertclass/>   
)

}


     function ExemploAula() {
return (
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
<Text>Exemplo de Tela</Text>
</View>
);;
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
return (
<Drawer.Navigator>

<Drawer.Screen name="Alert function" component={ChamarAlertFuncao} />
<Drawer.Screen name="Alert classe" component={ChamarAlertClasse} />
<Drawer.Screen name="Exemplo" component={ExemploAula} />
</Drawer.Navigator>
);
}

export default function App() {
return (
<NavigationContainer>
<MyDrawer />
</NavigationContainer>
);
}