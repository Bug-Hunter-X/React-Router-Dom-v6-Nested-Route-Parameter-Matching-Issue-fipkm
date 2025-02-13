```javascript
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:userId/profile" element={<UserProfile />} />
        {/* ...other routes */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <div>Home</div>;
}

function About() {
  return <div>About</div>;
}

function UserProfile() {
  const { userId } = useParams();
  return (
    <div>
      <h1>User Profile</h1>
      <p>User ID: {userId}</p>
    </div>
  );
}
export default App;
```