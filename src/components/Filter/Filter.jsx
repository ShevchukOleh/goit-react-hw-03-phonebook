import { Input, Label} from './Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ value, onFilter }) => {
    return (
        <Label>Find contacts by name
            <Input onChange={onFilter} value={value} name="filter" />
        </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onFilter: PropTypes.func.isRequired,
};