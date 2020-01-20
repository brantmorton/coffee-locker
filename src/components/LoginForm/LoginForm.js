import React, { Component } from "react";

import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import TextFormField from "../UI/FormField/FormField";
import Button from "../../components/UI/Button/Button";
import Aux from "../../hoc/Auxilary/Auxilary";
import styles from "./LoginForm.module.css";

class LoginForm extends Component {
  render() {
    return (
      <Aux>
        <h1>Please Log In</h1>
        <Formik
          initialValues={{
            Email: "",
            Password: ""
          }}
          validationSchema={Yup.object({
            Email: Yup.string()
              .required()
              .email(),
            Password: Yup.string()
              .required()
              .min(6)
          })}
          onSubmit={
            // wire this up
            values => console.log(values)
          }
        >
          <Form className={styles.Form}>
            <div>
              <Field
                label="Email"
                name="Email"
                component={TextFormField}
                variant="outlined"
              />
            </div>
            <div>
              <Field
                label="Password"
                name="Password"
                component={TextFormField}
                variant="outlined"
                type="password"
              />
              <Button type="submit">Submit</Button>
            </div>
          </Form>
        </Formik>
      </Aux>
    );
  }
}

export default LoginForm;
