import axios from 'axios'

//type
const GOT_CLOTHES = 'GOT_CLOTHES'
const GOT_CLOTH = 'GOT_CLOTH'

const initialState = {
  clothes: [],
  singleCloth: {}
}

//action creator
const gotClothes = allClothes => ({
  type: GOT_CLOTHES,
  allClothes
})

const gotCloth = cloth => ({
  type: GOT_CLOTH,
  cloth
})

//thunk middleware
export const getAllClothes = userId => async dispatch => {
  try {
    const {data: clothesFromThunk} = await axios.get(
      `/api/users/${userId}/clothes`
    )
    console.log('allClothes', clothesFromThunk)
    dispatch(gotClothes(clothesFromThunk))
  } catch (err) {
    console.error(err)
  }
}

export const getCloth = (cloth, userId) => {
  return async dispatch => {
    try {
      const {data: clothObj} = await axios.post(
        `/api/users/${userId}/clothes`,
        {
          cloth
        }
      )
      dispatch(gotCloth(clothObj))
    } catch (err) {
      console.error('Issue with posting your cloth', err.message)
    }
  }
}

//reducer

export default function(state = initialState, action) {
  switch (action.type) {
    case GOT_CLOTHES:
      return {
        ...state,
        clothes: action.allClothes
      }
    case GOT_CLOTH:
      return {
        ...state,
        singleCloth: action.cloth
      }
    default:
      return state
  }
}
