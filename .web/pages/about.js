import { Fragment } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Box, Flex, HStack, Image, Link, Text, VStack } from "@chakra-ui/react"
import NextLink from "next/link"
import "focus-visible/dist/focus-visible"
import NextHead from "next/head"



export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <VStack>
  <Flex sx={{"justifyContent": "space-between", "alignItems": "center", "paddingX": "5em", "paddingY": "1em", "width": "100%"}}>
  <Link as={NextLink} href={`/`}>
  <Image src={`/favicon.ico`}/>
</Link>
  <Box>
  <HStack spacing={`3em`}>
  <Link as={NextLink} href={`/about`}>
  {`About`}
</Link>
  <Link as={NextLink} href={`#`}>
  {`Prime Numbers`}
</Link>
  <Link as={NextLink} href={`#`}>
  {`Encryption`}
</Link>
</HStack>
</Box>
</Flex>
  <Text>
  {`This is a simple project to try out reflex`}
</Text>
</VStack>
  <NextHead>
  <title>
  {`RSA - About`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
