// React
import React from 'react'

// Components
import Layout from '../src/components/layout/Layout.tsx'
import Section from '../src/components/sliderSection/Section'

/**
 * Index Page
 */
export default () => {
    return (
        <React.Fragment>
            <Layout>
                <Section />
            </Layout>
        </React.Fragment>
    )
}