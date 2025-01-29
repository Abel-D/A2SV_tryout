import { AntdRegistry } from '@ant-design/nextjs-registry';
import PropTypes from 'prop-types';

export default function Page({ children }) {

    return ( 
        <AntdRegistry >
            <h2>   </h2> 
            { children } 
        </AntdRegistry >
    )
}

Page.propTypes = {
    children: PropTypes.oneOf([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}