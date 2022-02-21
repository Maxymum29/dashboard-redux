import { useSelector, useDispatch } from 'react-redux';

import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';

import {selectFilters} from '../store/filters/filterSelector'
import { clearFilter, removeFilter } from 'store/filters/filterActions';

const FilterPanel = () => {
  const currentFilters = useSelector(selectFilters);
  const dispatch = useDispatch()

  if (currentFilters.length === 0) {
    return null
  }

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {currentFilters.map(filter => (
            <Badge key={filter} onClear={() => dispatch(removeFilter(filter))} variant="clearable">{filter}</Badge>
          ))}
        </Stack>

        <button onClick={() => dispatch(clearFilter())} className='link'>Clear</button>
      </div>
    </Card>
  )
}

export {FilterPanel};