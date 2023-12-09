import React from 'react'

type Props = {
    children: React.ReactNode
}

const HeadingText = ({ children }: Props) => {
    return (
        <h2
            className=" text-2xl font-bold uppercase  tracking-tight  text-gray-900 md:mt-0
                        md:text-3xl lg:text-4xl"
        >
            {children}
        </h2>
    )
}

export default HeadingText
