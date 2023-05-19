import React from 'react'

type Props = {
    children: React.ReactNode
}

const HeadingText = ({ children }: Props) => {
    return (
        <h1
            className=" text-2xl font-bold uppercase  tracking-tight  text-gray-900 md:mt-0
                        md:text-3xl lg:text-4xl"
        >
            {children}
        </h1>
    )
}

export default HeadingText
