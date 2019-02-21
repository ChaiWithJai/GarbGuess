import axios from 'axios'

//type
const GOT_CLOTHES = 'GOT_CLOTHES'

const initialState = {
  clothes: [],
  singleCloth: {}
}

//action creator
const gotClothes = allClothes => ({
  GOT_CLOTHES,
  allClothes
})

//thunk middleware
export const getAllClothes = userId => async dispatch => {
  try {
    const {data: allClothes} = await axios.get(`/api/${userId}/clothes`)
    dispatch(gotClothes(allClothes))
  } catch (err) {
    console.error(err)
  }
}

//reducer

export default function(state = initialState, action) {
  switch (action.type) {
    case GOT_CLOTHES:
      return {
        ...state,
        clothes: action.clothes
      }
    default:
      return state
  }
}
