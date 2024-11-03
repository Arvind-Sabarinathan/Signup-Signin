import React from 'react'
import { Card, Flex, Typography, Form, Input, Button, Alert, Spin } from 'antd';
import { Link } from 'react-router-dom';
import signinImage from '../assets/signin.jpg'
import useSignin from '../hooks/useSignin';

const Signin = () => {
    const { loading, error, signinUser } = useSignin();
    const handleLogin = async (values) => {
        await signinUser(values);
    }

    return (<Card className='form-container'>
        <Flex gap='large' align='center'>
            {/* image */}
            <Flex flex={1}>
                <img src={signinImage} className='auth-image'>
                </img>
            </Flex>

            {/* form */}
            <Flex vertical flex={1}>
                <Typography.Title level={3} strong className='title'>
                    Sign In
                </Typography.Title>
                <Typography.Text type='secondary' strong className='slogan'>
                    Unlock your world.
                </Typography.Text>
                <Form layout='vertical' onFinish={handleLogin} autoComplete='off'>
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

                    {
                            error && (<Alert description={error} type='error' showIcon closable className='alert' />)
                        }

                    <Form.Item>
                        <Button
                            type={`${loading ? '' : 'primary'}`}
                            htmlType='submit'
                            size='large'
                            className='btn'>
                            {loading ? <Spin /> : 'Sign In'}
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        <Link to='/'>
                            <Button size='large' className='btn'>
                                Create Account
                            </Button>
                        </Link>
                    </Form.Item>
                </Form>
            </Flex>

            
        </Flex>
    </Card>
    );
};

export default Signin;
