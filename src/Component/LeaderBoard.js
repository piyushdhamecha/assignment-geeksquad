import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'

import LeaderBoardTable from './LeaderBoardTable'

export const ROUTE_BUTTONS = [
  {
    id: 'rank',
    name: 'Rank',
    type: 'number',
  },
  {
    id: 'name',
    name: 'Name',
    type: 'string',
  },
  {
    id: 'points',
    name: 'Points',
    type: 'number',
  },
  {
    id: 'age',
    name: 'Age',
    type: 'number',
  },
]

function LeaderBoard(props) {
	const handleButtonClick = (e) => {
		const { history } = props
		const dataTestId = e.target.dataset.testid
		const routeName = dataTestId.split('-')[1]

		history.push(`/${routeName}`)
	}

	return (
    <div className='text-center mt-50'>
      <div>
        <div>
          {ROUTE_BUTTONS.map(({ id, name }) => (
            <button data-testid={`route-${id}`} className='outlined' type='button' key={id} onClick={handleButtonClick}>
              {name}
            </button>
          ))}
        </div>
        <Switch>
					<Route path={`/:sortKey`}>
						<LeaderBoardTable />
					</Route>
          <Route path='/'>
            <LeaderBoardTable />
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default withRouter(LeaderBoard)
