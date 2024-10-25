import { Order } from 'components/order/Order';
import React from 'react'
import { Page } from 'zmp-ui'

interface IOrderPage { }

export const OrderPage: React.FC<IOrderPage> = () => {
    return (
        <Page name='order' className='bg-[#f5f5f5] h-screen overflow-y-auto'>
            <Order />
        </Page>
    );
};
