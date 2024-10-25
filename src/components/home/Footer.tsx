import { Button } from 'components/Button';
import React from 'react'
import { useNavigate } from 'react-router-dom';

interface IFooter { }

export const Footer: React.FC<IFooter> = () => {
    const navigate = useNavigate()
    return (
        <>
            <Button onClick={() => navigate('/order')}
                className='p-3 bg-orange-600 items-center'>Order</Button>
        </>
    );
};
