import { Box } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Search = () => {
  const { key } = useParams();
  const [searchObj, setSearchObj] = useState(null);

  useEffect(() => {
    const dumb = async () => {
      const data = await axios.get(
        `http://localhost:6969/property/search/${key}`
      );
      setSearchObj(data);
    };
    dumb();
  }, [key]);
  console.log('search-data', searchObj);

  return (
    <Box>
      Showing result for:{key}
      <Box></Box>
    </Box>
  );
};

export default Search;
