import NextLink from "next/link"
import {
    Container,
    Box,
    Heading,
    useColorModeValue,
    Link,
    Button
} from "@chakra-ui/react"
import Paragraph from "../components/paragraph"
import Section from "../components/section"
import { ChevronRightIcon } from "@chakra-ui/icons"
import { BioSection, BioYear } from "../components/bio"

const Page = () => {
    return (
        <Container>
            <Box
                borderRadius="lg"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                p={3}
                mb={6}
                align="center"
            >
                Mmm...what can I say?
            </Box>
            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Isaac Maldonado - V1.0
                    </Heading>
                    <p>(Something awesome)</p><Link href="https://youtu.be/bSMZgXzC9AA/">Original work</Link>
                </Box>
            </Box>
            <Section delay={0.1} >
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                    I got to think about this...
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href='/works'>
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal" >
                            My portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>
            <Section delay={0.2} >
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>1999</BioYear>
                    Born in Guatemala City, Guatemala.
                </BioSection>
                <BioSection>
                    <BioYear>2021 to present</BioYear>
                    Works as software developer at{' '}<Link href="https://devsu.com/">Devsu</Link>.
                </BioSection>
                <BioSection>
                    <BioYear>2022</BioYear>
                    Completed studies in Science and Systems Engineering at{' '}<Link href="https://portal.ingenieria.usac.edu.gt/">San Carlos University of Guatemala</Link>.
                </BioSection>
            </Section>
            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    I love
                </Heading>
                <Paragraph>
                    Movies, playing piano, travel, photography, video games.
                </Paragraph>
            </Section>

        </Container>
    )
}

module.exports = Page