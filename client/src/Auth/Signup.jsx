import React from 'react';
import { Card, Flex, Typography, Form, Input, Button, Alert, Spin } from 'antd';
import { Link } from 'react-router-dom';
import useSignup from '../hooks/useSignup.js'

import signupImage from '../assets/signup.svg'
const Signup = () => {
    const { loading, error, signupUser } = useSignup();
    const handleRegister = (values) => {
        signupUser(values);
    }
    return (
        <Card className='form-container'>
            <Flex gap='large' align='center'>
                {/* form */}
                <Flex vertical flex={1}>
                    <Typography.Title level={3} strong className='title'>
                        Create an account
                    </Typography.Title>
                    <Typography.Text type='secondary' strong className='slogan'>
                        Join for exclusive access!
                    </Typography.Text>
                    <Form layout='vertical' onFinish={handleRegister} autoComplete='off'>
                        <Form.Item
                            label="Full Name"
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter your full name!"
                                }
                            ]}
                        >
                            <Input size='large' placeholder='Enter your Full name' />
                        </Form.Item>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter your Email Id!"
                                },
                                {
                                    type: 'email',
                                    message: "Please provide a valid Email Id!"
                                }
                            ]}
                        >
                            <Input size='large' placeholder='Enter your Email Id' />
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter your password!"
                                }
                            ]}
                        >
                            <Input.Password size='large' placeholder='Enter your Password' />
                        </Form.Item>
                        <Form.Item
                            label="Confirm Password"
                            name="confirmPassword"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter your password!"
                                }
                            ]}
                        >
                            <Input.Password size='large' placeholder='Re-Enter your Password' />
                        </Form.Item>
                        
                        {
                            error && (<Alert description={error} type='error' showIcon closable className='alert' />)
                        }

                        <Form.Item>
                            <Button
                                type={`${loading ? '' : 'primary'}`}
                                htmlType='submit'
                                size='large'
                                className='btn'>
                                {loading ? <Spin /> : 'Create Account'}
                            </Button>
                        </Form.Item>
                        <Form.Item>
                            <Link to='/signin'>
                                <Button size='large' className='btn'>
                                    Sign In
                                </Button>
                            </Link>
                        </Form.Item>
                    </Form>
                </Flex>

                {/* image */}
                <Flex flex={1}>
                    <img src={signupImage} className='auth-image'>
                    </img>
                </Flex>
            </Flex>
        </Card>
    );
}

export default Signup;

