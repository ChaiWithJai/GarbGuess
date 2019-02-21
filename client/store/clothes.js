import axios from 'axios'

//type
const GOT_CLOTHES = 'GOT_CLOTHES'

const initialState = {
  clothes: [],
  singleCloth: {}
}

//action creator
const gotClothes = allClothes => ({
  type: GOT_CLOTHES,
  allClothes
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

//reducer

export default function(state = initialState, action) {
  switch (action.type) {
    case GOT_CLOTHES:
      return {
        ...state,
        clothes: action.allClothes
      }
    default:
      return state
  }
}
