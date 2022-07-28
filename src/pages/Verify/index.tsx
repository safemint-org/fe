import styles from './index.less';
import { Space, Table, Radio, message } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import { Providers } from '@/helpers/providers/Providers';
import { NetworkId } from '@/constants/networks';
import type { RadioChangeEvent } from 'antd';
import { SafeMint__factory } from '@/typechain/factories/SafeMint__factory';
import { SafeMintAudit__factory } from '@/typechain/factories/SafeMintAudit__factory';
import React, { useEffect, useState } from 'react';
import { ProjectInfo } from '@/helpers/types';
import { getProjectMetadata } from '@/utils/ipfs';
import { useModel } from 'umi';
import { useHistory } from 'react-router-dom'

export default function Verify() {
    const provider = Providers.getStaticProvider(NetworkId.TESTNET_RINKEBY);
    const safeMintContract = SafeMint__factory.connect(
        '0x3b68C1Cd8DD6C40aFFf144EA7094a7097FbBEdca',
        provider,
    );
    const auditContract = SafeMintAudit__factory.connect(
        '0x783c8805e11bcd97df88c6274309687e13476106',
        provider,
    );
    const [data, setData] = useState([]);
    const [getValue, setValve] = useState('');
    const { connection, setconnection } = useModel('useWeb3Model', (model) => ({
        connection: model.connection,
        setconnection: model.setconnection
    }));

    interface DataType {
        key: string;
        name: string;
        age: number;
        address: string;
        tags: string[];
    }

    const forDataPush = (list) => {
        let arrays = []
        list.forEach((item) => {
            let array = []
            array.name = item[0]
            array.address = item[7]
            array.status = item[8]
            array.item = item
            arrays.push(array)
        })
        setData(arrays)
    }

    useEffect(async () => {
        let list = await safeMintContract.getPending(0, 20);
        setValve('Pending')
        forDataPush(list)
    }, []);

    // let data: any[] = [
    //     {
    //         key: '1',
    //         name: 'CryptoMeow',
    //         age: 32,
    //         address: '2020-01-04  09:41:00',
    //         tags: ['nice', 'developer'],
    //     },
    //     {
    //         key: '2',
    //         name: 'CryptoMeow',
    //         age: 42,
    //         address: '2020-01-04  09:41:00',
    //         tags: ['loser'],
    //     },
    //     {
    //         key: '3',
    //         name: 'CryptoMeow',
    //         age: 32,
    //         address: '2020-01-04  09:41:00',
    //         tags: ['cool', 'teacher'],
    //     },

    // ];



    const getList = async ({ target: { value } }: RadioChangeEvent) => {
        setValve(value)
        if (value === 'Pending') {
            let list = await safeMintContract.getPending(0, 20);
            forDataPush(list)
        }
        if (value === 'Passed') {
            let list = await safeMintContract.getPassed(0, 20);
            forDataPush(list)
        }
        if (value === 'Reject') {
            let list = await safeMintContract.getReject(0, 20);
            forDataPush(list)
        }
        if (value === 'Locked') {
            let list = await safeMintContract.getLocked(0, 20);
            forDataPush(list)
        }
    }
    const history = useHistory()
    const goToApprove = async (item) => {
        const role = await auditContract.hasRole('0x59a1c48e5837ad7a7f3dcedcbe129bf3249ec4fbf651fd4f5e2600ead39fe2f5', '0xcFb18e653156e9F93b84bce2E4F16bD34141Af1e')
        if (!role) {
            message.warning('You dont have permission to audit');
            return false;
        } else {
            setconnection({ ...connection, hasRole: true })
            const ipfsAddress = item.ipfsAddress;
            const storageData = localStorage.getItem(ipfsAddress);
            let projectMetadata = {}
            if (storageData == null) {
                projectMetadata = await getProjectMetadata(ipfsAddress);
                localStorage.setItem(ipfsAddress, JSON.stringify(projectMetadata));
            } else {
                projectMetadata = JSON.parse(storageData) as ProjectInfo;
            }

            // 跳转
            history.push({ pathname: '/VerifyView', type: getValue, info: projectMetadata, hashAddress: item[1] })
        }
    }

    const columns: ColumnsType<DataType> = [
        {
            title: 'Project Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Create Time',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Status',
            key: 'address',
            render: () => {
                return (
                    <span>待审核</span>
                )
            }
        },
        // {
        //     title: 'Tags',
        //     key: 'tags',
        //     dataIndex: 'tags',
        //     render: (_, { tags }) => (
        //         <>
        //             {tags.map(tag => {
        //                 let color = tag.length > 5 ? 'geekblue' : 'green';
        //                 if (tag === 'loser') {
        //                     color = 'volcano';
        //                 }
        //                 return (
        //                     <Tag color={color} key={tag}>
        //                         {tag.toUpperCase()}
        //                     </Tag>
        //                 );
        //             })}
        //         </>
        //     ),
        // },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a onClick={() => goToApprove(record.item)}>Detail Page</a>
                    {/* <a>Approve</a>
                    <a>Reject</a> */}
                    {/* <a>Invite {record.name}</a>
                    <a>Delete</a> */}
                </Space >
            ),
        },
    ];

    return (
        <div className={styles.pre}>
            <div className={styles.verifyTitle}>Verify Projects</div>
            <Radio.Group onChange={getList} defaultValue="Pending" buttonStyle="solid">
                <Radio.Button value="Pending">Pending</Radio.Button>
                <Radio.Button value="Passed">Passed</Radio.Button>
                <Radio.Button value="Reject">Reject</Radio.Button>
                <Radio.Button value="Locked">Locked</Radio.Button>
            </Radio.Group>
            {/* <Space style={{ marginBottom: 16 }}>
                <Button onClick={getPending}>处理中</Button>
                <Button onClick={getPassed}>通过</Button>
                <Button onClick={getReject}>驳回</Button>
                <Button onClick={getLocked}>锁定</Button>
            </Space> */}
            <Table className={styles.verifyTable} columns={columns} dataSource={data} />
        </div>

    )
}