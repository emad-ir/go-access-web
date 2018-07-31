import React, { Component } from 'react'
import _ from 'lodash'
import axios from 'axios'
import NotificationSystem from 'react-notification-system'
import Link from 'gatsby-link'
import Input from '../components/Input'
import FORMSPREE_EMAIL from '../constants'


class Contact extends Component {
    _notificationSystem = null
    state = {
        data: {},
        form_errors: {},
        valid: false
    }

    componentDidMount = () => {
        this._notificationSystem = this.refs.notificationSystem;
    }

    _handleInputChange = (e) => {
        const data_clone = _.cloneDeep(this.state.data);
        data_clone[e.target.name] = e.target.value;
        this.setState({ data: data_clone }, () => {
            this.setState({form_errors: this.validateForm()})
        })
    }

    emailValidation = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    validateForm = () => {
        const {data} = this.state
        let data_errors = {}
        Object.entries(data).map(([key, value]) => {
            if (key == 'email' && !this.emailValidation(value)) {
                data_errors[key] = "Enter a valid email address"
            }
            if (value == "" || value == undefined) {
                data_errors[key] = "This field is required"
            }
        });

        if(Object.keys(data).length == 3 && Object.keys(data_errors).length == 0){
            this.setState({valid: true})
        }

        return data_errors
        

        // const { email, name, message } = this.state
        // let valid = true
        // const errors = {}
        // if (email == '' || !this.emailValidation(email)) {
        //     errors['email'] = "Please provide a valid email"
        //     valid = false
        // }
        // if (name == "") {
        //     errors['name'] = "Please enter your name"
        //     valid = false
        // }
        // if (message == "") {
        //     errors['message'] = "Please enter your message"
        //     valid = false
        // }

        // this.setState({ form_errors: errors })
        // return valid
    }

    submitForm = (e) => {
        e.preventDefault()
        const { name, email, message } = this.state
        const form_valid = this.validateForm()

        if (form_valid) {
            axios.post('https://formspree.io/' + `${FORMSPREE_EMAIL}`, {
                name: name,
                email: email,
                message: message,
            }).then(function (response) {
                console.log("response", response);
                this._notificationSystem.addNotification({
                    message: `Your message has been successfully sent`,
                    level: 'success'
                });
            }).catch(function (error) {
                console.log("ERROR:", error)
                this._notificationSystem.addNotification({
                    message: `Sorry, something went wrong. Please try again`,
                    level: 'error'
                });
            });
        } else {
            this._notificationSystem.addNotification({
                message: `Please fill in all the details`,
                level: 'error'
            });
        }

    }


    render() {
        const { name, email, message } = this.state.data
        const { form_errors, valid } = this.state
        return (
            <div className="contact" ref="contact">
                <NotificationSystem ref="notificationSystem" />
                <div className="header">
                    <h3>Contact Us</h3>

                </div>
                <div className="description">
                    <p>We are excited to announce that Go will soon be live!</p>
                    <p>We believe in improving the quality of life of our clients by offering a simple and effortless solution to access control.</p>
                    <p>If you have any questions or queries regarding how we will provide you with total freedom, please fill in your details below and we'll be sure to get back to you.</p>
                </div>

                <div className="form-container">
                    <form className="contact-form" name="contact" method="POST" data-netlify="true">
                        <Input type="hidden" name="form-name" value="contact" />
                        <Input
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={name}
                            onChange={(e) => this._handleInputChange(e)}
                            error={form_errors.name ? form_errors.name : null}
                        />
                        <Input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={(e) => this._handleInputChange(e)}
                            error={form_errors.email ? form_errors.email : null}
                        />

                        <Input
                            type="textarea"
                            placeholder="Message"
                            rows={3}
                            name="message"
                            value={message}
                            onChange={(e) => this._handleInputChange(e)}
                            error={form_errors.message ? form_errors.message : null}
                        />
                        <button className="submit" type="submit" disabled={!valid}>SUBMIT</button>
                    </form>

                </div>
            </div>
        )
    }
}

export default Contact