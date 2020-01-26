import React, { Component } from "react";

import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import TextFormField from "../UI/FormField/FormField";
import StarRatingComponent from "react-star-rating-controlled-component";
import Button from "../../components/UI/Button/Button";
import styles from "./PostForm.module.css";
import axios from "axios";

// sets time of post (i.e. January 25, 2020, 6:57 PM)
const timeOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric"
};

const today = new Date();
const dateTime = today.toLocaleString([], timeOptions);

class PostForm extends Component {
  state = {
    rating: 0
  };

  nickname = this.props.auth.getProfile().nickname || "Unknown User";
  photo = this.props.auth.getProfile().picture;

  render() {
    return (
      <Formik
        initialValues={{
          roaster: "",
          origin: "",
          region: "",
          process: "",
          rating: 0,
          notes: "",
          author: this.nickname,
          datePosted: dateTime
        }}
        validationSchema={Yup.object({
          roaster: Yup.string()
            .required()
            .max(20),
          origin: Yup.string()
            .required()
            .max(20),
          region: Yup.string().max(20),
          process: Yup.string().max(20),
          rating: Yup.number().required(),
          notes: Yup.string().max(40)
        })}
        onSubmit={(values, { setSubmitting }) => {
          values.rating = this.state.rating;
          axios
            .post("https://coffee-locker.firebaseio.com/posts.json", values)
            .then(response => {
              this.props.getPosts();
              this.props.close();
              // set up error handling
              // maybe a more efficient way to do this?
            });
        }}
      >
        <Form className={styles.Form}>
          <div>
            <Field
              label="Roaster"
              name="roaster"
              component={TextFormField}
              variant="outlined"
            />
          </div>
          <div>
            <Field
              label="Origin"
              name="origin"
              component={TextFormField}
              variant="outlined"
            />
          </div>
          <div>
            <Field
              label="Region"
              name="region"
              component={TextFormField}
              variant="outlined"
            />
          </div>
          <div>
            <Field
              label="Process"
              name="process"
              component={TextFormField}
              variant="outlined"
            />
          </div>
          <div>
            <Field
              label="Tasting Notes"
              name="notes"
              helperText="(blueberry, fig, etc...)"
              component={TextFormField}
              variant="outlined"
            />
          </div>
          <StarRatingComponent
            className={styles.StarRatingComponent}
            value={this.state.rating}
            onStarClick={nextValue => this.setState({ rating: nextValue })}
            name="starRating"
          />
          <div style={{ paddingTop: "10px" }}>
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
