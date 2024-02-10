import '@vkontakte/vkui/dist/vkui.css';
import Routing from 'pages';

import './styles/index.scss'
import { WithUser } from './providers/with-user';
import { WithRouter } from './providers/with-router';

const App = () => {
	
    return (
		<WithUser>
			<WithRouter>
            	<Routing />
			</WithRouter>
		</WithUser>
    )
}

export default App;
