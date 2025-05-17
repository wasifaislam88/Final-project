import React from 'react';

const toggleSection = () => {
    return (
        <div className='flex flex-row justify-between w-11/12 mx-auto'>
            {/* left section */}
            <section>
            left
            </section>

            {/* right section */}

            <section>
                right
            </section>


        </div>
    );
};

export default toggleSection;