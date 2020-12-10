import React, {useState, useEffect, useCallback} from 'react';
import { useParams } from 'react-router-dom'

import { response } from '../response';
import {ROUTE_BUTTONS} from './LeaderBoard'

const LeaderBoardTable = () => {
  const [currentSortKey, setCurrentSortKey] = useState()
  const [data, setData] = useState(response.list)
  const { sortKey } = useParams()
  
  const handleSort = useCallback((sortColumnType, sortKey) => (a, b) => {
    const firstValue = a[sortKey]
    const secondValue = b[sortKey]

    if (sortColumnType === 'string') {
      return firstValue.toLowerCase() < secondValue.toLowerCase() ? -1 : 1
    }

    return firstValue - secondValue
  }, [])

  useEffect(() => {
    if (sortKey !== currentSortKey) {
      const sortColumnType = ROUTE_BUTTONS.find(({ id }) => id === sortKey).type
      const initList = [...response.list]
      
      setData(initList.sort(handleSort(sortColumnType, sortKey)))
      setCurrentSortKey(sortKey)
    }
  }, [sortKey, currentSortKey, handleSort])

  
  return (
    <div>
      <div className="card mx-auto pb-20 mb-30" style={{ width: '50%' }}>
				<table className="mt-50" data-testid="app-table">
					<thead>
						<tr>
							<th>Rank</th>
							<th>Name</th>
							<th className="numeric">Points</th>
							<th className="numeric">Age</th>
						</tr>
					</thead>
          <tbody data-testid="app-tbody">
            {data.map(({ rank, name, points, age}, index) => (
              <tr key={rank}>
                <td data-testid={`rank-${index}`}>{rank}</td>
                <td data-testid={`name-${index}`}>{name}</td>
                <td data-testid={`points-${index}`} className="numeric">{points}</td>
                <td data-testid={`age-${index}`} className="numeric">{age}</td>
              </tr>
            ))}
					</tbody>
				</table>
			</div>
    </div>
  );
};

export default LeaderBoardTable;
