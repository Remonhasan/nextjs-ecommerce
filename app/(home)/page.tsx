import { Slider } from '@/components/home/slider'
import data from '@/lib/data'

export default async function Page() {
  return <Slider items={data.carousels} />
}