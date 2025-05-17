import React, { useState } from 'react';

const toggleSection = () => {

    const[state,setState] = useState('available')
    const handleState = (newState) =>{
        setState(newState)
    }

    return (
        <div className='flex flex-row justify-between w-11/12 mx-auto mt-5'>
            {/* left section */}
            <section>
           {
            state == 'available' ? "Available Players" : "Selected Players"
           }
            </section>

            {/* right section */}

            <section className='border rounded-xl'>

                <button 

                style={{
                    color:"blue",
                    fontWeight:700,
                    borderRadius:"20px",
                    backgroundColor:state == 'available'? "#FFFF00":"white",
                    // color:"red"
                }}
                
                onClick={()=> handleState('available')}

                 className='pr-2 py-2'>Available</button>

                <button
                
                style={{
                    color:"blue",
                    fontWeight:700,
                    borderRadius:"20px",
                    backgroundColor:state == 'available'? "white":"#FFFF00",
                    // color:"red"
                }}
                
                 onClick={()=> handleState('Selected')}

                className='pl-2 py-2'>Selected</button>

            </section>


        </div>
    );
};

export default toggleSection;