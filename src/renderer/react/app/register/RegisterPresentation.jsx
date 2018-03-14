import React from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';
import { FormattedMessage } from 'react-intl';

import PasswordStrength from 'react/components/form/password/PasswordStrength';

import classNames from './register.module.scss';

const RegisterPresentation = props => (
  <div className={classNames.container}>
    {
      /**
       * @todo
       * @assignee maxence-lefebvre
       * Add register description
       */
    }
    {
      /**
       * @todo
       * @assignee maxence-lefebvre
       * Extract form to another component.
       */
    }
    <div className={classNames.formContainer}>
      <input type="password" value={props.password} onChange={props.onChangePassword} />
      <PasswordStrength
        password={props.password}
      />
      <input type="password" value={props.confirm} onChange={props.onChangeConfirm} />
    </div>
    <div>
      <button
        onClick={props.onSubmit}
        disabled={props.isSubmitDisabled}
      >
        <FormattedMessage
          id="app.register.submit.button.label"
          defaultMessage="Create my encrypted database"
        />
      </button>
    </div>
  </div>
);

RegisterPresentation.displayName = 'RegisterPresentation';
RegisterPresentation.propTypes = {
  password: PropTypes.string,
  confirm: PropTypes.string,
  isSubmitDisabled: PropTypes.bool,
  onChangePassword: PropTypes.func,
  onChangeConfirm: PropTypes.func,
  onSubmit: PropTypes.func,
};
RegisterPresentation.defaultProps = {
  password: '',
  confirm: '',
  isSubmitDisabled: false,
  onChangePassword: noop,
  onChangeConfirm: noop,
  onSubmit: noop,
};

export default RegisterPresentation;
