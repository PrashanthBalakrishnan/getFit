import { SelectedPage } from './Types'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    page: string
    selectedPage: SelectedPage
    setSelectedPage: (value: SelectedPage) => void
    handleMenuToggle?: () => void
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
            className={`${selectedPage === lowerCasePage ? 'text-rose-500' : ''}
            text-lg font-semibold transition  duration-300  hover:text-rose-500
      `}
            href={`#${lowerCasePage}`}
            onClick={() => {
                setSelectedPage(lowerCasePage)
                if (handleMenuToggle) handleMenuToggle()
            }}
        >
            {page}
        </AnchorLink>
    )
}

export default Link
