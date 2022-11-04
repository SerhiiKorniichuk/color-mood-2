import { useIMask } from 'react-imask'
import { PureInput } from 'components/PureInput/PureInput'
import { useEffect } from 'react'
import { INPUT_MASKS } from 'components/MaskedInput/MaskedInput.masks'
import { IMaskedInput } from 'components/MaskedInput/MaskedInput.types'

function MaskedInput({
  maskType = 'HEX',
  value = '',
  onChange,
  ...props
}: IMaskedInput) {
  const {
    ref,
    value: localValue,
    setValue: localSetValue,
  } = useIMask(INPUT_MASKS[maskType], {})

  useEffect(() => {
    localSetValue(value)
  }, [localSetValue, value])

  return (
    <PureInput
      ref={ref}
      value={localValue}
      onChange={(event) => localSetValue(event.target.value)}
      {...props}
    />
  )
}

export { MaskedInput }
