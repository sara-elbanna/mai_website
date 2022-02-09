import '../containers/Home/home.scss';

function OfferingsItem(props) {
    return (
      <div className="OfferingsItem">
            <div>
                <img className='img' src = {props.imagePath}/>
                <h3 className='title'>{props.title}</h3>
                <p className='description'>{props.content}</p>
                <div className='btn'>
                    <button>{"I'm In!"}</button>
                </div>
            </div>
      </div>
    )
  }
  
  export default OfferingsItem;