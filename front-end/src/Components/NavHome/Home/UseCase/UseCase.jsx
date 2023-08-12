import React from 'react'
import './UseCase.css'
import { NavLink } from 'react-router-dom'
import Arbitium from '../../../../Asset/arbitrum.png'
import Befi from '../../../../Asset/befiwallet.png'
import Bing from '../../../../Asset/bingX.png'
import Bitget from '../../../../Asset/bitget.png'
import BitKeep from '../../../../Asset/bitkeep.png'
import BitTrue from '../../../../Asset/bitrue.png'
import BitStore from '../../../../Asset/bitStore.png'
import celomomo from '../../../../Asset/celomomo.png'
import chainUp from '../../../../Asset/chainup.png'
import coinTr from '../../../../Asset/coinTr.png'
import dodo from '../../../../Asset/dodo.png'
import lbank from '../../../../Asset/lbank.png'
import metaone from '../../../../Asset/metaone.png'
import near from '../../../../Asset/near.png'
import okx from '../../../../Asset/okx.png'
import pionex from '../../../../Asset/pionex.png'
import polygon from '../../../../Asset/polygon.png'
import saasgo from '../../../../Asset/saasgo.png'
import sui from '../../../../Asset/sui.png'
import token from '../../../../Asset/token.png'


const data = [
    {
        id: 1,
        biography: celomomo,
        Link: 'https://celo.org/',
    },
    {
        id: 2,
        biography: token,
        Link: 'https://www.tokenpocket.pro/',
    },
    {
        id: 3,
        biography: saasgo,
        Link: 'https://saasgo.xyz/#/',
    },
    {
        id: 4,
        biography: polygon,
        Link: 'https://polygon.technology/',
    },
    {
        id: 5,
        biography: pionex,
        Link: 'https://www.pionex.com/',
    },
    {
        id: 6,
        biography: okx,
        Link: 'https://www.okx.com/',
    },
    {
        id: 7,
        biography: near,
        Link: 'https://near.org/',
    },
    {
        id: 8,
        biography: metaone,
        Link: 'https://metaone.gg/',
    },
    {
        id: 9,
        biography: dodo,
        Link: 'https://dodoex.io/',
    },
    {
        id: 10,
        biography: chainUp,
        Link: 'https://www.chainup.com/',
    },
    {
        id: 11,
        biography: coinTr,
        Link: 'https://celo.org/',
    },
    {
        id: 12,
        biography: sui,
        Link: 'https://celo.org/',
    },
    {
        id: 13,
        biography: lbank,
        Link: 'https://celo.org/',
    },
    {
        id: 14,
        biography: BitStore,
        Link: 'https://bit.store/',
    },
    {
        id: 15,
        biography: BitTrue,
        Link: 'https://www.bitrue.com/',
    },
    {
        id: 16,
        biography: BitKeep,
        Link: 'https://bitkeep.io/',
    },
    {
        id: 17,
        biography: Befi,
        Link: 'https://befiwalletdao.com/',
    },
    {
        id: 18,
        biography: Arbitium,
        Link: 'https://arbitrum.io/',
    },
    {
        id: 19,
        biography: Bitget,
        Link: 'https://www.bitget.com/',
    },
    {
        id: 20,
        biography: Bing,
        Link: 'https://www.bingx.com/en-us/',
    },
    
]

const UseCase = () => {
  return (
    <section className='useCase'>
        <p className='use'>
        Powering the leading <span>Web3 projects</span>
        </p>

        <div className='web3'>
            {
                data.map(({biography, Link}) => {
                    return(
                        <div className='biography'>
                            <NavLink to={Link} target='_blank'> <img src={biography} alt='biography' /></NavLink>
                        </div>

                    )
                })
            }
        </div>

    </section>
  )
}

export default UseCase