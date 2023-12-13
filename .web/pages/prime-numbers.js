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
  <Flex sx={{"justifyContent": "space-between", "alignItems": "center", "paddingX": "5em", "paddingY": "10px", "width": "100%", "boxShadow": "0px 1px 2px 0px rgba(0, 0, 0, 0.2)"}}>
  <Link as={NextLink} href={`/`}>
  <Image src={`/favicon.ico`} sx={{"width": "25px", "height": "25px"}}/>
</Link>
  <Box>
  <HStack spacing={`3em`}>
  <Link as={NextLink} href={`/`} sx={{"_hover": {"textDecoration": "none"}}}>
  {`Home`}
</Link>
  <Link as={NextLink} href={`/about`} sx={{"_hover": {"textDecoration": "none"}}}>
  {`About`}
</Link>
  <Link as={NextLink} href={`/prime-numbers`} sx={{"_hover": {"textDecoration": "none"}}}>
  {`Prime Numbers`}
</Link>
  <Link as={NextLink} href={`/encryption`} sx={{"_hover": {"textDecoration": "none"}}}>
  {`Encryption`}
</Link>
</HStack>
</Box>
</Flex>
  <Text>
  {`Prime numbers page`}
</Text>
</VStack>
  <NextHead>
  <title>
  {`RSA - Prime Numbers`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
