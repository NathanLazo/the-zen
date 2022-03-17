import React from "react";
import Link from "next/link";
import { PlusCircleIcon } from '@heroicons/react/outline'
import Separator from "../additives/Separator";


const CreateComponent = () => {
    return (
    <>
    <div className="relative bg-white overflow-hidden h-max">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative max-w-7xl mx-auto px-8 sm:static">
            <div className="flex space-x-4 mb-4">
                <PlusCircleIcon className="w-16"/>
                <h1 className="font-bold text-4xl inline-block align-baseline pt-2">Create</h1>
            </div>
            <p className="text-xl">
            This option is not available yet, but we are working on it. Thanks for your patience and understanding.
            </p>
            <Separator/>
        </div>
      </div>
    </div>
    </>
    )
}

export default CreateComponent;