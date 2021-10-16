
import * as React from 'react';
import { Searchbar } from 'react-native-paper';

const MyComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Busca aqui los articulos"
      onChangeText={onChangeSearch}
      value={searchQuery}
      icon="magnify"
    />
  );
};

export default MyComponent;