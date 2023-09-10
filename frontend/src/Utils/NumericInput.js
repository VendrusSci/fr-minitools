import {
    NumberInput,
    NumberInputControl,
    NumberInputDecrementTrigger,
    NumberInputInput,
    NumberInputIncrementTrigger
  } from '@ark-ui/react'

  export function NumericInput(props){

    return(
        <NumberInput className='Minitools-numberInput' 
            min={props.min} max={props.max} onChange={(e) => props.onChange(parseInt(e.value))} value={props.value}
            format={(value) => value.toLocaleString()} parse={(value) => value.replace(/\D/g,'')}>
            <NumberInputInput className='Minitools-numberInputInput'/>
            <NumberInputControl>
                <NumberInputDecrementTrigger>–</NumberInputDecrementTrigger>
                <NumberInputIncrementTrigger>+</NumberInputIncrementTrigger>
            </NumberInputControl>
        </NumberInput>
    )
  }