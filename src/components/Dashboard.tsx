import Image from 'next/image';
import { Galleria } from 'primereact/galleria';
import React, {  useState } from 'react';

function Dashboard() {
    const [images, setImages] = useState([1,2,4,1,2,4]);
    const responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];
    const thumbnailTemplate = (item:any) => {
        return <Image src='/../public/OIP.jpg' alt="No Image" width={200} height={100} />
    }

    return (
        <div>
           <div className="min-h-full">
                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
                    </div>
                </header>
                <main>
                    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    <Galleria
                        className='w-full'
                        value={images}
                        responsiveOptions={responsiveOptions}
                        numVisible={3}
                        thumbnail={thumbnailTemplate}
                        itemNextIcon={<i className="pi pi-chevron-right"></i>}
                        itemPrevIcon={<i className="pi pi-chevron-left"></i>}
                        nextThumbnailIcon={<i className="pi pi-chevron-right"></i>}
                        prevThumbnailIcon={<i className="pi pi-chevron-left"></i>}
                    />
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Dashboard;