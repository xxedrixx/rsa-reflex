import { Fragment, useCallback, useContext } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Box, Button, Flex, HStack, Image, Link, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Text, Textarea, VStack } from "@chakra-ui/react"
import NextLink from "next/link"
import "focus-visible/dist/focus-visible"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, isTrue } from "/utils/state"
import NextHead from "next/head"



export function Numberinput_988600d4e3cc7203dd3b7f82d1220e6a () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_change_d84fa6cfb66f1741f7cb63ce0aed5c39 = useCallback((_e0) => addEvents([Event("state.number_input_state.set_p", {value:_e0})], (_e0), {}), [addEvents, Event])

  return (
    <NumberInput min={0} onChange={on_change_d84fa6cfb66f1741f7cb63ce0aed5c39}>
  <NumberInputField/>
  <NumberInputStepper>
  <NumberIncrementStepper/>
  <NumberDecrementStepper/>
</NumberInputStepper>
</NumberInput>
  )
}

export function Fragment_1095eaa846bdc1d07667616e348cdb05 () {
  const state__number_input_state = useContext(StateContexts.state__number_input_state)
  const [addEvents, connectError] = useContext(EventLoopContext);


  return (
    <Fragment>
  {isTrue(state__number_input_state.is_prime_p) ? (
  <Fragment>
  <VStack>
  <Text>
  {`p=`}
  {state__number_input_state.p}
</Text>
  <Text>
  {`Enter q`}
</Text>
  <NumberInput min={0} onChange={(_e0) => addEvents([Event("state.number_input_state.set_q", {value:_e0})], (_e0), {})}>
  <NumberInputField/>
  <NumberInputStepper>
  <NumberIncrementStepper/>
  <NumberDecrementStepper/>
</NumberInputStepper>
</NumberInput>
  <Fragment>
  {isTrue(state__number_input_state.is_prime_q) ? (
  <Fragment>
  <VStack>
  <Text>
  {`q=`}
  {state__number_input_state.q}
</Text>
  <Text>
  {`Enter r`}
</Text>
  <NumberInput min={0} onChange={(_e0) => addEvents([Event("state.number_input_state.set_r", {value:_e0})], (_e0), {})}>
  <NumberInputField/>
  <NumberInputStepper>
  <NumberIncrementStepper/>
  <NumberDecrementStepper/>
</NumberInputStepper>
</NumberInput>
  <Fragment>
  {isTrue(state__number_input_state.is_prime_r) ? (
  <Fragment>
  <VStack>
  <Text>
  {`r=`}
  {state__number_input_state.r}
</Text>
  <Text>
  {`n=`}
  {state__number_input_state.n}
</Text>
  <Text>
  {`L=`}
  {state__number_input_state.L}
</Text>
  <Textarea onChange={(_e0) => addEvents([Event("state.number_input_state.set_message", {text:_e0.target.value})], (_e0), {})} placeholder={`Enter message`} sx={{"width": "500px"}}/>
  <Text as={`b`}>
  {`To ASCII`}
</Text>
  <Text>
  {state__number_input_state.to_ascii_string}
</Text>
  <Button onClick={(_e) => addEvents([Event("state.number_input_state.encryption", {})], (_e), {})}>
  {`Encrypt`}
</Button>
  <Text as={`b`}>
  {`Encrypted ASCII`}
</Text>
  <Text sx={{"color": "orange"}}>
  {state__number_input_state.encrypted_string}
</Text>
  <Button onClick={(_e) => addEvents([Event("state.number_input_state.decryption", {})], (_e), {})}>
  {`Decrypt`}
</Button>
  <Text as={`b`}>
  {`Decrypted ASCII`}
</Text>
  <Text sx={{"color": "orange"}}>
  {state__number_input_state.decrypted_string}
</Text>
  <Text as={`b`}>
  {`Decrypted message`}
</Text>
  <Text>
  {state__number_input_state.to_string}
</Text>
</VStack>
</Fragment>
) : (
  <Fragment>
  <Text sx={{"color": "red"}}>
  {state__number_input_state.r}
  {` and `}
  {state__number_input_state.L}
  {` are NOT coprime r`}
</Text>
</Fragment>
)}
</Fragment>
</VStack>
</Fragment>
) : (
  <Fragment>
  <Text sx={{"color": "red"}}>
  {state__number_input_state.q}
  {` is NOT prime q`}
</Text>
</Fragment>
)}
</Fragment>
</VStack>
</Fragment>
) : (
  <Fragment>
  <Text sx={{"color": "red"}}>
  {state__number_input_state.p}
  {` is NOT prime p`}
</Text>
</Fragment>
)}
</Fragment>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <VStack sx={{"paddingBottom": "5em"}}>
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
  {`Enter p`}
</Text>
  <Numberinput_988600d4e3cc7203dd3b7f82d1220e6a/>
  <Fragment_1095eaa846bdc1d07667616e348cdb05/>
</VStack>
  <NextHead>
  <title>
  {`RSA`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
