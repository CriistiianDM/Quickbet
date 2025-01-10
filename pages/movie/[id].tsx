// React
import React from 'react'

// Use Router
import { useRouter } from 'next/router';

// Components
import Layout from '../../src/components/layout/LayoutMoovie'

// Material IU
import Typography from '@mui/material/Typography';

/**
 * Page Moovie
 */
export default ({ moovie }) => {
  const router = useRouter();
  const { id } = router.query;

  const [movie, setMovie] = React.useState(null)

  const init = async () => {
      if (id === undefined) return
      const response = await fetch(`/api/movies`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: {
            'action': 'search',
            'value': id
          }
        })
      });
      const result = await response.json()
      setMovie(result);
  }
  
  React.useMemo(init,[id])

  return (
    <React.Fragment>
        { 
          movie !== null ? 
          <Layout data={movie} /> :
          <Typography color="white" variant="h4" gutterBottom>
            Search Movie...
          </Typography>
        }
    </React.Fragment>
  );
}