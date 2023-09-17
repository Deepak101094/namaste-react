# Namaste React 🔥

# Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm => written in c++
- Caching - Faster Build
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling
- Diagnostic
- Error Handling
- HTTPs
- Tree shaking - remove unused code
- Different dev and prod bundles

# Namaste Food

// React.createElement => Object => HTMLElement(render)
/\*\*

- Header
- - Logo
- - Nav Items
- Body
- - Search
- - RestaurantContainer
- - RestaurantCard
- - Img
- - Name of Restaurant, star, Rating, cuisine, Delivery time
- Footer
- - CopyRight
- - Link
- - Address
- - Contact
    \*/

# 2 types of Routing in web apps

- Client Side Routing
- Server Side Routing

# lifecycle of the component

- ---MOUNTING---

  --> Constructor will call with initial state
  --> Render will call with (initial data or dummy data)
  --> <HTML (load with dummy data)>
  --> Component Did Mount will call
  -- <API call>
  -- <this.setState> --> state variable is updated

- ---UPDATING---

  --> Render call with (API data)
  --> <HTML (load with new API data)>
  --> Component Did Update

  - ---UNMOUNTING---

  --> Component Will UnMount

# render phase and commit phase

- Render Phase => when render phase start react will start reconciliation and finding the difference between old virtual DOM to updated virtual DOM, once it found the difference than render phase completed.

- Commit Phase => React will start updating the DOM than DOM gets updated

# Types of testing

- Unit Testing
- Integration Testing
- End to End Testing - e2e Testing

# Setting up Testing in our app

- Install React Testing Library
- Install Jest
- Install Babel dependencies
- Configure Babel
- Configure Parcel Config file to disable default babel transpilation
- jest configuration
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react inside my babel config
- Install @testing-library/jest-dom
