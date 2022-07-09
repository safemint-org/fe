import styles from './index.less';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/lib/table';



export default function Verify() {
    interface DataType {
        key: string;
        name: string;
        age: number;
        address: string;
        tags: string[];
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
                    <a>Detail Page</a>
                    <a>Approve</a>
                    <a>Reject</a>
                    {/* <a>Invite {record.name}</a>
                    <a>Delete</a> */}
                </Space >
            ),
        },
    ];

    const data: DataType[] = [
        {
            key: '1',
            name: 'CryptoMeow',
            age: 32,
            address: '2020-01-04  09:41:00',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'CryptoMeow',
            age: 42,
            address: '2020-01-04  09:41:00',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'CryptoMeow',
            age: 32,
            address: '2020-01-04  09:41:00',
            tags: ['cool', 'teacher'],
        },
    ];
    return (
        <div className={styles.pre}>
            <div className={styles.verifyTitle}>Verify Projects</div>
            <Table className={styles.verifyTable} columns={columns} dataSource={data} />
        </div>

    )
}