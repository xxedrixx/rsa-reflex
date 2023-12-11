import { Fragment } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Container, Text } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import NextHead from "next/head"



export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Container>
  <Text>
  {`This is a simple project to try out reflex`}
</Text>
</Container>
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
