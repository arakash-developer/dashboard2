import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';

const Chart = () => {
    return (
        <BarChart
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
                        'group W',
                        'group X',
                        'group Y',
                        'group Z',
                    ]
            }]}
            series={
                [
                        { data: [3, 5, 4,1,3,2,4,1,3,5,4,1,3,2,4,1,3,5,4,1,3,6,4] },
                ]
            }
            // width={600}
            // height={300}
        />
    )
}

export default Chart