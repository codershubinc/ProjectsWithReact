# Routers in react 
# Import router
#### npm install react-router-dom localforage match-sorter sort-by
- in main.jsx file use  ```<RouterProvider router={router} />```
- and use ```const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}> <Route path="user/:id" element={<User/>} />
    </Route>)```