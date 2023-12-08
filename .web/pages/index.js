import { Fragment, useCallback, useContext } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Text, VStack } from "@chakra-ui/react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, isTrue } from "/utils/state"
import "focus-visible/dist/focus-visible"
import NextHead from "next/head"



export function Fragment_9680fdcbedf302585b267b92e4ccf55b () {
  const state__number_input_state = useContext(StateContexts.state__number_input_state)


  return (
    <Fragment>
  {isTrue(state__number_input_state.is_prime) ? (
  <Fragment>
  <Text sx={{"color": "green"}}>
  {state__number_input_state.p}
  {` is prime`}
</Text>
</Fragment>
) : (
  <Fragment>
  <Text sx={{"color": "red"}}>
  {state__number_input_state.p}
  {` is NOT prime`}
</Text>
</Fragment>
)}
</Fragment>
  )
}

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

export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <VStack>
  <Numberinput_988600d4e3cc7203dd3b7f82d1220e6a/>
  <Fragment_9680fdcbedf302585b267b92e4ccf55b/>
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
