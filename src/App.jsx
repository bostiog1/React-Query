import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/Home";
import { SuperHeroes } from "./components/SuperHeroes";
import { RQSuperHeroes } from "./components/RQSuperHeroes";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import RQSuperHero from "./components/RQSuperHero";
import { ParalelQueries } from "./components/ParalelQueries";
import { DynamicParallelPage } from "./components/DynamicParalelQueries";
import { DependentQueriesPage } from "./components/DependendQueries";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route
              path="/rq-dependent"
              element={<DependentQueriesPage email="teo@example.com" />}
            />
            <Route
              path="/rq-dynamic-paralel"
              element={<DynamicParallelPage heroIds={[1, 2]} />}
            />
            <Route path="/rq-paralel" element={<ParalelQueries />} />
            <Route path="/rq-super-heroes/:heroId" element={<RQSuperHero />} />
            <Route path="/super-heroes" element={<SuperHeroes />} />
            <Route path="/rq-super-heroes" element={<RQSuperHeroes />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
