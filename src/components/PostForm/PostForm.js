import React, { Component } from "react";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import StarRatingComponent from "react-star-rating-controlled-component";
import Button from "../../components/UI/Button/Button";
import styles from "./PostForm.module.css";
import axios from "axios";

class PostForm extends Component {
  state = {
    rating: 0
  };

  render() {
    return (
      <Formik
        initialValues={{
          roaster: "",
          origin: "",
          region: "",
          process: "",
          rating: 0,
          notes: ""
        }}
        validationSchema={Yup.object({
          roaster: Yup.string()
            .required("Required")
            .max(20, "Must be 20 characters or less"),
          origin: Yup.string()
            .required("Required")
            .max(20, "Must be 20 characters or less"),
          region: Yup.string().max(20, "Must be 20 characters or less"),
          process: Yup.string().max(20, "Must be 20 characters or less"),
          rating: Yup.number().required("Required"),
          notes: Yup.string().max(40, "Must be 40 characters or less")
        })}
        onSubmit={(values, { setSubmitting }) => {
          values.rating = this.state.rating;
          axios
            .post("https://coffee-locker.firebaseio.com/posts.json", values)
            .then(response => {
              this.props.getPosts();
              this.props.close()
              // set up error handling
              // maybe a more efficient way to do this?
            });
        }}
        validateOnBlur={false}
        validateOnChange={false}
      >
        <Form>
          <div>
            <label htmlFor="roaster">Roaster</label>
            <Field name="roaster" type="text" />
            <ErrorMessage name="roaster" />
          </div>
          <div>
            <label htmlFor="origin">Origin</label>
            <Field name="origin" type="text" />
            <ErrorMessage name="origin" />
          </div>
          <div>
            <label htmlFor="region">Region</label>
            <Field name="region" type="text" />
            <ErrorMessage name="region" />
          </div>
          <div>
            <label htmlFor="process">Process</label>
            <Field name="process" type="text" />
            <ErrorMessage name="process" />
          </div>
          <div>
            <label htmlFor="notes">Notes</label>
            <Field name="notes" type="text" />
            <ErrorMessage name="notes" />
          </div>
          <StarRatingComponent
            className={styles.StarRatingComponent}
            value={this.state.rating}
            onStarClick={nextValue => this.setState({ rating: nextValue })}
            name="starRating"
          />
          <div>
            <Button type="submit">Submit</Button>
            <Button btnType="Danger" clicked={this.props.close}>
              Close
            </Button>
          </div>
        </Form>
      </Formik>
    );
  }
}

export default PostForm;
