const ImageSlide = ({ url }) => {
    const styles = {
      backgroundImage: `url(${url})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };
  
    return (
      <div className="image-slide" style={styles}></div>
    );
  }

{/* QUIZ CARD 1 */ }
{/* <div class="card-panel grey darken-2 col m3" style={{ marginLeft: "20px" }}>
    <div class="card-image">
        <img src={html_quiz} alt="html_image" style={{ marginTop: "20px" }}></img>
        <div class="card-content">
            <h5>HTML Quiz</h5>
            <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
            <a href="http://www.google.com">This is a link</a>
        </div>

    </div>
</div> */}