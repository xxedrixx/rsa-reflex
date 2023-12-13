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
</HStack>
</Box>
</Flex>
  <VStack alignItems={`start`} sx={{"paddingX": "25px"}}>
  <HStack>
  <Text>
  {`This is a simple project to try out `}
</Text>
  <Link as={NextLink} href={`https://reflex.dev`} isExternal={true} sx={{"textDecoration": "underline", "color": "black", "_hover": {"color": "blue", "textDecoration": "underline"}}}>
  {`Reflex.`}
</Link>
</HStack>
  <Text>
  {`Reflex is a full-stack framework for building and deploying web applications. It aids in creating both front-end and back-end of your web app completely in Python.`}
</Text>
  <Text>
  {`Reflex was created with the following goals:`}
</Text>
  <Text as={`b`}>
  {`Pure Python`}
</Text>
  <Text>
  {`Use Python for everything. Don't worry about learning a new language.`}
</Text>
  <Text as={`b`}>
  {`Easy to Learn`}
</Text>
  <Text>
  {`Build and share your first app in minutes. No webdev experience required.`}
</Text>
  <Text as={`b`}>
  {`Full Flexibility`}
</Text>
  <Text>
  {`Remain as flexible as traditional web frameworks. Reflex is easy to get started with, but powerful enough for advanced use cases.`}
</Text>
  <Text>
  {`Build anything from small data science apps to large, multi-page websites.`}
</Text>
  <Text as={`b`}>
  {`Batteries Included`}
</Text>
  <Text>
  {`No need to reach for a bunch of different tools. Reflex handles the frontend, backend, and deployment of your app.`}
</Text>
</VStack>
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
