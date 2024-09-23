import Card from '../components/Card'
import Button from '../components/Button'

const content = [
    {
        header: 'Card Header 1',
        body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed maximus nunc, a scelerisque erat. Curabitur dapibus mauris ut eros vestibulum lacinia at in nisi.' 
    },
    {
        header: 'Card Header 2',
        body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed maximus nunc, a scelerisque erat. Curabitur dapibus mauris ut eros vestibulum lacinia at in nisi.'
    },
    {
        header: 'Card Header 3',
        body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed maximus nunc, a scelerisque erat. Curabitur dapibus mauris ut eros vestibulum lacinia at in nisi.'
    },
    {
        header: 'Card Header 4',
        body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed maximus nunc, a scelerisque erat. Curabitur dapibus mauris ut eros vestibulum lacinia at in nisi.'
    }
]

export default function CardPage(){
    return(
    <div>
        <Card primary content={content[0]}/>
        <Card secondary content={content[1]}/>
        <Card success content={content[2]}/>
        <Card danger content={content[3]}/>
    </div>
    )
}
