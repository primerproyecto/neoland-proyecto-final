import React from 'react';
import { useId } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { devices } from '../../theme/theme';

import newsletterimage from '../../assets/1681049275106.png';

const NewsletterPage = () => {
  // useid to link label and input
  const nombreId = useId();
  const passwordId = useId();

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => console.log(values);

  const atLeastOne = () => {
    getValues('categorias').length ? true : 'Al menos uno';
  };

  const categorias = ['electronics', 'jewelery', "men's clothing", "women's clothing"];
  return (
    <NewsletterWrapper>
      <div>
        <img src={newsletterimage} alt=" " />
      </div>
      <div style={{ width: '100%' }}>
        <h1>NewsletterPage</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="fieldWrapper">
            <label htmlFor={nombreId}>Usuario</label>
            <input
              id={nombreId}
              {...register('username', {
                required: 'Required',
                validate: (value) => value !== 'admin' || 'Nice try!',
              })}
            />
            {errors.username && errors.username.message}
          </div>
          <div className="fieldWrapper">
            <label htmlFor={passwordId}>Email</label>
            <input
              type="email"
              id={passwordId}
              {...register('email', {
                required: 'Required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Dirección inválida',
                },
              })}
            />
            {errors.email && errors.email.message}
          </div>
          <div className="fieldWrapper">
            {categorias.map((item, i) => {
              return (
                <label className="labelCheck" key={i}>
                  <input
                    type="checkbox"
                    key={i}
                    value={item}
                    {...register('categorias', {
                      validate: atLeastOne,
                    })}
                  />{' '}
                  {item}
                </label>
              );
            })}
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </NewsletterWrapper>
  );
};

const NewsletterWrapper = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media ${devices.laptop} {
    flex-direction: row;
    gap: 2rem;
  }
  img {
    height: 200px;
  }
`;

/* export const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
}; */
export default NewsletterPage;
