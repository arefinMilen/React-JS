//  const todoTitle = 'My first todo list';
const date = new Date();
const currentTime = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
const currentDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();


// const headingStyle = {
//  color: 'blue',
//  fontSize: '30px',
//  color: 'blue',
//  backgroundColor: 'yellow',
//  padding: '10px',
//  textAlign: 'center'
// }
// create component
function Card() {
 return <div className='card'>
            <p className='cardTitle'>Current time: {currentTime}</p>
            <p className='cardDesc'>Current date: {currentDate}</p>
            <p className='cardFooter'>lorem ipsum dolor sit amet...
            </p>
</div>
}
export default Card;