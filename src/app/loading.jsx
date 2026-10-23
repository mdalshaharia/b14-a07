
import ProductGridSkeleton from '@/components/Card/Skeleton';
import React from 'react';

const loading = () => {
    return (
        <main className="min-h-screen bg-[#f1f5f0] px-3 py-5 sm:px-6">
            <div className="mx-auto max-w-6xl">
                <ProductGridSkeleton count={6} />
            </div>
        </main>
    );
};

export default loading;