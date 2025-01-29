import { AntdRegistry } from '@ant-design/nextjs-registry';
import PropTypes from 'prop-types';
import {Layout } from 'antd';

export default function Page({ children }) {

    return ( 
        <AntdRegistry >
           <Layout>
              { children } 
          </Layout>
        </AntdRegistry >
    )
}

Page.propTypes = {
    children: PropTypes.oneOf([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}