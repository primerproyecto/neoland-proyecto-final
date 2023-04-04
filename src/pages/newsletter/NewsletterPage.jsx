import React from 'react';
import { useId } from 'react';
import { useForm } from 'react-hook-form';

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
    <div>
      <h1>NewsletterPage</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
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
        <div>
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
        <div>
          {categorias.map((item, i) => {
            return (
              <label key={i}>
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
  );
};

export default NewsletterPage;
