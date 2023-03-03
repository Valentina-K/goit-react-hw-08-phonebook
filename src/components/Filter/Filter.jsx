import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filter/slice';
import { Heading, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import { selectFilter } from 'redux/filter/selectors';
const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <>
      <Heading as="h3" size="lg">
        Find contact by name
      </Heading>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<Search2Icon color="gray.400" />}
        />
        <Input type="text" value={filter} onChange={handleChange} />
      </InputGroup>
    </>
  );
};

export default Filter;
