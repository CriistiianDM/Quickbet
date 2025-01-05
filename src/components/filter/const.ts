// Material IU
import Title from '../shared/Title'
import Search from '../shared/Search'
import Select from '../shared/Select'

interface ComponentStruct {
    content: object[]
}

export const formComponents: ComponentStruct = {
    content: [
        {
            Component: Title,
            slotProps: {
                text: 'Search',
                sx: {
                    color: '#fff',
                    fontSize: '16px'
                }
            }
        },
        {
            Component: Search,
            slotProps: {
                placeholders: 'Keywords',
                sx: {
                    marginTop: '10px',
                    background: '#1C1C1C',
                    borderRadius: 'unset',
                    borderTopLeftRadius: '8px',
                    borderTopRightRadius: '8px',
                    borderBottom: '1px solid #717171',
                    '& input': {
                        color: '#F6F6F6'
                    },
                    '& svg': {
                        fill: '#F6F6F6'
                    }
                }
            }
        },
        {
            Component: Title,
            slotProps: {
                text: 'Genres',
                sx: {
                    marginTop: '31px',
                    color: '#fff',
                    fontSize: '16px'
                }
            }
        },
        {
            Component: Select,
            slotProps: {
                placeholders: 'Keywords',
                sx: {
                    m: 1,
                    width: '-webkit-fill-available',
                    margin: '8px 0',
                    '& > div.MuiInputBase-root select': {
                        backgroundColor: '#1C1C1C',
                        color: '#F6F6F6',
                        border: 'unset',
                        'option': {
                            background: '#1C1C1C',
                            color: '#F6F6F6'
                        }
                    },                    
                    '& svg': {
                        fill: '#F6F6F6'
                    }
                }
            }
        },
    ]
}
