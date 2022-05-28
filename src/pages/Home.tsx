import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ImageUploader from '@/components/RightContent/ImageUploader'
import { Card } from 'antd';



const Home: React.FC = () => {

    return (
        <PageContainer>
            <Card>
                <ImageUploader />
            </Card>
        </PageContainer>
    );
};

export default Home;
