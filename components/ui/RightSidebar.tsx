import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BankCard from './BankCard'

const RightSidebar = ({ user, transcations, banks }: RightSidebarProps) => {
  return (
    <aside className='right-sidebar'>
        <section className='flex flex-col pb-8'>
            <div className='profile-banner' />
            <div className='profile'>
                <div className='profile-img'>
                    <Image src='/icons/profile.svg'
                    width={50} height={50} alt='profile'/>
                </div>
                <div className='profile-details'>
                    <h1 className='profile-name'>
                        {'Aashish'}
                    </h1>
                    <p className='profile-email'>
                        {'rawalaaashish20@gmail.com'}
                    </p>
                </div>
            </div>
        </section>

        <section className='banks'> 
        <div className='flex w-full justify-between'>
            <h2 className='header-2'>
             My Banks
            </h2>
            <Link href='/' className='flex gap-2'>
            <Image src='/icons/plus.svg' 
            width={20}
            height={20}
            alt="plus" />
            <h2 className='text-14 font-semibold text-gary-600'> Add Bank</h2>
            </Link> 
        </div> 
            {banks?.length > 0 && (
                <div className='relative flex flex-1 flex-col items-center justify-center gap-5'>
                    <div className='relative z-10'>
                      <BankCard
                        key={banks[0].$id}
                        account={banks[0]}
                        userName={'Aashish'}
                        showBalance={false} 
                      />
                    </div>
                    {banks[1] && (
                        <div className='absolute right-0 top-8 z-0 w=[90%]'>
                             <BankCard
                            key={banks[1].$id}
                            account={banks[1]}
                            userName={'Aashish'}
                            showBalance={false} 
                      />
                            </div>
                    )}
                </div>
            )}
        </section>
    </aside>
  )
}

export default RightSidebar