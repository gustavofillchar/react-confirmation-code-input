import React from 'react'
import { ConfirmationCodeInput } from './ConfirmationCodeInput'

export default {
  component: ConfirmationCodeInput,
  title: 'ConfirmationCodeInput',
  parameters: { actions: { argTypesRegex: '^on.*' } },
}

export const Default = (props) => <ConfirmationCodeInput {...props} />
