const date = new Date();
const currentTime = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
const currentDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

// create component
function Card(props) {
    const {todoTitle,todoDesc} = props;
 return <div className='card'>
            <p className='cardTitle'>{todoTitle}</p>
            <p className='cardDesc'>{todoDesc}</p>
            <p className='cardFooter'>{"Current time:" + currentTime + "  " + "Date :" + currentDate}</p>
</div>
}
export default Card;