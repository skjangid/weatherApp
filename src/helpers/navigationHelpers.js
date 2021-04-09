import { NavigationActions, DrawerActions, StackActions } from 'react-navigation'

let navigatorRef = null

export const setNavigationRef = ( ref ) => {
  navigatorRef = ref
}

export const navigate = ( navigationConfig ) => {
  navigatorRef.dispatch(
    NavigationActions.navigate( navigationConfig )
  )
}

// Not working
export const replace = ( navigationConfig ) => {
  navigatorRef.dispatch(
    StackActions.replace( navigationConfig )
  )
}

export const push = ( navigationConfig ) => {
  navigatorRef.dispatch(
    StackActions.push( navigationConfig )
  )
}

export const pop = () => {
  navigatorRef.dispatch(
    StackActions.pop({})
  )
}

export const back = () => {
  navigatorRef.dispatch(
    NavigationActions.back()
  )
}

export const openDrawer = () => {
  navigatorRef.dispatch(
    DrawerActions.openDrawer()
  )
}

export const closeDrawer = () => {
  navigatorRef.dispatch(
    DrawerActions.closeDrawer()
  )
}

export const popToTop = () => {
  navigatorRef.dispatch(
    StackActions.popToTop({})
  )
}
export const resetNavStack = ( resetConfig ) => {
  navigatorRef.dispatch(
    StackActions.reset( resetConfig )
  )
}
