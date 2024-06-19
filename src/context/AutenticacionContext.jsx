import React, { createContext, useContext, useReducer, useEffect } from 'react'
import { auth } from '../db/firebase-config'
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'
import { createUser, getUser, updateUser } from '../db/user-collection'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider')
  }
  return context
}

const actionTypes = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  REGISTER: 'REGISTER',
  SET_USER: 'SET_USER',
  SET_LOADING: 'SET_LOADING',
}

const initialState = {
  user: null,
  loading: true,
}

const authReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
    case actionTypes.REGISTER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      }
    case actionTypes.LOGOUT:
      return {
        ...state,
        user: null,
        loading: false,
      }
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
      }
    case actionTypes.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      }
    default:
      return state
  }
}

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState)

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, async (res) => {
      if (res) {
        const user = await getUser(res.email)
        if (user.success) {
          dispatch({ type: actionTypes.LOGIN, payload: user.data[0] })
        } else {
          dispatch({ type: actionTypes.LOGOUT })
        }
      } else {
        dispatch({ type: actionTypes.LOGOUT })
      }
    })

    return () => {
      subscribe()
    }
  }, [])

  const loginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider()
      const res = await signInWithPopup(auth, provider)
      return res
    } catch (error) {
      return error
    }
  }

  const login = async (email, password) => {
    try {
      dispatch({ type: actionTypes.SET_LOADING, payload: true })
      const res = await signInWithEmailAndPassword(auth, email, password)
      return { success: true, user: res }
    } catch (error) {
      return { success: false, error }
    }
  }

  const logout = async () => {
    try {
      await signOut(auth)
      return { success: true }
    } catch (error) {
      return { success: false, error }
    }
  }

  const register = async (userData) => {
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        userData?.email,
        userData?.password
      )
      if (res.user) {
        const user = {
          uid: res.user.uid,
          email: res.user.email,
          name: userData.name,
        }
        const _res = await createUser(user)
        if (_res.success) {
          return { success: true }
        } else {
          return { success: false, error: _res.error }
        }
      } else {
        return { success: false, error: 'Error creando usuario' }
      }
    } catch (error) {
      console.error(error)
      return { success: false, error }
    }
  }

  const editUser = async (user) => {
    try {
      const res = await updateUser(user.email, user)
      if (res.success) {
        dispatch({ type: actionTypes.SET_USER, payload: user })
        return { success: true }
      }
      return { success: false, error: res.error }
    } catch (error) {
      console.error(error)
      return { success: false, error }
    }
  }

  const onTakeCheckpoint = (level, checkpoint, position) => {
    const _user = { ...state.user }
    if (!_user[`checkpoint_${level}`]) {
      _user[`checkpoint_${level}`] = {}
    }
    _user[`checkpoint_${level}`][checkpoint] = true
    _user[`pos_${level}`] = position
    editUser(_user)
  }

  const getCheckpoints = (level) => {
    const checkpoints = state.user ? state.user[`checkpoint_${level}`] : {}
    return checkpoints || {}
  }

  const onPassLevel = (level) => {
    const _user = { ...state.user }
    _user.level = level
    editUser(_user)
  }

  const values = {
    user: state.user,
    loading: state.loading,
    maxHearts: state?.user?.lives,
    level: state?.user?.level,
    checkpointLevelOne: state?.user?.checkpoint_level_one,
    checkpointLevelTwo: state?.user?.checkpoint_level_two,
    checkpointLevelThree: state?.user?.checkpoint_level_three,
    checkpointLevelFour: state?.user?.checkpoint_level_four,
    posLevelOne: state?.user?.pos_level_one,
    posLevelTwo: state?.user?.pos_level_two,
    posLevelThree: state?.user?.pos_level_three,
    posLevelFour: state?.user?.pos_level_four,
  }

  const functions = {
    login,
    register,
    logout,
    onTakeCheckpoint,
    onPassLevel,
    getCheckpoints,  // Añadimos getCheckpoints aquí
  }

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
        loginWithGoogle,
        ...values,
        ...functions,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

