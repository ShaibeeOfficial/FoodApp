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
import AdminHome from '../Screens/AdminHome';
import RestaurantDetailScreen from '../Screens/Details';
import RestaurantProductUpload from '../Screens/ProductAdmin';
import Singleitem from '../Screens/Singleitem';
import CartScreen from '../Screens/CartScreen';
import OrdersScreen from '../Screens/OrderScreen';

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
                <myStack.Screen options={{ headerShown: false }} name='AdminHome' component={AdminHome} />
                <myStack.Screen options={{ headerShown: false }} name='RestaurantDetailScreen' component={RestaurantDetailScreen} />
                <myStack.Screen options={{ headerShown: false }} name='RestaurantProductUpload' component={RestaurantProductUpload} />
                <myStack.Screen options={{ headerShown: false }} name='Singleitem' component={Singleitem} />
                <myStack.Screen options={{ headerShown: false }} name='CartScreen' component={CartScreen} />
                <myStack.Screen options={{ headerShown: false }} name='OrdersScreen' component={OrdersScreen} />





                

            </myStack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation