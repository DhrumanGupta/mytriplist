import Layout from "./components/Layout";
import {Switch, Route} from 'react-router-dom';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import './stylesheets/Common.scss';

function App() {
	return (
		<Layout>
			<Switch>
				<Route exact path={'/'} component={Home}/>
				<Route exact path={'/browse'} component={Home}/>
				<Route exact path={'/create'} component={Home}/>
				<Route exact path={'/view/:id'} component={Home}/>
				<Route component={NotFound}/>
			</Switch>
		</Layout>
	);
}

export default App;
