/* eslint-disable linebreak-style */
// required les champs

// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

import { useFormContext, useController } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';

// action creator
import { nextSignupFormStep } from '../../../actions/signup';

import './user-form.scss';

function Input(props) {
  const { field, fieldState } = useController(props);
  console.log(field);
  console.log(fieldState);

  return (
    <div>
      <input
        {...field}
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        id={props.id}
        rules={{ required: true }}
      />
      <p>{fieldState.invalid ? 'invalid' : 'valid'}</p>

      <p>{fieldState.isTouched && 'Touched'}</p>
      <p>{fieldState.isDirty && 'Dirty'}</p>
    </div>
  );
}

const UserForm = () => {
  const { register, control } = useFormContext();

  const formStep = useSelector((state) => state.signup.formStep);
  const dispatch = useDispatch();
  const clickToContinue = () => {
    dispatch(nextSignupFormStep());
  };

  return (
    <div className={formStep === 1 ? 'signup user-form' : 'hidden'}>
      <h2 className="signup__subtitle">Vous</h2>

      <div className="user-form__form">

        <div className="user-form__form__input-infos">
          <div className="user-form__form__input-infos__identity">
            {/* Firstname */}
            <div className="user-form__form__input-infos__first_name">
              {/* <label htmlFor="first_name">Votre Prénom</label> */}
              <Input type="text" id="first_name" name="first_name" placeholder="Prénom" control={control} rules={{ required: true }} />
              {/* <input {...register('first_name', { required: 'Veuillez entrer votre prénom' })} type="text" id="first_name" name="first_name" placeholder="Prénom" /> */}
            </div>

            {/* Name */}
            <div className="user-form__form__input-infos__name">
              {/* <label htmlFor="last_name">Votre Nom</label> */}
              <input {...register('last_name', { required: 'Veuillez entrer votre nom' })} type="text" id="last_name" name="last_name" placeholder="Nom" />
            </div>

            {/* Email */}
            <div className="user-form__form__input-infos__email">
              {/* <label htmlFor="email">Votre adresse e-mail</label> */}
              <input {...register('email', { required: 'Veuillez entrer un email' })} type="email" id="email" name="email" placeholder="Email" />
            </div>

            {/* Password */}
            <div className="user-form__form__input-infos__password">
              {/* <label htmlFor="password">Votre mot de passe</label> */}
              <input {...register('password', { required: 'Veuillez entrer un mot de passe' })} type="password" id="password" name="password" placeholder="Mot de passe" />
            </div>

            {/* Password confirmation */}
            <div className="user-form__form__input-infos__password--confirmation">
              {/* <label htmlFor="password_confirmation">Confirmer votre mot de passe</label> */}
              <input {...register('password_confirmation', { required: 'Veuillez confirmer votre mot de passe' })} type="password" id="password_confirmation" name="password_confirmation" placeholder="Confirmer mot de passe" />
            </div>

            {/* Picture profile */}
            <div className="user-form__form__input-infos__picture">
              <label htmlFor="photo">Ajouter une photo de profil</label>
              <input
                {...register(('photo'))}
                type="file"
                id="photo"
                name="photo"
                accept="image/png, image/jpeg"
              />
            </div>
          </div>

          {/* Zipcode */}
          <div className="user-form__form__input-infos__zipcode">
            <p>
              Afin de pouvoir géolocaliser votre ville,
              nous avons besoin de votre code postal.
            </p>
            <div className="user-form__form__input-infos__zipcode__input">
              {/* <label htmlFor="zip_code">Votre code postal</label> */}
              <input {...register('zip_code', { required: 'Veuillez entrer votre code postal' })} type="text" id="zip_code" name="zip_code" placeholder="Code postal" />
            </div>
          </div>
        </div>
        <div className="signup__back-submit">
          <Link to="/" className="signup__back-submit__back">Retour</Link>
          <button
            onClick={clickToContinue}
            type="button"
            className="signup__back-submit__submit"
            // disabled={!formState.isValid}
          >Continuer
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
