import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const usernameRef= useRef()
  const { signup, addUserInfo } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      const userinfo = await signup(emailRef.current.value, passwordRef.current.value)
      console.log(userinfo.user.uid)
      const userdata = {
        uid: userinfo.user.uid,
        username: usernameRef.current.value
      }
      await addUserInfo(userdata)
      history.push("/")
    } catch (error){
      // setError("Failed to create an account")
      console.log(error)
    }

    setLoading(false)
  }

  function submitdata(e){
    e.preventDefault();
    setError("")
    setLoading(true)
    signup(emailRef.current.value, passwordRef.current.value)
    .then(res =>{
      return res.user.updateProfile({
        displayName: usernameRef.current.value
      }).then(()=>{
        history.push("/")
      })
    }).catch(error =>{
      console.log(error)
    })
    setLoading(false)
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={submitdata}>
          <Form.Group id="username">
              <Form.Label>User name</Form.Label>
              <Form.Control type="text" ref={usernameRef} required />
            </Form.Group>            
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  )
}
