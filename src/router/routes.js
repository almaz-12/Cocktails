import HomePage from '@/pages/HomePage.vue'
import CocktailPage from '@/pages/CocktailPage.vue'
import CocktailRandomPage from '@/pages/CocktailRandomPage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue';
import { ROUTES_PATHS } from '@/constants';

export default [
  {
    path: ROUTES_PATHS.HOME,
    name: ROUTES_PATHS.HOME,
    component: HomePage,
  },
  {
    path: ROUTES_PATHS.COCKTAIL,
    name: ROUTES_PATHS.COCKTAIL,
    component: CocktailPage,
    props: true,
  },
  {
    path: ROUTES_PATHS.COCKTAIL_RANDOM,
    name: ROUTES_PATHS.COCKTAIL_RANDOM,
    component: CocktailRandomPage,
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundPage,
  },
]
