import React from 'react'

export default function Navbar() {
  return (
    <div className="text-2xl bg-white flex justify-between items-center py-5 ">
            <div className='grid grid-cols-4'>
                <div className='col-start-2 font-semibold'>
                    <Link to="/">
                        Snapnote
                    </Link>
                </div>
                Hello
            </div>
            {/* {
                isSignedIn ? logOut : signIn
            } */}

        </div>
  )
}


