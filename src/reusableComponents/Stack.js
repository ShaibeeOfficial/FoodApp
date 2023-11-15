import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from "@react-navigation/native";
import Login from "../Screens/Login";
import SignUp from "../Screens/SignUp";
import ForgetPassword from '../Screens/ForgetPassword';
import Verification from '../Screens/Verification';
import CreatePassword from '../Screens/CreatePassword';
import EmailVerification from '../Screens/EmailVerification';
import Bottomtabs from './BottomNavigation.js/Bottome';
import Categories from '../Screens/Category';
import ProductDetail from '../Screens/ProductDetail';
import EditProfile from '../Screens/EditProfile';

const myStack = createNativeStackNavigator();
const Navigation = () => {
    return (
        <NavigationContainer>
            <myStack.Navigator>
                <myStack.Screen options={{ headerShown: false }} name='Login' component={Login} />
                <myStack.Screen options={{ headerShown: false }} name='SignUp' component={SignUp} />
                <myStack.Screen options={{ headerShown: false }} name='ForgetPassword' component={ForgetPassword} />
                <myStack.Screen options={{ headerShown: false }} name='Verification' component={Verification} />
                <myStack.Screen options={{ headerShown: false }} name='CreatePassword' component={CreatePassword} />
                <myStack.Screen options={{ headerShown: false }} name='EmailVerification' component={EmailVerification} />
                <myStack.Screen options={{ headerShown: false }} name='Bottomtabs' component={Bottomtabs} />
                <myStack.Screen options={{ headerShown: false }} name='Categories' component={Categories} />
                <myStack.Screen options={{ headerShown: false }} name='ProductDetail' component={ProductDetail} />
                <myStack.Screen options={{ headerShown: false }} name='EditProfile' component={EditProfile} />
            </myStack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation