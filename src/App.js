import logo from "./logo.svg";
import "./App.css";
import FeatureCard from "./components/FeatureCard";
import SearchInput from "./stories/SearchInput";
import IconCard from "./components/IconCard";
import Search from "./stories/Search";

function App() {
  return (
    <div className="mb-5">
      <FeatureCard image="https://template.inserviz.com/assets/images/bg/job-list-2.png" />
      <SearchInput />
      {/* <Search /> */}
      {/* <IconCard /> */}
    </div>
  );
}

export default App;
