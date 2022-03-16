import { Table, Tag, Space, Typography, Image } from 'antd';
import { users } from './data';


const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
     
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <Typography.Text copyable>{text}</Typography.Text>
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        filters: [
            {
              text: 'London',
              value: 'London',
            },
            {
              text: 'New York',
              value: 'New York',
            },
          ],
          onFilter: (value, record) => record.email.includes(value)
    },
    {
        title: 'Rate',
        dataIndex: 'rate',
        key: 'rate',
        sorter: (a, b) => b.rate - a.rate,
    },
    {
        title: 'Image',
        dataIndex: 'image',
        key: 'image',
        render: text => <image width={60} src={text}/>
    },
]

const _Table = () => {
  return (
    <Table columns={columns} dataSource={users} />
  )
}

export default _Table
