import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius={'lg'} bg={'red'} p={3} mb={6} align='center' >
        Hello, i&apos;m a full stack developer base in Vietnam ☭
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as={'h2'} variant={'page-title'}>
            Nguyen Sy Manh

          </Heading>
          <p>Digital Craftzman ( Artish / Developer / Designer)</p>
        </Box>
      </Box>
    </Container>
  )
}
export default Page