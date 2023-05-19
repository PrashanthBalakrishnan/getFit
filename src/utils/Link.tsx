import { SelectedPage } from './Types'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    page: string
    selectedPage: SelectedPage
    setSelectedPage: (value: SelectedPage) => void
    handleMenuToggle: () => void
}

const Link = ({
    page,
    selectedPage,
    setSelectedPage,
    handleMenuToggle,
}: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, '') as SelectedPage

    return (
        <AnchorLink
            className={`${
                selectedPage === lowerCasePage ? 'text-accent100' : ''
            }
            text-lg font-semibold transition  duration-300  hover:text-accent100
      `}
            href={`#${lowerCasePage}`}
            onClick={() => {
                setSelectedPage(lowerCasePage)
                handleMenuToggle()
            }}
        >
            {page}
        </AnchorLink>
    )
}

export default Link
