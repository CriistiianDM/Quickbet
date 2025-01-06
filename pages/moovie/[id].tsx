// React
import React from 'react'

// Use Router
import { useRouter } from 'next/router';

// Components
import Layout from '../../src/components/layout/LayoutMoovie.tsx'

const DATA = {
    sectionImg: '/assets/banner/banner2.png',
    imgMoovie: '/assets/banner/rec3.png',
    title: 'Top Gun Maverick (2022)',
    overview: '"Top Gun: Maverick" is a high-octane action drama that serves as a sequel to the iconic 1986 film "Top Gun." Directed by Joseph Kosinski, the movie follows Captain Pete "Maverick" Mitchell, played by Tom Cruise, who has spent over thirty years as a naval aviator, dodging promotions that would ground him. When he is assigned to train a new generation of Top Gun graduates for a specialized mission, he confronts his past and the ghosts of his fallen friends.',
    porcentage: 0.98,
    actions: [
        'Aviation',
        'Fighter Jets',
        'Military',
        'Action',
        'Sequel',
        'Friendship',
        'Legacy',
        'Mentorship',
        'Aerial Combat',
        'Naval Aviation'
    ]
}

/**
 * Page Moovie
 */
export default ({ moovie }) => {
  const router = useRouter();
  const { id } = router.query;
  
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
        <Layout data={DATA} />
    </React.Fragment>
  );
}