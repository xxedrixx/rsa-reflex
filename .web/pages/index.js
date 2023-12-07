import { Fragment, useCallback, useContext } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Text, VStack } from "@chakra-ui/react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, isTrue } from "/utils/state"
import "focus-visible/dist/focus-visible"
import NextHead from "next/head"



export function Numberinput_efaa36757abc4f151bbbeac7468c4bda () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_change_d84fa6cfb66f1741f7cb63ce0aed5c39 = useCallback((_e0) => addEvents([Event("state.number_input_state.set_p", {value:_e0})], (_e0), {}), [addEvents, Event])

  return (
    <NumberInput onChange={on_change_d84fa6cfb66f1741f7cb63ce0aed5c39}>
  <NumberInputField/>
  <NumberInputStepper>
  <NumberIncrementStepper/>
  <NumberDecrementStepper/>
</NumberInputStepper>
</NumberInput>
  )
}

export function Fragment_ee77768fa62824f79e68217a8f6fd13e () {
  const state__number_input_state = useContext(StateContexts.state__number_input_state)


  return (
    <Fragment>
  {isTrue((state__number_input_state.p === {"event_actions": {}, "fn": null})) ? (
  <Fragment>
  <Text sx={{"color": "red"}}>
  {state__number_input_state.p}
  {`is NOT prime`}
</Text>
</Fragment>
) : (
  <Fragment>
  <Text sx={{"color": "green"}}>
  {state__number_input_state.p}
  {`is prime`}
</Text>
</Fragment>
)}
</Fragment>
  )
}

export function Text_ecf19bb2a734ed57d6aecb6064976051 () {
  const state__number_input_state = useContext(StateContexts.state__number_input_state)


  return (
    <Text>
  {`p is `}
  {state__number_input_state.p}
</Text>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <VStack>
  <Numberinput_efaa36757abc4f151bbbeac7468c4bda/>
  <Text_ecf19bb2a734ed57d6aecb6064976051/>
  <Fragment_ee77768fa62824f79e68217a8f6fd13e/>
</VStack>
  <NextHead>
  <title>
  {`Reflex App`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
