import React from "react";
import Link from "next/link";
import { ShieldCheckIcon } from '@heroicons/react/outline'
import Separator from "../additives/Separator";


const UserSafetyComponent = () => {
    return (
    <>
    <div className="relative bg-white overflow-hidden h-max">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative max-w-7xl mx-auto px-8 sm:static">
            <div className="flex space-x-4 mb-4">
                <ShieldCheckIcon  className="w-16"/>
                <h1 className="font-bold text-4xl inline-block align-baseline pt-2">User Safety</h1>
            </div>
            <p className="text-xl">
            Web 3.0 enhances privacy and security. User data security are really emphasized. 
            Web 3.0 uses advanced authorization techniques including distributed ledger technology 
            and encryption to protect user identity and data.
            </p>
            <Separator/>
            <p className="text-xl">
            Blockchain technology plays a key role in Web 3.0, which upgrades the Internet based on core principles of security, identity, trust, and user control.
            </p>
            <Separator/>
            <p className="text-xl">
            Web 3.0 envisions a decentralized identity paradigm, where users maintain control of personal data themselves.
            </p>
            <Separator/>
        </div>
      </div>
    </div>
    </>
    )
}

export default UserSafetyComponent;