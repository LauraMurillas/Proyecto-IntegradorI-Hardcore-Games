'use strict'

import { collection,  getDocs,  addDoc,  query,  where,  updateDoc } from 'firebase/firestore'
import { db } from '../firebase-config'

const userCollection = collection(db, 'users')

const defaultUser = {
  level: 1,
  collectibles: 0,

  //Cuatro checkpoints por nivel
  checkpoint_level_one: {
    1: false,
    2: false,
    3: false,
    4: false,
  },
  checkpoint_level_two: {
    1: false,
    2: false,
    3: false,
    4: false,
  },
  checkpoint_level_three: {
    1: false,
    2: false,
    3: false,
    4: false,
  },
  checkpoint_level_four: {
    1: false,
    2: false,
    3: false,
    4: false,
  },
  lives: 3,
  pos_level_one: {
    x: 0,
    y: 10,
    z: 0,
  },
  pos_level_two: {
    x: 0,
    y: 10,
    z: 0,
  },
  pos_level_three: {
    x: 0,
    y: 10,
    z: 0,
  },
  pos_level_four: {
    x: 0,
    y: 10,
    z: 0,
  },
}

export const createUser = async (dataUser) => {
  const user = {
    uid: dataUser.uid,
    name: dataUser.name,
    email: dataUser.email,
    ...defaultUser,
  }

  try {
    const res = await addDoc(userCollection, user)
    return {
      success: true,
      data: res,
    }
  } catch (error) {
    return {
      success: false,
      error,
    }
  }
}

export const getUser = async (email) => {
  try {
    const res = await getDocs(
      query(userCollection, where('email', '==', email))
    )

    if (res.empty) {
      return {
        success: false,
        data: null,
      }
    }
    const data = res.docs.map((doc) => doc.data())
    return {
      success: true,
      data,
    }
  } catch (error) {
    return {
      success: false,
      error,
    }
  }
}

export const updateUser = async (email, userData) => {
  try {
    const res = await getDocs(
      query(userCollection, where('email', '==', email))
    )
    if (res.empty) {
      return {
        success: false,
        data: null,
      }
    }
    const user = res.docs[0]
    await updateDoc(user.ref, userData)
    return {
      success: true,
    }
  } catch (error) {
    return {
      success: false,
      error,
    }
  }
}