import React from 'react';
import { useForm, Controller } from 'react-hook-form';

function SignUpUser() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    alert(JSON.stringify(data, null, 2));
    console.log(data);
  };

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
      <h2>SIGN UP</h2>
      </div>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <Controller
            name="firstName"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <input {...field} type="text" />}
          />
          {errors.firstName && <p>This field is required.</p>}
        </div>

        <div>
          <label htmlFor="lastName">Last Name:</label>
          <Controller
            name="lastName"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <input {...field} type="text" />}
          />
          {errors.lastName && <p>This field is required.</p>}
        </div>

        <div>
          <label htmlFor="userName">Username:</label>
          <Controller
            name="userName"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <input {...field} type="text" />}
          />
          {errors.userName && <p>This field is required.</p>}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <Controller
            name="email"
            control={control}
            rules={{ required: true, pattern: /^\S+@\S+$/i }}
            render={({ field }) => <input {...field} type="email" />}
          />
          {errors.email?.type === 'required' && <p>This field is required.</p>}
          {errors.email?.type === 'pattern' && <p>Invalid email format.</p>}
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <Controller
            name="password"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <input {...field} type="password" />}
          />
          {errors.password && <p>This field is required.</p>}
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <Controller
            name="confirmPassword"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <input {...field} type="password" />}
          />
          {errors.confirmPassword && <p>This field is required.</p>}
        </div>
        <div>
        <button type="submit">SUBMIT</button>
        </div>

       <div>
       <button type="reset">CANCEL</button>
       </div>
      </form>
   
  );
}

export default SignUpUser;
