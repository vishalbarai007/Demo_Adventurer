import React from 'react';

function Landing7cards() {
  return (
    <>
      <div className='Landing7Card'>
        <section className="cards-wrapper">
          <div className="card-grid-space">
            <div className="num">01</div>
           <a
              className="card1"
              href="https://codetheweb.blog/2017/10/06/html-syntax/"
            >
              <div>
                <h1>PARIS</h1>
                <p>Paris is often considered one of the best travel destinations in the world because of its Rich History and Culture, Architectural Beauty...</p>
                <div className="date">#1</div>
                <div className="tags">
                  <div className="tag">EXPLORE</div>
                </div>
              </div>
            </a>
          </div>

          <div className="card-grid-space">
            <div className="num">02</div>
            <a
              className="card2"
              href="https://codetheweb.blog/2017/10/09/basic-types-of-html-tags/"
            >
              <div>
                <h1>ROME</h1>
                <p>Rome is often regarded as one of the best travel destinations in the world due to its unparalleled historical significance, cultural richness...</p>
                <div className="date">#2</div>
                <div className="tags">
                  <div className="tag">EXPLORE</div>
                </div>
              </div>
            </a>
          </div>

          <div className="card-grid-space">
            <div className="num">03</div>
            <a
              className="card3"
              href="https://codetheweb.blog/2017/10/14/links-images-about-file-paths/"
            >
              <div>
                <h1>INDIA</h1>
                <p>India is considered one of the best travel destinations in the world due to its incredible diversity in culture, landscapes, traditions, and experiences...</p>
                <div className="date">#3</div>
                <div className="tags">
                  <div className="tag">EXPLORE</div>
                </div>
              </div>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default Landing7cards;
