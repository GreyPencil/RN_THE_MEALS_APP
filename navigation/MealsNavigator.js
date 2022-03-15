import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const Stack = createStackNavigator();

const MealsNavigator = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="Category Meals" component={CategoryMealsScreen} />
        <Stack.Screen name="Meal Detail" component={MealDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default MealsNavigator;
