import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';

const Chart = () => {
    return (
        <BarChart className='cursor-pointer'
            xAxis={[{
                scaleType: 'band', data:
                    [
                        'group A',
                        'group B',
                        'group C',
                        'group D',
                        'group E',
                        'group F',
                        'group G',
                        'group H',
                        'group I',
                        'group J',
                        'group K',
                        'group L',
                        'group M',
                        'group N',
                        'group O',
                        'group P',
                        'group Q',
                        'group R',
                        'group S',
                        'group T',
                        'group U',
                        'group V',
                        'group V',
                        'group V',
                        'group V',
                        'group V',
                        'group W',
                    ]
            }]}
            series={
                [
                        { data: [3, 5, 4,1,3,2,4,1,3,5,4,1,3,2,4,1,3,5,4,1,3,6,6,6,6,6,4],id:['AKASH']
                         },
                ]
            }
            // width={600}
            // height={10}
            margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
        />
    )
}

export default Chart