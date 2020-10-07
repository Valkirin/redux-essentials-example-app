import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './feautures/posts/postsSlice'
import usersReducer from './feautures/users/usersSlice'

export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
})
