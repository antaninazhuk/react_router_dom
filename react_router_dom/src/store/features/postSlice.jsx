import{ createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async function (_, { rejectWithValue }) {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  
        if (!response.ok) {
          throw new Error("Server error");
        }
  
        const data = await response.json();
        return data
      } catch (error) {
        return rejectWithValue(error.message)
      }
    }
  )
  
  export const removePost = createAsyncThunk(
    'posts/removePost',
    async function (id, { rejectWithValue, dispatch }) {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
          method: 'DELETE'
        });
  
        if (!response.ok) {
          throw new Error("Can't remove post. Server error");
        }
  
        dispatch(deletePost({ id }))
      } catch (error) {
        return rejectWithValue(error.message)
      }
    }
  )
  
//   export const addNewTodo = createAsyncThunk(
//     'todos/addNewTodo',
//     async function (text, { rejectWithValue, dispatch }) {
//       try {
//         const todo = {
//           title: text,
//           userId: 1,
//           completed: false
//         }
  
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(todo)
//         });
  
//         if (!response.ok) {
//           throw new Error("Can't add task. Server error");
//         }
  
//         const data = await response.json();
//         dispatch(addTodo(data))
//       } catch (error) {
//         return rejectWithValue(error.message)
//       }
//     }
//   )
  
//   export const toggleTodo = createAsyncThunk(
//     'todos/toggleTodo',
//     async function (id, { rejectWithValue, dispatch, getState }) {
//       const todo = getState().todos.todos.find(todo => todo.id === id);
  
//       try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
//           method: 'PATCH',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             completed: !todo.completed
//           })
//         });
  
//         if (!response.ok) {
//           throw new Error("Can't toggle todo. Server error");
//         }
  
//         dispatch(toggleComplete({ id }))
//       } catch (error) {
//         return rejectWithValue(error.message)
//       }
//     }
//   )
  
//   export const deleteTodo = createAsyncThunk(
//     'todos/deleteTodo',
//     async function (id, { rejectWithValue, dispatch }) {
//       try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
//           method: 'DELETE'
//         });
  
//         if (!response.ok) {
//           throw new Error("Can't delete todo. Server error");
//         }
  
//         dispatch(removeTodo({ id }))
//       } catch (error) {
//         return rejectWithValue(error.message)
//       }
//     }
//   )
  
  const postSlice = createSlice({
    name: 'posts',
    initialState: {
      posts: [],
      status: null,
      error: null
    },
    reducers: {     
      deletePost(state, action) {
        state.posts = state.posts.filter(post => post.id !== action.payload.id)
      }
    },
       
    extraReducers: {
      [fetchPosts.pending]: (state) => {
        state.status = 'loading';
        state.error = null
      },
      [fetchPosts.fulfilled]: (state, action) => {
        state.status = 'resolved';
        state.posts = action.payload;
      },
      [fetchPosts.rejected]: (state, action) => {
        state.status = 'rejected';
        state.error = action.payload
      }
    }
  })
  
  export const { deletePost } = postSlice.actions;
  
  export default postSlice.reducer;