import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ImageUploader from '@/components/RightContent/ImageUploader'
import { Card } from 'antd';



const home: React.FC = () => {

    return (
        <PageContainer header={{
            title: '',
            breadcrumb: {},
        }}>
            <Card>
                <ImageUploader />
            </Card>
        </PageContainer>
    );
};

export default home;
