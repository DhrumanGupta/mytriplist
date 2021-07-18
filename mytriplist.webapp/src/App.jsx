import Layout from "./components/Layout";
import {Switch, Route} from 'react-router-dom';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import './stylesheets/Common.scss';
import CreateTrip from "./pages/CreateTrip";
import Browse from "./pages/Browse";
import View from "./pages/View";

function App() {
	return (
		<Layout>
			<Switch>
				<Route exact path={'/'} component={Home}/>
				<Route exact path={'/browse'} component={Browse}/>
				<Route exact path={'/create'} component={CreateTrip}/>
				<Route exact path={'/view/:id'} component={View}/>
				<Route component={NotFound}/>
			</Switch>
		</Layout>
	);
}

export default App;
