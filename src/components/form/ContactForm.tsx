/* global fetch:false */
// see https://github.com/eslint/eslint/issues/4015#issuecomment-301920490
import React from 'react'
import { navigate } from 'gatsby-link'
import { Form, FormProps, Button } from 'react-bootstrap'
import { FaEnvelope } from 'react-icons/fa'
import { Formik, FormikProps, FormikActions } from 'formik'
import * as Yup from 'yup'
import './ContactForm.scss'

interface ContactFormValues {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export interface ContactFormProps extends FormProps, React.ComponentPropsWithoutRef<'form'> {}

const InnerContactForm = ({
  values,
  touched,
  isSubmitting,
  errors,
  handleSubmit,
  handleChange,
  handleBlur,
  className,
  inline,
  validated
}: ContactFormProps & FormikProps<ContactFormValues>) => (
  // See https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/
  <Form
    name="arnaud-deprez-contact"
    method="post"
    action="/contact/thanks/"
    noValidate
    onSubmit={handleSubmit}
    className={'contact-form' + (className ? ` ${className}` : '')}
    inline={inline}
    validated={validated}
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    {/* You still need to add the hidden input with the form name to your JSX form */}
    <input type="hidden" name="form-name" value="arnaud-deprez-contact" />
    <Form.Group controlId="bot-field" hidden>
      <Form.Label>{"Don't fill this up"}</Form.Label>
      <Form.Control name="bot-field" />
    </Form.Group>
    <Form.Group controlId="name">
      <Form.Label>Name</Form.Label>
      <Form.Control
        name="name"
        placeholder="Your name"
        value={values.name}
        onBlur={handleBlur}
        onChange={handleChange}
        isInvalid={!!errors.name && touched.name}
      />
      <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
    </Form.Group>
    <Form.Group controlId="email">
      <Form.Label>Email</Form.Label>
      <Form.Control
        name="email"
        placeholder="Your email"
        value={values.email}
        onBlur={handleBlur}
        onChange={handleChange}
        isInvalid={!!errors.email && touched.email}
      />
      <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
    </Form.Group>
    <Form.Group controlId="subject">
      <Form.Label>Subject</Form.Label>
      <Form.Control
        name="subject"
        placeholder="Your subject"
        value={values.subject}
        onBlur={handleBlur}
        onChange={handleChange}
        isInvalid={!!errors.subject && touched.subject}
      />
      <Form.Control.Feedback type="invalid">{errors.subject}</Form.Control.Feedback>
    </Form.Group>
    <Form.Group controlId="message">
      <Form.Label>Message</Form.Label>
      <Form.Control
        name="message"
        rows="8"
        value={values.message}
        onBlur={handleBlur}
        onChange={handleChange}
        isInvalid={!!errors.message && touched.message}
        as="textarea"
      />
      <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
    </Form.Group>
    <Form.Row>
      <Button variant="primary" type="submit" className="mx-auto mt-3" disabled={isSubmitting}>
        <i className="icons mr-2">
          <FaEnvelope />
        </i>
        Send
      </Button>
    </Form.Row>
  </Form>
)

const contactSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string()
    .email()
    .required(),
  subject: Yup.string().required(),
  message: Yup.string().required()
})

const encode = (data: any) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const handleSubmit = (values: ContactFormValues, actions: FormikActions<ContactFormValues>) => {
  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode({
      ...values
    })
  })
    .then(() => navigate('/contact/thanks'))
    .catch(error => console.error(error))
}

export const ContactForm = () => (
  <Formik
    initialValues={{
      name: '',
      email: '',
      subject: '',
      message: ''
    }}
    validationSchema={contactSchema}
    onSubmit={handleSubmit}
  >
    {props => <InnerContactForm {...props} />}
  </Formik>
)
