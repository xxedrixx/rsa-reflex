import { Fragment, useCallback, useContext } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Container, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Text } from "@chakra-ui/react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, isTrue } from "/utils/state"
import "focus-visible/dist/focus-visible"
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

export function Fragment_09d9e8253db0e0bb9f93183fe0a05940 () {
  const state__number_input_state = useContext(StateContexts.state__number_input_state)
  const [addEvents, connectError] = useContext(EventLoopContext);


  return (
    <Fragment>
  {isTrue(state__number_input_state.is_prime_p) ? (
  <Fragment>
  <Container>
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
  <NumberInput min={0} onChange={(_e0) => addEvents([Event("state.number_input_state.set_r", {value:_e0})], (_e0), {})}>
  <NumberInputField/>
  <NumberInputStepper>
  <NumberIncrementStepper/>
  <NumberDecrementStepper/>
</NumberInputStepper>
</NumberInput>
</Fragment>
) : (
  <Fragment>
  <Text sx={{"color": "red"}}>
  {state__number_input_state.q}
  {` is NOT prime`}
</Text>
</Fragment>
)}
</Fragment>
</Container>
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

export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Container>
  <Numberinput_988600d4e3cc7203dd3b7f82d1220e6a/>
  <Fragment_09d9e8253db0e0bb9f93183fe0a05940/>
</Container>
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
