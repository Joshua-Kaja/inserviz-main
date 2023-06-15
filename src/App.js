import "./App.css"
import Account from "./components/Account"
import FeatureCard from "./components/FeatureCard"
import Features from "./components/Features"
import JobFeature from "./components/JobFeature"


import SearchInput from "./stories/SearchInput"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="mb-5">
      <Router>
        <FeatureCard image="https://template.inserviz.com/assets/images/bg/job-list-2.png"/>
        <SearchInput />
        <Routes>
          <Route path="account" element={<Account/>}/>
        </Routes>
        <Features/>
        <JobFeature />
      </Router>
    
    </div>
  );
}

export default App
