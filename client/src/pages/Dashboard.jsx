import { Avatar, Button, Card, Flex, Typography } from 'antd';
import React from 'react'
import { useAuth } from "../contexts/AuthContext.jsx";
import { UserOutlined } from '@ant-design/icons';


const Dashboard = () => {

    const { userData, signout } = useAuth();

    const handleSignout = async () => {
        await signout();
    }
    return (
        <Card className='profile-card'>
            <Flex vertical gap='small' align='center'>
                <Avatar size={150} icon={<UserOutlined />} className='avatar' />
                <Typography.Title level={2} strong className='username'>
                    {userData.name}
                </Typography.Title>
                <Typography.Text type='secondary' strong>
                    Email: {userData.email}
                </Typography.Text>
                <Typography.Text type='secondary'>
                    Role: {userData.role}
                </Typography.Text>
                <Button size='large' type='primary' className='profile-btn' onClick={handleSignout}>
                    Sign out
                </Button>
            </Flex>
        </Card>
    );
};

export default Dashboard;
