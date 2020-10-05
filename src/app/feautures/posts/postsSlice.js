import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    id: '1',
    title: 'First post',
    content: 'Hola',
  },
  {
    id: '1',
    title: 'Second post',
    content: 'more text',
  },
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: (state, action) => {
      state.push(action.payload)
    },
  },
})

export const { postAdded } = postsSlice.actions

export default postsSlice.reducer

// export const counterSlice = createSlice({
//     name: 'counter',
//     initialState: {
//       value: 0
//     },
//     reducers: {
//       increment: state => {
//         state.value += 1
//       },
//       decrement: state => {
//         state.value -= 1
//       },
//       incrementByAmount: (state, action) => {
//         state.value += action.payload
//       }
//     }
//   })

//   export const { increment, decrement, incrementByAmount } = counterSlice.actions

//   export default counterSlice.reducer
