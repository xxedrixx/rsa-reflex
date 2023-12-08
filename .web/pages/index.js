import { Fragment, useCallback, useContext } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Text, Textarea, VStack } from "@chakra-ui/react"
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

export function Fragment_58a9eddd3c282a884f38c6f002c252ef () {
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
  <Textarea placeholder={`Enter message`}/>
</VStack>
</Fragment>
) : (
  <Fragment>
  <Text sx={{"color": "red"}}>
  {state__number_input_state.r}
  {` is NOT prime r`}
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
  <VStack>
  <Text>
  {`Enter p`}
</Text>
  <Numberinput_988600d4e3cc7203dd3b7f82d1220e6a/>
  <Fragment_58a9eddd3c282a884f38c6f002c252ef/>
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
