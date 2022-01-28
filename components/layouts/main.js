import Head from 'next/head';
import dynamic from 'next/dynamic'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar.js';
import VoxelObjectLoader from '../voxel-object-loader.js';

const LazyVoxelObject = dynamic(() => import('../voxel-object'), {
    ssr: false,
    loading: () => <VoxelObjectLoader />
})

const Main = ({ children, router }) => {
    return (
        <Box as='main' pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Isaac Maldonado - Homepage</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                <LazyVoxelObject />
                {children}
            </Container>
        </Box>
    )
}

export default Main