import React from 'react' 
import LeatesProductCard from '../../../components/ProductCards/LeatesProductCard';


const Leatest = () => {
    return (
        <div className='pt-20'>
            <div className='container mx-auto'>
                <h2 className='text-sectionTitle fnt text-4xl font-bold text-center py-12'>Leatest Products</h2> 
                <LeatesProductCard/>
            </div>
        </div>
    ) 
}

export default Leatest