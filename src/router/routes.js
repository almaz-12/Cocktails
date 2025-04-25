import HomePage from '@/pages/HomePage.vue'
import CocktailPage from '@/pages/CocktailPage.vue'
import CocktailRandomPage from '@/pages/CocktailRandomPage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue';

export default [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/cocktails/:rid',
    name: 'cocktail',
    component: CocktailPage,
    props: true,
  },
  {
    path: '/cocktail/random',
    name: 'cocktailRandom',
    component: CocktailRandomPage,
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundPage,
  },
]
